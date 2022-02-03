import {createRouter, createWebHistory} from 'vue-router'
import Home                             from '@/views/Home.vue'
import Product                          from '@/views/product/Index'
import ProductList                      from '@/views/product/List'
import ProductView                      from '@/views/product/View'
import User                             from '@/views/user/Index'
import UserList                         from '@/views/user/List'
import Login                            from "@/views/auth/Login";
import Register                         from "@/views/auth/Register";

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home,
    },
    {
        path     : '/register',
        name     : 'Register',
        component: Register,
    },
    {
        path     : '/login',
        name     : 'Login',
        component: Login,
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
        path     : '/user',
        name     : 'User',
        component: User,
        children : [
            {
                path     : '',
                name     : 'UserList',
                meta     : {
                    title: 'User List',
                },
                component: UserList,
            },
            {
                path     : ':id',
                name     : 'UserView',
                meta     : {
                    title: 'User View',
                },
                component: UserList,
                props    : true,
            },
        ],
    },

    {
        path     : '/product',
        name     : 'Product',
        component: Product,
        children : [
            {
                path     : '',
                name     : 'ProductList',
                meta     : {
                    title: 'Product List',
                },
                component: ProductList,
            },
            {
                path     : 'category/:category',
                name     : 'CategoryProductList',
                meta     : {
                    title: 'Category Product List',
                },
                component: ProductList,
            },
            {
                path     : ':id',
                name     : 'ProductView',
                meta     : {
                    title: 'Product View',
                },
                component: ProductView,
                props    : true,
            },
        ],
    },
]

const router = createRouter({
    history             : createWebHistory(process.env.BASE_URL),
    linkActiveClass     : 'active',
    linkExactActiveClass: 'active',
    routes,
})

export default router
