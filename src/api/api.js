import http from './config.js';
import url from './apiUrl.js';

// [{"key":"Authorization","value":" Token f2123a4dc5e94fa60145f77e4349057d686e90cb","description":""}]格式
export function login(username, password) {
    return http.post(url.loginUrl, {
        username: username,
        password: password,
    }).then(res => {
        console.log(res)
        return res.data
    })
}

export function logout() {
    return http.post(url.logoutUrl).then(res => res.data)
}

export function register(username, password) {
    return http.post(url.userUrl, {
        username: username,
        password: password,
    }).then(res => res.data)
}

export function userList() {
    return http.get(url.userUrl).then(res => res.data)
}

export function userDetail(userId) {
    return http.get(url.userUrl + userId + '/').then(res => res.data)
}

export function userPatch(userId, data) {
    return http.patch(url.userUrl + userId + '/', data).then(res => res.data)
}

export function userDel(userId) {
    return http.delete(url.userUrl + userId + '/').then(res => res.data)
}

export function categoryList() {
    return http.get(url.categoryUrl).then(res => res.data)
}

export function categoryAdd(data) {
    return http.post(url.productUrl, data).then(res => res.data)
}

export function categoryPatch(data) {
    return http.patch(url.productUrl, data).then(res => res.data)
}

export function categoryDel(categoryId) {
    return http.delete(url.productUrl + categoryId + '/').then(res => res.data)
}

export function productList() {
    return http.get(url.productUrl).then(res => res.data)
}

export function productAdd(param) {
    return http.post(url.productUrl, param).then(res => res.data)
}

export function productPatch(data) {
    return http.patch(url.productUrl, data).then(res => res.data)
}

export function productDel(productId) {
    return http.delete(url.productUrl + productId + '/').then(res => res.data)
}

export function orderList() {
    return http.get(url.orderUrl).then(res => res.data)
}

export function orderDetail(orderId) {
    return http.get(url.orderUrl + orderId + '/').then(res => res.data)
}

export function orderAdd(data) {
    return http.post(url.orderUrl, data).then(res => res.data)
}

export function orderPatch(data) {
    return http.patch(url.orderUrl, data).then(res => res.data)
}

export function orderDel(orderId) {
    return http.delete(url.orderUrl + orderId + '/').then(res => res.data)
}
