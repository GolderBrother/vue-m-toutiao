<template>
    <div class="headeline-top-bar df-c">
        <div class="item border-half-right" v-for="(item,index) in list" :key="index" @click="show(item.title)">
            <Icon :name="item.icon"></Icon>
            <span>{{ item.text }}</span>
        </div>
        <TextComponent :class="{'text-active':textBol}" @close="textBol = false"></TextComponent>
    </div>
</template>
<script>
import { dictionary } from "@/utils/dictionary.js";
import TextComponent from "@/views/HeadLine/shareText";
export default {
  data() {
    return {
      textBol: false,
      list: [
        { title: "文字", icon: "24" },
        { title: "图片", icon: "tupian" },
        { title: "上传视频", icon: "shipin" }
      ]
    };
  },
  methods: {
    show(title) {
      let user = this.$store.state.user.user.name;
      if (!user) {
        this.$alert({ content: dictionary.pleaseLogin }).then(() => {
          // 这地方正确做法是调用登录接口，简单做法就先不做，后面补上
          this.$store.state.user.isLogin = true;
        });
        return;
      }
      if (title === "文字") {
        this.textBol = true;
      } else if (title === "图片") {
        this.$alert(dictionary.noPictureModule);
      } else if (title === "上传视频") {
        this.$alert(dictionary.noVideoModule);
      }
    }
  },
  components: {
    TextComponent
  }
};
</script>
<style lang="less" scoped>
.headeline-top-bar {
  padding: 0.1rem 0;
  .text-active {
    top: 0;
  }
}
.item {
  width: e("calc(100% / 3)");
  text-align: center;
  font-size: 0.16rem;
  height: 0.2rem;
  line-height: 0.2rem;
  & > * {
    display: inline-block;
    vertical-align: middle;
  }
  svg {
    font-size: 0.2rem;
  }
  &:nth-child(1) {
    svg {
      color: @theme-blue;
    }
  }
  &:nth-child(2) {
    svg {
      color: @theme-green;
    }
  }
  &:nth-child(3) {
    svg {
      color: @theme-red;
    }
  }
}
</style>


