<template>
    <div class="app-wrapper">
        <header-bar></header-bar>
        <!-- main -->
        <router-view class="main-wrapper">

        </router-view>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { headerBar,footerBar } from './index.js'
export default {
    components:{
        headerBar,
        footerBar
    }
}
</script>
<style lang="less" scoped>
    .app-wrapper{
        width: 100%;
        height: 100%;
        .main-wrapper{
            position: relative;
            width: 100%;
            // height headerBar:0.5rem footerBar:0.5rem
            height:e("calc(100% - 1rem)");
        }
    }
</style>


