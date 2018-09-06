import axios from 'axios';
//axios.defaults.withCredentials=true;//携带cookie信息
let base='http://127.0.0.1:3000';
export const login = param =>{return axios.post(`${base}/login`, param)};//登录
export const showBookData= () =>{return axios.post(`${base}/showBookData`)};//显示书籍数据
