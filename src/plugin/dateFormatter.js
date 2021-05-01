
// export const formatDate = (date) => {
//     const dateTime = new Date(date);
//     const YY = dateTime.getFullYear();
//     const MM = dateTime.getMonth() + 1 < 10 ? '0' + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1;
//     const D = dateTime.getDate() < 10 ? '0' + dateTime.getDate() : dateTime.getDate();
//     const hh = dateTime.getHours() < 10 ? '0' + dateTime.getHours() : dateTime.getHours();
//     const mm = dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes();
//     const ss = dateTime.getSeconds() < 10 ? '0' + dateTime.getSeconds() : dateTime.getSeconds();
//     return `${YY}-${MM}-${D} ${hh}:${mm}:${ss}`;
// }
// 时间戳转 年月日时分秒  可以传格式
export const formatDate = (v, format) => {
    if (!v) {
        return "";
    }
    var dateV = new Date(v);
    var year = dateV.getFullYear();
    var month = dateV.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var date = dateV.getDate();
    date = date < 10 ? ("0" + date) : date;
    var hour = dateV.getHours();
    hour = hour < 10 ? ("0" + hour) : hour;
    var minute = dateV.getMinutes();
    minute = minute < 10 ? ("0" + minute) : minute;
    var second = dateV.getSeconds();
    second = second < 10 ? ("0" + second) : second;
    var str1 = year + "-" + month + "-" + date
    var str2 = hour + ":" + minute + ":" + second;
    var str3 = month + "-" + date;
    var str
    if ("yyyy-MM-dd" == format) {
        str = str1;
    } else if ("MM-dd" == format) {
        str = str3
    } else {
        str = str1 + " " + str2
    }
    return str;

}

//计算距离截止时间还有多少时间
export const countdown = (endtime) => {
    var endItem = new Date(endtime).getTime();//获取列表传的截止时间
    var nowItem = new Date().getTime();//获取当前时间
    var rightTime = endItem - nowItem;//截止时间减去当前时间
    if (rightTime > 0) {//判断剩余倒计时时间如果大于0就执行倒计时否则就结束
        var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
        var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
        var mm = Math.floor((rightTime / 1000 / 60) % 60);
        var ss = Math.floor((rightTime / 1000) % 60);
        var showTime = dd + "天" + hh + "小时" + mm + "分" + ss + "秒"
    } else {
        var showTime = "预约已结束"
    }
    return showTime

}

//通过2020-12-25 14:05:41时间格式   计算距离当前时间的时间差  订单已等待时间
export const filterWaitTime = (time) => {
    var newTime = time.replace(/-/g, "/"); //兼容IOS
    newTime = Date.parse(newTime); //返回时间戳
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - newTime;
    var result;
    if (diffValue < 0) {
        return;
    }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
    } else result = "刚刚";
    return result;
}




