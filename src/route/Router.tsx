import {
    createRouter, createWebHistory, RouteRecordRaw
} from 'vue-router'

import {Root} from '../page/consumer/App.tsx'
import HomePage from "../page/consumer/first/home/Home.tsx";
import CartPage from "../page/consumer/first/cart/Cart.tsx";
import ClassificationPage from "../page/consumer/first/classification/Classification.tsx";
import SettingPage from "../page/consumer/first/setting/Setting.tsx";
import About from "../page/consumer/first/setting/about/Index.tsx";

import Demo from "../page/consumer/demo/Demo.tsx"

const routes: RouteRecordRaw[] = [

    {path: '/', component: Root, name: 'root'},
    {
        path: '/page', redirect: {name: 'root'},
        children: [
            {path: '', redirect: {name: 'root'}},
            {
                path: 'consumer', redirect: {name: 'root'},
                children: [
                    {path: '', redirect: {name: 'root'}},
                    {path: 'demo', component: Demo, name: 'demo'},
                    {
                        path: 'first', children: [
                            {path: '', redirect: {name: 'root'}},
                            {path: 'home', component: HomePage, name: '首页'},
                            {path: 'cart', component: CartPage, name: '购物车'},
                            {path: 'classification', component: ClassificationPage, name: '分类'},
                            {
                                path: 'setting',
                                children: [
                                    {path: '', component: SettingPage, name: '设置'},
                                    {path: 'about', component: About, name: '关于'},
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory("./"),
    routes,
})
export default router;
