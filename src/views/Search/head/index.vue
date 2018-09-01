<template>
    <div class="search-head-wrapper">
        <div class="search-title">
            <div class="search">
                <Icon name="2fangdajing" class="search-icon"></Icon>
                <input type="text" v-model="keyword" placeholder="搜索些啥呢..." @change="search">
            </div>
            <div class="cancel" @click="back($router)">取消</div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    const { keyword } = this.$store.state.search
    return {
      keyword:keyword
    }
  },
  methods: {
    search(){
      if(!keyword){
        this.$alert('搜索条件不能为空');
        return;
      }
      this.$store.state.search.pageindex = 1;
      this.$store.state.search.loadingMore = false;
      const { keyword,pageindex } = this.$store.state.search;
      this.$store.dispatch('getSearchList',{keywords:keyword,pageindex:pageindex})
    }
  }
};
</script>
<style lang="less" scoped>
.search-title {
  width: 100%;
  height: 0.5rem;
  padding: 0 0.1rem;
  .search {
    width: e("calc(100% - 0.45rem)");
    position: relative;
    color: @font-gray;
    .search-icon {
      position: absolue;
      top: 50%;
      left: 0.06rem;
      transform: translateY(-50%);
    }
    .search-input {
      width: 100%;
      height: 0.3rem;
      border: none;
      outline: none;
      background: @bg-color;
      text-indent: 0.3rem;
      border-radius: 0.04rem;
      font-size: 0.12rem;
      color: #ccc;
    }
  }
  .cancel {
    z-index: 9;
    color: #409eff;
  }
}
</style>


