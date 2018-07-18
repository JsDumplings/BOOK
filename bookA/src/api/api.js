import axios from 'axios';
//axios.defaults.withCredentials=true;//携带cookie信息
export const login = param =>{return axios.post('http://127.0.0.1:3000/login', param)};//登录
