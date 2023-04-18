/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 14:55:15
 * @LastEditTime: 2023-04-18 14:55:26
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\global.d.ts
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}