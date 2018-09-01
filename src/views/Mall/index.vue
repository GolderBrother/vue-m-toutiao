<template>
    <div class="mall-wrapper">
        <HeaderBar :title="title"></HeaderBar>
        <div class="recommend">
            <h4 class="recommend-title">精选推荐</h4>
            <div class="recommend-box df-sb">
                <div class="item" v-for="(item,index) in recommendList" :key="index">
                    <h5>{{ item.title }}</h5>
                    <span>{{ item.subTitle }}</span>
                </div>
            </div>
            <div class="service-list-box border-half">
                <h4>头条服务</h4>
                <div class="li df-sb border-half-bottom" v-for="(item,index) in serviceList" :key="index" @click="goService(item)">
                    <span>{{ item.title }}</span>
                    <Icon name="arrow"></Icon>
                </div>
            </div>
        </div>
        <div class="tip">客服电话服务工作时间：看心情</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "头条商城",
      recommendList: [
        { title: "放心购", subTitle: "放心买好货" },
        { title: "火车票", subTitle: "春运抢票" }
      ],
      serviceList: [
        { title: "邀请有礼" },
        { title: "卡包" },
        { title: "免流量服务" },
        { title: "今日特卖" },
        { title: "火车票" },
        { title: "股票" },
        { title: "我的订单" },
        { title: "我的交易" }
      ]
    };
  },
  methods: {
    goService(item) {
      const { title } = item;
      this.$alert(title);
    }
  }
};
</script>
<style lang="less" scoped>
.recommend {
  padding: 0.1rem;
  background-color: #fff;
  .recommend-box {
    .item {
      width: 47%;
      padding: 0.4rem 0;
      background-color: #eee;
      padding-left: 0.1rem;
      h5 {
        font-size: 0.2rem;
        color: #333;
      }
      span {
        font-size: 0.16rem;
        color: #aaa;
        line-height: 0.24rem;
      }
    }
  }
  .service-list-box {
    margin-top: 0.1rem;
    padding-left: 0.1rem;
    background: #fff;
    h4 {
      line-height: 0.4rem;
    }
    .li {
      width: 100%;
      height: 0.4rem;
      font-size: 0.14rem;
      color: #333;
      padding-right: 0.1rem;
      svg {
        color: #bbb;
      }
    }
  }
}
.tip {
  text-align: center;
  font-size: 0.12rem;
  color: @font-gray;
  margin-top: 0.2rem;
}
</style>


