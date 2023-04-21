export default {
  themeConfig: {
    siteTitle: "vitepress",
    base: process.env.NODE_ENV === 'production' ? '/easyest/' : '/',
    nav: [
      { text: "指南", link: "/guild/installation/" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "gitlab", link: "http://git.kg-inc.cn/fe-sy-lahuo/driver-vue3-components" },
    ],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation/",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart/",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button",
              link: "/components/button/",
            }
          ],
        }
      ]
    },
  },
};