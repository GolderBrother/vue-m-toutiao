<template>
    <div :class="isLogin ? 'login-active login-wrapper' : 'login-wrapper'">
        <Icon name="close" @click="$emit('close')"></Icon>
        <h2 class="login-title">登陆你的头条，精彩永不消失</h2>
        <div class="input username">
            <input type="text" v-model="username" placeholder="用户名随便填">
            <span :class="{'animate':username_msg}">{{ username_msg }}</span>
        </div>
        <div class="input">
            <input type="password" v-model="password" placeholder="密码: 123456">
            <span :class="{'animate':password_msg}">{{ password_msg }}</span>
        </div>
        <button @click="login" class="login-btn">进入头条</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      username: "",
      password: "",
      username_msg: "",
      password_msg: ""
    };
  },
  methods: {
    async login() {
      const { username, password } = this;
      this.username_msg = !username ? "请输入用户名" : "";
      this.password_msg = !password
        ? "请输入密码"
        : password != "123456" ? "请输入密码：123456" : "";
      if (!username) return;
      if (!password) return;
      this.$showLoading();
      try {
        const res = await this.$store.dispatch("login", {
          username,
          password
        });
        console.log(res);
        this.$hideLoading();
        this.$set(this.$store.state.user.footerBarList, 3, {
          title: "我的",
          icon: "account1",
          path: "/account"
        });
        // 发出一个关闭的事件
        this.$emit("close");
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed:{
      ...mapGetters([
          isLogin
      ])
  }
};
</script>
<style lang="less" scoped>
.login-wrapper {
  position: fixed;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
  border-top-right-radius: 0.05rem;
  border-top-left-radius: 0.05rem;
  opacity: 0;
  text-align: center;
  transition: top 0.2s ease-out;
  &.login-active {
    opacity: 1;
    top: 0;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 0.4rem;
    height: 0.4rem;
    padding: 0.1rem;
    font-size: 0.2rem;
    color: #555;
  }
  .login-title {
    margin: 0.3rem 0;
    color: #333;
    font-size: 0.2rem;
    text-align: center;
  }
  .input {
    position: relative;
    width: 80%;
    height: 0.4rem;
    margin: 0 auto 0.3rem;
    input {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      text-indent: 0.15rem;
      outline: none;
      font-size: 0.14rem;
      color: #333;
      span {
        position: absolute;
        left: 0.15rem;
        top: 0.45rem;
        font-size: 0.1rem;
        color: @theme-red;
        opacity: 0;
        &.animate {
          opacity: 1;
          animation: swing 0.5s linear;
        }
        @keyframes swing {
          10% {
            transform: translateX(-0.06rem);
          }
          // 20% {transform: translateX(0.1rem);}
          30% {
            transform: translateX(0.06rem);
          }
          // 40% {transform: translateX(0.08rem);}
          50% {
            transform: translateX(-0.06rem);
          }
          // 60% {transform: translateX(0.06rem);}
          70% {
            transform: translateX(0.06rem);
          }
          80% {
            transform: translateX(-0.04rem);
          }
          90% {
            transform: translateX(0.04rem);
          }
          // 95% {transform: translateX(0.02rem);}
          100% {
            transform: translateX(0rem);
          }
        }
      }
    }
  }
  .login-btn {
    margin-top: 0.2rem;
    width: 80%;
    height: 0.4rem;
    border-radius: 0.2rem;
    line-height: 0.4rem;
    color: #f4f4f4;
    border: none;
    background-color: @theme-bg-red;
  }
}
</style>


