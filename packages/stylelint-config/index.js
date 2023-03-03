/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-03 16:34:57
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-03 17:22:35
 * @FilePath     : /monorepo-starter/packages/stylelint-config/index.js
 * @Description  :
 *
 */
// https://stylelint.io/user-guide/get-started
module.exports = {
  extends: [
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // https://github.com/constverum/stylelint-config-rational-order
    'stylelint-config-rational-order',
    // https://github.com/prettier/stylelint-prettier
    'stylelint-prettier/recommended',
    // https://github.com/ota-meshi/stylelint-config-html
    'stylelint-config-html',
  ],
  plugins: [
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'no-empty-source': null,
    'unit-no-unknown': null,
    'at-rule-no-unknown': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,

    // stylelint-config-rational-order
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
  },
};
