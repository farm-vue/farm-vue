import Vue from 'vue'
import VueRouter from 'vue-router'
import Console from '../components/Console/index.vue'
import Home from '../components/Home/index.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/console',
        name: 'Console',
        component: Console,
        children:[
            {
              // 内容页
              path: '/user',
              name: 'User',
              component: User
            }
        ]
    },
    // {
    //     path: '/user',
    //     name: 'User',
    //     component: Main
    // },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isLogin: false
        }
    }

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
