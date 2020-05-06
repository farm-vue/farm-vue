import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8000";

const loginUrl = "/user/login/";
const logoutUrl = "/user/logout/";
const userListUrl = "/user/";


export function login(username, password) {
    return Axios.post(loginUrl, {
        username: username,
        password: password,
    }).then(res => res)
}

export function logout(user) {
    return Axios.post(logoutUrl, {
        user: user
    }).then(res => res.data)
}

export function UserList() {
    return Axios.get(userListUrl).then(res => res.data)
}

