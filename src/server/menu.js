import {post,get} from "../config/axios"


//请求方式

// 登录
const getLoginApi = data=> post('/crm/api-login.do',data);
// 退出登陆
const getOutLoginApi = data=> get('/crm/logout.do',data);

// 获取菜单列表
const getMenuApi = data=> post('/crm/api/index/get-navigations.do',data);


export default{
    getLoginApi,
    getOutLoginApi,
    getMenuApi,
}