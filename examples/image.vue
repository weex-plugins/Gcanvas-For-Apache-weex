<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
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
			ctx.fillStyle = 'red';
			ctx.fillRect(0, 0, 100, 100);

			var image = new Image();
			image.onload = function(){
				ctx.drawImage(image, 200, 0);
				ctx.drawImage(image, 200+210, 330, 225, 75);
			}
			image.src = 'https://www.khronos.org/assets/uploads/ceimg/made/assets/uploads/apis/OpenGL-ES_100px_May16_225_75.png';

		}
	};
</script>