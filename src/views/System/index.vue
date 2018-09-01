<template>
    <div class="system-wrapper">
        <HeaderBar title="系统设置"></HeaderBar>
        <div class="box border-half">
            <div class="li df-sb border-half-bottom" v-for="(item,index) in systemTopList" :key="index">
                <span class="li-title">{{ item.title }}</span>
            </div>
        </div>
        <div class="box border-half">
            <div class="li df-sb border-half-bottom" v-for="(item,index) in systemMiddleList" :key="index">
                <span class="li-title">{{ item.title }}</span>
                <Icon :name="item.icon" v-if="item.icon"></Icon>
                <SwitchCheck v-if="item.switchType" v-model="info.list" @click.native="switchList"></SwitchCheck>
                <small v-if="item.smallTitle">{{ item.smallTitle }}</small>
            </div>
        </div>
        <div class="box border-half">
            <div class="li df-sb border-half-bottom" v-for="(item,index) in systemBottomList" :key="index">
                <span class="li-title">{{ item.title }}</span>
                <Icon :name="item.icon"></Icon>
            </div>
        </div>
        <div class="box esc" @click="esc">退出登录</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Local } from "@/utils/storage";
export default {
  data() {
    return {
      info: {
        send: Local.get("system_send") || false,
        list: Local.get("system_list") || false
      }
    };
  },
  methods: {
    switchList() {
      const { send, list } = this.info;
      Local.set("system_send", send);
      Local.set("system_list", list);
    },
    esc() {
      this.$store.dispatch("esc");
      // 重置底部菜单 我的 为 未登录
      this.$set(this.$store.state.user.footerBarList, 3, {
        title: "未登录",
        icon: "account",
        path: "/account"
      });
      this.$router.animate = 2;
      this.$router.push("/account");
    }
  },
  computed: {
    ...mapGetters(["systemTopList", "systemMiddleList", "systemBottomList"])
  }
};
</script>
<style lang="less" scoped>
.system-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  .box {
    margin-top: 0.1rem;
    padding-left: 0.1rem;
    background: #fff;
    &:before {
      border-left: none;
      border-right: none;
    }
    :last-child {
      &:before {
        border-bottom: none;
      }
    }
    .li {
      width: 100%;
      height: 0.4rem;
      font-size: 0.14rem;
      color: #333;
      padding-right: 0.1rem;
    }
    svg {
      color: #bbb;
    }
    small {
      color: @font-gray;
      font-size: 0.12rem;
    }
  }
  .esc {
    text-align: center;
    line-height: 0.4rem;
    margin-top: 0.3rem;
    color: @theme-red;
  }
}
</style>


