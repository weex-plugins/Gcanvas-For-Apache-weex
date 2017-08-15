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

			gl.viewport(0, 0, 750, 750);
			
			
			var numVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
			for (var ii = 0; ii < numVertexAttribs; ++ii) {
				gl.vertexAttrib1fv(ii, [1]);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '0');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

				gl.vertexAttrib2fv(ii, [1, 2]);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '2');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

				gl.vertexAttrib3fv(ii, [1, 2, 3]);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '2');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '3');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

				gl.vertexAttrib4fv(ii, [1, 2, 3, 4]);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '2');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '3');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '4');

				gl.vertexAttrib1f(ii, 5);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '5');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '0');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

				gl.vertexAttrib2f(ii, 6, 7);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '6');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '7');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

				gl.vertexAttrib3f(ii, 7, 8, 9);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '7');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '8');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '9');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

				gl.vertexAttrib4f(ii, 6, 7, 8, 9);
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '6');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '7');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '8');
				shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '9');
			}
			


			var msg = wwu.getResultMessage(result, "gl.viewport(), gl.getParameter(gl.VIEWPORT)");
			this.output += msg;
		}
	};
</script>