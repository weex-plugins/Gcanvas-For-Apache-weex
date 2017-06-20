<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
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

				ctx.fillStyle = 'red';
				ctx.fillRect(0, 0, 100, 100);

				var img = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
				ctx.drawImage(img, 200, 0);
				ctx.drawImage(img, 200+210, 330, 210, 330);
			});
		}
	};
</script>