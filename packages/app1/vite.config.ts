/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:10
 * @LastEditTime: 2023-04-18 11:42:05
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app1\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // 打包路径
  server: {
    port: 5173
  }
})
