module.exports = {
  pages: [
    'pages/index/index',
    'pages/heart/index',
    'pages/mine/index',
    "pages/common/wallpaper",
    "pages/common/joke",
    "pages/common/starpair",

  ],
  window: {
    navigationBarTitleText: 'Remax',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#ffffff',
    backgroundColor: '#f5f5f5',
    enablePullDownRefresh: true
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#f26123',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: '/images/home_1.png',
        selectedIconPath: '/images/home_2.png'
      },
      {
        pagePath: 'pages/heart/index',
        text: '收藏',
        iconPath: '/images/heart_1.png',
        selectedIconPath: '/images/heart_2.png'
      }, {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: '/images/my_1.png',
        selectedIconPath: '/images/my_2.png'
      }
    ],
  }
};
