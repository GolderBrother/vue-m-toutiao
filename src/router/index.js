import Vue from 'vue'
import Router from 'vue-router'
Router.prototype.animate = 0;
// 动态加载组件
const __import__ = file => () =>
  import (`@/views/${file}.vue`);
Vue.use(Router)

/*
    slide: 页面切换动画
    login: 是否需要登陆
 */
export const asyncRouterMap = [{
    path: '/',
    name: '首页',
    meta: {
      page: true
    },
    component: __import__('Layout/index'),
    redirect: '/home',
    children: [{
      path: '/',
      component: __import__('Home/index'),
      name: '首页'
    }]
  },
  {
    path: '/video',
    name: '视频',
    meta: {
      page: true
    },
    component: __import__('Layout/index'),
    redirect: '/',
    children: [{
      path: '/',
      component: __import__('Video/index'),
      name: '视频'
    }]
  }, {
    path: '/headline',
    name: '微头条',
    meta: {
      page: true
    },
    component: __import__('Layout/index'),
    redirect: '/',
    children: [{
      path: '/',
      component: __import__('Headline/index'),
      name: '微头条'
    }]
  }, {
    path: '/account',
    name: '个人中心',
    meta: {
      page: true
    },
    component: __import__('Account/index')
  }, {
    path:'/article/:id',
    name:'文章',
    meta:{
      slide:1
    },
    component:__import__('Article,index')
  },{
    path: '/system',
    name:'系统设置',
    meta: {
      slide: 1,
      login: true
    },
    component: __import__('System/index')
  },{
    path:'/search',
    name:'搜索',
    meta:{
      slide:1
    },
    component:__import__('Search/index')
  }, {
    path:'/msg',
    name:'消息通知',
    meta:{
      slide: 1 ,
      login:true
    },
    component:__import__('Msg/index')
  },{
    path:'/jd',
    name:'京东商城',
    meta:{
      slide: 1,
      login:true
    },
    component: __import__('JingDong/index')
  },{
    path:'/feedback',
    name:'用户反馈',
    meta:{
      slide: 1 ,
      login:true
    },
    component:__import__('FeedBack/index')
  },{
    path:'/search',
    name:'搜索',
    meta:{
      slide:1
    },
    component:__import__('Search/index')
  },{
    path:'/',
    name:'我的记录',
    meta:{
      login:true,
      slide:1
    },
    component:__import__('Record/index')
  }
];

export default router = new Router({
  routes: asyncRouterMap
})
