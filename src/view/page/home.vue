<template>
  <div class="home">
    <div id="watermark"></div>
    <div
      id="watermarkDirective"
      v-watermark="{
        watermarkParentNode: 'watermarkDirective',
        text: '自定义指令水印内容', // 水印文字内容
        angle: 25, // 水印倾斜度
        color: 'rgba(0,0,0,.15)', // 水印文字颜色
        fontSize: '16px', //   水印文字大小
        top: 0, // 水印区域距离浏览器可视区域顶部的距离，单位px
      }"
    ></div>
    <div class="animate-banner" id="animate-banner">
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i1.png" data-move-multiple="16.395" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i2.png" data-move-multiple="16.395" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i3.png" data-move-multiple="12.145" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i4.png" data-move-multiple="3.718" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i5.png" data-move-multiple="14.573" />
      </div>
      <div class="layer">
        <img
          src="../../assets/images/bilibiliBanner/i6.png"
          data-move-multiple="29.277"
          data-is-opacity="0"
        />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i7.png" data-move-multiple="2.342" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i8.png" data-move-multiple="1.952" />
      </div>
      <div class="layer">
        <img
          src="../../assets/images/bilibiliBanner/i9.png"
          data-move-multiple="4.098"
          data-is-opacity="1"
        />
      </div>
      <div class="layer">
        <img
          src="../../assets/images/bilibiliBanner/i10.png"
          data-move-multiple="2.826"
          data-is-opacity="1"
        />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i11.png" data-move-multiple="1.457" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i12.png" data-move-multiple="1.092" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i13.png" data-move-multiple="1.104" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i14.png" data-move-multiple="0.781" />
      </div>
      <div class="layer">
        <img src="../../assets/images/bilibiliBanner/i15.png" data-move-multiple="0.546" />
      </div>
    </div>
  </div>
</template>
<script>
import WaterMark from "../../plugin/waterMark";
export default {
  name: "Navs",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.showMark(); //水印
    let _this = this;
    // 鼠标移动
    const mb = document.getElementById("animate-banner");
    let intX;
    let imgs = document.querySelectorAll(".layer img");
    imgs = [...imgs];

    let o_imgs_styles = imgs.map(el => {
      let s = window.getComputedStyle(el, null).getPropertyValue("transform");
      return `transform: ${s}`;
    });

    let o_imgs_opacitys = imgs.map(el => {
      let o = window.getComputedStyle(el, null).getPropertyValue("opacity");
      return `opacity: ${0}`;
    });

    mb.onmouseenter = function({ x }) {
      intX = x;
    };
    mb.onmousemove = function({ x }) {
      imgs.forEach((el, i) => {
        const dm = el.dataset.moveMultiple;
        const dis = (intX - x) / Number(dm);
        const transform_arr = o_imgs_styles[i].split(",");
        let translate_x = Number(transform_arr[4]);
        let new_translate_x = translate_x + dis;
        transform_arr.splice(4, 1, String(new_translate_x));
        let transform_str = transform_arr.join(",");

        if (el.dataset.isOpacity) {
          const o_arr = o_imgs_opacitys[i].split(":");
          const o_value = Number(o_arr[1]);
          let href_w = window.screen.width / 2;

          const o_dis = Number(el.dataset.isOpacity) ? intX - x : x - intX;

          let new_o_value = o_dis / href_w;
          o_arr.splice(1, 1, new_o_value);
          let o_str = o_arr.join(":");
          transform_str += `; ${o_str}`;
        }

        el.setAttribute("style", transform_str);
      });
    };
    mb.onmouseleave = function() {
      imgs.forEach((el, i) => {
        el.setAttribute("style", o_imgs_styles[i]);
      });
    };
  },
  methods: {
    showMark() {
      //调用类
      new WaterMark({
        watermark_rows: 10, // 水印行数
        watermark_txt: "吴晓晴的项目", // 水印内容
        watermark_width: 200, // 水印宽度
        watermark_color: "rgba(0,0,0,.15)", // 字体颜色
        watermark_fontsize: "16px", // 字体大小
        watermark_angle: 30, // 字体倾斜角度
        watermark_height: 140, // 水印长度
        watermark_y_space: 10, // Y轴间隔
        watermark_alpha: 1, // 水印字体透明度
        watermark_parent_node: "watermark"
      });
    }
  }
};
</script>
<style scoped>
html,
body {
  margin: 0;
}
.home {
  height: 2000px;
}
#watermark,
#watermarkDirective {
  width: 100%;
  height: 400px;
  border: 1px solid red;
  position: relative;
}
.animate-banner {
  margin: 0 auto;
  background-color: #f9f9f9;
  position: relative;
  height: 180px;
  z-index: 0;
  overflow: hidden;
}
.layer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layer:nth-of-type(1) > img {
  width: 5612px;
  height: 209px;
  transform: scale(1) translate(0px, -17.4194px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(2) > img {
  width: 5612px;
  height: 209px;
  transform: scale(1) translate(1277.42px, 0px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(3) > img {
  width: 1841px;
  height: 188px;
  transform: scale(1) translate(783.871px, 0px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(4) > img {
  width: 1671px;
  height: 204px;
  transform: scale(1) translate(-739.742px, 0px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(5) > img {
  width: 290px;
  height: 72px;
  transform: scale(1) translate(705.484px, 52.2581px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(6) > img {
  width: 238px;
  height: 98px;
  transform: scale(1) translate(292.645px, 42.271px) rotate(0deg);
  opacity: 0;
}
.layer:nth-of-type(7) > img {
  width: 1428px;
  height: 146px;
  transform: scale(1) translate(130.065px, 16.2581px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(8) > img {
  width: 1428px;
  height: 94px;
  transform: scale(1) translate(-406.452px, 56.9032px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(9) > img {
  width: 230px;
  height: 160px;
  transform: scale(1) translate(-278.71px, 18.5806px) rotate(0deg);
  opacity: 0;
}
.layer:nth-of-type(10) > img {
  width: 67px;
  height: 118px;
  transform: scale(1) translate(-394.839px, 37.1613px) rotate(0deg);
  opacity: 0;
}
.layer:nth-of-type(11) > img {
  width: 314px;
  height: 132px;
  transform: scale(1) translate(-104.516px, 15.6774px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(12) > img {
  width: 2483px;
  height: 209px;
  transform: scale(1) translate(116.129px, 0px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(13) > img {
  width: 487px;
  height: 170px;
  transform: scale(1) translate(250.839px, 15.6774px) rotate(0deg);
  opacity: 1;
}
.layer:nth-of-type(14) > img {
  width: 515px;
  height: 245px;
  transform: scale(1) translate(2438.71px, 0px) rotate(0deg);
  filter: blur(2px);
  opacity: 1;
}
.layer:nth-of-type(15) > img {
  width: 1112px;
  height: 209px;
  transform: scale(1) translate(-1161.29px, 0px) rotate(0deg);
  filter: blur(1px);
  opacity: 1;
}
#canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>