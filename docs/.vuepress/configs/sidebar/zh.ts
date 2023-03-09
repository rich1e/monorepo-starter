/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-02-02 09:36:51
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-09 15:19:51
 * @FilePath     : /monorepo-starter/docs/.vuepress/configs/sidebar/zh.ts
 * @Description  :
 *
 */
import type { SidebarConfig } from 'vuepress';

export const zh: SidebarConfig = {
  '/components': [
    {
      text: 'Components',
      children: ['/components/button', '/components/switch'],
    },
  ],
};
