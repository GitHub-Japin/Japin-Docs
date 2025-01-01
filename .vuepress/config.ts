import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/avatar.jpg' }]],
  title: "Japin の 研究笔记",
  description: "备注",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "Japin",
    authorAvatar: "/avatar.jpg",
    colorMode: "auto",
    docsRepo: "",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    editLink: false,
    // series 为原 sidebar
    navbar: [
      { text: "主页", link: "/" },
      { text: "分类", link: "/categories/about/1.html" },
      { text: "标签", link: "/tags/vue3/1.html" },
      { text: "关于我", children:[
          { text: "介绍", link: "/blogs/other/about"},
          { text: "掘金", link: "https://juejin.cn/user/1858590170683315"},
          { text: "GitHub", link: "https://github.com/GitHub-Japin"},
          { text: "Gitee", link: "https://gitee.com/abin1133"}
        ] },
    ],
    bulletin: {
      width: "300px",
      body: [
        {
          type: "text",
          content: `欢迎您的到来，如果您有什么疑问请联系我，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "联系方式",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ：1940005020</li>
            <li>邮箱：1940005020@qq.com</li>
            <li><a href="https://github.com/GitHub-Japin/Japin-Docs/issues">前往GitHub-Issues<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
      ],
    },
  }),
  // debug: true,
});
