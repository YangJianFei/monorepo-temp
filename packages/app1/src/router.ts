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
        // component: () => import('@fly/app2/src/view/index.vue')
        component: () => import('@fly/app2/src/App.vue'),
        children: [
            {
                path: 'people',
                name: 'people',
                component: () => import('./view/people.vue')
            }
        ]
    }, {
        path: '/app2-index2',
        name: 'app2Index2',
        component: () => import('remote-app2/Index2')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;