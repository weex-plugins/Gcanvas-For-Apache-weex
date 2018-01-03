<template>
    <div ref="test">
        <gcanvas class="gcanvas1" ref="gcanvas1" style="offscreen:0;width:750;height:400;background-color:rgba(255,0,0,0.1)"></gcanvas>
        <gcanvas class="gcanvas2" ref="gcanvas2" v-if="" style="offscreen:1;width:750;height:400;background-color:rgba(0,255,0,0.1)"></gcanvas>
    </div>
</template>

<style scoped>
  .gcanvas1 {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 400;
  },
  .gcanvas2 {
    position: absolute; 
    top: 450; 
    left: 0; 
    right: 0; 
    bottom: 850;
  }
</style>

<script>
    //var GCanvas=require('weex-gcanvas');
    var GCanvas = require('../js/src/gcanvas'); //调试使用
    var Image = require('../js/src/gcanvasimage'); //调试使用

    module.exports = {
        mounted: function () {

            //GCanvas1
            var ref1 = this.$refs.gcanvas1;
            var gcanvas = GCanvas.start(ref1);
            var ctx = gcanvas.getContext("2d");


            var ref2 = this.$refs.gcanvas2;
            var offgcanvas = GCanvas.start(ref2);
            var ctx_offscreen = offgcanvas.getContext("2d");

            ctx_offscreen.save();
            ctx_offscreen.fillStyle='#FF0000';
            ctx_offscreen.font="40px Verdana";

            ctx_offscreen.fillRect(0,0,80,100);
            ctx_offscreen.fillText("Off-GCanvas",100,50);
            ctx_offscreen.fillText("Off-Hello World!",100,100);
            ctx_offscreen.restore();

            ctx.fillText("原图文字",100,300);

            var image = new Image();
            image.onload = function(){
                ctx.drawImage(image, 200, 0);
            }
            image.src = 'https://www.khronos.org/assets/uploads/ceimg/made/assets/uploads/apis/OpenGL-ES_100px_May16_225_75.png';

            setInterval(function(){
                ctx.drawImage(offgcanvas,0,0);
            }, 20);
        }
    };
</script>