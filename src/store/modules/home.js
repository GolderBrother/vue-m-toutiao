import {
  Local
} from '@/utils/storage'
import {
  newsList
} from './classify'
import axios from 'axios'
import Vue from 'vue'
const home = {
  state: {
    newsList: (function () {
      let newList = JSON.parse(Local.getItem('newList') || newsList.slice(0, 12))
      newList.forEach(news => {
        // 过滤掉有耳机列表的数据
        if (news.list) {
          delete news.title
        }
      })
      Local.setItem('newList', JSON.stringify(newList))
    })(),
    newsIndex: 0,
    newsPrevIndex:0,
    newsLoading: false,
    end: false
  },
  actions: {
    addHomeTag({
      commit
    }, news) {
      commit('ADDHOMETAG', news)
    },
    delHomeTag({
      commit
    }, news) {
      commit('DELHOMETAG', news)
    },
    getHomeList({
      commit,
      state
    }, params) {
      let news = state.newsList.find(n => n.id === params.id)
      // 已经有列表数据，就不请求获取
      if (news.list) return;
      // 开启加载动画
      state.newsLoading = true;
      return new Promise((resolve, reject) => {
        axios.get('home/list', params).then(res => {
          const data = res.data;
          console.log(data);
          if (data.list.length < 11) {
            state.end = true
          }
          state.end = true;
          commit('GETHOMELIST', data.list);
          resolve(data.list)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  mutations: {
    ADDHOMETAG(state, news) {
      // 必须在频道列表中都查找不到才可以增加
      if (state.newsList.every(tag => tag.title !== news.title)) {
        state.newsList.push(news)
        Local.setItem('newList', JSON.stringify(state.newsList))
      }
    },
    DELHOMETAG(state, news) {
      let index = state.newsList.findIndex(n => n.title === news.title)
      state.newsList.splice(index, 1);
      Local.setItem('newList', JSON.stringify(state.newsList))
    },
    GETHOMELIST(state, list) {
      // 设置频道列表
      state.newsList[state.newsIndex].list = list;
      Vue.prototype.$set(state.newsList, state.newsIndex, state.newsList[state.newsIndex])
    }
  }
}
