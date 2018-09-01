<template>
    <section class="body-wrapper">
        <div :class="li `${item.class}`" v-for="(item,index) in bodyServiceList" :key="index" @click="goService(item.path)">
            <div>{{ item.title }}</div>
            <div class="df-c" v-if="item.subTitle">
                <span>{{ item.subTitle }}</span>
                <Icon :name="item.icon"></Icon>
            </div>
            <Icon v-else :name="item.icon"></Icon>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    methods:{
        goService(path){
            path && this.$router.push(path);
        }
    },
    computed:{
        ...mapGetters([
            'bodyServiceList'
        ])
    }
}
</script>
<style lang="less" scoped>
    .body-wrapper {
        border-left: none;
        border-right: none;
    }
    .li {
        height: 0.5rem;
        line-height: 0.5rem;
        width: 100%;
        padding: 0 0.1rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg {
            color: #bbb;
        }
        span {
            color: @font-gray;
            font-size: 0.12rem;
            margin-right: 0.08rem;
        }
        &:nth-child(1) {
            margin: 0.1rem 0;
            &:before {
                border-left: none;
                border-right: none;
            }
        }
        &:nth-child(3) {
            margin-bottom: 0.1rem;
            &:before {
                border-left: none;
                border-right: none;
            }
        }
    }
</style>


