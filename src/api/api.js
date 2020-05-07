import Axios from "axios";

Axios.defaults.baseURL = "http://47.98.153.78:9000/";
// Axios.defaults.headers.common['X-csrftoken'] = ''

// 添加一个请求拦截器
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
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

const loginUrl = "/user/login/";
const logoutUrl = "/user/logout/";
const userListUrl = "/user/";
const categoryUrl = '/category/';
const productUrl = '/produce/';
const orderUrl = '/order/';

export function login(username, password) {
    return Axios.post(loginUrl, {
        username: username,
        password: password,
    }).then(res => res.data)
}

export function logout(user) {
    return Axios.post(logoutUrl, {
        user: user
    }).then(res => res.data)
}

export function userList() {
    return Axios.get(userListUrl).then(res => res.data)
}

export function userDetail(userId) {
    return Axios.get(userListUrl + userId + '/').then(res => res.data)
}

export function userPatch(userId, param) {
    return Axios.patch(userListUrl + userId + '/', param).then(res => res.data)
}

export function userDel(userId) {
    return Axios.delete(userListUrl + userId + '/').then(res => res.data)
}

export function categoryList() {
    return Axios.get(categoryUrl).then(res => res.data)
}

export function productList() {
    return Axios.get(productUrl).then(res => res.data)
}

export function addProduct(param) {
    return Axios.post(productUrl, param).then(res => res.data)
}

export function orderList() {
    return Axios.get(orderUrl).then(res => res.data)
}

