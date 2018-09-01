<template>
    <article class="article-wrapper">
        <div class="article-head-wrapper">
            <Icon name="jiantou" @click.native="back($router)"></Icon>
            <Icon name="More" @click.native="more"></Icon>
        </div>
        <div class="article-body-wrapper">
            <div class="body-title-wrapper">
                <h2>{{ articleInfo.title }}</h2>
                <h3>ID: {{ articleInfo.id }}</h3>
                <div class="title-info df-sb">
                    <div class="info-a">
                        <div class="avatar bg-cover-all" :style="{backgroundImage:url(`${articleInfo.avatar}`)}"></div>
                        <div class="infos">
                            <h6>{{ articleInfo.source }}</h6>
                            <p>{{ articleInfo.time }}小时前</p>
                        </div>
                    </div>
                    <div class="like-box like-n border-half" :class="articleInfo.attention ? 'like-n border-half' : 'like-y'" @click="articleInfo.attention = !articleInfo.attention">{{ articleInfo.attention ? '已关注' : '关注'}}</div>
                </div>
            </div>
            <div class="body-content-wrapper">
                <p class="article-intro">{{ articleInfo.intro }}</p>
            </div>
            <div class="body-bottom-wrapper">
                <div class="tags">
                    <div class="tag" v-for="(tag,i) in articleInfo.tags" :key="i">
                        {{ tag }}
                    </div>
                </div>
                <div class="like-container df-sa">
                    <div class="like df-c" :class="articleInfo.isLike ? 'like-y' : ''" @click="toggleLike(articleInfo)">
                        <Icon name="zan"></Icon>
                        <span>{{ articleInfo.like_num }}</span>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    more() {
      this.$alert("没有更多信息哦");
    },
    async getArticle() {
      const { id } = this.$router.params;
      this.$showLoading();
      await this.$store.dispatch("getArticleInfo", { id: id });
    },
    toggleLike(articleInfo) {
      const { isLike } = articleInfo;
      isLike && articleInfo.like_num++;
      articleInfo.isLike = !articleInfo.isLike;
    }
  },
  mounted() {
    this.getArticle();
  },
  computed: {
    ...mapGetters(["articleInfo"])
  },
  watch: {
    async $route() {
      const { id } = this.$router.params;
      this.$showLoading();
      await this.$store.dispatch("getArticleInfo", { id: id });
      this.$hideLoading();
    }
  }
};
</script>
<style lang="less" scoped>
.article-wrapper {
  padding: 0 0.1rem;
  .article-head-wrapper {
    width: 100%;
    height: 0.5rem;
    font-size: 0.25rem;
    h2 {
      margin: 0.1rem 0;
    }
  }
  .article-body-wrapper {
    .title-info {
      .info-a {
        & > * {
          display: inline-block;
          vertical-align: middle;
          font-size: 0.12rem;
        }
        .avatar {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
        }
        .time {
          color: #ccc;
        }
      }
      .like-box {
        padding: 0.06rem 0.15rem;
        border-radius: 0.04rem;
        font-size: 0.14rem;
      }
      .like-y {
        color: #f4f4f4;
        background-color: @theme-bg-red;
      }
      .like-n {
        color: #bbb;
      }
    }
  }
  .body-content-wrapper {
    .article-intro {
      margin: 0.2rem 0;
      line-height: 0.25rem;
      font-size: 0.16rem;
    }
  }
  .body-bottom-wrapper {
    .tags {
      .tag {
        display: inline-block;
        margin-right: 0.15rem;
        margin-bottom: 0.15rem;
        padding: 0.06rem 0.1rem;
        background: #ccc;
        color: #333;
        border-radius: 0.04rem;
        font-size: 0.12rem;
      }
    }
    .like-container {
      height: 0.6rem;
      & > * {
        width: 1rem;
        height: 0.3rem;
        font-size: 0.12rem;
        border: 1px solid #ccc;
        border-radius: 0.15rem;
        svg {
          font-size: 0.16rem;
        }
        span {
          margin-left: 0.1rem;
        }
      }
      .like-y {
        color: @theme-red;
        border-color: @theme-red;
      }
    }
  }
}
</style>


