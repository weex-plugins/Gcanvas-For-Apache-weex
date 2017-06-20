<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="top: 0; width:750;height:750;position:absolute; background-color:rgba(255,255,0, 0.3)" ></gcanvas>
	</div>
</template>
<script>

	// var gcanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../js/src/gcanvas'); //调试使用


	module.exports = {
		created: function () {
			console.log('created gcanvas');
			GCanvas.disable();
		},
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			GCanvas.start(ref, function (gcanvas) {
				var ctx = gcanvas.getContext('2d');

				var offsetX = 0;
				setInterval(function(){
					ctx.clearRect(0, 0, 750, 750);
					ctx.fillStyle = 'red';
					ctx.fillRect(offsetX, 0, 100, 100);

					offsetX = (offsetX + 1 ) % 750;
				}, 16);
			});
		}
	};
</script>