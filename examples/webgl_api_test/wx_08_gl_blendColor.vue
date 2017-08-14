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

			gl.blendColor(1.0, 0.5, 0.8, 1.0);
			var value = gl.getParameter(gl.BLEND_COLOR);
			
			var result = false;
			
			if( value.length == 4 )
			{
				if( value[0] == 1.0 && value[1] == 0.5 && value[2] == 0.8 && value[3] == 1.0 )
				{
					result = true;
				}
			}

			var msg = wwu.getResultMessage(result, "gl.blendColor(), gl.getParameter(gl.BLEND_COLOR)");
			this.output += msg;
		}
	};
</script>