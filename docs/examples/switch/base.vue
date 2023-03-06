<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-02 09:22:14
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-06 17:53:02
 * @FilePath     : /monorepo-starter/docs/examples/switch/base.vue
 * @Description  :
 *
-->

<script setup lang="ts" name="ExpSwitch">
  import { ref } from 'vue';
  const switchVal = ref(true);
</script>

<template>
  <f-switch v-model="switchVal" />
</template>
