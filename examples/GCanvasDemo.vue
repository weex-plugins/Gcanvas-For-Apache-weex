<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
	</div>
</template>
<script>
	var GCanvas=require('weex-gcanvas'); 	//GCanvas
	var Image=require('weex-gcanvas/gcanvasimage'); //GCanvasImage
	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			//创建gcanvas对象
			var gcanvas = GCanvas.start(ref);
			
			//获取context2D
			var ctx = gcanvas.getContext('2d');
			
			//rect
			ctx.fillStyle = 'red';
			ctx.fillRect(0, 0, 100, 100);

			//rect
			ctx.fillStyle = 'black';
			ctx.fillRect(100, 100, 100, 100);
			ctx.fillRect(25, 210, 700, 5);

			//circle
			ctx.fillStyle = '#12CC00';
			ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
			ctx.fill();
			
			//图片
			var image = new Image();
			image.onload = function(){
				ctx.drawImage(image, 200, 0);
			}
			image.src = 'https://www.khronos.org/assets/uploads/ceimg/made/assets/uploads/apis/OpenGL-ES_100px_May16_225_75.png';
		}
	};
</script>