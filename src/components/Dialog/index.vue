<template>
    <div class="dialog-wrapper">
        <div class="dialog-box" v-show="show">
            <div class="dialog-hd">
                <strong>{{ title }}</strong>
            </div>
            <div class="dialog-bd">
                {{ content }}
            </div>
            <div class="dialog-ft">{{ btn }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            btn:'确定',
            content:'',
            show:true,
            title:'提示',
        }
    },
    props: {
        content:{
            type:string,
            default:'请先登录!'
        }
    }
};
</script>
<style lang="less" scoped>
.dialog-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
  .dialog-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 85%;
    transform: translate(-50%, -50%);
    border-radius: 3px;
    background-color: #fafafc;
    text-align: center;
    overflow: hidden;
    .dialog-hd {
      padding: 0.16rem 0 0.1rem;
      line-height: 0.18rem;
      color: #333;
    }
    .dialog-bd {
      padding: 0 0.1rem;
      font-size: 0.15rem;
      color: #888;
      word-wrap: break-word;
      word-break: break-all;
    }
    .dialog-ft {
      position: relative;
      margin-top: 0.2rem;
      line-height: 0.42rem;
      font-size: 0.17rem;
      color: #0bb20c;
      cursor: pointer;
    }
  }
}
</style>


