<template>
  <div>
  	<bubble ref="bubble_container" style="width:750;height:1024;background-color:black;" :positions="positions" rows="2" :nails="nails">
      <image style="width: 200px;height: 200px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506407433151&di=7e79e35a9a4af5e7409e9ef64c9b0357&imgtype=0&src=http%3A%2F%2Fimagscdn.3234.com%2Fpictures%2F0%2F03%2FygpfZP.jpg" resize="stretch" />
        <div style='background-color:white;'>
           <text style='font-size:50;color:black;'>2</text>
        </div>
        <div style='background-color:yellow;'>
             <text style='font-size:50;color:white;'>3</text>
        </div>
        <div style='background-color:blue;'>
              <text style='font-size:50;color:white;'>4</text>
        </div>
        <div style='background-color:red;'>
               <text style='font-size:50;color:white;'>5</text>
        </div>
        <div style='background-color:#0f6f6f;'>
                <text style='font-size:50;color:white;'>6</text>
        </div>
        <div style='background-color:green;'>
              <text style='font-size:50;color:white;'>7</text>
        </div>
          <!-- <slider class="slider" interval="3000" auto-play="true">
             <div class="frame" v-for="img in imageList"> -->
               <!-- <image class="image" resize="cover" :src="img.src"></image> -->
             <!-- </div> -->
           <!-- </slider> -->
      <div style='background-color:#e03b1c;'>
               <text style='font-size:50;color:white;'>8</text>
      </div>
      <div style='background-color:#4444ff;'>
            <text style='font-size:50;color:white;'>9</text>
      </div>
      <div style='background-color:#9f9f9f;'>
           <text style='font-size:50;color:white;'>10</text>
      </div>
      <div style='background-color:#ffcc00;'>
          <text style='font-size:50;color:white;'>11</text>
     </div>
     <div style='background-color:#eeeeee;'>
          <text style='font-size:50;color:white;'>12</text>
     </div>
  	</bubble>
  </div>
</template>
<script>
module.exports = {
    beforeCreate: function() {
    var domModule = weex.requireModule('dom');
        //目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont2",
            'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
        });
    },
    data: {
        positions :[ [36, 40, 154, 164],
                     [-38, 216, 250, 266],
                     [210, 20, 250, 266],
                     [228, 302, 154, 164],
                     [476, 58, 200, 214],
                     [398, 286, 200, 214],
                     [692, 86, 154, 164],
                     [614, 266, 200, 214] ],

        nails : [ [ [-160, 40, 154, 164],
                    [-208, 216, 154, 164] ], 
                  [ [862, 86, 154, 164],
                    [830, 266, 154, 164] ] ],

        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ],
        src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
    },

    methods: {
      onstart:function(e){
        this.msg = 'onstart'
      },
      onpause:function(e){
        this.msg = 'onpause'
      },
      onfinish:function(e){
        this.msg = 'onfinish'
      },
      onfail:function(e){
        this.msg = 'onfinish'
      }
    }
}
</script>
<style>
  .video {
    width: 630px;
    height: 350px;
    margin-top: 60px;
    margin-left: 60px;
  }
  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }
  .image {
    width: 300px;
    height: 300px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 300px;
    height: 300px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 300px;
    height: 300px;
    position: relative;
  }
</style>
