<template>
    <div class="msg-wrapper" id="view">
        <HeaderBar :title="title"></HeaderBar>
        <NoneDataTwo></NoneDataTwo>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'消息通知'
        }
    }
}
</script>
<style lang="less" scoped>

</style>


