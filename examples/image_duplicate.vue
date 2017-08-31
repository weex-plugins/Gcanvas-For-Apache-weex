<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
	</div>
</template>
<script>
	// var gcanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../js/src/gcanvas'); //调试使用
	var Image=require('../js/src/gcanvasimage'); //调试使用
	// var GCanvas=require('weex-gcanvas'); //调试使用
	// var Image=require('weex-gcanvas/gcanvasimage');


	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			var gcanvas = GCanvas.start(ref);

			var ctx = gcanvas.getContext('2d');
			// //rect
			// ctx.fillStyle = 'red';
			// ctx.fillRect(0, 0, 100, 100);

			// //rect
			// ctx.fillStyle = 'black';
			// ctx.fillRect(100, 100, 100, 100);
			// ctx.fillRect(25, 210, 700, 5);

			// //circle
			// ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
			// ctx.fill();
			
			// setInterval(function(){
				var image = new Image();
				image.onload = function(){
					ctx.drawImage(image, 0, 330);
				}
				image.src = 'https://www.khronos.org/assets/uploads/ceimg/made/assets/uploads/apis/OpenGL-ES_100px_May16_225_75.png';

				var image2 = new Image();
				image2.onload = function(){
					ctx.drawImage(image2, 300, 330);
				}
				image2.src = 'https://www.khronos.org/assets/uploads/ceimg/made/assets/uploads/apis/OpenGL-ES_100px_May16_225_75.png';
				// image2.src = 'https://webglfundamentals.org/webgl/resources/leaves.jpg';

			// }, 20);
		}
	};
</script>