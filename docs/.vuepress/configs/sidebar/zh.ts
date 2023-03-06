/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-02-02 09:36:51
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-06 18:42:54
 * @FilePath     : /monorepo-starter/docs/.vuepress/configs/sidebar/zh.ts
 * @Description  :
 *
 */
import type { SidebarConfig } from 'vuepress';

export const zh: SidebarConfig = {
  '/components': [
    {
      text: 'Button 按钮',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button/',
        },
      ],
    },
    {
      text: 'Switch 开关',
      children: [
        {
          text: 'Switch 开关',
          link: '/components/switch/',
        },
      ],
    },
  ],
};
