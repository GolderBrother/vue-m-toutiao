import Vue from 'vue'
import LoadingComponent from './full-loading.vue'

// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
let LoadingConstructor = Vue.extend(LoadingComponent)

let initComponent;
export const showCircleLoading = (option = {}) => {
    // 实例化 Vue 构造器
    initComponent = new LoadingConstructor();
    // 挂载使用
    initComponent.$mount();
    document.querySelector(option.container || 'body').appendChild(initComponent.$el)
} 

export const hideCircleLoading = () => {
    // 使用父节点来销毁自己
    initComponent.$el.parentNode.removeChild(initComponent.$el)
}
