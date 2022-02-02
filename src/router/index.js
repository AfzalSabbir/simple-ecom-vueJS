import {createRouter, createWebHistory} from 'vue-router'
import Home                             from '../views/Home.vue'
import ProductList                      from '../views/product/List'
import ProductView                      from '../views/product/View'

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path     : '/product',
        name     : 'ProductList',
        component: ProductList,
    },
    {
        path     : '/product/:id',
        name     : 'ProductView',
        component: ProductView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router