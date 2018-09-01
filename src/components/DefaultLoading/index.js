import Vue from 'vue'
import LoadingComponent from './index.vue'

// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
//extend 是构造一个组件的语法器.传入参数，返回一个组件.

let LoadingConstructor = Vue.extend(LoadingComponent);

let initComponent;
export const showLoading = (option = {}) => {
  initComponent = new LoadingConstructor();
  // 创建 Profile 实例，并挂载。
  initComponent.$mount();
  document.querySelector(option.container || 'body').appendChild(initComponent.$el)
}

export const hideLoading = () => {
    initComponent.$el.parentNode.removeChild(initComponent.$el)
}
