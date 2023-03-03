/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-03 17:24:08
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-03 17:24:16
 * @FilePath     : /monorepo-starter/.lintstagedrc.js
 * @Description  :
 *
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,less,styl}': ['stylelint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
};
