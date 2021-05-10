

import {exportNumber} from './export'
console.log(exportNumber)

import {exportDefault} from "./export"
import {obj1} from "./export"
console.log(exportDefault)
console.log(obj1)


//导入函数
import add from "./export"
add()

//导入函数
import {funName as funName2} from "./export"
funName2()


//导入函数并且重命名
import {defineName as defineName} from "./export"
defineName()

//导入全部
import *as all from "./export"

console.log(all)


