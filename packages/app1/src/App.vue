<!--
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:10
 * @LastEditTime: 2023-04-18 16:08:37
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app1\src\App.vue
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Snow } from '@fly/common';
import { Desc } from '@fly/base';
</script>

<template>
  <div>
    <Snow />
    <Desc />
    <RouterView />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
