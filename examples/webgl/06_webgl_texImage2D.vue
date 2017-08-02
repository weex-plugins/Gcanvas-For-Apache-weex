<template>
    <div ref="test">
        <gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
        <image ref="imageRef" style="width:400px;height:400px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO1QTFRFhomSb3J8XGBrdnqDgYWNlJefV1tmfoGKU1diT1NfgISNgoWOYmZwio2Vi4+Wc3eAkJObZGhzUlZiaGt2U1djfYCKZGdyhYiQeHyFio6VgYWOVVllbHB6XWFsY2ZxaWx3jZCYXmFsfYCJcnZ/UVVham54V1tng4aPb3N8WV1pX2JtZWl0YWVvVlpmiYyUWVxohomRd3uEdHiBeX2GZ2t1hIeQVFhkf4OMbnJ8fYGKdnqEb3N9kJScY2dycnaAjpKZdHeBjpKajI+Yc3eBhYiRf4KLXmFtio6Wi4+XjZCZkJSbkZScjI+XlJifTlJe+rAZcwAAAZBJREFUeNp0lOeWgjAQhSdUBQRRbFjX7tpW3XUt23tL3v9xNigJIHh/zRk+5iR3ZgIkULWmwgv+A7VWDWWBR/nSt2gLUzIVbLH1lo8RRW1wEfqxPtCKUaKTMUhURuUhTIi6Q07l6LuAEFdpEld6tWNEx00CKKJ3jsR1xSHJcj4bB+LmkpxT49Yj8mqQUVBBciUk8ITepESJ+5AqY1+uwny5IjDPcADoN0BIwjLOsjKZOewtbi/9fvi338a44CetIai2H/cokPLj9tfEj2wVzD4rIWMlfpu+CXc5Pw4qh5X7AUw4gZIswUENGT8lAN1fMBVeAxIIxYR3Nin0imOe52emdxkyP8aY+0S9Y2d63cNoxvACRTaeI70slst+cjYCAnXmuuS1RKKmy1hKBX0hzaC3KOsxsmz2Ir2NzMcEbVCo+cf5oDOWOzNAucpxxoglnZlT1+KzXk4kymKwL4ttN+73dhHeuWV85zLL073Vw3v7MdDuE3a/JRrCmqwFQ2yV8gmvg/d+aPCMH0GLvB//AgwAo1MTpxsaxVoAAAAASUVORK5CYII="></image>
    </div>
</template>

<script>
    
    var fragmentShaderStr = "precision mediump float;\
                             uniform sampler2D u_image;\
                             varying vec2 v_texCoord;\
                             void main() {\
                                gl_FragColor = texture2D(u_image, v_texCoord);\
                             }";
    var vertexShaderStr = "attribute vec2 a_position;\
                           attribute vec2 a_texCoord;\
                            uniform vec2 u_resolution;\
                            varying vec2 v_texCoord;\
                            void main() {\
                               vec2 zeroToOne = a_position / u_resolution; \
                               vec2 zeroToTwo = zeroToOne * 2.0; \
                               vec2 clipSpace = zeroToTwo - 1.0; \
                               gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); \
                               v_texCoord = a_texCoord; \
                            }";

    var GCanvas=require('../../js/src/gcanvas'); //调试使用
    var Image=require('../../js/src/gcanvasimage');

    var gcanvas;
    var gl;
    var squareVerticesBuffer;
    var mvMatrix;
    var shaderProgram;
    var vertexPositionAttribute;
    var perspectiveMatrix;
    var v3PositionIndex = 0;

    function setRectangle(gl, x, y, width, height) {
      var x1 = x;
      var x2 = x + width;
      var y1 = y;
      var y2 = y + height;
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
         x1, y1,
         x2, y1,
         x1, y2,
         x1, y2,
         x2, y1,
         x2, y2,
      ]), gl.STATIC_DRAW);
    }

    function renderImage(image)
    {
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderStr);
        gl.compileShader(vertexShader);

        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderStr);
        gl.compileShader(fragmentShader);

        gl.program = gl.createProgram();
        gl.attachShader(gl.program, vertexShader);
        gl.attachShader(gl.program, fragmentShader);

        // gl.bindAttribLocation(gl.program, v3PositionIndex, "a_position");
        gl.linkProgram(gl.program);

        // var samplerIndex = gl.getUniformLocation(gl.program, "a_texCoord");
        // gl.useProgram(gl.program);

        var positionLocation = gl.getAttribLocation(gl.program, "a_position");
        var texcoordLocation = gl.getAttribLocation(gl.program, "a_texCoord");

        var positionBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        setRectangle(gl, 0, 0, image.width, image.height);

        var texcoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0,  0.0,
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0,
        ]), gl.STATIC_DRAW);

        // Create a texture.
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);

        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

        // Upload the image into the texture.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

        // lookup uniforms
        var resolutionLocation = gl.getUniformLocation(gl.program, "u_resolution");

        // Tell WebGL how to convert from clip space to pixels
        gl.viewport(0, 0, 750, 750);

        // Clear the canvas
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Tell it to use our program (pair of shaders)
        gl.useProgram(gl.program);

        // Turn on the position attribute
        gl.enableVertexAttribArray(positionLocation);

        // Bind the position buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset)

        // Turn on the teccord attribute
        gl.enableVertexAttribArray(texcoordLocation);

        // Bind the position buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);

        // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset)

        // set the resolution
        gl.uniform2f(resolutionLocation, 750, 750);

        // Draw the rectangle.
        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 6;
        gl.drawArrays(primitiveType, offset, count);
    }

    module.exports = {
        mounted: function () {
            var ref = this.$refs.canvas_holder;
            gcanvas = GCanvas.start(ref);

            gl = gcanvas.getContext('webgl');
            gl.viewport(0, 0, 750, 750);


            var image = new Image();
            image.onload = function() {
                renderImage(image);
            }
            image.src = "https://webglfundamentals.org/webgl/resources/leaves.jpg";            
        }
    };
</script>