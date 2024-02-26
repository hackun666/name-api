import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '国学起名',
  description: '传承国学文化，为您定制贴心好名。',

  theme: defaultTheme({
    logo: 'https://api.aihack.club/logo.svg',

    navbar: [
      '/',
      '/get-started',
      {
        text: '本站同款服务器',
        link: 'https://app.cloudcone.com/?ref=10317',
      },
    ],
  }),

  bundler: webpackBundler(),
})
