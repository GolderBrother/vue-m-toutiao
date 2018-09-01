<template>
    <section class="record-wrapper">
        <!-- title -->
        <HeadBar :title="title"></HeadBar>
        <!-- tabs -->
        <div class="tabs df-c border-half-top">
            <div class="tab" v-for="(type,index) in recordTypes" :key="index" :class="{'tab-active':index === recordIndex}" @click="getRecord(index)"></div>
        </div>
        <!-- loading -->
        <div class="swiper-mask df-c" v-show="recordLoading">
            <CircleLoading></CircleLoading>
        </div>
        <swiper ref="swiper-wrapper" id="swiper-container" @slideChangeTransitionEnd="end">
           <swiperSlide v-for="(type,index) in recordTypes" :key="index">
                <section class="swiper-box">
                    <p>昨天总共阅读了22篇文章</p>
                    <ul>
                        <li v-for="(item,i) in type" :key="i">
                            <div v-if="item.images.length === 0">
                                <h4>{{ item.title }}</h4>
                                <p class="wes-3">{{ item.intro }}</p>
                                <div class="df-sb">
                                    <div class="small-box">
                                        <span>{{ item.source }}</span>
                                        <span>评论: {{ item.comment }}</span>
                                        <span>{{ item.time }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="df-sb" v-if="item.images.length === 1">
                                <div class="item-l">
                                    <h4>{{ item.title }}</h4>
                                    <p class="wes-3">{{ item.intro }}</p>
                                    <div class="df-sb">
                                        <div class="small-box">
                                            <span>{{ item.source }}</span>
                                            <span>评论: {{ item.comment }}</span>
                                            <span>{{ item.time }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-r">
                                    <img :src="item.images[0]" alt="">
                                </div>
                            </div>
                            <div v-else>
                                <div class="item-t">
                                    <h4>{{ item.title }}</h4>
                                    <p class="wes-3">{{ item.intro }}</p>
                                </div>
                                <div class="item-b df-sb">
                                    <img :src="img" :alt="img" v-for="(img,imgIndex) in item.images" :key="imgIndex" :style="{width:item.images.length === 2 ? '40%' : '25%'}">
                                </div>
                                <div class="item-f df-sb">
                                    <div class="small-box">
                                        <span>{{ item.source }}</span>
                                        <span>评论: {{ item.comment }}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>   
            </swiperSlide> 
        </swiper>
    </section>
</template>
<script>
import { mapGetters } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      title: "收藏/历史"
    };
  },
  methods: {
    slideTab(index) {
      this.$store.state.record.index = index || 0;
      const { recordTypes, recordIndex } = this;
      this.$store.dispatch("getRecordList", recordTypes[recordIndex]);
      this.swiper.slide(index);
    },
    getRecord(index) {
      this.slideTab(index);
    },
    async end() {
      // this.swiper.activeIndex  获取当前swiper的下标
      this.$store.state.record.index = this.swiper.activeIndex;
      const { recordTypes, recordIndex } = this;
      await this.$store.dispatch("getRecordList", recordTypes[recordIndex]);
    }
  },
  computed: {
    swiper() {
      return this.$refs["swiper-wrapper"].swiper;
    },
    ...mapGetters(["recordTypes", "recordIndex","recordLoading"])
  },
  watch: {
    $route() {
      const { params: { type } } = this.$route;
      this.slideTab(type);
    }
  }
};
</script>
<style lang="less" scoped>
.tabs {
  background-color: #fff;
  .tab {
    width: 0.7rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.14rem;
    margin: 0 0.15rem;
    border-bottom: 0.02rem solid transparent;
  }
  .tab-active {
    color: @theme-red;
    border-bottom: 0.02rem solid @theme-red;
  }
}
#swiper-container {
  width: 100%;
  height: e("100% - .9rem");
  .swiper-box {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .tip {
      padding: 0 0.1rem;
      line-height: 0.4rem;
      color: @font-gray;
      font-size: 0.14rem;
    }
    .item {
      padding: 0.2rem 0.1rem;
      background-color: #fff;
      h4 {
        color: #363636;
      }
      p {
        font-size: 0.16rem;
        line-height: 0.2rem;
        margin: 0.1rem 0;
      }
      .small-box {
        & > * {
          display: inline-block;
          vertical-align: middle;
          font-size: 0.1rem;
          margin-right: 0.04rem;
          color: #999;
        }
      }
      .item-l {
        width: 70%;
        padding-right: 10px;
      }
      .item-r {
        width: 30%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>


