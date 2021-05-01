/**
 * 公共js方法
 */
//目录
//Debounce     防抖
//getFileType     获取文件类型
//splitObj         将obj对象参数拆分成get请求后的参数
//downloadFileMethod            a标签下载文件方法
//getBase64                传入图片路径，返回base64
//unique                 数组去重 根据id
//getArrMaxNum             求数组最大值
//splitArr            按长度分隔数组 一维转多维  轮播可能用到

// 函数防抖
// 防抖
export const Debounce = (fn, t) => {
  let delay = t || 500
  let timer
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
    }
    let callNow = !timer
    timer = setTimeout(() => {
      timer = null
    }, delay)
    if (callNow) fn.apply(this, args)
  }
}

//按长度分隔数组 一维转多维  轮播可能用到
export const splitArr = (arr, size) => {
  // 制作二维数组方便轮播效果
  let len = arr.length;
  let n = size; //假设每行显示n个
  let lineNum = len % n === 0 ? len / n : Math.floor(len / n + 1);
  let res = [];
  for (let i = 0; i < lineNum; i++) {
    // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
    let temp = arr.slice(i * n, i * n + n);
    res.push(temp);
  }
  return res
}



/**
 * 截取文件路径类型 .jpg .png .mp4等
 */
export const getFileType = (url) => {
  return url.substring(url.lastIndexOf("."));
}

//求数组最大值  一维数组  数值字符串
export const getArrMaxNum = (arr) => {
  return Math.max.apply(null, arr)
}




/**
 * 将obj对象参数拆分成get请求后的参数
 */
export const splitObj = (obj) => {
  obj = JSON.stringify(obj);
  obj = obj.replace(/\{|\}|'|"+/g, '');
  let arr = obj.split(',');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/:/g, '=') + '&';
  }
  let str = arr.join('');
  str = str.slice(0, str.length - 1);
  str = '?' + str;
  return str;

}
//对象参数拼成路径参数
export const qs = (json) => {
  let str = ''
  for (let key in json) {
    if (json.hasOwnProperty(key)) {
      // if(json[key] == "" || json[key] == null || json[key] == undefined) continue;
      str += key + '=' + json[key] + '&'
    }
  }
  str = str.substr(0, str.lastIndexOf('&'))
  return str

}
//a标签下载文件方法
export const downloadFileMethod = (downloadPath) => {
  let aLink = document.createElement("a");
  aLink.setAttribute("href", downloadPath);
  aLink.setAttribute("download", ""); // download属性
  aLink.setAttribute("target", "_blank");
  aLink.setAttribute("id", "start");
  // 防止反复添加
  if (document.getElementById("start")) {
    document.body.removeChild(document.getElementById("start"));
  }
  document.body.appendChild(aLink);
  aLink.click();

}
//传入图片路径，返回base64
export const getBase64 = (url, callback) => {
  //通过构造函数来创建的 img 实例，在赋予 src 值后就会立刻下载图片，相比 createElement() 创建 <img> 省去了 append()，也就避免了文档冗余和污染
  var Img = new Image(), dataURL = '';
  Img.setAttribute("crossOrigin", 'Anonymous') // 解决控制台跨域报错的问题
  Img.src = url + "?t=" + new Date().getTime(); // 处理缓存,fix缓存bug,有缓存，浏览器会报错;
  Img.onload = function () { //要先确保图片完整获取到，这是个异步事件
    var canvas = document.createElement("canvas"), //创建canvas元素
      width = Img.width, //确保canvas的尺寸和图片一样
      height = Img.height;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(Img, 0, 0, width, height); //将图片绘制到canvas中
    dataURL = canvas.toDataURL('image/jpeg'); //转换图片为dataURL
    callback ? callback(dataURL) : null; //调用回调函数
  };


}
//数组去重 根据id
export const unique = (arr) => {
  const res = new Map();
  return arr.filter((a) => !res.has(a.id) && res.set(a.id, 1));
}

