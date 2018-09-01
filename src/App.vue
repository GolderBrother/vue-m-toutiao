<template>
  <div id="app">
    <transition :name="animate">
      <keep-alive>
        <router-view id="view"/>
      </keep-alive>
    </transition>
    <Login :class="{'login-active':isLogin}" @close="$store.state.user.isLogin=false" ></Login>
    <FullCircleLoading v-show="pageLoading"></FullCircleLoading>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Login from "@/components/Login/index";
export default {
  name: "App",
  data() {
    return {
      animate: ""
    };
  },
  watch: {
    // 监听路由变化，配置切换动画
    $route(to, from) {
      /*
      0: 不做动画
      1: 左切换 'slide-left'
      2: 右切换 'slide-right'
      3: 上切换 'slide-top'
      4: 下切换 'slide-bottom'
        */
      const { meta: { slide } } = to;
      let animateType = this.$router.animate || slide;
      if (!animateType) {
        this.animate = "";
      } else {
        switch (animateType) {
          case 1:
            this.animate = "slide-left";
            break;
          case 2:
            this.animate = "slide-right";
            break;
          case 3:
            this.animate = "slide-top";
            break;
          case 4:
            this.animate = "slide-bottom";
            break;
          default:
            this.animate = "slide-left";
        }
        this.$router.animate = 0;
      }
    }
  },
  computed: {
    ...mapGetters(["isLogin", "pageLoading"])
  }
};
</script>

<style lang="less" scoped>
.full-box(@w:100%,@h:100%) {
  width: @w;
  height: @h;
}
#app {
  .full-box();
  .login-active {
    opacity: 1;
    top: 0;
  }
}
#view {
  position: absolute;
  top: 0;
  left: 0;
  .full-box();
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
// 进入：往左边
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
// 出来：往右边
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
// 进入：往上边
.slide-top-enter,
.slide-bottom-leave-active {
  opacity: 0;
  transform: translate(0, 100%);
}
// 进入：往下边
.slide-top-leave-active,
.slide-bottom-enter {
  opacity: 0;
  transform: translate(0, -100%);
}
.slide;
</style>
