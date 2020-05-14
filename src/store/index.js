import Vue from 'vue'
import Vuex from 'vuex'
import {logout, login} from '@/api/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.token,
        user: !!localStorage.user,
        isAdmin: !!localStorage.isAdmin,
    },
    getters: {
        // 获得登录状态
        user: state => state.user,
        isAdmin: state => state.isAdmin,
    },
    mutations: {
        // 保存登录状态
        userStatus(state, flag) {
            localStorage.user = flag
            localStorage.isAdmin = flag
            state.user = flag
            state.isAdmin = flag
        },
    },
    actions: {
        // 登录
        login({commit}, data) {
            return new Promise((resolve, reject) => {
                login(data.username, data.password).then(res => {
                    if (res.code === 200) {
                        commit('userStatus', true)
                        localStorage.user = res.user.nickname ? res.user.nickname : res.user.username
                        localStorage.isAdmin = res.user.role == '1' ? true : false
                        localStorage.token = res.token
                        resolve(res)
                    } else {
                        reject(res)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 注册
        logout({commit}, token) {
            return new Promise((resolve, reject) => {
                console.log(token)
                logout(token).then(res => {
                    if (res.code === 200) {
                        commit('userStatus', false)
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        localStorage.removeItem('isAdmin')
                        resolve(res)
                    } else {
                        reject(res)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    modules: {}
})
