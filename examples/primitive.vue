<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;"></gcanvas>
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

				//rect
				ctx.fillStyle = 'red';
				ctx.fillRect(0, 0, 100, 100);

				//rect
				ctx.fillStyle = 'black';
				ctx.fillRect(100, 100, 100, 100);
				ctx.fillRect(25, 210, 700, 5);

				//circle
				ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
				ctx.fill();				
			});
		}
	};
</script>