import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '国学起名',
  description: '传承国学文化，为您定制贴心好名。',

  theme: defaultTheme({
    logo: 'https://name.one-api.club/logo.svg',

    navbar: [
      '/',
      '/get-started',
      '/name-meaning',
      {
        text: '演示网站',
        link: 'https://name.one-api.club/demo.html',
      },
      {
        text: '免费领取文心快码VIP',
        link: 'https://comate.baidu.com/zh/vip-claim?inviteCode=pnn11cfd',
      },
      {
        text: '本站同款服务器',
        link: 'https://app.cloudcone.com/?ref=10317',
      },
      {
        text: '不限速流量卡',
        link: 'https://h5.lot-ml.com/ProductEn/Index/7677aa622a122dd3',
      },
    ],
  }),

  bundler: webpackBundler(),
})
