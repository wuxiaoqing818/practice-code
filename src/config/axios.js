/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import config from './config.js'
import { Loading, Message } from "element-ui";


// let loadingRequestCount = 0;
// let loadingInstance; //创建Loading 的实例
// const showLoading = () => {
//   if (loadingRequestCount === 0) {
//     // element的服务方式 target 我这边取的是表格 项目是后台系统 每个页面都有表格 类似整个表格loading 和在表格配置v - loading一样的效果，这么做是全局实现了，不用每个页面单独去v - loading
//     loadingInstance = Loading.service({ 
//       target: ".el-table"
//     });
//   }
//   loadingRequestCount++;
// };

// const hideLoading = () => {
//   if (loadingRequestCount <= 0) return;
//   loadingRequestCount--;
//   if (loadingRequestCount === 0) {
//     // Vue.$nextTick(() => {//以服务的方式调用的 Loading 需要异步关闭
//     loadingInstance.close();
//     // });
//   }
// };

// 环境的切换
axios.defaults.baseURL = config.baseUrl;

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
export function upload(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params,{
            headers: {
                'content-type': 'multipart/form-data;'
            }
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
