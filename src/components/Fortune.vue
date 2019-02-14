<template>
  <div class="hello">
    <h1>姻缘运签活动</h1>
    <ul class="imgBox">
      <li>设计图</li>
      <li>
        <img src="../assets/img/f1.png" alt="">
      </li>
      <li>
        <img src="../assets/img/f2.png" alt="">
      </li>
      <li>
        <img src="../assets/img/f3.png" alt="">
      </li>
      <li>
        <img src="../assets/img/f4.png" alt="">
      </li>
    </ul>
    <dl>
      <dt>1.ios 输入昵称时页面上调后不会恢复，导致结果页面也是往上显示</dt>
      <dd class="dd">
        <p>
          app内嵌浏览器，输入框输入内容后，页面不会下拉到原来位置，解决办法： input.onblur 时，强制 window.scrollTo(0,0);
        </p>
      </dd>

      <dt>2.[IOS]上传的照片自动旋转角度| 업로드한 사진이 자동으로 방향 전환됨.</dt>
      <dd class="dd">
        <p>
          目前app内存在改问题，无法解决
        </p>
      </dd>

      <dt>3.[IOS]上传的照片自动旋转角度| 업로드한 사진이 자동으로 방향 전환됨.</dt>
      <dd class="dd">
        <p>
          目前app内存在改问题，无法解决
        </p>
      </dd>

      <dt>4.结果页点击‘再玩一次’后直接点击‘确认生成’可以直接生成结果.</dt>
      <dd class="dd">
        <p>
          一个项目凡是涉及到再玩一次，，最好是刷新页面，如果通过路由跳转，最好把已经存在的重要数据（尤其是vuex）清空。
        </p>
      </dd>

      <dt>5.结果页中偶现空白</dt>
      <dd class="dd">
        <p>
          使用canvas2绘制图片的时候，canvas绘制线上图片的时候，会出现绘制失败的空白页，解决办法，在请求到接口后，立马将图片转化为base64，，canvas2在绘制图片的时候。图片是base64
          就没问题，另外canvas2，绘制的时候，比较慢，建议原生canvas绘制
        </p>
      </dd>

      <dt>6.[iOS]晃动手机移动结果页时，显示”撤销“alert</dt>
      <dd class="dd">
        <p>
          摇一摇手机自带功能，无法控制，除非没有输入框输入文字
        </p>
      </dd>

      <dt>7.结果页里选择再来一签并进入到上传照片页面后摇一摇手机就可以直接生成新的结果页</dt>
      <dd class="dd">
        <p>
          一个项目凡是涉及到再玩一次，，最好是刷新页面，如果通过路由跳转，最好把已经存在的重要数据（尤其是vuex）清空。
        </p>
      </dd>

      <dt>8.[Android]姓名处有光标的情况下点击除性别外的其他项目都会调出键盘</dt>
      <dd class="dd">
        <p>
          在其他元素点击的事件中加 input.blur()   让input失去焦点
        </p>
      </dd>

      <dt>9.首次进入”填写信息“页面，点击【性别】时，性别按钮会闪一下</dt>
      <dd class="dd">
        <p>
          性别选中切换图片闪的原因，是图片加载慢造成的，解决办法，压缩图片，在活动中配置图片的压缩
        </p>
      </dd>

      <dt>10.点击“请输入姓名”后画面放大偏移，图片全部被遮挡</dt>
      <dd class="dd">
        <p>
          input聚焦的时候页面放大，，解决办法：设置input的字体大小为16px
        </p>
      </dd>

      <dt>11.[IOS]姓名处输入表情生成的结果页里不显示“的猪年咔叽签”</dt>
      <dd class="dd">
        <p>
          如果结果页文案显示的时候，尽量将动态的变量和固定文案分割开 《span》{{'变量'}}《/span》的猪年咔叽签
        </p>
      </dd>

      <dt>12.分享解密后生成的图片中星座名称错误</dt>
      <dd class="dd">
        <p>
          星座代码：
          function constellation(date){
              let now =  new Date(date);
              let m = now.getMonth()+1;
              let d = now.getDate();
              let s="魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
              let arr=[20,19,21,20,21,22,23,23,23,23,23,22];
              return s.substr(m*2-(d<arr[m-1]?2:0),2);
          }
        </p>
      </dd>

      <dt>13.输入框输如最多16个字符</dt>
      <dd class="dd">
        <p>
          function inputName(byteLength){  //byteLength  最大的字节数
              let value = this.form.name;
              var newvalue = value.replace(/[^\x00-\xff]/g, "**"); //输入内容
              var length = newvalue.length;//获取内容长度

              //当填写的字节数小于设置的字节数
              if (length * 1 <=byteLength * 1){
              return;
              }
              var limitDate = newvalue.substr(0, byteLength);
              var count = 0;
              var limitvalue = "";
              for (var i = 0; i < limitDate.length; i++) {
              var flat = limitDate.substr(i, 1);
              if (flat == "*") {
              count++;
              }
              }
              var size = 0;

              //if 基点是×; 判断在基点内有×为偶数还是奇数
              if (count % 2 == 0) {
              //当为偶数时
              size = count / 2 + (byteLength * 1 - count);
              limitvalue = value.substr(0, size);
              } else {
              //当为奇数时
              size = (count - 1) / 2 + (byteLength * 1 - count);
              limitvalue = value.substr(0, size);
              }
              this.form.name = limitvalue;
          },
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
  width: 100%;
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
