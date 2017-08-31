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
			

			// ctx.font="40px Helvetica";
			ctx.font="40px 微软雅黑";
			ctx.fillText("Hello World",10,50);		
		}
	};
</script>