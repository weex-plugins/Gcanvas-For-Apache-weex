<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
		<text ref="title" style="width:750;height:400;background-color:#e0e0e0">Output:{{output}}</text>
	</div>
</template>
<script>
	// var GCanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../../js/src/gcanvas'); //调试使用
	var wwu=require('./resources/weex-webgl-utils');


	module.exports = {
		data: {
            output: ""
        },

		mounted: function () {

			var ref = this.$refs.canvas_holder;			

			var gcanvas = GCanvas.start(ref);
			var gl = gcanvas.getContext("webgl");

			var texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);

			var value = gl.getParameter(gl.TEXTURE_BINDING_2D);
			var result = (parseInt(value) == parseInt(texture));
			var msg = wwu.getResultMessage(result, "gl.bindTexture(), gl.getParameter(gl.TEXTURE_BINDING_2D)");
			this.output += msg;
		}
	};
</script>