import Vue from 'vue';
Vue.directive('title',{
    // binging为一个对象，value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
    inserted:function(el,binding){
        document.title = binding.value
    }
})