module.exports = {
    title: 'Bubble Gum',
    description: 'A VitePress site,html,css,javascript,vue....',
    lastUpdated: true,
    outDir: '../dist',
    themeConfig: {
        // 编辑本页
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
        // },
        lastUpdatedText: "Last updated",
        // 顶部导航
        nav: [
            { text: '首页', link: '/' },
            {
                text: '关于前端',
                // 当前路径下导航链接高亮显示
                activeMatch: "^/Web/",
                link: '/Web/study',
                target: '_blank',
            },
            {
                text: '关于爱好',
                activeMatch: "^/Interest/",
                link: '/Interest/photography',
                target: '_blank',
            },
            { text: 'Google', link: 'https://google.com', target: '_blank' },
            // 通过items数组设置下拉列表
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
            { icon: "github", link: "" },
            { icon: "twitter", link: "" },
        ],
        // 侧边导航栏
        sidebar:
        {
            "/Web/": [
                {
                    text: "有关vitepress",
                    collapsible: true, //   是否可折叠
                    collapsed: false, //    默认折叠
                    items: [
                        { text: "vitepress", link: "/Web/vitepress" },
                    ],
                },
                {
                    text: "有关vue",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: "vue导出pdf", link: "/Web/study" },
                        { text: "javascript封装的部分函数", link: "/Web/mergeArray" },
                    ],
                }
            ],
            "/Interest/": [
                {
                    text: "关于摄影",
                    collapsible: true, //   是否可折叠
                    collapsed: false, //    默认折叠
                    items: [
                        { text: "摄影", link: "/Interest/photography" },
                    ],
                }
            ],
        },
        footer: {
            message: '<a href="https://beian.miit.gov.cn/">豫ICP备2022027912号</a>',
            copyright: 'Copyright © 2022-present by <a href="https://vitepress.vuejs.org/">VitePress</a> & Xiao Bai'
        },

    }
}