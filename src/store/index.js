import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import account from './modules/account'
import article from './modules/article'
import classify from './modules/classify'
import home from './modules/home'
import user from './modules/user'
import record from './modules/record'
import system from './modules/system'
import video from './modules/video'
Vue.use(Vuex)

const store = Vuex.store({
  modules: {
    account,
    article,
    classify,
    home,
    user,
    record,
    system,
    video
  },
  getters
})
export default store
