module.exports = {
  title: '洗心革面',
  description: '我们在这世界上不停地奔跑，一不小心就改变了生活',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/tech/' },
      { text: '书籍', link: '/book/' },
      { text: 'Github', link: 'https://github.com/caicaishmily' },
    ],
    search: false,
    sidebar: {
      '/tech/': [
        '',     /* /foo/ */
        'flutter',  /* /foo/one.html */
      ],
    }
  }
}
