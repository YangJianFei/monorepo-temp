import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import('./view/index.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;