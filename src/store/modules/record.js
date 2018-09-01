import axios from '@/utils/axios'
const record = {
    state:{
        types:[
            {title:'我的收藏',list:[]},
            {title:'阅读历史',list:[]},
            {title:'推送历史',list:[]}
        ],
        index:0,
        loading:false,
        end:false
    },
    actions: {
        getRecordList({commit,state},params = {}){
            console.log(params);
            // 判断是否已加载
            let obj = state.types.find(type => type.title === params.title)
            // 已加载就不加载
            if(obj.list.length) return
            state.loading = true;
            return new Promise(async (resolve,reject) => {
                try {
                    const {data:{list}} = await axios.get('record/list',params);
                    state.loading = false;
                    if(list.length < 11){
                        // 结束标志
                        state.end = true;
                    }
                    commit('GETRECORDLIST',list);
                    resolve(list);
                } catch (error) {
                    reject(error)
                }
            })
        }
    },
    mutations: {
        GETRECORDLIST(state,list){
            const oldList = state.types[state.index].list;
            state.types[state.index].list = [...oldList,list];
        }
    }
}

export default record 