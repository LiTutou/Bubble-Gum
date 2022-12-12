module.exports = {
    title: 'Bubble Gum',
    description: 'asdasdasd',
    lastUpdated: true,
    outDir: '../dist',
    themeConfig: {
        lastUpdatedText: "最后更新时间",
        // 顶部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '关于前端', link: '/Views/study', target: '_blank' },
            { text: '关于摄影', link: '/Views/photography', target: '_blank' },
            { text: 'Google', link: 'https://google.com', target: '_blank' },
            //通过items数组设置下拉列表
            // {
            //     text: 'Language',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: '简体中文', link: '/' },
            //         { text: 'Japanese', link: '/' },
            //         { text: 'English', link: '/' },
            //     ]
            // },
        ],
        // 链接
        socialLinks: [
            { icon: "github", link: "https://google.com" },
            { icon: "twitter", link: "https://google.com" },
        ],
        // 侧边导航栏
        sidebar: {
            'Views/study': [
                {
                    text: "有关vitepress",
                    collapsible: true, //   是否可折叠
                    collapsed: false, //    默认折叠
                    items: [
                        { text: "index", link: "/" },
                        { text: "pdf", link: "/Views/study" },
                    ],
                },
                {
                    text: "有关vue",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: "pina和vuex", link: "/Views/study" },
                    ],
                },
            ],
            'Views/photography': [
                {
                    text: "关于摄影",
                    collapsible: true,
                    collapsed: false,
                    lastupdated: true,
                    items: [
                        {
                            text: "开篇", link: "/Views/photography",
                            lastupdated: true,
                        },
                        { text: "阿巴阿巴阿巴", link: "/Views/study" },
                    ],
                },
            ]
        },
        footer: {
            message: '<a href="https://beian.miit.gov.cn/">豫ICP备2022027912号-1</a>',
            copyright: 'Copyright © 2022-present Xiao Bai'
        },

    }
}