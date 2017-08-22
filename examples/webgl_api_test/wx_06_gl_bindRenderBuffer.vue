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

			var renderbuffer = gl.createRenderbuffer();
			gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);

			var value = gl.getParameter(gl.RENDERBUFFER_BINDING);
			var result = (parseInt(value) == parseInt(renderbuffer));
			var msg = wwu.getResultMessage(result, "gl.bindRenderbuffer(), gl.getParameter(gl.RENDERBUFFER_BINDING)");
			this.output += msg;
		}
	};
</script>