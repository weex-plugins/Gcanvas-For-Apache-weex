<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="offscreen:0; top: 0; width:750;height:750;position:absolute;background-color:rgba(255,0,0,0.1);)"></gcanvas>
		<gcanvas ref="canvas_offscreen1" style="offscreen:1;width:750;height:750;background-color:rgba(255,0,0,0.1);"></gcanvas>
	</div>
</template>



<script>
    var GCanvas=require('../js/src/gcanvas');
    var cw = 750;
    var ch = 750;
    module.exports = {
        mounted: function(){
            var ref = this.$refs.canvas_holder;
            var gcanvas = GCanvas.start(ref);
            var ctx = gcanvas.getContext("2d");

            var offscreen1 = this.$refs.canvas_offscreen1;
            var gcanvas_offscreen1 = GCanvas.start(offscreen1);
            var ctx_offscreen1 = gcanvas_offscreen1.getContext("2d");

            ctx_offscreen1.save();
            ctx_offscreen1.fillStyle='#FF0000';
            ctx_offscreen1.font="40px Verdana";

            ctx_offscreen1.fillRect(0,0,80,100);
            ctx_offscreen1.fillText("Off-GCanvas",100,50);
            ctx_offscreen1.fillText("Off-Hello World!",100,100);
            ctx_offscreen1.restore();
        //    var offscreen2 = this.$refs.canvas_offscreen2;
        //    var gcanvas_offscreen2 = GCanvas.start(offscreen2);
        //    var ctx_offscreen2 = gcanvas_offscreen2.getContext("2d");

        //    ctx_offscreen2.fillStyle='#00FF00';
        //    ctx_offscreen2.fillRect(0,0,80,100);

        //    ctx_offscreen2.fillText("Hello World!",300,50);

            ctx.fillText("原图文字",100,300);
            ctx.drawImage(gcanvas_offscreen1,10,10);
            //ctx.drawImage(gcanvas_offscreen2,100,100);
        }
    }   
</script>