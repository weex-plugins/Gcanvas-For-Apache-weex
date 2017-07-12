<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
	</div>
</template>

<script>
	
	var fragmentShaderStr = "void main() { gl_FragColor = vec4(0.8, 0.8, 0.0, 1.0); }";
	var vertexShaderStr = "attribute vec3 position; uniform mat4 mv; uniform mat4 proj; void main() { gl_Position = proj * mv * vec4(position, 1.0); }";

	var GCanvas=require('../../js/src/gcanvas'); //调试使用

	var gcanvas;
	var gl;
	var squareVerticesBuffer;
	var mvMatrix;
	var shaderProgram;
	var vertexPositionAttribute;
	var perspectiveMatrix;

	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			gcanvas = GCanvas.start(ref);

			gl = gcanvas.getContext('webgl');
            
            gl.viewport(0, 0, 750, 750);

            var vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, vertexShaderStr);
            gl.compileShader(vertexShader);
            // if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS))
            // {
            //     alert("Unable to compile the vertex shader");
            //     gl.deleteShader(vertexShader);
            //     return;
            // }
             
            var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, fragmentShaderStr);
            gl.compileShader(fragmentShader);
            // if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS))
            // {
            //     alert("Unable to compile the fragment shader");
            //     gl.deleteShader(fragmentShader);
            //     return;
            // }

            gl.program = gl.createProgram();
            gl.attachShader(gl.program, vertexShader);
            gl.attachShader(gl.program, fragmentShader);
            gl.linkProgram(gl.program);
            // if (!gl.getProgramParameter(gl.program, gl.LINK_STATUS))
            // {
            //     alert("Unable to link shaders");
            //     gl.deleteProgram(gl.program);
            //     gl.deleteProgram(vertexShader);
            //     gl.deleteProgram(fragmentShader);
            //     return;
            // }

            gl.clearColor(0.2, 0.4, 0.6, 1.0);
            gl.clearDepth(1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
             
            var vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            var vertices = new Float32Array([
                0.0,   1.0, 1.0,
                -1.0, -1.0, 1.0,
                1.0,  -1.0, 1.0
            ]);
 
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
             
            gl.useProgram(gl.program);
            var vertexPosition = gl.getAttribLocation(gl.program, "position");
            gl.enableVertexAttribArray(vertexPosition);
            gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);

            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
             
            var fov = 90.0;
            var aspect = 1;
            var nearPlane = 1.0;
            var farPlane = 100.0;
            var top = nearPlane * Math.tan(fov / 2 * Math.PI / 180);
            var bottom = -top;
            var right = top * aspect;
            var left = -right;

            var a = (right + left) / (right - left);
            var b = (top + bottom) / (top - bottom);
            var c = (farPlane + nearPlane) / (farPlane - nearPlane);
            var d = (2 * farPlane * nearPlane) / (farPlane - nearPlane);
            var x = (2 * nearPlane) / (right - left);
            var y = (2 * nearPlane) / (top - bottom);
            var perspectiveMatrix = new Float32Array([
                x, 0, a, 0,
                0, y, b, 0,
                0, 0, c, d,
                0, 0, -1, 0
            ]);
             
            var modelViewMatrix = new Float32Array([
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ]);

            gl.uniformMatrix4fv(gl.getUniformLocation(gl.program, "proj"), false, perspectiveMatrix);
            gl.uniformMatrix4fv(gl.getUniformLocation(gl.program, "mv"), false, modelViewMatrix);

            gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 3);
		}
	};
</script>