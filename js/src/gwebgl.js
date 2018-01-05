var GBridge = require("./gutil").GBridge;
var GLog = require("./gutil").GLog;
var GCanvas = require("./gcanvas");
var GCanvasImage = require("./gcanvasimage");
var GTexture = require("./gtexture");
var GBuffer = require("./gbuffer");
var GProgram = require("./gprogram");


/**
 callGCanvasLinkNative中type的定义
 | 0-1(ContextType) | 2 (MethodType) | 3 - 32 (OptionType) |
 */

if(typeof ContextType == "undefined"){
    var ContextType = {
        Context2D     : 0,
        ContextWebGL  : 1,
        // ContextVulkan : 2,
        // ContextMetal  : 3,
    };
}

if(typeof MethodType == "undefined"){
    var MethodType = {
        Async : 0,
        Sync  : 1,
    };
}

if(typeof CmdType == "undefined"){
    var CmdType = {
        Render : 1,
    };
}

var G_NeedRender = true;

function WebGLCallNative(componentId, cmdArgs)
{
    G_NeedRender = true;

    var type = 0x60000000; //ContextType.ContextWebGL << 30 | MethodType.Sync << 29
    //GLog.d("WebGLCallNative command: " + cmdArgs);

    if(GBridge.isIOS()) {
	    var result = GBridge.callExtendCallNative({"contextId": componentId, "type":type, "args":cmdArgs});
	    if( result )
	    {
            GLog.d("WebGLCallNative result: " + result["result"]);
	        return result["result"];
	    }
	    return null;

    	// var result = extendCallNative({"className":"WXGCanvasCallNative", "contextId": componentId, "type":type, "args":cmdArgs});
    	// if( result )
    	// {
     //        return result["result"];
    	// }
    	// return null;
    }else {
    	var result = callGCanvasLinkNative(componentId,type,cmdArgs);
        //GLog.d("WebGLCallNative result: " + result);
        return result;
    }
}

function GContextWebGL(){
    GInitWebGLFuncId(this);
    GInitWebGLEnum(this);

    GInitWebGLFuncIdExt(this);
    GInitWebGLEnumExt(this);

    this.componentId = null;
}

//////////////////////////////////////////////////////////////////////////

function GInitWebGLFuncId(obj){
    var i=1;
    obj.activeTextureId=(i++)+",";         //1
    obj.attachShaderId=(i++)+",";
    obj.bindAttribLocationId=(i++)+",";
    obj.bindBufferId=(i++)+",";
    obj.bindFramebufferId=(i++)+",";
    obj.bindRenderbufferId=(i++)+",";
    obj.bindTextureId=(i++)+",";
    obj.blendColorId=(i++)+",";
    obj.blendEquationId=(i++)+",";
    obj.blendEquationSeparateId=(i++)+","; //10
    obj.blendFuncId=(i++)+",";
    obj.blendFuncSeparateId=(i++)+",";
    obj.bufferDataId=(i++)+",";
    obj.bufferSubDataId=(i++)+",";
    obj.checkFramebufferStatusId=(i++)+",";
    obj.clearId=(i++)+",";
    obj.clearColorId=(i++)+",";
    obj.clearDepthId=(i++)+",";
    obj.clearStencilId=(i++)+",";
    obj.colorMaskId=(i++)+",";              //20
    obj.compileShaderId=(i++)+",";
    obj.compressedTexImage2DId=(i++)+",";
    obj.compressedTexSubImage2DId=(i++)+",";
    obj.copyTexImage2DId=(i++)+",";
    obj.copyTexSubImage2DId=(i++)+",";
    obj.createBufferId=(i++)+",";
    obj.createFramebufferId=(i++)+",";
    obj.createProgramId=(i++)+",";
    obj.createRenderbufferId=(i++)+",";
    obj.createShaderId=(i++)+",";           //30
    obj.createTextureId=(i++)+",";
    obj.cullFaceId=(i++)+",";
    obj.deleteBufferId=(i++)+",";
    obj.deleteFramebufferId=(i++)+",";
    obj.deleteProgramId=(i++)+",";
    obj.deleteRenderbufferId=(i++)+",";
    obj.deleteShaderId=(i++)+",";
    obj.deleteTextureId=(i++)+",";
    obj.depthFuncId=(i++)+",";
    obj.depthMaskId=(i++)+",";              //40
    obj.depthRangeId=(i++)+",";
    obj.detachShaderId=(i++)+",";
    obj.disableId=(i++)+",";
    obj.disableVertexAttribArrayId=(i++)+",";
    obj.drawArraysId=(i++)+",";
    obj.drawArraysInstancedANGLEId=(i++)+",";
    obj.drawElementsId=(i++)+",";
    obj.drawElementsInstancedANGLEId=(i++)+",";
    obj.enableId=(i++)+",";
    obj.enableVertexAttribArrayId=(i++)+",";    //50
    obj.flushId=(i++)+",";
    obj.framebufferRenderbufferId=(i++)+",";
    obj.framebufferTexture2DId=(i++)+",";
    obj.frontFaceId=(i++)+",";
    obj.generateMipmapId=(i++)+",";
    obj.getActiveAttribId=(i++)+",";
    obj.getActiveUniformId=(i++)+",";
    obj.getAttachedShadersId=(i++)+",";
    obj.getAttribLocationId=(i++)+",";
    obj.getBufferParameterId=(i++)+",";         //60
    obj.getContextAttributesId=(i++)+",";
    obj.getErrorId=(i++)+",";
    obj.getExtensionId=(i++)+",";
    obj.getFramebufferAttachmentParameterId=(i++)+",";
    obj.getParameterId=(i++)+",";
    obj.getProgramInfoLogId=(i++)+",";
    obj.getProgramParameterId=(i++)+",";
    obj.getRenderbufferParameterId=(i++)+",";
    obj.getShaderInfoLogId=(i++)+",";
    obj.getShaderParameterId=(i++)+",";         //70
    obj.getShaderPrecisionFormatId=(i++)+",";
    obj.getShaderSourceId=(i++)+",";
    obj.getSupportedExtensionsId=(i++)+",";
    obj.getTexParameterId=(i++)+",";
    obj.getUniformId=(i++)+",";
    obj.getUniformLocationId=(i++)+",";
    obj.getVertexAttribId=(i++)+",";
    obj.getVertexAttribOffsetId=(i++)+",";
    obj.isBufferId=(i++)+",";
    obj.isContextLostId=(i++)+",";              //80
    obj.isEnabledId=(i++)+",";
    obj.isFramebufferId=(i++)+",";
    obj.isProgramId=(i++)+",";
    obj.isRenderbufferId=(i++)+",";
    obj.isShaderId=(i++)+",";
    obj.isTextureId=(i++)+",";
    obj.lineWidthId=(i++)+",";
    obj.linkProgramId=(i++)+",";
    obj.pixelStoreiId=(i++)+",";
    obj.polygonOffsetId=(i++)+",";              //90
    obj.readPixelsId=(i++)+",";
    obj.renderbufferStorageId=(i++)+",";
    obj.sampleCoverageId=(i++)+",";
    obj.scissorId=(i++)+",";
    obj.shaderSourceId=(i++)+",";
    obj.stencilFuncId=(i++)+",";
    obj.stencilFuncSeparateId=(i++)+",";
    obj.stencilMaskId=(i++)+",";
    obj.stencilMaskSeparateId=(i++)+",";
    obj.stencilOpId=(i++)+",";                  //100
    obj.stencilOpSeparateId=(i++)+",";
    obj.texImage2DId=(i++)+",";
    obj.texParameterfId=(i++)+",";
    obj.texParameteriId=(i++)+",";
    obj.texSubImage2DId=(i++)+",";
    obj.uniform1fId=(i++)+",";
    obj.uniform1fvId=(i++)+",";
    obj.uniform1iId=(i++)+",";
    obj.uniform1ivId=(i++)+",";
    obj.uniform2fId=(i++)+",";                  //110
    obj.uniform2fvId=(i++)+",";
    obj.uniform2iId=(i++)+",";
    obj.uniform2ivId=(i++)+",";
    obj.uniform3fId=(i++)+",";
    obj.uniform3fvId=(i++)+",";
    obj.uniform3iId=(i++)+",";
    obj.uniform3ivId=(i++)+",";
    obj.uniform4fId=(i++)+",";
    obj.uniform4fvId=(i++)+",";
    obj.uniform4iId=(i++)+",";                  //120
    obj.uniform4ivId=(i++)+",";
    obj.uniformMatrix2fvId=(i++)+",";
    obj.uniformMatrix3fvId=(i++)+",";
    obj.uniformMatrix4fvId=(i++)+",";
    obj.useProgramId=(i++)+",";
    obj.validateProgramId=(i++)+",";
    obj.vertexAttrib1fId=(i++)+","; //new
    obj.vertexAttrib2fId=(i++)+","; //new
    obj.vertexAttrib3fId=(i++)+","; //new
    obj.vertexAttrib4fId=(i++)+","; //new       //130
    obj.vertexAttrib1fvId=(i++)+","; //new
    obj.vertexAttrib2fvId=(i++)+","; //new
    obj.vertexAttrib3fvId=(i++)+","; //new
    obj.vertexAttrib4fvId=(i++)+","; //new
    obj.vertexAttribPointerId=(i++)+",";
    obj.viewportId=(i++)+",";
}

