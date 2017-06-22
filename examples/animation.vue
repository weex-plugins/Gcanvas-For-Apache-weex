<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="top: 0; width:750;height:750;position:absolute; background-color:rgba(0,0,0,0.1)" ></gcanvas>
	</div>
</template>
<script>

	// var gcanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../js/src/gcanvas'); //调试使用


	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			var gcanvas = GCanvas.start(ref);

			var ctx = gcanvas.getContext('2d');
			var offsetX = 0;
			setInterval(function(){
				ctx.clearRect(0, 0, 750, 750);
				ctx.fillStyle = 'red';
				ctx.fillRect(offsetX, 10, 100, 100);

				offsetX = (offsetX + 1 ) % 750;
			}, 16);		
		}
	};
</script>