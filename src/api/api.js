import http from './config.js';
import url from './apiUrl.js';

export function login(username, password) {
    return http.post(url.loginUrl, {
        username: username,
        password: password,
    }).then(res => res.data)
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

export function userInfo() {
    return http.get(url.userUrl + 'token_user/').then(res => res.data)
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
    return http.post(url.categoryUrl, data).then(res => res.data)
}

export function categoryPut(categoryId, data) {
    return http.put(url.categoryUrl + categoryId + '/', data).then(res => res.data)
}

export function categoryDel(categoryId) {
    return http.delete(url.productUrl + categoryId + '/').then(res => res.data)
}

export function productList() {
    return http.get(url.productUrl).then(res => res.data)
}

export function productAdd(data) {
    return http.post(url.productUrl, data).then(res => res.data)
}

export function productPut(productId, data) {
    return http.put(url.productUrl + productId + '/', data).then(res => res.data)
}

export function productDel(productId) {
    return http.delete(url.productUrl + productId + '/').then(res => res.data)
}

export function orderList(userId) {
    if (userId != null) {
        return http.get(url.orderUrl + '?user=' + userId).then(res => res.data)
    }
    return http.get(url.orderUrl).then(res => res.data)
}

export function orderDetail(orderId) {
    return http.get(url.orderUrl + orderId + '/').then(res => res.data)
}

export function orderAdd(data) {
    return http.post(url.orderUrl, data).then(res => res.data)
}

export function orderPatch(orderId, data) {
    return http.patch(url.orderUrl + orderId + '/', data).then(res => res.data)
}

export function orderDel(orderId) {
    return http.delete(url.orderUrl + orderId + '/').then(res => res.data)
}

export function shoppingCartList(userId) {
    return http.get(url.shoppingCartUrl+ '?user=' + userId).then(res => res.data)
}

export function shoppingCartAdd(data) {
    return http.post(url.shoppingCartUrl, data).then(res => res.data)
}

export function shoppingCartPatch(shoppingCartId, data) {
    return http.patch(url.shoppingCartUrl + shoppingCartId + '/', data).then(res => res.data)
}
