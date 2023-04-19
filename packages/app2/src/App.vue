<!--
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:19
 * @LastEditTime: 2023-04-19 16:11:09
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app2\src\App.vue
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { Snow } from '@fly/common';
</script>

<template>
  <div>
    我是：app2 app开始
    <Snow />
  </div>
  <router-view></router-view>
  <HelloWorld msg="Vite + Vue" />
  <div> 我是：app2 app结束</div>
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
