import axios from 'axios'
import qs from 'qs'

// 请求的根路径
axios.defaults.baseURL = 'https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/';
// 请求头允许携带cookie，服务端需要配置 response.addHeader("Access-Control-Allow-Credentials", "true");
axios.defaults.withCredentials = true;
// axios请求前拦截
axios.interceptors.request.use(config => config, err => Promise.reject(err))
// axiosing响应前拦截
axios.interceptors.response.use(response => response, err => Promise.reject(err))

// 检查status值
checkStatus = (res) => {
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  }
}

// 检查code值
checkCode = (res) => {
  const {
    code,
    msg
  } = res;
  if (code === 0) {
    throw new Error(msg)
  }
  return res
}

export default {
  get(url, params) {
    if (!url) return;
    return axios({
      method: 'get',
      url: url,
      params,
      timeout: 30000
    }).then(res => checkStatus(res)).then(res => checkCode(res))
  },
  post(url, data) {
    if (!url) return;
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 30000
    }).then(res => checkStatus(res)).then(res => checkCode(res))
  },
  postFile(url, data) {
    if(!url) return;
    return axios({
        method:'post',
        url,
        data
    }).then(res => checkStatus(res)).then(res => checkCode(res))
  }
}
