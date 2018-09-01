<template>
    <article class="home-wrapper">
        <!-- 顶部Tabs -->
        <TopBar></TopBar>
        <!-- loading -->
        <div class="swiper-mask df-c" v-show="newsLoading">
          <CircleLoading></CircleLoading>
        </div>
        <!-- 中间内容部分 slideChangeTransitionEnd:过渡动画结束后执行，即滑块活动停止后执行-->
        <swiper ref="swiper-wrapper" id="swiper-container" @slideChangeTransitionEnd="end">
          <swiper-slide v-for="(news,index) in newsList" :key="index">
            <section class="swiper-box">
              <ul v-if="news.list && news.list.length > 0">
                <li v-for="(item,index2) in news.list" :key="index2" class="item border-half-bottom" @click="skip($router,item.id)">
                  <div v-if="items.images.length == 0">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.intro }}</p>
                    <div class="df-sb">
                      <div class="small-box">
                        <span>{{ item.source }}</span>
                        <span>评论: {{ item.comment }}</span>
                        <span>{{ item.time }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="df-sb" v-else-if="item.images.length == 1">
                    <div class="item-l">
                      <h4>{{ item.title }}</h4>
                      <p>{{ item.intro }}</p>
                      <div class="df-sb">
                        <div class="small-box">
                          <span>{{ item.source }}</span>
                          <span>评论: {{ item.comment }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="item-r">
                      <img :src="items.images[0]" alt="">
                    </div>
                  </div>
                  <div v-else>
                    <div class="item-t">
                      <h4>{{ item.title }}</h4>
                      <p>{{ item.intro }}</p>
                    </div>
                    <div class="item-b df-sb">
                      <img :src="img" v-for="(img,index) in item.images" :style="{width: item.images.length === 2 ? '40%' : '25%'}" :key="index" alt="">
                    </div>
                    <div class="df-sb">
                      <div class="small-box">
                        <span>{{ item.source }}</span>
                        <span>评论: {{ item.comment }}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <NoneData v-if="news.list && news.list.length > 0"><NoneData>
            </section>
          </swiper-slide>
        </swiper>
    </article>
</template>
<script>
import TopBar from "./topBar";
import NoneData from "@/component/NoneData"
import { swiper, swiperSlide } from "swiper";
import { mapGetters } from "vuex";
export default {
  components: {
    TopBar,
    NoneData,
    swiper,
    swiperSlide
  },
  computed: {
    // 获取 swiper 元素
    swiper() {
      return this.$refs["swiper-wrapper"].swiper;
    },
    ...mapGetters([
      "newsList",
      "newsLoading",
      "homeNewsIndex",
      "homeNewsPrevIndex",
      "homeEnd"
    ])
  },
  methods: {
    async end() {
      this.$store.home.state.newsIndex = this.swiper.activeIndex;
      this.$store.home.state.newsPrevIndex = this.swiper.previousIndex;
      let data = await this.$store.dispatch(
        "getHomeList",
        this.newsList[this.homeNewsIndex]
      );
    }
  }
};
</script>
<style lang="less" scoped>
</style>


