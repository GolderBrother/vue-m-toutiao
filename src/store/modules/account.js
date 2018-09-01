const account = {
  state: {
    headInfoList: [{
        num: 0,
        title: '动态'
      },
      {
        num: 1,
        title: '关注'
      },
      {
        num: 2,
        title: '粉丝'
      }
    ],
    headServiceList: [{
        icon: 'shoucang',
        title: '动态'
      },
      {
        icon: '3lishi',
        title: '历史'
      },
      {
        icon: 'school',
        title: '推送'
      }
    ],
    bodyServiceList: [{
        title: '消息通知',
        icon: 'arrow',
        path: '/msg',
        class: 'border-half'
      },
      {
        title: '头条商城',
        subTitle: '邀请好友得200元现金',
        icon: 'arrow',
        path: '/mall',
        class: 'border-top'
      },
      {
        title: '京东特供',
        subTitle: '新人领188红包',
        icon: 'arrow',
        path: '/jd',
        class: 'border-half'
      },
      {
        title: '用户反馈',
        icon: 'arrow',
        path: '/feedback',
        class: 'border-half-top'
      },
      {
        title: '系统设置',
        icon: 'arrow',
        path: '/system',
        class: 'border-half-top'
      },
    ]
  }
}
export default account;
