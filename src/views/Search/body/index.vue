<template>
    <div class="search-body-wrapper" v-scroll="loadingMore">
        <div class="search-container">
            <div class="guess" v-if="searchList.length < 1">
                <div class="tip">猜你想搜的</div>
                <div class="search-menu border-half cf">
                    <ul>
                        <li v-for="(keyword,index) in keywordList" class="fl border-half" :key="index" @click="getSearchData(keyword)">{{ keyword }}</li>
                    </ul>
                </div>
            </div>
            <div class="search-box" v-else>
                <section class="item border-half-bottom" v-if="searchList.length !== 0" v-for="(item,index) in searchList" :key="index" @click="goDetail(item.id)">
                    <div class="item-box" v-if="item.images.length === 0">
                        <h4 class="item-title">{{ item.title }}</h4>
                        <p class="item-intro">{{ item.intro }}</p>
                        <div>
                            <div class="small-box">
                                <span>{{ item.source }}</span>
                                <span>评论：{{ item.comment }}</span>
                                <span>{{ item.time }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-box df-sb" v-if="item.images.length === 1">
                        <div class="item-l">
                            <h4 class="item-title">{{ item.title }}</h4>
                            <p class="item-intro">{{ item.intro }}</p>
                            <div>
                                <div class="small-box">
                                    <span>{{ item.source }}</span>
                                    <span>评论：{{ item.comment }}</span>
                                    <span>{{ item.time }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-r">
                            <img :src="item.images[0]" alt=""/>
                        </div>
                    </div>
                    <div class="item-box" v-else>
                        <div class="item-t">
                            <h4 class="item-title">{{ item.title }}</h4>
                            <p class="item-intro">{{ item.intro }}</p>
                        </div>
                        <div class="item-b df-sb">
                            <img src="" alt="" v-for="(img,index) in item.images" :key="index" :style="{width:item.images.length ? '40%' : '25%'}">
                        </div>
                        <div class="item-f">
                            <span>{{ item.source }}</span>
                            <span>评论：{{ item.comment }}</span>
                        </div>
                    </div>
                </section>
                <!-- 没有数据 -->
                <NoneData v-if="searchEnd"></NoneData>
            </div>
        </div>
        <!-- 默认的加载框 -->
        <DefaultLoading v-show="searchLoading"></DefaultLoading>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "@/utils/axios";
export default {
  data() {
    return {
      keywordList: ["vue", "react", "webpack", "angular"]
    };
  },
  methods: {
    async getSearchData(keyword) {
      this.$store.state.search.keyword = keyword;
      this.$store.state.search.pageindex = 1;
      const { keyword, pageindex } = this.$store.state.search;
      await this.$store.dispatch("getSearchList", {
        keyword: keyword,
        pageindex: pageindex
      });
    },
    async loadingMore() {
      return new Promise((resolve, reject) => {
        try {
          this.$store.state.search.pageindex++;
          const { keyword, searchPageindex } = this;
          this.$store.dispatch("getSearchList", {
            keyword: keyword,
            searchPageindex: searchPageindex
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    goDetail(id) {
      const { $router } = this;
      $router.animate = 1;
      $router.push(`/article/${id}`);
    }
  },
  computed: {
    ...mapGetters([
      "keyword",
      "searchList",
      "searchLoading",
      "searchPageindex",
      "searchEnd"
    ])
  }
};
</script>
<style lang="less" scoped>
.search-body-wrapper {
  width: 100%;
  height: e("calc(100% - .5rem)");
  .search-box {
    width: 100%;
    .item {
      padding: 0.2rem 0.1rem;
      .item-l {
        width: 70%;
        padding-right: 10px;
      }
      .item-title {
        color: @font-normal;
      }
      .item-intro {
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
      .item-r {
        width: 30%;
        img {
          width: 100%;
        }
      }
    }
  }
  .guess {
    .tip {
      padding: 0 0.1rem;
      color: #ccc;
      line-height: 0.35rem;
      font-size: 0.1rem;
    }
    ul {
      li {
        width: e("calc(100% / 2)");
        line-height: 0.35rem;
        text-align: center;
        font-size: 0.14rem;
        color: #333;
        &:before{
            border-top: none;
        }
        &:nth-child(2n){
            &:before{
                border-left:none;
            }
        }
      }
    }
  }
}
</style>


