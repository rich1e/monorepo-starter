<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-02 09:22:14
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-06 18:29:36
 * @FilePath     : /monorepo-starter/docs/examples/button/base.vue
 * @Description  :
 *
-->

<script setup lang="ts" name="ExpButton">
  import { ref } from 'vue';
  const btnText = ref('hello world');
</script>

<template>
  {{ btnText }}
  <f-button>Default</f-button>
  <f-button type="primary">Primary</f-button>
  <f-button type="success">Success</f-button>
  <f-button type="info">Info</f-button>
  <f-button type="warning">Warning</f-button>
  <f-button type="danger">Danger</f-button>
</template>
