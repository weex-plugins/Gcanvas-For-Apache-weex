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
			var vShader = "attribute vec3 position; "+
						  "uniform mat4 mv; "+
						  "uniform mat4 proj; "+
						   "void main() { "+
							 	"gl_Position = proj * mv * vec4(position, 1.0); "+
							"}";
			var fShader = "void main() { "+
							 	"gl_FragColor = vec4(0.8, 0.8, 0.0, 1.0); "+
							"}";
			

			var ref = this.$refs.canvas_holder;
			var gl = wwu.initWebGL(ref, 750, 750, vShader, fShader, null, [0, 0, 0, 1], 1.0);
			gl.clearColor(0.8, 0.8, 0, 1);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
			
			//display
			gl.flush();
		}
	};
</script>