import { Loading } from 'element-ui';
    /**
 * @param {*} target string loading 元素类名
 * @description 传target 指定loading元素，不传默认为整个页面
 */
  let loading
  export const startLoading = (target) => {
     let  loadObj = {
       text: 'Loading...',
       spinner: 'el-icon-loading',
       lock: true,
       background: 'rgba(255, 255, 255, 0.7)'
    }
    if(target) {
      loadObj.target = target
    }
      loading = Loading.service(loadObj)
 }
  export const endLoading = () => {
    loading.close()
 }
  
  

 

 
