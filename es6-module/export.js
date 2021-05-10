//export导出
const exportNumber = 1
export {
    exportNumber
}
const str = 'default'
const obj = {
    obj1: {},
    obj2: {}
}
export const exportDefault = { str }
//解构导出
export const { obj1, obj2 } = obj
console.log(obj1)

//导出函数
function add(){
    console.log('默认导出函数')
}
export default add

//导出函数
function fun(){
    console.log('导出函数')
}

export const funName = fun


//导出函数
function defineFun(){
    console.log('导出函数并且重命名')
}

export const defineName = defineFun






