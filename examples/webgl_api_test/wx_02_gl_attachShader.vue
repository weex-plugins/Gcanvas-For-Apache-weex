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

			var gcanvas = GCanvas.start(ref);
			var gl = gcanvas.getContext("webgl");

			var prog = gl.createProgram();
			if (prog == null) {
		    	this.output += "*** Error: gl.createProgram()";
		    	return;
		    }
			
			var shaderArray = [vShader, fShader];
			var shaderTypeArray = [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER];

			for (var i = 0; i <2; i++) {
				var shaderStr = shaderArray[i];
				var shaderType = shaderTypeArray[i];

				var shader = gl.createShader(shaderType);
			    if (shader == null) {
			    	this.output += "*** Error: gl.createShader(" + shaderType + ")";
			    	return;
			    }
			    // Load the shader source
			    gl.shaderSource(shader, shaderStr);
			    // Compile the shader
			    gl.compileShader(shader);
			    // Check the compile status
			    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

			    if (!compiled) {	       		
			    	gl.deleteShader(shader);
			 		this.output += "*** Error: gl.compileShader(" + shader + ")";
		       		return;
				}

				gl.attachShader(prog, shader);
			};
			gl.linkProgram(prog);

			// Check the link status
			var linked = gl.getProgramParameter(prog, gl.LINK_STATUS);			
			var msg = wwu.getResultMessage(linked, "gl.attachShader()");
			this.output += msg;
		}
	};
</script>