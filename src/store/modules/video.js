import axios from 'axios'

const video = {
    state:{
        list:[],
        loading:false,
        loadingMore:false,
        end:false
    },
    actions:{
        getVideoList({commit,state},params = {}){
            if(state.loadingMore) return
            state.loading = false;
            return new Promise( async (resolve,reject) => {
                try {
                    const res = axios('video/list',params);
                    console.log(res);
                    state.loading = true;
                    if(res.data.list.length < 6){
                        state.loadingMore = true;
                        state.end = true;
                        commit('GETVIDEOLIST',res.data.list)
                        resolve(res.data.list)
                    }
                } catch (error) {
                    reject(error)
                }
            })
        }
    },
    mutations:{
        GETVIDEOLIST(state,list){
            state.list = [...state.list,...list]
        }
    }
}
export default video;