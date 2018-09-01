import axios from 'axios';
const headline = {
  state: {
    list: [],
    loading: false,
    loadingMore: false,
    end: false
  },
  action: {
    getHeadline({
      commit,
      state
    }, params = {}) {
      // 已加载更多，就不加载
      if (state.loadingMore) return;
      state.loading = true;
      return new Promise((resolve, reject) => {
        try {
          const res = await axios.get('headline/list', params);
          state.loading = false;
          const list = res.data && res.data.list;
          console.log(res, list)
          if (list.length < 5) {
            state.loadingMore = true;
            state.end = true;
          }
          commit('GETHEADLINE', list);
          resolve(list);
        } catch (error) {
          reject(error)
        }
      })
    },
    addHeadline({
      commit,
      state
    }, params) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.post('headline/list', params);
          const list = res.data && res.data.list;
          console.log(res, list)
          state.loading = false;
          commit('ADDHEADLINE', list);
          resolve(list)
        } catch (error) {
          reject(error)
        }
      })
    }
  },
  mutations: {
    GETHEADLINE(state, list) {
      state.list = [...state.list, ...list];
    },
    ADDHEADLINE(state, info) {
      state.list.unshift(info)
    }
  }
}
export default headline
