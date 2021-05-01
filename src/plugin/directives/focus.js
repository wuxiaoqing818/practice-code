//输入框自动获取焦点指令 
export default {
    //普通的输入框自动获取焦点
    inFocus: {
        inserted(el, binding, vnode) {
            // 聚焦元素
            el.focus()
        }
    },
    //element的input自动获取焦点
    elFocus: {
        inserted(el, binding, vnode) {
            // 聚焦元素
            el.querySelector('input').focus()
        }
    }
}