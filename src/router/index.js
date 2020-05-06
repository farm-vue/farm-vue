import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/index.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: User,
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/',
        name: 'Main',
        component: Main,
        children:[
            {
              // 内容页
              path: '/',
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
        component: Login
    }

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
