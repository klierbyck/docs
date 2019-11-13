module.exports = {
    title: 'Home',
    description: 'klierbyck的博客',
    head: [
        ['link', { rel: 'icon', href: '/imgs/logo.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '文章',
                items: [
                    { text: '前端', link: '/web/' },
                    { text: '服务端', link: '/service/' },
                    { text: '可视化', link: '/visual/' }
                ]
            },
            { text: '资源', link: '/resources/' },
            { text: 'Github', link: 'https://github.com/klierbyck' },
        ],
        sidebar: {
            '/web/': [
                {
                    title: 'web基础知识',
                    children: [
                        "",
                        ['test', 'test']
                    ]
                },
                {
                    title: 'web基础知识1',
                    children: [
                        ["test1", "test1"]
                    ]
                }
            ],
            '/service/': [
                {
                    title: '服务端基础知识',
                    collapsable: false,
                    children: [
                        ['Centos下安装环境', 'Centos下安装环境']
                    ]
                }
            ],
            '/visual/': [
                "",
                "test"
            ]
        },
        sresourcesbarDepth: 2,
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        },
        lastUpdated: 'Last Updated',
    },
    serviceWorker: true
}