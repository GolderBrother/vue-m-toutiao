<template>
    <div class="feedback-wrapper" id="view">
        <HeaderBar :title="title"></HeaderBar>
        <NoneDataTwo></NoneDataTwo>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "用户反馈"
    };
  }
};
</script>
<style lang="less" scoped>
.feedback-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>


