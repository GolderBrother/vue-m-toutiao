<template>
    <section class="head-wrapper">
        <div class="hd-t">
            <div class="info">
                <span class="avator bg-cover-all" :style="{backgroundImage:'url('+ `${user.name} : ${user.avatar} ? ${accountCircle}` +')'}"></span>
                <span class="name" v-if="user.name">{{ user.name }}</span>
                <span class="login" @click="login" v-else>点击登录</span>
            </div>
        </div>
        <div class="hd-m">
            <div class="hd-m-item df-c" v-for="(item,index) in headInfoList" :key="index">
                <span>{{ item.num }}</span>
                <div class="hd-m-t">{{ item.title }}</div>
            </div>
        </div>
        <div class="hd-b">
            <div class="hd-b-item" v-for="(item,index) in headServiceList" :key="index" @click="goRecord(index)">
                <Icon :name="item.icon"></Icon>
                <div class="hd-b-t">{{ item.title }}</div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
        accountCircle:require('assets/images/account-circle.svg'),
        infoList:[
            {num:0,title:'动态'},
            {num:1,title:'关注'},
            {num:2,title:'粉丝'}
        ],
        serList:[
            {icon:'shoucang',title:'动态'},
            {icon:'3lishi',title:'历史'},
            {icon:'school',title:'推送'}
        ]
    };
  },
  methods:{
      login(){
          this.$store.state.user.isLogin = true;
      },
      goRecord(index){
          this.$router.push({name:'我的记录',params:{type:index}})
      }
  },
  computed:{
      ...mapGetters([
          'user',
          'headInfoList',
          'headServiceList'
      ])
  }
};
</script>
<style lang="less" scoped>
 .head-wrapper {
        width: 100%;
        background-color: #777;
    }
    .hd-t {
        padding: 0.2rem;
        .info {
            color: #fff;
            &>* {
                display: inline-block;
                vertical-align: middle;
            }
            .avatar {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
            }
        } 
    }
    .hd-m {
        font-size: 0.12rem;
        color: @font-gray;
        padding-bottom: 0.1rem;
        span {
            color: #fff;
            margin-bottom: 0.08rem;
        }
        .hd-m-t {
            color: #aaa;
        }
    }
    .hd-b {
        padding: 0.1rem 0;
        background: #fff;
    }
    .hd-m-item, .hd-b-item {
        width: e("calc(100% / 3)");
        height: 0.5rem;
        flex-direction:column;
    }
    .hd-b-item {
        font-size: 0.12rem;
        svg {
            font-size: 0.2rem;
            margin-bottom: 0.08rem;
        }
        &:nth-child(1) {
            svg { color: @theme-blue; }
        }
        &:nth-child(2) {
            svg { color: @theme-green; }
        }
        &:nth-child(3) {
            svg { color: @theme-red; }
        }
        
    }
</style>

