/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-19 16:06:09
 * @LastEditTime: 2023-04-20 14:32:26
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app2\src\router.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import('./view/index.vue')
    },
    {
        path: '/head',
        name: 'head',
        component: () => import('./view/head.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export {
    routes
};

export default router;