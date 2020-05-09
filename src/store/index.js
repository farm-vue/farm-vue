import Vue from 'vue'
import Vuex from 'vuex'
import { logout } from '@/api/api'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        token: localStorage.token
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
        logout({ commit }, token) {
            return new Promise((resolve, reject) => {
            console.log(token)
              logout(token).then(res => {
                  if(res.code === 200 ) {
                       commit('userStatus', false)
                        localStorage.removeItem('token')
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
