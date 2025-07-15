import { defineConfig } from 'vitepress'
import elementplus from "element-plus"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端学习笔记",
  description: "记录前端学习的点滴",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

  },
  base: '/frontend-notebook/'
})
