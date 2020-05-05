import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as api from './api/api'

Vue.use(ElementUI);
Vue.config.productionTip = false;
// 将axios挂载到 Vue原型
Vue.prototype.$http = api;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

