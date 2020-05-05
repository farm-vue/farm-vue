import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8000";

const loginUrl = "/user/login";


export function login(username, password) {
    Axios.post(loginUrl, {
        username: username,
        password: password,
    }).then(res => res.data)
}

