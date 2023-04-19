/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:19
 * @LastEditTime: 2023-04-19 16:15:54
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app2\src\main.ts
 */
import { createApp } from 'vue';
import router from './router';
import './style.css';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');

