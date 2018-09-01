import Vue from 'vue';
Vue.directive('scroll',{
    // 当被绑定的元素插入到 DOM 中时……
    inserted:function(el,binding,vnode){
        let h = el.offsetHeight,
            isLoading = false,
            // expression:字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
            cb_name = binding.expression,
            // 回调函数名
            cb = vnode.context[cb_name];
        // 监听滚动条滚动事件
        el.addEventListener('scroll',async () => {
            const st = el.scrollTop,
                ch = el.firstChild.clientHeight;
            if(h + st + 10 > ch && !isLoading){
                // 开启加载状态
                isLoading = true;
                try {
                    cb && await cb();
                } catch (error) {
                    console.error(error)
                }
                // 完毕,关闭加载状态
                isLoading = false;
            }
        })
    }
})