/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-03 15:29:21
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-03 18:01:05
 * @FilePath     : /monorepo-starter/.eslintrc.js
 * @Description  :
 *
 */
module.exports = {
  root: true,
  parserOptions: {
    /**
     * Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices
     * @see https://stackoverflow.com/questions/64116378/error-while-loading-rule-typescript-eslint-dot-notation
     */
    project: ['tsconfig.json'],
  },
  extends: '@firmiana/eslint-config',
};
