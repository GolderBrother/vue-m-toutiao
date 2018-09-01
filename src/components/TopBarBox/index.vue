<template>
    <div class="top-bar-box">
        <Icon name="close" class="close" @click.native="$emit('close')"></Icon>
        <div class="self-box">
            <div class="title df-sb">
                <div class="title-l">
                    <span>我的频道</span>
                    <small>点击删除以下频道</small>
                </div>
            </div>
            <ul class="cf">
                <li class="fl" v-for="(news,index) in newsList" :key="index" @click="$store.dispatch('delHomeTag',news)">
                    {{ news.title }}
                </li>
            </ul>
        </div>
        <div class="recommend-box">
            <div class="title df-sb">
                <div class="title-l">
                    <span>我的频道</span>
                    <small>点击删除以下频道</small>
                </div>
            </div>
            <ul class="cf">
                <li class="fl" v-for="(news,index) in allNewsList" :key="index" @click="$store.dispatch('addHomeTag',news)">
                    {{ news.title }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { newsList as allNewsList } from "@/store/modules/classify";
export default {
  computed: {
    ...mapGetters(["newsList"]),
    allNewsList() {
      // 过滤出未筛选出的频道
      allNewsList.filter(
        news => !this.newsList.some(n => n.title === news.title)
      );
    }
  }
};
</script>
<style lang="less" scoped>
.tap-bar-box {
  position: fixed;
  top: 100%;
  left: 0;
  padding: 0.34rem 0.1rem 0.1rem;
  height: e("calc(100% - .1rem)");
  background-color: #f5f5f5;
  z-index: 99;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  transition: top 0.2s ease-out;
  text-align: left;
  .close {
    position: absolute;
    top: 0.05rem;
    left: 0.05rem;
    padding: 0.05rem;
    font-size: 0.24rem;
  }
  .title {
    span {
      color: @font-gray;
    }
  }
  ul {
    li {
      width: 25%;
      margin: 0.06rem 0;
      a {
        display: block;
        width: 0.8rem;
        text-align: center;
        line-height: 0.35rem;
        background: #f0f0f0;
        color: @font-gray;
      }
    }
  }
  .recommend-box {
    margin-top: 0.2rem;
  }
}
</style>

