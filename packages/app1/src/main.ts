/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:10
 * @LastEditTime: 2023-04-20 14:34:07
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app1\src\main.ts
 */
import { createApp } from 'vue';
import router from './router';
import './style.css';
import App from './App.vue';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

const app = createApp(App);
app.use(router);
app.mount('#app');

registerMicroApps([
    {
        name: 'fly-app2',
        entry: 'http://127.0.0.1:5500/index.html',
        container: '#child-app',
        activeRule: 'fly-app2'
    }
]);

// setDefaultMountApp('/fly-app2')
start();