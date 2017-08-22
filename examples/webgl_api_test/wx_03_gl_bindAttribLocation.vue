<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
		<text ref="title" style="width:750;height:400;background-color:#e0e0e0">Output:{{output}}</text>
	</div>
</template>
<script>
	// var GCanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../../js/src/gcanvas'); //调试使用
	var Image=require('../../js/src/gcanvasimage');
	var wwu=require('./resources/weex-webgl-utils');


	module.exports = {
		data: {
            output: ""
        },

		mounted: function () {

			var vShader = "attribute vec3 v3Position;varying vec2 v_texCoord;void main(void){v_texCoord = vec2((v3Position.x+1.0)/2.0, 1.0-(v3Position.y+1.0)/2.0);gl_Position = vec4(v3Position, 1.0);}";
			var fShader = "precision mediump float;uniform sampler2D s_texture;varying vec2 v_texCoord;void main(void){gl_FragColor = texture2D(s_texture, v_texCoord);}";
			
			var ref = this.$refs.canvas_holder;			

			var gcanvas = GCanvas.start(ref);
			var gl = gcanvas.getContext("webgl");

			var ref = this.$refs.canvas_holder;
			var gl = wwu.initWebGL(ref, 750, 750, vShader, fShader, null, [0, 0, 0, 1], 1.0);

			var v3PositionIndex = gl.bindAttribLocation(gl.program, v3PositionIndex, "v3Position");
			var result = (v3PositionIndex == 1);

			// Check the link status
			var msg = wwu.getResultMessage(result, "gl.bindAttribLocation()");
			this.output += msg;
		}
	};
</script>