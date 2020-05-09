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

const loginUrl = "/user/login/";
const logoutUrl = "/user/logout/";
const userUrl = "/user/";
const categoryUrl = '/category/';
const productUrl = '/produce/';
const orderUrl = '/order/';

// [{"key":"Authorization","value":" Token f2123a4dc5e94fa60145f77e4349057d686e90cb","description":""}]格式
export function login(username, password) {
    return Axios.post(loginUrl, {
        username: username,
        password: password,
    }).then(res => {
        console.log(res)
        return res.data
    })
}

export function logout(user) {
    return Axios.post(logoutUrl, {
        user: user
    }).then(res => res.data)
}

export function register(data) {
    return Axios.post(userUrl, data).then(res => res.data)
}

export function userList() {
    return Axios.get(userUrl).then(res => res.data)
}

export function userDetail(userId) {
    return Axios.get(userUrl + userId + '/').then(res => res.data)
}

export function userPatch(userId, data) {
    return Axios.patch(userUrl + userId + '/', data).then(res => res.data)
}

export function userDel(userId) {
    return Axios.delete(userUrl + userId + '/').then(res => res.data)
}

export function categoryList() {
    return Axios.get(categoryUrl).then(res => res.data)
}

export function categoryAdd(data) {
    return Axios.post(productUrl, data).then(res => res.data)
}

export function categoryPatch(data) {
    return Axios.patch(productUrl, data).then(res => res.data)
}

export function categoryDel(categoryId) {
    return Axios.delete(productUrl + categoryId + '/').then(res => res.data)
}

export function productList() {
    return Axios.get(productUrl).then(res => res.data)
}

export function productAdd(param) {
    return Axios.post(productUrl, param).then(res => res.data)
}

export function productPatch(data) {
    return Axios.patch(productUrl, data).then(res => res.data)
}

export function productDel(productId) {
    return Axios.delete(productUrl + productId + '/').then(res => res.data)
}

export function orderList() {
    return Axios.get(orderUrl).then(res => res.data)
}

export function orderDetail(orderId) {
    return Axios.get(orderUrl + orderId + '/').then(res => res.data)
}

export function orderAdd(data) {
    return Axios.post(orderUrl, data).then(res => res.data)
}

export function orderPatch(data) {
    return Axios.patch(orderUrl, data).then(res => res.data)
}

export function orderDel(orderId) {
    return Axios.delete(orderUrl + orderId + '/').then(res => res.data)
}