function GInitWebGLEnum(obj){
    //GL Constant Define
    obj.NO_ERROR = 0x0;
    obj.ZERO = 0x0;

    obj.NONE = 0x0;
    obj.ONE = 0x1;
    obj.LINES = 0x1;
    obj.LINE_LOOP = 0x2;
    obj.LINE_STRIP = 0x3;
    obj.TRIANGLES = 0x4;
    obj.TRIANGLE_STRIP = 0x5;
    obj.TRIANGLE_FAN = 0x6;
    obj.DEPTH_BUFFER_BIT = 0x100;
    obj.NEVER = 0x200;
    obj.LESS = 0x201;
    obj.EQUAL = 0x202;
    obj.LEQUAL = 0x203;
    obj.GREATER = 0x204;
    obj.NOTEQUAL = 0x205;
    obj.GEQUAL = 0x206;
    obj.ALWAYS = 0x207;
    obj.SRC_COLOR = 0x300;
    obj.ONE_MINUS_SRC_COLOR = 0x301;
    obj.SRC_ALPHA = 0x302;
    obj.ONE_MINUS_SRC_ALPHA = 0x303;
    obj.DST_ALPHA = 0x304;
    obj.ONE_MINUS_DST_ALPHA = 0x305;
    obj.DST_COLOR = 0x306;
    obj.ONE_MINUS_DST_COLOR = 0x307;
    obj.SRC_ALPHA_SATURATE = 0x308;
    obj.STENCIL_BUFFER_BIT = 0x400;
    obj.FRONT = 0x404;
    obj.BACK = 0x405;
    obj.FRONT_AND_BACK = 0x408;
    obj.INVALID_ENUM = 0x500;
    obj.INVALID_VALUE = 0x501;
    obj.INVALID_OPERATION = 0x502;
    obj.OUT_OF_MEMORY = 0x505;
    obj.INVALID_FRAMEBUFFER_OPERATION = 0x506;
    obj.CW = 0x900;
    obj.CCW = 0x901;
    obj.LINE_WIDTH = 0xB21;
    obj.CULL_FACE = 0xB44;
    obj.CULL_FACE_MODE = 0xB45;
    obj.FRONT_FACE = 0xB46;
    obj.DEPTH_RANGE = 0xB70;
    obj.DEPTH_TEST = 0xB71;
    obj.DEPTH_WRITEMASK = 0xB72;
    obj.DEPTH_CLEAR_VALUE = 0xB73;
    obj.DEPTH_FUNC = 0xB74;
    obj.STENCIL_TEST = 0xB90;
    obj.STENCIL_CLEAR_VALUE = 0xB91;
    obj.STENCIL_FUNC = 0xB92;
    obj.STENCIL_VALUE_MASK = 0xB93;
    obj.STENCIL_FAIL = 0xB94;
    obj.STENCIL_PASS_DEPTH_FAIL = 0xB95;
    obj.STENCIL_PASS_DEPTH_PASS = 0xB96;
    obj.STENCIL_REF = 0xB97;
    obj.STENCIL_WRITEMASK = 0xB98;
    obj.VIEWPORT = 0xBA2;
    obj.DITHER = 0xBD0;
    obj.BLEND = 0xBE2;
    obj.SCISSOR_BOX = 0xC10;
    obj.SCISSOR_TEST = 0xC11;
    obj.COLOR_CLEAR_VALUE = 0xC22;
    obj.COLOR_WRITEMASK = 0xC23;
    obj.UNPACK_ALIGNMENT = 0xCF5;
    obj.PACK_ALIGNMENT = 0xD05;
    obj.MAX_TEXTURE_SIZE = 0xD33;
    obj.MAX_VIEWPORT_DIMS = 0xD3A;
    obj.SUBPIXEL_BITS = 0xD50;
    obj.RED_BITS = 0xD52;
    obj.GREEN_BITS = 0xD53;
    obj.BLUE_BITS = 0xD54;
    obj.ALPHA_BITS = 0xD55;
    obj.DEPTH_BITS = 0xD56;
    obj.STENCIL_BITS = 0xD57;
    obj.TEXTURE_2D = 0xDE1;
    obj.DONT_CARE = 0x1100;
    obj.FASTEST = 0x1101;
    obj.NICEST = 0x1102;
    obj.BYTE = 0x1400;
    obj.UNSIGNED_BYTE = 0x1401;
    obj.SHORT = 0x1402;
    obj.UNSIGNED_SHORT = 0x1403;
    obj.INT = 0x1404;
    obj.UNSIGNED_INT = 0x1405;
    obj.FLOAT = 0x1406;
    obj.INVERT = 0x150A;
    obj.TEXTURE = 0x1702;
    obj.STENCIL_INDEX = 0x1901;
    obj.DEPTH_COMPONENT = 0x1902;
    obj.ALPHA = 0x1906;
    obj.RGB = 0x1907;
    obj.RGBA = 0x1908;
    obj.LUMINANCE = 0x1909;
    obj.LUMINANCE_ALPHA = 0x190A;
    obj.KEEP = 0x1E00;
    obj.REPLACE = 0x1E01;
    obj.INCR = 0x1E02;
    obj.DECR = 0x1E03;
    obj.VENDOR = 0x1F00;
    obj.RENDERER = 0x1F01;
    obj.VERSION = 0x1F02;
    obj.NEAREST = 0x2600;
    obj.LINEAR = 0x2601;
    obj.NEAREST_MIPMAP_NEAREST = 0x2700;
    obj.LINEAR_MIPMAP_NEAREST = 0x2701;
    obj.NEAREST_MIPMAP_LINEAR = 0x2702;
    obj.LINEAR_MIPMAP_LINEAR = 0x2703;
    obj.TEXTURE_MAG_FILTER = 0x2800;
    obj.TEXTURE_MIN_FILTER = 0x2801;
    obj.TEXTURE_WRAP_S = 0x2802;
    obj.TEXTURE_WRAP_T = 0x2803;
    obj.REPEAT = 0x2901;
    obj.POLYGON_OFFSET_UNITS = 0x2A00;
    obj.COLOR_BUFFER_BIT = 0x4000;
    obj.CONSTANT_COLOR = 0x8001;
    obj.ONE_MINUS_CONSTANT_COLOR = 0x8002;
    obj.CONSTANT_ALPHA = 0x8003;
    obj.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
    obj.BLEND_COLOR = 0x8005;
    obj.FUNC_ADD = 0x8006;
    obj.BLEND_EQUATION_RGB = 0x8009;
    obj.FUNC_SUBTRACT = 0x800A;
    obj.FUNC_REVERSE_SUBTRACT = 0x800B;
    obj.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
    obj.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
    obj.POLYGON_OFFSET_FILL = 0x8037;
    obj.POLYGON_OFFSET_FACTOR = 0x8038;
    obj.RGBA4 = 0x8056;
    obj.RGB5_A1 = 0x8057;
    obj.TEXTURE_BINDING_2D = 0x8069;
    obj.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
    obj.SAMPLE_COVERAGE = 0x80A0;
    obj.SAMPLE_BUFFERS = 0x80A8;
    obj.SAMPLES = 0x80A9;
    obj.SAMPLE_COVERAGE_VALUE = 0x80AA;
    obj.SAMPLE_COVERAGE_INVERT = 0x80AB;
    obj.BLEND_DST_RGB = 0x80C8;
    obj.BLEND_SRC_RGB = 0x80C9;
    obj.BLEND_DST_ALPHA = 0x80CA;
    obj.BLEND_SRC_ALPHA = 0x80CB;
    obj.CLAMP_TO_EDGE = 0x812F;
    obj.GENERATE_MIPMAP_HINT = 0x8192;
    obj.DEPTH_COMPONENT16 = 0x81A5;
    obj.DEPTH_STENCIL_ATTACHMENT = 0x821A;
    obj.UNSIGNED_SHORT_5_6_5 = 0x8363;
    obj.MIRRORED_REPEAT = 0x8370;
    obj.ALIASED_POINT_SIZE_RANGE = 0x846D;
    obj.ALIASED_LINE_WIDTH_RANGE = 0x846E;
    obj.TEXTURE0 = 0x84C0;
    obj.TEXTURE1 = 0x84C1;
    obj.TEXTURE2 = 0x84C2;
    obj.TEXTURE3 = 0x84C3;
    obj.TEXTURE4 = 0x84C4;
    obj.TEXTURE5 = 0x84C5;
    obj.TEXTURE6 = 0x84C6;
    obj.TEXTURE7 = 0x84C7;
    obj.TEXTURE8 = 0x84C8;
    obj.TEXTURE9 = 0x84C9;
    obj.TEXTURE10 = 0x84CA;
    obj.TEXTURE11 = 0x84CB;
    obj.TEXTURE12 = 0x84CC;
    obj.TEXTURE13 = 0x84CD;
    obj.TEXTURE14 = 0x84CE;
    obj.TEXTURE15 = 0x84CF;
    obj.TEXTURE16 = 0x84D0;
    obj.TEXTURE17 = 0x84D1;
    obj.TEXTURE18 = 0x84D2;
    obj.TEXTURE19 = 0x84D3;
    obj.TEXTURE20 = 0x84D4;
    obj.TEXTURE21 = 0x84D5;
    obj.TEXTURE22 = 0x84D6;
    obj.TEXTURE23 = 0x84D7;
    obj.TEXTURE24 = 0x84D8;
    obj.TEXTURE25 = 0x84D9;
    obj.TEXTURE26 = 0x84DA;
    obj.TEXTURE27 = 0x84DB;
    obj.TEXTURE28 = 0x84DC;
    obj.TEXTURE29 = 0x84DD;
    obj.TEXTURE30 = 0x84DE;
    obj.TEXTURE31 = 0x84DF;
    obj.ACTIVE_TEXTURE = 0x84E0;
    obj.MAX_RENDERBUFFER_SIZE = 0x84E8;
    obj.DEPTH_STENCIL = 0x84F9;
    obj.INCR_WRAP = 0x8507;
    obj.DECR_WRAP = 0x8508;
    obj.TEXTURE_CUBE_MAP = 0x8513;
    obj.TEXTURE_BINDING_CUBE_MAP = 0x8514;
    obj.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
    obj.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
    obj.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
    obj.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
    obj.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
    obj.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
    obj.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
    obj.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
    obj.CURRENT_VERTEX_ATTRIB = 0x8626;
    obj.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
    obj.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
    obj.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
    obj.BUFFER_SIZE = 0x8764;
    obj.BUFFER_USAGE = 0x8765;
    obj.STENCIL_BACK_FUNC = 0x8800;
    obj.STENCIL_BACK_FAIL = 0x8801;
    obj.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
    obj.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
    obj.BLEND_EQUATION_ALPHA = 0x883D;
    obj.MAX_VERTEX_ATTRIBS = 0x8869;
    obj.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
    obj.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
    obj.ARRAY_BUFFER = 0x8892;
    obj.ELEMENT_ARRAY_BUFFER = 0x8893;
    obj.ARRAY_BUFFER_BINDING = 0x8894;
    obj.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
    obj.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
    obj.STREAM_DRAW = 0x88E0;
    obj.STATIC_DRAW = 0x88E4;
    obj.DYNAMIC_DRAW = 0x88E8;
    obj.FRAGMENT_SHADER = 0x8B30;
    obj.VERTEX_SHADER = 0x8B31;
    obj.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
    obj.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
    obj.SHADER_TYPE = 0x8B4F;
    obj.FLOAT_VEC2 = 0x8B50;
    obj.FLOAT_VEC3 = 0x8B51;
    obj.FLOAT_VEC4 = 0x8B52;
    obj.INT_VEC2 = 0x8B53;
    obj.INT_VEC3 = 0x8B54;
    obj.INT_VEC4 = 0x8B55;
    obj.BOOL = 0x8B56;
    obj.BOOL_VEC2 = 0x8B57;
    obj.BOOL_VEC3 = 0x8B58;
    obj.BOOL_VEC4 = 0x8B59;
    obj.FLOAT_MAT2 = 0x8B5A;
    obj.FLOAT_MAT3 = 0x8B5B;
    obj.FLOAT_MAT4 = 0x8B5C;
    obj.SAMPLER_2D = 0x8B5E;
    obj.SAMPLER_CUBE = 0x8B60;
    obj.DELETE_STATUS = 0x8B80;
    obj.COMPILE_STATUS = 0x8B81;
    obj.LINK_STATUS = 0x8B82;
    obj.VALIDATE_STATUS = 0x8B83;
    obj.INFO_LOG_LENGTH = 0x8B84;
    obj.ATTACHED_SHADERS = 0x8B85;
    obj.ACTIVE_UNIFORMS = 0x8B86;
    obj.ACTIVE_UNIFORM_MAX_LENGTH = 0x8B87;
    obj.SHADER_SOURCE_LENGTH = 0x8B88;
    obj.ACTIVE_ATTRIBUTES = 0x8B89;
    obj.ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8B8A;
    obj.SHADING_LANGUAGE_VERSION = 0x8B8C;
    obj.CURRENT_PROGRAM = 0x8B8D;
    obj.STENCIL_BACK_REF = 0x8CA3;
    obj.STENCIL_BACK_VALUE_MASK = 0x8CA4;
    obj.STENCIL_BACK_WRITEMASK = 0x8CA5;
    obj.FRAMEBUFFER_BINDING = 0x8CA6;
    obj.RENDERBUFFER_BINDING = 0x8CA7;
    obj.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
    obj.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
    obj.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
    obj.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
    obj.FRAMEBUFFER_COMPLETE = 0x8CD5;
    obj.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
    obj.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
    obj.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
    obj.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
    obj.COLOR_ATTACHMENT0 = 0x8CE0;
    obj.DEPTH_ATTACHMENT = 0x8D00;
    obj.STENCIL_ATTACHMENT = 0x8D20;
    obj.FRAMEBUFFER = 0x8D40;
    obj.RENDERBUFFER = 0x8D41;
    obj.RENDERBUFFER_WIDTH = 0x8D42;
    obj.RENDERBUFFER_HEIGHT = 0x8D43;
    obj.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
    obj.STENCIL_INDEX8 = 0x8D48;
    obj.RENDERBUFFER_RED_SIZE = 0x8D50;
    obj.RENDERBUFFER_GREEN_SIZE = 0x8D51;
    obj.RENDERBUFFER_BLUE_SIZE = 0x8D52;
    obj.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
    obj.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
    obj.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
    obj.RGB565 = 0x8D62;
    obj.LOW_FLOAT = 0x8DF0;
    obj.MEDIUM_FLOAT = 0x8DF1;
    obj.HIGH_FLOAT = 0x8DF2;
    obj.LOW_INT = 0x8DF3;
    obj.MEDIUM_INT = 0x8DF4;
    obj.HIGH_INT = 0x8DF5;
    obj.SHADER_COMPILER = 0x8DFA;
    obj.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
    obj.MAX_VARYING_VECTORS = 0x8DFC;
    obj.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;

    obj.UNPACK_FLIP_Y_WEBGL = 0x9240;
    obj.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    // obj.CONTEXT_LOST_WEBGL = 0x9242;
    // obj.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
    // obj.BROWSER_DEFAULT_WEBGL = 0x9244;
}

