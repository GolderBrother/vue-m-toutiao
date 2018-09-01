<template>
    <div class="header-wrapper df-sb">
        <div class="logo df-c">
            <img src="@/assets/images/logo.png" alt="logo">
        </div>
        <div class="search">
            <Icon name='' class="search-icon"></Icon>
            <input class="search-input" type="text" @click="skipSearch" placeholder="搜索些啥呢" readonly>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    skipSearch() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="less" scoped>
.header-wrapper {
  height: 0.5rem;
  background-color: @theme-bg-red;
  .logo {
    width: 1.3rem;
    height: 100%;
    img {
      width: 1rem;
    }
  }
  .search {
    width: e("calc(100% - 1.3rem)");
    position: relative;
    color: @font-gray;
    .search-icon {
      position: absolute;
      top: 50%;
      left: 0.06rem;
      transform: translateY(-50%)
    }
    .search-input{
        width: 90%;
        height: 0.3rem;
        border: none;
        outline: none;
        background: @bg-color;
        text-indent: 0.4rem;
        border-radius: 0.04rem;
    }
  }
}
</style>

