import Vue from 'vue'
import AlertComponent from './index.vue'

const merge = ($data,option) => {
    for(let prop in option){
        // 判断有无自身属性,忽略继承属性
        for(let prop in option){
            if($data.hasOwnProperty(prop)){
                $data[prop] = option[[prop]]
            }
        }
    }
}

// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。返回一个组件
let AlertConstructor = Vue.extend(AlertComponent)

const Alert = (option = {}) => {
    // 实例化对象
    let initComponent = new AlertConstructor();
    if(document.querySelector('.alert-mask')){
        return;
    }
    // 挂载使用
    initComponent.$mount();

    if(typeof option !== 'object'){
        initComponent.content = option
    }else{
        merge(initComponent.$data,option)
    }

    return new Promise((resolve,reject) => {
        initComponent.success = () => {
            initComponent.show = false;
            resolve()
        };
        document.querySelector(option.container || 'body').appendChild(initComponent.$el)
    })

}

export const Alert

