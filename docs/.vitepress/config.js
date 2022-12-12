module.exports = {
    title: 'Bubble Gum',
    description: 'asdasdasd',
    themeConfig: {
        // 顶部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '学习', link: '/Sidebar/study', target: '_blank' },
            { text: '谷歌', link: 'https://google.com', target: '_blank' },
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
        // socialLinks: [
        //     { icon: "github", link: "https://google.com" },
        //     { icon: "twitter", link: "https://google.com" },
        // ],
        // 侧边导航栏
        sidebar: {
            'Sidebar/study': [
                {
                    text: "学习vitepress",
                    collapsible: true, //   是否可折叠
                    collapsed: false, //    默认折叠

                    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
                    nextLinks: false,
                    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
                    prevLinks: false,
                    items: [
                        { text: "index", link: "/" },
                        { text: "pdf", link: "/Sidebar/study" },
                    ],
                },
                {
                    text: "vue教程",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: "pina和vuex", link: "/Sidebar/study", },
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