const getters = {
  // user
  user: state => state.user.user,
  isLogin: state => state.user.isLogin,
  footerBarList: state => state.user.footerBarList,

  // 首页
  newsList: state => state.home.newsList,
  newsLoading: state => state.home.newsLoading,
  homeNewsIndex: state => state.home.newsIndex,
  homeNewsPrevIndex: state => state.home.newsPrevIndex,
  homeEnd: state => state.home.end,

  // video
  videoList: state => state.video.list,
  videoLoading: state => state.video.loading,
  videoEnd: state => state.video.end,

  // headline
  headlineList: state => state.headline.list,
  headlineLoading: state => state.headline.loading,
  headlineEnd: state => state.headline.end,

  //account
  headInfoList: state => state.account.headInfoList,
  headServiceList: state => state.account.headServiceList,
  bodyServiceList: state => state.account.bodyServiceList,

  //system 
  systemTopList: state => state.system.systemTopList,
  systemMiddleList: state => state.system.systemMiddleList,
  systemBottomList: state => state.system.systemBottomList,

  // record
  recordTypes: state => state.record.types,
  recordIndex: state => state.record.index,
  recordLoading: state => state.record.loading,
  recordEnd: state => state.record.end,

  // search
  keyword: state => state.search.keyword,
  searchList: state => state.search.list,
  searchLoading: state => state.search.loading,
  searchPageindex: state => state.search.pageindex,
  searchEnd: state => state.search.end,

  //article 
  articleInfo:state => state.article.articleInfo,
  pageLoading:state => state.article.pageLoading
}
export default getters
