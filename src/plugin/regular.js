/**
* @param {*} poneInput string
* @description 正则判断用户输入的手机号是否有效
*/
export const isPoneAvailable = (poneInput) => {
    let myreg = /^1[0-9]{10}$/;
    if (!myreg.test(poneInput.val())) {
        return false;
    } else {
        return true;
    }
}

/**
* @param {*} tel string
* @description 判断是否为电话号码
*/
export const isTelAvailable = (tel) => {
    let myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (!myreg.test(tel)) {
        return false;
    } else {
        return true;
    }
}

/**
* @param {*} idStr string
* @description  验证邮箱
*/
export const isEmail = (idStr) => {
    let str = idStr.trim();
    let regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }


}

/**
* @param {*} idStr string
* @description  验证身份证号
*/
export const isIdCard = (idStr) => {
    let str = idStr.trim();
    let regex = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }
}

//密码正则   8位以上  必须数字加字母
export const passwordPattern = (value) => {
    const phone = /^(?=.*\d)(?=.*[A-Za-z])[\dA-Za-z]{8,16}$/;
    return phone.test(value)
}

//正则手机号和电话号  允许符号和数字     正则console.log(/[@#$%^&*_+!\d]/.test(this.phone));也行
export const teleAndMobilePhone = (value) => {
    let symbolRegular = /[\@\#\$\%\^\&\*\_\-\+\!]/
    let numberRegular = /[0-9]/
    if (symbolRegular.test(value) && numberRegular.test(value)) {
        return true
    } else if (numberRegular.test(value)) {
        return true
    } else {
        return false
    }
}


/**
* @param {*} idStr string
* @description 验证输入的内容是否是空
*/
export const isNull = (idStr) => {
    let str = idStr.trim(); //去除头尾空格
    let regex = /\S/;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }

}


/**
* @param {*} idStr string
* @description 验证输入的字符是否符合两位小数
*/
export const isTwoSmallNum = (idStr) => {
    let str = idStr.trim();
    let regex = /^\d+(\.\d{0,2})?$/;;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }
}


/**
* @param {*} idStr string
* @description 验证输入的字符是否是英文字母
*/
export const isLetter = (idStr) => {
    let str = idStr.trim();
    let regex = /^[a-zA-Z]+$/;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }
}
/**
* @param {*} idStr string
* @description 验证日期格式是否为YYYY-MM-DD格式
*/

export const isDate = (idStr) => {

    let str = idStr.trim();
    let regex = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    let r = str.match(regex); // 使用match方法获取指定字符串的值

    if (r == null) {
        return false
    } else {
        return true
    }
}
/**
* @param {*} idStr string
* @description 验证日期格式是否为YYYY-MM-DD hh:mm:ss格式
*/
export const isDateTime = (idStr) => {

    let str = idStr.trim();
    let regex = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    let r = str.match(regex); // 使用match方法获取指定字符串的值

    if (r == null) {
        return false
    } else {
        return true
    }
}
/**
* @param {*} idStr string
* @description 验证整数
*/
export const isInteger = (idStr) => {
    let str = idStr.trim();
    let regex = /^[-+]?\d*$/;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }


}
/**
* @param {*} idStr string
* @description 验证双精度
*/
export const isDouble = (idStr) => {
    let str = idStr.trim();
    let regex = /^[-\+]?\d+(\.\d+)?$/;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }
}
/**
* @param {*} idStr string
* @description  验证中文
*/
export const isChinese = (idStr) => {
    let str = idStr.trim();
    let regex = /^[\u0391-\uFFE5]+$/;
    if (!regex.test(str)) {
        return false
    } else {
        return true
    }

}

