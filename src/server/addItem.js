/**
 * 添加商品弹窗api
 */
//方式
import { post } from "../config/axios"

const addItem = {
    //分页获取商品列表
    getProductListData(params){
        return post('/cloud/item/queryItemPage.do', params)
    },

}

export default addItem
