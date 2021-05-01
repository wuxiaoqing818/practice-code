/**一些简洁的数据操作方法*/
export class Dataman {
    /**清理垃圾数据 */
    static clearjunk(data) {
        if (Type.isEmpty(data)) return
        Object.keys(data).forEach((key) => {
            if (Type.isEmpty(data[key])) {
                delete data[key];
            }
        });
        return data;
    }
    /**对象类型可迭代 */
    static map<T = any, R extends any[] = any[]>(data: T, fn: (i: T[keyof T], index: number, key: keyof T, source: T) => any) {
        if (Type.isEmpty(data)) return []
        return Object.keys(data).map((i: any, index) => fn(data[i], index, i, data)) as R;
    }
    static reduce<T extends any[] | Object = any[], R extends any[] | Object = any[]>
        (data: T, fn: (current: R, next: T extends any[] ? T[number] : T[keyof T], key: keyof T, currentIndex: number, source: T) => any,
            initialValue: R) {

        if (Type.isEmpty(data)) return initialValue
        const isNumber = Type.isNumber(initialValue)
        const isString = Type.isString(initialValue)
        return Object.keys(data).reduce((current: any, key: any, nextIndex: any, source: any) => {

            const val = fn(current, data[key], key, nextIndex, data)
            if (Type.isObject(val)) {
                current = { ...current, ...val }
                return current
            }
            if (Type.isArray(val)) {
                current = [...current, ...val]
                return current
            }

            if (isNumber) {
                return current = current + Type.number(val)
            }

            if (isString) {
                return current = current + val
            }
        }, initialValue) as R

    }
    /* 挑选对象属性 */
    static pick<T extends any[] | object, R extends string[]>(data: T, keys: R) {
        if (Type.isEmpty(data)) return data
        return Dataman.reduce(keys, (current, key: string) => ({ [key]: data[key] }), {})
        /* 数组根据函数过滤 */
        return keys.reduce(key => data[key])
    }
    /**遍历多层嵌套结构 */
    static doubleEach<T extends any[] | Object = any[]>(data: T, callback, parentKey?) {
        if (Type.isEmpty(data)) return data
        const dMap = Object.keys(data).map((key, index) => ({ iter: data[key], parentKey: key }))
        const isAsync = callback instanceof callback

        for (const iterator of dMap) {
            const { iter, parentKey } = iterator
            // let key = 0
            const iterData = Dataman.iterate(iter)
            for (const iterator of iterData) {
                const { value, key: index } = iterator
                if (isAsync) {
                    callback(value, index, parentKey, iter)
                }
                callback(value, index, parentKey, iter)

            }

        }

        return data
    }
    /**异步迭代 */
    static async asyncIterate(arr, fn) {
        //  let index = 0
        let bag = [] as any[]
        const iterateData = Dataman.iterate(arr)
        for (const val of iterateData) {
            const { value, key } = val
            const reuslt = await fn(value, key, arr)
            bag.push(reuslt)
            // index++
        }
        return bag
    }
    /**同步迭代 */
    static syncIterate(arr, fn) {
        // let index = 0
        let bag = [] as any[]
        let stop
        const iterateData = Dataman.iterate(arr)

        const call = (c = true) => stop = c
        for (const val of iterateData) {
            const { value, key } = val
            const reuslt = fn(value, key, arr, call)
            bag.push(reuslt)
            if (stop === true) {
                return bag
            }
            //  index++
        }
        return bag
    }
    /**让对象可迭代 */
    static iterate(obj) {
        if (Type.isArray(obj) || Type.isObject(obj)) {
            return Object.keys(obj).map(key => ({ value: obj[key], key }))
        }
        return []
    }
    /**检测值再某个范围内 */
    static inRange(num, range = []) {
        const matchNum = Type.number(num)
        let [min = 0, max = 0] = range
        min = Type.number(min)
        max = Type.number(max)
        if (matchNum < min || matchNum > max) return false
        return true
    }
    /**equal property 检测对象2的已有属性是否全等对象1 */
    static ep(obj1, obj2) {
        let isEq = true
        Dataman.syncIterate(obj1, (val, key, recisour, call) => {
            if (val !== obj2[key]) {
                isEq = false
                call()
            }
        })
        return isEq
    }
    /**过滤属性  */
    static omit<T>(obj: T, fields: string | string[]) {
        fields = Type.array(fields)
        const omitObj = { ...obj }
        fields.forEach(k => delete omitObj[k])
        return omitObj
    }
    /** 截取数字字符数组的长度默认从右边开始*/
    static cut(str: string, length = 1) {
        return str.substring(0, str.length - length)
    }
}