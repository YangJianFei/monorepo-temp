import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import('./view/index.vue')
    }, {
        path: '/test',
        name: 'test',
        component: () => import('./view/test.vue')
    }, {
        path: '/app2-index',
        name: 'app2Index',
        component: () => import('@fly/app2/src/view/index.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;