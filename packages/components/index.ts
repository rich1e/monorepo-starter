/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-02 13:19:25
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-03 18:03:43
 * @FilePath     : /monorepo-starter/packages/components/index.ts
 * @Description  :
 *
 */

/**
 * @see https://github.com/bfehub/vlib-starter/blob/3-ui/packages/vlib-ui/src/index.ts
 * @see https://juejin.cn/post/7137107018938056734#heading-1
 */

import type { App } from 'vue';

import FButton from './button';
import FSwitch from './switch';

export * from './button';

const components = [FButton, FSwitch];

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents = (app: App): void => {
  components.forEach((comp: any) => {
    app.component(comp.name as string, comp);
  });
};

// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install = (app: App): void => {
  installComponents(app);
};

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};
