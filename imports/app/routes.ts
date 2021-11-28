/**
 * init routes
 *
 * @exports routes
 */
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import Home from '../ui/pages/Home/index.vue';

import Demo from '../ui/pages/Demo/index.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/demo',
        name: 'Demo',
        component: Demo,
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
