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

			var imageLoaded = false;
			var image = new Image();
			image.src = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';

			setInterval(function(){
				ctx.clearRect(0, 0, 750, 750);
				ctx.fillStyle = 'red';
				ctx.fillRect(offsetX, 10, 100, 100);

				if( image.complete )
				{
					ctx.drawImage(image, offsetX, 200, 210, 330);
				}

				offsetX = (offsetX + 1 ) % 750;

			}, 16);		
		}
	};
</script>