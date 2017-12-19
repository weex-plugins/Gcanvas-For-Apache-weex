<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="top: 0; width:750;height:750;position:absolute; background-color:rgba(0,0,0,0.1)" ></gcanvas>
	</div>
</template>
<script>

	// var GCanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../js/src/gcanvas'); //调试使用
	var Image=require('../js/src/gcanvasimage');

	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			var gcanvas = GCanvas.start(ref);

			var ctx = gcanvas.getContext('2d');
			
			var offsetX = 0;

			setInterval(function(){
				ctx.clearRect(0, 0, 750, 750);
				// ctx.font="40px Helvetica";

				ctx.save();
				ctx.font="20px Verdana";
				ctx.fillText("Hello World", offsetX, 50);	
				ctx.restore();

				ctx.save();
				ctx.font="20px Verdana";
				ctx.fillText("发发发222",offsetX+200, 50);
				ctx.restore();

				ctx.save();
				ctx.font="30px Georgia";
				ctx.fillText("Hello World",offsetX, 100);
				ctx.restore();

				// ctx.save();
				// ctx.font="30px Georgia";
				// ctx.fillText("发发发",offsetX, 150);
				// ctx.restore();

				// ctx.save();
				// ctx.font="30px Georgia";
				// ctx.fillText("啊啊啊啊啊",offsetX, 200);
				// ctx.restore();

				// ctx.save();
				// ctx.font="40px italic bold arial";
				// ctx.fillText("Hello World",offsetX, 150);
				// ctx.restore();

				/*
				ctx.save();
				ctx.font="bold 50px Verdana";
				ctx.fillText("Hello World",offsetX, 200);
				ctx.restore();

				//gradient
				ctx.save();
				ctx.font="30px Verdana";
				var gradient=ctx.createLinearGradient(offsetX,0,offsetX+400, 0);
				gradient.addColorStop("0", "magenta");
				gradient.addColorStop("0.5", "blue");
				gradient.addColorStop("1.0", "red");
				ctx.fillStyle = gradient;
				ctx.fillText("GCanvas is fast engine",offsetX, 250);
				ctx.restore();

				ctx.save();
				ctx.font="40px 微软雅黑";
				ctx.fillText("GCanvas is fast engine", offsetX, 300);
				ctx.restore();
				*/


				offsetX = (offsetX + 1 ) % 750;
			}, 16);	
		}
	};
</script>
