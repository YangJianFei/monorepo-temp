/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:19
 * @LastEditTime: 2023-04-18 18:48:52
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app2\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  base: './', // 打包路径
  plugins: [
    vue(),
    federation({
      name: 'remote-app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Index2': './src/view/index2.vue',
      },
      shared: ['vue']
    })
  ],
  server: {
    port: 5174
  }
})
