<template>
  <div class="hello">
    <h1>剪纸活动</h1>
    <ul class="imgBox">
      <li>设计图</li>
      <li>
        <img src="../assets/img/img1.png" alt="">
      </li>
      <li>
        <img src="../assets/img/img2.png" alt="">
      </li>
      <li>
        <img src="../assets/img/img3.png" alt="">
      </li>
    </ul>
    <dl>
      <dt>1.ios双击图片会放大</dt>
      <dd>浏览器机制，目前无法修改</dd>

      <dt>2.上传的图片ios右侧右白线，android图片右直角</dt>
      <dd class="dd">
        <div>
          <img src="../assets/img/photo.png" alt="" style="width:80px;height:80px;">
        </div>
        <p>上传图片为圆角时，图片的父元素 border-radius = '50%;oveflow:hidden' ,但有的机型，圆角部分图片并没有隐藏，解决办法在父亲元素上加 transform: rotate(0deg);</p>
      </dd>
      <dt>3.页面不完全，且不能向下滑动</dt>
      <dd class="dd">
        <p>即使一屏的页面也要写上页面的最小高度，可能手机在站外或小屏手机中不显示下面的内容</p>
      </dd>

      <dt>4.站外点击文件上传直接进入相册</dt>
      <dd class="dd">
        <p>
          "input type="file" accept="image/png,image/jpeg" 虽然可以限制图片只能上传png和jpeg，但是文件上传调不起相机，直接进入相册，解决办法是"input type="file" accept="image/*"，在上传文件后
          判断格式是否正确
        </p>
      </dd>

      <dt>5.ios摇一摇会将输入框中的文字取消掉</dt>
      <dd class="dd">
        <p>
          目前无法解决，因为摇一摇是手机系统自带，如果想实现摇一摇，可以在输入框之前实现该动作。引导用户摇
        </p>
      </dd>

      <dt>6.点击【再玩一次】时，瞬间显示一个空白框</dt>
      <dd class="dd">
        <p>
          点击【再玩一次】this.$router.replace('upload'); 如果swiper中通过在options设置slide的当前呈现的个数3和间距为20，那么当路由替换时，swiper中的slide会重新初始化宽度会变为100%，故出现swiper的白色边框100%，
          解决办法：通过css设置slide的宽度和margin值
        </p>
      </dd>

    </dl>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    function togglePlay() {
      alert(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dd{
  display: flex;
}
.imgBox{
  height:180px;
  display: flex;
}
.imgBox li{
  width:102px;
}
.imgBox img{
  height: 100%;
}

</style>
