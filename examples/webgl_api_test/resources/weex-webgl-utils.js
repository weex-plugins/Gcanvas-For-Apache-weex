var GCanvas=require('../../../js/src/gcanvas'); //调试使用
var GLog = require("../../../js/src/gutil").GLog;


var WeexWebGLUtils = (function() {

	
	//
	// loadShader
	//
	// 'shader' is either the id of a <script> element containing the shader source
	// string, the shader string itself,  or the URL of a file containing the shader
	// source. Load this shader and return the WebGLShader object corresponding to
	// it.
	//
	function loadShader(gl, shaderType, shaderStr)
	{
	    // Create the shader object
	    var shader = gl.createShader(shaderType);
	    if (shader == null) {
	    	GLog.e("*** Error: unable to create shader shaderType'"+shaderType+"'");
	    	return null;
	    }

	    // Load the shader source
	    gl.shaderSource(shader, shaderStr);

	    // Compile the shader
	    gl.compileShader(shader);

	    // Check the compile status
	    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	    if (!compiled) {
	        // Something went wrong during compilation; get the error
	        var error = gl.getShaderInfoLog(shader);
	        GLog.e("*** Error compiling shader '"+shader+"':"+error);
	        gl.deleteShader(shader);
	        return null;
	    }

	    return shader;
	}


	//
	// createProgram
	//
	// Create and return a program object, attaching each of the given shaders.
	//
	// If attribs are given, bind an attrib with that name at that index.
	//
	function createProgram(gl, vshaders, fshaders, attribs)
	{
		if (typeof(vshaders) == "string")
			vshaders = [vshaders];
		if (typeof(fshaders) == "string")
			fshaders = [fshaders];

		var shaders = [];
		var i;

		for (i = 0; i < vshaders.length; ++i) {
			var shader = loadShader(gl, vshaders[i], gl.VERTEX_SHADER);
			if (!shader)
				return null;
			shaders.push(shader);
		}

		for (i = 0; i < fshaders.length; ++i) {
			var shader = loadShader(gl, fshaders[i], gl.FRAGMENT_SHADER);
			if (!shader)
				return null;
			shaders.push(shader);
		}

		var prog = gl.createProgram();
		for (i = 0; i < shaders.length; ++i) {
			gl.attachShader(prog, shaders[i]);
		}

		if (attribs) {
			for (var i in attribs) {
				gl.bindAttribLocation(prog, parseInt(i), attribs[i]);
			}
		}

		gl.linkProgram(prog);

		// Check the link status
		var linked = gl.getProgramParameter(prog, gl.LINK_STATUS);
		if (!linked) {
			// something went wrong with the link
		    var error = gl.getProgramInfoLog(prog);
		    GLog.e("Error in program linking:" + error);

		    gl.deleteProgram(prog);
		    for (i = 0; i < shaders.length; ++i)
		    	gl.deleteShader(shaders[i]);
		    return null;
		}
		return prog;
	};

	/** 
	 * initWebGL
	 */
	var initWebGL = function(ref, width, height, vShader, fShader, attribs, clearColor, clearDepth){
		var gcanvas = GCanvas.start(ref);
		var gl = gcanvas.getContext('webgl');
		gl.viewport(0, 0, width, height);

	    createProgram(gl, vShader, fShader, attribs);
	    gl.useProgram(gl.program);

	  	gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
    	gl.clearDepth(clearDepth);

    	gl.enable(gl.DEPTH_TEST);
   		gl.enable(gl.BLEND);
    	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		return gl;
	}

	var getResultMessage = function(result, message)
	{
		return "Test " + message +  (result ? " Passed" : "Failed"); 
	}

	return {
		initWebGL:initWebGL,
		getResultMessage:getResultMessage
	};

})();



module.exports=WeexWebGLUtils;