console.log('解构赋值开始')
//普通解构
const obj = { name: 'wxq', age: 24 }
const arr = [1,2]
function fun1() {
    const { name, age } = obj
    console.log(name, age)
    const [num1,num2] = arr
    console.log(num1,num2)
}
//解构并重命名
function fun2() {
    const { name: newName, age } = obj
    console.log(newName, age)
}
fun1()


