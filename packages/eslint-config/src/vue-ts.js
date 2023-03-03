/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-03 15:14:14
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-03 17:58:09
 * @FilePath     : /monorepo-starter/packages/eslint-config/src/vue-ts.js
 * @Description  :
 *
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
};
