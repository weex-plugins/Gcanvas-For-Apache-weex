<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
	</div>
</template>
<script>
	// var gcanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../js/src/gcanvas'); //调试使用


	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			var gcanvas = GCanvas.start(ref);

			var ctx = gcanvas.getContext('webgl');
			// callNative("abc", [1,2,3], "args");

			extendCallNative({"key":12, "args":"args"});
		}
	};
</script>