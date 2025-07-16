import { defineConfig } from 'vitepress'
import elementplus from "element-plus"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端学习笔记",
  description: "记录前端学习的点滴",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'JavaScript',
        items: [
          { text: '基础', link: '/JavaScript/base' },
          { text: '进阶', link: '/JavaScript/advanced' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

  },
  base: '/frontend-notebook/'
})
