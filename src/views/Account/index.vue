<template>
    <article id="account-wrapper">
        <div class="account-container">
            <HeadWrapper></HeadWrapper>
            <BodyWrapper></BodyWrapper>
        </div>
        <FooterBar></FooterBar>
    </article>
</template>
<script>
import HeadWrapper from "./head";
import BodyWrapper from "./body";
import FooterBar from "views/Layout/footerBar";
export default {
  components: {
    HeadWrapper,
    BodyWrapper,
    FooterBar
  }
};
</script>
<style lang="less" scoped>
#account-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  .account-container {
    height: e("calc(100% - .5rem)");
  }
}
</style>


