import Vue from 'vue'
import VueRouter from 'vue-router'
import Console from '../components/Console/index.vue'
import Home from '../components/Home/index.vue'
import Login from '../views/Login.vue'
import Register from "../views/Register";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isLogin: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/console',
        name: 'Console',
        component: Console,
        children:[
            {
                // 内容页
                path: '/user',
                name: 'User',
                component: () => import('../views/User.vue')
            },
            {
                path: '/category',
                name: 'Category',
                component: () => import('../views/Category.vue')
            },
            {
                path: '/project',
                name: 'Project',
                component: () => import('../views/Project.vue')
            },
            {
                path:'/order',
                name: 'Order',
                component: () => import('../views/Order.vue')
            },
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
