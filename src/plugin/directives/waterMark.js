/**
 * 自定义指令'v-watermark'
 * 可以传入自定义参数（v-watermark="markObj"），参数（markObj）格式为
 * {
 *      text: '水印内容',  // 水印文字内容
 *      angle: 25,  // 水印倾斜度
 *      color: 'rgba(0,0,0,.15)',  // 水印文字颜色
 *      fontSize: '16px',  //   水印文字大小
 *      top: 70  // 水印区域距离浏览器可视区域顶部的距离，单位px
 * }
 * 参数是可选的，不传的时候可以直接使用 v-watermark 指令即可
 */

// 记录上一次生成水印的 div 元素 id
let prevDivId = 0;

const number180 = 180;

// 生成水印
const setWatermark = markObj => {
    // 默认设置
    const defaultObj = {
        text: '水印内容',
        angle: 25,
        color: 'rgba(0,0,0,.15)',
        fontSize: '16px',
        top: 70
    }
    Object.assign(defaultObj, markObj);
    // 角度转成负数
    defaultObj.angle = -Math.abs(defaultObj.angle);
    // 随机生成一个 id
    const id = Math.random();
    // 清除上次的水印 div[解决：窗口大小调整时（onresize方法）水印会叠加，导致颜色加深的问题]
    if (prevDivId && document.getElementById(prevDivId) !== null) {
        document.body.removeChild(document.getElementById(prevDivId));
    }
    // 记录 id
    prevDivId = id;

    // 创建画布
    const canvas = document.createElement('canvas');
    // 设置画布的长、宽
    canvas.width = 240;
    canvas.height = 180;

    const context = canvas.getContext('2d');

    // 旋转角度（以弧度计）
    context.rotate((defaultObj.angle * Math.PI) / number180);
    context.font = defaultObj.fontSize + ' 微软雅黑';
    // 设置填充绘画的颜色、渐变或者模式
    context.fillStyle = defaultObj.color;
    context.textAlign = 'left';
    context.textBaseline = 'middle';
    context.fillText(defaultObj.text, 0, canvas.height);

    const div = document.createElement('div');
    div.id = prevDivId;
    div.style.pointerEvents = 'none';
    div.style.position = 'absolute';
    div.style.top = defaultObj.top + 'px';
    div.style.left = '0px';
    div.style.zIndex = '9999';
    div.style.width = document.documentElement.scrollWidth + 'px';
    div.style.height = document.documentElement.scrollHeight + 'px';
    div.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat';
    document.body.appendChild(div);
    return prevDivId;
}

export default {
    watermark: {
        bind: function bind(binding) {
            setWatermark(binding.value || {});
            // 监听窗口变化事件
            window.onresize = () => {
                if (prevDivId !== 0) {
                    setWatermark(binding.value || {});
                }
            }
            // 监听页面滚动
            window.onscroll = () => {
                if (prevDivId !== 0) {
                    setWatermark(binding.value || {});
                }
            }
        },
        unbind: function unbind() {
            document.body.removeChild(document.getElementById(prevDivId));
            prevDivId = 0;
        }
    }
}