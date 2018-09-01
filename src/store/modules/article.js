import axios from '@/utils/axios'

const article = {
    state:{
        articleInfo:{},
        pageLoading:false 
    },
    actions: {
        getArticle({commit},params){
            return new Promise(async (resolve,reject) => {
                try {
                    const { data } = await axios.get("article/info",params);
                    commit("GETARTICLE",data);
                    resolve(resolve)
                } catch (error) {
                    reject(error)
                }
                
            })
        }  
    },
    mutations: {
        GETARTICLE(state,info){
            state.articleInfo = info;
        }
    }
}

export default article
