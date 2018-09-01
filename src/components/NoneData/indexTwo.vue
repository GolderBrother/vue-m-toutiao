<template>
    <div class="nonedata-wrapper">
        <Icon name="icon2"></Icon>
        <span>{{ emptyMsg }}</span>
    </div>
</template>
<script>
export default {
  data() {
    return {
      emptyMsg: "这家伙太懒！什么也没留下"
    };
  }
};
</script>
<style lang="less" scoped>
.nonedata-wrapper {
  margin-top: 0.5rem;
  text-align: center;
  svg {
    font-size: 0.7rem;
  }
  span {
    margin-left: 0.2rem;
    font-size: 0.16rem;
  }
  & > * {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.14rem;
    color: @font-gray;
  }
}
</style>


