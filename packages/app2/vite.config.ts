/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:19
 * @LastEditTime: 2023-04-20 14:29:55
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app2\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import qiankun from 'vite-plugin-qiankun';

const useDevMode = true;

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://127.0.0.1:5500/', // 打包路径
  build: {
    target: 'esnext'
  },
  plugins: [
    vue(),
    // federation({
    //   name: 'remote-app2',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './Index2': './src/view/index2.vue',
    //   },
    //   shared: ['vue']
    // }),
    qiankun('fly-app2', {
      useDevMode
    })
  ],
  server: {
    port: 5174,
    cors: true
  }
})
