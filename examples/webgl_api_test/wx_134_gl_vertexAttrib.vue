<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
		<text ref="title" style="width:750;height:400;background-color:#e0e0e0">Output:{{output}}</text>
	</div>
</template>
<script>
	// var GCanvas=require('weex-gcanvas; //正式使用请用这个
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
			var array;
			for (var ii = 0; ii < 1/*numVertexAttribs*/; ++ii) {
				
				//vertexAttr[1234]fv
				gl.vertexAttrib1fv(ii, [1]);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 1 && array[1] == 0 && array[2] == 0 && array[3] == 1)
				{
					this.output += "Pass1, ";
				}
				else
				{
					this.output += "Fail1, ";
				}

				gl.vertexAttrib2fv(ii, [1, 2]);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 1 && array[1] == 2 && array[2] == 0 && array[3] == 1)
				{
					this.output += "Pass2, ";
				}
				else
				{
					this.output += "Fail2, ";
				}


				gl.vertexAttrib3fv(ii, [1, 2, 3]);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 1 && array[1] == 2 && array[2] == 3 && array[3] == 1)
				{
					this.output += "Pass3, ";
				}
				else
				{
					this.output += "Fail3, ";
				}

				gl.vertexAttrib4fv(ii, [1, 2, 3, 4]);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 1 && array[1] == 2 && array[2] == 3 && array[3] == 4)
				{
					this.output += "Pass4, ";
				}
				else
				{
					this.output += "Fail4, ";
				}

				//vertexAttr[1234]f
				gl.vertexAttrib1f(ii, 5);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 5 && array[1] == 0 && array[2] == 0 && array[3] == 1)
				{
					this.output += "Pass5, ";
				}
				else
				{
					this.output += "Fail5, ";
				}


				gl.vertexAttrib2f(ii, 6, 7);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 6 && array[1] == 7 && array[2] == 0 && array[3] == 1)
				{
					this.output += "Pass6, ";
				}
				else
				{
					this.output += "Fail6, ";
				}

				gl.vertexAttrib3f(ii, 7, 8, 9);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 7 && array[1] == 8 && array[2] == 9 && array[3] == 1)
				{
					this.output += "Pass7, ";
				}
				else
				{
					this.output += "Fail7, ";
				}


				gl.vertexAttrib4f(ii, 6, 7, 8, 9);
				array = gl.getVertexAttrib(ii , gl.CURRENT_VERTEX_ATTRIB);
				if(array[0] == 6 && array[1] == 7 && array[2] == 8 && array[3] == 9)
				{
					this.output += "Pass8, ";
				}
				else
				{
					this.output += "Fail8, ";
				}
			}

			var msg = wwu.getResultMessage(true, "gl.getVertexAttrib(0, gl.CURRENT_VERTEX_ATTRIB)");
			this.output += msg;
		}
	};
</script>