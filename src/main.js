// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/permission'
import store from './store'
import customizedComponent from './customized-component'

// 工具类
import '@/utils/rem.js'
import '@/utils/iconfont.js'
Vue.config.productionTip = false

// 样式类
import './styles/index.css'
import './styles/index.less'

// 指令 directive
import './directive'

// swiper轮播
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper)

// Cookie
import { Cookie } from './utils/storage'
Vue.prototype.Cookie = Cookie

// 全局引入并使用自定义组件
import customizedComponent from '@/utils/customizedComponent'
Vue.use(customizedComponent)

// 返回前一页 
Vue.prototype.back = router => {
  router.animate = 2;
  const history = window.history;
  // 这边需要判断是否存在路由历史记录
  if(history.length>0){
    history.back();
  }else{
    router.push('/')
  }
}

// 跳转文章页
Vue.prototype.skip = (router,id) => {
  router.push(`/article/${id}`)
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
