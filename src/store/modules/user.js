import {
  Cookie
} from '@/utils/storage'
import axios from 'axios';
const user = {
  state: {
    isLogin: false,
    user: {
      name: Cookie.get('username') || '',
      avator: Cookie.get('avator') || ''
    },
    footerBarList: [{
        title: '首页',
        icon: 'home',
        path: '/home'
      },
      {
        title: '西瓜视频',
        icon: 'video',
        path: '/video'
      },
      {
        title: '微头条',
        icon: 'comment',
        path: '/headline'
      },
      {
        title: `${Cookie.get('username') ? '我的' : '未登录'}`,
        icon: `${Cookie.get('username')} ? 'account' : 'account1'`,
        path: '/account'
      }
    ]
  },
  actions: {
    login({
      commit
    }, data) {
      return new Promise(async (resolve, reject) => {
        try {
          const {
            data
          } = await axios.post('login', data);
          console.log(data);
          commit('LOGIN',data)
          resolve(data);
        } catch (error) {
          reject(error)
        }
      })
    },
    esc({
      commit
    }) {
      commit('ESC')
    }
  },
  mutations: {
    LOGIN(state,data){
      const { username } = data;
      const user = {
        name:username,
        avator:require('assets/images/avatar.png')
      }
      state.user = user;
      Cookie.set(user)
    },
    ESC(state) {
      state.user = {
        name: '',
        avator: ''
      }
      Cookie.remove(['name', 'avator'])
    }
  }
}
export default user
