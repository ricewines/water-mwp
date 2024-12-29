import {
    createRouter, createWebHistory, RouteRecordRaw
} from 'vue-router'

import {Root} from './App.tsx'
import About from './first/setting/About.tsx'
import HomePage from "./first/home/Home.tsx";
import CartPage from "./first/cart/Cart.tsx";
import ClassificationPage from "./first/classification/Classification.tsx";
import SettingPage from "./first/setting/Setting.tsx";

import Demo from "./demo/Demo.tsx"

const routes: RouteRecordRaw[] = [
    {
        path: '/page/consumer/index.html', component: Root
    },
    {
        path: '/page/consumer/', redirect: '/page/consumer/index.html', children: [
            {path: 'home', component: HomePage},
        ]
    },
    {path: '/home', component: HomePage},
    {path: '/cart', component: CartPage},
    {path: '/classification', component: ClassificationPage},
    {path: '/setting', component: SettingPage},
    {
        path: '/about', component: About,
        meta: {transition: 'slide-left'},
    },
    {path: '/demo', component: Demo}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
