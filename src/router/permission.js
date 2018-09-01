import Vue from 'vue';
import store from '../store';
import router from './index';

// 路由跳转前拦截
router.beforeEach((to, from, next) => {
  const {
    meta: {
      login,
      page
    }
  } = to;
  //先判断前往的界面是否需要登陆
  if (login) {
    // 判断是否已登录
    const username = store.state.user.user.name
    if (username) {
      next();
    } else {
      Vue.prototype.$alert('请先登录').then(() => {
        // 设置为需要登录的状态
        store.state.user.isLogin = true;
      })
    }
  } else {
    if (page) {
      //开启页面加载状态 加载中...
      store.state.article.pageLoading = true
    }
    next()
  }
})

router.afterEach((to, from) => {
  const {
    name,
    meta: {
      page
    }
  } = to;
  if (page) {
    //关闭页面加载状态 加载中...
    store.state.article.pageLoading = false;
  }
  document.title = name
})

export default router
