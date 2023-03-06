/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-06 17:08:35
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-06 18:17:44
 * @FilePath     : /monorepo-starter/docs/.vuepress/config.ts
 * @Description  :
 *
 */
import { defineUserConfig, viteBundler, defaultTheme } from 'vuepress';
import * as sidebar from './configs/sidebar';

import blockDemo from 'vuepress-plugin-demo-block-vue3';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

export default defineUserConfig({
  // base: '/firmiana/',

  pagePatterns: [
    '**/*.md',
    '!.vuepress',
    '!node_modules',
    // 查找组件的文件
    '../packages/components/**/*.md',
    '!../packages/**/node_modules',
  ],

  port: 3388,
  open: true,

  bundler: viteBundler({
    viteOptions: {
      plugins: [vueSetupExtend()],
    },
    vuePluginOptions: {},
  }),

  plugins: [
    blockDemo({
      path: __dirname,
    }),
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Firmiana',
      description: 'Vue 3.0 项目模板 & 组件库',
    },
  },

  theme: defaultTheme({
    locales: {
      '/': {
        navbar: [],
        sidebar: sidebar.zh, // 控制侧边栏
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),
});