/////////////////////////////////////////////
// WebGL Extension
/////////////////////////////////////////////
function GInitWebGLFuncIdExt(obj)
{
    var i=300;  //offset=300

    //extension method for ANGLE_instanced_arrays
    obj.drawArraysInstancedANGLEId=(i++)+",";
    obj.drawElementsInstancedANGLEId=(i++)+",";
    obj.vertexAttribDivisorANGLEId=(i++)+",";

    //extension method for OES_vertex_array_object
    obj.createVertexArrayOESId=(i++)+",";
    obj.deleteVertexArrayOESId=(i++)+",";
    obj.isVertexArrayOESId=(i++)+",";
    obj.bindVertexArrayOESId=(i++)+",";
}

function GInitWebGLEnumExt(obj)
{
    //extension flag
    obj.OES_vertex_array_object = 1;
    obj.OES_texture_float = 1;
    obj.OES_element_index_uint = 1;

    //extension const for ANGLE_instanced_arrays
    //#define GL_VERTEX_ATTRIB_ARRAY_DIVISOR_EXT    0x88FE
    obj.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;

    //extension const for OES_vertex_array_object
    //#define GL_VERTEX_ARRAY_BINDING_OES           0x85B5
    obj.VERTEX_ARRAY_BINDING_OES = 0x85B5;
}

