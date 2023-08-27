module.exports = {
    title: 'My Blog',                // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
    description: 'Just a Blog site', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    base: "/vuepress-blog/",         // 部署站点的基础路径，如果要部署到GitHub Pages，必须设置它为 GitHub 仓库名
    themeConfig: {
      nav: [    // 添加导航栏
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog/' },
        { text: 'GitHub', link: 'https://github.com/' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'English', link: '/language/english/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
      ],

      sidebar: [    // 添加侧边栏
        {
          title: 'Group 1',   // 必要的
          path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/'
          ]
        },
        {
          title: 'Group 2',
          children: [ /* ... */ ],
          initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
      ],
    }
  }
  