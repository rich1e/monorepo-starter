/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-03 16:37:06
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-03 18:07:51
 * @FilePath     : /monorepo-starter/packages/components/with-install.ts
 * @Description  :
 *
 */
import type { AppContext, Plugin, App } from 'vue';

/**
 * @see https://www.linsizao.site/%E5%B0%81%E8%A3%85vue3%E6%8F%92%E4%BB%B6install%E6%96%B9%E6%B3%95/
 */

export type SFCWithInstall<T> = T & Plugin;

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};

/**
 * 组件
 * @param main
 * @param extra
 * @returns
 * @see https://github.com/youzan/vant/blob/main/packages/vant/src/utils/with-install.ts
 */
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
): SFCWithInstall<T> & E => {
  // 定义 install 属性
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra != null) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

// 函数
export const withInstallFunction = <T>(
  fn: T,
  name: string,
): SFCInstallWithContext<T> => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCInstallWithContext<T>;
};