function GarrToBase64(array)
{
    if(!array){
      return '';
    }

    var str = '';
    if( array.join === 'function' )
    {
        str = array.join();
    }
    else
    {
        for (var i = 0; i < array.length; i++)
        {
            if( i < array.length - 1 )
            {
//                 str = str + array[i] + ',';
                str = str + array[i].toFixed(3) + ',';
            }
            else
            {
//                 str = str + array[i];
                str = str + array[i].toFixed(3);
            }
        }
    }
    return btoa(str);
}

function Gbase64ToArr(base64)
{
    var binary_string = atob(base64);
    var array = binary_string.slice();
    return array;
}

//字符串split使用
function GetArrayType(array)
{
    //1 - uint8 array
    //2 - uint16 array
    //4 - uint32 array
    //14 - float32 array
    if(!array){
      return 2;
    }
    var bytes = array.BYTES_PER_ELEMENT;
    if( bytes == 4 && (array instanceof Float32Array) )
    {
        return 10+bytes;
    }
    return bytes;
}

//////////////////////////////////////////////////////////////////////////
//                        GWebGLActiveInfos
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfos
//////////////////////////////////////////////////////////////////////////
function GWebGLActiveInfo(){
    this.name;
    this.size;
    this.type;

}

GWebGLActiveInfo.convertFormString = function(infoString)
{
    var activeInfo = new GWebGLActiveInfo();
    if( infoString )
    {
        var infoArray = infoString.split(",");
        if(infoArray.length >= 3)
        {
            activeInfo.type = parseInt(infoArray[0]);
            activeInfo.size = parseInt(infoArray[1]);
            activeInfo.name = infoArray[2];
        }
    }

    return activeInfo;
}

//////////////////////////////////////////////////////////////////////////
//                        GWebGLShaderPrecisionFormat
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat
//////////////////////////////////////////////////////////////////////////
function GWebGLShaderPrecisionFormat(){
    this.rangeMin;
    this.rangeMax;
    this.precision;
}

