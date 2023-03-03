/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-02-15 18:57:34
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-03 17:50:42
 * @FilePath     : /monorepo-starter/packages/components/button/index.ts
 * @Description  :
 *
 */
import Button from './src/button';
import { withInstall } from '../with-install';

const FButton = withInstall(Button);
export default FButton;
