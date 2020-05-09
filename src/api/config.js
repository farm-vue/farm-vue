import Axios from "axios";

Axios.defaults.baseURL = "http://47.98.153.78:9000/";

// 添加一个请求拦截器
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(22, localStorage.token)
    if (localStorage.token) {
        config.headers['Authorization'] = 'Token ' + localStorage.token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default Axios
