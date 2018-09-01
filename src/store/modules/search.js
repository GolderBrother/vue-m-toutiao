import axios from '@/utils/axios'
const search = {
  state: {
    keyword: '',
    pageindex: 1,
    list: [],
    loading: false,
    loadingMore: false,
    end: false
  },
  actions: {
    getSearchList({
      commit,
      state
    }, params = {}) {
      if (state.loadingMore && !state.loading) return;
      // 开启加载状态
      state.loading = true;
      return new Promise(async (resolve, reject) => {
        try {
          const {
            data: {
              list
            }
          } = await axios.get('search', params);
          if (list.length < 6) {
            state.loadingMore = true;
            state.end = true;
          }
          commit('GETSEARCHLIST', list);
          resolve(list)
        } catch (error) {
          reject(error)
        }
      })
    }
  },
  mutations: {
    GETSEARCHLIST(state, list) {
      state.list = state.pageindex === 1 ? list : [...(state.list), ...list]
    },
    INITLIST(state, list) {
      state.list = list;
    }
  }
}
export default search
