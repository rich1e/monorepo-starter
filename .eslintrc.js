/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-03 15:29:21
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-22 14:15:49
 * @FilePath     : /monorepo-starter/.eslintrc.js
 * @Description  :
 *
 */
module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    /**
     * Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices
     * @see https://stackoverflow.com/questions/64116378/error-while-loading-rule-typescript-eslint-dot-notation
     * @see https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/.eslintrc.js
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/tsconfig.eslint.json
     */
    project: [
      'tsconfig.json',
      './apps/*/tsconfig.json',
      './packages/*/tsconfig.json',
    ],
    extraFileExtensions: ['.vue'],
  },
  extends: '@firmiana/eslint-config',
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
};
