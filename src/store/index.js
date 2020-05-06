import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
    },
    getters: {
        // 获得登录状态
        isLogin: state => state.isLogin,
    },
    mutations: {
        // 保存登录状态
        userStatus(state, flag) {
            state.isLogin = flag
        },
    },
    actions: {
        //获取登录状态
        userLogin({commit}, flag) {
            commit("userStatus", flag)
        },
    },
    modules: {}
})