//////////////////////////////////////////////////////////////////////////
// GContextWebGLExtension
//////////////////////////////////////////////////////////////////////////
function GContextWebGLExtension(gl)
{
    this.gl = gl;
}


GContextWebGL.prototype.render = function()
{
    if( G_NeedRender )
    {
        var type = 0x60000001; //ContextType.ContextWebGL << 30 | MethodType.Sync << 29 | CmdType.Render

		if(GBridge.isIOS()) {
            var result = GBridge.callExtendCallNative({"className":"WXGCanvasCallNative", "contextId": this.componentId, "type":type});
            G_NeedRender = false;
    	} else{
	    	callGCanvasLinkNative(this.componentId,type,"render");
	    	G_NeedRender = false;
		}
	}
};


//////////////////////////////////////////////////////////////////////////
//                  WEBGL 1.0 API
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
//////////////////////////////////////////////////////////////////////////

GContextWebGL.prototype.activeTexture = function(texture){
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = (this.activeTextureId + textureId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.attachShader = function(program, shader){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.attachShaderId + programId + "," + shader + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindAttribLocation = function(program, index, name){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.bindAttribLocationId + programId + "," + index + "," + name + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindBuffer = function(target, buffer){
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = (this.bindBufferId + target + "," + bufferId+ ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindFramebuffer = function(target, framebuffer){
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = (this.bindFramebufferId + target + "," + framebufferId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindRenderbuffer = function(target, renderbuffer){
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = (this.bindRenderbufferId + target + "," + renderbufferId + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.blendColor = function(red, green, blue, alpha){
    var cmd = (this.blendColorId + red + "," + green + ","+ blue + "," + alpha + ";");
    WebGLCallNative(this.componentId, cmd);
}

GContextWebGL.prototype.bindTexture = function(target, texture){
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = (this.bindTextureId + target + "," + textureId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendEquation = function(mode){
    var cmd = (this.blendEquationId + mode + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendEquationSeparate = function(modeRGB, modeAlpha){
    var cmd = (this.blendEquationSeparateId + modeRGB + "," + modeAlpha  + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendFunc = function(sfactor, dfactor){
    var cmd = (this.blendFuncId + sfactor + "," + dfactor  + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendFuncSeparate = function(srcRGB, dstRGB, srcAlpha, dstAlpha){
    var cmd = (this.blendFuncSeparateId + srcRGB + "," + dstRGB + "," + srcAlpha + "," + dstAlpha  + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new array or size
GContextWebGL.prototype.bufferData = function(target, array, usage){
    var cmd = (this.bufferDataId + target + "," + GetArrayType(array) + "," + GarrToBase64(array) + "," + usage + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.bufferSubData = function(target, offset, array){
    var cmd = (this.bufferSubDataId + target + "," + offset + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.checkFramebufferStatus = function(target){
    var cmd = (this.checkFramebufferStatusId + target + ";");
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clear = function(mask){
    var cmd = (this.clearId + mask + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearColor = function(red, green, blue, alpha){
    var cmd = (this.clearColorId + red + "," + green + "," + blue + "," + alpha + ";");
    if(!GBridge.isIOS()) {
    	//GBridge.setAlpha(this.componentId,alpha);
    }
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearDepth = function(depth){
    var cmd = (this.clearDepthId + depth + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearStencil = function(s){
    var cmd = (this.clearStencilId + s + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.colorMask = function(red, green, blue, alpha){
    var cmd = (this.colorMaskId + (red?1:0) + "," + (green?1:0) + "," + (blue?1:0) + "," + (alpha?1:0) + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.compileShader = function(shader) {
    var cmd = (this.compileShaderId + shader + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.compressedTexImage2D = function(target, level, internalformat, width, height, border, array) {
    var cmd = (this.compressedTexImage2DId + target + "," + level + "," + internalformat + "," + width + "," +
               height + "," + border + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.compressedTexSubImage2D = function(target, level, xoffset, yoffset, width, height, format, array){
    var cmd = (this.compressedTexSubImage2DId + target + "," + level + "," + xoffset + ","  + yoffset + "," + width + "," +
               height + "," + format + "," + GetArrayType(array)  + "," + GarrToBase64(array) + ";");
    WebGLCallNative(this.componentId, cmd);
}

GContextWebGL.prototype.copyTexImage2D = function(target, level, internalformat, x, y, width, height, border){
    var cmd = (this.copyTexImage2DId + target + "," + level + "," + internalformat + ","  + x + "," + y + "," +
             width + "," + height + "," + border + ";");
    WebGLCallNative(this.componentId, cmd);
}

//new
GContextWebGL.prototype.copyTexSubImage2D = function(target, level, xoffset, yoffset, x, y, width, height){
    var cmd = (this.copyTexSubImage2DId + target + "," + level + "," + xoffset + ","  + yoffset + "," + x + "," + y + "," +
              width + "," + height + ";");
    WebGLCallNative(this.componentId, cmd);
}

GContextWebGL.prototype.createBuffer = function(){
    var buffer = new GBuffer();
    var cmd = (this.createBufferId + ";");
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createFramebuffer = function(){
    var buffer = new GBuffer();
    var cmd = (this.createFramebufferId + ";");
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createProgram = function(){
    var cmd = (this.createProgramId + ";");
    var program = new GProgram();
    program.programId = WebGLCallNative(this.componentId, cmd);
    return program;
};

GContextWebGL.prototype.createRenderbuffer = function(){
    var buffer = new GBuffer();
    var cmd = (this.createRenderbufferId + ";");
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createShader = function(type) {
    var cmd = (this.createShaderId + type + ";");
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.createTexture = function() {
    var texture = new GTexture();
    var cmd = (this.createTextureId + ";");
    var result = WebGLCallNative(this.componentId, cmd);
    texture.textureId = parseInt(result) || result;
    return texture;
};

GContextWebGL.prototype.cullFace = function(mode){
    var cmd = (this.cullFaceId + mode + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteBuffer = function(buffer){
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = (this.deleteBufferId + bufferId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteFramebuffer = function(framebuffer){
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = (this.deleteFramebufferId + framebufferId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteProgram = function(program){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.deleteProgramId + programId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteRenderbuffer = function(renderbuffer){
    var renderBufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = (this.deleteRenderbufferId + renderBufferId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteShader = function(shader){
    var cmd = (this.deleteShaderId + shader + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteTexture = function(texture){
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = (this.deleteTextureId + textureId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthFunc = function(func){
    var cmd = (this.depthFuncId + func + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthMask = function(flag){
    var cmd = (this.depthMaskId + (flag?1:0) + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthRange = function(zNear, zFar){
    var cmd = (this.depthRangeId + zNear + "," + zFar + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.detachShader = function(program, shader){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.detachShaderId + programId + "," + shader + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.disable = function(cap){
    var cmd = (this.disableId + cap + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.disableVertexAttribArray = function(index){
    var cmd = (this.disableVertexAttribArrayId + index + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.drawArrays = function(mode, first, count){
    var cmd = (this.drawArraysId + mode + "," + first + "," + count +  ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.drawElements = function(mode, count, type, offset){
    var cmd = (this.drawElementsId + mode + "," + count + "," + type + "," + offset +  ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.enable = function(cap){
    var cmd = (this.enableId + cap + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.enableVertexAttribArray = function(index){
    var cmd = (this.enableVertexAttribArrayId + index + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.flush = function(){
    var cmd = (this.flushId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.framebufferRenderbuffer = function(target, attachment, renderbuffertarget, renderbuffer){
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = (this.framebufferRenderbufferId + target + "," + attachment + "," + renderbuffertarget + "," + renderbufferId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.framebufferTexture2D = function(target, attachment, textarget, texture, level){
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = (this.framebufferTexture2DId + target + "," + attachment + "," + textarget + "," + textureId + "," + level + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.frontFace = function(mode){
    var cmd = (this.frontFaceId + mode + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.generateMipmap = function(target){
    var cmd = (this.generateMipmapId + target + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getActiveAttrib= function(program, index){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getActiveAttribId + programId +  "," + index +  ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GWebGLActiveInfo.convertFormString(resultString);
};

GContextWebGL.prototype.getActiveUniform= function(program, index){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getActiveUniformId + programId +  "," + index +  ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GWebGLActiveInfo.convertFormString(resultString);
};

//new
GContextWebGL.prototype.getAttachedShaders = function(program){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getAttachedShadersId + programId + ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");
    return resultArray;
};

GContextWebGL.prototype.getAttribLocation = function(program, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getAttribLocationId + programId + "," + name + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getBufferParameter= function(target, pname){
    var cmd = (this.getBufferParameterId + target + "," + pname + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new TODO OpenGL ES not Support
GContextWebGL.prototype.getContextAttributes= function(){
    return null;
};

//new
GContextWebGL.prototype.getError= function(){
    var cmd = (this.getErrorId + ";");
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getExtension = function(name)
{
    var ext = null;
    if( name == "ANGLE_instanced_arrays" )
    {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
        ext.drawArraysInstancedANGLE = gl.drawArraysInstancedANGLE;
        ext.drawElementsInstancedANGLE = gl.drawElementsInstancedANGLE;
        ext.vertexAttribDivisorANGLE = gl.vertexAttribDivisorANGLE;

        ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;
    }
    else if( name == "OES_vertex_array_object" )
    {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
        ext.createVertexArrayOES = gl.createVertexArrayOES;
        ext.deleteVertexArrayOES = gl.deleteVertexArrayOES;
        ext.isVertexArrayOES = gl.isVertexArrayOES;
        ext.bindVertexArrayOES = gl.bindVertexArrayOES;

        ext.VERTEX_ARRAY_BINDING_OES = 0x85B5;
        ext.OES_vertex_array_object = 1;
        ext.OES_texture_float = 1;
        ext.OES_element_index_uint = 1;

    }
    else if( name == "OES_texture_float" )
    {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
    }

    return ext;
};

//new
GContextWebGL.prototype.getFramebufferAttachmentParameter = function(target, attachment, pname){
    var cmd = (this.getFramebufferAttachmentParameterId + target + "," + attachment + "," + pname + ";");
    return WebGLCallNative(this.componentId, cmd);
};


function GetRetrunResultByString(resultString)
{
    if( !resultString ) return null;

    var resultArray = resultString.split(",");
    if( resultArray.length <2 ) return null;

    var retType = parseInt(resultArray[0]);
    /*
    kReturnBoolean = 1,
    kReturnInt,
    kReturnFloat,
    kReturnIntArray,
    kReturnFloatArray,
    kReturnString
    */
    switch( retType )
    {
        case 1: return parseInt(resultArray[1]) == 1;
        case 2: return parseInt(resultArray[1]);
        case 3: return parseFloat(resultArray[1]);
        case 4:
        case 5:
        {
            var array = resultArray.slice(1);
            return array;
        }
        case 6: return resultArray[1];
        default: return null;
    }
}

GContextWebGL.prototype.getParameter = function(pname) {
    var cmd = (this.getParameterId + pname + ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

GContextWebGL.prototype.getProgramInfoLog = function(program){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getProgramInfoLogId + programId + ";");
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getProgramParameter = function(program, pname){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getProgramParameterId + programId + "," + pname + ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

//new
GContextWebGL.prototype.getRenderbufferParameter = function(target, pname){
    var cmd = (this.getRenderbufferParameterId + target + "," + pname + ";");
    return WebGLCallNative(this.componentId, cmd);
}

GContextWebGL.prototype.getShaderInfoLog = function(shader){
    var cmd = (this.getShaderInfoLogId + shader + ";");
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getShaderParameter = function(shader, pname){
    var cmd = (this.getShaderParameterId + shader + "," + pname + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//return range,precision
GContextWebGL.prototype.getShaderPrecisionFormat = function(shaderType, precisionType){
    var cmd = (this.getShaderPrecisionFormatId + shaderType + "," + precisionType + ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");

    var precisionFormat= new GWebGLShaderPrecisionFormat();

    if( resultArray.length == 3 )
    {
        precisionFormat.rangeMin = parseInt(resultArray[0]);
        precisionFormat.rangeMax = parseInt(resultArray[1]);
        precisionFormat.precision = parseInt(resultArray[2]);
    }
    return precisionFormat;
};

GContextWebGL.prototype.getShaderSource = function(shader){
    var cmd = (this.getShaderSourceId + shader + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new return array
GContextWebGL.prototype.getSupportedExtensions = function(){
    var cmd = (this.getSupportedExtensionsId + ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");
    return resultArray;
};

//new
GContextWebGL.prototype.getTexParameter = function(target, pname){
    var cmd = (this.getTexParameterId + target + "," + pname + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getUniform = function(program, location){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getUniformId + programId + "," + location + ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

GContextWebGL.prototype.getUniformLocation = function(program, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.getUniformLocationId + programId + "," + name + ";");
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getVertexAttrib = function(index, pname) {
    var cmd = (this.getVertexAttribId + index + "," + pname + ";");
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);

    // if( !resultString ) return null;

    // var resultArray = resultString.split(",");
    // if( resultArray.length <2 ) return null;

    // var retType = parseInt(resultArray[0]);
    // switch( retType )
    // {
    //     case 2: return parseInt(resultArray[1]);
    //     case 5:
    //     {
    //         var array = resultArray.slice(1);
    //         return array;
    //     }
    //     default: return null;
    // }
};

GContextWebGL.prototype.getVertexAttribOffset = function(index, pname) {
    var cmd = (this.getVertexAttribOffsetId + index + "," + pname + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isBuffer = function(buffer) {
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = (this.isBufferId + bufferId + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//OpenGL ES not support
GContextWebGL.prototype.isContextLost = function(){
    return false;
};

//new
GContextWebGL.prototype.isEnabled = function(cap) {
    var cmd = (this.isEnabledId + cap + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isFramebuffer = function(framebuffer) {
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = (this.isFramebufferId + framebufferId + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isProgram = function(program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.isProgramId + programId + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isRenderbuffer = function(renderbuffer) {
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = (this.isRenderbufferId + renderbufferId + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isShader = function(shader) {
    var cmd = (this.isShaderId + shader + ";");
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isTexture = function(texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = (this.isTextureId + textureId + ";");
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.lineWidth = function(width){
    var cmd = (this.lineWidthId + width + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.linkProgram = function(program){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.linkProgramId + programId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.pixelStorei = function(pname, param){
    // UNPACK_FLIP_Y_WEBGL = 0x9240;
    // obj.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    //filter _WEBGL feature
    if( pname == 0x9240 || pname == 0x9241 ) return;

    var cmd = (this.pixelStoreiId + pname + "," + param + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.polygonOffset = function(factor, units){
    var cmd = (this.polygonOffsetId + factor + "," + units + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.readPixels = function(x, y, width, height, format, type, pixels){
    var cmd = (this.readPixelsId + x + "," + y + "," +  width + "," + height + "," + format + "," + type + ";");
    var pixelsString = WebGLCallNative(this.componentId, cmd);
    var pixelsArray = pixelsString.split(",");
};

GContextWebGL.prototype.renderbufferStorage = function(target, internalformat, width, height){
    var cmd = (this.renderbufferStorageId + target + "," + internalformat + "," + width + "," + height + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.sampleCoverage = function(value, invert){
    var cmd = (this.sampleCoverageId + value + "," + (invert?1:0) + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.scissor = function(x, y, width, height) {
    var cmd = (this.scissorId + x + "," + y + "," + width + "," + height + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.shaderSource = function(shader, source){
    // var cmd = (this.shaderSourceId + shader + "," + btoa(source) + ";");
    var cmd = (this.shaderSourceId + shader + "," + source);
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilFunc = function(func, ref, mask){
    var cmd = (this.stencilFuncId + func + "," + ref + "," + mask + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilFuncSeparate = function(face, func, ref, mask){
    var cmd = (this.stencilFuncSeparateId + face + "," + func + "," + ref + "," + mask + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilMask = function(mask){
    var cmd = (this.stencilMaskId + mask + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilMaskSeparate = function(face, mask){
    var cmd = (this.stencilMaskSeparateId + face + "," + mask + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilOp = function(fail, zfail, zpass){
    var cmd = (this.stencilOpId + fail + "," + zfail + "," + zpass + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilOpSeparate = function(face, fail, zfail, zpass){
    var cmd = (this.stencilOpSeparateId + face + "," + fail + "," + zfail + "," + zpass + ";");
    WebGLCallNative(this.componentId, cmd);
};


// void texImage2D(GLenum target, GLint level, GLint internalformat,
//                   GLsizei width, GLsizei height, GLint border, GLenum format,
//                   GLenum type, [AllowShared] ArrayBufferView? pixels);
//   void texImage2D(GLenum target, GLint level, GLint internalformat,
//                   GLenum format, GLenum type, TexImageSource source); // May throw DOMException
//texImage2D(webgl.TEXTURE_2D, 0, webgl.RGB, webgl.RGB, webgl.UNSIGNED_BYTE, img);
//texImage2D(target, level, internalformat, format, type, img);
//texImage2D(target, level, internalformat, width, height, border, format, type, pixels);
GContextWebGL.prototype.texImage2D = function(target, level, internalformat){
    var argc = arguments.length;
    if (6 == argc)
    {
        var format = arguments[3];
        var type = arguments[4]
        var imageData = arguments[5];


        //imageData is GCanvasImage
        if(imageData instanceof GCanvasImage)
        {
            var cmd = (this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," +
                      format + "," + type + "," + imageData.src + ";");
           	if(!GBridge.isIOS()) {
    			GBridge.texImage2D(this.componentId,target, level, internalformat, format,type, imageData.src);
    		} else {
            	WebGLCallNative(this.componentId, cmd);
            }
        }
    }
    else if (9 == argc)
    {
        var width = arguments[3];
        var height = arguments[4]
        var border = arguments[5];
        var format = arguments[6];
        var type = arguments[7];
        var array = arguments[8]

        var cmd = (this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," +
                   width + "," + height + "," + border + "," + format + "," + type + ",");

        if( array == null )
        {
            cmd = cmd + 0 + ";";
        }
        else
        {
            cmd = cmd + GetArrayType(array) + "," + GarrToBase64(array) + ";";
        }

        // var cmd = (this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," +
        //            width + "," + height + "," + border + "," + format + "," + type + "," +
        //            GetArrayType(array) + "," + GarrToBase64(array) + ";");
        WebGLCallNative(this.componentId, cmd);
    }
};

//new
GContextWebGL.prototype.texParameterf = function(target, pname, param){
    var cmd = (this.texParameterfId + target + "," + pname + "," + param + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.texParameteri = function(target, pname, param){
    var cmd = (this.texParameteriId + target + "," + pname + "," + param + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
// void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ArrayBufferView? pixels);
// void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, ImageData? pixels);
GContextWebGL.prototype.texSubImage2D = function(target, level, xoffset, yoffset){
    var argc = arguments.length;
    if( argc == 7 )
    {
        var format = arguments[4];
        var type = arguments[5];
        var imageData = arguments[6];

        //imageData is GCanvasImage
        if(imageData instanceof GCanvasImage)
        {
            if(!GBridge.isIOS()) {
    			GBridge.texSubImage2D(this.componentId,target, level, xoffset,yoffset,format,type, imageData.src);
    		}else {
            	var cmd = (this.texSubImage2DId + argc + "," + target + "," + level + "," + xoffset + "," +
                        yoffset + "," + type + "," + imageData.src + ";");
            	WebGLCallNative(this.componentId, cmd);
            }
        }
    }
    else if( argc == 9)
    {
        var width = arguments[4];
        var height = arguments[5];
        var format = arguments[6];
        var type = arguments[7];
        var array = arguments[8];

        var cmd = (this.texSubImage2DId + argc + "," + target + "," + level + "," + xoffset + "," +  yoffset + "," +
                    width + "," + height + "," + format + "," + type + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";");
        WebGLCallNative(this.componentId, cmd);
    }
}


function trans2ArrayType(type, ar){
    if (ar instanceof type)
        return ar;
    var len = ar.length;
    var f32ar = new type(len);
    for (var i = 0; i < len; i++) {
        f32ar[i]=ar[i];
    }
    return f32ar;
}

GContextWebGL.prototype.uniformXXv_ = function(id, value, type, cmdId){
    if (value.length == 0)
        return;

    value = trans2ArrayType(type, value);
    var cmd = (cmdId + id + "," + 0 + "," + GarrToBase64(value) + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1f = function(location, value){
    var cmd = (this.uniform1fId  + location + "," + value + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1fv = function(location, value){
    this.uniformXXv_(location, value, Float32Array, this.uniform1fvId );
};

GContextWebGL.prototype.uniform1i = function(location, value){
    var cmd = (this.uniform1iId + location+ "," + value + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1iv = function(location, value){
    this.uniformXXv_(location, value, Int32Array, this.uniform1ivId );
};

GContextWebGL.prototype.uniform2f = function(location, x, y){
    var cmd = (this.uniform2fId  + location + "," + x + "," + y + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform2fv = function(location, value){
    this.uniformXXv_(location, value, Float32Array, this.uniform2fvId);
};

GContextWebGL.prototype.uniform2i = function(location, x, y){
    var cmd = (this.uniform2iId + location + "," + x + "," + y + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform2iv = function(location, value){
    this.uniformXXv_(location, value, Int32Array, this.uniform2ivId );
};

GContextWebGL.prototype.uniform3f = function(location, x, y, z){
    var cmd = (this.uniform3fId + location + "," + x + "," + y + "," + z + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform3fv = function(location, value){
    this.uniformXXv_(location, value, Float32Array, this.uniform3fvId);
};

GContextWebGL.prototype.uniform3i = function(location, x, y, z){
    var cmd = (this.uniform3iId + location + "," + x + "," + y + "," + z + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform3iv = function(location, value){
    this.uniformXXv_(location, value, Int32Array, this.uniform3ivId );
};

GContextWebGL.prototype.uniform4f = function(location, x, y, z, w){
    var cmd = (this.uniform4fId + location + "," + x + "," + y + "," + z + "," + w + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform4fv = function(location, value){
    this.uniformXXv_(location, value, Float32Array, this.uniform4fvId);
};

GContextWebGL.prototype.uniform4i = function(location, x, y, z, w){
    var cmd = (this.uniform4iId + location + "," + x + "," + y + "," + z + "," + w + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform4iv = function(location, value){
    this.uniformXXv_(location, value, Int32Array, this.uniform4ivId );
};

GContextWebGL.prototype.uniformMatrixXfv_ = function(location, transpose, value, apiId){
    if (value.length == 0)
        return;
    var cmd = (apiId + location + "," + (transpose?1:0)) + ","+0+"," + GarrToBase64(value) + (";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniformMatrix2fv = function(location, transpose, value){
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix2fvId);
};

GContextWebGL.prototype.uniformMatrix3fv = function(location, transpose, value){
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix3fvId);
};

GContextWebGL.prototype.uniformMatrix4fv = function(location, transpose, value){
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix4fvId);
};

GContextWebGL.prototype.useProgram = function(program){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.useProgramId + programId + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.validateProgram = function(program){
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = (this.validateProgramId + programId + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib1f = function(index, v0){
    var cmd = (this.vertexAttrib1fId + index + "," + v0 + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib2f = function(index, v0, v1){
    var cmd = (this.vertexAttrib2fId + index + "," + v0 + "," + v1 + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib3f = function(index, v0, v1, v2){
    var cmd = (this.vertexAttrib3fId + index + "," + v0 + "," + v1 + "," + v2 + ";");
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib4f = function(index, v0, v1, v2, v3){
    var cmd = (this.vertexAttrib4fId + index + "," + v0 + "," + v1 + "," + v2 + "," + v3+ ";");
    WebGLCallNative(this.componentId, cmd);
};


GContextWebGL.prototype.vertexAttribXXfv_ = function(index, value, type, cmdId){
    if (value.length == 0)
        return;

    value = trans2ArrayType(type, value);
    var cmd = (cmdId + index + "," + GarrToBase64(value) + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.vertexAttrib1fv = function(index, valueArray){
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib1fvId);
};

GContextWebGL.prototype.vertexAttrib2fv = function(index, valueArray){
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib2fvId);
};

GContextWebGL.prototype.vertexAttrib3fv = function(index, valueArray){
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib3fvId);
};

GContextWebGL.prototype.vertexAttrib4fv = function(index, valueArray){
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib4fvId);
};

// GContextWebGL.prototype.vertexAttrib2fv = function(index, value){
//     var cmd = this.vertexAttrib2fvId + index;
//     for (var i = 0; i < value.length; i++) {
//         cmd += ",";
//         cmd += value[i].toFixed(3);
//     }
//     cmd += ";";
//     WebGLCallNative(this.componentId, cmd);
// };

GContextWebGL.prototype.vertexAttribPointer = function(index, size, type, normalized, stride, offset){
    var cmd = (this.vertexAttribPointerId + index + "," + size + ","+ type + "," + (normalized?1:0) + "," +
                stride + "," + offset + ";");
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.viewport = function(x, y, width, height) {
    var cmd = (this.viewportId + x + "," + y + ","+ width + "," + height + ";");
    WebGLCallNative(this.componentId, cmd);
};



////////////////////////////////////////////
// WebGL Extension
////////////////////////////////////////////


//extension for ANGLE_instanced_arrays
GContextWebGL.prototype.drawArraysInstancedANGLE = function(mode, first, count, primcount) {
    var gl = this;
    if( this instanceof GContextWebGLExtension ){
        gl = this.gl;
    }
    var cmd = (gl.drawArraysInstancedANGLEId + mode + "," + first + "," + count + "," + primcount + ";");
    WebGLCallNative(gl.componentId, cmd);
}

GContextWebGL.prototype.drawElementsInstancedANGLE = function(mode, count, type, offset, primcount) {
    var gl = this;
    if( this instanceof GContextWebGLExtension ){
        gl = this.gl;
    }
    var cmd = (gl.drawElementsInstancedANGLEId + mode + "," + count + "," +  type + "," + offset + "," + primcount + ";");
    WebGLCallNative(gl.componentId, cmd);
}

GContextWebGL.prototype.vertexAttribDivisorANGLE = function(index, divisor) {
    var gl = this;
    if( this instanceof GContextWebGLExtension ){
        gl = this.gl;
    }
    var cmd = (gl.vertexAttribDivisorANGLEId + index + "," + divisor + ";");
    WebGLCallNative(gl.componentId, cmd);
}

//extension for OES_vertex_array_object
GContextWebGL.prototype.deleteVertexArrayOES = function(array) {
    var gl = this;
    if( this instanceof GContextWebGLExtension ){
        gl = this.gl;
    }
    var cmd = (gl.deleteVertexArrayOESId + array + ";");
    WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.createVertexArrayOES = function() {
    var gl = this;
    if( this instanceof GContextWebGLExtension ){
        gl = this.gl;
    }
    var cmd = (gl.createVertexArrayOESId + ";");
    return WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.isVertexArrayOES = function(array) {
    var gl = this;
    if( this instanceof GContextWebGLExtension ){
        gl = this.gl;
    }
    var cmd = (gl.isVertexArrayOESId + array + ";")
    return WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.bindVertexArrayOES = function(array) {
    var gl = this;
    if( this instanceof GContextWebGLExtension ){
        gl = this.gl;
    }
    var cmd = (gl.bindVertexArrayOESId + array + ";");
    WebGLCallNative(gl.componentId, cmd);
};

module.exports = GContextWebGL;
