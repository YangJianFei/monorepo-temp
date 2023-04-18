/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 10:52:20
 * @LastEditTime: 2023-04-18 14:58:03
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\base\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   // sourcemap: true,
  //   lib: {
  //     entry: path.resolve(__dirname, 'index.ts'),
  //     name: 'vue-baidu-map-3x',
  //     fileName: (format) => `vue-baidu-map-3x.${format}.js`
  //   },
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ['vue'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: 'Vue'
  //       }
  //     }
  //   }
  // },
  plugins: [vue()],
})
