/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-09 17:06:40
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-09 17:42:02
 * @FilePath     : /monorepo-starter/apps/industry/src/vite-env.d.ts
 * @Description  :
 *
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
