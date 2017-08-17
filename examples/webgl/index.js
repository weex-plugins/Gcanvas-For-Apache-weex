var window = require('./window');
var navigator = window.navigator;
var document = window.document;
var Image = window.Image;
    

/**
 * Hilo3d 1.3.13
 * Copyright (c) 2017-present Alibaba Group Holding Ltd.
 * @license MIT
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Class是提供类的创建的辅助工具。  
 * @namespace  Class
 * @see {@link http://hiloteam.github.io/Hilo/docs/api-zh/symbols/Class.html}
 */
var Class = __webpack_require__(22);

module.exports = Class;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @namespace math
 * @type {Object}
 */
var math = {
  /**
   * 角度值转弧度值
   * @type {Number}
   */
  DEG2RAD: Math.PI / 180,
  /**
   * 弧度值转角度值
   * @type {Number}
   */
  RAD2DEG: 180 / Math.PI,
  /**
   * 生成唯一ID
   * @function
   * @param  {String} [prefix=''] ID前缀
   * @return {String} ID
   */
  generateUUID: function () {
    var uid = 0;
    return function (prefix) {
      var id = ++uid;
      if (prefix) {
        id = prefix + '_' + id;
      }
      return id;
    };
  }(),
  /**
   * 截取
   * @param  {Number} value 值
   * @param  {Number} min 最小值
   * @param  {Number} max 最大值
   * @return {Number} 
   */
  clamp: function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  },

  /**
   * 角度值转换成弧度值
   * @param  {Number} deg 角度值
   * @return {Number} 弧度值
   */
  degToRad: function degToRad(deg) {
    return deg * this.DEG2RAD;
  },

  /**
   * 弧度值转换成角度值
   * @param  {Number} rad 弧度值
   * @return {Number} 角度值
   */
  radToDeg: function radToDeg(rad) {
    return rad * this.RAD2DEG;
  },

  /**
   * 是否是 2 的指数值
   * @param  {Number}  value
   * @return {Boolean}
   */
  isPowerOfTwo: function isPowerOfTwo(value) {
    return (value & value - 1) === 0 && value !== 0;
  },

  /**
   * 最近的 2 的指数值
   * @param  {Number} value
   * @return {Number}
   */
  nearestPowerOfTwo: function nearestPowerOfTwo(value) {
    return Math.pow(2, Math.round(Math.log(value) / Math.LN2));
  },

  /**
   * 下一个的 2 的指数值
   * @param  {Number} value
   * @return {Number}
   */
  nextPowerOfTwo: function nextPowerOfTwo(value) {
    value--;
    value |= value >> 1;
    value |= value >> 2;
    value |= value >> 4;
    value |= value >> 8;
    value |= value >> 16;
    value++;

    return value;
  }
};

module.exports = math;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__(103);

module.exports = constants;

/**
 * WebGL 枚举值，可通过 require('constants/webgl').xxx 或者 Hilo3d.xxx 获取
 * @typedef {Number} GLenum
 */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(2),
    BYTE = _require.BYTE,
    UNSIGNED_BYTE = _require.UNSIGNED_BYTE,
    SHORT = _require.SHORT,
    UNSIGNED_SHORT = _require.UNSIGNED_SHORT,
    UNSIGNED_INT = _require.UNSIGNED_INT,
    FLOAT = _require.FLOAT;

function getRelativePath(basePath, path) {
    if (/^(?:http|blob|data:|\/)/.test(path)) {
        return path;
    }
    basePath = basePath.replace(/\/[^/]*?$/, '').split('/');
    path = path.split('/');
    var i = void 0;
    for (i = 0; i < path.length; i++) {
        var p = path[i];
        if (p === '..') {
            basePath.pop();
        } else if (p !== '.') {
            break;
        }
    }
    return basePath.join('/') + '/' + path.slice(i).join('/');
}

var utf8Decoder = void 0;
function convertUint8ArrayToString(array, isUTF8) {

    if (window.TextDecoder) {

        if (!utf8Decoder) {
            utf8Decoder = new TextDecoder('utf-8');
        }

        if (!(array instanceof Uint8Array)) {
            array = new Uint8Array(array);
        }

        return utf8Decoder.decode(array);
    }

    var str = '';

    for (var i = 0; i < array.length; i++) {
        str += String.fromCharCode(array[i]);
    }

    if (isUTF8) {
        // utf8 str fix
        // https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/btoa
        str = decodeURIComponent(escape(str));
    }

    return str;
}

function getExtension(url) {
    var extRegExp = /\/?[^/]+\.(\w+)(\?\S+)?$/i;
    var match = String(url).match(extRegExp);

    return match && match[1].toLowerCase() || null;
}

function each(obj, fn) {
    if (!obj) {
        return;
    } else if (Array.isArray(obj)) {
        obj.forEach(fn);
    } else {
        Object.keys(obj).forEach(function (key) {
            fn(obj[key], key);
        });
    }
}

function getIndexFromSortedArray(array, value, compareFn) {
    if (!array || !array.length) {
        return [0, 0];
    }
    var len = array.length;
    var low = 0;
    var high = len - 1;

    while (low <= high) {
        var mid = low + high >> 1;
        var diff = compareFn(array[mid], value);
        if (diff === 0) {
            return [mid, mid];
        }
        if (diff < 0) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (low > high) {
        return [high, low];
    }
    return [low, high];
}

function insertToSortedArray(array, item, compareFn) {
    var indices = getIndexFromSortedArray(array, item, compareFn);
    array.splice(indices[1], 0, item);
}

function padLeft(str, len, char) {
    if (len <= str.length) {
        return str;
    }

    return new Array(len - str.length + 1).join(char || '0') + str;
}

function getTypedArrayGLType(array) {
    if (array instanceof Float32Array) {
        return FLOAT;
    } else if (array instanceof Int8Array) {
        return BYTE;
    } else if (array instanceof Uint8Array) {
        return UNSIGNED_BYTE;
    } else if (array instanceof Int16Array) {
        return SHORT;
    } else if (array instanceof Uint16Array) {
        return UNSIGNED_SHORT;
    } else if (array instanceof Uint32Array) {
        return UNSIGNED_INT;
    }

    return FLOAT;
}

var getTypedArrayClass = function () {
    var _TypedArrayClassMap;

    var TypedArrayClassMap = (_TypedArrayClassMap = {}, _defineProperty(_TypedArrayClassMap, BYTE, Int8Array), _defineProperty(_TypedArrayClassMap, UNSIGNED_BYTE, Uint8Array), _defineProperty(_TypedArrayClassMap, SHORT, Int16Array), _defineProperty(_TypedArrayClassMap, UNSIGNED_SHORT, Uint16Array), _defineProperty(_TypedArrayClassMap, UNSIGNED_INT, Uint32Array), _defineProperty(_TypedArrayClassMap, FLOAT, Float32Array), _TypedArrayClassMap);
    return function (type) {
        return TypedArrayClassMap[type] || Float32Array;
    };
}();

function copyArrayData(destArr, srcArr, destIdx, srcIdx, count) {
    if (!destArr || !srcArr) {
        return;
    }
    if (srcArr.isGeometryData) {
        srcArr = srcArr.data;
    }
    for (var i = 0; i < count; i++) {
        destArr[destIdx + i] = srcArr[srcIdx + i];
    }
}

function isStrOrNumber(d) {
    return typeof d === 'string' || typeof d === 'number';
}

function getBlobUrl(mimeType, data) {
    if (data instanceof ArrayBuffer) {
        data = new Uint8Array(data);
    }
    if (window.Blob && window.URL) {
        try {
            var blob = new Blob([data], {
                type: mimeType
            });

            return window.URL.createObjectURL(blob);
        } catch (err) {
            console.warn('new Blob error', mimeType);
        }
    }

    return 'data:' + mimeType + ';base64,' + btoa(convertUint8ArrayToString(data));
}

module.exports = {
    each: each,
    getRelativePath: getRelativePath,
    convertUint8ArrayToString: convertUint8ArrayToString,
    getExtension: getExtension,
    getIndexFromSortedArray: getIndexFromSortedArray,
    insertToSortedArray: insertToSortedArray,
    padLeft: padLeft,
    getTypedArrayClass: getTypedArrayClass,
    copyArrayData: copyArrayData,
    isStrOrNumber: isStrOrNumber,
    getTypedArrayGLType: getTypedArrayGLType,
    getBlobUrl: getBlobUrl
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mat4 = __webpack_require__(14).mat4;
var Class = __webpack_require__(0);
var Vector3 = __webpack_require__(5);
var Quaternion = __webpack_require__(19);

var tempMatrix4 = void 0;
var tempVector3 = new Vector3();
var tempVector32 = new Vector3();

/**
 * 4x4 矩阵
 * @class
 */
var Matrix4 = Class.create( /** @lends Matrix4.prototype */{
    className: 'Matrix4',
    isMatrix4: true,
    /**
     * Creates a new identity mat4
     * @constructs
     */
    constructor: function constructor() {
        /**
         * 数据
         * @type {Float32Array}
         */
        this.elements = mat4.create();
    },

    /**
     * Copy the values from one mat4 to this
     * @param  {Matrix3} m the source matrix
     * @return {Matrix3} this
     */
    copy: function copy(m) {
        mat4.copy(this.elements, m.elements);
        return this;
    },

    /**
     * Creates a new mat4 initialized with values from this matrix
     * @return {Matrix3} a new Matrix3
     */
    clone: function clone() {
        var m = new Matrix4();
        mat4.copy(m.elements, this.elements);
        return m;
    },

    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array} 
     */
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 16; i++) {
            array[offset + i] = elements[i];
        }
        return array;
    },

    /**
     * 从数组赋值
     * @param  {Array} array  数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Matrix4} this
     */
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 16; i++) {
            elements[i] = array[offset + i];
        }
        return this;
    },

    /**
     * Set the components of a mat3 to the given values
     * @param {Number} m00
     * @param {Number} m01
     * @param {Number} m02
     * @param {Number} m03
     * @param {Number} m10
     * @param {Number} m11
     * @param {Number} m12
     * @param {Number} m13
     * @param {Number} m20
     * @param {Number} m21
     * @param {Number} m22
     * @param {Number} m23
     * @param {Number} m30
     * @param {Number} m31
     * @param {Number} m32
     * @param {Number} m33
     * @return {Matrix4} this
     */
    set: function set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        mat4.set(this.elements, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    },

    /**
     * Set this to the identity matrix
     * @return {Matrix4} this
     */
    identity: function identity() {
        mat4.identity(this.elements);
        return this;
    },

    /**
     * Transpose the values of this
     * @return {Matrix4} this
     */
    transpose: function transpose() {
        mat4.transpose(this.elements, this.elements);
        return this;
    },

    /**
     * invert a matrix
     * @param {Matrix4} [m=this]
     * @return {Matrix4} this
     */
    invert: function invert() {
        var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

        mat4.invert(this.elements, m.elements);
        return this;
    },

    /**
     * Calculates the adjugate of a mat4
     * @param {Matrix4} [m=this]
     * @return {Matrix4} this
     */
    adjoint: function adjoint() {
        var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

        mat4.adjoint(this.elements, m.elements);
        return this;
    },

    /**
     * Calculates the determinant of this
     * @return {Matrix4} this
     */
    determinant: function determinant() {
        return mat4.determinant(this.elements);
    },

    /**
     * Multiplies two matrix4's
     * @param {Matrix4} a
     * @param {Matrix4} [b] 如果不传，计算 this 和 a 的乘积
     * @return {Matrix4} this
     */
    multiply: function multiply(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        mat4.multiply(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * 左乘
     * @param {Matrix4} m
     * @return {Matrix4} this
     */
    premultiply: function premultiply(m) {
        this.multiply(m, this);
        return this;
    },

    /**
     * Translate this by the given vector
     * @param {Vector3} v vector to translate by
     * @return {Matrix4} this
     */
    translate: function translate(v) {
        mat4.translate(this.elements, this.elements, v.elements);
        return this;
    },

    /**
     * Scales the mat3 by the dimensions in the given vec2
     * @param {Vector3} v the vec3 to scale the matrix by
     * @return {Matrix4} this
     */
    scale: function scale(v) {
        mat4.scale(this.elements, this.elements, v.elements);
        return this;
    },

    /**
     * Rotates this by the given angle
     * @param {Number} rad the angle to rotate the matrix by
     * @param {Vector3} axis the axis to rotate around
     * @return {Matrix4} this
     */
    rotate: function rotate(rad, axis) {
        mat4.rotate(this.elements, this.elements, rad, axis);
        return this;
    },

    /**
     * Rotates this by the given angle around the X axis 
     * @param {Number} rad the angle to rotate the matrix by
     * @return {Matrix4} this
     */
    rotateX: function rotateX(rad) {
        mat4.rotateX(this.elements, this.elements, rad);
        return this;
    },

    /**
     * Rotates this by the given angle around the Y axis 
     * @param {Number} rad the angle to rotate the matrix by
     * @return {Matrix4} this
     */
    rotateY: function rotateY(rad) {
        mat4.rotateY(this.elements, this.elements, rad);
        return this;
    },

    /**
     * Rotates this by the given angle around the Z axis 
     * @param {Number} rad the angle to rotate the matrix by
     * @return {Matrix4} this
     */
    rotateZ: function rotateZ(rad) {
        mat4.rotateZ(this.elements, this.elements, rad);
        return this;
    },

    /**
     * Creates a matrix from a vector translation
     * @param {Vector3} transition Translation vector
     * @return {Matrix4} this
     */
    fromTranslation: function fromTranslation(v) {
        mat4.fromTranslation(this.elements, v.elements);
        return this;
    },

    /**
     * Creates a matrix from a vector scaling
     * @param  {Vector3} v Scaling vector
     * @return {Matrix4} this
     */
    fromScaling: function fromScaling(v) {
        mat4.fromScaling(this.elements, v.elements);
        return this;
    },

    /**
     * Creates a matrix from a given angle around a given axis
     * @param {Number} rad the angle to rotate the matrix by
     * @param {Vector3} axis the axis to rotate around
     * @return {Matrix4} this
     */
    fromRotation: function fromRotation(rad, axis) {
        mat4.fromRotation(this.elements, rad, axis.elements);
        return this;
    },

    /**
     * Creates a matrix from the given angle around the X axis
     * @param {Number} rad the angle to rotate the matrix by
     * @return {Matrix4} this
     */
    fromXRotation: function fromXRotation(rad) {
        mat4.fromXRotation(this.elements, rad);
        return this;
    },

    /**
     * Creates a matrix from the given angle around the Y axis
     * @param {Number} rad the angle to rotate the matrix by
     * @return {Matrix4} this
     */
    fromYRotation: function fromYRotation(rad) {
        mat4.fromYRotation(this.elements, rad);
        return this;
    },

    /**
     * Creates a matrix from the given angle around the Z axis
     * @param {Number} rad the angle to rotate the matrix by
     * @return {Matrix4} this
     */
    fromZRotation: function fromZRotation(rad) {
        mat4.fromZRotation(this.elements, rad);
        return this;
    },

    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * @param  {Quaternion} q Rotation quaternion
     * @param  {Vector3} v Translation vector
     * @return {Matrix4} this
     */
    fromRotationTranslation: function fromRotationTranslation(q, v) {
        mat4.fromRotationTranslation(this.elements, q.elements, v.elements);
        return this;
    },

    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {Vector3} [out=new Vector3] Vector to receive translation component
     * @return {Vector3} out
     */
    getTranslation: function getTranslation() {
        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector3();

        mat4.getTranslation(out.elements, this.elements);
        return out;
    },

    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be 
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {Vector3} [out=new Vector3] Vector to receive scaling factor component
     * @return {Vector3} out
     */
    getScaling: function getScaling() {
        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector3();

        mat4.getScaling(out.elements, this.elements);
        return out;
    },

    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {Quaternion} out Quaternion to receive the rotation component
     * @return {Quaternion} out
     */
    getRotation: function getRotation() {
        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Quaternion();

        mat4.getRotation(out.elements, this.elements);
        return out;
    },

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * @param  {Quaternion} q Rotation quaternion
     * @param  {Vector3} v Translation vector
     * @param  {Vector3} s Scaling vector
     * @return {Matrix4} this
     */
    fromRotationTranslationScale: function fromRotationTranslationScale(q, v, s) {
        mat4.fromRotationTranslationScale(this.elements, q.elements, v.elements, s.elements);
        return this;
    },

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * @param  {Quaternion} q Rotation quaternion
     * @param  {Vector3} v Translation vector
     * @param  {Vector3} s Scaling vector
     * @param  {Vector3} o The origin vector around which to scale and rotate
     * @return {Matrix4} this
     */
    fromRotationTranslationScaleOrigin: function fromRotationTranslationScaleOrigin(q, v, s, o) {
        mat4.fromRotationTranslationScaleOrigin(this.elements, q.elements, v.elements, s.elements, o.elements);
        return this;
    },

    /**
     * Calculates a 4x4 matrix from the given quaternion
     * @param {Quaternion} q Quaternion to create matrix from
     * @return {Matrix4} this
     */
    fromQuat: function fromQuat(q) {
        mat4.fromQuat(this.elements, q.elements);
        return this;
    },

    /**
     * Generates a frustum matrix with the given bounds
     * @param  {Number} left  Left bound of the frustum
     * @param  {Number} right Right bound of the frustum
     * @param  {Number} bottom Bottom bound of the frustum
     * @param  {Number} top Top bound of the frustum 
     * @param  {Number} near Near bound of the frustum
     * @param  {Number} far Far bound of the frustum 
     * @return {Matrix4} this
     */
    frustum: function frustum(left, right, bottom, top, near, far) {
        mat4.frustum(this.elements, left, right, bottom, top, near, far);
        return this;
    },

    /**
     * Generates a perspective projection matrix with the given bounds
     * @param {Number} fovy Vertical field of view in radians
     * @param {Number} aspect Aspect ratio. typically viewport width/height
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @return {Matrix4} this
     */
    perspective: function perspective(fovy, aspect, near, far) {
        mat4.perspective(this.elements, fovy, aspect, near, far);
        return this;
    },

    /**
     * Generates a perspective projection matrix with the given field of view.
     * @param  {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param  {Number} Near bound of the frustum
     * @param  {Number} far Far bound of the frustum
     * @return {Matrix4} this    
     */
    perspectiveFromFieldOfView: function perspectiveFromFieldOfView(fov, near, far) {
        mat4.perspectiveFromFieldOfView(this.elements, fov, near, far);
        return this;
    },

    /**
     * Generates a orthogonal projection matrix with the given bounds
     * @param  {Number} left  Left bound of the frustum
     * @param  {Number} right Right bound of the frustum
     * @param  {Number} bottom Bottom bound of the frustum
     * @param  {Number} top Top bound of the frustum 
     * @param  {Number} near Near bound of the frustum
     * @param  {Number} far Far bound of the frustum 
     * @return {Matrix4} this
     */
    ortho: function ortho(left, right, bottom, top, near, far) {
        mat4.ortho(this.elements, left, right, bottom, top, near, far);
        return this;
    },

    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis
     * @param  {XYZObject} eye Position of the viewer
     * @param  {XYZObject} center Point the viewer is looking at
     * @param  {Vector3} up pointing up
     * @return {Matrix4} this
     */
    lookAt: function lookAt(eye, center, up) {
        if (!eye.isVector3) {
            eye = tempVector3.set(eye.x, eye.y, eye.z);
        }
        if (!center.isVector3) {
            center = tempVector32.set(center.x, center.y, center.z);
        }

        mat4.lookAt(this.elements, eye.elements, center.elements, up.elements);

        return this;
    },

    /**
     * Generates a matrix that makes something look at something else.
     * @param  {XYZObject} eye Position of the viewer
     * @param  {XYZObject} Point the viewer is looking at
     * @param  {Vector3} up pointing up
     * @return {Matrix4} this
     */
    targetTo: function targetTo(eye, target, up) {
        if (!eye.isVector3) {
            eye = tempVector3.set(eye.x, eye.y, eye.z);
        }
        if (!target.isVector3) {
            target = tempVector32.set(target.x, target.y, target.z);
        }

        // mat4.targetTo(this.elements, eye.elements, target.elements, up.elements);
        eye = eye.elements;
        target = target.elements;
        up = up.elements;
        var out = this.elements;

        var eyex = eye[0],
            eyey = eye[1],
            eyez = eye[2],
            upx = up[0],
            upy = up[1],
            upz = up[2];

        var z0 = eyex - target[0],
            z1 = eyey - target[1],
            z2 = eyez - target[2];

        var len = z0 * z0 + z1 * z1 + z2 * z2;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            z0 *= len;
            z1 *= len;
            z2 *= len;
        } else {
            z2 = 1;
        }

        var x0 = upy * z2 - upz * z1,
            x1 = upz * z0 - upx * z2,
            x2 = upx * z1 - upy * z0;

        len = x0 * x0 + x1 * x1 + x2 * x2;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            x0 *= len;
            x1 *= len;
            x2 *= len;
        } else {
            upx += 0.0000001;

            x0 = upy * z2 - upz * z1;
            x1 = upz * z0 - upx * z2;
            x2 = upx * z1 - upy * z0;
            len = x0 * x0 + x1 * x1 + x2 * x2;
            len = 1 / Math.sqrt(len);
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }

        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return this;
    },

    /**
     * Returns Frobenius norm of a mat4
     * @return {Number} Frobenius norm
     */
    frob: function frob() {
        return mat4.frob(this.elements);
    },

    /**
     * Adds two mat4's
     * @param {Matrix4} a 
     * @param {Matrix4} [b] 如果不传，计算 this 和 a 的和
     * @return {Marix4} this
     */
    add: function add(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        mat4.add(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Subtracts matrix b from matrix a
     * @param {Matrix4} a 
     * @param {Matrix4} [b]  如果不传，计算 this 和 a 的差
     * @return {Marix4} this
     */
    subtract: function subtract(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        mat4.subtract(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     * @param {Matrix4} a 
     * @param {Matrix4} [b] 如果不传，比较 this 和 a 是否相等
     * @return {Boolean}
     */
    exactEquals: function exactEquals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return mat4.exactEquals(a.elements, b.elements);
    },

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     * @param {Matrix4} a 
     * @param {Matrix4} [b] 如果不传，比较 this 和 a 是否近似相等
     * @return {Boolean}
     */
    equals: function equals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return mat4.equals(a.elements, b.elements);
    },

    /**
     * compose
     * @param  {Quaternion} q quaternion
     * @param  {Vector3} v position
     * @param  {Vector3} s scale
     * @param  {Vector3} p [pivot]
     * @return {Matrix4}  this
     */
    compose: function compose(q, v, s, p) {
        if (p) {
            this.fromRotationTranslationScaleOrigin(q, v, s, p);
        } else {
            this.fromRotationTranslationScale(q, v, s);
        }
        return this;
    },

    /**
     * decompose
     * @param  {Quaternion} q quaternion
     * @param  {Vector3} v position
     * @param  {Vector3} s scale
     * @param  {Vector3} p [pivot]
     * @return {Matrix4}  this
     */
    decompose: function decompose(q, v, s, p) {
        this.getScaling(s);
        this.getTranslation(v);

        if (!tempMatrix4) {
            tempMatrix4 = new Matrix4();
        }

        var det = this.determinant();
        if (det < 0) s.x *= -1;

        tempMatrix4.copy(this);
        tempVector3.inverse(s);
        tempMatrix4.scale(tempVector3);

        q.fromMat4(tempMatrix4);

        if (p) {
            p.set(0, 0, 0);
        }
        return this;
    }
});

/**
 * Alias for {@link Matrix4#subtract}
 * @function
 */
Matrix4.prototype.sub = Matrix4.prototype.subtract;

/**
 * Alias for {@link Matrix4#multiply}
 * @function
 */
Matrix4.prototype.mul = Matrix4.prototype.multiply;

module.exports = Matrix4;

/**
 * 含x, y, z属性的对象
 * @typedef {object} XYZObject
 * @property {Number} x
 * @property {Number} y
 * @property {Number} z
 */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec3 = __webpack_require__(14).vec3;
var Class = __webpack_require__(0);

/**
 * 三维向量
 * @class
 */
var Vector3 = Class.create( /** @lends Vector3.prototype */{
    className: 'Vector3',
    isVector3: true,
    /**
     * Creates a new empty vec3
     * @param {Number} [x=0] X component
     * @param {Number} [y=0] Y component
     * @param {Number} [z=0] Z component
     * @constructs
     */
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        /**
         * 数据 
         * @type {Float32Array}
         */
        this.elements = vec3.fromValues(x, y, z);
    },

    /**
     * Copy the values from one vec3 to this
     * @param  {Vector3} m the source vector
     * @return {Vector3} this
     */
    copy: function copy(v) {
        vec3.copy(this.elements, v.elements);
        return this;
    },

    /**
     * Creates a new vec3 initialized with values from this vec3
     * @return {Vector3} a new Vector3
     */
    clone: function clone() {
        var elements = this.elements;
        return new Vector3(elements[0], elements[1], elements[2]);
    },

    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array} 
     */
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        array[0 + offset] = elements[0];
        array[1 + offset] = elements[1];
        array[2 + offset] = elements[2];
        return array;
    },

    /**
     * 从数组赋值
     * @param  {Array} array  数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Vector3} this
     */
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        elements[0] = array[offset + 0];
        elements[1] = array[offset + 1];
        elements[2] = array[offset + 2];
        return this;
    },

    /**
     * Set the components of a vec3 to the given values
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {Vector3} this
     */
    set: function set(x, y, z) {
        vec3.set(this.elements, x, y, z);
        return this;
    },

    /**
     * Adds two vec3's
     * @param {Vector3} a 
     * @param {Vector3} [b] 如果不传，计算 this 和 a 的和
     * @returns {Vector3} this
     */
    add: function add(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.add(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Subtracts vector b from vector a
     * @param {Vector3} a 
     * @param {Vector3} [b] 如果不传，计算 this 和 a 的差
     * @returns {Vector3} this
     */
    subtract: function subtract(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.subtract(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Multiplies two vec3's
     * @param {Vector3} a 
     * @param {Vector3} [b] 如果不传，计算 this 和 a 的积
     * @returns {Vector3} this
     */
    multiply: function multiply(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.multiply(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Divides two vec3's
     * @param {Vector3} a 
     * @param {Vector3} [b] 如果不传，计算 this 和 a 的商
     * @returns {Vector3} this
     */
    divide: function divide(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.divide(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Math.ceil the components of this
     * @returns {Vector3} this
     */
    ceil: function ceil() {
        vec3.ceil(this.elements, this.elements);
        return this;
    },

    /**
     * Math.floor the components of this
     * @returns {Vector3} this
     */
    floor: function floor() {
        vec3.floor(this.elements, this.elements);
        return this;
    },

    /**
     * Returns the minimum of two vec3's
     * @param  {Vector3} a
     * @param  {Vector3} [b] 如果不传，计算 this 和 a 的结果
     * @returns {Vector3} this
     */
    min: function min(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.min(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Returns the maximum of two vec3's
     * @param  {Vector3} a
     * @param  {Vector3} [b]  如果不传，计算 this 和 a 的结果
     * @returns {Vector3} this
     */
    max: function max(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.max(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Math.round the components of this
     * @returns {Vector3} this
     */
    round: function round() {
        vec3.round(this.elements, this.elements);
        return this;
    },

    /**
     * Scales this by a scalar number
     * @param  {Vector3} scale amount to scale the vector by
     * @returns {Vector3} this
     */
    scale: function scale(_scale) {
        vec3.scale(this.elements, this.elements, _scale);
        return this;
    },

    /**
     * Adds two vec3's after scaling the second vector by a scalar value
     * @param  {Vector3} scale the amount to scale the second vector by before adding
     * @param  {Vector3} a    
     * @param  {Vector3} [b] 如果不传，计算 this 和 a 的结果
     * @returns {Vector3} this
     */
    scaleAndAdd: function scaleAndAdd(scale, a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.scaleAndAdd(this.elements, a.elements, b.elements, scale);
        return this;
    },

    /**
     * Calculates the euclidian distance between two vec3's
     * @param  {Vector3} a
     * @param  {Vector3} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number} distance between a and b
     */
    distance: function distance(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec3.distance(a.elements, b.elements);
    },

    /**
     * Calculates the squared euclidian distance between two vec3's
     * @param  {Vector3} a
     * @param  {Vector3} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number} squared distance between a and b
     */
    squaredDistance: function squaredDistance(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec3.distance(a.elements, b.elements);
    },

    /**
     * Calculates the length of this
     * @return {Number} length of this
     */
    length: function length() {
        return vec3.length(this.elements);
    },

    /**
     * Calculates the squared length of this
     * @return {Number} squared length of this
     */
    squaredLength: function squaredLength() {
        return vec3.squaredLength(this.elements);
    },

    /**
     * Negates the components of this
     * @returns {Vector3} this
     */
    negate: function negate() {
        vec3.negate(this.elements, this.elements);
        return this;
    },

    /**
     * Returns the inverse of the components of a vec3
     * @param  {Vector3} [a=this]
     * @returns {Vector3} this
     */
    inverse: function inverse(a) {
        if (!a) {
            a = this;
        }
        vec3.inverse(this.elements, a.elements);
        return this;
    },

    /**
     * Normalize this
     * @returns {Vector3} this
     */
    normalize: function normalize() {
        vec3.normalize(this.elements, this.elements);
        return this;
    },

    /**
     * Calculates the dot product of two vec3's
     * @param  {Vector3} a
     * @param  {Vector3} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number}  product of a and b
     */
    dot: function dot(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec3.dot(a.elements, b.elements);
    },

    /**
     * Computes the cross product of two vec3's
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number}  cross product of a and b
     */
    cross: function cross(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.cross(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Performs a linear interpolation between two vec3's
     * @param  {Vector3} v 
     * @param  {Number} t interpolation amount between the two vectors
     * @returns {Vector3} this
     */
    lerp: function lerp(v, t) {
        vec3.lerp(this.elements, this.elements, v.elements, t);
        return this;
    },

    /**
     * Performs a hermite interpolation with two control points
     * @param  {Vector3} a
     * @param  {Vector3} b
     * @param  {Vector3} c
     * @param  {Vector3} d
     * @param  {Number} t interpolation amount between the two inputs
     * @return {Vector3} this
     */
    hermite: function hermite(a, b, c, d, t) {
        vec3.hermite(this.elements, a.elements, b.elements, c.elements, d.elements, t);
        return this;
    },

    /**
     * Performs a bezier interpolation with two control points
     * @param  {Vector3} a 
     * @param  {Vector3} b 
     * @param  {Vector3} c 
     * @param  {Vector3} d 
     * @param  {Number} t interpolation amount between the two inputs
     * @return {Vector3} this
     */
    bezier: function bezier(a, b, c, d, t) {
        vec3.bezier(this.elements, a.elements, b.elements, c.elements, d.elements, t);
        return this;
    },

    /**
     * Generates a random vector with the given scale
     * @param  {Number} [scale=1] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {Vector3} this
     */
    random: function random(scale) {
        vec3.random(this.elements, scale);
        return this;
    },

    /**
     * Transforms the vec3 with a mat3
     * @param  {Matrix3} m matrix to transform with
     * @returns {Vector3} this
     */
    transformMat3: function transformMat3(m) {
        vec3.transformMat3(this.elements, this.elements, m.elements);
        return this;
    },

    /**
     * Transforms the vec3 with a mat4
     * @param  {Matrix4} m matrix to transform with
     * @returns {Vector3} this
     */
    transformMat4: function transformMat4(m) {
        vec3.transformMat4(this.elements, this.elements, m.elements);
        return this;
    },

    /**
     * Transforms the vec3 direction with a mat4
     * @param  {Matrix4} m matrix to transform with
     * @returns {Vector3} this
     */
    transformDirection: function transformDirection(m) {
        var elements = this.elements;
        var mElements = m.elements;
        var x = elements[0];
        var y = elements[1];
        var z = elements[2];

        elements[0] = x * mElements[0] + y * mElements[4] + z * mElements[8];
        elements[1] = x * mElements[1] + y * mElements[5] + z * mElements[9];
        elements[2] = x * mElements[2] + y * mElements[6] + z * mElements[10];

        return this;
    },

    /**
     * Transforms the vec3 with a quat
     * @param  {Quaternion} q quaternion to transform with
     * @returns {Vector3} this
     */
    transformQuat: function transformQuat(q) {
        vec3.transformQuat(this.elements, q.elements);
        return this;
    },

    /**
     * Rotate this 3D vector around the x-axis
     * @param  {Vector3} origin The origin of the rotation
     * @param  {Number} rotation The angle of rotation
     * @return {Vector3} this
     */
    rotateX: function rotateX(origin, rotation) {
        vec3.rotateX(this.elements, this.elements, origin.elements, rotation);
        return this;
    },

    /**
     * Rotate this 3D vector around the y-axis
     * @param  {Vector3} origin The origin of the rotation
     * @param  {Number} rotation The angle of rotation
     * @return {Vector3} this
     */
    rotateY: function rotateY(origin, rotation) {
        vec3.rotateY(this.elements, this.elements, origin.elements, rotation);
        return this;
    },

    /**
     * Rotate this 3D vector around the z-axis
     * @param  {Vector3} origin The origin of the rotation
     * @param  {Number} rotation The angle of rotation
     * @return {Vector3} this
     */
    rotateZ: function rotateZ(origin, rotation) {
        vec3.rotateZ(this.elements, this.elements, origin.elements, rotation);
        return this;
    },

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     * @param  {Vector3} a
     * @param  {Vector3} [b] 如果不传，计算 this 和 a 的结果
     * @return {Boolean} True if the vectors are equal, false otherwise.
     */
    exactEquals: function exactEquals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec3.exactEquals(a.elements, b.elements);
    },

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     * @param  {Vector3} a
     * @param  {Vector3} [b] 如果不传，计算 this 和 a 的结果
     * @return {Boolean} True if the vectors are equal, false otherwise.  
     */
    equals: function equals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec3.equals(a.elements, b.elements);
    },

    /**
     * X component
     * @type {Number}
     */
    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    /**
     * Y component
     * @type {Number}
     */
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    },
    /**
     * Z component
     * @type {Number}
     */
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
        }
    }
});

/**
 * Alias for {@link Vector3#subtract}
 * @function
 */
Vector3.prototype.sub = Vector3.prototype.subtract;

/**
 * Alias for {@link Vector3#multiply}
 * @function
 */
Vector3.prototype.mul = Vector3.prototype.multiply;

/**
 * Alias for {@link Vector3#divide}
 * @function
 */
Vector3.prototype.div = Vector3.prototype.divide;

/**
 * Alias for {@link Vector3#distance}
 * @function
 */
Vector3.prototype.dist = Vector3.prototype.distance;

/**
 * Alias for {@link Vector3#squaredDistance}
 * @function
 */
Vector3.prototype.sqrDist = Vector3.prototype.squaredDistance;

/**
 * Alias for {@link Vector3#length}
 * @function
 */
Vector3.prototype.len = Vector3.prototype.length;

/**
 * Alias for {@link Vector3#squaredLength}
 * @function
 */
Vector3.prototype.sqrLen = Vector3.prototype.squaredLength;

module.exports = Vector3;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Vector4 = __webpack_require__(29);
var util = __webpack_require__(3);

/**
 * 颜色类
 * @class 
 * @extends Vector4
 */
var Color = Class.create( /** @lends Color.prototype */{
    Extends: Vector4,
    className: 'Color',
    isColor: true,
    /**
     * r
     * @type {Number}
     */
    r: {
        get: function get() {
            return this.x;
        },
        set: function set(v) {
            this.x = v;
        }
    },
    /**
     * g
     * @type {Number}
     */
    g: {
        get: function get() {
            return this.y;
        },
        set: function set(v) {
            this.y = v;
        }
    },
    /**
     * b
     * @type {Number}
     */
    b: {
        get: function get() {
            return this.z;
        },
        set: function set(v) {
            this.z = v;
        }
    },
    /**
     * a
     * @type {Number}
     */
    a: {
        get: function get() {
            return this.w;
        },
        set: function set(v) {
            this.w = v;
        }
    },
    /**
     * @constructs
     * @param  {Number} r
     * @param  {Number} g
     * @param  {Number} b
     * @param  {Number} a
     */
    constructor: function constructor() {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        if (r > 1) {
            r /= 255;
        }
        if (g > 1) {
            g /= 255;
        }
        if (b > 1) {
            b /= 255;
        }
        if (a > 1) {
            a /= 255;
        }
        Color.superclass.constructor.call(this, r, g, b, a);
    },

    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 转换到的数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array}      
     */
    toRGBArray: function toRGBArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var el = this.elements;
        array[offset] = el[0];
        array[offset + 1] = el[1];
        array[offset + 2] = el[2];
        return array;
    },

    /**
     * 从数组赋值
     * @param  {Array} array 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Color}
     */
    fromUintArray: function fromUintArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        this.elements[0] = array[offset] / 255;
        this.elements[1] = array[offset + 1] / 255;
        this.elements[2] = array[offset + 2] / 255;
        this.elements[3] = array[offset + 3] / 255;
        return this;
    },

    /**
     * 从十六进制值赋值
     * @param  {String|Number} hex 颜色的十六进制值，可以以下形式："#ff9966", "ff9966", "#f96", "f96", 0xff9966
     * @return {Color}
     */
    fromHEX: function fromHEX(hex) {
        if (typeof hex === 'number') {
            hex = hex.toString(16);
        } else {
            if (hex[0] === '#') {
                hex = hex.slice(1);
            }
            if (hex.length === 3) {
                hex = hex.replace(/(\w)/g, '$1$1');
            }
        }
        this.elements[0] = parseInt(hex.slice(0, 2), 16) / 255;
        this.elements[1] = parseInt(hex.slice(2, 4), 16) / 255;
        this.elements[2] = parseInt(hex.slice(4, 6), 16) / 255;
        return this;
    },

    /**
     * 转16进制
     * @return {String}
     */
    toHEX: function toHEX() {
        var hex = '';
        for (var i = 0; i < 3; i++) {
            hex += util.padLeft(Math.floor(this.elements[i] * 255).toString(16), 2);
        }
        return hex;
    }
});

module.exports = Color;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var util = __webpack_require__(3);
var Vector2 = __webpack_require__(42);
var Vector3 = __webpack_require__(5);
var Matrix3 = __webpack_require__(23);
var Matrix4 = __webpack_require__(4);
var Quaternion = __webpack_require__(19);
var Sphere = __webpack_require__(131);
var GeometryData = __webpack_require__(8);

var _require = __webpack_require__(2),
    TRIANGLES = _require.TRIANGLES,
    LINES = _require.LINES,
    FRONT = _require.FRONT,
    BACK = _require.BACK,
    FRONT_AND_BACK = _require.FRONT_AND_BACK;

var tempVector31 = new Vector3();
var tempVector32 = new Vector3();
var tempVector33 = new Vector3();

var tempVector21 = new Vector2();
var tempVector22 = new Vector2();
var tempVector23 = new Vector2();

var tempMatrix3 = new Matrix3();
var tempMatrix4 = new Matrix4();
var tempQuaternion = new Quaternion();

/**
 * 几何体
 * @class
 * @example
 * const geometry = new Hilo3d.Geometry();
 * geometry.addFace([-0.5, -0.289, 0], [0.5, -0.289, 0], [0, 0.577, 0]);
 */
var Geometry = Class.create( /** @lends Geometry.prototype */{
    /**
     * @default true
     * @type {boolean}
     */
    isGeometry: true,

    /**
     * @default Geometry
     * @type {string}
     */
    className: 'Geometry',

    /**
     * 顶点数据
     * @default null
     * @type {GeometryData}
     */
    vertices: null,

    /**
     * uv 数据
     * @default null
     * @type {GeometryData}
     */
    uvs: null,

    /**
     * 顶点索引数据
     * @default null
     * @type {GeometryData}
     */
    indices: null,

    /**
     * 骨骼索引
     * @default null
     * @type {GeometryData}
     */
    skinIndices: null,

    /**
     * 骨骼权重数据
     * @default null
     * @type {GeometryData}
     */
    skinWeights: null,

    /**
     * 绘制模式
     * @default TRIANGLES
     * @type {number}
     */
    mode: TRIANGLES,

    /**
     * 是否是静态
     * @type {Boolean}
     * @default true
     */
    isStatic: true,

    /**
     * 是否需要更新
     * @type {Boolean}
     * @default true
     */
    isDirty: true,

    /**
     * @constructs
     * @param {object} [params] 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(params) {
        /**
         * id
         * @type {string}
         */
        this.id = math.generateUUID(this.className);

        Object.assign(this, params);

        this.currentVerticesCount = 0;
        this.currentIndicesCount = 0;
    },

    _needUpdateNormals: false,
    /**
     * 法向量数据，如果没有的话会自动生成
     * @default null
     * @type {Float32Array}
     */
    normals: {
        get: function get() {
            if (this._needUpdateNormals || !this._normals) {
                this.calculateNormals();
            }
            return this._normals;
        },
        set: function set(data) {
            this._normals = data;
            this._needUpdateNormals = false;
        }
    },
    calculateNormals: function calculateNormals() {
        if (!this._normals) {
            this._normals = new GeometryData(new Float32Array(this.vertices.realLength), 3);
        }
        var normals = this._normals;
        var indices = void 0;
        if (this.indices) {
            indices = this.indices.data;
        } else {
            var len = this.vertices.length / 3;
            indices = new Array(len);
            for (var i = 0; i < len; i++) {
                indices[i] = i;
            }
        }
        var vertices = this.vertices;
        var idx = 0;
        var verticesInFaceCountList = new Uint8Array(vertices.count);
        for (var _i = 0; _i < indices.length; _i += 3) {
            idx = indices[_i];
            tempVector31.copy(vertices.get(idx));
            idx = indices[_i + 1];
            tempVector32.copy(vertices.get(idx));
            idx = indices[_i + 2];
            tempVector33.copy(vertices.get(idx));

            tempVector32.sub(tempVector31);
            tempVector33.sub(tempVector31);
            tempVector32.cross(tempVector33);

            for (var j = 0; j < 3; j++) {
                idx = indices[_i + j];
                if (verticesInFaceCountList[idx]) {
                    var oldNormal = normals.get(idx);
                    oldNormal.scale(verticesInFaceCountList[idx]);
                    oldNormal.add(tempVector32);
                    oldNormal.scale(1 / (verticesInFaceCountList[idx] + 1));
                    normals.set(idx, oldNormal);
                } else {
                    normals.set(idx, tempVector32);
                }
                verticesInFaceCountList[idx]++;
            }
        }
        normals.isDirty = true;
        this._needUpdateNormals = false;
    },

    /**
     * 切线向量数据，如果没有的话会自动生成
     * @default null
     * @type {Float32Array}
     */
    tangents: {
        get: function get() {
            if (!this._tangents) {
                this.calculateTangents();
            }
            return this._tangents;
        },
        set: function set(data) {
            this._tangents = data;
        }
    },
    calculateTangents: function calculateTangents() {
        if (!this._tangents) {
            this._tangents = new GeometryData(new Float32Array(this.vertices.realLength), 3);
        }
        var tangents = this._tangents;
        var indices = void 0;
        if (this.indices) {
            indices = this.indices.data;
        } else {
            var len = this.vertices.length / 3;
            indices = new Array(len);
            for (var i = 0; i < len; i++) {
                indices[i] = i;
            }
        }

        var vertices = this.vertices;
        var uvs = this.uvs;
        var idx = 0;
        for (var _i2 = 0; _i2 < indices.length; _i2 += 3) {
            idx = indices[_i2];
            tempVector31.copy(vertices.get(idx));
            tempVector21.copy(uvs.get(idx));
            idx = indices[_i2 + 1];
            tempVector32.copy(vertices.get(idx));
            tempVector22.copy(uvs.get(idx));
            idx = indices[_i2 + 2];
            tempVector33.copy(vertices.get(idx));
            tempVector23.copy(uvs.get(idx));

            // eage1
            tempVector32.sub(tempVector31);
            // eage2
            tempVector33.sub(tempVector31);

            // deltauv1
            tempVector22.sub(tempVector21);
            // deltauv2
            tempVector23.sub(tempVector21);

            var f = 1 / (tempVector22.x * tempVector23.y - tempVector23.x * tempVector22.y);
            if (!Number.isFinite(f)) {
                tempVector31.x = 0;
                tempVector31.y = 0;
                tempVector31.z = 1;
            } else {
                tempVector31.x = f * (tempVector23.y * tempVector32.x - tempVector22.y * tempVector33.x);
                tempVector31.y = f * (tempVector23.y * tempVector32.y - tempVector22.y * tempVector33.y);
                tempVector31.z = f * (tempVector23.y * tempVector32.z - tempVector22.y * tempVector33.z);
            }

            tangents.set(indices[_i2], tempVector31);
            tangents.set(indices[_i2 + 1], tempVector31);
            tangents.set(indices[_i2 + 2], tempVector31);
        }
    },

    /**
     * 将三角形模式转换为线框模式，即 Material 中的 wireframe
     */
    convertToLinesMode: function convertToLinesMode() {
        if (this.mode !== TRIANGLES) {
            console.warn('Only support convert triangles to lines mode!');
            return;
        }
        if (!this.indices) {
            console.warn('Has no indices!');
            return;
        }

        var newIndices = new Uint16Array(this.indices.length * 2);
        var data = this.indices.data;
        for (var i = 0; i < data.length; i += 3) {
            newIndices[i * 2] = data[i]; // A
            newIndices[i * 2 + 1] = data[i + 1]; // B
            newIndices[i * 2 + 2] = data[i + 1]; // B
            newIndices[i * 2 + 3] = data[i + 2]; // C
            newIndices[i * 2 + 4] = data[i + 2]; // C
            newIndices[i * 2 + 5] = data[i]; // A
        }
        this.indices.data = newIndices;
        this.mode = LINES;
    },

    /**
     * 平移
     * @param  {Number} [x=0]
     * @param  {Number} [y=0]
     * @param  {Number} [z=0]
     * @return {Geometry} this
     */
    translate: function translate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        this.transformMat4(tempMatrix4.fromTranslation(tempVector31.set(x, y, z)));
        return this;
    },

    /**
     * 缩放
     * @param  {Number} [x=1]
     * @param  {Number} [y=1]
     * @param  {Number} [z=1]
     * @return {Geometry} this
     */
    scale: function scale() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        this.transformMat4(tempMatrix4.fromScaling(tempVector31.set(x, y, z)));
        return this;
    },

    /**
     * 旋转
     * @param  {Number} [x=0] 旋转角度x
     * @param  {Number} [y=0] 旋转角度y
     * @param  {Number} [z=0] 旋转角度z
     * @return {Geometry} this
     */
    rotate: function rotate() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        this.transformMat4(tempMatrix4.fromQuat(tempQuaternion.fromEuler({
            x: x * math.DEG2RAD,
            y: y * math.DEG2RAD,
            z: z * math.DEG2RAD
        })));
        return this;
    },

    /**
     * Transforms the geometry with a mat4.
     * @param  {Matrix4} mat4 
     * @return {Geometry} this
     */
    transformMat4: function transformMat4(mat4) {
        var vertices = this.vertices;
        if (vertices) {
            vertices.traverse(function (vertex, index, offset) {
                vertices.setByOffset(offset, vertex.transformMat4(mat4));
            });
        }

        tempMatrix3.normalFromMat4(mat4);
        if (this._normals) {
            var normals = this.normals;
            normals.traverse(function (vertex, index, offset) {
                normals.setByOffset(offset, vertex.transformMat3(tempMatrix3).normalize());
            });
        }

        if (this._tangents) {
            var tangents = this.tangents;
            tangents.traverse(function (vertex, index, offset) {
                tangents.setByOffset(offset, vertex.transformMat3(tempMatrix3).normalize());
            });
        }

        this.isDirty = true;
        return this;
    },
    ensureData: function ensureData(name, size, total, TypedArray) {
        var geometryData = this[name];
        if (!geometryData || total > geometryData.length) {
            var newData = new TypedArray(total);
            if (geometryData) {
                newData.set(geometryData.data);
                geometryData.data = newData;
            } else {
                this[name] = new GeometryData(newData, size);
            }
        }
    },

    /**
     * 添加顶点
     * @param {...number[]} points 顶点坐标，如 addPoints([x, y, z], [x, y, z])
     */
    addPoints: function addPoints() {
        var _this = this;

        var points = [].slice.call(arguments);
        var total = (this.currentVerticesCount + points.length) * 3;
        this.ensureData('vertices', 3, total, Float32Array);

        var data = this.vertices.data;
        points.forEach(function (point) {
            var start = _this.currentVerticesCount++ * 3;
            data[start] = point[0];
            data[start + 1] = point[1];
            data[start + 2] = point[2];
        });
        return this.currentVerticesCount - points.length;
    },

    /**
     * 添加顶点索引
     * @param {...number} indices 顶点索引，如 addIndices(0, 1, 2)
     */
    addIndices: function addIndices() {
        var _this2 = this;

        var indices = [].slice.call(arguments);
        var total = this.currentIndicesCount + indices.length;
        this.ensureData('indices', 1, total, Uint16Array);
        var data = this.indices.data;
        indices.forEach(function (idx) {
            data[_this2.currentIndicesCount++] = idx;
        });

        this._needUpdateNormals = true;
    },

    /**
     * 添加一条线
     * @param {number[]} p1 起点坐标，如 [x, y, z]
     * @param {number[]} p2 终点坐标
     */
    addLine: function addLine(p1, p2) {
        var start = this.addPoints(p1, p2);
        this.addIndices(start, start + 1);
    },

    /**
     * 添加一个三角形 ABC
     * @param {number[]} p1 点A，如 [x, y, z]
     * @param {number[]} p2 点B
     * @param {number[]} p3 点C
     */
    addFace: function addFace(p1, p2, p3) {
        var start = this.addPoints(p1, p2, p3);
        this.addIndices(start, start + 1, start + 2);
    },

    /**
     * 添加一个矩形 ABCD
     * @param {number[]} p1 点A，如 [x, y, z]
     * @param {number[]} p2 点B
     * @param {number[]} p3 点C
     * @param {number[]} p4 点D
     */
    addRect: function addRect(p1, p2, p3, p4) {
        var start = this.addPoints(p1, p2, p3, p4);
        // 0 1 2 & 0 2 3 make a rect
        this.addIndices(start, start + 1, start + 2, start, start + 2, start + 3);
    },

    /**
     * 设置顶点对应的uv坐标
     * @param {number} start 开始的顶点索引
     * @param {number[][]} uvs uv坐标数据，如 [[0, 0], [1, 0]]
     */
    setVertexUV: function setVertexUV(start, uvs) {
        this.ensureData('uvs', 2, this.vertices.length / 3 * 2, Float32Array);
        var data = this.uvs.data;
        for (var i = 0; i < uvs.length; i++) {
            data[start + i * 2] = uvs[i][0];
            data[start + i * 2 + 1] = uvs[i][1];
        }
    },

    /**
     * 设置三角形ABC的uv
     * @param {number} start 开始的顶点索引
     * @param {number[]} p1 点A的uv，如 [0, 0]
     * @param {number[]} p2 点B的uv
     * @param {number[]} p3 点C的uv
     */
    setFaceUV: function setFaceUV(start, p1, p2, p3) {
        this.setVertexUV(start, [p1, p2, p3]);
    },

    /**
     * 设置矩形ABCD的uv
     * @param {number} start 开始的顶点索引
     * @param {number[]} p1 点A的uv，如 [0, 0]
     * @param {number[]} p2 点B的uv
     * @param {number[]} p3 点C的uv
     * @param {number[]} p4 点D的uv
     */
    setRectUV: function setRectUV(start, p1, p2, p3, p4) {
        this.setVertexUV(start, [p1, p2, p3, p4]);
    },

    /**
     * 获取指定matrix变化后的包围盒数据
     *
     * @param {Matrix4} [null] matrix 需要变换的矩阵
     * @param {Bounds} [bounds] 包围盒数据，传入的话会改变他
     * @return {Bounds} 包围盒数据
     */
    getBounds: function getBounds() {
        var matrix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var bounds = arguments[1];

        if (!bounds) {
            bounds = {
                xMin: Infinity,
                xMax: -Infinity,
                yMin: Infinity,
                yMax: -Infinity,
                zMin: Infinity,
                zMax: -Infinity
            };
        }
        var data = this.vertices.data;
        for (var i = 0; i < data.length; i += 3) {
            tempVector31.fromArray(data, i);
            if (matrix) {
                tempVector31.transformMat4(matrix);
            }
            bounds.xMax = Math.max(bounds.xMax, tempVector31.x);
            bounds.yMax = Math.max(bounds.yMax, tempVector31.y);
            bounds.zMax = Math.max(bounds.zMax, tempVector31.z);
            bounds.xMin = Math.min(bounds.xMin, tempVector31.x);
            bounds.yMin = Math.min(bounds.yMin, tempVector31.y);
            bounds.zMin = Math.min(bounds.zMin, tempVector31.z);
        }

        bounds.width = bounds.xMax - bounds.xMin;
        bounds.height = bounds.yMax - bounds.yMin;
        bounds.depth = bounds.zMax - bounds.zMin;
        bounds.x = (bounds.xMin + bounds.xMax) / 2;
        bounds.y = (bounds.yMin + bounds.yMax) / 2;
        bounds.z = (bounds.zMin + bounds.zMax) / 2;
        return bounds;
    },

    /**
     * 获取本地包围盒
     * @param  {Boolean} [force=false] 是否强制刷新
     * @return {Bounds}
     */
    getLocalBounds: function getLocalBounds() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!this._localBounds || force) {
            this._localBounds = this.getBounds();
        }
        return this._localBounds;
    },

    /**
     * 获取球面包围盒
     * @param  {Matrix4} matrix 
     * @return {Sphere}
     */
    getSphereBounds: function getSphereBounds(matrix) {
        var sphereBounds = this.getLocalSphereBounds().clone();
        if (matrix) {
            sphereBounds.transformMat4(matrix);
        }
        return sphereBounds;
    },

    /**
     * 获取本地球面包围盒
     * @param  {Boolean} [force=false] 是否强制刷新
     * @return {Sphere}    
     */
    getLocalSphereBounds: function getLocalSphereBounds() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!this._localBounds || force) {
            var localBounds = this.getLocalBounds(force);
            var sphere = new Sphere({
                center: new Vector3(localBounds.x, localBounds.y, localBounds.z)
            });
            sphere.fromPoints(this.vertices.data);
            this._localSphereBounds = sphere;
        }
        return this._localSphereBounds;
    },

    /**
     * 将 Geometry 转换成无 indices
     * @param {number} [verticesItemLen=3] 转换结果的顶点数据的位数(3 or 4)，如果为4会补1
     */
    convertToNoIndices: function convertToNoIndices() {
        var verticesItemLen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

        if (this.mode !== TRIANGLES) {
            console.warn('Only support convert triangles to lines mode!');
            return;
        }
        if (!this.indices) {
            console.warn('Has no indices!');
            return;
        }
        var indices = this.indices.data;
        var indicesLen = indices.length;
        var vertices = new Float32Array(indicesLen * verticesItemLen);
        var uvs = this.uvs ? new Float32Array(indicesLen * 2) : null;
        var normals = new Float32Array(indicesLen * 3);
        var skinIndices = this.skinIndices ? new Float32Array(indicesLen * 4) : null;
        var skinWeights = this.skinWeights ? new Float32Array(indicesLen * 4) : null;

        for (var i = 0; i < indicesLen; i++) {
            var idx = indices[i];
            util.copyArrayData(vertices, this.vertices, i * verticesItemLen, idx * 3, 3);
            if (verticesItemLen === 4) {
                vertices[i * 4 + 3] = 1;
            }
            util.copyArrayData(uvs, this.uvs, i * 2, idx * 2, 2);
            util.copyArrayData(normals, this.normals, i * 3, idx * 3, 3);
            util.copyArrayData(skinIndices, this.skinIndices, i * 4, idx * 4, 4);
            util.copyArrayData(skinWeights, this.skinWeights, i * 4, idx * 4, 4);
        }
        delete this.indices;
        this.vertices.data = vertices;
        if (this.uvs) {
            this.uvs.data = uvs;
        }
        if (this.normals) {
            this.normals.data = normals;
        }
        if (this.skinIndices) {
            this.skinIndices.data = skinIndices;
        }
        if (this.skinWeights) {
            this.skinWeights.data = skinWeights;
        }
    },

    /**
     * clone当前Geometry
     * @return {Geometry} 返回clone的Geometry
     */
    clone: function clone() {
        var geometry = new this.constructor({
            mode: this.mode
        });

        if (this.vertices) {
            geometry.vertices = this.vertices.clone();
        }
        if (this.uvs) {
            geometry.uvs = this.uvs.clone();
        }
        if (this.indices) {
            geometry.indices = this.indices.clone();
        }
        if (this.skinWeights) {
            geometry.skinWeights = this.skinWeights.clone();
        }
        if (this.skinIndices) {
            geometry.skinIndices = this.skinIndices.clone();
        }
        if (this._normals) {
            geometry._normals = this._normals.clone();
        }
        if (this._tangents) {
            geometry._tangents = this._tangents.clone();
        }

        return geometry;
    },

    /**
     * _raycast，子类可覆盖实现
     * @param  {Ray} ray 
     * @param  {GLenum} side 
     * @return {Vector3[]|null}     
     */
    _raycast: function _raycast(ray, side) {
        // TODO:optimize

        var vertices = this.vertices;
        var indices = this.indices;
        var triangle = [];
        var resArray = [];
        var len = void 0;
        if (indices) {
            len = indices.realLength;
        } else {
            len = vertices.realLength / 3;
        }

        for (var i = 0; i < len; i += 3) {
            var idx = indices ? indices.get(i) : i;
            tempVector31.copy(vertices.get(idx));
            idx = indices ? indices.get(i + 1) : i + 1;
            tempVector32.copy(vertices.get(idx));
            idx = indices ? indices.get(i + 2) : i + 2;
            tempVector33.copy(vertices.get(idx));

            var res = void 0;
            if (side === FRONT) {
                triangle[0] = tempVector31.elements;
                triangle[1] = tempVector32.elements;
                triangle[2] = tempVector33.elements;
                res = ray.intersectsTriangle(triangle);
            } else if (side === BACK) {
                triangle[1] = tempVector31.elements;
                triangle[0] = tempVector32.elements;
                triangle[2] = tempVector33.elements;
                res = ray.intersectsTriangle(triangle);
            } else if (side === FRONT_AND_BACK) {
                triangle[0] = tempVector31.elements;
                triangle[1] = tempVector32.elements;
                triangle[2] = tempVector33.elements;
                res = ray.intersectsTriangle(triangle);
                if (!res) {
                    triangle[1] = tempVector31.elements;
                    triangle[0] = tempVector32.elements;
                    triangle[2] = tempVector33.elements;
                    res = ray.intersectsTriangle(triangle);
                }
            }

            if (res) {
                resArray.push(res);
            }
        }

        return resArray.length ? resArray : null;
    },

    /**
     * raycast
     * @param  {Ray} ray 
     * @param  {GLenum} side 
     * @param {Boolean} [sort=true] 是否按距离排序
     * @return {Vector3[]|null}     
     */
    raycast: function raycast(ray, side) {
        var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var res = this._raycast(ray, side);
        if (res && sort) {
            ray.sortPoints(res);
        }

        return res;
    },
    getRenderOption: function getRenderOption() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return opt;
    }
});

module.exports = Geometry;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var Vector2 = __webpack_require__(42);
var Vector3 = __webpack_require__(5);
var Vector4 = __webpack_require__(29);
var Matrix4 = __webpack_require__(4);

var _require = __webpack_require__(3),
    getTypedArrayGLType = _require.getTypedArrayGLType;

var sizeVectorMap = {
    2: new Vector2(),
    3: new Vector3(),
    4: new Vector4(),
    16: new Matrix4()
};

/**
 * geometry vertex data
 * @class
 */
var GeometryData = Class.create( /** @lends GeometryData.prototype */{
    className: 'GeometryData',
    isGeometryData: true,

    /**
     * The number of components per vertex attribute.Must be 1, 2, 3, or 4.
     * @type {Number}
     */
    size: undefined,

    /**
     * Whether integer data values should be normalized when being casted to a float.
     * @type {Boolean}
     * @default false
     */
    normalized: false,

    /**
     * The data type of each component in the array. 
     * @type {GLenum}
     */
    type: undefined,

    /**
     * @type {Boolean}
     * @default false
     */
    isDirty: true,

    /**
     * @constructs
     * @param  {TypedArray} data  数据
     * @param  {Number} size The number of components per vertex attribute.Must be 1, 2, 3, or 4.
     * @param  {Object} params 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(data, size, params) {
        /**
         * id
         * @type {string}
         */
        this.id = math.generateUUID(this.className);

        /**
         * @type {TypedArray}
         */
        this.data = data;
        this.size = size;
        Object.assign(this, params);
    },


    _stride: 0,
    /**
     * The offset in bytes between the beginning of consecutive vertex attributes. 
     * @type {Number}
     * @default this.size
     */
    stride: {
        get: function get() {
            return this._stride;
        },
        set: function set(value) {
            this._stride = value;
            this.strideSize = value === 0 ? 0 : value / this.data.BYTES_PER_ELEMENT;
        }
    },

    strideSize: 0,

    _offset: 0,
    /**
     * An offset in bytes of the first component in the vertex attribute array. Must be a multiple of type.
     * @type {Number}
     * @default 0
     */
    offset: {
        get: function get() {
            return this._offset;
        },
        set: function set(value) {
            this._offset = value;
            this.offsetSize = value / this.data.BYTES_PER_ELEMENT;
        }
    },

    offsetSize: 0,

    /**
     * @type {TypedArray}
     */
    data: {
        set: function set(data) {
            if (data) {
                this._data = data;
                this.type = getTypedArrayGLType(data);
                this.stride = this._stride;
                this.offset = this._offset;
                this.isDirty = true;
            }
        },
        get: function get() {
            return this._data;
        }
    },

    /**
     * @type {Number}
     * @readOnly
     */
    length: {
        get: function get() {
            return this._data.length;
        }
    },

    /**
     * @type {Number}
     * @readOnly
     */
    realLength: {
        get: function get() {
            if (this.strideSize === 0) {
                return this._data.length;
            }
            return this._data.length / this.strideSize * this.size;
        }
    },

    /**
     * @type {Number}
     * @readOnly
     */
    count: {
        get: function get() {
            if (this.strideSize === 0) {
                return this._data.length / this.size;
            }
            return this._data.length / this.strideSize;
        }
    },

    /**
     * clone
     * @return {GeometryData}
     */
    clone: function clone() {
        var res = new GeometryData();
        res.copy(this);
        return res;
    },

    /**
     * copy
     * @param  {GeometryData} geometryData
     */
    copy: function copy(geometryData) {
        var data = geometryData.data;
        this.data = new data.constructor(data);
        this.size = geometryData.size;
        this.stride = geometryData.stride;
        this.normalized = geometryData.normalized;
        this.type = geometryData.type;
        this.offset = geometryData.offset;
    },
    getOffset: function getOffset(index) {
        var strideSize = this.strideSize;
        if (strideSize === 0) {
            return index * this.size;
        }
        return index * strideSize + this.offsetSize;
    },
    getComponentOffset: function getComponentOffset(index) {
        var size = this.size;
        var offset = this.getOffset(Math.floor(index / size)) + index % size;
        return offset;
    },
    get: function get(index) {
        var offset = this.getOffset(index);
        return this.getByOffset(offset);
    },
    set: function set(index, value) {
        var offset = this.getOffset(index);
        this.setByOffset(offset, value);
        return offset;
    },
    getByOffset: function getByOffset(offset) {
        var size = this.size;
        if (size > 1) {
            var tempVector = sizeVectorMap[size];
            return tempVector.fromArray(this._data, offset);
        }

        return this._data[offset];
    },
    setByOffset: function setByOffset(offset, value) {
        var size = this.size;
        var data = this._data;
        if (size > 1) {
            value.toArray(data, offset);
        } else {
            data[offset] = value;
        }
        this.isDirty = true;
    },
    traverse: function traverse(callback) {
        var count = this.count;
        for (var index = 0; index < count; index++) {
            var offset = this.getOffset(index);
            var attribute = this.getByOffset(offset);
            if (callback(attribute, index, offset)) {
                return true;
            }
        }

        return false;
    },
    traverseByComponent: function traverseByComponent(callback) {
        var count = this.count;
        var size = this.size;
        var data = this._data;
        for (var index = 0; index < count; index++) {
            var offset = this.getOffset(index);
            for (var i = 0; i < size; i++) {
                var componentOffset = offset + i;
                if (callback(data[componentOffset], componentOffset)) {
                    return true;
                }
            }
        }

        return false;
    }
});

module.exports = GeometryData;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * EventMixin是一个包含事件相关功能的mixin。可以通过 Object.assign(target, EventMixin) 来为target增加事件功能。
 * @mixin  EventMixin
 * @see {@link http://hiloteam.github.io/Hilo/docs/api-zh/symbols/EventMixin.html}
 */
var EventMixin = __webpack_require__(101);

module.exports = EventMixin;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var EventMixin = __webpack_require__(9);
var Matrix4 = __webpack_require__(4);
var Vector3 = __webpack_require__(5);
var Euler = __webpack_require__(30);
var Quaternion = __webpack_require__(19);
var math = __webpack_require__(1);

var defaultUp = new Vector3(0, 1, 0);
var tempMatrix4 = new Matrix4();

/**
 * 节点，3D场景中的元素，是大部分类的基类
 * @class
 * @mixes EventMixin
 * @example
 * const node = new Hilo3d.Node({
 *     name:'test',
 *     x:100,
 *     rotationX:30,
 *     onUpdate(){
 *         this.rotationY ++;
 *     }
 * });
 * node.scaleX = 0.3;
 * stage.addChild(node);
 */
var Node = Class.create( /** @lends Node.prototype */{
    Mixes: EventMixin,
    /**
     * @default true
     * @type {boolean}
     */
    isNode: true,
    /**
     * @default Node
     * @type {string}
     */
    className: 'Node',
    /**
     * Node 的名字，可以通过 getChildByName 查找
     * @type {string}
     */
    name: '',
    /**
     * 是否自动更新世界矩阵
     * @default true
     * @type {boolean}
     */
    autoUpdateWorldMatrix: true,
    /**
     * 父节点
     * @default null
     * @type {Node}
     */
    parent: null,
    _x: 0,
    _y: 0,
    _z: 0,
    _scaleX: 1,
    _scaleY: 1,
    _scaleZ: 1,
    _rotationX: 0,
    _rotationRadX: 0,
    _rotationY: 0,
    _rotationRadY: 0,
    _rotationZ: 0,
    _rotationRadZ: 0,
    _pivotX: 0,
    _pivotY: 0,
    _pivotZ: 0,
    _positionDirty: false,
    _scaleDirty: false,
    _rotationDirty: false,
    _pivotDirty: false,
    _matrixDirty: false,
    /**
     * 每次更新的时候是否调用子节点的 onUpdate 方法
     * @default true
     * @type {boolean}
     */
    needCallChildUpdate: true,
    /**
     * 节点是否显示
     * @default true
     * @type {boolean}
     */
    visible: true,
    /**
     * @constructs
     * @param {object} params 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(params) {
        /**
         * @type {string}
         */
        this.id = math.generateUUID(this.className);
        /**
         * 元素的up向量
         * @type {Vector3}
         */
        this.up = defaultUp.clone();
        /**
         * 元素直接点数组
         * @type {Node[]}
         */
        this.children = [];
        /**
         * 元素的世界矩阵
         * @type {Matrix4}
         */
        this.worldMatrix = new Matrix4();

        this._matrix = new Matrix4();
        this._position = new Vector3();
        this._scale = new Vector3(1, 1, 1);
        this._pivot = new Vector3();
        this._euler = new Euler();
        this.quaternion = new Quaternion();
        Object.assign(this, params);
    },

    /**
     * @param {boolean} [isChild=false] 是否子节点，子节点不会处理动画及骨骼Mesh，即如果有动画将共享
     * @return {Node} 返回clone的Node
     */
    clone: function clone(isChild) {
        var node = new this.constructor();
        node.name = this.name;
        node.jointName = this.jointName;
        node.setPosition(this.x, this.y, this.z);
        node.setScale(this.scaleX, this.scaleY, this.scaleZ);
        node.setRotation(this.rotationX, this.rotationY, this.rotationZ);
        this.children.forEach(function (child) {
            node.addChild(child.clone(true));
        });

        if (!isChild) {
            if (this.anim) {
                node.anim = this.anim.clone(node);
            }
            node.resetSkinedMeshRootNode();
        }
        return node;
    },

    /**
     * 设置节点的动画，这个需要是模型的根节点
     *
     * @param {Animation} anim 动画实例
     */
    setAnim: function setAnim(anim) {
        this.anim = anim;
        anim.rootNode = this;
    },

    /**
     * 重置子孙元素中 SkinedMesh 的根节点为当前元素
     */
    resetSkinedMeshRootNode: function resetSkinedMeshRootNode() {
        var _this = this;

        this.traverse(function (mesh) {
            if (mesh.isSkinedMesh && mesh.jointNames) {
                mesh.rootNode = _this;
            }
        });
    },

    /**
     * 将所以子孙元素放到一个对象中，对象key为元素的name，value为该元素
     *
     * @return {Object} 返回获取的对象
     */
    getChildrenNameMap: function getChildrenNameMap() {
        var map = {};
        this.traverse(function (child) {
            map[child.name] = child;
        });
        return map;
    },

    /**
     * 添加一个子元素
     *
     * @param {Node} child 需要添加的子元素
     */
    addChild: function addChild(child) {
        if (child.parent) {
            child.removeFromParent();
        }
        child.parent = this;
        this.children.push(child);
    },

    /**
     * 移除指定的子元素
     *
     * @param {Node} child 需要移除的元素
     */
    removeChild: function removeChild(child) {
        var index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
            child.parent = null;
        }
    },

    /**
     * 将当前元素添加到某个父元素的子元素中
     *
     * @param {Node} parent 需要添加到的父元素
     */
    addTo: function addTo(parent) {
        parent.addChild(this);
        return this;
    },

    /**
     * 将当前元素从其父元素中移除
     */
    removeFromParent: function removeFromParent() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    },
    updateMatrix: function updateMatrix() {
        var isMatrixDirty = false;
        if (this._positionDirty) {
            this._positionDirty = false;
            isMatrixDirty = true;
            this._position.set(this._x, this._y, this._z);
        }

        if (this._scaleDirty) {
            this._scaleDirty = false;
            isMatrixDirty = true;
            this._scale.set(this._scaleX, this._scaleY, this._scaleZ);
        }

        if (this._rotationDirty) {
            this._rotationDirty = false;
            isMatrixDirty = true;
            this._euler.set(this._rotationRadX, this._rotationRadY, this._rotationRadZ);
            this._quaternion.fromEuler(this._euler, true);
        }

        if (this._pivotDirty) {
            this._pivotDirty = false;
            isMatrixDirty = true;
            this._pivot.set(this._pivotX, this._pivotY, this._pivotZ);
        }

        if (this._matrixDirty) {
            this._matrixDirty = false;
            isMatrixDirty = true;
        }

        if (isMatrixDirty) {
            this._matrix.compose(this._quaternion, this._position, this._scale, this._pivot);
        }
    },
    updateTransform: function updateTransform() {
        this._matrix.decompose(this._quaternion, this._position, this._scale, this._pivot);

        var position = this._position;
        var scale = this._scale;
        var pivot = this._pivot;

        this._x = position.x;
        this._y = position.y;
        this._z = position.z;

        this._scaleX = scale.x;
        this._scaleY = scale.y;
        this._scaleZ = scale.z;

        this._pivotX = pivot.x;
        this._pivotY = pivot.y;
        this._pivotZ = pivot.z;

        this._onQuaternionChange();
        this._positionDirty = this._rotationDirty = this._scaleDirty = this.pivot = this._matrixDirty = false;
    },
    updateMatrixWorld: function updateMatrixWorld(force) {
        this.traverse(function (node) {
            if (node.autoUpdateWorldMatrix || force) {
                if (node.parent) {
                    node.worldMatrix.multiply(node.parent.worldMatrix, node.matrix);
                } else {
                    node.worldMatrix.copy(node.matrix);
                }
            }
        });
    },

    /**
     * 获取当前元素相对于指定元素的矩阵
     *
     * @param {Node} [ancestor] 相对于的元素，需要是当前元素的祖先元素，不传表示获取世界矩阵
     * @return {Matrix4} 返回获取的矩阵
     */
    getConcatenatedMatrix: function getConcatenatedMatrix(ancestor) {
        var mtx = new Matrix4();

        for (var o = this; o && o !== ancestor; o = o.parent) {
            mtx.multiply(o.matrix, mtx);
        }
        return mtx;
    },

    /**
     * 遍历当前元素的子孙元素
     *
     * @param {Function(Node)} callback 每个元素都会调用这个函数处理
     */
    traverse: function traverse(callback) {
        if (callback(this)) {
            return;
        }
        this.children.forEach(function (child) {
            child.traverse(callback);
        });
    },
    traverseUpdate: function traverseUpdate(dt) {
        this.traverse(function (node) {
            if (node.onUpdate) {
                node.onUpdate(dt);
            }
            if (!node.needCallChildUpdate) {
                return true;
            }
            return false;
        });
    },

    /**
     * 根据函数来获取一个子孙元素
     *
     * @param {Function} fn 判读函数
     * @return {Node|null} 返回获取到的子孙元素
     */
    getChildByFn: function getChildByFn(fn) {
        var result = null;
        this.traverse(function (child) {
            if (fn(child)) {
                result = child;
                return true;
            }
            return false;
        });

        return result;
    },

    /**
     * 根据函数来获取匹配的所有子孙元素
     *
     * @param {Function} fn 判读函数
     * @return {Node[]} 返回获取到的子孙元素
     */
    getChildrenByFn: function getChildrenByFn(fn) {
        var result = [];
        this.traverse(function (child) {
            if (fn(child)) {
                result.push(child);
            }
        });
        return result;
    },

    /**
     * 获取指定name的首个子孙元素
     *
     * @param {string} name 元素name
     * @return {Node|null} 获取的元素
     */
    getChildByName: function getChildByName(name) {
        return this.getChildByFn(function (child) {
            return child.name === name;
        });
    },

    /**
     * 获取指定name的所有子孙元素
     *
     * @param {string} name 元素name
     * @return {Node[]} 获取的元素数组
     */
    getChildrenByName: function getChildrenByName(name) {
        return this.getChildrenByFn(function (child) {
            return child.name === name;
        });
    },

    /**
     * 获取指定id的子孙元素
     *
     * @param {string} id 元素id
     * @return {Node|null} 获取的元素
     */
    getChildById: function getChildById(id) {
        return this.getChildByFn(function (child) {
            return child.id === id;
        });
    },

    /**
     * 获取指定类名的所有子孙元素
     *
     * @param {string} className 类名
     * @return {Node[]} 获取的元素数组
     */
    getChildrenByClassName: function getChildrenByClassName(className) {
        return this.getChildrenByFn(function (child) {
            return child.className === className;
        });
    },

    /**
     * 设置元素的缩放比例
     *
     * @param {number} x X缩放比例
     * @param {number} y Y缩放比例
     * @param {number} z Z缩放比例
     */
    setScale: function setScale(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : y;

        this.scaleX = x;
        this.scaleY = y;
        this.scaleZ = z;
    },

    /**
     * 设置元素的位置
     *
     * @param {number} x X方向位置
     * @param {number} y Y方向位置
     * @param {number} z Z方向位置
     */
    setPosition: function setPosition(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    },

    /**
     * 设置元素的旋转
     *
     * @param {number} x X轴旋转角度
     * @param {number} y Y轴旋转角度
     * @param {number} z Z轴旋转角度
     */
    setRotation: function setRotation(x, y, z) {
        this.rotationX = x;
        this.rotationY = y;
        this.rotationZ = z;
    },

    /**
     * 设置中心点
     * @param {Number} x 中心点x
     * @param {Number} y 中心点y
     * @param {Number} z 中心点z
     */
    setPivot: function setPivot(x, y, z) {
        this.pivotX = x;
        this.pivotY = y;
        this.pivotZ = z;
    },

    /**
     * 改变元素的朝向
     *
     * @param {Node|Object|Vector3} node 需要朝向的元素，或者坐标
     */
    lookAt: function lookAt(node) {
        if (this.isCamera) {
            tempMatrix4.targetTo(this, node, this.up);
        } else {
            tempMatrix4.targetTo(node, this, this.up);
        }
        this._quaternion.fromMat4(tempMatrix4);
    },

    /**
     * raycast
     * @param  {Ray} ray 
     * @param {Boolean} [sort=true] 是否按距离排序
     * @return {raycastInfo[]|null}     
     */
    raycast: function raycast(ray) {
        var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var resArray = [];
        this.traverse(function (child) {
            if (child.isMesh) {
                var res = child.raycast(ray, false);
                if (res) {
                    resArray = resArray.concat(res.map(function (point) {
                        return {
                            mesh: child,
                            point: point
                        };
                    }));
                }
            }
        });

        if (resArray.length) {
            if (sort) {
                ray.sortPoints(resArray, 'point');
            }
            return resArray;
        }

        return null;
    },

    /**
     * 元素的矩阵
     * @type {Matrix4}
     */
    matrix: {
        get: function get() {
            this.updateMatrix();
            return this._matrix;
        },
        set: function set(value) {
            this._matrix = value;
            this.updateTransform();
        }
    },
    /**
     * x轴坐标
     * @type {number}
     */
    x: {
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            this._x = value;
            this._positionDirty = true;
        }
    },
    /**
     * y轴坐标
     * @type {number}
     */
    y: {
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            this._y = value;
            this._positionDirty = true;
        }
    },
    /**
     * z轴坐标
     * @type {number}
     */
    z: {
        get: function get() {
            return this._z;
        },
        set: function set(value) {
            this._z = value;
            this._positionDirty = true;
        }
    },
    /**
     * 缩放比例x
     * @type {number}
     */
    scaleX: {
        get: function get() {
            return this._scaleX;
        },
        set: function set(value) {
            this._scaleX = value;
            this._scaleDirty = true;
        }
    },
    /**
     * 缩放比例y
     * @type {number}
     */
    scaleY: {
        get: function get() {
            return this._scaleY;
        },
        set: function set(value) {
            this._scaleY = value;
            this._scaleDirty = true;
        }
    },
    /**
     * 缩放比例z
     * @type {number}
     */
    scaleZ: {
        get: function get() {
            return this._scaleZ;
        },
        set: function set(value) {
            this._scaleZ = value;
            this._scaleDirty = true;
        }
    },
    /**
     * 旋转角度x
     * @type {number}
     */
    rotationX: {
        get: function get() {
            return this._rotationX;
        },
        set: function set(value) {
            this._rotationX = value;
            this._rotationRadX = math.DEG2RAD * value;
            this._rotationDirty = true;
        }
    },
    /**
     * 旋转角度y
     * @type {number}
     */
    rotationY: {
        get: function get() {
            return this._rotationY;
        },
        set: function set(value) {
            this._rotationY = value;
            this._rotationRadY = math.DEG2RAD * value;
            this._rotationDirty = true;
        }
    },
    /**
     * 旋转角度z
     * @type {number}
     */
    rotationZ: {
        get: function get() {
            return this._rotationZ;
        },
        set: function set(value) {
            this._rotationZ = value;
            this._rotationRadZ = math.DEG2RAD * value;
            this._rotationDirty = true;
        }
    },
    /**
     * 中心点x
     * @type {Number}
     */
    pivotX: {
        get: function get() {
            return this._pivotX;
        },
        set: function set(value) {
            this._pivotX = value;
            this._pivotDirty = true;
        }
    },
    /**
     * 中心点y
     * @type {Number}
     */
    pivotY: {
        get: function get() {
            return this._pivotY;
        },
        set: function set(value) {
            this._pivotY = value;
            this._pivotDirty = true;
        }
    },
    /**
     * 中心点z
     * @type {Number}
     */
    pivotZ: {
        get: function get() {
            return this._pivotZ;
        },
        set: function set(value) {
            this._pivotZ = value;
            this._pivotDirty = true;
        }
    },
    /**
     * 四元数角度
     * @type {Quaternion}
     */
    quaternion: {
        get: function get() {
            return this._quaternion;
        },
        set: function set(value) {
            var _this2 = this;

            this._quaternion = value;
            this._matrixDirty = true;
            this._onQuaternionChange();
            this._quaternion.on('change', function () {
                _this2._onQuaternionChange();
                _this2._matrixDirty = true;
            });
        }
    },
    _onQuaternionChange: function _onQuaternionChange() {
        var euler = this._euler;
        var quaternion = this._quaternion;
        euler.fromQuat(quaternion);
        this._rotationRadX = euler.x;
        this._rotationRadY = euler.y;
        this._rotationRadZ = euler.z;

        this._rotationX = euler.x * math.RAD2DEG;
        this._rotationY = euler.y * math.RAD2DEG;
        this._rotationZ = euler.z * math.RAD2DEG;
    },

    /**
     * 获取元素的包围盒信息
     *
     * @param {Node} [parent] 元素相对于哪个祖先元素的包围盒，不传表示世界
     * @param {Matrix4} [currentMatrix] 当前计算的矩阵
     * @param {Bounds} [bounds] 当前计算的包围盒信息
     * @return {Bounds} 返回计算的包围盒信息
     */
    getBounds: function getBounds(parent, currentMatrix, bounds) {
        if (!currentMatrix) {
            currentMatrix = this.getConcatenatedMatrix(parent);
        } else {
            currentMatrix.multiply(this.matrix);
        }

        this.children.forEach(function (child) {
            bounds = child.getBounds(null, currentMatrix.clone(), bounds);
        });

        if (this.isMesh) {
            bounds = this.geometry.getBounds(currentMatrix, bounds);
        }
        return bounds;
    }
});

module.exports = Node;

/**
 * 包围盒信息
 * @typedef {object} Bounds
 * @property {number} x 包围盒中心的X坐标
 * @property {number} y 包围盒中心的Y坐标
 * @property {number} z 包围盒中心的Z坐标
 * @property {number} width 包围盒的宽度
 * @property {number} height 包围盒的高度
 * @property {number} depth 包围盒的深度
 * @property {number} xMin X轴的最小值
 * @property {number} xMax X轴的最大值
 * @property {number} yMin Y轴的最小值
 * @property {number} yMax Y轴的最大值
 * @property {number} zMin Z轴的最小值
 * @property {number} zMax Z轴的最大值
 */

/**
 * 碰撞信息
 * @typedef {object} raycastInfo
 * @property {Mesh} mesh 碰撞的 mesh
 * @property {Vector3} point 碰撞得点
 */

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);

/**
 * 缓存类
 * @class
 * @example
 * const cache = new Hilo3d.Cache();
 * cache.add('id1', {a:1});
 * cache.get('id1');
 * cache.remove('id1');
 */
var Cache = Class.create( /** @lends Cache.prototype */{
    /**
     * @constructs
     */
    constructor: function constructor() {
        this._cache = {};
    },

    /**
     * 获取对象
     * @param  {String} id
     * @return {Object}
     */
    get: function get(id) {
        return this._cache[id];
    },

    /**
     * 增加对象
     * @param {String} id
     * @param {Object} obj
     */
    add: function add(id, obj) {
        this._cache[id] = obj;
    },

    /**
     * 移除对象
     * @param {String} id
     */
    remove: function remove(id) {
        this._cache[id] = null;
    },

    /**
     * 移除所有对象
     */
    removeAll: function removeAll() {
        this._cache = {};
    },

    /**
     * 遍历所有缓存
     * @param  {Function} callback 
     */
    each: function each(callback) {
        var cache = this._cache;
        for (var name in cache) {
            callback(cache[name]);
        }
    }
});

module.exports = Cache;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var EventMixin = __webpack_require__(9);
var Cache = __webpack_require__(136);
var util = __webpack_require__(3);

var cache = new Cache();

/**
 * 基础的资源加载类
 * @class
 * @fires beforeload loaded failed
 * @mixes EventMixin
 * @borrows EventMixin#on as #on
 * @borrows EventMixin#off as #off
 * @borrows EventMixin#fire as #fire
 * @example
 * var loader = new Hilo3d.BasicLoader();
 * loader.load({
 *     src: '//img.alicdn.com/tfs/TB1aNxtQpXXXXX1XVXXXXXXXXXX-1024-1024.jpg',
 *     crossOrigin: true
 * }).then(img => {
 *     return new Hilo3d.Texture({
 *         image: img
 *     });
 * }, err => {
 *     return new Hilo3d.Color(1, 0, 0);
 * }).then(diffuse => {
 *     return new Hilo3d.BasicMaterial({
 *         diffuse: diffuse 
 *     });
 * });
 */
var BasicLoader = Class.create( /** @lends BasicLoader.prototype */{
    Mixes: EventMixin,
    /**
     * 加载资源，这里会自动调用 loadImg 或者 loadRes
     * @param {object} data 参数
     * @param {string} data.src 资源地址
     * @param {string} [data.type] 资源类型(img, json, buffer)，不提供将根据 data.src 来判断类型
     * @return {Promise.<data, Error>} 返回加载完的资源对象
     */
    load: function load(data) {
        var src = data.src;
        var type = data.type;
        if (!type) {
            var ext = util.getExtension(src);
            if (/^(?:png|jpe?g|gif|webp|bmp)$/i.test(ext)) {
                type = 'img';
            }
        }
        if (type === 'img') {
            return this.loadImg(src, data.crossOrigin);
        }
        return this.loadRes(src, type);
    },

    /**
     * 判断链接是否跨域，无法处理二级域名，及修改 document.domain 的情况
     * @param {string} url 需要判断的链接
     * @return {boolean} 是否跨域
     */
    isCrossOrigin: function isCrossOrigin(url) {
        var loc = window.location;
        var a = document.createElement('a');
        a.href = url;
        return a.hostname !== loc.hostname || a.port !== loc.port || a.protocol !== loc.protocol;
    },

    /**
     * 加载图片
     * @param {string} url 图片地址
     * @param {boolean} [crossOrigin=false] 是否跨域
     * @return {Promise.<Image, Error>} 返回加载完的图片
     */
    loadImg: function loadImg(url, crossOrigin) {
        var _this = this;

        var file = cache.get(url);
        if (file) {
            return cache.wait(file);
        }

        return new Promise(function (resolve, reject) {
            var img = new Image();
            cache.update(url, Cache.PENDING);
            img.onload = function () {
                img.onerror = null;
                img.onabort = null;
                img.onload = null;
                cache.update(url, Cache.LOADED, img);
                resolve(img);
            };
            img.onerror = function () {
                img.onerror = null;
                img.onabort = null;
                img.onload = null;
                var err = new Error('Image load failed for ' + url.slice(0, 100));
                cache.update(url, Cache.FAILED, err);
                reject(err);
            };
            img.onabort = img.onerror;
            if (crossOrigin || _this.isCrossOrigin(url)) {
                img.crossOrigin = 'anonymous';
            }
            img.src = url;
        });
    },

    /**
     * 使用XHR加载其他资源
     * @param {string} url 资源地址
     * @param {string} [type=text] 资源类型(json, buffer, text)
     * @return {Promise.<data, Error>} 返回加载完的内容对象(Object, ArrayBuffer, String)
     */
    loadRes: function loadRes(url, type) {
        var _this2 = this;

        var file = cache.get(url);
        if (file) {
            return cache.wait(file);
        }

        cache.update(url, Cache.PENDING);

        this.fire('beforeload');

        return this.request({ url: url, type: type }).then(function (data) {
            _this2.fire('loaded');
            cache.update(url, Cache.LOADED, data);
            return data;
        }, function (err) {
            _this2.fire('failed', err);
            cache.update(url, Cache.FAILED);
            throw new Error('Resource load failed for ' + url + ', ' + err);
        });
    },

    /**
     * XHR资源请求
     * @param {object} opt 请求参数
     * @param {string} opt.url 资源地址
     * @param {string} [opt.type=text] 资源类型(json, buffer, text)
     * @param {string} [opt.method=GET] 请求类型(GET, POST ..)
     * @param {object} [opt.headers] 请求头参数
     * @param {string} [opt.body] POST请求发送的数据
     * @return {Promise.<data, Error>} 返回加载完的内容对象(Object, ArrayBuffer, String)
     */
    request: function request(opt) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status !== 200) {
                    reject(new TypeError('Network request failed for ' + xhr.status));
                    return;
                }
                var result = 'response' in xhr ? xhr.response : xhr.responseText;
                if (opt.type === 'json') {
                    try {
                        result = JSON.parse(result);
                    } catch (err) {
                        reject(new TypeError('JSON.parse error' + err));
                        return;
                    }
                }
                resolve(result);
            };
            xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
            };
            xhr.ontimeout = function () {
                reject(new TypeError('Network request timed out'));
            };
            xhr.open(opt.method || 'GET', opt.url, true);
            if (opt.credentials === 'include') {
                xhr.withCredentials = true;
            }
            if (opt.type === 'buffer') {
                xhr.responseType = 'arraybuffer';
            }
            util.each(opt.headers, function (value, name) {
                xhr.setRequestHeader(name, value);
            });
            xhr.send(opt.body || null);
        });
    }
});

module.exports = BasicLoader;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Material = __webpack_require__(27);
var Color = __webpack_require__(6);

/**
 * 基础材质
 * @class
 * @extends Material
 * @example
 * const material = new Hilo3d.BasicMaterial({
 *     diffuse: new Hilo3d.Color(1, 0, 0, 1)
 * });
 */
var BasicMaterial = Class.create( /** @lends BasicMaterial.prototype */{
  Extends: Material,
  /**
   * @default true
   * @type {boolean}
   */
  isBasicMaterial: true,
  /**
   * @default BasicMaterial
   * @type {string}
   */
  className: 'BasicMaterial',
  /**
   * 光照类型，支持: NONE, PHONE, BLINN
   * @default PHONE
   * @type {string}
   */
  lightType: 'PHONG',
  /**
   * 漫反射贴图，或颜色
   * @default Color(.5, .5, .5)
   * @type {Texture|Color}
   */
  diffuse: null,
  /**
   * 环境光贴图，或颜色
   * @default null
   * @type {Texture|Color}
   */
  ambient: null,
  /**
   * 镜面贴图，或颜色
   * @default Color(1, 1, 1)
   * @type {Texture|Color}
   */
  specular: null,
  /**
   * 放射光贴图，或颜色
   * @default Color(0, 0, 0)
   * @type {Texture|Color}
   */
  emission: null,
  /**
   * 环境贴图
   * @default null
   * @type {CubeTexture}
   */
  skyboxMap: null,
  /**
   * 环境贴图变化矩阵，如旋转等
   * @default null
   * @type {Matrix4}
   */
  skyboxMatrix: null,
  /**
   * 反射率
   * @default 0
   * @type {number}
   */
  reflectivity: 0,
  /**
   * 折射比率
   * @default 0
   * @type {number}
   */
  refractRatio: 0,
  /**
   * 折射率
   * @default 0
   * @type {number}
   */
  refractivity: 0,
  /**
   * 高光发光值
   * @default 32
   * @type {number}
   */
  shininess: 32,
  usedUniformVectors: 11,
  /**
   * 透明度 0~1
   * @default 1
   * @type {number}
   */
  transparency: 1,
  /**
   * @constructs
   * @param {object} params 初始化参数，所有params都会复制到实例上
   */
  constructor: function constructor(params) {
    this.diffuse = new Color(.5, .5, .5);
    this.specular = new Color(1, 1, 1);
    this.emission = new Color(0, 0, 0);
    BasicMaterial.superclass.constructor.call(this, params);

    Object.assign(this.uniforms, {
      u_diffuse: 'DIFFUSE',
      u_specular: 'SPECULAR',
      u_ambient: 'AMBIENT',
      u_emission: 'EMISSION',
      u_normalMap: 'NORMALMAP',
      u_shininess: 'SHININESS',
      u_reflectivity: 'REFLECTIVITY',
      u_refractRatio: 'REFRACTRATIO',
      u_refractivity: 'REFRACTIVITY',
      u_transparency: 'TRANSPARENCY',
      u_skyboxMap: 'SKYBOXMAP',
      u_skyboxMatrix: 'SKYBOXMATRIX'
    });
  },
  getRenderOption: function getRenderOption() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    BasicMaterial.superclass.getRenderOption.call(this, option);

    var lightType = this.lightType;
    if (lightType === 'PHONG' || lightType === 'BLINN') {
      option.HAS_SPECULAR = 1;
    }
    var needUV = false;
    var diffuse = this.diffuse;
    if (diffuse && diffuse.isTexture) {
      if (diffuse.isCubeTexture) {
        option.DIFFUSE_CUBE_MAP = 1;
      } else {
        option.DIFFUSE_MAP = 1;
        needUV = true;
      }
    }

    if (this.transparency && this.transparency.isTexture) {
      option.TRANSPARENCY_MAP = 1;
      needUV = true;
    }

    if (option.HAS_LIGHT) {

      if (this.specular && this.specular.isTexture) {
        option.SPECULAR_MAP = 1;
        needUV = true;
      }

      if (this.emission && this.emission.isTexture) {
        option.EMISSION_MAP = 1;
        needUV = true;
      }

      if (this.ambient && this.ambient.isTexture) {
        option.AMBIENT_MAP = 1;
        needUV = true;
      }

      if (this.skyboxMap) {
        option.SKYBOX_MAP = 1;
      }
    }

    if (needUV) {
      option.HAS_TEXCOORD0 = 1;
    }

    return option;
  }
});

module.exports = BasicMaterial;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

!function(t,n){if(true)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var a in r)("object"==typeof exports?exports:t)[a]=r[a]}}(this,function(){return function(t){function n(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,a){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=4)}([function(t,n,r){"use strict";function a(t){n.ARRAY_TYPE=i=t}function e(t){return t*s}function u(t,n){return Math.abs(t-n)<=o*Math.max(1,Math.abs(t),Math.abs(n))}Object.defineProperty(n,"__esModule",{value:!0}),n.setMatrixArrayType=a,n.toRadian=e,n.equals=u;var o=n.EPSILON=1e-6,i=n.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,s=(n.RANDOM=Math.random,Math.PI/180)},function(t,n,r){"use strict";function a(){var t=new g.ARRAY_TYPE(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function e(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function u(t){var n=new g.ARRAY_TYPE(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function i(t,n,r,a,e,u,o,i,s){var c=new g.ARRAY_TYPE(9);return c[0]=t,c[1]=n,c[2]=r,c[3]=a,c[4]=e,c[5]=u,c[6]=o,c[7]=i,c[8]=s,c}function s(t,n,r,a,e,u,o,i,s,c){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=s,t[8]=c,t}function c(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function f(t,n){if(t===n){var r=n[1],a=n[2],e=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=a,t[7]=e}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function M(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=f*o-i*c,h=-f*u+i*s,l=c*u-o*s,v=r*M+a*h+e*l;return v?(v=1/v,t[0]=M*v,t[1]=(-f*a+e*c)*v,t[2]=(i*a-e*o)*v,t[3]=h*v,t[4]=(f*r-e*s)*v,t[5]=(-i*r+e*u)*v,t[6]=l*v,t[7]=(-c*r+a*s)*v,t[8]=(o*r-a*u)*v,t):null}function h(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8];return t[0]=o*f-i*c,t[1]=e*c-a*f,t[2]=a*i-e*o,t[3]=i*s-u*f,t[4]=r*f-e*s,t[5]=e*u-r*i,t[6]=u*c-o*s,t[7]=a*s-r*c,t[8]=r*o-a*u,t}function l(t){var n=t[0],r=t[1],a=t[2],e=t[3],u=t[4],o=t[5],i=t[6],s=t[7],c=t[8];return n*(c*u-o*s)+r*(-c*e+o*i)+a*(s*e-u*i)}function v(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=r[0],l=r[1],v=r[2],d=r[3],b=r[4],m=r[5],p=r[6],P=r[7],E=r[8];return t[0]=h*a+l*o+v*c,t[1]=h*e+l*i+v*f,t[2]=h*u+l*s+v*M,t[3]=d*a+b*o+m*c,t[4]=d*e+b*i+m*f,t[5]=d*u+b*s+m*M,t[6]=p*a+P*o+E*c,t[7]=p*e+P*i+E*f,t[8]=p*u+P*s+E*M,t}function d(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=r[0],l=r[1];return t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=i,t[5]=s,t[6]=h*a+l*o+c,t[7]=h*e+l*i+f,t[8]=h*u+l*s+M,t}function b(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=Math.sin(r),l=Math.cos(r);return t[0]=l*a+h*o,t[1]=l*e+h*i,t[2]=l*u+h*s,t[3]=l*o-h*a,t[4]=l*i-h*e,t[5]=l*s-h*u,t[6]=c,t[7]=f,t[8]=M,t}function m(t,n,r){var a=r[0],e=r[1];return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function p(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function P(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=-r,t[4]=a,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function E(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function O(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function x(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r+r,i=a+a,s=e+e,c=r*o,f=a*o,M=a*i,h=e*o,l=e*i,v=e*s,d=u*o,b=u*i,m=u*s;return t[0]=1-M-v,t[3]=f-m,t[6]=h+b,t[1]=f+m,t[4]=1-c-v,t[7]=l-d,t[2]=h-b,t[5]=l+d,t[8]=1-c-M,t}function A(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15],p=r*i-a*o,P=r*s-e*o,E=r*c-u*o,O=a*s-e*i,x=a*c-u*i,A=e*c-u*s,q=f*d-M*v,y=f*b-h*v,w=f*m-l*v,R=M*b-h*d,L=M*m-l*d,S=h*m-l*b,_=p*S-P*L+E*R+O*w-x*y+A*q;return _?(_=1/_,t[0]=(i*S-s*L+c*R)*_,t[1]=(s*w-o*S-c*y)*_,t[2]=(o*L-i*w+c*q)*_,t[3]=(e*L-a*S-u*R)*_,t[4]=(r*S-e*w+u*y)*_,t[5]=(a*w-r*L-u*q)*_,t[6]=(d*A-b*x+m*O)*_,t[7]=(b*E-v*A-m*P)*_,t[8]=(v*x-d*E+m*p)*_,t):null}function q(t,n,r){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function y(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function w(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))}function R(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t}function L(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t}function S(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t}function _(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t[6]=n[6]+r[6]*a,t[7]=n[7]+r[7]*a,t[8]=n[8]+r[8]*a,t}function I(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function N(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=t[4],i=t[5],s=t[6],c=t[7],f=t[8],M=n[0],h=n[1],l=n[2],v=n[3],d=n[4],b=n[5],m=n[6],p=n[7],P=n[8];return Math.abs(r-M)<=g.EPSILON*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(a-h)<=g.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(e-l)<=g.EPSILON*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(u-v)<=g.EPSILON*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(o-d)<=g.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(i-b)<=g.EPSILON*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(s-m)<=g.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-p)<=g.EPSILON*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(f-P)<=g.EPSILON*Math.max(1,Math.abs(f),Math.abs(P))}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.fromMat4=e,n.clone=u,n.copy=o,n.fromValues=i,n.set=s,n.identity=c,n.transpose=f,n.invert=M,n.adjoint=h,n.determinant=l,n.multiply=v,n.translate=d,n.rotate=b,n.scale=m,n.fromTranslation=p,n.fromRotation=P,n.fromScaling=E,n.fromMat2d=O,n.fromQuat=x,n.normalFromMat4=A,n.projection=q,n.str=y,n.frob=w,n.add=R,n.subtract=L,n.multiplyScalar=S,n.multiplyScalarAndAdd=_,n.exactEquals=I,n.equals=N;var Y=r(0),g=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(Y);n.mul=v,n.sub=L},function(t,n,r){"use strict";function a(){var t=new Z.ARRAY_TYPE(3);return t[0]=0,t[1]=0,t[2]=0,t}function e(t){var n=new Z.ARRAY_TYPE(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function u(t){var n=t[0],r=t[1],a=t[2];return Math.sqrt(n*n+r*r+a*a)}function o(t,n,r){var a=new Z.ARRAY_TYPE(3);return a[0]=t,a[1]=n,a[2]=r,a}function i(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function s(t,n,r,a){return t[0]=n,t[1]=r,t[2]=a,t}function c(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function f(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function M(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function h(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function l(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function v(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function d(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t}function b(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t}function m(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function p(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function P(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t}function E(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return Math.sqrt(r*r+a*a+e*e)}function O(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return r*r+a*a+e*e}function x(t){var n=t[0],r=t[1],a=t[2];return n*n+r*r+a*a}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function q(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function y(t,n){var r=n[0],a=n[1],e=n[2],u=r*r+a*a+e*e;return u>0&&(u=1/Math.sqrt(u),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u),t}function w(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function R(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2];return t[0]=e*s-u*i,t[1]=u*o-a*s,t[2]=a*i-e*o,t}function L(t,n,r,a){var e=n[0],u=n[1],o=n[2];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=o+a*(r[2]-o),t}function S(t,n,r,a,e,u){var o=u*u,i=o*(2*u-3)+1,s=o*(u-2)+u,c=o*(u-1),f=o*(3-2*u);return t[0]=n[0]*i+r[0]*s+a[0]*c+e[0]*f,t[1]=n[1]*i+r[1]*s+a[1]*c+e[1]*f,t[2]=n[2]*i+r[2]*s+a[2]*c+e[2]*f,t}function _(t,n,r,a,e,u){var o=1-u,i=o*o,s=u*u,c=i*o,f=3*u*i,M=3*s*o,h=s*u;return t[0]=n[0]*c+r[0]*f+a[0]*M+e[0]*h,t[1]=n[1]*c+r[1]*f+a[1]*M+e[1]*h,t[2]=n[2]*c+r[2]*f+a[2]*M+e[2]*h,t}function I(t,n){n=n||1;var r=2*Z.RANDOM()*Math.PI,a=2*Z.RANDOM()-1,e=Math.sqrt(1-a*a)*n;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t[2]=a*n,t}function N(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[3]*a+r[7]*e+r[11]*u+r[15];return o=o||1,t[0]=(r[0]*a+r[4]*e+r[8]*u+r[12])/o,t[1]=(r[1]*a+r[5]*e+r[9]*u+r[13])/o,t[2]=(r[2]*a+r[6]*e+r[10]*u+r[14])/o,t}function Y(t,n,r){var a=n[0],e=n[1],u=n[2];return t[0]=a*r[0]+e*r[3]+u*r[6],t[1]=a*r[1]+e*r[4]+u*r[7],t[2]=a*r[2]+e*r[5]+u*r[8],t}function g(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2],c=r[3],f=c*a+i*u-s*e,M=c*e+s*a-o*u,h=c*u+o*e-i*a,l=-o*a-i*e-s*u;return t[0]=f*c+l*-o+M*-s-h*-i,t[1]=M*c+l*-i+h*-o-f*-s,t[2]=h*c+l*-s+f*-i-M*-o,t}function T(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[0],u[1]=e[1]*Math.cos(a)-e[2]*Math.sin(a),u[2]=e[1]*Math.sin(a)+e[2]*Math.cos(a),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function j(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[2]*Math.sin(a)+e[0]*Math.cos(a),u[1]=e[1],u[2]=e[2]*Math.cos(a)-e[0]*Math.sin(a),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function D(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[0]*Math.cos(a)-e[1]*Math.sin(a),u[1]=e[0]*Math.sin(a)+e[1]*Math.cos(a),u[2]=e[2],t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t}function V(t,n){var r=o(t[0],t[1],t[2]),a=o(n[0],n[1],n[2]);y(r,r),y(a,a);var e=w(r,a);return e>1?0:e<-1?Math.PI:Math.acos(e)}function z(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function F(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Q(t,n){var r=t[0],a=t[1],e=t[2],u=n[0],o=n[1],i=n[2];return Math.abs(r-u)<=Z.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(a-o)<=Z.EPSILON*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(e-i)<=Z.EPSILON*Math.max(1,Math.abs(e),Math.abs(i))}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.len=n.sqrDist=n.dist=n.div=n.mul=n.sub=void 0,n.create=a,n.clone=e,n.length=u,n.fromValues=o,n.copy=i,n.set=s,n.add=c,n.subtract=f,n.multiply=M,n.divide=h,n.ceil=l,n.floor=v,n.min=d,n.max=b,n.round=m,n.scale=p,n.scaleAndAdd=P,n.distance=E,n.squaredDistance=O,n.squaredLength=x,n.negate=A,n.inverse=q,n.normalize=y,n.dot=w,n.cross=R,n.lerp=L,n.hermite=S,n.bezier=_,n.random=I,n.transformMat4=N,n.transformMat3=Y,n.transformQuat=g,n.rotateX=T,n.rotateY=j,n.rotateZ=D,n.angle=V,n.str=z,n.exactEquals=F,n.equals=Q;var X=r(0),Z=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(X);n.sub=f,n.mul=M,n.div=h,n.dist=E,n.sqrDist=O,n.len=u,n.sqrLen=x,n.forEach=function(){var t=a();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=3),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2];return n}}()},function(t,n,r){"use strict";function a(){var t=new T.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function e(t){var n=new T.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function u(t,n,r,a){var e=new T.ARRAY_TYPE(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t}function s(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function c(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function f(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t}function M(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t}function h(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function l(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function v(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t}function d(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t}function b(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function m(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function p(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t}function P(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(r*r+a*a+e*e+u*u)}function E(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return r*r+a*a+e*e+u*u}function O(t){var n=t[0],r=t[1],a=t[2],e=t[3];return Math.sqrt(n*n+r*r+a*a+e*e)}function x(t){var n=t[0],r=t[1],a=t[2],e=t[3];return n*n+r*r+a*a+e*e}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function q(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function y(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*r+a*a+e*e+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=r*o,t[1]=a*o,t[2]=e*o,t[3]=u*o),t}function w(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function R(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=o+a*(r[2]-o),t[3]=i+a*(r[3]-i),t}function L(t,n){return n=n||1,t[0]=T.RANDOM(),t[1]=T.RANDOM(),t[2]=T.RANDOM(),t[3]=T.RANDOM(),y(t,t),m(t,t,n),t}function S(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3];return t[0]=r[0]*a+r[4]*e+r[8]*u+r[12]*o,t[1]=r[1]*a+r[5]*e+r[9]*u+r[13]*o,t[2]=r[2]*a+r[6]*e+r[10]*u+r[14]*o,t[3]=r[3]*a+r[7]*e+r[11]*u+r[15]*o,t}function _(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2],c=r[3],f=c*a+i*u-s*e,M=c*e+s*a-o*u,h=c*u+o*e-i*a,l=-o*a-i*e-s*u;return t[0]=f*c+l*-o+M*-s-h*-i,t[1]=M*c+l*-i+h*-o-f*-s,t[2]=h*c+l*-s+f*-i-M*-o,t[3]=n[3],t}function I(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function N(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function Y(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=n[0],i=n[1],s=n[2],c=n[3];return Math.abs(r-o)<=T.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-i)<=T.EPSILON*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(e-s)<=T.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-c)<=T.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.len=n.sqrDist=n.dist=n.div=n.mul=n.sub=void 0,n.create=a,n.clone=e,n.fromValues=u,n.copy=o,n.set=i,n.add=s,n.subtract=c,n.multiply=f,n.divide=M,n.ceil=h,n.floor=l,n.min=v,n.max=d,n.round=b,n.scale=m,n.scaleAndAdd=p,n.distance=P,n.squaredDistance=E,n.length=O,n.squaredLength=x,n.negate=A,n.inverse=q,n.normalize=y,n.dot=w,n.lerp=R,n.random=L,n.transformMat4=S,n.transformQuat=_,n.str=I,n.exactEquals=N,n.equals=Y;var g=r(0),T=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(g);n.sub=c,n.mul=f,n.div=M,n.dist=P,n.sqrDist=E,n.len=O,n.sqrLen=x,n.forEach=function(){var t=a();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=4),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}()},function(t,n,r){"use strict";function a(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}Object.defineProperty(n,"__esModule",{value:!0}),n.vec4=n.vec3=n.vec2=n.quat=n.mat4=n.mat3=n.mat2d=n.mat2=n.glMatrix=void 0;var e=r(0),u=a(e),o=r(5),i=a(o),s=r(6),c=a(s),f=r(1),M=a(f),h=r(7),l=a(h),v=r(8),d=a(v),b=r(9),m=a(b),p=r(2),P=a(p),E=r(3),O=a(E);n.glMatrix=u,n.mat2=i,n.mat2d=c,n.mat3=M,n.mat4=l,n.quat=d,n.vec2=m,n.vec3=P,n.vec4=O},function(t,n,r){"use strict";function a(){var t=new L.ARRAY_TYPE(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function e(t){var n=new L.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function i(t,n,r,a){var e=new L.ARRAY_TYPE(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function s(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t}function c(t,n){if(t===n){var r=n[1];t[1]=n[2],t[2]=r}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function f(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*u-e*a;return o?(o=1/o,t[0]=u*o,t[1]=-a*o,t[2]=-e*o,t[3]=r*o,t):null}function M(t,n){var r=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=r,t}function h(t){return t[0]*t[3]-t[2]*t[1]}function l(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1],c=r[2],f=r[3];return t[0]=a*i+u*s,t[1]=e*i+o*s,t[2]=a*c+u*f,t[3]=e*c+o*f,t}function v(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+u*i,t[1]=e*s+o*i,t[2]=a*-i+u*s,t[3]=e*-i+o*s,t}function d(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1];return t[0]=a*i,t[1]=e*i,t[2]=u*s,t[3]=o*s,t}function b(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t}function m(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function p(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function P(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))}function E(t,n,r,a){return t[2]=a[2]/a[0],r[0]=a[0],r[1]=a[1],r[3]=a[3]-t[2]*r[1],[t,n,r]}function O(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function x(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function A(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function q(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=n[0],i=n[1],s=n[2],c=n[3];return Math.abs(r-o)<=L.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-i)<=L.EPSILON*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(e-s)<=L.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-c)<=L.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))}function y(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function w(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.clone=e,n.copy=u,n.identity=o,n.fromValues=i,n.set=s,n.transpose=c,n.invert=f,n.adjoint=M,n.determinant=h,n.multiply=l,n.rotate=v,n.scale=d,n.fromRotation=b,n.fromScaling=m,n.str=p,n.frob=P,n.LDU=E,n.add=O,n.subtract=x,n.exactEquals=A,n.equals=q,n.multiplyScalar=y,n.multiplyScalarAndAdd=w;var R=r(0),L=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(R);n.mul=l,n.sub=x},function(t,n,r){"use strict";function a(){var t=new R.ARRAY_TYPE(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function e(t){var n=new R.ARRAY_TYPE(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function i(t,n,r,a,e,u){var o=new R.ARRAY_TYPE(6);return o[0]=t,o[1]=n,o[2]=r,o[3]=a,o[4]=e,o[5]=u,o}function s(t,n,r,a,e,u,o){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t}function c(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=r*u-a*e;return s?(s=1/s,t[0]=u*s,t[1]=-a*s,t[2]=-e*s,t[3]=r*s,t[4]=(e*i-u*o)*s,t[5]=(a*o-r*i)*s,t):null}function f(t){return t[0]*t[3]-t[1]*t[2]}function M(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1],M=r[2],h=r[3],l=r[4],v=r[5];return t[0]=a*c+u*f,t[1]=e*c+o*f,t[2]=a*M+u*h,t[3]=e*M+o*h,t[4]=a*l+u*v+i,t[5]=e*l+o*v+s,t}function h(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=Math.sin(r),f=Math.cos(r);return t[0]=a*f+u*c,t[1]=e*f+o*c,t[2]=a*-c+u*f,t[3]=e*-c+o*f,t[4]=i,t[5]=s,t}function l(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1];return t[0]=a*c,t[1]=e*c,t[2]=u*f,t[3]=o*f,t[4]=i,t[5]=s,t}function v(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1];return t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=a*c+u*f+i,t[5]=e*c+o*f+s,t}function d(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t[4]=0,t[5]=0,t}function b(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function m(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function p(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function P(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)}function E(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t}function O(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t}function x(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t}function A(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t}function q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]}function y(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=t[4],i=t[5],s=n[0],c=n[1],f=n[2],M=n[3],h=n[4],l=n[5];return Math.abs(r-s)<=R.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(a-c)<=R.EPSILON*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(e-f)<=R.EPSILON*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(u-M)<=R.EPSILON*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-h)<=R.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(i-l)<=R.EPSILON*Math.max(1,Math.abs(i),Math.abs(l))}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.clone=e,n.copy=u,n.identity=o,n.fromValues=i,n.set=s,n.invert=c,n.determinant=f,n.multiply=M,n.rotate=h,n.scale=l,n.translate=v,n.fromRotation=d,n.fromScaling=b,n.fromTranslation=m,n.str=p,n.frob=P,n.add=E,n.subtract=O,n.multiplyScalar=x,n.multiplyScalarAndAdd=A,n.exactEquals=q,n.equals=y;var w=r(0),R=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(w);n.mul=M,n.sub=O},function(t,n,r){"use strict";function a(){var t=new C.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function e(t){var n=new C.ARRAY_TYPE(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function o(t,n,r,a,e,u,o,i,s,c,f,M,h,l,v,d){var b=new C.ARRAY_TYPE(16);return b[0]=t,b[1]=n,b[2]=r,b[3]=a,b[4]=e,b[5]=u,b[6]=o,b[7]=i,b[8]=s,b[9]=c,b[10]=f,b[11]=M,b[12]=h,b[13]=l,b[14]=v,b[15]=d,b}function i(t,n,r,a,e,u,o,i,s,c,f,M,h,l,v,d,b){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=s,t[8]=c,t[9]=f,t[10]=M,t[11]=h,t[12]=l,t[13]=v,t[14]=d,t[15]=b,t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function c(t,n){if(t===n){var r=n[1],a=n[2],e=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=a,t[9]=u,t[11]=n[14],t[12]=e,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function f(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15],p=r*i-a*o,P=r*s-e*o,E=r*c-u*o,O=a*s-e*i,x=a*c-u*i,A=e*c-u*s,q=f*d-M*v,y=f*b-h*v,w=f*m-l*v,R=M*b-h*d,L=M*m-l*d,S=h*m-l*b,_=p*S-P*L+E*R+O*w-x*y+A*q;return _?(_=1/_,t[0]=(i*S-s*L+c*R)*_,t[1]=(e*L-a*S-u*R)*_,t[2]=(d*A-b*x+m*O)*_,t[3]=(h*x-M*A-l*O)*_,t[4]=(s*w-o*S-c*y)*_,t[5]=(r*S-e*w+u*y)*_,t[6]=(b*E-v*A-m*P)*_,t[7]=(f*A-h*E+l*P)*_,t[8]=(o*L-i*w+c*q)*_,t[9]=(a*w-r*L-u*q)*_,t[10]=(v*x-d*E+m*p)*_,t[11]=(M*E-f*x-l*p)*_,t[12]=(i*y-o*R-s*q)*_,t[13]=(r*R-a*y+e*q)*_,t[14]=(d*P-v*O-b*p)*_,t[15]=(f*O-M*P+h*p)*_,t):null}function M(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15];return t[0]=i*(h*m-l*b)-M*(s*m-c*b)+d*(s*l-c*h),t[1]=-(a*(h*m-l*b)-M*(e*m-u*b)+d*(e*l-u*h)),t[2]=a*(s*m-c*b)-i*(e*m-u*b)+d*(e*c-u*s),t[3]=-(a*(s*l-c*h)-i*(e*l-u*h)+M*(e*c-u*s)),t[4]=-(o*(h*m-l*b)-f*(s*m-c*b)+v*(s*l-c*h)),t[5]=r*(h*m-l*b)-f*(e*m-u*b)+v*(e*l-u*h),t[6]=-(r*(s*m-c*b)-o*(e*m-u*b)+v*(e*c-u*s)),t[7]=r*(s*l-c*h)-o*(e*l-u*h)+f*(e*c-u*s),t[8]=o*(M*m-l*d)-f*(i*m-c*d)+v*(i*l-c*M),t[9]=-(r*(M*m-l*d)-f*(a*m-u*d)+v*(a*l-u*M)),t[10]=r*(i*m-c*d)-o*(a*m-u*d)+v*(a*c-u*i),t[11]=-(r*(i*l-c*M)-o*(a*l-u*M)+f*(a*c-u*i)),t[12]=-(o*(M*b-h*d)-f*(i*b-s*d)+v*(i*h-s*M)),t[13]=r*(M*b-h*d)-f*(a*b-e*d)+v*(a*h-e*M),t[14]=-(r*(i*b-s*d)-o*(a*b-e*d)+v*(a*s-e*i)),t[15]=r*(i*h-s*M)-o*(a*h-e*M)+f*(a*s-e*i),t}function h(t){var n=t[0],r=t[1],a=t[2],e=t[3],u=t[4],o=t[5],i=t[6],s=t[7],c=t[8],f=t[9],M=t[10],h=t[11],l=t[12],v=t[13],d=t[14],b=t[15];return(n*o-r*u)*(M*b-h*d)-(n*i-a*u)*(f*b-h*v)+(n*s-e*u)*(f*d-M*v)+(r*i-a*o)*(c*b-h*l)-(r*s-e*o)*(c*d-M*l)+(a*s-e*i)*(c*v-f*l)}function l(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=n[9],l=n[10],v=n[11],d=n[12],b=n[13],m=n[14],p=n[15],P=r[0],E=r[1],O=r[2],x=r[3];return t[0]=P*a+E*i+O*M+x*d,t[1]=P*e+E*s+O*h+x*b,t[2]=P*u+E*c+O*l+x*m,t[3]=P*o+E*f+O*v+x*p,P=r[4],E=r[5],O=r[6],x=r[7],t[4]=P*a+E*i+O*M+x*d,t[5]=P*e+E*s+O*h+x*b,t[6]=P*u+E*c+O*l+x*m,t[7]=P*o+E*f+O*v+x*p,P=r[8],E=r[9],O=r[10],x=r[11],t[8]=P*a+E*i+O*M+x*d,t[9]=P*e+E*s+O*h+x*b,t[10]=P*u+E*c+O*l+x*m,t[11]=P*o+E*f+O*v+x*p,P=r[12],E=r[13],O=r[14],x=r[15],t[12]=P*a+E*i+O*M+x*d,t[13]=P*e+E*s+O*h+x*b,t[14]=P*u+E*c+O*l+x*m,t[15]=P*o+E*f+O*v+x*p,t}function v(t,n,r){var a=r[0],e=r[1],u=r[2],o=void 0,i=void 0,s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=void 0,d=void 0,b=void 0,m=void 0;return n===t?(t[12]=n[0]*a+n[4]*e+n[8]*u+n[12],t[13]=n[1]*a+n[5]*e+n[9]*u+n[13],t[14]=n[2]*a+n[6]*e+n[10]*u+n[14],t[15]=n[3]*a+n[7]*e+n[11]*u+n[15]):(o=n[0],i=n[1],s=n[2],c=n[3],f=n[4],M=n[5],h=n[6],l=n[7],v=n[8],d=n[9],b=n[10],m=n[11],t[0]=o,t[1]=i,t[2]=s,t[3]=c,t[4]=f,t[5]=M,t[6]=h,t[7]=l,t[8]=v,t[9]=d,t[10]=b,t[11]=m,t[12]=o*a+f*e+v*u+n[12],t[13]=i*a+M*e+d*u+n[13],t[14]=s*a+h*e+b*u+n[14],t[15]=c*a+l*e+m*u+n[15]),t}function d(t,n,r){var a=r[0],e=r[1],u=r[2];return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function b(t,n,r,a){var e=a[0],u=a[1],o=a[2],i=Math.sqrt(e*e+u*u+o*o),s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=void 0,d=void 0,b=void 0,m=void 0,p=void 0,P=void 0,E=void 0,O=void 0,x=void 0,A=void 0,q=void 0,y=void 0,w=void 0,R=void 0,L=void 0,S=void 0,_=void 0,I=void 0;return Math.abs(i)<C.EPSILON?null:(i=1/i,e*=i,u*=i,o*=i,s=Math.sin(r),c=Math.cos(r),f=1-c,M=n[0],h=n[1],l=n[2],v=n[3],d=n[4],b=n[5],m=n[6],p=n[7],P=n[8],E=n[9],O=n[10],x=n[11],A=e*e*f+c,q=u*e*f+o*s,y=o*e*f-u*s,w=e*u*f-o*s,R=u*u*f+c,L=o*u*f+e*s,S=e*o*f+u*s,_=u*o*f-e*s,I=o*o*f+c,t[0]=M*A+d*q+P*y,t[1]=h*A+b*q+E*y,t[2]=l*A+m*q+O*y,t[3]=v*A+p*q+x*y,t[4]=M*w+d*R+P*L,t[5]=h*w+b*R+E*L,t[6]=l*w+m*R+O*L,t[7]=v*w+p*R+x*L,t[8]=M*S+d*_+P*I,t[9]=h*S+b*_+E*I,t[10]=l*S+m*_+O*I,t[11]=v*S+p*_+x*I,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function m(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[4],o=n[5],i=n[6],s=n[7],c=n[8],f=n[9],M=n[10],h=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=u*e+c*a,t[5]=o*e+f*a,t[6]=i*e+M*a,t[7]=s*e+h*a,t[8]=c*e-u*a,t[9]=f*e-o*a,t[10]=M*e-i*a,t[11]=h*e-s*a,t}function p(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[0],o=n[1],i=n[2],s=n[3],c=n[8],f=n[9],M=n[10],h=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e-c*a,t[1]=o*e-f*a,t[2]=i*e-M*a,t[3]=s*e-h*a,t[8]=u*a+c*e,t[9]=o*a+f*e,t[10]=i*a+M*e,t[11]=s*a+h*e,t}function P(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[0],o=n[1],i=n[2],s=n[3],c=n[4],f=n[5],M=n[6],h=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e+c*a,t[1]=o*e+f*a,t[2]=i*e+M*a,t[3]=s*e+h*a,t[4]=c*e-u*a,t[5]=f*e-o*a,t[6]=M*e-i*a,t[7]=h*e-s*a,t}function E(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function O(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function x(t,n,r){var a=r[0],e=r[1],u=r[2],o=Math.sqrt(a*a+e*e+u*u),i=void 0,s=void 0,c=void 0;return Math.abs(o)<C.EPSILON?null:(o=1/o,a*=o,e*=o,u*=o,i=Math.sin(n),s=Math.cos(n),c=1-s,t[0]=a*a*c+s,t[1]=e*a*c+u*i,t[2]=u*a*c-e*i,t[3]=0,t[4]=a*e*c-u*i,t[5]=e*e*c+s,t[6]=u*e*c+a*i,t[7]=0,t[8]=a*u*c+e*i,t[9]=e*u*c-a*i,t[10]=u*u*c+s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function A(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function q(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function y(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function w(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=a+a,s=e+e,c=u+u,f=a*i,M=a*s,h=a*c,l=e*s,v=e*c,d=u*c,b=o*i,m=o*s,p=o*c;return t[0]=1-(l+d),t[1]=M+p,t[2]=h-m,t[3]=0,t[4]=M-p,t[5]=1-(f+d),t[6]=v+b,t[7]=0,t[8]=h+m,t[9]=v-b,t[10]=1-(f+l),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function R(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function L(t,n){var r=n[0],a=n[1],e=n[2],u=n[4],o=n[5],i=n[6],s=n[8],c=n[9],f=n[10];return t[0]=Math.sqrt(r*r+a*a+e*e),t[1]=Math.sqrt(u*u+o*o+i*i),t[2]=Math.sqrt(s*s+c*c+f*f),t}function S(t,n){var r=n[0]+n[5]+n[10],a=0;return r>0?(a=2*Math.sqrt(r+1),t[3]=.25*a,t[0]=(n[6]-n[9])/a,t[1]=(n[8]-n[2])/a,t[2]=(n[1]-n[4])/a):n[0]>n[5]&n[0]>n[10]?(a=2*Math.sqrt(1+n[0]-n[5]-n[10]),t[3]=(n[6]-n[9])/a,t[0]=.25*a,t[1]=(n[1]+n[4])/a,t[2]=(n[8]+n[2])/a):n[5]>n[10]?(a=2*Math.sqrt(1+n[5]-n[0]-n[10]),t[3]=(n[8]-n[2])/a,t[0]=(n[1]+n[4])/a,t[1]=.25*a,t[2]=(n[6]+n[9])/a):(a=2*Math.sqrt(1+n[10]-n[0]-n[5]),t[3]=(n[1]-n[4])/a,t[0]=(n[8]+n[2])/a,t[1]=(n[6]+n[9])/a,t[2]=.25*a),t}function _(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3],s=e+e,c=u+u,f=o+o,M=e*s,h=e*c,l=e*f,v=u*c,d=u*f,b=o*f,m=i*s,p=i*c,P=i*f,E=a[0],O=a[1],x=a[2];return t[0]=(1-(v+b))*E,t[1]=(h+P)*E,t[2]=(l-p)*E,t[3]=0,t[4]=(h-P)*O,t[5]=(1-(M+b))*O,t[6]=(d+m)*O,t[7]=0,t[8]=(l+p)*x,t[9]=(d-m)*x,t[10]=(1-(M+v))*x,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function I(t,n,r,a,e){var u=n[0],o=n[1],i=n[2],s=n[3],c=u+u,f=o+o,M=i+i,h=u*c,l=u*f,v=u*M,d=o*f,b=o*M,m=i*M,p=s*c,P=s*f,E=s*M,O=a[0],x=a[1],A=a[2],q=e[0],y=e[1],w=e[2];return t[0]=(1-(d+m))*O,t[1]=(l+E)*O,t[2]=(v-P)*O,t[3]=0,t[4]=(l-E)*x,t[5]=(1-(h+m))*x,t[6]=(b+p)*x,t[7]=0,t[8]=(v+P)*A,t[9]=(b-p)*A,t[10]=(1-(h+d))*A,t[11]=0,t[12]=r[0]+q-(t[0]*q+t[4]*y+t[8]*w),t[13]=r[1]+y-(t[1]*q+t[5]*y+t[9]*w),t[14]=r[2]+w-(t[2]*q+t[6]*y+t[10]*w),t[15]=1,t}function N(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r+r,i=a+a,s=e+e,c=r*o,f=a*o,M=a*i,h=e*o,l=e*i,v=e*s,d=u*o,b=u*i,m=u*s;return t[0]=1-M-v,t[1]=f+m,t[2]=h-b,t[3]=0,t[4]=f-m,t[5]=1-c-v,t[6]=l+d,t[7]=0,t[8]=h+b,t[9]=l-d,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Y(t,n,r,a,e,u,o){var i=1/(r-n),s=1/(e-a),c=1/(u-o);return t[0]=2*u*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*s,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(e+a)*s,t[10]=(o+u)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*u*2*c,t[15]=0,t}function g(t,n,r,a,e){var u=1/Math.tan(n/2),o=1/(a-e);return t[0]=u/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(e+a)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*e*a*o,t[15]=0,t}function T(t,n,r,a){var e=Math.tan(n.upDegrees*Math.PI/180),u=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),s=2/(o+i),c=2/(e+u);return t[0]=s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*s*.5,t[9]=(e-u)*c*.5,t[10]=a/(r-a),t[11]=-1,t[12]=0,t[13]=0,t[14]=a*r/(r-a),t[15]=0,t}function j(t,n,r,a,e,u,o){var i=1/(n-r),s=1/(a-e),c=1/(u-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+r)*i,t[13]=(e+a)*s,t[14]=(o+u)*c,t[15]=1,t}function D(t,n,r,a){var e=void 0,u=void 0,o=void 0,i=void 0,s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=n[0],d=n[1],b=n[2],m=a[0],p=a[1],P=a[2],E=r[0],O=r[1],x=r[2];return Math.abs(v-E)<C.EPSILON&&Math.abs(d-O)<C.EPSILON&&Math.abs(b-x)<C.EPSILON?mat4.identity(t):(f=v-E,M=d-O,h=b-x,l=1/Math.sqrt(f*f+M*M+h*h),f*=l,M*=l,h*=l,e=p*h-P*M,u=P*f-m*h,o=m*M-p*f,l=Math.sqrt(e*e+u*u+o*o),l?(l=1/l,e*=l,u*=l,o*=l):(e=0,u=0,o=0),i=M*o-h*u,s=h*e-f*o,c=f*u-M*e,l=Math.sqrt(i*i+s*s+c*c),l?(l=1/l,i*=l,s*=l,c*=l):(i=0,s=0,c=0),t[0]=e,t[1]=i,t[2]=f,t[3]=0,t[4]=u,t[5]=s,t[6]=M,t[7]=0,t[8]=o,t[9]=c,t[10]=h,t[11]=0,t[12]=-(e*v+u*d+o*b),t[13]=-(i*v+s*d+c*b),t[14]=-(f*v+M*d+h*b),t[15]=1,t)}function V(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=a[0],s=a[1],c=a[2],f=e-r[0],M=u-r[1],h=o-r[2],l=f*f+M*M+h*h;l>0&&(l=1/Math.sqrt(l),f*=l,M*=l,h*=l);var v=s*h-c*M,d=c*f-i*h,b=i*M-s*f;return t[0]=v,t[1]=d,t[2]=b,t[3]=0,t[4]=M*b-h*d,t[5]=h*v-f*b,t[6]=f*d-M*v,t[7]=0,t[8]=f,t[9]=M,t[10]=h,t[11]=0,t[12]=e,t[13]=u,t[14]=o,t[15]=1,t}function z(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function F(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))}function Q(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function X(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function Z(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function k(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t[6]=n[6]+r[6]*a,t[7]=n[7]+r[7]*a,t[8]=n[8]+r[8]*a,t[9]=n[9]+r[9]*a,t[10]=n[10]+r[10]*a,t[11]=n[11]+r[11]*a,t[12]=n[12]+r[12]*a,t[13]=n[13]+r[13]*a,t[14]=n[14]+r[14]*a,t[15]=n[15]+r[15]*a,t}function U(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function W(t,n){var r=t[0],a=t[1],e=t[2],u=t[3],o=t[4],i=t[5],s=t[6],c=t[7],f=t[8],M=t[9],h=t[10],l=t[11],v=t[12],d=t[13],b=t[14],m=t[15],p=n[0],P=n[1],E=n[2],O=n[3],x=n[4],A=n[5],q=n[6],y=n[7],w=n[8],R=n[9],L=n[10],S=n[11],_=n[12],I=n[13],N=n[14],Y=n[15];return Math.abs(r-p)<=C.EPSILON*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(a-P)<=C.EPSILON*Math.max(1,Math.abs(a),Math.abs(P))&&Math.abs(e-E)<=C.EPSILON*Math.max(1,Math.abs(e),Math.abs(E))&&Math.abs(u-O)<=C.EPSILON*Math.max(1,Math.abs(u),Math.abs(O))&&Math.abs(o-x)<=C.EPSILON*Math.max(1,Math.abs(o),Math.abs(x))&&Math.abs(i-A)<=C.EPSILON*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(s-q)<=C.EPSILON*Math.max(1,Math.abs(s),Math.abs(q))&&Math.abs(c-y)<=C.EPSILON*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(f-w)<=C.EPSILON*Math.max(1,Math.abs(f),Math.abs(w))&&Math.abs(M-R)<=C.EPSILON*Math.max(1,Math.abs(M),Math.abs(R))&&Math.abs(h-L)<=C.EPSILON*Math.max(1,Math.abs(h),Math.abs(L))&&Math.abs(l-S)<=C.EPSILON*Math.max(1,Math.abs(l),Math.abs(S))&&Math.abs(v-_)<=C.EPSILON*Math.max(1,Math.abs(v),Math.abs(_))&&Math.abs(d-I)<=C.EPSILON*Math.max(1,Math.abs(d),Math.abs(I))&&Math.abs(b-N)<=C.EPSILON*Math.max(1,Math.abs(b),Math.abs(N))&&Math.abs(m-Y)<=C.EPSILON*Math.max(1,Math.abs(m),Math.abs(Y))}Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=a,n.clone=e,n.copy=u,n.fromValues=o,n.set=i,n.identity=s,n.transpose=c,n.invert=f,n.adjoint=M,n.determinant=h,n.multiply=l,n.translate=v,n.scale=d,n.rotate=b,n.rotateX=m,n.rotateY=p,n.rotateZ=P,n.fromTranslation=E,n.fromScaling=O,n.fromRotation=x,n.fromXRotation=A,n.fromYRotation=q,n.fromZRotation=y,n.fromRotationTranslation=w,n.getTranslation=R,n.getScaling=L,n.getRotation=S,n.fromRotationTranslationScale=_,n.fromRotationTranslationScaleOrigin=I,n.fromQuat=N,n.frustum=Y,n.perspective=g,n.perspectiveFromFieldOfView=T,n.ortho=j,n.lookAt=D,n.targetTo=V,n.str=z,n.frob=F,n.add=Q,n.subtract=X,n.multiplyScalar=Z,n.multiplyScalarAndAdd=k,n.exactEquals=U,n.equals=W;var B=r(0),C=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(B);n.mul=l,n.sub=X},function(t,n,r){"use strict";function a(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}function e(){var t=new E.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function u(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function o(t,n,r){r*=.5;var a=Math.sin(r);return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=Math.cos(r),t}function i(t,n){var r=2*Math.acos(n[3]),a=Math.sin(r/2);return 0!=a?(t[0]=n[0]/a,t[1]=n[1]/a,t[2]=n[2]/a):(t[0]=1,t[1]=0,t[2]=0),r}function s(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1],c=r[2],f=r[3];return t[0]=a*f+o*i+e*c-u*s,t[1]=e*f+o*s+u*i-a*c,t[2]=u*f+o*c+a*s-e*i,t[3]=o*f-a*i-e*s-u*c,t}function c(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+o*i,t[1]=e*s+u*i,t[2]=u*s-e*i,t[3]=o*s-a*i,t}function f(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s-u*i,t[1]=e*s+o*i,t[2]=u*s+a*i,t[3]=o*s-e*i,t}function M(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+e*i,t[1]=e*s-a*i,t[2]=u*s+o*i,t[3]=o*s-u*i,t}function h(t,n){var r=n[0],a=n[1],e=n[2];return t[0]=r,t[1]=a,t[2]=e,t[3]=Math.sqrt(Math.abs(1-r*r-a*a-e*e)),t}function l(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3],s=r[0],c=r[1],f=r[2],M=r[3],h=void 0,l=void 0,v=void 0,d=void 0,b=void 0;return l=e*s+u*c+o*f+i*M,l<0&&(l=-l,s=-s,c=-c,f=-f,M=-M),1-l>1e-6?(h=Math.acos(l),v=Math.sin(h),d=Math.sin((1-a)*h)/v,b=Math.sin(a*h)/v):(d=1-a,b=a),t[0]=d*e+b*s,t[1]=d*u+b*c,t[2]=d*o+b*f,t[3]=d*i+b*M,t}function v(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*r+a*a+e*e+u*u,i=o?1/o:0;return t[0]=-r*i,t[1]=-a*i,t[2]=-e*i,t[3]=u*i,t}function d(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function b(t,n){var r=n[0]+n[4]+n[8],a=void 0;if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);var u=(e+1)%3,o=(e+2)%3;a=Math.sqrt(n[3*e+e]-n[3*u+u]-n[3*o+o]+1),t[e]=.5*a,a=.5/a,t[3]=(n[3*u+o]-n[3*o+u])*a,t[u]=(n[3*u+e]+n[3*e+u])*a,t[o]=(n[3*o+e]+n[3*e+o])*a}return t}function m(t,n,r,a){var e=.5*Math.PI/180;n*=e,r*=e,a*=e;var u=Math.sin(n),o=Math.cos(n),i=Math.sin(r),s=Math.cos(r),c=Math.sin(a),f=Math.cos(a);return t[0]=u*s*f-o*i*c,t[1]=o*i*f+u*s*c,t[2]=o*s*c-u*i*f,t[3]=o*s*f+u*i*c,t}function p(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}Object.defineProperty(n,"__esModule",{value:!0}),n.setAxes=n.sqlerp=n.rotationTo=n.equals=n.exactEquals=n.normalize=n.sqrLen=n.squaredLength=n.len=n.length=n.lerp=n.dot=n.scale=n.mul=n.add=n.set=n.copy=n.fromValues=n.clone=void 0,n.create=e,n.identity=u,n.setAxisAngle=o,n.getAxisAngle=i,n.multiply=s,n.rotateX=c,n.rotateY=f,n.rotateZ=M,n.calculateW=h,n.slerp=l,n.invert=v,n.conjugate=d,n.fromMat3=b,n.fromEuler=m,n.str=p;var P=r(0),E=a(P),O=r(1),x=a(O),A=r(2),q=a(A),y=r(3),w=a(y),R=(n.clone=w.clone,n.fromValues=w.fromValues,n.copy=w.copy,n.set=w.set,n.add=w.add,n.mul=s,n.scale=w.scale,n.dot=w.dot,n.lerp=w.lerp,n.length=w.length),L=(n.len=R,n.squaredLength=w.squaredLength),S=(n.sqrLen=L,n.normalize=w.normalize);n.exactEquals=w.exactEquals,n.equals=w.equals,n.rotationTo=function(){var t=q.create(),n=q.fromValues(1,0,0),r=q.fromValues(0,1,0);return function(a,e,u){var i=q.dot(e,u);return i<-.999999?(q.cross(t,n,e),q.len(t)<1e-6&&q.cross(t,r,e),q.normalize(t,t),o(a,t,Math.PI),a):i>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(q.cross(t,e,u),a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=1+i,S(a,a))}}(),n.sqlerp=function(){var t=e(),n=e();return function(r,a,e,u,o,i){return l(t,a,o,i),l(n,e,u,i),l(r,t,n,2*i*(1-i)),r}}(),n.setAxes=function(){var t=x.create();return function(n,r,a,e){return t[0]=a[0],t[3]=a[1],t[6]=a[2],t[1]=e[0],t[4]=e[1],t[7]=e[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],S(n,b(n,t))}}()},function(t,n,r){"use strict";function a(){var t=new V.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t}function e(t){var n=new V.ARRAY_TYPE(2);return n[0]=t[0],n[1]=t[1],n}function u(t,n){var r=new V.ARRAY_TYPE(2);return r[0]=t,r[1]=n,r}function o(t,n){return t[0]=n[0],t[1]=n[1],t}function i(t,n,r){return t[0]=n,t[1]=r,t}function s(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function c(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function f(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function M(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function h(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function l(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function v(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function d(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function b(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function m(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function p(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t}function P(t,n){var r=n[0]-t[0],a=n[1]-t[1];return Math.sqrt(r*r+a*a)}function E(t,n){var r=n[0]-t[0],a=n[1]-t[1];return r*r+a*a}function O(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function x(t){var n=t[0],r=t[1];return n*n+r*r}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t}function q(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function y(t,n){var r=n[0],a=n[1],e=r*r+a*a;return e>0&&(e=1/Math.sqrt(e),t[0]=n[0]*e,t[1]=n[1]*e),t}function w(t,n){return t[0]*n[0]+t[1]*n[1]}function R(t,n,r){var a=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=a,t}function L(t,n,r,a){var e=n[0],u=n[1];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t}function S(t,n){n=n||1;var r=2*V.RANDOM()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t}function _(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e,t[1]=r[1]*a+r[3]*e,t}function I(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e+r[4],t[1]=r[1]*a+r[3]*e+r[5],t}function N(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[3]*e+r[6],t[1]=r[1]*a+r[4]*e+r[7],t}function Y(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[4]*e+r[12],t[1]=r[1]*a+r[5]*e+r[13],t}function g(t){return"vec2("+t[0]+", "+t[1]+")"}function T(t,n){return t[0]===n[0]&&t[1]===n[1]}function j(t,n){var r=t[0],a=t[1],e=n[0],u=n[1];return Math.abs(r-e)<=V.EPSILON*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(a-u)<=V.EPSILON*Math.max(1,Math.abs(a),Math.abs(u))}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.sqrDist=n.dist=n.div=n.mul=n.sub=n.len=void 0,n.create=a,n.clone=e,n.fromValues=u,n.copy=o,n.set=i,n.add=s,n.subtract=c,n.multiply=f,n.divide=M,n.ceil=h,n.floor=l,n.min=v,n.max=d,n.round=b,n.scale=m,n.scaleAndAdd=p,n.distance=P,n.squaredDistance=E,n.length=O,n.squaredLength=x,n.negate=A,n.inverse=q,n.normalize=y,n.dot=w,n.cross=R,n.lerp=L,n.random=S,n.transformMat2=_,n.transformMat2d=I,n.transformMat3=N,n.transformMat4=Y,n.str=g,n.exactEquals=T,n.equals=j;var D=r(0),V=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(D);n.len=O,n.sub=c,n.mul=f,n.div=M,n.dist=P,n.sqrDist=E,n.sqrLen=x,n.forEach=function(){var t=a();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=2),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],u(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}()}])});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var capabilities = __webpack_require__(16);
var Cache = __webpack_require__(11);
var log = __webpack_require__(51);

var _require = __webpack_require__(2),
    TEXTURE_2D = _require.TEXTURE_2D,
    RGBA = _require.RGBA,
    LINEAR = _require.LINEAR,
    NEAREST = _require.NEAREST,
    REPEAT = _require.REPEAT,
    CLAMP_TO_EDGE = _require.CLAMP_TO_EDGE,
    UNSIGNED_BYTE = _require.UNSIGNED_BYTE;

var cache = new Cache();
/**
 * 纹理
 * @class
 * @example
 * var loader = new Hilo3d.BasicLoader();
 * loader.load({
 *     src: '//img.alicdn.com/tfs/TB1aNxtQpXXXXX1XVXXXXXXXXXX-1024-1024.jpg',
 *     crossOrigin: true
 * }).then(img => {
 *     return new Hilo3d.Texture({
 *         image: img
 *     });
 * });
 */
var Texture = Class.create( /** @lends Texture.prototype */{
  Statics: {
    /**
     * 缓存
     * @readOnly
     * @type {Object}
     */
    cache: {
      get: function get() {
        return cache;
      }
    },
    /**
     * 重置
     * @param  {WebGLRenderingContext} gl
     */
    reset: function reset(gl) {
      cache.each(function (texture) {
        texture.destroy(gl);
      });
    }
  },
  /**
   * @default true
   * @type {boolean}
   */
  isTexture: true,
  /**
   * @default Texture
   * @type {string}
   */
  className: 'Texture',

  /**
   * 图片对象
   * @type {Image}
   */
  image: null,
  /**
   * Texture Target
   * @default TEXTURE_2D
   * @type {number}
   */
  target: TEXTURE_2D,
  /**
   * Texture Level
   * @default 0
   * @type {number}
   */
  level: 0,
  /**
   * Texture Internal Format
   * @default RGBA
   * @type {number}
   */
  internalFormat: RGBA,
  /**
   * 图片 Format
   * @default RGBA
   * @type {number}
   */
  format: RGBA,
  /**
   * 类型
   * @default UNSIGNED_BYTE
   * @type {number}
   */
  type: UNSIGNED_BYTE,
  /**
   * @type {number}
   */
  width: 0,
  /**
   * @type {number}
   */
  height: 0,

  /**
   * magFilter
   * @default LINEAR
   * @type {number}
   */
  magFilter: LINEAR,
  /**
   * minFilter
   * @default LINEAR
   * @type {number}
   */
  minFilter: LINEAR,
  /**
   * wrapS
   * @default REPEAT
   * @type {number}
   */
  wrapS: REPEAT,
  /**
   * wrapT
   * @default REPEAT
   * @type {number}
   */
  wrapT: REPEAT,
  /**
   * @type {string}
   */
  name: '',
  /**
   * @default false
   * @type {boolean}
   */
  premultiplyAlpha: false,
  /**
   * 是否翻转Texture的Y轴
   * @default false
   * @type {boolean}
   */
  flipY: false,

  /**
   * 是否需要更新Texture
   * @default true
   * @type {boolean}
   */
  needUpdate: true,
  /**
   * 是否每次都更新Texture
   * @default false
   * @type {boolean}
   */
  autoUpdate: false,
  /**
   * @constructs
   * @param {object} params 初始化参数，所有params都会复制到实例上
   */
  constructor: function constructor(params) {
    this.id = math.generateUUID(this.className);
    Object.assign(this, params);

    cache.add(this.id, this);
  },
  isImgPowerOfTwo: function isImgPowerOfTwo(img) {
    return math.isPowerOfTwo(img.width) && math.isPowerOfTwo(img.height);
  },
  resizeImgToPowerOfTwo: function resizeImgToPowerOfTwo(img) {
    if (this.isImgPowerOfTwo(img)) {
      return img;
    }
    var newW = math.nextPowerOfTwo(img.width);
    var newH = math.nextPowerOfTwo(img.height);
    var canvas = this._canvasImage;
    if (!canvas) {
      canvas = document.createElement('canvas');
      this._canvasImage = canvas;
    }
    canvas.width = newW;
    canvas.height = newH;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, newW, newH);
    log.warnOnce('resizeImgToPowerOfTwo' + this.id, 'image is not power of two (' + img.width + 'x' + img.height + '). Resized to ' + canvas.width + 'x' + canvas.height, img.src);
    return canvas;
  },
  _uploadTexture: function _uploadTexture(state) {
    state.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
  },
  updateTexture: function updateTexture(state) {
    var gl = state.gl;
    if (this.needUpdate || this.autoUpdate) {
      if (this._originImage && this.image === this._canvasImage) {
        this.image = this._originImage;
      }
      var useMipmap = this.minFilter !== LINEAR && this.minFilter !== NEAREST;
      var useRepeat = this.wrapS !== CLAMP_TO_EDGE || this.wrapT !== CLAMP_TO_EDGE;
      if (useRepeat || useMipmap) {
        this._originImage = this.image;
        this.image = this.resizeImgToPowerOfTwo(this.image);
      }
      state.activeTexture(gl.TEXTURE0 + capabilities.MAX_TEXTURE_INDEX);
      state.bindTexture(this.target, this.tex);
      state.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!this.flipY);

      this._uploadTexture(state);

      if (useMipmap) {
        gl.generateMipmap(this.target);
      }
      this.needUpdate = false;
    }
  },
  getGLTexture: function getGLTexture(state) {
    var gl = state.gl;
    if (this.tex) {
      this.updateTexture(state);
      return this.tex;
    }
    this.tex = gl.createTexture();
    this.needUpdate = true;
    this.updateTexture(state);
    gl.texParameterf(this.target, gl.TEXTURE_MAG_FILTER, this.magFilter);
    gl.texParameterf(this.target, gl.TEXTURE_MIN_FILTER, this.minFilter);
    gl.texParameterf(this.target, gl.TEXTURE_WRAP_S, this.wrapS);
    gl.texParameterf(this.target, gl.TEXTURE_WRAP_T, this.wrapT);
    return this.tex;
  },

  /**
   * 销毁当前Texture
   * @param {WebGL2RenderingContext} gl gl
   */
  destroy: function destroy(gl) {
    if (this.tex) {
      gl.deleteTexture(this.tex);
      delete this.tex;
    }
  }
});

module.exports = Texture;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * WebGL 能力
 * @namespace capabilities
 * @type {Object}
 */
var capabilities = {
    /**
     * 最大纹理数量
     * @type {Number}
     */
    MAX_TEXTURE_INDEX: null,

    /**
     * 最高着色器精度, 可以是以下值：highp, mediump, lowp
     * @type {String}
     */
    MAX_PRECISION: null,

    /**
     * 最高顶点着色器精度, 可以是以下值：highp, mediump, lowp
     * @type {String}
     */
    MAX_VERTEX_PRECISION: null,

    /**
     * 最高片段着色器精度, 可以是以下值：highp, mediump, lowp
     * @type {String}
     */
    MAX_FRAGMENT_PRECISION: null,

    /**
     * 顶点浮点数纹理
     * @type {Boolean}
     */
    VERTEX_TEXTURE_FLOAT: null,

    /**
     * 片段浮点数纹理
     * @type {Boolean}
     */
    FRAGMENT_TEXTURE_FLOAT: null,

    /**
     * 初始化
     * @param {WebGLRenderingContext} gl
     * @param {Object} extensions
     */
    init: function init(gl, extensions) {
        var _this = this;

        this.gl = gl;
        var arr = ['MAX_RENDERBUFFER_SIZE', 'MAX_COMBINED_TEXTURE_IMAGE_UNITS', 'MAX_CUBE_MAP_TEXTURE_SIZE', 'MAX_FRAGMENT_UNIFORM_VECTORS', 'MAX_TEXTURE_IMAGE_UNITS', 'MAX_TEXTURE_SIZE', 'MAX_VARYING_VECTORS', 'MAX_VERTEX_ATTRIBS', 'MAX_VERTEX_TEXTURE_IMAGE_UNITS', 'MAX_VERTEX_UNIFORM_VECTORS', 'MAX_COMBINED_TEXTURE_IMAGE_UNITS'];

        arr.forEach(function (name) {
            _this.get(name);
        });

        this.MAX_TEXTURE_INDEX = this.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
        this.MAX_VERTEX_PRECISION = this._getMaxSupportPrecision(gl.VERTEX_SHADER);
        this.MAX_FRAGMENT_PRECISION = this._getMaxSupportPrecision(gl.FRAGMENT_SHADER);
        this.MAX_PRECISION = this.getMaxPrecision(this.MAX_FRAGMENT_PRECISION, this.MAX_VERTEX_PRECISION);

        this.VERTEX_TEXTURE_FLOAT = !!extensions.texFloat && this.MAX_VERTEX_TEXTURE_IMAGE_UNITS > 0;
        this.FRAGMENT_TEXTURE_FLOAT = !!extensions.texFloat;
    },

    /**
     * 获取 WebGL 能力
     * @param  {String} name
     * @return {Number|String}
     */
    get: function get(name) {
        var gl = this.gl;
        var value = this[name];
        if (value === undefined) {
            value = this[name] = gl.getParameter(gl[name]);
        }

        return value;
    },
    _getMaxSupportPrecision: function _getMaxSupportPrecision(shaderType) {
        var gl = this.gl;

        var maxPrecision = 'lowp';

        if (gl.getShaderPrecisionFormat) {
            var precisions = [{
                name: 'highp',
                type: gl.HIGH_FLOAT
            }, {
                name: 'mediump',
                type: gl.MEDIUM_FLOAT
            }];

            for (var i = 0; i < precisions.length; i++) {
                var precision = precisions[i];
                var precisionFormat = gl.getShaderPrecisionFormat(shaderType, precision.type) || {};
                if (precisionFormat.precision > 0) {
                    maxPrecision = precision.name;
                    break;
                }
            }
        } else {
            maxPrecision = 'mediump';
        }

        return maxPrecision;
    },

    /**
     * 获取最大支持精度
     * @param  {String} a 
     * @param  {String} b 
     * @return {String}   
     */
    getMaxPrecision: function getMaxPrecision(a, b) {
        if (a === b) {
            return a;
        }

        if (a === 'highp' || a === 'mediump' && b === 'lowp') {
            return b;
        }

        return a;
    }
};

module.exports = capabilities;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#define HILO_FRONT_SIDE 1028\n#define HILO_BACK_SIDE 1029\n#define HILO_FRONT_AND_BACK_SIDE 1032"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Node = __webpack_require__(10);
var Ray = __webpack_require__(45);
var Matrix4 = __webpack_require__(4);

var tempRay = new Ray();
var tempMatrix4 = new Matrix4();
/**
 * Mesh
 * @class
 * @extends Node
 * @example
 * const mesh = new Hilo3d.Mesh({
 *     geometry: new Hilo3d.BoxGeometry(),
 *     material: new Hilo3d.BasicMaterial({
 *         diffuse: new Hilo3d.Color(0.8, 0, 0)
 *     }),
 *     x:100,
 *     rotationX:30
 * });
 * stage.addChild(mesh);
 */
var Mesh = Class.create( /** @lends Mesh.prototype */{
  Extends: Node,
  /**
   * @default true
   * @type {boolean}
   */
  isMesh: true,
  /**
   * @default Mesh
   * @type {string}
   */
  className: 'Mesh',
  /**
   * @type {Geometry}
   */
  geometry: null,
  /**
   * @type {Material}
   */
  material: null,
  /**
   * 是否支持 Instanced
   * @default true
   * @type {boolean}
   */
  useInstanced: true,
  /**
   * @constructs
   * @param {object} params 初始化参数，所有params都会复制到实例上
   */
  constructor: function constructor(params) {
    Mesh.superclass.constructor.call(this, params);
  },

  /**
   * clone 当前mesh
   * @param {boolean} isChild 是否子元素
   * @return {Mesh} 返回clone的实例
   */
  clone: function clone(isChild) {
    var node = Node.prototype.clone.call(this, isChild);
    Object.assign(node, {
      geometry: this.geometry,
      material: this.material
    });
    return node;
  },

  /**
   * raycast
   * @param  {Ray} ray 
   * @param {Boolean} [sort=true] 是否按距离排序
   * @return {Vector3[]|null}     
   */
  raycast: function raycast(ray) {
    var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var geometry = this.geometry;
    var material = this.material;
    var worldMatrix = this.worldMatrix;
    if (geometry && material) {
      tempMatrix4.invert(worldMatrix);
      tempRay.copy(ray);
      tempRay.transformMat4(tempMatrix4);

      var res = geometry.raycast(tempRay, material.side, sort);
      if (res) {
        res.forEach(function (point) {
          point.transformMat4(worldMatrix);
        });

        return res;
      }
    }
    return null;
  },
  getRenderOption: function getRenderOption() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.geometry.getRenderOption(opt);
    return opt;
  }
});

module.exports = Mesh;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix3 = __webpack_require__(23);
var Vector3 = __webpack_require__(5);
var Class = __webpack_require__(0);
var EventMixin = __webpack_require__(9);

var _require = __webpack_require__(14),
    quat = _require.quat;

var tempMat3 = new Matrix3();

/**
 * @class
 * @mixes {EventMixin}
 */
var Quaternion = Class.create( /** @lends Quaternion.prototype */{
    Mixes: EventMixin,
    className: 'Quaternion',
    isQuaternion: true,
    /**
     * Creates a new identity quat
     * @constructs
     * @param  {Number} [x=0] X component
     * @param  {Number} [y=0] Y component
     * @param  {Number} [z=0] Z component
     * @param  {Number} [w=1] W component
     */
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        this.elements = quat.fromValues(x, y, z, w);
    },


    /**
     * Copy the values from one quat to this
     * @param  {Quaternion} q
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    copy: function copy(q, dontFireEvent) {
        quat.copy(this.elements, q.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Creates a new quat initialized with values from an existing quaternion
     * @return {Quaternion} a new quaternion
     */
    clone: function clone() {
        var el = this.elements;
        return new this.constructor(el[0], el[1], el[2], el[3]);
    },


    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array} 
     */
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var el = this.elements;

        array[offset] = el[0];
        array[offset + 1] = el[1];
        array[offset + 2] = el[2];
        array[offset + 3] = el[3];

        return array;
    },

    /**
     * 从数组赋值
     * @param  {Array} array  数组
     * @param  {Number} [offset=0] 数组偏移值
     * @param {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var dontFireEvent = arguments[2];

        var el = this.elements;

        el[0] = array[offset];
        el[1] = array[offset + 1];
        el[2] = array[offset + 2];
        el[3] = array[offset + 3];

        if (!dontFireEvent) {
            this.fire('change');
        }

        return this;
    },


    /**
     * Set the components of a quat to the given values
     * @param {Number} x  X component
     * @param {Number} y  Y component
     * @param {Number} z  Z component
     * @param {Number} w  W component
     * @param {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    set: function set(x, y, z, w, dontFireEvent) {
        quat.set(this.elements, x, y, z, w);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },


    /**
     * Set this to the identity quaternion
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    identity: function identity(dontFireEvent) {
        quat.identity(this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     * @param  {Vector3} a the initial vector
     * @param  {Vector3} b the destination vector
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    rotationTo: function rotationTo(a, b, dontFireEvent) {
        quat.rotationTo(this.elements, a.elements, b.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {Vector3} view  the vector representing the viewing direction
     * @param {Vector3} right the vector representing the local "right" direction
     * @param {Vector3} up    the vector representing the local "up" direction
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    setAxes: function setAxes(view, right, up, dontFireEvent) {
        quat.setAxes(this.elements, view.elements, right.elements, up.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     * @param {Vector3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @param {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    setAxisAngle: function setAxisAngle(axis, rad, dontFireEvent) {
        quat.setAxisAngle(this.elements, axis, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {Vector3} out_axis  Vector receiving the axis of rotation
     * @return {Number} Angle, in radians, of the rotation
     */
    getAxisAngle: function getAxisAngle(axis) {
        axis = axis || new Vector3();
        return quat.getAxisAngle(axis.elements, this.elements);
    },

    /**
     * Adds two quat's
     * @param {Quaternion} q
     * @param {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    add: function add(q, dontFireEvent) {
        quat.add(this.elements, this.elements, q.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Multiplies two quat's
     * @param  {Quaternion} q
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    multiply: function multiply(q, dontFireEvent) {
        quat.multiply(this.elements, this.elements, q.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * premultiply the quat
     * @param  {Quaternion} q
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    premultiply: function premultiply(q, dontFireEvent) {
        quat.multiply(this.elements, q.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Scales a quat by a scalar number
     * @param  {Vector3} scale the vector to scale
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    scale: function scale(_scale, dontFireEvent) {
        quat.scale(this.elements, this.elements, _scale);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Rotates a quaternion by the given angle about the X axis
     * @param  {Number} rad angle (in radians) to rotate
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    rotateX: function rotateX(rad, dontFireEvent) {
        quat.rotateX(this.elements, this.elements, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Rotates a quaternion by the given angle about the Y axis
     * @param  {Number} rad angle (in radians) to rotate
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    rotateY: function rotateY(rad, dontFireEvent) {
        quat.rotateY(this.elements, this.elements, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Rotates a quaternion by the given angle about the Z axis
     * @param  {Number} rad angle (in radians) to rotate
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    rotateZ: function rotateZ(rad, dontFireEvent) {
        quat.rotateZ(this.elements, this.elements, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @returns {Quaternion} this
     */
    calculateW: function calculateW(dontFireEvent) {
        quat.calculateW(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Calculates the dot product of two quat's
     * @param  {Quaternion} q
     * @return {Number} dot product of two quat's
     */
    dot: function dot(q) {
        return quat.dot(this.elements, q.elements);
    },

    /**
     * Performs a linear interpolation between two quat's
     * @param  {Quaternion} q
     * @param  {Number} t interpolation amount between the two inputs
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    lerp: function lerp(q, t, dontFireEvent) {
        quat.lerp(this.elements, this.elements, q.elements, t);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Performs a spherical linear interpolation between two quat
     * @param  {Quaternion} q
     * @param  {Number} t interpolation amount between the two inputs
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    slerp: function slerp(q, t, dontFireEvent) {
        quat.slerp(this.elements, this.elements, q.elements, t);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Performs a spherical linear interpolation with two control points
     * @param  {Quaternion} qb
     * @param  {Quaternion} qc
     * @param  {Quaternion} qd
     * @param  {Number} t interpolation amount
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    sqlerp: function sqlerp(qb, qc, qd, t, dontFireEvent) {
        quat.sqlerp(this.elements, qb.elements, qc.elements, qd.elements, t);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Calculates the inverse of a quat
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    invert: function invert(dontFireEvent) {
        quat.invert(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    conjugate: function conjugate(dontFireEvent) {
        quat.conjugate(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Calculates the length of a quat
     * @return {Number} length of this
     */
    length: function length() {
        return quat.length(this.elements);
    },

    /**
     * Calculates the squared length of a quat
     * @return {Number} squared length of this
     */
    squaredLength: function squaredLength() {
        return quat.squaredLength(this.elements);
    },

    /**
     * Normalize this
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    normalize: function normalize(dontFireEvent) {
        quat.normalize(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {Matrix3} m rotation matrix
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    fromMat3: function fromMat3(mat, dontFireEvent) {
        quat.fromMat3(this.elements, mat.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },

    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {Matrix4} m rotation matrix
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    fromMat4: function fromMat4(mat, dontFireEvent) {
        tempMat3.fromMat4(mat);
        this.fromMat3(tempMat3, dontFireEvent);
        return this;
    },

    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     * @param  {Quaternion} q
     * @return {Boolean}
     */
    exactEquals: function exactEquals(q) {
        return quat.exactEquals(this.elements, q.elements);
    },

    /**
     * Returns whether or not the quaternions have approximately the same elements in the same position.
     * @param  {Quaternion} q
     * @return {Boolean}
     */
    equals: function equals(q) {
        return quat.equals(this.elements, q.elements);
    },

    /**
     * Creates a quaternion from the given euler.
     * @param  {Euler} euler 
     * @param  {Boolean} [dontFireEvent=false] wether or not don`t fire change event.
     * @return {Quaternion} this
     */
    fromEuler: function fromEuler(euler, dontFireEvent) {
        // quat.fromEuler(this.elements, euler.x, euler.y, euler.z);
        var x = euler.x * .5;
        var y = euler.y * .5;
        var z = euler.z * .5;

        var sx = Math.sin(x);
        var cx = Math.cos(x);
        var sy = Math.sin(y);
        var cy = Math.cos(y);
        var sz = Math.sin(z);
        var cz = Math.cos(z);

        var out = this.elements;
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;

        if (!dontFireEvent) {
            this.fire('change');
        }

        return this;
    },

    /**
     * X component
     * @type {Number}
     */
    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
            this.fire('change');
        }
    },
    /**
     * Y component
     * @type {Number}
     */
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
            this.fire('change');
        }
    },
    /**
     * Z component
     * @type {Number}
     */
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
            this.fire('change');
        }
    },
    /**
     * W component
     * @type {Number}
     */
    w: {
        get: function get() {
            return this.elements[3];
        },
        set: function set(value) {
            this.elements[3] = value;
            this.fire('change');
        }
    }
});

/**
 * Alias for {@link Quaternion#multiply}
 * @function
 */
Quaternion.prototype.mul = Quaternion.prototype.multiply;

/**
 * Alias for {@link Quaternion#length}
 * @function
 */
Quaternion.prototype.len = Quaternion.prototype.length;

/**
 * Alias for {@link Quaternion#squaredLength}
 * @function
 */
Quaternion.prototype.sqrLen = Quaternion.prototype.squaredLength;

module.exports = Quaternion;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision HILO_MAX_FRAGMENT_PRECISION float;\n#define GLSLIFY 1\n#endif"

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Node = __webpack_require__(10);
var Color = __webpack_require__(6);

/**
 * 灯光基础类
 * @class
 * @extends Node
 */
var Light = Class.create( /** @lends Light.prototype */{
  Extends: Node,
  isLight: true,
  className: 'Light',
  /**
   * @constructs
   * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性。
   */
  constructor: function constructor(params) {
    /**
     * 灯光颜色
     * @default new Color(1, 1, 1)
     * @type {Color}
     */
    this.color = new Color(1, 1, 1);
    Light.superclass.constructor.call(this, params);
  }
});

module.exports = Light;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Hilo 1.1.1 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */


/**
 * @language=en
 * Create Example Class:
 * <pre>
 * var Bird = Hilo.Class.create({
 *     Extends: Animal,
 *     Mixes: EventMixin,
 *     constructor: function(name){
 *         this.name = name;
 *     },
 *     fly: function(){
 *         console.log('I am flying');
 *     },
 *     Statics: {
 *         isBird: function(bird){
 *             return bird instanceof Bird;
 *         }
 *     }
 * });
 *
 * var swallow = new Bird('swallow');
 * swallow.fly();
 * Bird.isBird(swallow);
 * </pre>
 * @namespace Class Class is created to aid the developer.
 * @static
 * @module hilo/core/Class
 */
var Class = (function(){

/**
 * @language=en
 * Create a class based on the parameters, properties and methods specified.
 * @param {Object} properties Properties and methods to create the class.
 * <ul>
 * <li><b>Extends</b> - Designed to inherit the parent class.</li>
 * <li><b>Mixes</b> - Specifies mixed member collection object.</li>
 * <li><b>Statics</b> - Static property or method specified class.</li>
 * <li><b>constructor</b> -  The constructor of specified class.</li>
 * <li>Other members of the property or method to create the class.</li>
 * </ul>
 * @returns {Object} Create classes.
 */
var create = function(properties){
    properties = properties || {};
    var clazz = properties.hasOwnProperty('constructor') ? properties.constructor : function(){};
    implement.call(clazz, properties);
    return clazz;
};

/**
 * @language=en
 * @private
 */
var implement = function(properties){
    var proto = {}, key, value;
    for(key in properties){
        value = properties[key];
        if(classMutators.hasOwnProperty(key)){
            classMutators[key].call(this, value);
        }else{
            proto[key] = value;
        }
    }

    mix(this.prototype, proto);
};

var classMutators = /** @ignore */{
    Extends: function(parent){
        var existed = this.prototype, proto = createProto(parent.prototype);
        //inherit static properites
        mix(this, parent);
        //keep existed properties
        mix(proto, existed);
        //correct constructor
        proto.constructor = this;
        //prototype chaining
        this.prototype = proto;
        //shortcut to parent's prototype
        this.superclass = parent.prototype;
    },

    Mixes: function(items){
        items instanceof Array || (items = [items]);
        var proto = this.prototype, item;

        while(item = items.shift()){
            mix(proto, item.prototype || item);
        }
    },

    Statics: function(properties){
        mix(this, properties);
    }
};

/**
 * @language=en
 * @private
 */
var createProto = (function(){
    if(Object.__proto__){
        return function(proto){
            return {__proto__: proto};
        };
    }else{
        var Ctor = function(){};
        return function(proto){
            Ctor.prototype = proto;
            return new Ctor();
        };
    }
})();

/**
 * @language=en
 * Mixed property or method.
 * @param {Object} target Mixed audiences.
 * @param {Object} source The source whose methods and properties are to be mixed. It can support multiple source parameters.
 * @returns {Object} Mixed audiences.
 */
var mix = function(target){
    for(var i = 1, len = arguments.length; i < len; i++){
        var source  = arguments[i], defineProps;
        for(var key in source){
            var prop = source[key];
            if(prop && typeof prop === 'object'){
                if(prop.value !== undefined || typeof prop.get === 'function' || typeof prop.set === 'function'){
                    defineProps = defineProps || {};
                    defineProps[key] = prop;
                    continue;
                }
            }
            target[key] = prop;
        }
        if(defineProps) defineProperties(target, defineProps);
    }

    return target;
};

var defineProperty, defineProperties;
try{
    defineProperty = Object.defineProperty;
    defineProperties = Object.defineProperties;
    defineProperty({}, '$', {value:0});
}catch(e){
    if('__defineGetter__' in Object){
        defineProperty = function(obj, prop, desc){
            if('value' in desc) obj[prop] = desc.value;
            if('get' in desc) obj.__defineGetter__(prop, desc.get);
            if('set' in desc) obj.__defineSetter__(prop, desc.set);
            return obj;
        };
        defineProperties = function(obj, props){
            for(var prop in props){
                if(props.hasOwnProperty(prop)){
                    defineProperty(obj, prop, props[prop]);
                }
            }
            return obj;
        };
    }
}

return {create:create, mix:mix};

})();


module.exports = Class;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mat3 = __webpack_require__(14).mat3;
var Class = __webpack_require__(0);

/**
 * 3x3 矩阵
 * @class
 */
var Matrix3 = Class.create( /** @lends Matrix3.prototype */{
    className: 'Matrix3',
    isMatrix3: true,
    /**
     * Creates a new identity mat3
     * @constructs
     */
    constructor: function constructor() {
        /**
         * 数据 
         * @type {Float32Array}
         */
        this.elements = mat3.create();
    },

    /**
     * Copy the values from one mat3 to this
     * @param  {Matrix3} m the source matrix
     * @return {Matrix3} this
     */
    copy: function copy(m) {
        mat3.copy(this.elements, m.elements);
        return this;
    },

    /**
     * Creates a new mat3 initialized with values from this matrix
     * @return {Matrix3} a new Matrix3
     */
    clone: function clone() {
        var m = new Matrix3();
        mat3.copy(m.elements, this.elements);
        return m;
    },

    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array} 
     */
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 9; i++) {
            array[offset + i] = elements[i];
        }
        return array;
    },

    /**
     * 从数组赋值
     * @param  {Array} array  数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Matrix3} this
     */
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 9; i++) {
            elements[i] = array[offset + i];
        }
        return this;
    },

    /**
     * Set the components of a mat3 to the given values
     * @param {Number} m00
     * @param {Number} m01
     * @param {Number} m02
     * @param {Number} m10
     * @param {Number} m11
     * @param {Number} m12
     * @param {Number} m20
     * @param {Number} m21
     * @param {Number} m22
     * @return {Matrix3} this
     */
    set: function set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        mat3.set(this.elements, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    },

    /**
     * Set this to the identity matrix
     * @return {Matrix3} this
     */
    identity: function identity() {
        mat3.identity(this.elements);
        return this;
    },

    /**
     * Transpose the values of this
     * @return {Matrix3} this
     */
    transpose: function transpose() {
        mat3.transpose(this.elements, this.elements);
        return this;
    },

    /**
     * invert a matrix
     * @param  {Matrix3} [m = this]
     * @return {Matrix3} this
     */
    invert: function invert() {
        var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

        mat3.invert(this.elements, m.elements);
        return this;
    },

    /**
     * Calculates the adjugate of a mat3
     * @param  {Matrix3} [m=this]
     * @return {Matrix3} this
     */
    adjoint: function adjoint() {
        var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

        mat3.adjoint(this.elements, m);
        return this;
    },

    /**
     * Calculates the determinant of this
     * @return {Number} 
     */
    determinant: function determinant() {
        return mat3.determinant(this.elements);
    },

    /**
     * Multiplies two matrix3's
     * @param  {Matrix3} a 
     * @param  {Matrix3} [b] 如果不传，计算 this 和 a 的乘积
     * @return {Matrix3} this
     */
    multiply: function multiply(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        mat3.multiply(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * 左乘
     * @param  {Matrix3} m
     * @return {Matrix3}  this
     */
    premultiply: function premultiply(m) {
        this.multiply(m, this);
        return this;
    },

    /**
     * Translate this by the given vector
     * @param  {Vector2} v vector to translate by
     * @return {Matrix3} this
     */
    translate: function translate(v) {
        mat3.translate(this.elements, this.elements, v.elements);
        return this;
    },

    /**
     * Rotates this by the given angle
     * @param  {Number} rad the angle to rotate the matrix by
     * @return {Matrix3} this
     */
    rotate: function rotate(rad) {
        mat3.rotate(this.elements, this.elements, rad);
        return this;
    },

    /**
     * Scales the mat3 by the dimensions in the given vec2
     * @param  {Vector2} v the vec2 to scale the matrix by
     * @return {Matrix3} this
     */
    scale: function scale(v) {
        mat3.scale(this.elements, this.elements, v.elements);
        return this;
    },

    /**
     * Creates a matrix from a vector translation
     * @param  {Vector2} v Translation vector
     * @return {Matrix3} this
     */
    fromTranslation: function fromTranslation(v) {
        mat3.fromTranslation(this.elements, v);
        return this;
    },

    /**
     * Creates a matrix from a given angle
     * @param  {Number} rad the angle to rotate the matrix by
     * @return {Matrix3} this
     */
    fromRotation: function fromRotation(rad) {
        mat3.fromRotation(this.elements, rad);
        return this;
    },

    /**
     * Creates a matrix from a vector scaling
     * @param  {Vector2} v Scaling vector
     * @return {Matrix3} this
     */
    fromScaling: function fromScaling(v) {
        mat3.fromScaling(this.elements, v);
        return this;
    },

    /**
     * Calculates a 3x3 matrix from the given quaternion
     * @param  {Quaternion} q Quaternion to create matrix from
     * @return {Matrix3} this
     */
    fromQuat: function fromQuat(q) {
        mat3.fromQuat(this.elements, q.elements);
        return this;
    },

    /**
     * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
     * @param  {Matrix4} m Mat4 to derive the normal matrix from
     * @return {Matrix3} this
     */
    normalFromMat4: function normalFromMat4(m) {
        mat3.normalFromMat4(this.elements, m.elements);
        return this;
    },

    /**
     * Copies the upper-left 3x3 values into the given mat3.
     * @param  {Matrix4} m the source 4x4 matrix
     * @return {Matrix3} this
     */
    fromMat4: function fromMat4(m) {
        mat3.fromMat4(this.elements, m.elements);
        return this;
    },

    /**
     * Returns Frobenius norm of this
     * @return {Number} Frobenius norm
     */
    frob: function frob() {
        return mat3.frob(this.elements);
    },

    /**
     * Adds two mat3's
     * @param {Matrix3} a 
     * @param {Matrix3} [b] 如果不传，计算 this 和 a 的和
     * @return {Marix4} this
     */
    add: function add(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        mat3.add(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Subtracts matrix b from matrix a
     * @param {Matrix3} a 
     * @param {Matrix3} [b] 如果不传，计算 this 和 a 的差
     * @return {Marix4} this
     */
    subtract: function subtract(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        mat3.subtract(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     * @param {Matrix3} a 
     * @param {Matrix3} [b] 如果不传，比较 this 和 a 是否相等
     * @return {Boolean}
     */
    exactEquals: function exactEquals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return mat3.exactEquals(a.elements, b.elements);
    },

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     * @param {Matrix3} a 
     * @param {Matrix3} [b] 如果不传，比较 this 和 a 是否近似相等
     * @return {Boolean}
     */
    equals: function equals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return mat3.equals(a.elements, b.elements);
    }
});

/**
 * Alias for {@link Matrix3#subtract}
 * @function
 */
Matrix3.prototype.sub = Matrix3.prototype.subtract;

/**
 * Alias for {@link Matrix3#multiply}
 * @function
 */
Matrix3.prototype.mul = Matrix3.prototype.multiply;

module.exports = Matrix3;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-unused-vars: "off" */
var DataTexture = __webpack_require__(32);
var Vector3 = __webpack_require__(5);
var Matrix3 = __webpack_require__(23);
var Matrix4 = __webpack_require__(4);

var tempVector3 = new Vector3();
var tempMatrix3 = new Matrix3();
var tempMatrix4 = new Matrix4();
var tempFloat32Array = new Float32Array([0.5, 0.5, 0.5, 1]);
var blankInfo = {
    get: function get() {
        return undefined;
    }
};

var camera = void 0;
var gl = void 0;
var lightManager = void 0;
var state = void 0;
var fog = void 0;

/**
 * 语义
 * @namespace semantic
 * @type {Object}
 */
var semantic = {
    /**
     * @type {State}
     */
    state: null,

    /**
     * @type {Camera}
     */
    camera: null,

    /**
     * @type {LightManager}
     */
    lightManager: null,

    /**
     * @type {Fog}
     */
    fog: null,

    /**
     * @type {WebGLRenderingContext}
     */
    gl: null,

    /**
     * 初始化
     * @param  {State} _state        
     * @param  {Camera} _camera       
     * @param  {LightManager} _lightManager 
     * @param  {Fog} _fog          
     */
    init: function init(_state, _camera, _lightManager, _fog) {
        state = this.state = _state;
        camera = this.camera = _camera;
        lightManager = this.lightManager = _lightManager;
        fog = this.fog = _fog;
        gl = this.gl = state.gl;
    },


    /**
     * 设置相机
     * @param {Camera} _camera
     */
    setCamera: function setCamera(_camera) {
        camera = this.camera = _camera;
    },
    handlerColorOrTexture: function handlerColorOrTexture(value, textureIndex) {
        if (value && value.isTexture) {
            var texture = value.getGLTexture(state);
            state.activeTexture(gl.TEXTURE0 + textureIndex);
            state.bindTexture(value.target, texture);
            return textureIndex;
        }
        if (value && value.isColor) {
            value.toArray(tempFloat32Array);
        } else {
            tempFloat32Array[0] = tempFloat32Array[1] = tempFloat32Array[2] = 0.5;
        }
        return tempFloat32Array;
    },


    // attributes

    /**
     * @type {semanticObject}
     */
    POSITION: {
        get: function get(mesh, material, programInfo) {
            return mesh.geometry.vertices;
        }
    },

    /**
     * @type {semanticObject}
     */
    NORMAL: {
        get: function get(mesh, material, programInfo) {
            return mesh.geometry.normals;
        }
    },

    /**
     * @type {semanticObject}
     */
    TANGENT: {
        get: function get(mesh, material, programInfo) {
            if (!mesh.material.normalMap || !mesh.material.normalMap.isTexture) {
                return undefined;
            }
            return mesh.geometry.tangents;
        }
    },

    /**
     * @type {semanticObject}
     */
    TEXCOORD_0: {
        get: function get(mesh, material, programInfo) {
            if (!mesh.geometry.uvs) {
                return undefined;
            }
            return mesh.geometry.uvs;
        }
    },

    /**
     * @type {semanticObject}
     */
    SKININDICES: {
        get: function get(mesh, material, programInfo) {
            return mesh.geometry.skinIndices;
        }
    },

    /**
     * @type {semanticObject}
     */
    SKINWEIGHTS: {
        get: function get(mesh, material, programInfo) {
            return mesh.geometry.skinWeights;
        }
    },

    // uniforms

    /**
     * @type {semanticObject}
     */
    LOCAL: {
        get: function get(mesh, material, programInfo) {
            return mesh.matrix.elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    MODEL: {
        get: function get(mesh, material, programInfo) {
            return mesh.worldMatrix.elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    VIEW: {
        get: function get(mesh, material, programInfo) {
            return camera.viewMatrix.elements;
        }
    },

    /**
     * @type {semanticObject}
     */
    PROJECTION: {
        get: function get(mesh, material, programInfo) {
            return camera.projectionMatrix.elements;
        }
    },

    /**
     * @type {semanticObject}
     */
    MODELVIEW: {
        get: function get(mesh, material, programInfo) {
            return camera.getModelViewMatrix(mesh, tempMatrix4).elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    MODELVIEWPROJECTION: {
        get: function get(mesh, material, programInfo) {
            return camera.getModelProjectionMatrix(mesh, tempMatrix4).elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    MODELINVERSE: {
        get: function get(mesh, material, programInfo) {
            return tempMatrix4.invert(mesh.worldMatrix).elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    VIEWINVERSE: {
        get: function get(mesh, material, programInfo) {
            return camera.worldMatrix.elements;
        }
    },

    /**
     * @type {semanticObject}
     */
    PROJECTIONINVERSE: {
        get: function get(mesh, material, programInfo) {
            return tempMatrix4.invert(camera.projectionMatrix).elements;
        }
    },

    /**
     * @type {semanticObject}
     */
    MODELVIEWINVERSE: {
        get: function get(mesh, material, programInfo) {
            return tempMatrix4.invert(camera.getModelViewMatrix(mesh, tempMatrix4)).elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    MODELVIEWPROJECTIONINVERSE: {
        get: function get(mesh, material, programInfo) {
            return tempMatrix4.invert(camera.getModelProjectionMatrix(mesh, tempMatrix4)).elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    MODELINVERSETRANSPOSE: {
        get: function get(mesh, material, programInfo) {
            return tempMatrix3.normalFromMat4(mesh.worldMatrix).elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    MODELVIEWINVERSETRANSPOSE: {
        get: function get(mesh, material, programInfo) {
            return tempMatrix3.normalFromMat4(camera.getModelViewMatrix(mesh, tempMatrix4)).elements;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    VIEWPORT: {
        get: function get(mesh, material, programInfo) {
            console.warn('no this semantic:', name);
        }
    },

    /**
     * @type {semanticObject}
     */
    JOINTMATRIX: {
        get: function get(mesh, material, programInfo) {
            if (mesh.isSkinedMesh) {
                return mesh.getJointMat();
            }
            console.warn('Current mesh is not SkinedMesh!', mesh.id);
            return undefined;
        },

        isDependMesh: true,
        notSupportInstanced: true
    },

    /**
     * @type {semanticObject}
     */
    JOINTMATRIXTEXTURE: {
        get: function get(mesh, material, programInfo) {
            if (mesh.isSkinedMesh) {
                mesh.updateJointMatTexture();
                return semantic.handlerColorOrTexture(mesh.jointMatTexture, programInfo.textureIndex);
            }
            console.warn('Current mesh is not SkinedMesh!', mesh.id);
            return undefined;
        },

        isDependMesh: true,
        notSupportInstanced: true
    },

    /**
     * @type {semanticObject}
     */
    JOINTMATRIXTEXTURESIZE: {
        get: function get(mesh, material, programInfo) {
            if (mesh.isSkinedMesh) {
                mesh.initJointMatTexture();
                return [mesh.jointMatTexture.width, mesh.jointMatTexture.height];
            }
            console.warn('Current mesh is not SkinedMesh!', mesh.id);
            return undefined;
        },

        isDependMesh: true,
        notSupportInstanced: true
    },

    /**
     * @type {semanticObject}
     */
    DIFFUSE: {
        get: function get(mesh, material, programInfo) {
            return semantic.handlerColorOrTexture(material.diffuse, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    SPECULAR: {
        get: function get(mesh, material, programInfo) {
            return semantic.handlerColorOrTexture(material.specular, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    EMISSION: {
        get: function get(mesh, material, programInfo) {
            return semantic.handlerColorOrTexture(material.emission, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    AMBIENT: {
        get: function get(mesh, material, programInfo) {
            return semantic.handlerColorOrTexture(material.ambient, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    NORMALMAP: {
        get: function get(mesh, material, programInfo) {
            if (!material.normalMap || !material.normalMap.isTexture) {
                return undefined;
            }
            return semantic.handlerColorOrTexture(material.normalMap, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    SHININESS: {
        get: function get(mesh, material, programInfo) {
            return material.shininess;
        }
    },

    /**
     * @type {semanticObject}
     */
    TRANSPARENCY: {
        get: function get(mesh, material, programInfo) {
            if ('transparency' in material) {
                if (material.transparency.isTexture) {
                    return semantic.handlerColorOrTexture(material.transparency, programInfo.textureIndex);
                }
                return material.transparency;
            }
            return 1;
        }
    },

    /**
     * @type {semanticObject}
     */
    SKYBOXMAP: {
        get: function get(mesh, material, programInfo) {
            if (material.skyboxMap && material.skyboxMap.isTexture) {
                return semantic.handlerColorOrTexture(material.skyboxMap, programInfo.textureIndex);
            }
            return undefined;
        }
    },

    /**
     * @type {semanticObject}
     */
    SKYBOXMATRIX: {
        get: function get(mesh, material, programInfo) {
            if (material.skyboxMap && material.skyboxMatrix) {
                return material.skyboxMatrix.elements;
            }
            tempMatrix4.identity();
            return tempMatrix4.elements;
        }
    },

    /**
     * @type {semanticObject}
     */
    REFLECTIVITY: {
        get: function get(mesh, material, programInfo) {
            return material.reflectivity;
        }
    },

    /**
     * @type {semanticObject}
     */
    REFRACTRATIO: {
        get: function get(mesh, material, programInfo) {
            return material.refractRatio;
        }
    },

    /**
     * @type {semanticObject}
     */
    REFRACTIVITY: {
        get: function get(mesh, material, programInfo) {
            return material.refractivity;
        }
    },

    // light

    /**
     * @type {semanticObject}
     */
    AMBIENTLIGHTSCOLOR: {
        get: function get(mesh, material, programInfo) {
            return lightManager.ambientInfo;
        }
    },

    /**
     * @type {semanticObject}
     */
    DIRECTIONALLIGHTSCOLOR: {
        get: function get(mesh, material, programInfo) {
            return lightManager.directionalInfo.colors;
        }
    },

    /**
     * @type {semanticObject}
     */
    DIRECTIONALLIGHTSINFO: {
        get: function get(mesh, material, programInfo) {
            return lightManager.directionalInfo.infos;
        }
    },

    /**
     * @type {semanticObject}
     */
    DIRECTIONALLIGHTSSHADOWMAP: {
        get: function get(mesh, material, programInfo) {
            var result = lightManager.directionalInfo.shadowMap.map(function (texture, i) {
                state.activeTexture(gl.TEXTURE0 + programInfo.textureIndex + i);
                state.bindTexture(gl.TEXTURE_2D, texture);
                return programInfo.textureIndex + i;
            });
            return result;
        }
    },

    /**
     * @type {semanticObject}
     */
    DIRECTIONALLIGHTSSHADOWMAPSIZE: {
        get: function get(mesh, material, programInfo) {
            return lightManager.directionalInfo.shadowMapSize;
        }
    },

    /**
     * @type {semanticObject}
     */
    DIRECTIONALLIGHTSSHADOWBIAS: {
        get: function get(mesh, material, programInfo) {
            return lightManager.directionalInfo.shadowBias;
        }
    },

    /**
     * @type {semanticObject}
     */
    DIRECTIONALLIGHTSPACEMATRIX: {
        get: function get(mesh, material, programInfo) {
            return lightManager.directionalInfo.lightSpaceMatrix;
        }
    },

    /**
     * @type {semanticObject}
     */
    POINTLIGHTSPOS: {
        get: function get(mesh, material, programInfo) {
            return lightManager.pointInfo.poses;
        }
    },

    /**
     * @type {semanticObject}
     */
    POINTLIGHTSCOLOR: {
        get: function get(mesh, material, programInfo) {
            return lightManager.pointInfo.colors;
        }
    },

    /**
     * @type {semanticObject}
     */
    POINTLIGHTSINFO: {
        get: function get(mesh, material, programInfo) {
            return lightManager.pointInfo.infos;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSPOS: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.poses;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSDIR: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.dirs;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSCOLOR: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.colors;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSCUTOFFS: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.cutOffs;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSINFO: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.infos;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSSHADOWMAP: {
        get: function get(mesh, material, programInfo) {
            var result = lightManager.spotInfo.shadowMap.map(function (texture, i) {
                state.activeTexture(gl.TEXTURE0 + programInfo.textureIndex + i);
                state.bindTexture(gl.TEXTURE_2D, texture);
                return programInfo.textureIndex + i;
            });
            return result;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSSHADOWMAPSIZE: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.shadowMapSize;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSSHADOWBIAS: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.shadowBias;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPOTLIGHTSPACEMATRIX: {
        get: function get(mesh, material, programInfo) {
            return lightManager.spotInfo.lightSpaceMatrix;
        }
    },

    // fog

    /**
     * @type {semanticObject}
     */
    FOGCOLOR: {
        get: function get(mesh, material, programInfo) {
            if (fog) {
                return fog.color.elements;
            }
            return undefined;
        }
    },

    /**
     * @type {semanticObject}
     */
    FOGINFO: {
        get: function get(mesh, material, programInfo) {
            if (fog) {
                return fog.getInfo();
            }
            return undefined;
        }
    },

    // unQuantize

    /**
     * @type {semanticObject}
     */
    POSITIONDECODEMAT: {
        get: function get(mesh, material, programInfo) {
            return mesh.geometry.positionDecodeMat;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    NORMALDECODEMAT: {
        get: function get(mesh, material, programInfo) {
            return mesh.geometry.normalDecodeMat;
        },

        isDependMesh: true
    },

    /**
     * @type {semanticObject}
     */
    UVDECODEMAT: {
        get: function get(mesh, material, programInfo) {
            return mesh.geometry.uvDecodeMat;
        },

        isDependMesh: true
    },

    // pbr

    /**
     * @type {semanticObject}
     */
    BASECOLOR: {
        get: function get(mesh, material, programInfo) {
            return material.baseColor.elements;
        }
    },

    /**
     * @type {semanticObject}
     */
    BASECOLORMAP: {
        get: function get(mesh, material, programInfo) {
            return semantic.handlerColorOrTexture(material.baseColorMap, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    METALLIC: {
        get: function get(mesh, material, programInfo) {
            return material.metallic;
        }
    },

    /**
     * @type {semanticObject}
     */
    METALLICMAP: {
        get: function get(mesh, material, programInfo) {
            return semantic.handlerColorOrTexture(material.metallicMap, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    ROUGHNESS: {
        get: function get(mesh, material, programInfo) {
            return material.roughness;
        }
    },

    /**
     * @type {semanticObject}
     */
    ROUGHNESSMAP: {
        get: function get(mesh, material, programInfo) {
            return semantic.handlerColorOrTexture(material.roughnessMap, programInfo.textureIndex);
        }
    },

    /**
     * @type {semanticObject}
     */
    METALLICROUGHNESS: {
        get: function get(mesh, material, programInfo) {
            if (material.metallicRoughness && material.metallicRoughness.isTexture) {
                return semantic.handlerColorOrTexture(material.metallicRoughness, programInfo.textureIndex);
            }
            return undefined;
        }
    },

    /**
     * @type {semanticObject}
     */
    AO: {
        get: function get(mesh, material, programInfo) {
            var ao = material.ao;
            if (ao.isTexture) {
                return semantic.handlerColorOrTexture(ao, programInfo.textureIndex);
            }
            return ao;
        }
    },

    /**
     * @type {semanticObject}
     */
    DIFFUSEENVMAP: {
        get: function get(mesh, material, programInfo) {
            var diffuseEnvMap = material.diffuseEnvMap;
            if (diffuseEnvMap && diffuseEnvMap.isCubeTexture) {
                return semantic.handlerColorOrTexture(diffuseEnvMap, programInfo.textureIndex);
            }
            return undefined;
        }
    },

    /**
     * @type {semanticObject}
     */
    BRDFLUT: {
        get: function get(mesh, material, programInfo) {
            var brdfLUT = material.brdfLUT;
            if (brdfLUT && brdfLUT.isTexture) {
                return semantic.handlerColorOrTexture(brdfLUT, programInfo.textureIndex);
            }
            return undefined;
        }
    },

    /**
     * @type {semanticObject}
     */
    SPECULARENVMAP: {
        get: function get(mesh, material, programInfo) {
            var specularEnvMap = material.specularEnvMap;
            if (specularEnvMap && specularEnvMap.isCubeTexture) {
                return semantic.handlerColorOrTexture(specularEnvMap, programInfo.textureIndex);
            }
            return undefined;
        }
    },
    GLOSSINESS: {
        get: function get(mesh, material, programInfo) {
            return material.glossiness;
        }
    },
    SPECULARGLOSSINESSMAP: {
        get: function get(mesh, material, programInfo) {
            var map = material.specularGlossinessMap;
            if (map && map.isTexture) {
                return semantic.handlerColorOrTexture(map, programInfo.textureIndex);
            }
            return undefined;
        }
    },
    // Morph Animation Uniforms
    MORPHWEIGHTS: {
        isDependMesh: true,
        notSupportInstanced: true,
        get: function get(mesh, material, programInfo) {
            var geometry = mesh.geometry;
            if (!geometry.isMorphGeometry || !geometry.weights) {
                return undefined;
            }
            return geometry.weights;
        }
    }
};

// Morph Animation Attributes
[['POSITION', 'vertices'], ['NORMAL', 'normals'], ['TANGENT', 'tangents']].forEach(function (info) {
    for (var i = 0; i < 8; i++) {
        semantic['MORPH' + info[0] + i] = {
            get: function (name, i) {
                return function (mesh, material, programInfo) {
                    var geometry = mesh.geometry;
                    if (!geometry.isMorphGeometry || !geometry.targets || !geometry.targets[name]) {
                        return undefined;
                    }
                    var idx = geometry._originalMorphIndices ? geometry._originalMorphIndices[i] : i;
                    var data = geometry.targets[name][idx];
                    var idxCacheKey = '_target_' + name + '_' + i;
                    if (geometry[idxCacheKey] !== idx) {
                        data.isDirty = true;
                        geometry[idxCacheKey] = idx;
                    }
                    return data;
                };
            }(info[1], i)
        };
    }
});

/**
 * semantic 对象
 * @typedef {object} semanticObject
 * @property {Boolean} isDependMesh 是否依赖 mesh
 * @property {Boolean} notSupportInstanced 是否不支持 instanced
 * @property {Function} get 获取数据方法
 */

module.exports = semantic;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * WebGL 扩展
 * @namespace extensions
 * @type {Object}
 */
var extensions = {
  /**
   * ANGLE_instanced_arrays扩展
   * @type {ANGLEInstancedArrays}
   */
  instanced: null,

  /**
   * OES_vertex_array_object扩展
   * @type {OESVertexArrayObject}
   */
  vao: null,

  /**
   * OES_texture_float扩展
   * @type {OESTextureFloat}
   */
  texFloat: null,

  /**
   * WEBGL_lose_context扩展
   * @typeof {WebGLLoseContext}
   */
  loseContext: null,

  _dict: null,

  /**
   * 初始化
   * @param {WebGLRenderingContext} gl
   */
  init: function init(gl) {
    this.reset(gl);
  },


  /**
   * 重置扩展
   * @param {WebGLRenderingContext} gl
   */
  reset: function reset(gl) {
    this.gl = gl;
    var neededExt = {
      instanced: 'ANGLE_instanced_arrays',
      vao: 'OES_vertex_array_object',
      texFloat: 'OES_texture_float',
      loseContext: 'WEBGL_lose_context',
      uintIndices: 'OES_element_index_uint'
    };

    this._dict = {};
    for (var name in neededExt) {
      var extName = neededExt[name];
      this[name] = this.get(extName);
    }
  },


  /**
   * 获取扩展，如果不支持返回 null
   * @param  {String} name 扩展名称
   * @return {ExtensionObject|null}
   */
  get: function get(name) {
    var gl = this.gl;
    var dict = this._dict;

    var ext = dict[name];
    if (ext === undefined) {
      ext = gl.getExtension(name) || gl.getExtension('WEBKIT_' + name) || gl.getExtension('MOZ_' + name) || null;
      dict[name] = ext;
    }
    return ext;
  }
};

module.exports = extensions;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Shader = __webpack_require__(33);
var screenVert = __webpack_require__(124);
var screenFrag = __webpack_require__(125);
var Cache = __webpack_require__(11);
var Program = __webpack_require__(40);
var VertexArrayObject = __webpack_require__(41);
var util = __webpack_require__(3);
var math = __webpack_require__(1);
var GeometryData = __webpack_require__(8);
var capabilities = __webpack_require__(16);

var _require = __webpack_require__(2),
    TEXTURE_2D = _require.TEXTURE_2D,
    RGBA = _require.RGBA,
    UNSIGNED_BYTE = _require.UNSIGNED_BYTE,
    COLOR_ATTACHMENT0 = _require.COLOR_ATTACHMENT0,
    DEPTH_STENCIL = _require.DEPTH_STENCIL,
    DEPTH_TEST = _require.DEPTH_TEST,
    CULL_FACE = _require.CULL_FACE,
    BLEND = _require.BLEND,
    TRIANGLE_STRIP = _require.TRIANGLE_STRIP;

var cache = new Cache();

/**
 * 帧缓冲
 * @class
 */
var FrameBuffer = Class.create( /** @lends FrameBuffer.prototype */{
    Statics: {
        /**
         * 缓存
         * @readOnly
         * @type {Cache}
         */
        cache: {
            get: function get() {
                return cache;
            }
        },
        /**
         * 重置所有frameBuffer
         * @param  {WebGLRenderingContext} gl 
         */
        reset: function reset(gl) {
            // eslint-disable-line no-unused-vars
            cache.each(function (frameBuffer) {
                frameBuffer.reset();
            });
        }
    },

    /**
     * @default FrameBuffer
     * @type {String}
     */
    className: 'FrameBuffer',

    /**
     * @default true
     * @type {Boolean}
     */
    isFrameBuffer: true,

    /**
     * bufferInternalFormat
     * @type {GLenum}
     * @default gl.DEPTH_STENCIL
     */
    bufferInternalFormat: DEPTH_STENCIL,

    target: TEXTURE_2D,
    /**
     * internalFormat
     * @type {GLenum}
     * @default gl.RGBA
     */
    internalFormat: RGBA,

    /**
     * format
     * @type {GLenum}
     * @default gl.RGBA
     */
    format: RGBA,

    /**
     * type
     * @type {GLenum}
     * @default gl.UNSIGNED_BYTE
     */
    type: UNSIGNED_BYTE,

    /**
     * attachment
     * @type {GLenum}
     * @default gl.COLOR_ATTACHMENT0
     */
    attachment: COLOR_ATTACHMENT0,

    /**
     * 是否需要renderBuffer
     * @type {Boolean}
     * @default true
     */
    needRenderBuffer: true,

    /**
     * 是否使用VAO
     * @type {Boolean}
     * @default true
     */
    useVao: true,

    /**
     * renderer
     * @type {Renderer}
     * @default null
     */
    renderer: null,

    /**
     * texture
     * @type {WebGLTexture}
     */
    texture: null,

    /**
     * renderBuffer
     * @type {WebGLRenderBuffer}
     */
    renderBuffer: null,

    _isInit: false,

    /**
     * @constructs
     * @param {WebGLRenderer}  renderer
     * @param  {Object} params 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(renderer, params) {
        this.id = math.generateUUID(this.className);
        this.renderer = renderer;
        Object.assign(this, params);
        cache.add(this.id, this);
    },

    /**
     * init
     * @private
     */
    init: function init() {
        if (!this._isInit && this.renderer.isInit) {
            this._isInit = true;
            var renderer = this.renderer;
            this.gl = renderer.gl;
            this.state = renderer.state;
            this.reset();
        }
    },

    /**
     * reset
     * @private
     */
    reset: function reset() {
        var gl = this.gl;
        /**
         * framebuffer
         * @type {WebGLFramebuffer}
         */
        this.framebuffer = gl.createFramebuffer();
        this.bind();
        if (this.needRenderBuffer) {
            this.renderBuffer = this.createRenderBuffer();
        }

        this.texture = this.createTexture();

        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
            console.warn('Framebuffer is not complete');
        }

        this.unbind();
    },

    /**
     * 绑定
     */
    bind: function bind() {
        this.init();
        if (this._isInit) {
            this.state.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
        }
    },

    /**
     * 解绑
     */
    unbind: function unbind() {
        this.init();
        if (this._isInit) {
            var state = this.state;
            state.bindFramebuffer(this.gl.FRAMEBUFFER, state.preFrameBuffer);
        }
    },

    /**
     * 渲染当前纹理
     * @param  {Number} [x=0]          
     * @param  {Number} [y=0]          
     * @param  {Number} [width=1]      
     * @param  {Number} [height=1]     
     * @param  {Color} clearColor 
     */
    render: function render() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var clearColor = arguments[4];

        if (this._isInit) {
            var gl = this.gl,
                state = this.state;

            state.disable(DEPTH_TEST);
            state.disable(CULL_FACE);
            state.disable(BLEND);
            if (clearColor) {
                gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }

            var shader = Shader.getCustomShader(screenVert, screenFrag, 'FrameBufferTextureShader');
            var program = Program.getProgram(shader, state);
            program.useProgram();

            var vaoId = x + '_' + y + '_' + width + '_' + height;
            var vao = VertexArrayObject.getVao(gl, vaoId, {
                useVao: this.useVao,
                useInstanced: false,
                mode: TRIANGLE_STRIP
            });

            if (vao.isDirty) {
                vao.isDirty = false;
                x = x * 2 - 1;
                y = 1 - y * 2;
                width *= 2;
                height *= 2;
                var vertices = [x, y, x + width, y, x, y - height, x + width, y - height];
                vao.addAttribute(new GeometryData(new Float32Array(vertices)), program.attributes.a_position);
                vao.addAttribute(new GeometryData(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])), program.attributes.a_texcoord0);
            }

            state.activeTexture(gl.TEXTURE0);
            state.bindTexture(gl.TEXTURE_2D, this.texture);
            vao.bind();
            vao.draw();
        }
    },

    /**
     * 生成 RenderBuffer
     * @private
     * @return {WebGLRenderBuffer}
     */
    createRenderBuffer: function createRenderBuffer() {
        var gl = this.gl,
            width = this.width,
            height = this.height;

        var renderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, renderBuffer);
        return renderBuffer;
    },

    /**
     * 生成纹理
     * @private
     * @return {WebGLTexture}
     */
    createTexture: function createTexture() {
        var state = this.state;
        var gl = state.gl;
        var texture = gl.createTexture();

        state.activeTexture(gl.TEXTURE0 + capabilities.MAX_TEXTURE_INDEX);
        state.bindTexture(this.target, texture);
        gl.texImage2D(this.target, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
        gl.texParameteri(this.target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(this.target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(this.target, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(this.target, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, this.attachment, this.target, texture, 0);

        return texture;
    },

    /**
     * 读取区域像素
     * @param  {Number} x      
     * @param  {Number} y      
     * @param  {Number} [width=1]  
     * @param  {Number} [height=1] 
     * @return {TypedArray}        
     */
    readPixels: function readPixels(x, y) {
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        var TypedArray = util.getTypedArrayClass(this.type);
        var pixels = new TypedArray(width * height * 4);

        if (this._isInit) {
            var gl = this.gl;
            // convert to webgl coordinate system
            y = this.height - y - height;

            this.bind();
            gl.readPixels(x, y, width, height, this.format, this.type, pixels);
            this.unbind();
        }

        return pixels;
    }
});

module.exports = FrameBuffer;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var semantic = __webpack_require__(24);

var _require = __webpack_require__(2),
    LESS = _require.LESS,
    BACK = _require.BACK,
    FRONT = _require.FRONT,
    FRONT_AND_BACK = _require.FRONT_AND_BACK,
    ZERO = _require.ZERO,
    ONE = _require.ONE,
    FUNC_ADD = _require.FUNC_ADD,
    ONE_MINUS_SRC_ALPHA = _require.ONE_MINUS_SRC_ALPHA,
    SRC_ALPHA = _require.SRC_ALPHA;

var blankInfo = {
    isBlankInfo: true,
    get: function get() {
        return undefined;
    }
};

/**
 * 材质基类，一般不直接使用
 * @class
 */
var Material = Class.create( /** @lends Material.prototype */{
    /**
     * @default true
     * @type {boolean}
     */
    isMaterial: true,
    /**
     * @default Material
     * @type {string}
     */
    className: 'Material',

    /**
     * 是否开启网格模式
     * @default false
     * @type {boolean}
     */
    wireframe: false,

    /**
     * 是否开启深度测试
     * @default true
     * @type {boolean}
     */
    depthTest: true,
    /**
     * 是否开启depthMask
     * @default true
     * @type {boolean}
     */
    depthMask: true,
    /**
     * 深度测试Range
     * @default [0, 1]
     * @type {Array}
     */
    depthRange: [0, 1],
    /**
     * 深度测试方法
     * @default LESS
     * @type {GLenum}
     */
    depthFunc: LESS,

    _cullFace: true,
    /**
     * 是否开启 CullFace
     * @default true
     * @type {boolean}
     */
    cullFace: {
        get: function get() {
            return this._cullFace;
        },
        set: function set(value) {
            this._cullFace = value;
            if (value) {
                this.cullFaceType = this._cullFaceType;
            } else {
                this._side = FRONT_AND_BACK;
            }
        }
    },

    _cullFaceType: BACK,
    /**
     * CullFace 类型
     * @default BACK
     * @type {GLenum}
     */
    cullFaceType: {
        get: function get() {
            return this._cullFaceType;
        },
        set: function set(value) {
            this._cullFaceType = value;
            if (this._cullFace) {
                if (value === BACK) {
                    this._side = FRONT;
                } else if (value === FRONT) {
                    this._side = BACK;
                }
            }
        }
    },

    _side: FRONT,
    /**
     * 显示面，可选值 FRONT, BACK, FRONT_AND_BACK
     * @type {GLenum}
     * @default FRONT
     */
    side: {
        get: function get() {
            return this._side;
        },
        set: function set(value) {
            if (this._side !== value) {
                this._side = value;
                if (value === FRONT_AND_BACK) {
                    this._cullFace = false;
                } else {
                    this._cullFace = true;
                    if (value === FRONT) {
                        this._cullFaceType = BACK;
                    } else if (value === BACK) {
                        this._cullFaceType = FRONT;
                    }
                }
            }
        }
    },

    /**
     * 是否开启颜色混合
     * @default false
     * @type {boolean}
     */
    blend: false,
    /**
     * 颜色混合方式
     * @default FUNC_ADD
     * @type {GLenum}
     */
    blendEquation: FUNC_ADD,
    /**
     * 透明度混合方式
     * @default FUNC_ADD
     * @type {GLenum}
     */
    blendEquationAlpha: FUNC_ADD,
    /**
     * 颜色混合来源比例
     * @default ONE
     * @type {GLenum}
     */
    blendSrc: ONE,
    /**
     * 颜色混合目标比例
     * @default ZERO
     * @type {GLenum}
     */
    blendDst: ZERO,
    /**
     * 透明度混合来源比例
     * @default ONE
     * @type {GLenum}
     */
    blendSrcAlpha: ONE,
    /**
     * 透明度混合目标比例
     * @default ONE
     * @type {GLenum}
     */
    blendDstAlpha: ZERO,

    /**
     * 当前是否需要强制更新
     * @default false
     * @type {boolean}
     */
    isDirty: false,

    _transparent: false,
    /**
     * 是否需要透明
     * @default false
     * @type {boolean}
     */
    transparent: {
        get: function get() {
            return this._transparent;
        },
        set: function set(value) {
            if (this._transparent !== value) {
                this._transparent = value;
                if (!value) {
                    this.blend = false;
                    this.depthMask = true;
                } else {
                    this.blend = true;
                    this.blendSrc = ONE;
                    this.blendDst = ONE_MINUS_SRC_ALPHA;
                    this.blendSrcAlpha = SRC_ALPHA;
                    this.blendDstAlpha = ONE_MINUS_SRC_ALPHA;
                    this.depthMask = false;
                }
            }
        }
    },

    /**
     * @constructs
     * @param {object} params 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(params) {
        var _this = this;

        /**
         * @type {string}
         */
        this.id = math.generateUUID(this.className);
        /**
         * 可以通过指定，semantic来指定值的获取方式，或者自定义get方法
         * @default {}
         * @type {object}
         */
        this.uniforms = {
            u_normalMatrix: 'MODELVIEWINVERSETRANSPOSE',
            u_modelViewMatrix: 'MODELVIEW',
            u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
            u_ambientLightsColor: 'AMBIENTLIGHTSCOLOR',
            u_directionalLightsColor: 'DIRECTIONALLIGHTSCOLOR',
            u_directionalLightsInfo: 'DIRECTIONALLIGHTSINFO',
            u_directionalLightsShadowMap: 'DIRECTIONALLIGHTSSHADOWMAP',
            u_directionalLightsShadowMapSize: 'DIRECTIONALLIGHTSSHADOWMAPSIZE',
            u_directionalLightsShadowBias: 'DIRECTIONALLIGHTSSHADOWBIAS',
            u_directionalLightSpaceMatrix: 'DIRECTIONALLIGHTSPACEMATRIX',
            u_pointLightsPos: 'POINTLIGHTSPOS',
            u_pointLightsColor: 'POINTLIGHTSCOLOR',
            u_pointLightsInfo: 'POINTLIGHTSINFO',
            u_spotLightsPos: 'SPOTLIGHTSPOS',
            u_spotLightsDir: 'SPOTLIGHTSDIR',
            u_spotLightsColor: 'SPOTLIGHTSCOLOR',
            u_spotLightsCutOffs: 'SPOTLIGHTSCUTOFFS',
            u_spotLightsInfo: 'SPOTLIGHTSINFO',
            u_spotLightsShadowMap: 'SPOTLIGHTSSHADOWMAP',
            u_spotLightsShadowMapSize: 'SPOTLIGHTSSHADOWMAPSIZE',
            u_spotLightsShadowBias: 'SPOTLIGHTSSHADOWBIAS',
            u_spotLightSpaceMatrix: 'SPOTLIGHTSPACEMATRIX',
            u_jointMat: 'JOINTMATRIX',
            u_jointMatTexture: 'JOINTMATRIXTEXTURE',
            u_jointMatTextureSize: 'JOINTMATRIXTEXTURESIZE',
            u_fogColor: 'FOGCOLOR',
            u_fogInfo: 'FOGINFO',

            // morph
            u_morphWeights: 'MORPHWEIGHTS'
        };
        /**
         * 可以通过指定，semantic来指定值的获取方式，或者自定义get方法
         * @default {}
         * @type {object}
         */
        this.attributes = {
            a_position: 'POSITION',
            a_normal: 'NORMAL',
            a_tangent: 'TANGENT',
            a_texcoord0: 'TEXCOORD_0',
            a_skinIndices: 'SKININDICES',
            a_skinWeights: 'SKINWEIGHTS'
        };

        ['POSITION', 'NORMAL', 'TANGENT'].forEach(function (name) {
            var camelName = name.slice(0, 1) + name.slice(1).toLowerCase();
            for (var i = 0; i < 8; i++) {
                _this.attributes['a_morph' + camelName + i] = 'MORPH' + name + i;
            }
        });

        Object.assign(this, params);
    },
    getRenderOption: function getRenderOption() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var lightType = this.lightType;
        option['LIGHT_TYPE_' + lightType] = 1;
        option.SIDE = this.side;
        if (option.HAS_LIGHT) {
            option.HAS_NORMAL = 1;
            if (this.normalMap) {
                option.HAS_NORMAL_MAP = 1;
                option.HAS_TEXCOORD0 = true;
            }
        }
        return option;
    },
    getInstancedUniforms: function getInstancedUniforms() {
        var instancedUniforms = this._instancedUniforms;
        if (!this._instancedUniforms) {
            var uniforms = this.uniforms;
            instancedUniforms = this._instancedUniforms = [];
            for (var name in uniforms) {
                var info = this.getUniformInfo(name);
                if (info.isDependMesh && !info.notSupportInstanced) {
                    instancedUniforms.push({
                        name: name,
                        info: info
                    });
                }
            }
        }

        return instancedUniforms;
    },
    getUniformData: function getUniformData(name, mesh, programInfo) {
        return this.getUniformInfo(name).get(mesh, this, programInfo);
    },
    getAttributeData: function getAttributeData(name, mesh) {
        return this.getAttributeInfo(name).get(mesh);
    },
    getUniformInfo: function getUniformInfo(name) {
        return this.getInfo('uniforms', name);
    },
    getAttributeInfo: function getAttributeInfo(name) {
        return this.getInfo('attributes', name);
    },
    getInfo: function getInfo(dataType, name) {
        var dataDict = this[dataType];
        var info = dataDict[name];
        if (typeof info === 'string') {
            info = semantic[info];
        }

        if (!info || !info.get) {
            console.warn('Material.getInfo: no this semantic:' + name);
            info = blankInfo;
        }

        return info;
    },

    /**
     * clone 当前Material
     * @return {Material} 返回clone的Material
     */
    clone: function clone() {
        var newMaterial = new this.constructor();
        for (var key in this) {
            if (key !== 'id') {
                newMaterial[key] = this[key];
            }
        }
        return newMaterial;
    }
});

module.exports = Material;

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec4 = __webpack_require__(14).vec4;
var Class = __webpack_require__(0);

/**
 * 四维向量
 * @class
 */
var Vector4 = Class.create( /** @lends Vector4.prototype */{
    className: 'Vector4',
    isVector4: true,
    /**
     * Creates a new empty vec4
     * @param {Number} [x=0] X component
     * @param {Number} [y=0] Y component
     * @param {Number} [z=0] Z component
     * @param {Number} [w=0] W component
     * @constructs
     */
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        /**
         * 数据 
         * @type {Float32Array}
         */
        this.elements = vec4.fromValues(x, y, z, w);
    },

    /**
     * Copy the values from one vec4 to this
     * @param  {Vector4} m the source vector
     * @return {Vector4} this
     */
    copy: function copy(v) {
        vec4.copy(this.elements, v.elements);
        return this;
    },

    /**
     * Creates a new vec4 initialized with values from this vector
     * @return {Vector4} a new Vector4
     */
    clone: function clone() {
        var elements = this.elements;
        return new Vector4(elements[0], elements[1], elements[2], elements[3]);
    },

    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array} 
     */
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        array[0 + offset] = elements[0];
        array[1 + offset] = elements[1];
        array[2 + offset] = elements[2];
        array[3 + offset] = elements[3];
        return array;
    },

    /**
     * 从数组赋值
     * @param  {Array} array  数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Vector4} this
     */
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        elements[0] = array[offset + 0];
        elements[1] = array[offset + 1];
        elements[2] = array[offset + 2];
        elements[3] = array[offset + 3];
        return this;
    },

    /**
     * Set the components of a vec4 to the given values
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {Vector4} this
     */
    set: function set(x, y, z, w) {
        vec4.set(this.elements, x, y, z, w);
        return this;
    },

    /**
     * Adds two vec4's
     * @param {Vector4} a 
     * @param {Vector4} [b] 如果不传，计算 this 和 a 的和
     * @returns {Vector4} this
     */
    add: function add(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.add(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Subtracts vector b from vector a
     * @param {Vector4} a 
     * @param {Vector4} [b] 如果不传，计算 this 和 a 的差
     * @returns {Vector4} this
     */
    subtract: function subtract(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.subtract(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Multiplies two vec4's
     * @param {Vector4} a 
     * @param {Vector4} [b] 如果不传，计算 this 和 a 的积
     * @returns {Vector4} this
     */
    multiply: function multiply(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.multiply(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Divides two vec4's
     * @param {Vector4} a 
     * @param {Vector4} [b] 如果不传，计算 this 和 a 的商
     * @returns {Vector4} this
     */
    divide: function divide(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.divide(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Math.ceil the components of this
     * @returns {Vector4} this
     */
    ceil: function ceil() {
        vec4.ceil(this.elements, this.elements);
        return this;
    },

    /**
     * Math.floor the components of this
     * @returns {Vector4} this
     */
    floor: function floor() {
        vec4.floor(this.elements, this.elements);
        return this;
    },

    /**
     * Returns the minimum of two vec4's
     * @param  {Vector4} a
     * @param  {Vector4} [b] 如果不传，计算 this 和 a 的结果
     * @returns {Vector4} this
     */
    min: function min(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.min(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Returns the maximum of two vec4's
     * @param  {Vector4} a
     * @param  {Vector4} [b]  如果不传，计算 this 和 a 的结果
     * @returns {Vector4} this
     */
    max: function max(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.max(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Math.round the components of this
     * @returns {Vector4} this
     */
    round: function round() {
        vec4.round(this.elements, this.elements);
        return this;
    },

    /**
     * Scales this by a scalar number
     * @param  {Vector4} scale amount to scale the vector by
     * @returns {Vector4} this
     */
    scale: function scale(_scale) {
        vec4.scale(this.elements, this.elements, _scale);
        return this;
    },

    /**
     * Adds two vec4's after scaling the second vector by a scalar value
     * @param  {Vector4} scale the amount to scale the second vector by before adding
     * @param  {Vector4} a    
     * @param  {Vector4} [b] 如果不传，计算 this 和 a 的结果
     * @returns {Vector4} this
     */
    scaleAndAdd: function scaleAndAdd(scale, a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.scaleAndAdd(this.elements, a.elements, b.elements, scale);
        return this;
    },

    /**
     * Calculates the euclidian distance between two vec4's
     * @param  {Vector4} a
     * @param  {Vector4} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number} distance between a and b
     */
    distance: function distance(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec4.distance(a.elements, b.elements);
    },

    /**
     * Calculates the squared euclidian distance between two vec4's
     * @param  {Vector4} a
     * @param  {Vector4} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number} squared distance between a and b
     */
    squaredDistance: function squaredDistance(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec4.distance(a.elements, b.elements);
    },

    /**
     * Calculates the length of this
     * @return {Number} length of this
     */
    length: function length() {
        return vec4.length(this.elements);
    },

    /**
     * Calculates the squared length of this
     * @return {Number} squared length of this
     */
    squaredLength: function squaredLength() {
        return vec4.squaredLength(this.elements);
    },

    /**
     * Negates the components of this
     * @returns {Vector4} this
     */
    negate: function negate() {
        vec4.negate(this.elements, this.elements);
        return this;
    },

    /**
     * Returns the inverse of the components of a vec4
     * @param  {Vector4} [a=this]
     * @returns {Vector4} this
     */
    inverse: function inverse(a) {
        if (!a) {
            a = this;
        }
        vec4.inverse(this.elements, a.elements);
        return this;
    },

    /**
     * Normalize this
     * @returns {Vector4} this
     */
    normalize: function normalize() {
        vec4.normalize(this.elements, this.elements);
        return this;
    },

    /**
     * Calculates the dot product of two vec4's
     * @param  {Vector4} a
     * @param  {Vector4} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number}  product of a and b
     */
    dot: function dot(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec4.dot(a.elements, b.elements);
    },

    /**
     * Performs a linear interpolation between two vec4's
     * @param  {Vector4} v 
     * @param  {Number} t interpolation amount between the two vectors
     * @returns {Vector4} this
     */
    lerp: function lerp(v, t) {
        vec4.lerp(this.elements, this.elements, v.elements, t);
        return this;
    },

    /**
     * Generates a random vector with the given scale
     * @param  {Number} [scale=1] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {Vector4} this
     */
    random: function random(scale) {
        vec4.random(this.elements, scale);
        return this;
    },

    /**
     * Transforms the vec4 with a mat4
     * @param  {Matrix4} m matrix to transform with
     * @returns {Vector4} this
     */
    transformMat4: function transformMat4(m) {
        vec4.transformMat4(this.elements, this.elements, m.elements);
        return this;
    },

    /**
     * Transforms the vec4 with a quat
     * @param  {Quaternion} q quaternion to transform with
     * @returns {Vector4} this
     */
    transformQuat: function transformQuat(q) {
        vec4.transformQuat(this.elements, q.elements);
        return this;
    },

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     * @param  {Vector4} a
     * @param  {Vector4} [b] 如果不传，计算 this 和 a 的结果
     * @return {Boolean} True if the vectors are equal, false otherwise.
     */
    exactEquals: function exactEquals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec4.exactEquals(a.elements, b.elements);
    },

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     * @param  {Vector4} a
     * @param  {Vector4} [b] 如果不传，计算 this 和 a 的结果
     * @return {Boolean} True if the vectors are equal, false otherwise.  
     */
    equals: function equals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec4.equals(a.elements, b.elements);
    },

    /**
     * X component
     * @type {Number}
     */
    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    /**
     * Y component
     * @type {Number}
     */
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    },
    /**
     * Z component
     * @type {Number}
     */
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
        }
    },
    /**
     * W component
     * @type {Number}
     */
    w: {
        get: function get() {
            return this.elements[3];
        },
        set: function set(value) {
            this.elements[3] = value;
        }
    }
});

/**
 * Alias for {@link Vector4#subtract}
 * @function
 */
Vector4.prototype.sub = Vector4.prototype.subtract;

/**
 * Alias for {@link Vector4#multiply}
 * @function
 */
Vector4.prototype.mul = Vector4.prototype.multiply;

/**
 * Alias for {@link Vector4#divide}
 * @function
 */
Vector4.prototype.div = Vector4.prototype.divide;

/**
 * Alias for {@link Vector4#distance}
 * @function
 */
Vector4.prototype.dist = Vector4.prototype.distance;

/**
 * Alias for {@link Vector4#squaredDistance}
 * @function
 */
Vector4.prototype.sqrDist = Vector4.prototype.squaredDistance;

/**
 * Alias for {@link Vector4#length}
 * @function
 */
Vector4.prototype.len = Vector4.prototype.length;

/**
 * Alias for {@link Vector4#squaredLength}
 * @function
 */
Vector4.prototype.sqrLen = Vector4.prototype.squaredLength;

module.exports = Vector4;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var Matrix4 = __webpack_require__(4);

var tempMatrix = new Matrix4();

/**
 * @class
 */
var Euler = Class.create( /** @lends Euler.prototype */{
    className: 'Euler',
    isEuler: true,
    /**
     * @constructs
     * @param  {Number} [x=0]  X component
     * @param  {Number} [y=0]  Y component
     * @param  {Number} [z=0]  Z component
     */
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        this.elements = [x, y, z];
    },

    /**
     * Set the components of a euler to the given values
     * @param {Number} x X component
     * @param {Number} y X component
     * @param {Number} z Z component
     * @return {Euler} this
     */
    set: function set(x, y, z) {
        this.elements[0] = x;
        this.elements[1] = y;
        this.elements[2] = z;
        return this;
    },

    /**
     * 从数组赋值
     * @param  {Array} array  数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Euler} this
     */
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        this.elements[0] = array[offset];
        this.elements[0 + 1] = array[offset + 1];
        this.elements[0 + 2] = array[offset + 2];
        return this;
    },

    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array} 
     */
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        array[offset] = this.elements[0];
        array[offset + 1] = this.elements[0 + 1];
        array[offset + 2] = this.elements[0 + 2];
        return array;
    },

    /**
     * Creates a euler from the given 4x4 rotation matrix.
     * @param  {Matrix4} mat rotation matrix
     * @return {Euler} this
     */
    fromMat4: function fromMat4(mat) {
        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToEuler/index.htm

        var elements = mat.elements;
        var m11 = elements[0];
        var m21 = elements[1];
        var m31 = elements[2];
        var m12 = elements[4];
        var m22 = elements[5];
        var m32 = elements[6];
        // const m13 = elements[8];
        // const m23 = elements[9];
        var m33 = elements[10];

        this.y = Math.asin(-math.clamp(m31, -1, 1));
        if (Math.abs(m31) < 0.99999) {
            this.x = Math.atan2(m32, m33);
            this.z = Math.atan2(m21, m11);
        } else {
            this.x = 0;
            this.z = Math.atan2(-m12, m22);
        }

        return this;
    },

    /**
     * Creates a euler from the given quat.
     * @param  {Quaternion} quat
     * @return {Euler} this
     */
    fromQuat: function fromQuat(quat) {
        tempMatrix.fromQuat(quat);
        return this.fromMat4(tempMatrix);
    },

    /**
     * X component
     * @type {Number}
     */
    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    /**
     * Y component
     * @type {Number}
     */
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    },
    /**
     * Z component
     * @type {Number}
     */
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
        }
    }
});

module.exports = Euler;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var Texture = __webpack_require__(15);
var util = __webpack_require__(3);

var _require = __webpack_require__(2),
    TEXTURE_2D = _require.TEXTURE_2D,
    RGBA = _require.RGBA,
    NEAREST = _require.NEAREST,
    CLAMP_TO_EDGE = _require.CLAMP_TO_EDGE,
    FLOAT = _require.FLOAT;

/**
 * 数据纹理
 * @class
 * @extends Texture
 */


var DataTexture = Class.create( /** @lends DataTexture.prototype */{
  Extends: Texture,
  /**
   * @default true
   * @type {boolean}
   */
  isDataTexture: true,
  /**
   * @default DataTexture
   * @type {string}
   */
  className: 'DataTexture',

  /**
   * @default TEXTURE_2D
   * @type {number}
   */
  target: TEXTURE_2D,
  /**
   * @default RGBA
   * @type {number}
   */
  internalFormat: RGBA,
  /**
   * @default RGBA
   * @type {number}
   */
  format: RGBA,
  /**
   * @default FLOAT
   * @type {number}
   */
  type: FLOAT,

  /**
   * @default NEAREST
   * @type {number}
   */
  magFilter: NEAREST,
  /**
   * @default NEAREST
   * @type {number}
   */
  minFilter: NEAREST,
  /**
   * @default CLAMP_TO_EDGE
   * @type {number}
   */
  wrapS: CLAMP_TO_EDGE,
  /**
   * @default CLAMP_TO_EDGE
   * @type {number}
   */
  wrapT: CLAMP_TO_EDGE,
  dataLength: 0,

  resetSize: function resetSize(dataLen) {
    if (dataLen === this.dataLength) {
      return;
    }
    this.dataLength = dataLen;
    var pixelCount = math.nextPowerOfTwo(dataLen / 4);
    var n = Math.max(Math.log2(pixelCount), 4);
    var w = Math.floor(n / 2);
    var h = n - w;
    this.width = Math.pow(2, w);
    this.height = Math.pow(2, h);
    this.DataClass = util.getTypedArrayClass(this.type);
  },


  /**
   * 数据，改变数据的时候会自动更新Texture
   * @type {Float32Array}
   */
  data: {
    get: function get() {
      return this.image;
    },
    set: function set(_data) {
      if (this.image !== _data) {
        this.resetSize(_data.length);
        var len = this.width * this.height * 4;
        if (len === _data.length && _data instanceof this.DataClass) {
          this.image = _data;
        } else {
          if (!this.image || this.image.length !== len) {
            this.image = new this.DataClass(len);
          }
          this.image.set(_data, 0);
        }
        this.needUpdate = true;
      }
    }
  },

  _uploadTexture: function _uploadTexture(state) {
    state.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
  },

  /**
   * @constructs
   * @param {object} [params] 初始化参数，所有params都会复制到实例上
   * @param {Array|Float32Array} [params.data] 数据
   */
  constructor: function constructor(params) {
    DataTexture.superclass.constructor.call(this, params);
  }
});

module.exports = DataTexture;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var Cache = __webpack_require__(11);
var capabilities = __webpack_require__(16);
var basicFragCode = __webpack_require__(113);
var basicVertCode = __webpack_require__(114);
var depthFragCode = __webpack_require__(117);
var pbrFragCode = __webpack_require__(118);

var cache = new Cache();

/**
 * Shader类
 * @class
 */
var Shader = Class.create( /** @lends Shader.prototype */{
    /**
     * @default true
     * @type {boolean}
     */
    isShader: true,
    /**
     * @default Shader
     * @type {string}
     */
    className: 'Shader',
    /**
     * vs 顶点代码
     * @default ''·
     * @type {String}
     */
    vs: '',
    /**
     * vs 片段代码
     * @default ''
     * @type {String}
     */
    fs: '',

    Statics: /** @lends Shader */{
        /**
         * 内部的所有shader块字符串，可以用来拼接glsl代码
         * @type {Object}
         */
        shaders: {
            'diffuse.frag': __webpack_require__(56),
            'diffuse_main.frag': __webpack_require__(64),
            'fog.frag': __webpack_require__(36),
            'fog_main.frag': __webpack_require__(38),
            'joint.vert': __webpack_require__(67),
            'joint_main.vert': __webpack_require__(72),
            'light.frag': __webpack_require__(34),
            'lightFog.vert': __webpack_require__(70),
            'lightFog_main.vert': __webpack_require__(75),
            'phong.frag': __webpack_require__(61),
            'phong_main.frag': __webpack_require__(65),
            'normal.vert': __webpack_require__(69),
            'normal_main.vert': __webpack_require__(74),
            'precision.vert': __webpack_require__(39),
            'precision.frag': __webpack_require__(20),
            'transparency.frag': __webpack_require__(35),
            'transparency_main.frag': __webpack_require__(37),
            'unQuantize.vert': __webpack_require__(66),
            'unQuantize_main.vert': __webpack_require__(71),
            'uv.vert': __webpack_require__(68),
            'uv_main.vert': __webpack_require__(73),

            'getDiffuse.glsl': __webpack_require__(57),
            'getPointAttenuation.glsl': __webpack_require__(59),
            'getShadow.glsl': __webpack_require__(60),
            'getSpecular.glsl': __webpack_require__(58)
        },

        /**
         * 初始化
         * @param  {WebGLRenderer} renderer
         */
        init: function init(renderer) {
            this.renderer = renderer;
            this.commonHeader = this._getCommonHeader(this.renderer);
        },


        /**
         * 缓存
         * @readOnly
         * @type {Cache}
         */
        cache: {
            get: function get() {
                return cache;
            }
        },

        /**
         * 重置
         */
        reset: function reset(gl) {
            // eslint-disable-line no-unused-vars
            cache.removeAll();
        },


        /**
         * 获取header
         * @param {Mesh} mesh
         * @param {Material} material
         * @param {LightManager} lightManager
         * @param {Fog} fog
         * @return {String}
         */
        getHeader: function getHeader(mesh, material, lightManager, fog) {
            var headers = {};
            var lightType = material.lightType;
            if (lightType && lightType !== 'NONE') {
                lightManager.getRenderOption(headers);
            }
            material.getRenderOption(headers);
            mesh.getRenderOption(headers);

            if (fog) {
                headers.HAS_FOG = 1;
            }

            if (headers.HAS_NORMAL && headers.HAS_NORMAL_MAP) {
                headers.HAS_TANGENT = 1;
            }

            return Object.keys(headers).map(function (name) {
                return '#define HILO_' + name + ' ' + headers[name];
            }).join('\n') + '\n';
        },
        _getCommonHeader: function _getCommonHeader(renderer) {
            var vertexPrecision = capabilities.getMaxPrecision(capabilities.MAX_VERTEX_PRECISION, renderer.vertexPrecision);
            var fragmentPrecision = capabilities.getMaxPrecision(capabilities.MAX_FRAGMENT_PRECISION, renderer.fragmentPrecision);
            var precision = capabilities.getMaxPrecision(vertexPrecision, fragmentPrecision);
            return '\n#define HILO_MAX_PRECISION ' + precision + '\n#define HILO_MAX_VERTEX_PRECISION ' + vertexPrecision + '\n#define HILO_MAX_FRAGMENT_PRECISION ' + fragmentPrecision + '\n';
        },

        /**
         * 获取 shader
         * @param {Mesh} mesh
         * @param {Material} material      
         * @param {Boolean} isUseInstance 
         * @param {LightManager} lightManager  
         * @param {Fog} fog
         * @return {Shader}
         */
        getShader: function getShader(mesh, material, isUseInstance, lightManager, fog) {
            if (material.isBasicMaterial || material.isPBRMaterial) {
                return this.getBasicShader(mesh, material, isUseInstance, lightManager, fog);
            }
            if (material.isShaderMaterial) {
                return this.getCustomShader(material.vs, material.fs, material.id);
            }
            return null;
        },

        /**
         * 获取基础 shader
         * @param  {Material}  material
         * @param  {Boolean} isUseInstance
         * @param  {LightManager}  lightManager
         * @param  {Fog}  fog
         * @return {Shader}
         */
        getBasicShader: function getBasicShader(mesh, material, isUseInstance, lightManager, fog) {
            var headerKey = 'header_' + material.id + '_' + lightManager.lightInfo.uid;
            if (mesh.isSkinedMesh) {
                headerKey += '_joint' + mesh.jointNames.length;
            }
            if (fog) {
                headerKey += '_fog';
            }
            if (mesh.geometry.isMorphGeometry) {
                headerKey += '_' + mesh.geometry.id;
            }

            var header = cache.get(headerKey);
            if (!header || material.isDirty) {
                header = Shader.getHeader(mesh, material, lightManager, fog);
                cache.add(headerKey, header);
            }

            var instancedUniforms = [];
            if (isUseInstance) {
                instancedUniforms = material.getInstancedUniforms().map(function (x) {
                    return x.name;
                });
            }
            instancedUniforms = instancedUniforms.join('|');
            var key = material.className + ':' + instancedUniforms + ':' + header;

            var shader = cache.get(key);
            if (!shader) {
                var fs = header;
                var vs = header;

                if (material.isBasicMaterial) {
                    if (material.isShadowMaterial) {
                        fs += depthFragCode;
                    } else {
                        fs += basicFragCode;
                    }
                    vs += basicVertCode;
                } else if (material.isPBRMaterial) {
                    fs += pbrFragCode;
                    vs += basicVertCode;
                }

                if (instancedUniforms) {
                    var instancedUniformsReg = new RegExp('^\\s*uniform\\s+(\\w+)\\s+(' + instancedUniforms + ');', 'gm');
                    vs = vs.replace(instancedUniformsReg, 'attribute $1 $2;');
                }

                shader = this.getCustomShader(vs, fs, key);
            }
            return shader;
        },

        /**
         * 获取自定义shader
         * @param  {String} vs 顶点代码       
         * @param  {String} fs 片段代码     
         * @param  {String} [cacheKey] 如果有，会以此值缓存 shader
         * @return {Shader}
         */
        getCustomShader: function getCustomShader(vs, fs, cacheKey) {
            var shader = cache.get(cacheKey);
            var commonHeader = this.commonHeader;
            if (!shader) {
                shader = new Shader({
                    vs: commonHeader + vs,
                    fs: commonHeader + fs
                });

                if (cacheKey) {
                    cache.add(cacheKey, shader);
                }
            }

            return shader;
        }
    },

    /**
     * @constructs
     * @param  {Object} params 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);
        Object.assign(this, params);
    }
});

module.exports = Shader;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_DIRECTIONAL_LIGHTS\n    uniform vec3 u_directionalLightsColor[HILO_DIRECTIONAL_LIGHTS];\n    uniform vec3 u_directionalLightsInfo[HILO_DIRECTIONAL_LIGHTS];\n    #ifdef HILO_DIRECTIONAL_LIGHTS_SMC\n        uniform sampler2D u_directionalLightsShadowMap[HILO_DIRECTIONAL_LIGHTS_SMC];\n        uniform vec2 u_directionalLightsShadowMapSize[HILO_DIRECTIONAL_LIGHTS_SMC];\n        uniform mat4 u_directionalLightSpaceMatrix[HILO_DIRECTIONAL_LIGHTS_SMC];\n        uniform vec2 u_directionalLightsShadowBias[HILO_DIRECTIONAL_LIGHTS_SMC];\n    #endif\n#endif\n\n#ifdef HILO_SPOT_LIGHTS\n    uniform vec3 u_spotLightsPos[HILO_SPOT_LIGHTS];\n    uniform vec3 u_spotLightsDir[HILO_SPOT_LIGHTS];\n    uniform vec3 u_spotLightsColor[HILO_SPOT_LIGHTS];\n    uniform vec2 u_spotLightsCutOffs[HILO_SPOT_LIGHTS];\n    uniform vec3 u_spotLightsInfo[HILO_SPOT_LIGHTS];\n    #ifdef HILO_SPOT_LIGHTS_SMC\n        uniform sampler2D u_spotLightsShadowMap[HILO_SPOT_LIGHTS_SMC];\n        uniform vec2 u_spotLightsShadowMapSize[HILO_SPOT_LIGHTS_SMC];\n        uniform mat4 u_spotLightSpaceMatrix[HILO_SPOT_LIGHTS_SMC];\n        uniform vec2 u_spotLightsShadowBias[HILO_SPOT_LIGHTS_SMC];\n    #endif\n#endif\n\n#ifdef HILO_POINT_LIGHTS\n    uniform vec3 u_pointLightsPos[HILO_POINT_LIGHTS];\n    uniform vec3 u_pointLightsColor[HILO_POINT_LIGHTS];\n    uniform vec3 u_pointLightsInfo[HILO_POINT_LIGHTS];\n#endif\n\n#ifdef HILO_AMBIENT_LIGHTS\n    uniform vec3 u_ambientLightsColor;\n#endif\n\n" + __webpack_require__(57) + "\n" + __webpack_require__(58) + "\n" + __webpack_require__(59) + "\n" + __webpack_require__(60) + ""

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_TRANSPARENCY_MAP\n    uniform sampler2D u_transparency;\n#else\n    uniform float u_transparency;\n#endif"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_FOG\n    varying float v_dist;\n    uniform vec4 u_fogColor;\n    uniform vec2 u_fogInfo;\n#endif"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nfloat transparency = 1.0;\n#ifdef HILO_TRANSPARENCY_MAP\n    transparency = texture2D(u_transparency, v_texcoord0).r;\n#else\n    transparency = u_transparency;\n#endif\ncolor = vec4(color.rgb * color.a * transparency, color.a * transparency);"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_FOG\n    float fogFactor = (u_fogInfo.y - v_dist)/(u_fogInfo.y - u_fogInfo.x);\n    if(fogFactor < 0.0){\n        fogFactor = 0.0;\n    }\n    else if(fogFactor > 1.0){\n        fogFactor = 1.0;\n    }\n    color = fogFactor * color + (1.0 - fogFactor) * u_fogColor;\n#endif"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision HILO_MAX_VERTEX_PRECISION float;\n#define GLSLIFY 1\n#endif"

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var Cache = __webpack_require__(11);
var glType = __webpack_require__(76);
var extensions = __webpack_require__(25);

var cache = new Cache();

/**
 * @class
 */
var Program = Class.create( /** @lends Program.prototype */{
    Statics: /** @lends Program */{
        /**
         * 缓存
         * @readOnly
         * @return {Cache}
         */
        cache: {
            get: function get() {
                return cache;
            }
        },
        /**
         * 重置缓存
         */
        reset: function reset(gl) {
            // eslint-disable-line no-unused-vars
            cache.removeAll();
        },

        /**
         * 获取程序
         * @param  {Shader} shader
         * @param  {State} state
         * @return {Program}
         */
        getProgram: function getProgram(shader, state) {
            var id = shader.id;
            var program = cache.get(id);
            if (!program) {
                program = new Program({
                    state: state,
                    vertexShader: shader.vs,
                    fragShader: shader.fs
                });
                cache.add(id, program);
            }

            return program;
        }
    },

    /**
     * @default Program
     * @type {String}
     */
    className: 'Program',

    /**
     * @default true
     * @type {Boolean}
     */
    isProgram: true,

    /**
     * state
     * @type {State}
     * @default null
     */
    state: null,

    /**
     * 片段代码
     * @type {String}
     * @default ''
     */
    fragShader: '',

    /**
     * 顶点代码
     * @type {String}
     * @default ''
     */
    vertexShader: '',

    /**
     * @constructs
     * @param  {Object} params 初始化参数，所有params都会复制到实例上
     * @param  {State} params.state WebGL state
     */
    constructor: function constructor(params) {
        /**
         * id
         * @type {String}
         */
        this.id = math.generateUUID(this.className);
        Object.assign(this, params);
        this._dict = {};

        /**
         * attribute 集合
         * @type {Object}
         */
        this.attributes = {};

        /**
         * uniform 集合
         * @type {Object}
         */
        this.uniforms = {};
        this.gl = this.state.gl;
        this.program = this.createProgram();
        this.initAttributes();
        this.initUniforms();
    },


    /**
     * 生成 program
     * @return {WebGLProgram}
     */
    createProgram: function createProgram() {
        var gl = this.gl;
        var program = gl.createProgram();
        var vertexShader = this.createShader(gl.VERTEX_SHADER, this.vertexShader);
        var fragShader = this.createShader(gl.FRAGMENT_SHADER, this.fragShader);

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragShader);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            var error = gl.getProgramInfoLog(program);
            console.error('compileProgramError: ' + error);
            gl.deleteProgram(program);
            return null;
        }

        return program;
    },

    /**
     * 使用 program
     */
    useProgram: function useProgram() {
        this.state.useProgram(this.program);
    },

    /**
     * 生成 shader
     * @param  {Number} shaderType
     * @param  {String} code
     * @return {WebGLShader}
     */
    createShader: function createShader(shaderType, code) {
        var gl = this.gl;
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, code);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            var error = gl.getShaderInfoLog(shader);
            console.error('compileShaderError: ' + error);
            return null;
        }

        return shader;
    },

    /**
     * 初始化 attribute 信息
     */
    initAttributes: function initAttributes() {
        var _this = this;

        var gl = this.gl;
        var program = this.program;

        var num = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        var instancedExtension = extensions.instanced;

        var _loop = function _loop(i) {
            var _gl$getActiveAttrib = gl.getActiveAttrib(program, i),
                name = _gl$getActiveAttrib.name,
                type = _gl$getActiveAttrib.type,
                size = _gl$getActiveAttrib.size;

            var location = gl.getAttribLocation(program, name);
            var glTypeInfo = glType.get(type);
            var pointer = function pointer(_ref) {
                var _ref$type = _ref.type,
                    type = _ref$type === undefined ? gl.FLOAT : _ref$type,
                    _ref$normalized = _ref.normalized,
                    normalized = _ref$normalized === undefined ? false : _ref$normalized,
                    _ref$stride = _ref.stride,
                    stride = _ref$stride === undefined ? 0 : _ref$stride,
                    _ref$offset = _ref.offset,
                    offset = _ref$offset === undefined ? 0 : _ref$offset;

                gl.vertexAttribPointer(location, glTypeInfo.size, type, normalized, stride, offset);
            };
            var enable = function enable() {
                gl.enableVertexAttribArray(location);
            };
            var divisor = function divisor() {};
            var addTo = function addTo(array, data) {
                array[location] = data;
            };

            if (instancedExtension) {
                divisor = function divisor() {
                    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

                    instancedExtension.vertexAttribDivisorANGLE(location, d);
                };
            }

            if (glTypeInfo.type === 'Matrix') {
                var matrixStride = glTypeInfo.byteSize;
                var _size = glTypeInfo.size;
                var matSize = Math.sqrt(_size);
                var vectorByteSize = matSize * 4;

                var each = function each(callback) {
                    for (var _i = 0; _i < matSize; _i++) {
                        callback(location + _i, _i);
                    }
                };
                pointer = function pointer(_ref2) {
                    var _ref2$type = _ref2.type,
                        type = _ref2$type === undefined ? gl.FLOAT : _ref2$type,
                        _ref2$normalized = _ref2.normalized,
                        normalized = _ref2$normalized === undefined ? false : _ref2$normalized,
                        _ref2$stride = _ref2.stride,
                        stride = _ref2$stride === undefined ? 0 : _ref2$stride,
                        _ref2$offset = _ref2.offset,
                        offset = _ref2$offset === undefined ? 0 : _ref2$offset;

                    var realStride = void 0;
                    if (stride === 0) {
                        realStride = matrixStride;
                    } else {
                        realStride = stride;
                    }
                    each(function (location, i) {
                        gl.vertexAttribPointer(location, matSize, type, normalized, realStride, offset + vectorByteSize * i);
                    });
                };

                enable = function enable() {
                    each(function (location) {
                        gl.enableVertexAttribArray(location);
                    });
                };

                addTo = function addTo(array, data) {
                    each(function (location) {
                        array[location] = data;
                    });
                };

                if (instancedExtension) {
                    divisor = function divisor() {
                        var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

                        each(function (location) {
                            instancedExtension.vertexAttribDivisorANGLE(location, d);
                        });
                    };
                }
            }
            _this.attributes[name] = {
                name: name,
                location: location,
                type: type,
                size: size,
                glTypeInfo: glTypeInfo,
                pointer: pointer,
                enable: enable,
                divisor: divisor,
                addTo: addTo
            };
        };

        for (var i = 0; i < num; i++) {
            _loop(i);
        }
    },

    /**
     * 初始化 uniform 信息
     */
    initUniforms: function initUniforms() {
        var _this2 = this;

        var gl = this.gl;
        var program = this.program;

        var num = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        var textureIndex = 0;

        var _loop2 = function _loop2(i) {
            var _gl$getActiveUniform = gl.getActiveUniform(program, i),
                name = _gl$getActiveUniform.name,
                size = _gl$getActiveUniform.size,
                type = _gl$getActiveUniform.type;

            name = name.replace('[0]', '');
            var location = gl.getUniformLocation(program, name);
            var glTypeInfo = glType.get(type);
            var uniformArray = glTypeInfo.uniformArray,
                uniform = glTypeInfo.uniform;


            _this2.uniforms[name] = {
                name: name,
                location: location,
                type: type,
                size: size,
                glTypeInfo: glTypeInfo
            };

            if (type === gl.SAMPLER_2D || type === gl.SAMPLER_CUBE) {
                _this2.uniforms[name].textureIndex = textureIndex;
                textureIndex += size;
            }

            Object.defineProperty(_this2, name, {
                set: glTypeInfo.size > 1 || size > 1 ? function (value) {
                    uniformArray(location, value);
                } : function (value) {
                    if (_this2._dict[name] !== value) {
                        _this2._dict[name] = value;
                        uniform(location, value);
                    }
                }
            });
        };

        for (var i = 0; i < num; i++) {
            _loop2(i);
        }
    }
});

module.exports = Program;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var extensions = __webpack_require__(25);
var Buffer = __webpack_require__(77);
var bufferUtil = __webpack_require__(123);
var Cache = __webpack_require__(11);
var GeometryData = __webpack_require__(8);

var _require = __webpack_require__(2),
    TRIANGLES = _require.TRIANGLES;

var globalStates = [];
var currentVao = null;
var cache = new Cache();

/**
 * VAO
 * @class
 */
var VertexArrayObject = Class.create( /** @lends VertexArrayObject.prototype */{
    Statics: {
        /**
         * 缓存
         * @readOnly
         * @return {Cache}
         */
        cache: {
            get: function get() {
                return cache;
            }
        },
        /**
         * 获取 vao
         * @param  {WebGLRenderingContext} gl     
         * @param  {String} id  缓存id  
         * @param  {Object} params 
         * @return {VertexArrayObject}        
         */
        getVao: function getVao(gl, id, params) {
            var vao = cache.get(id);
            if (!vao) {
                vao = new VertexArrayObject(gl, id, params);
                cache.add(id, vao);
            }

            return vao;
        },

        /**
         * 重置所有vao
         * @param  {WebGLRenderingContext} gl 
         */
        reset: function reset(gl) {
            // eslint-disable-line no-unused-vars
            currentVao = null;
            globalStates = [];
            this.bindSystemVao();
            cache.removeAll();
        },

        /**
         * 绑定系统vao
         */
        bindSystemVao: function bindSystemVao() {
            if (extensions.vao) {
                extensions.vao.bindVertexArrayOES(null);
            }
        }
    },

    /**
     * @default VertexArrayObject
     * @type {String}
     */
    className: 'VertexArrayObject',

    /**
     * @default true
     * @type {Boolean}
     */
    isVertexArrayObject: true,

    /**
     * 顶点数量
     * @type {Number}
     * @private
     */
    vertexCount: null,

    /**
     * 是否使用 vao
     * @type {Boolean}
     * @default false
     */
    useVao: false,

    /**
     * 是否使用 instanced
     * @type {Boolean}
     * @default false
     */
    useInstanced: false,

    /**
     * 绘图方式
     * @type {GLEnum}
     * @default gl.TRIANGLES
     */
    mode: TRIANGLES,

    /**
     * 是否脏
     * @type {Boolean}
     * @default true
     */
    isDirty: true,

    /**
     * @constructs
     * @param  {WebGLRenderingContext} gl     
     * @param  {String} id  缓存id  
     * @param  {Object} params 
     */
    constructor: function constructor(gl, id, params) {
        this.gl = gl;
        this.id = id;
        this.vaoExtension = extensions.vao;
        this.instancedExtension = extensions.instanced;

        Object.assign(this, params);

        if (!this.vaoExtension) {
            this.useVao = false;
        }

        if (!this.instancedExtension) {
            this.useInstanced = false;
        }

        if (this.useVao) {
            this.vao = this.vaoExtension.createVertexArrayOES();
        }

        this.attributes = [];
        this.activeStates = [];
        this.indexBuffer = null;
    },

    /**
     * bind
     */
    bind: function bind() {
        if (currentVao !== this) {
            if (this.useVao) {
                this.vaoExtension.bindVertexArrayOES(this.vao);
            } else {
                this.bindSystemVao();
            }
            currentVao = this;
        }
    },

    /**
     * @private
     */
    bindSystemVao: function bindSystemVao() {
        var gl = this.gl;
        if (currentVao && currentVao.useVao) {
            currentVao.unbind();
        }
        var activeStates = this.activeStates;

        var lastBuffer = void 0;
        this.attributes.forEach(function (attributeObject) {
            var buffer = attributeObject.buffer,
                attribute = attributeObject.attribute,
                geometryData = attributeObject.geometryData;


            if (lastBuffer !== buffer) {
                lastBuffer = buffer;
                buffer.bind();
            }

            attribute.enable();
            attribute.pointer(geometryData);
            if (attributeObject.useInstanced) {
                attribute.divisor();
            }
        });

        globalStates.forEach(function (globalAttributeObject, i) {
            var activeAttributeObject = activeStates[i];
            if (activeAttributeObject) {
                if (globalAttributeObject.useInstanced && !activeAttributeObject.useInstanced) {
                    activeAttributeObject.attribute.divisor(0);
                }
            } else {
                gl.disableVertexAttribArray(i);
            }
        });

        if (this.indexBuffer) {
            this.indexBuffer.bind();
        }
        globalStates = activeStates;
    },

    /**
     * unbind
     */
    unbind: function unbind() {
        if (this.useVao) {
            this.vaoExtension.bindVertexArrayOES(null);
        }
        currentVao = null;
    },

    /**
     * draw
     */
    draw: function draw() {
        this.bind();
        var gl = this.gl,
            mode = this.mode;

        if (this.indexBuffer) {
            gl.drawElements(mode, this.vertexCount, this.indexType, 0);
        } else {
            gl.drawArrays(mode, 0, this.getVertexCount());
        }
    },

    /**
     * 获取顶点数量
     * @return {Number} 顶点数量
     */
    getVertexCount: function getVertexCount() {
        if (this.vertexCount === null) {
            var attributeObj = this.attributes[0];
            if (attributeObj) {
                this.vertexCount = attributeObj.buffer.data.length / attributeObj.attribute.glTypeInfo.size;
            } else {
                this.vertexCount = 0;
            }
        }
        return this.vertexCount;
    },

    /**
     * drawInstance
     * @param  {Number} [primcount=1]
     */
    drawInstance: function drawInstance() {
        var primcount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        this.bind();
        var gl = this.gl,
            mode = this.mode;

        if (this.useInstanced) {
            if (this.indexBuffer) {
                this.instancedExtension.drawElementsInstancedANGLE(mode, this.vertexCount, gl.UNSIGNED_SHORT, 0, primcount);
            } else {
                this.instancedExtension.drawArraysInstancedANGLE(mode, 0, this.getVertexCount(), primcount);
            }
        }
    },

    /**
     * addIndexBuffer
     * @param {GeometryData} data
     * @param {GLenum} usage gl.STATIC_DRAW|gl.DYNAMIC_DRAW
     */
    addIndexBuffer: function addIndexBuffer(geometryData, usage) {
        this.bind();
        var gl = this.gl;
        var buffer = this.indexBuffer;
        this.indexType = geometryData.type;
        if (!buffer) {
            buffer = Buffer.createIndexBuffer(gl, geometryData, usage);
            buffer.bind();
            this.indexBuffer = buffer;
            this.vertexCount = geometryData.length;
            geometryData.isDirty = false;
        } else if (geometryData.isDirty) {
            geometryData.isDirty = false;
            buffer.upload(geometryData.data);
            this.vertexCount = geometryData.length;
        }
    },

    /**
     * addAttribute
     * @param {GeometryData} geometryData     
     * @param {Object} attribute
     * @param {GLenum} usage gl.STATIC_DRAW|gl.DYNAMIC_DRAW
     * @param {Function} onInit
     * @return {AttributeObject} attributeObject
     */
    addAttribute: function addAttribute(geometryData, attribute, usage, onInit) {
        this.bind();
        var gl = this.gl;
        var name = attribute.name;

        var attributeObject = this[name];
        if (!attributeObject) {
            geometryData.isDirty = false;
            var buffer = Buffer.createVertexBuffer(gl, geometryData, usage);
            buffer.bind();
            attribute.enable();
            attribute.pointer(geometryData);
            attributeObject = {
                attribute: attribute,
                buffer: buffer,
                geometryData: geometryData
            };
            this.attributes.push(attributeObject);
            this[name] = attributeObject;
            attribute.addTo(this.activeStates, attributeObject);
            if (onInit) {
                onInit(attributeObject);
            }
        } else if (geometryData.isDirty) {
            geometryData.isDirty = false;
            attributeObject.buffer.upload(geometryData.data);
        }

        return attributeObject;
    },

    /**
     * addInstancedAttribute
     * @param {Object} attribute
     * @param {Array} meshes   
     * @param {function} getData  
     */
    addInstancedAttribute: function addInstancedAttribute(attribute, meshes, getData) {
        this.bind();
        var gl = this.gl;
        var name = attribute.name,
            glTypeInfo = attribute.glTypeInfo;


        var instancedData = bufferUtil.getTypedArray(Float32Array, meshes.length * glTypeInfo.size);
        meshes.forEach(function (mesh, index) {
            var attributeData = getData(mesh);
            if (attributeData !== undefined) {
                bufferUtil.fillArrayData(instancedData, getData(mesh), index * glTypeInfo.size);
            } else {
                console.warn('no attributeData:' + name + '-' + mesh.name);
            }
        });

        var attributeObject = this[name];
        var geometryData = void 0;
        if (attributeObject) {
            geometryData = attributeObject.geometryData;
            geometryData.data = instancedData;
        } else {
            geometryData = new GeometryData(instancedData);
        }

        this.addAttribute(geometryData, attribute, gl.DYNAMIC_DRAW, function (attributeObject) {
            attribute.divisor();
            attributeObject.useInstanced = true;
        });
    }
});

module.exports = VertexArrayObject;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec2 = __webpack_require__(14).vec2;
var Class = __webpack_require__(0);

/**
 * 二维向量
 * @class
 */
var Vector2 = Class.create( /** @lends Vector2.prototype */{
    className: 'Vector2',
    isVector2: true,
    /**
     * Creates a new empty vec2
     * @param {Number} [x=0] X component
     * @param {Number} [y=0] Y component
     * @constructs
     */
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        /**
         * 数据 
         * @type {Float32Array}
         */
        this.elements = vec2.fromValues(x, y);
    },

    /**
     * Copy the values from one vec2 to this
     * @param  {Vector2} m the source matrix
     * @return {Vector2} this
     */
    copy: function copy(v) {
        vec2.copy(this.elements, v.elements);
        return this;
    },

    /**
     * Creates a new vec2 initialized with values from this vector
     * @return {Vector2} a new Vector2
     */
    clone: function clone() {
        var elements = this.elements;
        return new Vector2(elements[0], elements[1]);
    },

    /**
     * 转换到数组
     * @param  {Array}  [array=[]] 数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Array} 
     */
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        array[0 + offset] = elements[0];
        array[1 + offset] = elements[1];
        return array;
    },

    /**
     * 从数组赋值
     * @param  {Array} array  数组
     * @param  {Number} [offset=0] 数组偏移值
     * @return {Vector2} this
     */
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        elements[0] = array[offset + 0];
        elements[1] = array[offset + 1];
        return this;
    },

    /**
     * Set the components of a vec4 to the given values
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {Vector2} this
     */
    set: function set(x, y) {
        vec2.set(this.elements, x, y);
        return this;
    },

    /**
     * Adds two vec2's
     * @param {Vector2} a 
     * @param {Vector2} [b] 如果不传，计算 this 和 a 的和
     * @returns {Vector2} this
     */
    add: function add(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.add(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Subtracts vector b from vector a
     * @param {Vector2} a 
     * @param {Vector2} [b] 如果不传，计算 this 和 a 的差
     * @returns {Vector2} this
     */
    subtract: function subtract(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.subtract(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Multiplies two vec2's
     * @param {Vector2} a 
     * @param {Vector2} [b] 如果不传，计算 this 和 a 的积
     * @returns {Vector2} this
     */
    multiply: function multiply(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.multiply(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Divides two vec2's
     * @param {Vector2} a 
     * @param {Vector2} [b] 如果不传，计算 this 和 a 的商
     * @returns {Vector2} this
     */
    divide: function divide(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.divide(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Math.ceil the components of this
     * @returns {Vector2} this
     */
    ceil: function ceil() {
        vec2.ceil(this.elements, this.elements);
        return this;
    },

    /**
     * Math.floor the components of this
     * @returns {Vector2} this
     */
    floor: function floor() {
        vec2.floor(this.elements, this.elements);
        return this;
    },

    /**
     * Returns the minimum of two vec2's
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @returns {Vector2} this
     */
    min: function min(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.min(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Returns the maximum of two vec2's
     * @param  {Vector2} a
     * @param  {Vector2} [b]  如果不传，计算 this 和 a 的结果
     * @returns {Vector2} this
     */
    max: function max(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.max(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Math.round the components of this
     * @returns {Vector2} this
     */
    round: function round() {
        vec2.round(this.elements, this.elements);
        return this;
    },

    /**
     * Scales this by a scalar number
     * @param  {Vector2} scale amount to scale the vector by
     * @returns {Vector2} this
     */
    scale: function scale(_scale) {
        vec2.scale(this.elements, this.elements, _scale);
        return this;
    },

    /**
     * Adds two vec2's after scaling the second vector by a scalar value
     * @param  {Vector2} scale the amount to scale the second vector by before adding
     * @param  {Vector2} a    
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @returns {Vector2} this
     */
    scaleAndAdd: function scaleAndAdd(scale, a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.scaleAndAdd(this.elements, a.elements, b.elements, scale);
        return this;
    },

    /**
     * Calculates the euclidian distance between two vec2's
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number} distance between a and b
     */
    distance: function distance(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec2.distance(a.elements, b.elements);
    },

    /**
     * Calculates the squared euclidian distance between two vec2's
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number} squared distance between a and b
     */
    squaredDistance: function squaredDistance(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec2.distance(a.elements, b.elements);
    },

    /**
     * Calculates the length of this
     * @return {Number} length of this
     */
    length: function length() {
        return vec2.length(this.elements);
    },

    /**
     * Calculates the squared length of this
     * @return {Number} squared length of this
     */
    squaredLength: function squaredLength() {
        return vec2.squaredLength(this.elements);
    },

    /**
     * Negates the components of this
     * @returns {Vector2} this
     */
    negate: function negate() {
        vec2.negate(this.elements, this.elements);
        return this;
    },

    /**
     * Returns the inverse of the components of a vec2
     * @param  {Vector2} [a=this]
     * @returns {Vector2} this
     */
    inverse: function inverse(a) {
        if (!a) {
            a = this;
        }
        vec2.inverse(this.elements, a.elements);
        return this;
    },

    /**
     * Normalize this
     * @returns {Vector2} this
     */
    normalize: function normalize() {
        vec2.normalize(this.elements, this.elements);
        return this;
    },

    /**
     * Calculates the dot product of two vec2's
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number}  product of a and b
     */
    dot: function dot(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec2.dot(a.elements, b.elements);
    },

    /**
     * Computes the cross product of two vec2's
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @return {Number}  cross product of a and b
     */
    cross: function cross(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.cross(this.elements, a.elements, b.elements);
        return this;
    },

    /**
     * Performs a linear interpolation between two vec2's
     * @param  {Vector2} v 
     * @param  {Number} t interpolation amount between the two vectors
     * @returns {Vector2} this
     */
    lerp: function lerp(v, t) {
        vec2.lerp(this.elements, this.elements, v.elements, t);
        return this;
    },

    /**
     * Generates a random vector with the given scale
     * @param  {Number} [scale=1] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {Vector2} this
     */
    random: function random(scale) {
        vec2.random(this.elements, scale);
        return this;
    },

    /**
     * Transforms the vec2 with a mat3
     * @param  {Matrix3} m matrix to transform with
     * @returns {Vector2} this
     */
    transformMat3: function transformMat3(m) {
        vec2.transformMat3(this.elements, this.elements, m.elements);
        return this;
    },

    /**
     * Transforms the vec2 with a mat4
     * @param  {Matrix4} m matrix to transform with
     * @returns {Vector2} this
     */
    transformMat4: function transformMat4(m) {
        vec2.transformMat4(this.elements, this.elements, m.elements);
        return this;
    },

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @return {Boolean} True if the vectors are equal, false otherwise.
     */
    exactEquals: function exactEquals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec2.exactEquals(a.elements, b.elements);
    },

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     * @param  {Vector2} a
     * @param  {Vector2} [b] 如果不传，计算 this 和 a 的结果
     * @return {Boolean} True if the vectors are equal, false otherwise.  
     */
    equals: function equals(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        return vec2.equals(a.elements, b.elements);
    },

    /**
     * X component
     * @type {Number}
     */
    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    /**
     * Y component
     * @type {Number}
     */
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    }
});

/**
 * Alias for {@link Vector2#subtract}
 * @function
 */
Vector2.prototype.sub = Vector2.prototype.subtract;

/**
 * Alias for {@link Vector2#multiply}
 * @function
 */
Vector2.prototype.mul = Vector2.prototype.multiply;

/**
 * Alias for {@link Vector2#divide}
 * @function
 */
Vector2.prototype.div = Vector2.prototype.divide;

/**
 * Alias for {@link Vector2#distance}
 * @function
 */
Vector2.prototype.dist = Vector2.prototype.distance;

/**
 * Alias for {@link Vector2#squaredDistance}
 * @function
 */
Vector2.prototype.sqrDist = Vector2.prototype.squaredDistance;

/**
 * Alias for {@link Vector2#length}
 * @function
 */
Vector2.prototype.len = Vector2.prototype.length;

/**
 * Alias for {@link Vector2#squaredLength}
 * @function
 */
Vector2.prototype.sqrLen = Vector2.prototype.squaredLength;

module.exports = Vector2;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Node = __webpack_require__(10);
var Matrix4 = __webpack_require__(4);

var tempMatrix4 = new Matrix4();
/**
 * 摄像机
 * @class
 * @extends Node
 */
var Camera = Class.create( /** @lends Camera.prototype */{
  Extends: Node,
  /**
   * @default true
   * @type {boolean}
   */
  isCamera: true,
  /**
   * @default Camera
   * @type {string}
   */
  className: 'Camera',
  /**
   * @constructs
   * @param {object} params 创建对象的属性参数。可包含此类的所有属性。
   */
  constructor: function constructor(params) {
    /**
     * 相对于摄像头的矩阵
     * @type {Matrix4}
     */
    this.viewMatrix = new Matrix4();
    /**
     * 投影矩阵
     * @type {Matrix4}
     */
    this.projectionMatrix = new Matrix4();
    /**
     * View 联结投影矩阵
     * @type {Matrix4}
     */
    this.viewProjectionMatrix = new Matrix4();
    Camera.superclass.constructor.call(this, params);
  },

  /**
   * 更新viewMatrix
   */
  updateViewMatrix: function updateViewMatrix() {
    this.updateMatrixWorld(true);
    this.viewMatrix.invert(this.worldMatrix);
  },

  /**
   * 更新投影矩阵，子类必须重载这个方法
   */
  updateProjectionMatrix: function updateProjectionMatrix() {},
  getGeometry: function getGeometry(forceUpdate) {// eslint-disable-line no-unused-vars

  },

  /**
   * 更新viewProjectionMatrix
   */
  updateViewProjectionMatrix: function updateViewProjectionMatrix() {
    this.updateProjectionMatrix();
    this.updateViewMatrix();
    this.viewProjectionMatrix.multiply(this.projectionMatrix, this.viewMatrix);
  },

  /**
   * 获取元素相对于当前Camera的矩阵
   * @param {Node} node 目标元素
   * @param {Matrix4} [out] 传递将在这个矩阵上做计算，不传将创建一个新的 Matrix4
   * @return {Matrix4} 返回获取的矩阵
   */
  getModelViewMatrix: function getModelViewMatrix(node, out) {
    out = out || new Matrix4();
    out.multiply(this.viewMatrix, node.worldMatrix);
    return out;
  },

  /**
   * 获取元素的投影矩阵
   * @param {Node} node 目标元素
   * @param {Matrix4} [out] 传递将在这个矩阵上做计算，不传将创建一个新的 Matrix4
   * @return {Matrix4} 返回获取的矩阵
   */
  getModelProjectionMatrix: function getModelProjectionMatrix(node, out) {
    out = out || new Matrix4();
    out.multiply(this.viewProjectionMatrix, node.worldMatrix);
    return out;
  },

  /**
   * 获取世界坐标系(三维)中一个点在画布(二维)上的位置
   * @param {Vector3} vector 点坐标
   * @param {number} [width] 画布宽，不传的话返回0~1
   * @param {number} [height] 画布高，不传的话返回0~1
   * @return {Vector3} 返回获取的坐标位置，如 { x: 0, y: 0 }
   */
  projectVector: function projectVector(vector, width, height) {
    var result = vector.clone();
    result.transformMat4(this.viewProjectionMatrix);
    if (width && height) {
      result.x = (result.x + 1) / 2 * width;
      result.y = height - (result.y + 1) / 2 * height;
    }
    return result;
  },


  /**
   * 屏幕坐标转换世界坐标系
   * @param {Vector3} vector 点坐标
   * @param {number} [width] 画布宽，传的话vector会认为是屏幕坐标
   * @param {number} [height] 画布高，传的话vector会认为是屏幕坐标
   * @return {Vector3} 返回世界坐标系(三维)中一个点
   */
  unprojectVector: function unprojectVector(vector, width, height) {
    var result = vector.clone();
    if (width && height) {
      result.x = result.x / width * 2 - 1;
      result.y = 1 - result.y / height * 2;
    }

    tempMatrix4.invert(this.viewProjectionMatrix);
    result.transformMat4(tempMatrix4);
    return result;
  }
});

module.exports = Camera;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var Camera = __webpack_require__(43);
var Geometry = __webpack_require__(7);

/**
 * 透视投影摄像机
 * @class
 * @extends Camera
 */
var PerspectiveCamera = Class.create( /** @lends PerspectiveCamera.prototype */{
  Extends: Camera,
  /**
   * @default true
   * @type {boolean}
   */
  isPerspectiveCamera: true,
  /**
   * @default PerspectiveCamera
   * @type {string}
   */
  className: 'PerspectiveCamera',
  /**
   * 相机视锥体近平面z
   * @default 0.1
   * @type {number}
   */
  near: 0.1,
  /**
   * 相机视锥体远平面z
   * @default 2000
   * @type {number}
   */
  far: 2000,
  /**
   * 相机视野大小，角度
   * @default 50
   * @type {number}
   */
  fov: 50,
  /**
   * 宽高比
   * @default 1
   * @type {number}
   */
  aspect: 1,
  /**
   * @constructs
   * @param {object} params 创建对象的属性参数。可包含此类的所有属性。
   */
  constructor: function constructor(params) {
    PerspectiveCamera.superclass.constructor.call(this, params);
    this.updateProjectionMatrix();
  },

  /**
   * 更新投影矩阵
   */
  updateProjectionMatrix: function updateProjectionMatrix() {
    this.projectionMatrix.perspective(math.degToRad(this.fov), this.aspect, this.near, this.far);
  },
  getGeometry: function getGeometry(forceUpdate) {
    if (forceUpdate || !this._geometry) {
      var geometry = new Geometry();
      var tan = Math.tan(this.fov / 2 * Math.PI / 180);
      var near = this.near;
      var far = this.far;
      var vNear = near * tan;
      var vFar = far * tan;
      var hNear = this.aspect * vNear;
      var hFar = this.aspect * vFar;

      var p1 = [-hNear, -vNear, -near];
      var p2 = [hNear, -vNear, -near];
      var p3 = [hNear, vNear, -near];
      var p4 = [-hNear, vNear, -near];

      var p5 = [-hFar, -vFar, -far];
      var p6 = [hFar, -vFar, -far];
      var p7 = [hFar, vFar, -far];
      var p8 = [-hFar, vFar, -far];

      geometry.addRect(p5, p6, p7, p8); // front
      geometry.addRect(p6, p2, p3, p7); // right
      geometry.addRect(p2, p1, p4, p3); // back
      geometry.addRect(p1, p5, p8, p4); // left
      geometry.addRect(p8, p7, p3, p4); // top
      geometry.addRect(p1, p2, p6, p5); // bottom

      this._geometry = geometry;
    }

    return this._geometry;
  }
});

module.exports = PerspectiveCamera;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Ray3d = __webpack_require__(104);
var Class = __webpack_require__(0);
var Vector3 = __webpack_require__(5);

/**
 * 射线
 * @class
 * @example
 * var ray = new Hilo3d.Ray();
 * ray.fromCamera(camera, 10, 10, stage.width, stage.height);
 */
var Ray = Class.create( /** @lends Ray.prototype */{
    /**
     * 类名
     * @type {String}
     * @default Ray
     */
    className: 'Ray',

    /**
     * 是否是射线
     * @type {Boolean}
     * @default true
     */
    isRay: true,

    /**
     * 原点
     * @type {Vector3}
     */
    origin: {
        get: function get() {
            return this._origin;
        },
        set: function set(value) {
            this._origin = value;
            this._ray.origin = value.elements;
        }
    },

    /**
     * 方向
     * @type {Vector3}
     */
    direction: {
        get: function get() {
            return this._direction;
        },
        set: function set(value) {
            this._direction = value;
            this._ray.direction = value.elements;
        }
    },

    /**
     * @constructs
     * @param {Object} [params] 
     * @param {Vector3} [params.origin=new Vector3(0, 0, 0)] 原点
     * @param {Vector3} [params.direction=new Vector3(0, 0, -1)] 方向
     */
    constructor: function constructor() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this._ray = new Ray3d();
        this.origin = params.origin || new Vector3(0, 0, 0);
        this.direction = params.direction || new Vector3(0, 0, -1);
    },


    /**
     * set
     * @param {Vector3} origin    
     * @param {Vector3} direction
     * @return {Ray} this
     */
    set: function set(origin, direction) {
        this.origin = origin;
        this.direction = direction;
        return this;
    },


    /**
     * copy
     * @param  {Vector3} other 
     * @return {Ray}       
     */
    copy: function copy(other) {
        this.origin.copy(other.origin);
        this.direction.copy(other.direction);
    },


    /**
     * clone
     * @return {Ray}
     */
    clone: function clone() {
        return new Ray(this.origin.clone(), this.direction.clone());
    },


    /**
     * 从摄像机设置
     * @param  {Camera} camera 
     * @param  {Number} x 屏幕x     
     * @param  {Number} y 屏幕y   
     * @param  {Number} width   屏幕宽
     * @param  {Number} height  屏幕高
     */
    fromCamera: function fromCamera(camera, x, y, width, height) {
        if (camera.isPerspectiveCamera) {
            camera.worldMatrix.getTranslation(this.origin);
            this.direction.set(x, y, 0);
            this.direction.copy(camera.unprojectVector(this.direction, width, height));
            this.direction.sub(this.origin).normalize();
        } else if (camera.OrthographicCamera) {
            this.origin.set(x, y, (camera.near + camera.far) / (camera.near - camera.far));
            this.origin.copy(camera.unprojectVector(this.origin, width, height));
            this.direction.set(0, 0, -1).transformDirection(camera.worldMatrix).normalize();
        }
    },


    /**
     * Transforms the ray with a mat4
     * @param  {Matrix4} mat4
     */
    transformMat4: function transformMat4(mat4) {
        this.origin.transformMat4(mat4);
        this.direction.transformDirection(mat4).normalize();
    },


    /**
     * 排序碰撞点
     * @param  {Vector3[]|raycastInfo[]} points    
     * @param  {String} [pointName=''] 
     */
    sortPoints: function sortPoints(points, pointName) {
        var _this = this;

        if (pointName) {
            points.sort(function (a, b) {
                return _this.squaredDistance(a[pointName]) - _this.squaredDistance(b[pointName]);
            });
        } else {
            points.sort(function (a, b) {
                return _this.squaredDistance(a) - _this.squaredDistance(b);
            });
        }
    },


    /**
     * squaredDistance
     * @param  {Vector3} point 
     * @return {Number}       
     */
    squaredDistance: function squaredDistance(point) {
        return this.origin.squaredDistance(point);
    },


    /**
     * distance
     * @param  {Vector3} point 
     * @return {Number}       
     */
    distance: function distance(point) {
        return this.origin.distance(point);
    },


    /**
     * intersectsSphere
     * @param  {Number[]} center [x, y, z]
     * @param  {Number} radius 
     * @return {Vector3}  碰撞点，如果没有碰撞返回 null
     */
    intersectsSphere: function intersectsSphere(center, radius) {
        var res = this._ray.intersectsSphere(center, radius);
        return this._getRes(res);
    },

    /**
     * intersectsPlane
     * @param  {Numer[]} normal [x, y, z]
     * @param  {Number} distance 
     * @return {Vector3}  碰撞点，如果没有碰撞返回 null
     */
    intersectsPlane: function intersectsPlane(normal, distance) {
        var res = this._ray.intersectsPlane(normal, distance);
        return this._getRes(res);
    },

    /**
     * intersectsTriangle
     * @param  {Array} triangle [[a.x, a.y, a.z], [b.x, b.y, b.z],[c.x, c.y, c.z]]
     * @return {Vector3}  碰撞点，如果没有碰撞返回 null
     */
    intersectsTriangle: function intersectsTriangle(triangle) {
        var res = this._ray.intersectsTriangle(triangle);
        return this._getRes(res);
    },

    /**
     * intersectsBox
     * @param  {Array} aabb [[min.x, min.y, min.z], [max.x, max.y, max.z]]
     * @return {Vector3}  碰撞点，如果没有碰撞返回 null
     */
    intersectsBox: function intersectsBox(aabb) {
        var res = this._ray.intersectsBox(aabb);
        return this._getRes(res);
    },

    /**
     * intersectsTriangleCell
     * @param  {Array} cell 
     * @param  {Array} positions 
     * @return {Vector3}  碰撞点，如果没有碰撞返回 null
     */
    intersectsTriangleCell: function intersectsTriangleCell(cell, positions) {
        var res = this._ray.intersectsTriangleCell(cell, positions);
        return this._getRes(res);
    },

    /**
     * _getRes
     * @private
     */
    _getRes: function _getRes(res) {
        if (res) {
            return new Vector3(res[0], res[1], res[2]);
        }
        return null;
    }
});

module.exports = Ray;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out
}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    out[2] = a[2] * b
    return out
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = copy;

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Mesh = __webpack_require__(18);
var Matrix4 = __webpack_require__(4);
var DataTexture = __webpack_require__(32);
var capabilities = __webpack_require__(16);

var tempMatrix1 = new Matrix4();
var tempMatrix2 = new Matrix4();

/**
 * 蒙皮Mesh
 * @class
 * @extends Mesh
 */
var SkinedMesh = Class.create( /** @lends SkinedMesh.prototype */{
    Extends: Mesh,
    /**
     * @default true
     * @type {boolean}
     */
    isSkinedMesh: true,
    /**
     * @default SkinedMesh
     * @type {string}
     */
    className: 'SkinedMesh',
    _rootNode: null,
    /**
     * 这个骨骼Mesh的根节点，改变后会自动根据 jointNames 来更新 jointNodeList
     * @default null
     * @type {Node}
     */
    rootNode: {
        get: function get() {
            return this._rootNode;
        },
        set: function set(node) {
            this._rootNode = node;
            this.initJointNodeList();
        }
    },
    /**
     * 骨骼节点数组
     * @default null
     * @type {Node[]}
     */
    jointNodeList: null,
    /**
     * 是否支持 Instanced
     * @default false
     * @type {boolean}
     */
    useInstanced: false,
    /**
     * 骨骼矩阵DataTexture
     * @default null
     * @type {DataTexture}
     */
    jointMatTexture: null,
    /**
     * @constructs
     * @param {object} params 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(params) {
        /**
         * 当前骨骼Mesh关联的骨骼名字列表
         * @default []
         * @type {string[]}
         */
        this.jointNames = [];
        /**
         * 当前骨骼Mesh的 bindShapeMatrix
         * @type {Matrix4}
         */
        this.bindShapeMatrix = new Matrix4();
        /**
         * 当前骨骼Mesh的 inverseBindMatrices
         * @default []
         * @type {Array}
         */
        this.inverseBindMatrices = [];
        SkinedMesh.superclass.constructor.call(this, params);
    },
    initJointNodeList: function initJointNodeList() {
        var _this = this;

        if (!this._rootNode) {
            return;
        }
        var jointMap = {};
        this._rootNode.traverse(function (child) {
            if ('jointName' in child) {
                jointMap[child.jointName] = child;
            }
        });
        this.jointNodeList = [];
        this.jointNames.forEach(function (name) {
            _this.jointNodeList.push(jointMap[name]);
        });
    },

    /**
     * 获取每个骨骼对应的矩阵数组
     * @return {Float32Array} 返回矩阵数组
     */
    getJointMat: function getJointMat() {
        var _this2 = this;

        if (!this.jointNodeList) {
            return undefined;
        }
        if (!this.jointMat) {
            this.jointMat = new Float32Array(this.jointNodeList.length * 16);
        }

        if (this._rootNode || !this.clonedFrom) {
            tempMatrix2.invert(this.worldMatrix);
        } else {
            tempMatrix2.invert(this.clonedFrom.worldMatrix);
        }

        this.jointNodeList.forEach(function (node, i) {
            tempMatrix1.copy(tempMatrix2);
            tempMatrix1.multiply(node.worldMatrix);
            tempMatrix1.multiply(_this2.inverseBindMatrices[i]);
            tempMatrix1.multiply(_this2.bindShapeMatrix);
            tempMatrix1.toArray(_this2.jointMat, i * 16);
        });
        return this.jointMat;
    },

    /**
     * 根据当前骨骼数来生成骨骼矩阵的 jointMatTexture
     * @return {DataTexture}
     */
    initJointMatTexture: function initJointMatTexture() {
        if (!this.jointMatTexture) {
            var jointMat = this.getJointMat();
            this.jointMatTexture = new DataTexture({
                data: jointMat
            });
        }
        return this.jointMatTexture;
    },

    /**
     * 将 getJointMat 获取的骨骼矩阵数组更新到 jointMatTexture 中
     */
    updateJointMatTexture: function updateJointMatTexture() {
        if (!this.jointMatTexture) {
            this.initJointMatTexture();
        } else {
            var jointMat = this.getJointMat();
            this.jointMatTexture.data.set(jointMat, 0);
            this.jointMatTexture.needUpdate = true;
        }
    },
    clone: function clone(isChild) {
        var mesh = Mesh.prototype.clone.call(this, isChild);
        Object.assign(mesh, {
            useInstanced: this.useInstanced,
            jointNames: this.jointNames.slice(),
            bindShapeMatrix: this.bindShapeMatrix.clone(),
            inverseBindMatrices: this.inverseBindMatrices.map(function (m) {
                return m.clone();
            }),
            jointNodeList: this.jointNodeList
        });
        mesh.clonedFrom = this;
        return mesh;
    },
    getRenderOption: function getRenderOption() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        SkinedMesh.superclass.getRenderOption.call(this, opt);
        if (this.jointNames.length) {
            opt.JOINT_COUNT = this.jointNames.length;
            if (capabilities.VERTEX_TEXTURE_FLOAT) {
                var maxJointCount = (capabilities.MAX_VERTEX_UNIFORM_VECTORS - 22) / 4;
                if (this.jointCount > maxJointCount) {
                    opt.JOINT_MAT_MAP = 1;
                }
            }
        }
        return opt;
    }
});

module.exports = SkinedMesh;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint prefer-spread: "off", prefer-rest-params:"off" */

var cache = {};
var log = {
    _cache: cache,
    log: function log() {
        console.log.apply(console, arguments);
    },
    warn: function warn() {
        console.warn.apply(console, arguments);
    },
    error: function error() {
        console.error.apply(console, arguments);
    },
    logOnce: function logOnce(id, msg) {
        if (!cache['log_' + id]) {
            cache['log_' + id] = true;
            this.log(msg);
        }
    },
    warnOnce: function warnOnce(id, msg) {
        if (!cache['warn_' + id]) {
            cache['warn_' + id] = true;
            this.warn(msg);
        }
    },
    errorOnce: function errorOnce(id, msg) {
        if (!cache['error_' + id]) {
            cache['error_' + id] = true;
            this.error(msg);
        }
    }
};

module.exports = log;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var semantic = __webpack_require__(24);
var Color = __webpack_require__(6);
var Shader = __webpack_require__(33);
var Program = __webpack_require__(40);
var RenderInfo = __webpack_require__(121);
var RenderList = __webpack_require__(122);
var VertexArrayObject = __webpack_require__(41);
var FrameBuffer = __webpack_require__(26);
var extensions = __webpack_require__(25);
var capabilities = __webpack_require__(16);
var glType = __webpack_require__(76);
var State = __webpack_require__(126);
var LightManager = __webpack_require__(127);
var EventMixin = __webpack_require__(9);
var Texture = __webpack_require__(15);

var _require = __webpack_require__(2),
    DEPTH_TEST = _require.DEPTH_TEST,
    CULL_FACE = _require.CULL_FACE,
    FRONT_AND_BACK = _require.FRONT_AND_BACK,
    BLEND = _require.BLEND,
    LINES = _require.LINES,
    STATIC_DRAW = _require.STATIC_DRAW,
    DYNAMIC_DRAW = _require.DYNAMIC_DRAW;

/**
 * WebGL渲染器
 * @class
 * @fires init 初始化事件
 * @mixes EventMixin
 */


var WebGLRenderer = Class.create( /** @lends WebGLRenderer.prototype */{
    Mixes: EventMixin,

    /**
     * @default WebGLRenderer
     * @type {String}
     */
    className: 'WebGLRenderer',

    /**
     * @default true
     * @type {Boolean}
     */
    isWebGLRenderer: true,

    /**
     * gl
     * @default null
     * @type {WebGLRenderingContext}
     */
    gl: null,

    /**
     * 宽
     * @type {Number}
     * @default 0
     */
    width: 0,

    /**
     * 高
     * @type {Number}
     * @default 0
     */
    height: 0,

    /**
     * 像素密度
     * @type {Number}
     * @default 1
     */
    pixelRatio: 1,

    /**
     * dom元素
     * @type {Canvas}
     * @default null
     */
    domElement: null,

    /**
     * 是否使用instanced
     * @type {Boolean}
     * @default false
     */
    useInstanced: false,

    /**
     * 是否使用VAO
     * @type {Boolean}
     * @default true
     */
    useVao: true,

    /**
     * 是否开启透明背景
     * @type {Boolean}
     * @default false
     */
    alpha: false,

    /**
     * 是否开启抗锯齿
     * @type {Boolean}
     * @default true
     */
    antialias: true,

    /**
     * 是否使用frameBuffer
     * @type {Boolean}
     * @default false
     */
    useFrameBuffer: false,

    /**
     * 顶点着色器精度, 可以是以下值：highp, mediump, lowp
     * @type {String}
     * @default highp
     */
    vertexPrecision: 'highp',

    /**
     * 片段着色器精度, 可以是以下值：highp, mediump, lowp
     * @type {String}
     * @default mediump
     */
    fragmentPrecision: 'mediump',

    /**
     * 雾
     * @type {Fog}
     * @default null
     */
    fog: null,

    /**
     * 偏移值
     * @type {Number}
     * @default 0
     */
    offsetX: 0,

    /**
     * 偏移值
     * @type {Number}
     * @default 0
     */
    offsetY: 0,

    /**
     * 是否初始化
     * @type {Boolean}
     * @default false
     * @private
     */
    _isInit: false,

    /**
     * 是否lost context
     * @type {Boolean}
     * @default false
     * @private
     */
    _isContextLost: false,

    /**
     * @constructs
     * @param  {Object} params 初始化参数，所有params都会复制到实例上
     */
    constructor: function constructor(params) {
        /**
         * 背景色
         * @type {Color}
         * @default new Color(1, 1, 1, 1)
         */
        this.clearColor = new Color(1, 1, 1);

        /**
         * 渲染信息
         * @type {RenderInfo}
         * @default new RenderInfo
         */
        this.renderInfo = new RenderInfo();

        /**
         * 渲染列表
         * @type {RenderList}
         * @default new RenderList
         */
        this.renderList = new RenderList();

        /**
         * 灯光管理器
         * @type {LightManager}
         * @default new LightManager
         */
        this.lightManager = new LightManager();
        Object.assign(this, params);
    },

    /**
     * 改变大小
     * @param  {Number} width  宽
     * @param  {Number} height  高
     * @param  {Boolean} [force=false] 是否强制刷新 
     */
    resize: function resize(width, height, force) {
        if (force || this.width !== width || this.height !== height) {
            var canvas = this.domElement;
            this.width = width;
            this.height = height;
            canvas.width = width;
            canvas.height = height;

            this.viewport();
        }
    },

    /**
     * 设置viewport偏移值
     * @param {Number} x x
     * @param {Number} y y
     */
    setOffset: function setOffset(x, y) {
        if (this.offsetX !== x || this.offsetY !== y) {
            this.offsetX = x;
            this.offsetY = y;
            this.viewport();
        }
    },

    /**
     * 设置viewport
     * @param  {Number} [x=this.offsetX]  x    
     * @param  {Number} [y=this.offsetY] y     
     * @param  {Number} [width=this.gl.drawingBufferWidth]  width
     * @param  {Number} [height=this.gl.drawingBufferHeight]  height
     */
    viewport: function viewport(x, y, width, height) {
        var state = this.state,
            gl = this.gl;


        if (state) {
            if (x === undefined) {
                x = this.offsetX;
            } else {
                this.offsetX = x;
            }

            if (y === undefined) {
                y = this.offsetY;
            } else {
                this.offsetY = y;
            }

            if (width === undefined) {
                width = gl.drawingBufferWidth;
            }

            if (height === undefined) {
                height = gl.drawingBufferHeight;
            }

            state.viewport(x, y, width, height);
        }
    },

    /**
     * 是否初始化
     * @type {Boolean}
     * @default false
     * @readOnly
     */
    isInit: {
        get: function get() {
            return this._isInit;
        }
    },
    /**
     * 初始化 context
     */
    initContext: function initContext() {
        var _this = this;

        if (!this._isInit) {
            this._isInit = true;
            var gl = this.gl = this.domElement.getContext('webgl', {
                alpha: this.alpha,
                antialias: this.antialias
            });
            gl.viewport(0, 0, this.width, this.height);
            glType.init(gl);
            extensions.init(gl);
            capabilities.init(gl, extensions);
            Shader.init(this);
            this.state = new State(gl);

            if (!extensions.instanced) {
                this.useInstanced = false;
            }

            if (!extensions.vao) {
                this.useVao = false;
            }

            if (this.useFrameBuffer) {
                this.frameBuffer = new FrameBuffer(this, {
                    useVao: this.useVao,
                    width: this.width,
                    height: this.height
                });
            }

            this.domElement.addEventListener('webglcontextlost', function (e) {
                _this._onContextLost(e);
            }, false);

            this.domElement.addEventListener('webglcontextrestored', function (e) {
                _this._onContextRestore(e);
            }, false);

            this.fire('init');
        }
    },
    _onContextLost: function _onContextLost(e) {
        var gl = this.gl;
        this._isContextLost = true;

        e.preventDefault();

        Program.reset(gl);
        Shader.reset(gl);
        Texture.reset(gl);
        VertexArrayObject.reset(gl);
        this.state.reset(gl);
        this._lastMaterial = null;
    },
    _onContextRestore: function _onContextRestore(e) {
        // eslint-disable-line no-unused-vars
        var gl = this.gl;
        this._isContextLost = false;

        FrameBuffer.reset(gl);
        extensions.reset(gl);
    },

    /**
     * 设置深度检测
     * @param  {WebGLRenderingContext} gl
     * @param  {Material} material
     */
    setupDepthTest: function setupDepthTest(gl, material) {
        var state = this.state;
        if (material.depthTest) {
            state.enable(DEPTH_TEST);
            state.depthFunc(material.depthFunc);
            state.depthMask(material.depthMask);
            state.depthRange(material.depthRange[0], material.depthRange[1]);
        } else {
            state.disable(DEPTH_TEST);
        }
    },

    /**
     * 设置背面剔除
     * @param  {WebGLRenderingContext} gl
     * @param  {Material} material
     */
    setupCullFace: function setupCullFace(gl, material) {
        var state = this.state;
        if (material.cullFace && material.cullFaceType !== FRONT_AND_BACK) {
            state.enable(CULL_FACE);
            state.cullFace(material.cullFaceType);
        } else {
            state.disable(CULL_FACE);
        }
    },

    /**
     * 设置混合
     * @param  {WebGLRenderingContext} gl
     * @param  {Material} material
     */
    setupBlend: function setupBlend(gl, material) {
        var state = this.state;
        if (material.blend) {
            state.enable(BLEND);
            state.blendFuncSeparate(material.blendSrc, material.blendDst, material.blendSrcAlpha, material.blendDstAlpha);
            state.blendEquationSeparate(material.blendEquation, material.blendEquationAlpha);
        } else {
            state.disable(BLEND);
        }
    },

    /**
     * 设置通用的 uniform
     * @param  {Program} program
     * @param  {Mesh} mesh   
     * @param  {Boolean} [force=false] 是否强制更新 
     */
    setupUniforms: function setupUniforms(program, mesh, useInstanced, force) {
        var material = this.forceMaterial || mesh.material;
        for (var name in program.uniforms) {
            var uniformInfo = material.getUniformInfo(name);
            var programUniformInfo = program.uniforms[name];
            if (!uniformInfo.isBlankInfo) {
                if (force || uniformInfo.isDependMesh && !useInstanced) {
                    var uniformData = uniformInfo.get(mesh, material, programUniformInfo);
                    if (uniformData !== undefined) {
                        program[name] = uniformData;
                    }
                }
            }
        }
    },

    /**
     * 设置vao
     * @param  {VertexArrayObject} vao  
     * @param  {Program} program 
     * @param  {Mesh} mesh    
     */
    setupVao: function setupVao(vao, program, mesh) {
        var geometry = mesh.geometry;
        var isStatic = geometry.isStatic;

        if (vao.isDirty || !isStatic || geometry.isDirty) {
            vao.isDirty = false;
            var material = this.forceMaterial || mesh.material;
            var materialAttributes = material.attributes;
            var usage = isStatic ? STATIC_DRAW : DYNAMIC_DRAW;
            for (var name in materialAttributes) {
                var programAttribute = program.attributes[name];
                if (programAttribute) {
                    var data = material.getAttributeData(name, mesh);
                    if (data !== undefined) {
                        vao.addAttribute(data, programAttribute, usage);
                    }
                }
            }
            if (geometry.indices) {
                vao.addIndexBuffer(geometry.indices, usage);
            }

            geometry.isDirty = false;
        }
    },

    /**
     * 设置材质
     * @param  {Program} program 
     * @param  {Mesh} mesh    
     */
    setupMaterial: function setupMaterial(program, mesh, useInstanced) {
        var gl = this.gl;
        var material = this.forceMaterial || mesh.material;
        if (material.isDirty || this._lastMaterial !== material) {
            this.setupDepthTest(gl, material);
            this.setupCullFace(gl, mesh.material);
            this.setupBlend(gl, material);
            this.setupUniforms(program, mesh, useInstanced, true);
            this._lastMaterial = material;
        } else {
            this.setupUniforms(program, mesh, useInstanced, false);
        }

        material.isDirty = false;
    },

    /**
     * 设置mesh
     * @param  {Mesh} mesh         
     * @param  {Boolean} useInstanced 
     * @return {Object} res
     * @return {VertexArrayObject} res.vao
     * @return {Program} res.program
     * @return {Geometry} res.geometry
     */
    setupMesh: function setupMesh(mesh, useInstanced) {
        var gl = this.gl;
        var state = this.state;
        var lightManager = this.lightManager;
        var geometry = mesh.geometry;
        var material = this.forceMaterial || mesh.material;
        var shader = Shader.getShader(mesh, material, useInstanced, lightManager, this.fog);
        var program = Program.getProgram(shader, state);

        program.useProgram();
        this.setupMaterial(program, mesh, useInstanced);

        if (mesh.material.wireframe && geometry.mode !== LINES) {
            geometry.convertToLinesMode();
        }

        var vaoId = geometry.id + program.id;
        var vao = VertexArrayObject.getVao(gl, vaoId, {
            useInstanced: useInstanced,
            useVao: this.useVao,
            mode: geometry.mode
        });
        this.setupVao(vao, program, mesh);

        return {
            vao: vao,
            program: program,
            geometry: geometry
        };
    },

    /**
     * 增加渲染信息
     * @param {Number} faceCount 面数量
     * @param {Number} drawCount 绘图数量
     */
    addRenderInfo: function addRenderInfo(faceCount, drawCount) {
        var renderInfo = this.renderInfo;
        renderInfo.addFaceCount(faceCount);
        renderInfo.addDrawCount(drawCount);
    },

    /**
     * 渲染一组mesh
     * @param  {Mesh[]} meshes
     */
    renderMeshes: function renderMeshes(meshes) {
        var mesh = meshes[0];
        var material = this.forceMaterial || mesh.material;
        var useInstanced = this.useInstanced && mesh.useInstanced && meshes.length > 1;
        if (useInstanced) {
            this.renderInstancedMeshes(mesh, meshes, material);
        } else {
            this.renderMultipleMeshes(meshes);
        }
    },

    /**
     * 渲染
     * @param  {Stage} stage
     * @param  {Camera} camera
     */
    render: function render(stage, camera) {
        this.initContext();

        if (this._isContextLost) {
            return;
        }

        var renderList = this.renderList,
            renderInfo = this.renderInfo,
            lightManager = this.lightManager,
            state = this.state;


        this.fog = stage.fog;
        lightManager.reset();
        renderInfo.reset();
        renderList.reset();

        semantic.init(state, camera, lightManager, this.fog);
        stage.updateMatrixWorld();
        camera.updateViewProjectionMatrix();

        stage.traverse(function (node) {
            if (!node.visible) {
                return true;
            }

            if (node.isMesh) {
                renderList.addMesh(node, camera);
            } else if (node.isLight) {
                lightManager.addLight(node);
            }

            return false;
        });

        lightManager.createShadowMap(this, camera);
        lightManager.updateInfo(camera);

        /**
         * 渲染开始事件
         * @event WebGLRenderer#beforeRender
         */
        this.fire('beforeRender');
        if (this.useFrameBuffer) {
            this.frameBuffer.bind();
            this.clear();
            this.renderScene();
            this.renderToScreen(this.frameBuffer);
        } else {
            this.clear();
            this.renderScene();
        }
        /**
         * 渲染完成事件
         * @event WebGLRenderer#afterRender
         */
        this.fire('afterRender');
    },

    /**
     * 渲染场景
     */
    renderScene: function renderScene() {
        var _this2 = this;

        var renderList = this.renderList;
        renderList.traverse(function (arr) {
            _this2.renderMeshes(arr);
        });
    },

    /**
     * 清除背景
     * @param  {Color} [clearColor=this.clearColor]
     */
    clear: function clear(clearColor) {
        var gl = this.gl,
            state = this.state;


        clearColor = clearColor || this.clearColor;

        state.depthMask(true);
        this._lastMaterial = null;
        gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    },

    /**
     * 将frameBuffer渲染到屏幕
     * @param  {FrameBuffer} frameBuffer
     */
    renderToScreen: function renderToScreen(frameBuffer) {
        this.state.bindSystemFrameBuffer();
        frameBuffer.render(0, 0, 1, 1, this.clearColor);
    },

    /**
     * 渲染一个mesh
     * @param  {Mesh} mesh
     */
    renderMesh: function renderMesh(mesh) {
        var vao = this.setupMesh(mesh, false).vao;
        vao.draw();
        this.addRenderInfo(vao.vertexCount / 3, 1);
    },

    /**
     * 渲染一组 instanced mesh
     * @param  {Mesh} mesh     
     * @param  {Mesh[]} meshes   
     * @param  {Material} material 
     */
    renderInstancedMeshes: function renderInstancedMeshes(mesh, meshes, material) {
        var _setupMesh = this.setupMesh(mesh, true),
            vao = _setupMesh.vao,
            program = _setupMesh.program;

        var instancedUniforms = material.getInstancedUniforms();
        instancedUniforms.forEach(function (uniformObj) {
            var name = uniformObj.name;
            var info = uniformObj.info;
            var attribute = program.attributes[name];
            if (attribute) {
                vao.addInstancedAttribute(attribute, meshes, function (mesh) {
                    return info.get(mesh);
                });
            }
        });
        vao.drawInstance(meshes.length);
        this.addRenderInfo(vao.vertexCount / 3 * meshes.length, 1);
    },

    /**
     * 渲染一组普通mesh
     * @param  {Mesh[]} meshes 
     */
    renderMultipleMeshes: function renderMultipleMeshes(meshes) {
        var _this3 = this;

        meshes.forEach(function (mesh) {
            _this3.renderMesh(mesh);
        });
    }
});

module.exports = WebGLRenderer;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_TEXCOORD0\n    varying vec2 v_texcoord0;\n#endif\n\n#ifdef HILO_DIFFUSE_CUBE_MAP\n    varying vec3 v_position;\n#endif"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_NORMAL\n    varying vec3 v_normal;\n    #ifdef HILO_HAS_NORMAL_MAP\n        uniform sampler2D u_normalMap;\n        varying mat3 v_TBN;\n    #endif\n#endif"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_LIGHT\n    varying vec3 v_fragPos;\n#endif"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#if defined(HILO_DIFFUSE_MAP)\n    uniform sampler2D u_diffuse;\n#elif defined(HILO_DIFFUSE_CUBE_MAP)\n    uniform samplerCube u_diffuse;\n#else\n    uniform vec4 u_diffuse;\n#endif"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nfloat getDiffuse(vec3 normal, vec3 lightDir){\n    return max(dot(normal, lightDir), 0.0);\n}\n\n"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nfloat getSpecular(vec3 cameraPos, vec3 fragPos, vec3 lightDir, vec3 normal, float shininess){\n    vec3 viewDir = normalize(cameraPos - fragPos);\n    vec3 reflectDir = reflect(-lightDir, normal);\n    return pow(max(dot(viewDir, reflectDir), 0.0), shininess);\n}\n\n"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nfloat getPointAttenuation(vec3 distanceVec, vec3 info){\n    float distance = length(distanceVec);\n    return 1.0/(info.x + info.y * distance + info.z * distance * distance);\n}\n\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nbool isOutOfRange(vec2 pos) {\n    if (pos.x < 0.0 || pos.x > 1.0 || pos.y < 0.0 || pos.y > 1.0) {\n        return true;\n    }\n    return false;\n}\n\nfloat getShadow(sampler2D shadowMap, vec2 shadowMapSize, float bias, vec3 fragPos, mat4 lightSpaceMatrix) {\n    vec4 fragPosLightSpace = lightSpaceMatrix * vec4(fragPos, 1.0);\n    vec3 projCoords = fragPosLightSpace.xyz / fragPosLightSpace.w;\n    projCoords = projCoords * 0.5 + 0.5;\n    if (isOutOfRange(projCoords.xy)) {\n        return 1.0;\n    }\n    float currentDepth = projCoords.z;\n    float shadow = 0.0;\n    vec2 texelSize = 1.0 / shadowMapSize;\n    for (int x = -1; x <= 1; ++x) {\n        for (int y = -1; y <= 1; ++y) {\n            vec2 pos = projCoords.xy + vec2(x, y) * texelSize;\n            if (isOutOfRange(pos)) {\n                shadow += 1.0;\n            } else {\n                float pcfDepth = texture2D(shadowMap, pos).r;\n                shadow += currentDepth - bias > pcfDepth ? 1.0 : 0.0;\n            }\n        }\n    }\n    return 1.0 - shadow / 9.0;\n}\n\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_LIGHT\n    #ifdef HILO_HAS_SPECULAR\n        uniform float u_shininess;\n        #ifdef HILO_SPECULAR_MAP\n            uniform sampler2D u_specular;\n        #else\n            uniform vec4 u_specular;\n        #endif\n    #endif\n    #ifdef HILO_EMISSION_MAP\n        uniform sampler2D u_emission;\n    #else\n        uniform vec4 u_emission;\n    #endif\n    #ifdef HILO_AMBIENT_MAP\n        uniform sampler2D u_ambient;\n    #endif\n    #ifdef HILO_SKYBOX_MAP\n        uniform samplerCube u_skyboxMap;\n        uniform mat4 u_skyboxMatrix;\n        uniform float u_reflectivity;\n        uniform float u_refractRatio;\n        uniform float u_refractivity;\n    #endif\n#endif"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_NORMAL_MAP\n    vec3 normal = texture2D(u_normalMap, v_texcoord0).rgb * 2.0 - 1.0;\n    normal = normalize(v_TBN * normal);\n#elif defined(HILO_HAS_NORMAL)\n    vec3 normal = normalize(v_normal);\n#else\n    vec3 normal = vec3(0, 0, 1);\n#endif\n\n#if HILO_SIDE == HILO_BACK_SIDE\n    normal = -normal;\n#endif"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_LIGHT\n    #if HILO_SIDE == HILO_FRONT_AND_BACK_SIDE\n        if(dot(-v_fragPos, normal) < 0.0){\n            normal = -normal;\n        }\n    #endif\n#endif"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#if defined(HILO_DIFFUSE_MAP)\n    diffuse = texture2D(u_diffuse, v_texcoord0);\n#elif defined(HILO_DIFFUSE_CUBE_MAP)\n    diffuse = textureCube(u_diffuse, v_position);\n#else\n    diffuse = u_diffuse;\n#endif"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_LIGHT\n    vec3 lightDiffuse = vec3(0, 0, 0);\n    vec3 lightAmbient = vec3(0, 0, 0);\n    vec3 viewPos = vec3(0, 0, 0);\n\n    #ifdef HILO_AMBIENT_MAP\n        lightAmbient = texture2D(u_ambient, v_texcoord0).rgb;\n    #else\n        lightAmbient = diffuse.rgb;\n    #endif\n\n    #ifdef HILO_HAS_SPECULAR\n        vec3 lightSpecular = vec3(0, 0, 0);\n        #ifdef HILO_SPECULAR_MAP\n            vec4 specular = texture2D(u_specular, v_texcoord0);\n        #else\n            vec4 specular = u_specular;\n        #endif\n    #endif\n    \n    #ifdef HILO_EMISSION_MAP\n        vec4 emission = texture2D(u_emission, v_texcoord0);\n    #else\n        vec4 emission = u_emission;\n    #endif\n\n    #ifdef HILO_DIRECTIONAL_LIGHTS\n        for(int i = 0;i < HILO_DIRECTIONAL_LIGHTS;i++){\n            vec3 lightDir = -u_directionalLightsInfo[i];\n\n            float shadow = 1.0;\n            #ifdef HILO_DIRECTIONAL_LIGHTS_SMC\n                if (i < HILO_DIRECTIONAL_LIGHTS_SMC) {\n                    float bias = max(u_directionalLightsShadowBias[i][1] * (1.0 - dot(normal, lightDir)), u_directionalLightsShadowBias[i][0]);\n                    shadow = getShadow(u_directionalLightsShadowMap[i], u_directionalLightsShadowMapSize[i], bias, v_fragPos, u_directionalLightSpaceMatrix[i]);\n                }\n            #endif\n\n            float diff = getDiffuse(normal, lightDir);\n            lightDiffuse += diff * u_directionalLightsColor[i] * shadow;\n\n            #ifdef HILO_HAS_SPECULAR\n                float spec = getSpecular(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                lightSpecular += spec * u_directionalLightsColor[i] * shadow;\n            #endif\n        }\n    #endif\n\n    #ifdef HILO_SPOT_LIGHTS\n        for(int i = 0; i < HILO_SPOT_LIGHTS; i++){\n            vec3 lightDir = -u_spotLightsDir[i];\n            vec3 distanceVec = u_spotLightsPos[i] - v_fragPos;\n\n            float shadow = 1.0;\n            #ifdef HILO_SPOT_LIGHTS_SMC\n                if (i < HILO_SPOT_LIGHTS_SMC) {\n                    float bias = max(u_spotLightsShadowBias[i][1] * (1.0 - dot(normal, lightDir)), u_spotLightsShadowBias[i][0]);\n                    shadow = getShadow(u_spotLightsShadowMap[i], u_spotLightsShadowMapSize[i], bias, v_fragPos, u_spotLightSpaceMatrix[i]);\n                }\n            #endif\n            \n            float diff = getDiffuse(normal, normalize(distanceVec));\n            float theta = dot(normalize(distanceVec), lightDir);\n            float epsilon = u_spotLightsCutOffs[i][0] - u_spotLightsCutOffs[i][1];\n            float intensity = clamp((theta - u_spotLightsCutOffs[i][1]) / epsilon, 0.0, 1.0);\n            float attenuation = getPointAttenuation(distanceVec, u_spotLightsInfo[i]);\n\n            lightDiffuse += intensity * attenuation * shadow * diff * u_spotLightsColor[i];\n\n            #ifdef HILO_HAS_SPECULAR\n                float spec = getSpecular(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                lightSpecular += intensity * attenuation * shadow * spec * u_spotLightsColor[i];\n            #endif\n        }\n    #endif\n\n    #ifdef HILO_POINT_LIGHTS\n        for(int i = 0;i < HILO_POINT_LIGHTS;i++){\n            vec3 distanceVec = u_pointLightsPos[i] - v_fragPos;\n            vec3 lightDir = normalize(distanceVec);\n\n            float diff = getDiffuse(normal, lightDir);\n            float attenuation = getPointAttenuation(distanceVec, u_pointLightsInfo[i]);\n            lightDiffuse += diff * attenuation * u_pointLightsColor[i];\n\n            #ifdef HILO_HAS_SPECULAR\n                float spec = getSpecular(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                lightSpecular += spec * attenuation * u_pointLightsColor[i];\n            #endif\n        }\n    #endif\n\n    #ifdef HILO_AMBIENT_LIGHTS\n        color.rgb += u_ambientLightsColor * lightAmbient;\n    #endif\n\n    #if defined(HILO_SKYBOX_MAP) && defined(HILO_HAS_SPECULAR)\n        vec3 I = normalize(v_fragPos - viewPos);\n        if (u_reflectivity > 0.0) {\n            vec3 R = reflect(I, normal);\n            R = normalize(vec3(u_skyboxMatrix * vec4(R, 1.0)));\n            lightSpecular += textureCube(u_skyboxMap, R).rgb * u_reflectivity;\n        }\n        if (u_refractivity > 0.0) {\n            vec3 R = refract(I, normal, u_refractRatio);\n            R = normalize(vec3(u_skyboxMatrix * vec4(R, 1.0)));\n            lightSpecular += textureCube(u_skyboxMap, R).rgb * u_refractivity;\n        }\n    #endif\n\n    color.rgb += lightDiffuse * diffuse.rgb;\n    #ifdef HILO_HAS_SPECULAR\n        color.rgb += lightSpecular * specular.rgb;\n    #endif\n\n    color.rgb += emission.rgb;\n    color.a = diffuse.a;\n#else\n    color = diffuse;\n#endif"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_QUANTIZED\n    uniform mat4 u_positionDecodeMat;\n    uniform mat4 u_normalDecodeMat;\n    uniform mat3 u_uvDecodeMat;\n\n    vec2 unQuantize(vec2 data, mat3 decodeMat) {\n        vec3 result = vec3(data, 1.0);\n        result = decodeMat * result;\n        return result.xy;\n    }\n\n    vec3 unQuantize(vec3 data, mat4 decodeMat) {\n        vec4 result = vec4(data, 1.0);\n        result = decodeMat * result;\n        return result.xyz;\n    }\n#endif"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_JOINT_COUNT\n    attribute vec4 a_skinIndices;\n    attribute vec4 a_skinWeights;\n    #ifdef HILO_JOINT_MAT_MAP\n        uniform sampler2D u_jointMatTexture;\n        uniform vec2 u_jointMatTextureSize;\n        mat4 getJointMat(float index) {\n            index *= 4.0;\n            float x = float(mod(index, u_jointMatTextureSize.x));\n            float y = float(floor(index / u_jointMatTextureSize.x));\n            float dx = 1.0 / float(u_jointMatTextureSize.x);\n            float dy = 1.0 / float(u_jointMatTextureSize.y);\n            y = dy * (y + 0.5);\n            vec4 v1 = texture2D(u_jointMatTexture, vec2(dx * (x + 0.5), y));\n            vec4 v2 = texture2D(u_jointMatTexture, vec2(dx * (x + 1.5), y));\n            vec4 v3 = texture2D(u_jointMatTexture, vec2(dx * (x + 2.5), y));\n            vec4 v4 = texture2D(u_jointMatTexture, vec2(dx * (x + 3.5), y));\n            mat4 mat = mat4(v1, v2, v3, v4);\n            return mat;\n        }\n    #else\n        uniform mat4 u_jointMat[HILO_JOINT_COUNT];\n        mat4 getJointMat(float index) {\n            return u_jointMat[int(index)];\n        }\n    #endif\n\n    mat4 getJointMat(vec4 weights, vec4 indices) {\n        mat4 mat = weights.x * getJointMat(indices.x);\n        mat += weights.y * getJointMat(indices.y);\n        mat += weights.z * getJointMat(indices.z);\n        mat += weights.w * getJointMat(indices.w);\n        return mat;\n    }\n#endif"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_TEXCOORD0\n    attribute vec2 a_texcoord0;\n    varying vec2 v_texcoord0;\n#endif\n\n#ifdef HILO_DIFFUSE_CUBE_MAP\n    varying vec3 v_position;\n#endif"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_NORMAL\n    attribute vec3 a_normal;\n    uniform mat3 u_normalMatrix;\n    varying vec3 v_normal;\n\n    #ifdef HILO_HAS_NORMAL_MAP\n        attribute vec3 a_tangent;\n        varying mat3 v_TBN;\n    #endif\n#endif"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FOG)\n    uniform mat4 u_modelViewMatrix;\n    #ifdef HILO_HAS_FOG\n        varying float v_dist;\n    #endif\n\n    #ifdef HILO_HAS_LIGHT\n        varying vec3 v_fragPos;\n    #endif\n#endif"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_QUANTIZED\n    pos.xyz = unQuantize(pos.xyz, u_positionDecodeMat);\n    #ifdef HILO_HAS_TEXCOORD0\n        uv = unQuantize(uv, u_uvDecodeMat);\n    #endif\n    #ifdef HILO_HAS_NORMAL\n        normal = unQuantize(normal, u_normalDecodeMat);\n    #endif\n#endif"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_JOINT_COUNT\n    mat4 skinMat = getJointMat(a_skinWeights, a_skinIndices);\n    pos = skinMat * pos;\n\n    #ifdef HILO_HAS_NORMAL\n        normal = mat3(skinMat) * normal;\n    #endif\n#endif"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_TEXCOORD0\n    v_texcoord0 = uv;\n#endif\n#ifdef HILO_DIFFUSE_CUBE_MAP\n    v_position = pos.xyz;\n#endif"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_HAS_NORMAL\n    #ifdef HILO_HAS_NORMAL_MAP\n        vec3 T = normalize(u_normalMatrix * tangent);\n        vec3 N = normalize(u_normalMatrix * normal);\n        T = normalize(T - dot(T, N) * N);\n        vec3 B = cross(T, N);\n        v_TBN = mat3(T, B, N);\n    #endif\n    v_normal = normalize(u_normalMatrix * normal);\n#endif"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FOG)\n    vec3 fragPos = (u_modelViewMatrix * pos).xyz;\n\n    #ifdef HILO_HAS_LIGHT\n        v_fragPos = fragPos;\n    #endif\n\n    #ifdef HILO_HAS_FOG\n        v_dist = length(fragPos);\n    #endif\n#endif"

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DATA_TYPES = [{
    name: 'FLOAT',
    byteSize: 4,
    uniformFuncName: 'uniform1f',
    type: 'Scalar',
    size: 1
}, {
    name: 'FLOAT_VEC2',
    byteSize: 8,
    uniformFuncName: 'uniform2f',
    type: 'Vector',
    size: 2
}, {
    name: 'FLOAT_VEC3',
    byteSize: 12,
    uniformFuncName: 'uniform3f',
    type: 'Vector',
    size: 3
}, {
    name: 'FLOAT_VEC4',
    byteSize: 16,
    uniformFuncName: 'uniform4f',
    type: 'Vector',
    size: 4
}, {
    name: 'FLOAT_MAT2',
    byteSize: 16,
    uniformFuncName: 'uniformMatrix2fv',
    type: 'Matrix',
    size: 4
}, {
    name: 'FLOAT_MAT3',
    byteSize: 36,
    uniformFuncName: 'uniformMatrix3fv',
    type: 'Matrix',
    size: 9
}, {
    name: 'FLOAT_MAT4',
    byteSize: 64,
    uniformFuncName: 'uniformMatrix4fv',
    type: 'Matrix',
    size: 16
}, {
    name: 'INT',
    byteSize: 4,
    uniformFuncName: 'uniform1i',
    type: 'Scalar',
    size: 1
}, {
    name: 'INT_VEC2',
    byteSize: 8,
    uniformFuncName: 'uniform2i',
    type: 'Vector',
    size: 2
}, {
    name: 'INT_VEC3',
    byteSize: 12,
    uniformFuncName: 'uniform3i',
    type: 'Vector',
    size: 3
}, {
    name: 'INT_VEC4',
    byteSize: 16,
    uniformFuncName: 'uniform4i',
    type: 'Vector',
    size: 4
}, {
    name: 'BOOL',
    byteSize: 4,
    uniformFuncName: 'uniform1i',
    type: 'Scalar',
    size: 1
}, {
    name: 'BOOL_VEC2',
    byteSize: 8,
    uniformFuncName: 'uniform2i',
    type: 'Vector',
    size: 2
}, {
    name: 'BOOL_VEC3',
    byteSize: 12,
    uniformFuncName: 'uniform3i',
    type: 'Vector',
    size: 3
}, {
    name: 'BOOL_VEC4',
    byteSize: 16,
    uniformFuncName: 'uniform4i',
    type: 'Vector',
    size: 4
}, {
    name: 'SAMPLER_2D',
    byteSize: 4,
    uniformFuncName: 'uniform1i',
    type: 'Scalar',
    size: 1
}, {
    name: 'SAMPLER_CUBE',
    byteSize: 4,
    uniformFuncName: 'uniform1i',
    type: 'Scalar',
    size: 1
}];

var DATA_DICT = {};

/**
 * @namespace glType
 * @type {Object}
 */
var glType = {
    dict: DATA_DICT,
    /**
     * init
     * @param  {WebGLRenderingContext} gl
     */
    init: function init(gl) {
        DATA_TYPES.forEach(function (dataType) {
            var name = dataType.name;

            var uniform = void 0;
            var uniformArray = void 0;
            var uniformFuncName = dataType.uniformFuncName;
            var uniformArrayFuncName = uniformFuncName + 'v';

            if (dataType.type === 'Matrix') {
                uniform = uniformArray = function uniformArray(location, value) {
                    if (value === undefined) {
                        return;
                    }
                    gl[uniformFuncName](location, false, value);
                };
            } else {
                uniform = function uniform(location, value) {
                    if (value === undefined) {
                        return;
                    }
                    gl[uniformFuncName](location, value);
                };
                uniformArray = function uniformArray(location, value) {
                    gl[uniformArrayFuncName](location, value);
                };
            }

            DATA_DICT[gl[name]] = Object.assign(dataType, {
                glValue: gl[name],
                uniform: uniform,
                uniformArray: uniformArray
            });
        });
    },

    /**
     * 获取信息
     * @param  {GLenum} type
     * @return {glTypeInfo}
     */
    get: function get(type) {
        return DATA_DICT[type];
    }
};

module.exports = glType;

/**
 * @typedef {Object} glTypeInfo
 * @property {String} name 名字，e.g. FLOAT_VEC2
 * @property {Number} byteSize 字节大小 
 * @property {String} uniformFuncName uniform方法名字，e.g. uniform3f
 * @property {String} type 类型，可以是 Scalar, Vector, Matrix
 * @property {Number} size 数量
 * @property {GLenum} glValue gl enum值
 * @property {function} uniform uniform单个值方法
 * @property {function} uniformArray uniform多个值方法
 */

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Cache = __webpack_require__(11);

var cache = new Cache();
/**
 * 缓冲
 * @class
 */
var Buffer = Class.create( /** @lends Buffer.prototype */{
    Statics: /** @lends Buffer */{
        /**
         * 缓存
         * @readOnly
         * @return {Cache}
         */
        cache: {
            get: function get() {
                return cache;
            }
        },
        /**
         * 重置缓存
         */
        reset: function reset(gl) {
            // eslint-disable-line no-unused-vars
            cache.removeAll();
        },

        /**
         * 生成顶点缓冲
         * @param  {WebGLRenderingContext} gl    
         * @param  {GeometryData} geometryData  
         * @param  {GLenum} [usage = gl.STATIC_DRAW] 
         * @return {Buffer}       
         */
        createVertexBuffer: function createVertexBuffer(gl, geometryData) {
            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : gl.STATIC_DRAW;

            return this.createBuffer(gl, gl.ARRAY_BUFFER, geometryData, usage);
        },
        createBuffer: function createBuffer(gl, target, geometryData, usage) {
            var id = geometryData.id;
            var buffer = cache.get(id);
            if (buffer) {
                return buffer;
            }
            buffer = new Buffer(gl, target, geometryData.data, usage);
            cache.add(id, buffer);
            return buffer;
        },


        /**
         * 生成索引缓冲
         * @param  {WebGLRenderingContext} gl    
         * @param  {GeometryData} geometryData  
         * @param  {GLenum} [usage = gl.STATIC_DRAW] 
         * @return {Buffer}       
         */
        createIndexBuffer: function createIndexBuffer(gl, geometryData) {
            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : gl.STATIC_DRAW;

            return this.createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, geometryData, usage);
        }
    },

    /**
     * @default Buffer
     * @type {String}
     */
    className: 'Buffer',

    /**
     * @default true
     * @type {Boolean}
     */
    isBuffer: true,

    /**
     * @constructs
     * @param  {WebGLRenderingContext} gl     
     * @param  {GLenum} [target = gl.ARRAY_BUFFER] 
     * @param  {TypedArray} data   
     * @param  {GLenum} [usage = gl.STATIC_DRAW]  
     */
    constructor: function constructor(gl) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gl.ARRAY_BUFFER;
        var data = arguments[2];
        var usage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gl.STATIC_DRAW;

        this.gl = gl;
        /**
         * target
         * @type {GLenum}
         */
        this.target = target;

        /**
         * usage
         * @type {GLenum}
         */
        this.usage = usage;

        /**
         * buffer
         * @type {WebGLBuffer}
         */
        this.buffer = gl.createBuffer();

        if (data) {
            this.upload(data);
        }
    },

    /**
     * 绑定
     */
    bind: function bind() {
        this.gl.bindBuffer(this.target, this.buffer);
    },

    /**
     * 上传数据
     * @param  {TypedArray} data   
     * @param  {Number} [offset=0] 偏移值
     */
    upload: function upload(data) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var gl = this.gl,
            target = this.target,
            usage = this.usage;


        this.bind();
        if (!this.data || this.data.byteLength < data.byteLength) {
            gl.bufferData(target, data, usage);
        } else {
            gl.bufferSubData(target, offset, data);
        }
        this.data = data;
    }
});

module.exports = Buffer;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Camera = __webpack_require__(43);
var Geometry = __webpack_require__(7);

/**
 * 正交投影摄像机
 * @class
 * @extends Camera
 */
var OrthographicCamera = Class.create( /** @lends OrthographicCamera.prototype */{
  Extends: Camera,
  /**
   * @default true
   * @type {boolean}
   */
  isOrthographicCamera: true,
  /**
   * @default OrthographicCamera
   * @type {string}
   */
  className: 'OrthographicCamera',
  /**
   * @default -1
   * @type {number}
   */
  left: -1,
  /**
   * @default 1
   * @type {number}
   */
  right: 1,
  /**
   * @default -1
   * @type {number}
   */
  bottom: -1,
  /**
   * @default 1
   * @type {number}
   */
  top: 1,
  /**
   * @default 0.1
   * @type {number}
   */
  near: 0.1,
  /**
   * @default 1
   * @type {number}
   */
  far: 1,
  /**
   * @constructs
   * @param {object} params 创建对象的属性参数。可包含此类的所有属性。
   */
  constructor: function constructor(params) {
    OrthographicCamera.superclass.constructor.call(this, params);
    this.updateProjectionMatrix();
  },

  /**
   * 更新投影矩阵
   */
  updateProjectionMatrix: function updateProjectionMatrix() {
    this.projectionMatrix.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far);
  },
  getGeometry: function getGeometry(forceUpdate) {
    if (forceUpdate || !this._geometry) {
      var geometry = new Geometry();

      var p1 = [this.left, this.bottom, -this.near];
      var p2 = [this.right, this.bottom, -this.near];
      var p3 = [this.right, this.top, -this.near];
      var p4 = [this.left, this.top, -this.near];
      var p5 = [this.left, this.bottom, -this.far];
      var p6 = [this.right, this.bottom, -this.far];
      var p7 = [this.right, this.top, -this.far];
      var p8 = [this.left, this.top, -this.far];

      geometry.addRect(p5, p6, p7, p8); // front
      geometry.addRect(p6, p2, p3, p7); // right
      geometry.addRect(p2, p1, p4, p3); // back
      geometry.addRect(p1, p5, p8, p4); // left
      geometry.addRect(p8, p7, p3, p4); // top
      geometry.addRect(p1, p2, p6, p5); // bottom

      this._geometry = geometry;
    }

    return this._geometry;
  }
});

module.exports = OrthographicCamera;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var BasicLoader = __webpack_require__(12);
var GLTFParser = __webpack_require__(137);

/**
 * glTF模型加载类
 * @class
 * @extends {BasicLoader}
 * @example
 * var loader = new Hilo3d.GLTFLoader();
 * loader.load({
 *     src: '//ossgw.alicdn.com/tmall-c3/tmx/a9bedc04da498b95c57057d6a5d29fe7.gltf'
 * }).then(function (model) {
 *     stage.addChild(model.node);
 * });
 */
var GLTFLoader = Class.create( /** @lends GLTFLoader.prototype */{
    Extends: BasicLoader,
    /**
     * @constructs
     */
    constructor: function constructor() {
        GLTFLoader.superclass.constructor.call(this);
    },

    /**
     * 加载glTF模型
     * @param {object} params 加载参数
     * @param {string} params.src glTF模型地址
     * @param {boolean} [params.isProgressive=false] 是否渐进式加载，图片加载完前使用占位图片
     * @param {boolean} [params.isUseQuantizedMaterial=false] 是否使用QuantizedMaterial
     * @param {function} [params.preHandlerImageURI=null] 图片URL预处理函数
     * @param {function} [params.customMaterialCreator=null] 是否使用自定义的Material创建器
     * @async
     * @return {Promise<Model, Error>} 返回加载完的模型对象
     */
    load: function load(params) {
        var _this = this;

        return this.loadRes(params.src, 'buffer').then(function (buffer) {
            var parser = new GLTFParser(buffer, params);
            parser.parse();
            return parser.loadResources(_this).then(function () {
                return parser.parseScene();
            });
        }).catch(function (err) {
            console.warn('load gltf failed', err.message, err.stack);
            throw err;
        });
    }
});

module.exports = GLTFLoader;

/**
 * GLTFLoader 模型加载完返回的对象格式
 * @typedef {object} Model
 * @property {Node} node 模型的根节点
 * @property {Mesh[]} meshes 模型的所有Mesh对象数组
 * @property {Animation} anim 模型的动画对象数组，没有动画的话为null
 * @property {Camera[]} cameras 模型中的所有Camera对象数组
 * @property {Light[]} lights 模型中的所有Light对象数组
 * @property {Texture[]} textures 模型中的所有Texture对象数组
 * @property {BasicMaterial[]} materials 模型中的所有Material对象数组
 */

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Color = __webpack_require__(6);
var Material = __webpack_require__(27);

/**
 * PBR材质
 * @class
 * @extends Material
 * @example
 * const material = new Hilo3d.PBRMaterial();
 */
var PBRMaterial = Class.create( /** @lends PBRMaterial.prototype */{
  Extends: Material,
  /**
   * @default true
   * @type {boolean}
   */
  isPBRMaterial: true,
  /**
   * @default PBRMaterial
   * @type {string}
   */
  className: 'PBRMaterial',
  /**
   * 光照类型，只能为 PBR
   * @default PBR
   * @readOnly
   * @type {string}
   */
  lightType: 'PBR',
  /**
   * 基础颜色
   * @default null
   * @type {Color}
   */
  baseColor: null,
  /**
   * 基础颜色贴图
   * @default null
   * @type {Texture}
   */
  baseColorMap: null,
  /**
   * 金属度
   * @default 1
   * @type {Number}
   */
  metallic: 1,
  /**
   * 金属度贴图
   * @default null
   * @type {Texture}
   */
  metallicMap: null,
  /**
   * 粗糙度
   * @default 1
   * @type {Number}
   */
  roughness: 1,
  /**
   * 粗糙度贴图
   * @default null
   * @type {Texture}
   */
  roughnessMap: null,
  /**
   * 金属度及粗糙度贴图，金属度为B通道，粗糙度为G通道，可以指定R通道作为环境光遮蔽
   * @default null
   * @type {Texture}
   */
  metallicRoughness: null,
  /**
   * 环境光遮蔽
   * @default 1
   * @type {Texture|Number}
   */
  ao: 1,
  /**
   * 环境光遮蔽贴图(AO MAP)包含在 metallicRoughness 的R通道中
   * @default false
   * @type {boolean}
   */
  aoInMetallicRoughness: false,
  /**
   * 法线贴图
   * @default null
   * @type {Texture}
   */
  normalMap: null,
  /**
   * 漫反射辐照(Diffuse IBL)贴图
   * @default null
   * @type {CubeTexture}
   */
  diffuseEnvMap: null,
  /**
   * BRDF贴图，跟环境反射贴图一起使用 [示例]{@link https://gw.alicdn.com/tfs/TB1EvwBRFXXXXbNXpXXXXXXXXXX-256-256.png}
   * @default null
   * @type {Texture}
   */
  brdfLUT: null,
  /**
   * 环境反射(Specular IBL)贴图
   * @default null
   * @type {CubeTexture}
   */
  specularEnvMap: null,
  /**
   * 放射光贴图，或颜色
   * @default Color(0, 0, 0)
   * @type {Texture|Color}
   */
  emission: null,
  /**
   * 是否基于反射光泽度的 PBR，具体见 [KHR_materials_pbrSpecularGlossiness]{@link https://github.com/KhronosGroup/glTF/tree/master/extensions/Khronos/KHR_materials_pbrSpecularGlossiness}
   * @default false
   * @type {boolean}
   */
  isSpecularGlossiness: false,
  /**
   * 镜面反射率，针对 isSpecularGlossiness 渲染
   * @default Color(1, 1, 1)
   * @type {Color}
   */
  specular: null,
  /**
   * 光泽度，针对 isSpecularGlossiness 渲染，默认PBR无效
   * @default 1
   * @type {number}
   */
  glossiness: 1,
  /**
   * 镜面反射即光泽度贴图，RGB 通道为镜面反射率，A 通道为光泽度
   * @default null
   * @type {Texture}
   */
  specularGlossinessMap: null,

  usedUniformVectors: 11,
  /**
   * 透明度 0~1
   * @default 1
   * @type {number}
   */
  transparency: 1,
  /**
   * @constructs
   * @param {object} params 初始化参数，所有params都会复制到实例上
   */
  constructor: function constructor(params) {
    this.baseColor = new Color(1, 1, 1);
    this.specular = new Color(1, 1, 1);

    PBRMaterial.superclass.constructor.call(this, params);

    Object.assign(this.uniforms, {
      u_emission: 'EMISSION',
      u_baseColor: 'BASECOLOR',
      u_baseColorMap: 'BASECOLORMAP',
      u_metallic: 'METALLIC',
      u_metallicMap: 'METALLICMAP',
      u_roughness: 'ROUGHNESS',
      u_roughnessMap: 'ROUGHNESSMAP',
      u_metallicRoughness: 'METALLICROUGHNESS',
      u_ao: 'AO',
      u_diffuseEnvMap: 'DIFFUSEENVMAP',
      u_brdfLUT: 'BRDFLUT',
      u_specularEnvMap: 'SPECULARENVMAP',

      u_specular: 'SPECULAR',
      u_glossiness: 'GLOSSINESS',
      u_specularGlossinessMap: 'SPECULARGLOSSINESSMAP',

      u_normalMap: 'NORMALMAP',
      u_transparency: 'TRANSPARENCY'
    });
  },
  getRenderOption: function getRenderOption() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    PBRMaterial.superclass.getRenderOption.call(this, option);

    var needUV = false;
    if (this.baseColorMap) {
      option.BASECOLOR_MAP = 1;
      needUV = true;
    }
    if (this.metallicMap) {
      option.METALLIC_MAP = 1;
      needUV = true;
    }
    if (this.roughnessMap) {
      option.ROUGHNESS_MAP = 1;
      needUV = true;
    }
    if (this.metallicRoughness) {
      option.METALLIC_ROUGHNESS = 1;
      needUV = true;
    }
    if (this.ao && this.ao.isTexture) {
      option.AO_MAP = 1;
      needUV = true;
    }
    if (this.aoInMetallicRoughness) {
      option.AO_IN_METALLIC_ROUGHNESS = 1;
    }

    if (this.diffuseEnvMap) {
      option.DIFFUSE_ENV_MAP = 1;
    }
    if (this.brdfLUT && this.specularEnvMap) {
      option.SPECULAR_ENV_MAP = 1;
    }

    if (this.isSpecularGlossiness) {
      option.PBR_SPECULAR_GLOSSINESS = 1;
      if (this.specularGlossinessMap) {
        option.SPECULAR_GLOSSINESS_MAP = 1;
        needUV = true;
      }
    }

    if (this.emission) {
      option.EMISSION_MAP = 1;
      needUV = true;
    }

    if (this.transparency.isTexture) {
      option.TRANSPARENCY_MAP = 1;
      needUV = true;
    }

    if (needUV) {
      option.HAS_TEXCOORD0 = 1;
    }

    return option;
  }
});

module.exports = PBRMaterial;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Texture = __webpack_require__(15);
var BasicLoader = __webpack_require__(12);

var placeHolder = new Image();
placeHolder.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * 懒加载纹理
 * @class
 * @extends Texture
 * @example
 * var material = new Hilo3d.BasicMaterial({
 *     diffuse: new Hilo3d.LazyTexture({
 *         crossOrigin: true,
 *         src: '//img.alicdn.com/tfs/TB1aNxtQpXXXXX1XVXXXXXXXXXX-1024-1024.jpg'
 *     });
 * });
 */
var LazyTexture = Class.create( /** @lends LazyTexture.prototype */{
    Extends: Texture,
    /**
     * @default true
     * @type {boolean}
     */
    isLazyTexture: true,
    /**
     * @default LazyTexture
     * @type {string}
     */
    className: 'LazyTexture',

    _src: '',
    /**
     * 图片是否跨域
     * @default false
     * @type {boolean}
     */
    crossOrigin: false,
    /**
     * 是否在设置src后立即加载图片
     * @default true
     * @type {boolean}
     */
    autoLoad: true,
    /**
     * 图片地址
     * @type {string}
     */
    src: {
        get: function get() {
            return this._src;
        },
        set: function set(src) {
            if (this._src !== src) {
                this._src = src;
                if (this.autoLoad) {
                    this.load();
                }
            }
        }
    },
    /**
     * @constructs
     * @param {object} params 初始化参数，所有params都会复制到实例上
     * @param {boolean} [params.crossOrigin=false] 是否跨域
     * @param {Image} [params.placeHolder] 占位图片，默认为1像素的透明图片
     * @param {boolean} [params.autoLoad=true] 是否自动加载
     * @param {string} [params.src] 图片地址
     */
    constructor: function constructor(params) {
        if (params) {
            if ('crossOrigin' in params) {
                this.crossOrigin = params.crossOrigin;
            }
            if ('autoLoad' in params) {
                this.autoLoad = params.autoLoad;
            }
        }
        LazyTexture.superclass.constructor.call(this, params);
        this.image = params.placeHolder || placeHolder;
    },

    /**
     * 加载图片
     * @return {Promise} 返回加载的Promise
     */
    load: function load() {
        var _this = this;

        LazyTexture.loader = LazyTexture.loader || new BasicLoader();
        return LazyTexture.loader.loadImg(this.src, this.crossOrigin).then(function (img) {
            _this.image = img;
            _this.needUpdate = true;
        }, function (err) {
            console.warn('LazyTexture Failed ' + err);
        });
    }
});

module.exports = LazyTexture;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* eslint no-unused-vars: "off" */

var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var Vector3 = __webpack_require__(5);
var Quaternion = __webpack_require__(19);
var Euler = __webpack_require__(30);
var util = __webpack_require__(3);

var tempVector31 = new Vector3();
var tempVector32 = new Vector3();
var tempQuat1 = new Quaternion();
var tempQuat2 = new Quaternion();
var tempEuler = new Euler();

function ascCompare(a, b) {
    return a - b;
}

/**
 * 元素动画状态序列处理
 * @class
 */
var AnimationStates = Class.create( /** @lends AnimationStates.prototype */{
    Statics: {
        interpolation: {
            LINEAR: function LINEAR(a, b, t) {
                if (a.isQuaternion) {
                    return a.slerp(b, t);
                } else if (a.isVector2 || a.isVector3 || a.isVector4) {
                    return a.lerp(b, t);
                }
                return a + t * (b - a);
            },
            STEP: function STEP(a, b, t) {
                return a;
            },
            CATMULLROMSPLINE: function CATMULLROMSPLINE(a, b, t) {
                return a;
            },
            CUBICSPLINE: function CUBICSPLINE(a, b, t) {
                return a;
            }
        },
        /**
         * 状态类型
         * @memberOf AnimationStates
         * @static
         * @enum {string}
         */
        StateType: {
            TRANSLATE: 'Translation',
            POSITION: 'Translation',
            TRANSLATION: 'Translation',
            SCALE: 'Scale',
            ROTATE: 'Rotation',
            ROTATION: 'Rotation',
            QUATERNION: 'Quaternion',
            WEIGHTS: 'Weights'
        },
        /**
         * 根据名字获取状态类型
         * @memberOf AnimationStates
         * @static
         * @param {string} name 名字，忽略大小写，如 translate => StateType.TRANSLATE
         * @return {AnimationStates.StateType} 返回获取的状态名
         */
        getType: function getType(name) {
            name = String(name).toUpperCase();
            return AnimationStates.StateType[name];
        }
    },
    /**
     * @default true
     * @type {boolean}
     */
    isAnimationStates: true,
    /**
     * @default AnimationStates
     * @type {string}
     */
    className: 'AnimationStates',
    /**
     * 对应的node名字(动画是根据名字关联的)
     * @type {string}
     */
    nodeName: '',
    /**
     * 状态类型
     * @type {AnimationStates.StateType}
     */
    type: '',
    /**
     * 插值算法
     * @default LINEAR
     * @type {string}
     */
    interpolationType: 'LINEAR',
    /**
     * @constructs
     * @param {Object} parmas 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(parmas) {
        /**
         * @type {string}
         */
        this.id = math.generateUUID(this.className);
        /**
         * 时间序列
         * @default []
         * @type {number[]}
         */
        this.keyTime = [];
        /**
         * 对应时间上的状态，数组长度应该跟keyTime一致，即每一帧上的状态信息
         * @default []
         * @type {Array.<Array>}
         */
        this.states = [];

        Object.assign(this, parmas);
    },

    /**
     * 查找指定时间在 keyTime 数组中的位置
     * @param {number} time 指定的时间
     * @return {number[]} 返回找到的位置，如: [low, high]
     */
    findIndexByTime: function findIndexByTime(time) {
        var indexArr = util.getIndexFromSortedArray(this.keyTime, time, ascCompare);
        // if (indexArr[0] < 0) {
        //     indexArr[0] = 0;
        // }
        // if (indexArr[1] >= this.keyTime.length) {
        //     indexArr[1] = this.keyTime.length - 1;
        // }
        return indexArr;
    },

    /**
     * 获取指定时间上对应的状态，这里会进行插值计算
     * @param {number} time 指定的时间
     * @return {number[]} 返回插值后的状态数据
     */
    getState: function getState(time) {
        if (this.type === AnimationStates.StateType.WEIGHTS) {
            return this.getWeightsState(time);
        }

        var _findIndexByTime = this.findIndexByTime(time),
            _findIndexByTime2 = _slicedToArray(_findIndexByTime, 2),
            index1 = _findIndexByTime2[0],
            index2 = _findIndexByTime2[1];

        if (index1 < 0 || index2 >= this.keyTime.length) {
            // do nothing if time is out of range
            return null;
        }
        var time1 = this.keyTime[index1];
        var time2 = this.keyTime[index2];
        var state1 = this.states[index1];
        var state2 = this.states[index2];

        if (!state1) {
            state1 = state2;
        } else if (!state2) {
            state2 = state1;
        }

        if (state1 === state2) {
            if (this.type === AnimationStates.StateType.ROTATION) {
                tempQuat1.fromEuler(tempEuler.fromArray(state1));
                return tempQuat1.elements;
            }
            return state1;
        }

        var ratio = (time - time1) / (time2 - time1);

        if (this.type === AnimationStates.StateType.ROTATION) {
            tempQuat1.fromEuler(tempEuler.fromArray(state1));
            tempQuat2.fromEuler(tempEuler.fromArray(state2));
            return this.interpolation(tempQuat1, tempQuat2, ratio).elements;
        }

        if (this.type === AnimationStates.StateType.QUATERNION) {
            tempQuat1.fromArray(state1);
            tempQuat2.fromArray(state2);
            return this.interpolation(tempQuat1, tempQuat2, ratio).elements;
        }

        tempVector31.fromArray(state1);
        tempVector32.fromArray(state2);
        return this.interpolation(tempVector31, tempVector32, ratio).elements;
    },
    getWeightsState: function getWeightsState(time) {
        var _findIndexByTime3 = this.findIndexByTime(time),
            _findIndexByTime4 = _slicedToArray(_findIndexByTime3, 2),
            index1 = _findIndexByTime4[0],
            index2 = _findIndexByTime4[1];

        var time1 = this.keyTime[index1];
        var time2 = this.keyTime[index2];
        var itemLen = this.states.length / this.keyTime.length;
        var state1 = this.states.slice(index1 * itemLen, index1 * itemLen + itemLen);
        if (index1 === index2) {
            return state1;
        }
        var state2 = this.states.slice(index2 * itemLen, index2 * itemLen + itemLen);
        var ratio = (time - time1) / (time2 - time1);
        for (var i = 0; i < itemLen; i++) {
            state1[i] = this.interpolation(state1[i], state2[i], ratio);
        }
        return state1;
    },
    interpolation: function interpolation(a, b, t) {
        return AnimationStates.interpolation[this.interpolationType](a, b, t);
    },

    /**
     * 更新指定元素的位置
     * @param {Node} node 需要更新的元素
     * @param {number[]} value 位置信息，[x, y, z]
     */
    updateNodeTranslation: function updateNodeTranslation(node, value) {
        node.x = value[0];
        node.y = value[1];
        node.z = value[2];
    },

    /**
     * 更新指定元素的缩放
     * @param {Node} node 需要更新的元素
     * @param {number[]} value 缩放信息，[scaleX, scaleY, scaleZ]
     */
    updateNodeScale: function updateNodeScale(node, value) {
        node.scaleX = value[0];
        node.scaleY = value[1];
        node.scaleZ = value[2];
    },

    /**
     * 更新指定元素的旋转(四元数)
     * @param {Node} node 需要更新的元素
     * @param {number[]} value 四元数的旋转信息，[x, y, z, w]
     */
    updateNodeQuaternion: function updateNodeQuaternion(node, value) {
        node.quaternion.fromArray(value);
    },
    updateNodeWeights: function updateNodeWeights(node, weights) {
        var originalWeightIndices = this._originalWeightIndices = this._originalWeightIndices || [];
        var len = weights.length;
        for (var i = 0; i < len; i++) {
            originalWeightIndices[i] = i;
        }
        for (var _i = 0; _i < len; _i++) {
            for (var j = _i + 1; j < len; j++) {
                if (weights[j] > weights[_i]) {
                    var t = weights[_i];
                    weights[_i] = weights[j];
                    weights[j] = t;
                    t = originalWeightIndices[_i];
                    originalWeightIndices[_i] = originalWeightIndices[j];
                    originalWeightIndices[j] = t;
                }
            }
        }

        node.traverse(function (mesh) {
            if (mesh.isMesh && mesh.geometry && mesh.geometry.isMorphGeometry) {
                mesh.geometry.update(weights, originalWeightIndices);
            }
        });
    },

    /**
     * 更新指定元素的状态
     * @param {number} time 时间，从keyTime中查找到状态然后更新
     * @param {Node} node 需要更新的元素
     */
    updateNodeState: function updateNodeState(time, node) {
        if (!node) {
            return;
        }
        var type = this.type;
        if (type === AnimationStates.StateType.ROTATION) {
            type = AnimationStates.StateType.QUATERNION;
        }
        var state = this.getState(time);
        if (!state) {
            return;
        }
        this['updateNode' + type](node, state);
    },

    /**
     * clone
     * @return {AnimationStates} 返回clone的实例
     */
    clone: function clone() {
        return new this.constructor({
            keyTime: this.keyTime,
            states: this.states,
            type: this.type,
            nodeName: this.nodeName
        });
    }
});

module.exports = AnimationStates;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);

/**
 * 动画类
 * @class
 */
var Animation = Class.create( /** @lends Animation.prototype */{
    Statics: {
        _anims: [],
        /**
         * tick
         * @memberOf Animation
         * @static
         * @param  {Number} dt 一帧时间
         */
        tick: function tick(dt) {
            this._anims.forEach(function (anim) {
                return anim.tick(dt);
            });
        }
    },
    /**
     * @default true
     * @type {boolean}
     */
    isAnimation: true,
    /**
     * @default Animation
     * @type {string}
     */
    className: 'Animation',
    /**
     * 动画是否暂停
     * @default false
     * @type {boolean}
     */
    paused: false,
    /**
     * 动画当前播放次数
     * @default 0
     * @type {number}
     */
    currentLoopCount: 0,
    /**
     * 动画需要播放的次数，默认值为 Infinity 表示永远循环
     * @default Infinity
     * @type {number}
     */
    loop: Infinity,
    /**
     * 动画当前时间
     * @default 0
     * @type {number}
     */
    currentTime: 0,
    /**
     * 动画播放速度
     * @default 1
     * @type {number}
     */
    timeScale: 1,
    /**
     * 动画开始时间
     * @default 0
     * @type {number}
     */
    startTime: 0,
    /**
     * 动画结束时间，初始化后会根据 AnimationStates 来自动获取，也可以通过 play 来改变
     * @default 0
     * @type {number}
     */
    endTime: 0,
    /**
     * 动画总时间，初始化后会根据 AnimationStates 来自动获取
     * @default 0
     * @type {number}
     */
    totalTime: 0,
    nodeNameMap: null,
    _rootNode: null,
    /**
     * 动画根节点，不指定根节点将无法正常播放动画
     * @default null
     * @type {Node}
     */
    rootNode: {
        get: function get() {
            return this._rootNode;
        },
        set: function set(value) {
            this._rootNode = value;
            this.initNodeNameMap();
        }
    },
    /**
     * @constructs
     * @param {Object} parmas 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(parmas) {
        /**
         * @type {string}
         */
        this.id = math.generateUUID(this.className);
        /**
         * 动画状态列表
         * @default []
         * @type {AnimationStates[]}
         */
        this.animStatesList = [];
        /**
         * 动画剪辑列表，{ name: { start: 0, end: 1} }，play的时候可以通过name来播放某段剪辑
         * @default {}
         * @type {Object}
         */
        this.clips = {};
        Object.assign(this, parmas);
        this.initTotalTime();
    },

    /**
     * 添加动画剪辑
     * @param {string} name 剪辑名字
     * @param {number} start 动画开始时间
     * @param {number} end 动画结束时间
     */
    addClip: function addClip(name, start, end) {
        this.clips[name] = {
            start: start,
            end: end
        };
    },

    /**
     * 移除动画剪辑
     * @param {string} name 需要移除的剪辑名字
     */
    removeClip: function removeClip(name) {
        this.clips[name] = null;
    },
    initTotalTime: function initTotalTime() {
        var totalTime = 0;
        this.animStatesList.forEach(function (animStates) {
            totalTime = Math.max(Math.max.apply(Math, animStates.keyTime), totalTime);
        });
        this.totalTime = totalTime;
    },
    initNodeNameMap: function initNodeNameMap() {
        if (this._rootNode) {
            this.nodeNameMap = this._rootNode.getChildrenNameMap();
        }
    },
    tick: function tick(dt) {
        var _this = this;

        if (this.paused) {
            return;
        }
        this.currentTime += dt / 1000 * this.timeScale;
        if (this.currentTime > this.endTime) {
            this.currentLoopCount++;
            if (!this.loop || this.currentLoopCount >= this.loop) {
                this.stop();
                return;
            }
            this.currentTime = this.startTime;
        }
        this.animStatesList.forEach(function (animStates) {
            animStates.updateNodeState(_this.currentTime, _this.nodeNameMap[animStates.nodeName]);
        });
    },

    /**
     * 播放动画(剪辑)
     * @param {number|string} [startOrClipName=0] 动画开始时间，或者动画剪辑名字
     * @param {number} [end=this.totalTime] 动画结束时间，如果是剪辑的话不需要传
     */
    play: function play(startOrClipName, end) {
        var start = void 0;
        if (typeof startOrClipName === 'string') {
            var clip = this.clips[startOrClipName];
            if (clip) {
                start = clip.start;
                end = clip.end;
            } else {
                console.warn('no this animation clip name:' + startOrClipName);
            }
        } else {
            start = startOrClipName;
        }

        if (start === undefined) {
            start = 0;
        }
        if (end === undefined) {
            end = this.totalTime;
        }

        this.endTime = Math.min(end, this.totalTime);
        this.startTime = Math.min(start, this.endTime);
        this.currentTime = this.startTime;
        this.currentLoopCount = 0;

        // 先移除，然后再插入
        this.stop();
        this.paused = false;
        Animation._anims.push(this);
    },

    /**
     * 停止动画，这个会将动画从Ticker中移除，需要重新调用play才能再次播放
     */
    stop: function stop() {
        this.paused = true;
        var anims = Animation._anims;
        var index = anims.indexOf(this);
        if (index !== -1) {
            anims.splice(index, 1);
        }
    },

    /**
     * 暂停动画，这个不会将动画从Ticker中移除
     */
    pause: function pause() {
        this.paused = true;
    },

    /**
     * 恢复动画播放，只能针对 pause 暂停后恢复
     */
    resume: function resume() {
        this.paused = false;
    },

    /**
     * clone动画
     * @param {Node} rootNode 目标动画根节点
     * @return {Animation} clone的动画对象
     */
    clone: function clone(rootNode) {
        var anim = new this.constructor({
            rootNode: rootNode,
            animStatesList: this.animStatesList,
            timeScale: this.timeScale,
            loop: this.loop,
            paused: this.paused,
            currentTime: this.currentTime,
            startTime: this.startTime,
            endTime: this.endTime,
            clips: this.clips
        });
        if (!this.paused) {
            anim.play();
        }
        return anim;
    }
});

module.exports = Animation;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var BasicLoader = __webpack_require__(12);
var Texture = __webpack_require__(15);

/**
 * Texture加载类
 * @class
 * @extends {BasicLoader}
 * @example
 * var loader = new Hilo3d.TextureLoader();
 * loader.load({
 *     crossOrigin: true,
 *     src: '//gw.alicdn.com/tfs/TB1iNtERXXXXXcBaXXXXXXXXXXX-600-600.png'
 * }).then(function (diffuse) {
 *     var material = new Hilo3d.BasicMaterial({
 *         diffuse: diffuse
 *     });
 *     ...
 * });
 */
var TextureLoader = Class.create( /** @lends TextureLoader.prototype */{
    Extends: BasicLoader,
    /**
     * @constructs
     */
    constructor: function constructor() {
        TextureLoader.superclass.constructor.call(this);
    },

    /**
     * 加载Texture
     * @param {object} params 加载参数
     * @param {string} params.src 纹理图片地址
     * @param {boolean} params.crossOrigin 是否跨域，不传将自动判断
     * @async
     * @return {Promise<Texture, Error>} 返回加载完的Texture对象
     */
    load: function load(params) {
        return this.loadImg(params.src, params.crossOrigin).then(function (img) {
            var args = Object.assign({}, params);
            args.image = img;
            delete args.type;
            return new Texture(args);
        }).catch(function (err) {
            console.warn('load Texture failed', err.message, err.stack);
            throw err;
        });
    }
});

module.exports = TextureLoader;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var BasicLoader = __webpack_require__(12);
var CubeTexture = __webpack_require__(86);

/**
 * CubeTexture加载类
 * @class
 * @extends {BasicLoader}
 * @example
 * var loader = new Hilo3d.CubeTextureLoader();
 * loader.load({
 *     crossOrigin: true,
 *     images: [
 *         '//gw.alicdn.com/tfs/TB1Ss.ORpXXXXcNXVXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1YhUDRpXXXXcyaXXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1Y1MORpXXXXcpXVXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1ZgAqRpXXXXa0aFXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1IVZNRpXXXXaNXFXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1M3gyRpXXXXb9apXXXXXXXXXX-2048-2048.jpg_960x960.jpg'
 *     ]
 * }).then(function (skybox) {
 *     var material = new Hilo3d.BasicMaterial({
 *         diffuse: skybox
 *     });
 *     ...
 * });
 */
var CubeTextureLoader = Class.create( /** @lends CubeTextureLoader.prototype */{
    Extends: BasicLoader,
    /**
     * @constructs
     */
    constructor: function constructor() {
        CubeTextureLoader.superclass.constructor.call(this);
    },

    /**
     * 加载CubeTexture
     * @param {object} params 加载参数
     * @param {boolean} params.crossOrigin 是否跨域，不传将自动判断
     * @param {Array.<string>} params.images 纹理图片地址数组，顺序为 right, left, top, bottom, front, back
     * @param {string} params.right 右面的图片地址
     * @param {string} params.left 左面的图片地址
     * @param {string} params.top 上面的图片地址
     * @param {string} params.bottom 下面的图片地址
     * @param {string} params.front 前面的图片地址
     * @param {string} params.back 背面的图片地址
     * @async
     * @return {Promise<CubeTexture, Error>} 返回加载完的CubeTexture对象
     */
    load: function load(params) {
        var _this = this;

        var images = void 0;
        if (params.images && Array.isArray(params.images)) {
            images = params.images;
        } else {
            images = [params.right, params.left, params.top, params.bottom, params.front, params.back];
        }
        return Promise.all(images.map(function (img) {
            return _this.loadImg(img, params.crossOrigin);
        })).then(function (images) {
            var args = Object.assign({}, params);
            delete args.images;
            delete args.type;
            delete args.right;
            delete args.left;
            delete args.top;
            delete args.bottom;
            delete args.front;
            delete args.back;
            args.image = images;
            return new CubeTexture(args);
        }).catch(function (err) {
            console.warn('load CubeTexture failed', err.message, err.stack);
            throw err;
        });
    }
});

module.exports = CubeTextureLoader;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Texture = __webpack_require__(15);

var _require = __webpack_require__(2),
    TEXTURE_CUBE_MAP = _require.TEXTURE_CUBE_MAP,
    RGB = _require.RGB,
    LINEAR = _require.LINEAR,
    CLAMP_TO_EDGE = _require.CLAMP_TO_EDGE,
    TEXTURE_CUBE_MAP_POSITIVE_X = _require.TEXTURE_CUBE_MAP_POSITIVE_X;

/**
 * 立方体纹理
 * @class
 * @extends Texture
 * @example
 * var loadQueue = new Hilo3d.LoadQueue([{
 *     crossOrigin: 'anonymous',
 *     src: '//gw.alicdn.com/tfs/TB15OJpQFXXXXXgXVXXXXXXXXXX-512-512.png'
 * }, {
 *     crossOrigin: 'anonymous',
 *     src: '//gw.alicdn.com/tfs/TB1gwNqQFXXXXcIXFXXXXXXXXXX-512-512.png'
 * }, {
 *     crossOrigin: 'anonymous',
 *     src: '//gw.alicdn.com/tfs/TB1pyNcQFXXXXb7XVXXXXXXXXXX-512-512.png'
 * }, {
 *     crossOrigin: 'anonymous',
 *     src: '//gw.alicdn.com/tfs/TB1FilNQFXXXXcKXXXXXXXXXXXX-512-512.png'
 * }, {
 *     crossOrigin: 'anonymous',
 *     src: '//gw.alicdn.com/tfs/TB1gIpqQFXXXXcZXFXXXXXXXXXX-512-512.png'
 * }, {
 *     crossOrigin: 'anonymous',
 *     src: '//gw.alicdn.com/tfs/TB1RFXLQFXXXXXEXpXXXXXXXXXX-512-512.png'
 * }]).on('complete', function () {
 *     var result = loadQueue.getAllContent();
 *     var skyboxMap = new Hilo3d.CubeTexture({
 *         image: result
 *     });
 *     var skybox = new Hilo3d.Mesh({
 *         geometry: new Hilo3d.BoxGeometry(),
 *         material: new Hilo3d.BasicMaterial({
 *             lightType: 'NONE',
 *             diffuse: skyboxMap
 *         })
 *     });
 *     stage.addChild(skybox);
 * });
 */


var CubeTexture = Class.create( /** @lends CubeTexture.prototype */{
    Extends: Texture,
    /**
     * @default true
     * @type {boolean}
     */
    isCubeTexture: true,
    /**
     * @default CubeTexture
     * @type {string}
     */
    className: 'CubeTexture',

    /**
     * @default TEXTURE_CUBE_MAP
     * @type {number}
     */
    target: TEXTURE_CUBE_MAP,
    /**
     * @default RGB
     * @type {number}
     */
    internalFormat: RGB,
    /**
     * @default RGB
     * @type {number}
     */
    format: RGB,

    /**
     * @default LINEAR
     * @type {number}
     */
    magFilter: LINEAR,
    /**
     * @default LINEAR
     * @type {number}
     */
    minFilter: LINEAR,
    /**
     * @default CLAMP_TO_EDGE
     * @type {number}
     */
    wrapS: CLAMP_TO_EDGE,
    /**
     * @default CLAMP_TO_EDGE
     * @type {number}
     */
    wrapT: CLAMP_TO_EDGE,
    /**
     * @constructs
     * @param {object} [params] 初始化参数，所有params都会复制到实例上
     * @param {Image[]} [params.image] 图片列表，共6张
     */
    constructor: function constructor(params) {
        CubeTexture.superclass.constructor.call(this, params);
        this.image = this.image || [];
    },
    _uploadTexture: function _uploadTexture(state) {
        var _this = this;

        if (!Array.isArray(this.image) || this.image.length !== 6) {
            console.error('CubeTexture image must be an Array of length 6', this.image);
            return;
        }
        this.image.forEach(function (img, i) {
            state.gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + i, _this.level, _this.internalFormat, _this.format, _this.type, img);
        });
    },

    /**
     * 右侧的图片
     * @type {Image}
     */
    right: {
        get: function get() {
            return this.image[0];
        },
        set: function set(img) {
            this.image[0] = img;
        }
    },
    /**
     * 左侧的图片
     * @type {Image}
     */
    left: {
        get: function get() {
            return this.image[1];
        },
        set: function set(img) {
            this.image[1] = img;
        }
    },
    /**
     * 顶部的图片
     * @type {Image}
     */
    top: {
        get: function get() {
            return this.image[2];
        },
        set: function set(img) {
            this.image[2] = img;
        }
    },
    /**
     * 底部的图片
     * @type {Image}
     */
    bottom: {
        get: function get() {
            return this.image[3];
        },
        set: function set(img) {
            this.image[3] = img;
        }
    },
    /**
     * 朝前的图片
     * @type {Image}
     */
    front: {
        get: function get() {
            return this.image[4];
        },
        set: function set(img) {
            this.image[4] = img;
        }
    },
    /**
     * 朝后的图片
     * @type {Image}
     */
    back: {
        get: function get() {
            return this.image[5];
        },
        set: function set(img) {
            this.image[5] = img;
        }
    }
});

module.exports = CubeTexture;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Material = __webpack_require__(27);

/**
 * Shader材质
 * @class
 * @extends Material
 * @example
 * const material = new Hilo3d.ShaderMaterial({
 *     attributes:{
 *         a_pos: 'POSITION'
 *     },
 *     uniforms:{
 *         u_mat:'MODELVIEWPROJECTION',
 *         u_color_b:{
 *             get:function(mesh, material, programInfo){
 *                 return Math.random();
 *             }
 *         }
 *     },
 *     vs:`
 *         precision highp float;
 *         attribute vec3 a_pos;
 *         uniform mat4 u_mat;
 * 
 *         void main(void) {
 *             gl_Position = u_mat * vec4(a_pos, 1.0);
 *         }
 *     `,
 *     fs:`
 *         precision highp float;
 *         uniform float u_color_b;
 * 
 *         void main(void) {
 *             gl_FragColor = vec4(0.6, 0.8, u_color_b, 1);
 *         }
 *     `
 * });
 */
var ShaderMaterial = Class.create( /** @lends ShaderMaterial.prototype */{
  Extends: Material,
  /**
   * @default true
   * @type {boolean}
   */
  isShaderMaterial: true,
  /**
   * @default ShaderMaterial
   * @type {string}
   */
  className: 'ShaderMaterial',
  /**
   * vertex shader 代码
   * @type {string}
   */
  vs: '',
  /**
   * fragment shader 代码
   * @type {string}
   */
  fs: '',
  /**
   * @constructs
   * @param {object} params 初始化参数，所有params都会复制到实例上
   */
  constructor: function constructor(params) {
    ShaderMaterial.superclass.constructor.call(this, params);
  }
});

module.exports = ShaderMaterial;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var math = __webpack_require__(1);
var OrthographicCamera = __webpack_require__(78);
var PerspectiveCamera = __webpack_require__(44);
var FrameBuffer = __webpack_require__(26);
var semantic = __webpack_require__(24);
var ShadowMaterial = __webpack_require__(144);
var Color = __webpack_require__(6);
var Matrix4 = __webpack_require__(4);

var shadowMaterial = null;
var clearColor = new Color(1, 1, 1);
var tempMatrix4 = new Matrix4();

var LightShadow = Class.create({
    isLightShadow: true,
    className: 'LightShadow',

    light: null,
    renderer: null,
    framebuffer: null,
    camera: null,
    width: 1024,
    height: 1024,
    maxBias: 0.05,
    minBias: 0.005,
    debug: false,
    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);
        Object.assign(this, params);
    },
    createFrameBuffer: function createFrameBuffer() {
        if (this.framebuffer) {
            return;
        }

        this.framebuffer = new FrameBuffer(this.renderer, {
            width: this.width,
            height: this.height
        });

        if (this.debug) {
            this.showShadowMap();
        }
    },
    updateLightCamera: function updateLightCamera(currentCamera) {
        if (this.light.isDirectionalLight) {
            this.updateDirectionalLightCamera(currentCamera);
        } else if (this.light.isSpotLight) {
            this.updateSpotLightCamera(currentCamera);
        }
    },
    updateDirectionalLightCamera: function updateDirectionalLightCamera(currentCamera) {
        var light = this.light;

        this.camera.lookAt(light.direction);
        this.camera.updateViewMatrix();
        tempMatrix4.multiply(this.camera.viewMatrix, currentCamera.worldMatrix);
        var geometry = currentCamera.getGeometry();
        var bounds = geometry.getBounds(tempMatrix4);

        this.camera.near = bounds.zMin;
        this.camera.far = bounds.zMax;
        this.camera.left = bounds.xMin;
        this.camera.right = bounds.xMax;
        this.camera.bottom = bounds.yMin;
        this.camera.top = bounds.yMax;
    },
    updateSpotLightCamera: function updateSpotLightCamera(currentCamera) {
        var light = this.light;
        this.camera.lookAt(light.direction);

        this.camera.fov = light.outerCutOff * 2;
        this.camera.near = 0.01;
        this.camera.far = currentCamera.far;
        this.camera.aspect = 1;
        this.camera.updateViewMatrix();
    },
    createCamera: function createCamera(currentCamera) {
        if (this.camera) {
            return;
        }
        if (this.light.isDirectionalLight) {
            this.camera = new OrthographicCamera();
        } else if (this.light.isSpotLight) {
            this.camera = new PerspectiveCamera();
        }
        this.camera.addTo(this.light);
        this.updateLightCamera(currentCamera);
    },
    createShadowMap: function createShadowMap(currentCamera) {
        this.createFrameBuffer();
        this.createCamera(currentCamera);

        var renderer = this.renderer,
            framebuffer = this.framebuffer,
            camera = this.camera;


        if (!shadowMaterial) {
            shadowMaterial = new ShadowMaterial();
        }

        framebuffer.bind();
        renderer.state.viewport(0, 0, this.width, this.height);
        renderer.clear(clearColor);
        camera.updateViewProjectionMatrix();
        semantic.setCamera(camera);
        renderer.forceMaterial = shadowMaterial;
        renderer.renderScene();
        delete renderer.forceMaterial;
        framebuffer.unbind();
        semantic.setCamera(currentCamera);
        renderer.viewport();
    },
    showShadowMap: function showShadowMap() {
        var _this = this;

        this.renderer.on('afterRender', function () {
            _this.framebuffer.render(0, 0.7, 0.3, 0.3);
        });
    }
});

module.exports = LightShadow;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Hilo 1.1.1 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */


/**
 * @language=en
 * @class Browser feature set
 * @static
 * @module hilo/util/browser
 */
var browser = (function(){
    var ua = navigator.userAgent;
    var doc = document;
    var win = window;
    var docElem = doc.documentElement;

    var data = /** @lends browser */ {
        /**
         * 是否是iphone
         * @type {Boolean}
         */
        iphone: /iphone/i.test(ua),

        /**
         * 是否是ipad
         * @type {Boolean}
         */
        ipad: /ipad/i.test(ua),

        /**
         * 是否是ipod
         * @type {Boolean}
         */
        ipod: /ipod/i.test(ua),

        /**
         * 是否是ios
         * @type {Boolean}
         */
        ios: /iphone|ipad|ipod/i.test(ua),

        /**
         * 是否是android
         * @type {Boolean}
         */
        android: /android/i.test(ua),

        /**
         * 是否是webkit
         * @type {Boolean}
         */
        webkit: /webkit/i.test(ua),

        /**
         * 是否是chrome
         * @type {Boolean}
         */
        chrome: /chrome/i.test(ua),

        /**
         * 是否是safari
         * @type {Boolean}
         */
        safari: /safari/i.test(ua),

        /**
         * 是否是firefox
         * @type {Boolean}
         */
        firefox: /firefox/i.test(ua),

        /**
         * 是否是ie
         * @type {Boolean}
         */
        ie: /msie/i.test(ua),

        /**
         * 是否是opera
         * @type {Boolean}
         */
        opera: /opera/i.test(ua),
        /**
         * 是否支持触碰事件。
         * @type {String}
         */
        supportTouch: 'ontouchstart' in win,

        /**
         * 是否支持canvas元素。
         * @type {Boolean}
         */
        supportCanvas: doc.createElement('canvas').getContext != null,
        /**
         * 是否支持本地存储localStorage。
         * @type {Boolean}
         */
        supportStorage: false,

        /**
         * 是否支持检测设备方向orientation。
         * @type {Boolean}
         */
        supportOrientation: 'orientation' in win,

        /**
         * 是否支持检测加速度devicemotion。
         * @type {Boolean}
         */
        supportDeviceMotion: 'ondevicemotion' in win
    };

    //`localStorage` is null or `localStorage.setItem` throws error in some cases (e.g. localStorage is disabled)
    try{
        var value = 'hilo';
        localStorage.setItem(value, value);
        localStorage.removeItem(value);
        data.supportStorage = true;
    }catch(e){}

    /**
     * 浏览器厂商CSS前缀的js值。比如：webkit。
     * @type {String}
     */
    var jsVendor = data.jsVendor = data.webkit ? 'webkit' : data.firefox ? 'webkit' : data.opera ? 'o' : data.ie ? 'ms' : '';
    /**
     * 浏览器厂商CSS前缀的css值。比如：-webkit-。
     * @type {String}
     */
    var cssVendor = data.cssVendor = '-' + jsVendor + '-';

    //css transform/3d feature dectection
    var testElem = doc.createElement('div'), style = testElem.style;
    /**
     * 是否支持CSS Transform变换。
     * @type {Boolean}
     */
    var supportTransform = style[jsVendor + 'Transform'] != undefined;

    /**
     * 是否支持CSS Transform 3D变换。
     * @type {Boolean}
     */
    var supportTransform3D = style[jsVendor + 'Perspective'] != undefined;
    if(supportTransform3D){
        testElem.id = 'test3d';
        style = doc.createElement('style');
        style.textContent = '@media ('+ cssVendor +'transform-3d){#test3d{height:3px}}';
        doc.head.appendChild(style);

        docElem.appendChild(testElem);
        supportTransform3D = testElem.offsetHeight == 3;
        doc.head.removeChild(style);
        docElem.removeChild(testElem);
    }
    data.supportTransform = supportTransform;
    data.supportTransform3D = supportTransform3D;

    return data;
})();

module.exports = browser;

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global HILO3D_VERSION */

var Hilo3d = {
    Class: __webpack_require__(0),
    EventMixin: __webpack_require__(9),
    Fog: __webpack_require__(102),
    Mesh: __webpack_require__(18),
    Node: __webpack_require__(10),
    SkinedMesh: __webpack_require__(50),
    Stage: __webpack_require__(112),
    Tween: __webpack_require__(128),
    Geometry: __webpack_require__(7),
    GeometryData: __webpack_require__(8),
    PlaneGeometry: __webpack_require__(132),
    BoxGeometry: __webpack_require__(133),
    SphereGeometry: __webpack_require__(134),
    Camera: __webpack_require__(43),
    PerspectiveCamera: __webpack_require__(44),
    OrthographicCamera: __webpack_require__(78),
    WebGLRenderer: __webpack_require__(52),
    capabilities: __webpack_require__(16),
    extensions: __webpack_require__(25),
    FrameBuffer: __webpack_require__(26),
    VertexArrayObject: __webpack_require__(41),
    Program: __webpack_require__(40),
    Buffer: __webpack_require__(77),
    LoadQueue: __webpack_require__(135),
    BasicLoader: __webpack_require__(12),
    GLTFLoader: __webpack_require__(79),
    TextureLoader: __webpack_require__(84),
    CubeTextureLoader: __webpack_require__(85),
    ShaderMaterialLoader: __webpack_require__(140),
    Texture: __webpack_require__(15),
    LazyTexture: __webpack_require__(81),
    CubeTexture: __webpack_require__(86),
    DataTexture: __webpack_require__(32),
    Shader: __webpack_require__(33),
    math: __webpack_require__(1),
    Color: __webpack_require__(6),
    Euler: __webpack_require__(30),
    Vector2: __webpack_require__(42),
    Vector3: __webpack_require__(5),
    Vector4: __webpack_require__(29),
    Matrix3: __webpack_require__(23),
    Matrix4: __webpack_require__(4),
    Quaternion: __webpack_require__(19),
    Ray: __webpack_require__(45),
    semantic: __webpack_require__(24),
    Material: __webpack_require__(27),
    BasicMaterial: __webpack_require__(13),
    PBRMaterial: __webpack_require__(80),
    ShaderMaterial: __webpack_require__(87),
    AxisHelper: __webpack_require__(141),
    AxisNetHelper: __webpack_require__(142),
    Light: __webpack_require__(21),
    DirectionalLight: __webpack_require__(143),
    PointLight: __webpack_require__(145),
    SpotLight: __webpack_require__(146),
    AmbientLight: __webpack_require__(147),
    Animation: __webpack_require__(83),
    AnimationStates: __webpack_require__(82),
    MeshPicker: __webpack_require__(148),
    Ticker: __webpack_require__(149),
    util: __webpack_require__(3),
    log: __webpack_require__(51),
    Cache: __webpack_require__(11),
    browser: __webpack_require__(151),
    WebGLSupport: __webpack_require__(152),
    version: "1.3.13",
    constants: {}
};

Object.assign(Hilo3d.constants, __webpack_require__(2));

if (typeof window !== 'undefined') {
    window.Hilo3d = Hilo3d;
}
module.exports = Hilo3d;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.1.1 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(22);



/**
 * @language=en
 * @class EventMixin is a mixin on event related functions. Use Class.mix(target, EventMixin) to add event function onto target.
 * @static
 * @mixin
 * @module hilo/event/EventMixin
 * @requires hilo/core/Class
 */
var EventMixin = /** @lends EventMixin# */{
    _listeners: null,

    /**
     * @language=en
     * Add an event listenser.
     * @param {String} type Event type to listen.
     * @param {Function} listener Callback function of event listening.
     * @param {Boolean} once Listen on event only once and no more response after the first response?
     * @returns {Object} The Event itself. Functions chain call supported.
     */
    on: function(type, listener, once){
        var listeners = (this._listeners = this._listeners || {});
        var eventListeners = (listeners[type] = listeners[type] || []);
        for(var i = 0, len = eventListeners.length; i < len; i++){
            var el = eventListeners[i];
            if(el.listener === listener) return;
        }
        eventListeners.push({listener:listener, once:once});
        return this;
    },

    /**
     * @language=en
     * Remove one event listener. Remove all event listeners if no parameter provided, and remove all event listeners on one type which is provided as the only parameter.
     * @param {String} type The type of event listener that want to remove.
     * @param {Function} listener Event listener callback function to be removed.
     * @returns {Object} The Event itself. Functions chain call supported.
     */
    off: function(type, listener){
        //remove all event listeners
        if(arguments.length == 0){
            this._listeners = null;
            return this;
        }

        var eventListeners = this._listeners && this._listeners[type];
        if(eventListeners){
            //remove event listeners by specified type
            if(arguments.length == 1){
                delete this._listeners[type];
                return this;
            }

            for(var i = 0, len = eventListeners.length; i < len; i++){
                var el = eventListeners[i];
                if(el.listener === listener){
                    eventListeners.splice(i, 1);
                    if(eventListeners.length === 0) delete this._listeners[type];
                    break;
                }
            }
        }
        return this;
    },

    /**
     * @language=en
     * Send events. If the first parameter is an Object, take it  as an Event Object.
     * @param {String} type Event type to send.
     * @param {Object} detail The detail (parameters go with the event) of Event to send.
     * @returns {Boolean} Whether Event call successfully.
     */
    fire: function(type, detail){
        var event, eventType;
        if(typeof type === 'string'){
            eventType = type;
        }else{
            event = type;
            eventType = type.type;
        }

        var listeners = this._listeners;
        if(!listeners) return false;

        var eventListeners = listeners[eventType];
        if(eventListeners){
            var eventListenersCopy = eventListeners.slice(0);
            event = event || new EventObject(eventType, this, detail);
            if(event._stopped) return false;

            for(var i = 0; i < eventListenersCopy.length; i++){
                var el = eventListenersCopy[i];
                el.listener.call(this, event);
                if(el.once) {
                    var index = eventListeners.indexOf(el);
                    if(index > -1){
                        eventListeners.splice(index, 1);
                    }
                }
            }

            if(eventListeners.length == 0) delete listeners[eventType];
            return true;
        }
        return false;
    }
};

/**
 * @language=en
 * Event Object class. It's an private class now, but maybe will become a public class if needed.
 */
var EventObject = Class.create({
    constructor: function EventObject(type, target, detail){
        this.type = type;
        this.target = target;
        this.detail = detail;
        this.timeStamp = +new Date();
    },

    type: null,
    target: null,
    detail: null,
    timeStamp: 0,

    stopImmediatePropagation: function(){
        this._stopped = true;
    }
});

//Trick: `stopImmediatePropagation` compatibility
var RawEvent = window.Event;
if(RawEvent){
    var proto = RawEvent.prototype,
        stop = proto.stopImmediatePropagation;
    proto.stopImmediatePropagation = function(){
        stop && stop.call(this);
        this._stopped = true;
    };
}


module.exports = EventMixin;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Color = __webpack_require__(6);
var math = __webpack_require__(1);

/**
 * 雾
 * @class
 */
var Fog = Class.create( /** @lends Fog.prototype */{
  /**
   * @default true
   * @type {Boolean}
   */
  isFog: true,
  /**
   * @default Fog
   * @type {String}
   */
  className: 'Fog',
  /**
   * @constructs
   * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性。
   */
  constructor: function constructor(params) {
    /**
     * id
     * @default math.generateUUID('Fog')
     * @type {String}
     */
    this.id = math.generateUUID(this.className);

    /**
     * 雾颜色
     * @type {Color}
     * @default  new Color(1, 1, 1, 1)
     */
    this.color = new Color(1, 1, 1, 1);

    /**
     * 雾影响起始值
     * @type {Number}
     * @default 0
     */
    this.near = 0;

    /**
     * 雾影响终点值
     * @type {Number}
     * @default 10
     */
    this.far = 10;

    this.info = new Float32Array(2);
    Object.assign(this, params);
  },

  /**
   * 获取雾信息
   * @return {Array} res
   */
  getInfo: function getInfo() {
    this.info[0] = this.near;
    this.info[1] = this.far;
    return this.info;
  }
});

module.exports = Fog;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {
  ACTIVE_ATTRIBUTES: 35721,
  ACTIVE_ATTRIBUTE_MAX_LENGTH: 35722,
  ACTIVE_TEXTURE: 34016,
  ACTIVE_UNIFORMS: 35718,
  ACTIVE_UNIFORM_MAX_LENGTH: 35719,
  ALIASED_LINE_WIDTH_RANGE: 33902,
  ALIASED_POINT_SIZE_RANGE: 33901,
  ALPHA: 6406,
  ALPHA_BITS: 3413,
  ALWAYS: 519,
  ARRAY_BUFFER: 34962,
  ARRAY_BUFFER_BINDING: 34964,
  ATTACHED_SHADERS: 35717,
  BACK: 1029,
  BLEND: 3042,
  BLEND_COLOR: 32773,
  BLEND_DST_ALPHA: 32970,
  BLEND_DST_RGB: 32968,
  BLEND_EQUATION: 32777,
  BLEND_EQUATION_ALPHA: 34877,
  BLEND_EQUATION_RGB: 32777,
  BLEND_SRC_ALPHA: 32971,
  BLEND_SRC_RGB: 32969,
  BLUE_BITS: 3412,
  BOOL: 35670,
  BOOL_VEC2: 35671,
  BOOL_VEC3: 35672,
  BOOL_VEC4: 35673,
  BROWSER_DEFAULT_WEBGL: 37444,
  BUFFER_SIZE: 34660,
  BUFFER_USAGE: 34661,
  BYTE: 5120,
  CCW: 2305,
  CLAMP_TO_EDGE: 33071,
  COLOR_ATTACHMENT0: 36064,
  COLOR_BUFFER_BIT: 16384,
  COLOR_CLEAR_VALUE: 3106,
  COLOR_WRITEMASK: 3107,
  COMPILE_STATUS: 35713,
  COMPRESSED_TEXTURE_FORMATS: 34467,
  CONSTANT_ALPHA: 32771,
  CONSTANT_COLOR: 32769,
  CONTEXT_LOST_WEBGL: 37442,
  CULL_FACE: 2884,
  CULL_FACE_MODE: 2885,
  CURRENT_PROGRAM: 35725,
  CURRENT_VERTEX_ATTRIB: 34342,
  CW: 2304,
  DECR: 7683,
  DECR_WRAP: 34056,
  DELETE_STATUS: 35712,
  DEPTH_ATTACHMENT: 36096,
  DEPTH_BITS: 3414,
  DEPTH_BUFFER_BIT: 256,
  DEPTH_CLEAR_VALUE: 2931,
  DEPTH_COMPONENT: 6402,
  DEPTH_COMPONENT16: 33189,
  DEPTH_FUNC: 2932,
  DEPTH_RANGE: 2928,
  DEPTH_STENCIL: 34041,
  DEPTH_STENCIL_ATTACHMENT: 33306,
  DEPTH_TEST: 2929,
  DEPTH_WRITEMASK: 2930,
  DITHER: 3024,
  DONT_CARE: 4352,
  DST_ALPHA: 772,
  DST_COLOR: 774,
  DYNAMIC_DRAW: 35048,
  ELEMENT_ARRAY_BUFFER: 34963,
  ELEMENT_ARRAY_BUFFER_BINDING: 34965,
  EQUAL: 514,
  FASTEST: 4353,
  FLOAT: 5126,
  FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  FRAGMENT_SHADER: 35632,
  FRAMEBUFFER: 36160,
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
  FRAMEBUFFER_BINDING: 36006,
  FRAMEBUFFER_COMPLETE: 36053,
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
  FRAMEBUFFER_UNSUPPORTED: 36061,
  FRONT: 1028,
  FRONT_AND_BACK: 1032,
  FRONT_FACE: 2886,
  FUNC_ADD: 32774,
  FUNC_REVERSE_SUBTRACT: 32779,
  FUNC_SUBTRACT: 32778,
  GENERATE_MIPMAP_HINT: 33170,
  GEQUAL: 518,
  GREATER: 516,
  GREEN_BITS: 3411,
  HIGH_FLOAT: 36338,
  HIGH_INT: 36341,
  INCR: 7682,
  INCR_WRAP: 34055,
  INFO_LOG_LENGTH: 35716,
  INT: 5124,
  INT_VEC2: 35667,
  INT_VEC3: 35668,
  INT_VEC4: 35669,
  INVALID_ENUM: 1280,
  INVALID_FRAMEBUFFER_OPERATION: 1286,
  INVALID_OPERATION: 1282,
  INVALID_VALUE: 1281,
  INVERT: 5386,
  KEEP: 7680,
  LEQUAL: 515,
  LESS: 513,
  LINEAR: 9729,
  LINEAR_MIPMAP_LINEAR: 9987,
  LINEAR_MIPMAP_NEAREST: 9985,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  LINE_WIDTH: 2849,
  LINK_STATUS: 35714,
  LOW_FLOAT: 36336,
  LOW_INT: 36339,
  LUMINANCE: 6409,
  LUMINANCE_ALPHA: 6410,
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
  MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
  MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
  MAX_RENDERBUFFER_SIZE: 34024,
  MAX_TEXTURE_IMAGE_UNITS: 34930,
  MAX_TEXTURE_SIZE: 3379,
  MAX_VARYING_VECTORS: 36348,
  MAX_VERTEX_ATTRIBS: 34921,
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
  MAX_VERTEX_UNIFORM_VECTORS: 36347,
  MAX_VIEWPORT_DIMS: 3386,
  MEDIUM_FLOAT: 36337,
  MEDIUM_INT: 36340,
  MIRRORED_REPEAT: 33648,
  NEAREST: 9728,
  NEAREST_MIPMAP_LINEAR: 9986,
  NEAREST_MIPMAP_NEAREST: 9984,
  NEVER: 512,
  NICEST: 4354,
  NONE: 0,
  NOTEQUAL: 517,
  NO_ERROR: 0,
  NUM_COMPRESSED_TEXTURE_FORMATS: 34466,
  ONE: 1,
  ONE_MINUS_CONSTANT_ALPHA: 32772,
  ONE_MINUS_CONSTANT_COLOR: 32770,
  ONE_MINUS_DST_ALPHA: 773,
  ONE_MINUS_DST_COLOR: 775,
  ONE_MINUS_SRC_ALPHA: 771,
  ONE_MINUS_SRC_COLOR: 769,
  OUT_OF_MEMORY: 1285,
  PACK_ALIGNMENT: 3333,
  POINTS: 0,
  POLYGON_OFFSET_FACTOR: 32824,
  POLYGON_OFFSET_FILL: 32823,
  POLYGON_OFFSET_UNITS: 10752,
  RED_BITS: 3410,
  RENDERBUFFER: 36161,
  RENDERBUFFER_ALPHA_SIZE: 36179,
  RENDERBUFFER_BINDING: 36007,
  RENDERBUFFER_BLUE_SIZE: 36178,
  RENDERBUFFER_DEPTH_SIZE: 36180,
  RENDERBUFFER_GREEN_SIZE: 36177,
  RENDERBUFFER_HEIGHT: 36163,
  RENDERBUFFER_INTERNAL_FORMAT: 36164,
  RENDERBUFFER_RED_SIZE: 36176,
  RENDERBUFFER_STENCIL_SIZE: 36181,
  RENDERBUFFER_WIDTH: 36162,
  RENDERER: 7937,
  REPEAT: 10497,
  REPLACE: 7681,
  RGB: 6407,
  RGB5_A1: 32855,
  RGB565: 36194,
  RGBA: 6408,
  RGBA4: 32854,
  SAMPLER_2D: 35678,
  SAMPLER_CUBE: 35680,
  SAMPLES: 32937,
  SAMPLE_ALPHA_TO_COVERAGE: 32926,
  SAMPLE_BUFFERS: 32936,
  SAMPLE_COVERAGE: 32928,
  SAMPLE_COVERAGE_INVERT: 32939,
  SAMPLE_COVERAGE_VALUE: 32938,
  SCISSOR_BOX: 3088,
  SCISSOR_TEST: 3089,
  SHADER_COMPILER: 36346,
  SHADER_SOURCE_LENGTH: 35720,
  SHADER_TYPE: 35663,
  SHADING_LANGUAGE_VERSION: 35724,
  SHORT: 5122,
  SRC_ALPHA: 770,
  SRC_ALPHA_SATURATE: 776,
  SRC_COLOR: 768,
  STATIC_DRAW: 35044,
  STENCIL_ATTACHMENT: 36128,
  STENCIL_BACK_FAIL: 34817,
  STENCIL_BACK_FUNC: 34816,
  STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
  STENCIL_BACK_PASS_DEPTH_PASS: 34819,
  STENCIL_BACK_REF: 36003,
  STENCIL_BACK_VALUE_MASK: 36004,
  STENCIL_BACK_WRITEMASK: 36005,
  STENCIL_BITS: 3415,
  STENCIL_BUFFER_BIT: 1024,
  STENCIL_CLEAR_VALUE: 2961,
  STENCIL_FAIL: 2964,
  STENCIL_FUNC: 2962,
  STENCIL_INDEX: 6401,
  STENCIL_INDEX8: 36168,
  STENCIL_PASS_DEPTH_FAIL: 2965,
  STENCIL_PASS_DEPTH_PASS: 2966,
  STENCIL_REF: 2967,
  STENCIL_TEST: 2960,
  STENCIL_VALUE_MASK: 2963,
  STENCIL_WRITEMASK: 2968,
  STREAM_DRAW: 35040,
  SUBPIXEL_BITS: 3408,
  TEXTURE: 5890,
  TEXTURE0: 33984,
  TEXTURE1: 33985,
  TEXTURE2: 33986,
  TEXTURE3: 33987,
  TEXTURE4: 33988,
  TEXTURE5: 33989,
  TEXTURE6: 33990,
  TEXTURE7: 33991,
  TEXTURE8: 33992,
  TEXTURE9: 33993,
  TEXTURE10: 33994,
  TEXTURE11: 33995,
  TEXTURE12: 33996,
  TEXTURE13: 33997,
  TEXTURE14: 33998,
  TEXTURE15: 33999,
  TEXTURE16: 34000,
  TEXTURE17: 34001,
  TEXTURE18: 34002,
  TEXTURE19: 34003,
  TEXTURE20: 34004,
  TEXTURE21: 34005,
  TEXTURE22: 34006,
  TEXTURE23: 34007,
  TEXTURE24: 34008,
  TEXTURE25: 34009,
  TEXTURE26: 34010,
  TEXTURE27: 34011,
  TEXTURE28: 34012,
  TEXTURE29: 34013,
  TEXTURE30: 34014,
  TEXTURE31: 34015,
  TEXTURE_2D: 3553,
  TEXTURE_BINDING_2D: 32873,
  TEXTURE_BINDING_CUBE_MAP: 34068,
  TEXTURE_CUBE_MAP: 34067,
  TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
  TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
  TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
  TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
  TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
  TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
  TEXTURE_MAG_FILTER: 10240,
  TEXTURE_MIN_FILTER: 10241,
  TEXTURE_WRAP_S: 10242,
  TEXTURE_WRAP_T: 10243,
  TRIANGLES: 4,
  TRIANGLE_FAN: 6,
  TRIANGLE_STRIP: 5,
  UNPACK_ALIGNMENT: 3317,
  UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
  UNPACK_FLIP_Y_WEBGL: 37440,
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_INT: 5125,
  UNSIGNED_SHORT: 5123,
  UNSIGNED_SHORT_4_4_4_4: 32819,
  UNSIGNED_SHORT_5_5_5_1: 32820,
  UNSIGNED_SHORT_5_6_5: 33635,
  VALIDATE_STATUS: 35715,
  VENDOR: 7936,
  VERSION: 7938,
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
  VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
  VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
  VERTEX_ATTRIB_ARRAY_POINTER: 34373,
  VERTEX_ATTRIB_ARRAY_SIZE: 34339,
  VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
  VERTEX_ATTRIB_ARRAY_TYPE: 34341,
  VERTEX_SHADER: 35633,
  VIEWPORT: 2978,
  ZERO: 0
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var intersectRayTriangle = __webpack_require__(105)
var intersectRayPlane = __webpack_require__(107)
var intersectRaySphere = __webpack_require__(108)
var intersectRayBox = __webpack_require__(111)
var copy3 = __webpack_require__(49)

var tmpTriangle = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

var tmp3 = [0, 0, 0]

module.exports = Ray
function Ray (origin, direction) {
  this.origin = origin || [ 0, 0, 0 ]
  this.direction = direction || [ 0, 0, -1 ]
}

Ray.prototype.set = function (origin, direction) {
  this.origin = origin
  this.direction = direction
}

Ray.prototype.copy = function (other) {
  copy3(this.origin, other.origin)
  copy3(this.direction, other.direction)
}

Ray.prototype.clone = function () {
  var other = new Ray()
  other.copy(this)
  return other
}

Ray.prototype.intersectsSphere = function (center, radius) {
  return intersectRaySphere(tmp3, this.origin, this.direction, center, radius)
}

Ray.prototype.intersectsPlane = function (normal, distance) {
  return intersectRayPlane(tmp3, this.origin, this.direction, normal, distance)
}

Ray.prototype.intersectsTriangle = function (triangle) {
  return intersectRayTriangle(tmp3, this.origin, this.direction, triangle)
}

Ray.prototype.intersectsBox = function (aabb) {
  return intersectRayBox(tmp3, this.origin, this.direction, aabb)
}

Ray.prototype.intersectsTriangleCell = function (cell, positions) {
  var a = cell[0], b = cell[1], c = cell[2]
  tmpTriangle[0] = positions[a]
  tmpTriangle[1] = positions[b]
  tmpTriangle[2] = positions[c]
  return this.intersectsTriangle(tmpTriangle)
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var cross = __webpack_require__(106);
var dot = __webpack_require__(31);
var sub = __webpack_require__(46);

var EPSILON = 0.000001;
var edge1 = [0,0,0];
var edge2 = [0,0,0];
var tvec = [0,0,0];
var pvec = [0,0,0];
var qvec = [0,0,0];

module.exports = intersectTriangle;

function intersectTriangle (out, pt, dir, tri) {
    sub(edge1, tri[1], tri[0]);
    sub(edge2, tri[2], tri[0]);
    
    cross(pvec, dir, edge2);
    var det = dot(edge1, pvec);
    
    if (det < EPSILON) return null;
    sub(tvec, pt, tri[0]);
    var u = dot(tvec, pvec);
    if (u < 0 || u > det) return null;
    cross(qvec, tvec, edge1);
    var v = dot(dir, qvec);
    if (v < 0 || u + v > det) return null;
    
    var t = dot(edge2, qvec) / det;
    out[0] = pt[0] + t * dir[0];
    out[1] = pt[1] + t * dir[1];
    out[2] = pt[2] + t * dir[2];
    return out;
}


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var dot = __webpack_require__(31)
var add = __webpack_require__(47)
var scale = __webpack_require__(48)
var copy = __webpack_require__(49)

module.exports = intersectRayPlane

var v0 = [0, 0, 0]

function intersectRayPlane(out, origin, direction, normal, dist) {
  var denom = dot(direction, normal)
  if (denom !== 0) {
    var t = -(dot(origin, normal) + dist) / denom
    if (t < 0) {
      return null
    }
    scale(v0, direction, t)
    return add(out, origin, v0)
  } else if (dot(normal, origin) + dist === 0) {
    return copy(out, origin)
  } else {
    return null
  }
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var squaredDist = __webpack_require__(109)
var dot = __webpack_require__(31)
var sub = __webpack_require__(46)
var scaleAndAdd = __webpack_require__(110)
var scale = __webpack_require__(48)
var add = __webpack_require__(47)

var tmp = [0, 0, 0]

module.exports = intersectRaySphere
function intersectRaySphere (out, origin, direction, center, radius) {
  sub(tmp, center, origin)
  var len = dot(direction, tmp)
  if (len < 0) { // sphere is behind ray
    return null
  }

  scaleAndAdd(tmp, origin, direction, len)
  var dSq = squaredDist(center, tmp)
  var rSq = radius * radius
  if (dSq > rSq) {
    return null
  }

  scale(out, direction, len - Math.sqrt(rSq - dSq))
  return add(out, out, origin)
}


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = squaredDistance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return x*x + y*y + z*z
}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    out[2] = a[2] + (b[2] * scale)
    return out
}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = intersection
module.exports.distance = distance

function intersection (out, ro, rd, aabb) {
  var d = distance(ro, rd, aabb)
  if (d === Infinity) {
    out = null
  } else {
    out = out || []
    for (var i = 0; i < ro.length; i++) {
      out[i] = ro[i] + rd[i] * d
    }
  }

  return out
}

function distance (ro, rd, aabb) {
  var dims = ro.length
  var lo = -Infinity
  var hi = +Infinity

  for (var i = 0; i < dims; i++) {
    var dimLo = (aabb[0][i] - ro[i]) / rd[i]
    var dimHi = (aabb[1][i] - ro[i]) / rd[i]

    if (dimLo > dimHi) {
      var tmp = dimLo
      dimLo = dimHi
      dimHi = tmp
    }

    if (dimHi < lo || dimLo > hi) {
      return Infinity
    }

    if (dimLo > lo) lo = dimLo
    if (dimHi < hi) hi = dimHi
  }

  return lo > hi ? Infinity : lo
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Node = __webpack_require__(10);
var WebGLRenderer = __webpack_require__(52);

/**
 * 舞台类
 * @class
 * @extends Node
 * @example
 * const stage = new Hilo3d.Stage({
 *     container:document.body,
 *     width:innerWidth,
 *     height:innerHeight
 * });
 */
var Stage = Class.create( /** @lends Stage.prototype */{
    Extends: Node,

    isStage: true,
    className: 'Stage',

    /**
     * 渲染器
     * @type {WebGLRenderer}
     */
    renderer: null,

    /**
     * 摄像机
     * @type {Camera}
     */
    camera: null,

    /**
     * 像素密度
     * @type {Number}
     * @default 根据设备自动判断
     */
    pixelRatio: null,

    /**
     * 偏移值
     * @type {Number}
     * @default 0
     */
    offsetX: 0,

    /**
     * 偏移值
     * @type {Number}
     * @default 0
     */
    offsetY: 0,

    /**
     * @constructs
     * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性，所有属性会透传给 Renderer。
     * @param {HTMLElement} container stage的容器
     * @param {Number} [params.pixelRatio=根据设备自动判断] 像素密度。
     * @param {Boolean} [params.antialias=true] 是否抗锯齿。
     * @param {Boolean} [params.alpha=false] 是否背景透明。
     * @param {Boolean} [params.useFrameBuffer=false] 是否使用FrameBuffer，有后处理需求时需要。
     * @param {Color} [params.clearColor=new Color(1, 1, 1, 1)] 背景色。
     */
    constructor: function constructor(params) {
        if (!params.pixelRatio) {
            params.pixelRatio = Math.min(2, window.devicePixelRatio || 1);
        }
        Stage.superclass.constructor.call(this, params);
        this.initRenderer(params);
    },

    /**
     * 初始化渲染器
     * @private
     * @param  {Object} params
     */
    initRenderer: function initRenderer(params) {
        var canvas = this.canvas = this.createCanvas(params);
        this.renderer = new WebGLRenderer(Object.assign(params, {
            domElement: canvas
        }));
        this.resize(this.width, this.height, this.pixelRatio, true);
    },

    /**
     * 生成canvas
     * @private
     * @param  {Object} params
     * @return {Canvas}
     */
    createCanvas: function createCanvas(params) {
        var canvas = void 0;
        if (params.canvas) {
            canvas = params.canvas;
        } else {
            canvas = document.createElement('canvas');
        }

        if (params.container) {
            params.container.appendChild(canvas);
        }

        return canvas;
    },

    /**
     * 缩放舞台
     * @param  {Number} width 舞台宽
     * @param  {Number} height 舞台高
     * @param  {Number} [pixelRatio=this.pixelRatio] 像素密度
     * @param  {Boolean} [force=false] 是否强制刷新
     */
    resize: function resize(width, height, pixelRatio, force) {
        if (pixelRatio === undefined) {
            pixelRatio = this.pixelRatio;
        }

        if (force || this.width !== width || this.height !== this.height || this.pixelRatio !== pixelRatio) {
            this.width = width;
            this.height = height;
            this.pixelRatio = pixelRatio;
            this.rendererWidth = width * pixelRatio;
            this.rendererHeight = height * pixelRatio;

            var canvas = this.canvas;
            var renderer = this.renderer;

            renderer.resize(this.rendererWidth, this.rendererHeight, force);
            canvas.style.width = this.width + 'px';
            canvas.style.height = this.height + 'px';
        }
    },

    /**
     * 设置舞台偏移值
     * @param {Number} x x
     * @param {Number} y y
     */
    setOffset: function setOffset(x, y) {
        if (this.offsetX !== x || this.offsetY !== y) {
            this.offsetX = x;
            this.offsetY = y;

            var pixelRatio = this.pixelRatio;
            this.renderer.setOffset(x * pixelRatio, y * pixelRatio);
        }
    },

    /**
     * 改viewport
     * @param  {Number} x      x
     * @param  {Number} y      y
     * @param  {Number} width  width
     * @param  {Number} height height
     */
    viewport: function viewport(x, y, width, height) {
        this.resize(width, height, this.pixelRatio, true);
        this.setOffset(x, y);
    },

    /**
     * 渲染一帧
     * @param  {Number} dt 间隔时间
     */
    tick: function tick(dt) {
        this.traverseUpdate(dt);
        this.renderer.render(this, this.camera);
    }
});

module.exports = Stage;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "#define GLSLIFY 1\n" + __webpack_require__(17) + "\n" + __webpack_require__(20) + "\n\n" + __webpack_require__(53) + "\n" + __webpack_require__(54) + "\n" + __webpack_require__(55) + "\n" + __webpack_require__(56) + "\n" + __webpack_require__(34) + "\n" + __webpack_require__(61) + "\n" + __webpack_require__(35) + "\n" + __webpack_require__(36) + "\n\nvoid main(void) {\n    vec4 diffuse = vec4(0., 0., 0., 1.);\n    vec4 color = vec4(0., 0., 0., 1.);\n\n    " + __webpack_require__(62) + "\n    " + __webpack_require__(63) + "\n    " + __webpack_require__(64) + "\n    " + __webpack_require__(65) + "\n    " + __webpack_require__(37) + "\n    " + __webpack_require__(38) + "\n\n    gl_FragColor = color;\n}"

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "#define GLSLIFY 1\n" + __webpack_require__(17) + "\n" + __webpack_require__(39) + "\n\nattribute vec3 a_position;\nuniform mat4 u_modelViewProjectionMatrix;\n\n" + __webpack_require__(66) + "\n" + __webpack_require__(67) + "\n" + __webpack_require__(68) + "\n" + __webpack_require__(69) + "\n" + __webpack_require__(70) + "\n" + __webpack_require__(115) + "\n\nvoid main(void) {\n    vec4 pos = vec4(a_position, 1.0);\n    #ifdef HILO_HAS_TEXCOORD0\n        vec2 uv = a_texcoord0;\n    #endif\n    #ifdef HILO_HAS_NORMAL\n        vec3 normal = a_normal;\n    #endif\n    #ifdef HILO_HAS_NORMAL_MAP\n        vec3 tangent = a_tangent;\n    #endif\n\n    " + __webpack_require__(71) + "\n    " + __webpack_require__(116) + "\n    " + __webpack_require__(72) + "\n    " + __webpack_require__(73) + "\n    " + __webpack_require__(74) + "\n    " + __webpack_require__(75) + "\n\n    gl_Position = u_modelViewProjectionMatrix * pos;\n}"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_MORPH_TARGET_COUNT\n    uniform float u_morphWeights[HILO_MORPH_TARGET_COUNT];\n\n    #if HILO_MORPH_TARGET_COUNT > 0\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition0;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal0;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent0;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 1\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition1;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal1;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent1;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 2\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition2;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal2;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent2;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 3\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition3;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal3;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent3;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 4\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition4;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal4;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent4;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 5\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition5;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal5;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent5;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 6\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition6;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal6;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent6;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 7\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition7;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal7;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent7;\n        #endif\n    #endif\n#endif"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\n#ifdef HILO_MORPH_TARGET_COUNT\n    #if HILO_MORPH_TARGET_COUNT > 0\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition0 * u_morphWeights[0];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal0 * u_morphWeights[0];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent0 * u_morphWeights[0];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 1\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition1 * u_morphWeights[1];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal1 * u_morphWeights[1];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent1 * u_morphWeights[1];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 2\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition2 * u_morphWeights[2];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal2 * u_morphWeights[2];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent2 * u_morphWeights[2];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 3\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition3 * u_morphWeights[3];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal3 * u_morphWeights[3];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent3 * u_morphWeights[3];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 4\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition4 * u_morphWeights[4];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal4 * u_morphWeights[4];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent4 * u_morphWeights[4];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 5\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition5 * u_morphWeights[5];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal5 * u_morphWeights[5];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent5 * u_morphWeights[5];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 6\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition6 * u_morphWeights[6];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal6 * u_morphWeights[6];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent6 * u_morphWeights[6];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 7\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition7 * u_morphWeights[7];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal7 * u_morphWeights[7];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent += a_morphTangent7 * u_morphWeights[7];\n        #endif\n    #endif\n#endif"

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "#define GLSLIFY 1\n" + __webpack_require__(17) + "\n" + __webpack_require__(20) + "\n\n// varying vec3 v_fragPos;\n\nvoid main(void) {\n    // gl_FragColor = vec4(gl_FragCoord.x, gl_FragCoord.y, gl_FragCoord.z, 1.0);\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n    // float z = (1.0 - gl_FragCoord.z) / 2.0;\n    // float z = 2.0 * gl_FragCoord.z - 1.0;\n    \n    float z = gl_FragCoord.z;\n    gl_FragColor = vec4(z, z, z, 1.0);\n}"

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "#define GLSLIFY 1\n" + __webpack_require__(17) + "\n" + __webpack_require__(20) + "\n\n" + __webpack_require__(53) + "\n" + __webpack_require__(54) + "\n" + __webpack_require__(55) + "\n" + __webpack_require__(119) + "\n" + __webpack_require__(34) + "\n" + __webpack_require__(35) + "\n" + __webpack_require__(36) + "\n\nvoid main(void) {\n    vec4 color = vec4(0., 0., 0., 1.);\n\n    " + __webpack_require__(62) + "\n    " + __webpack_require__(63) + "\n    " + __webpack_require__(120) + "\n    " + __webpack_require__(37) + "\n    " + __webpack_require__(38) + "\n\n    gl_FragColor = color;   \n}       "

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nuniform vec4 u_baseColor;\n#ifdef HILO_BASECOLOR_MAP\n    uniform sampler2D u_baseColorMap;\n#endif\nuniform float u_metallic;\n#ifdef HILO_METALLIC_MAP\n    uniform sampler2D u_metallicMap;\n#endif\n  uniform float u_roughness;\n#ifdef HILO_ROUGHNESS_MAP\n    uniform sampler2D u_roughnessMap;\n#endif\n#ifdef HILO_METALLIC_ROUGHNESS\n    uniform sampler2D u_metallicRoughness;\n#endif\n#ifdef HILO_AO_MAP\n    uniform sampler2D u_ao;\n#else\n    uniform float u_ao;\n#endif\n\n#ifdef HILO_DIFFUSE_ENV_MAP\n    uniform samplerCube u_diffuseEnvMap;\n#endif\n#ifdef HILO_SPECULAR_ENV_MAP\n    uniform sampler2D u_brdfLUT;\n    uniform samplerCube u_specularEnvMap;\n#endif\n\n#ifdef HILO_EMISSION_MAP\n    uniform sampler2D u_emission;\n#endif\n\n#ifdef HILO_PBR_SPECULAR_GLOSSINESS\n    uniform vec4 u_specular;\n    uniform float u_glossiness;\n    #ifdef HILO_SPECULAR_GLOSSINESS_MAP\n        uniform sampler2D u_specularGlossinessMap;\n    #endif\n#endif\n\n// PBR Based on https://github.com/KhronosGroup/glTF-WebGL-PBR\n\nstruct PBRInfo\n{\n  float NdotL;\n  float NdotV;\n  float NdotH;\n  float LdotH;\n  float VdotH;\n  float roughness;\n  float metalness;\n  vec3 baseColor;\n  vec3 reflectance0;\n  vec3 reflectance90;\n};\n\nconst float M_PI = 3.141592653589793;\nconst float c_MinRoughness = 0.04;\n\n// The following equations model the diffuse term of the lighting equation\n// Implementation of diffuse from \"Physically-Based Shading at Disney\" by Brent Burley\nvec3 disneyDiffuse(PBRInfo pbrInputs) {\n  float f90 = 2.*pbrInputs.LdotH*pbrInputs.LdotH*pbrInputs.roughness - 0.5;\n\n  return (pbrInputs.baseColor/M_PI)*(1.0+f90*pow((1.0-pbrInputs.NdotL),5.0))*(1.0+f90*pow((1.0-pbrInputs.NdotV),5.0));\n}\n\n// basic Lambertian diffuse, implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog\nvec3 lambertianDiffuse(PBRInfo pbrInputs) {\n  return pbrInputs.baseColor / M_PI;\n}\n\n// The following equations model the Fresnel reflectance term of the spec equation (aka F())\n// implementation of fresnel from “An Inexpensive BRDF Model for Physically based Rendering” by Christophe Schlick\nvec3 fresnelSchlick2(PBRInfo pbrInputs) {\n    return pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);\n}\n\n// Simplified implementation of fresnel from “An Inexpensive BRDF Model for Physically based Rendering” by Christophe Schlick\nvec3 fresnelSchlick(PBRInfo pbrInputs) {\n  return pbrInputs.metalness + (vec3(1.0) - pbrInputs.metalness) * pow(1.0 - pbrInputs.VdotH, 5.0);\n}\n\n// The following equations model the geometric occlusion term of the spec equation  (aka G())\n// Implementation from “A Reflectance Model for Computer Graphics” by Robert Cook and Kenneth Torrance,\nfloat geometricOcclusionCookTorrance(PBRInfo pbrInputs) {\n  return min(min(2.*pbrInputs.NdotV*pbrInputs.NdotH/pbrInputs.VdotH, 2.*pbrInputs.NdotL*pbrInputs.NdotH/pbrInputs.VdotH),1.0);\n}\n\n// implementation of microfacet occlusion from “An Inexpensive BRDF Model for Physically based Rendering” by Christophe Schlick\nfloat geometricOcclusionSchlick(PBRInfo pbrInputs) {\n  float k = pbrInputs.roughness * 0.79788; // 0.79788 = sqrt(2.0/3.1415);\n  // alternately, k can be defined with\n  // float k = (pbrInputs.roughness + 1)*(pbrInputs.roughness + 1)/8;\n\n  float l = pbrInputs.LdotH / (pbrInputs.LdotH * (1.0 - k) + k);\n  float n = pbrInputs.NdotH / (pbrInputs.NdotH * (1.0 - k) + k);\n  return l * n;\n}\n\n// the following Smith implementations are from “Geometrical Shadowing of a Random Rough Surface” by Bruce G. Smith\nfloat geometricOcclusionSmith(PBRInfo pbrInputs) {\n  float NdotL2 = pbrInputs.NdotL * pbrInputs.NdotL;\n  float NdotV2 = pbrInputs.NdotV * pbrInputs.NdotV;\n  float v = ( -1. + sqrt ( pbrInputs.roughness * (1. - NdotL2 ) / NdotL2 + 1.)) * 0.5;\n  float l = ( -1. + sqrt ( pbrInputs.roughness * (1. - NdotV2 ) / NdotV2 + 1.)) * 0.5;\n  return (1. / max((1. + v + l ),0.000001));\n}\n\nfloat SmithG1_var2(float NdotV, float r) {\n    float tanSquared = (1.0 - NdotV * NdotV) / max((NdotV * NdotV),0.00001);\n    return 2.0 / (1.0 + sqrt(1.0 + r * r * tanSquared));\n}\n\nfloat SmithG1(float NdotV, float r) {\n  return 2.0 * NdotV / (NdotV + sqrt(r*r+(1.0-r*r)*(NdotV*NdotV)));\n}\n\nfloat geometricOcclusionSmithGGX(PBRInfo pbrInputs) {\n    return SmithG1_var2(pbrInputs.NdotL, pbrInputs.roughness) * SmithG1_var2(pbrInputs.NdotV, pbrInputs.roughness);\n}\n\n// The following equation(s) model the distribution of microfacet normals across the area being drawn (aka D())\n// implementation from “Average Irregularity Representation of a Roughened Surface for Ray Reflection” by T. S. Trowbridge, and K. P. Reitz\nfloat GGX(PBRInfo pbrInputs) {\n  float roughnessSq = pbrInputs.roughness*pbrInputs.roughness;\n  float f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;\n  return roughnessSq / (M_PI * f * f);\n}\n\n\nvec3 calculateLo(vec3 N, vec3 V, vec3 L, float metallic, float roughness, vec3 diffuseColor, vec3 R0, vec3 R90) {\n    vec3 H = normalize(L + V);\n    float NdotL = clamp(dot(N, L), 0.001, 1.0);\n    float NdotV = abs(dot(N, V)) + 0.001;\n    float NdotH = clamp(dot(N, H), 0.0, 1.0);\n    float LdotH = clamp(dot(L, H), 0.0, 1.0);\n    float VdotH = clamp(dot(V, H), 0.0, 1.0);\n    PBRInfo pbrInputs = PBRInfo(\n        NdotL,\n        NdotV,\n        NdotH,\n        LdotH,\n        VdotH,\n        roughness,\n        metallic,\n        diffuseColor,\n        R0,\n        R90\n    );\n    vec3 F = fresnelSchlick2(pbrInputs);\n    float G = geometricOcclusionSmithGGX(pbrInputs);\n    float D = GGX(pbrInputs);\n    vec3 diffuseContrib = (1.0 - F) * lambertianDiffuse(pbrInputs);\n    vec3 specContrib = F * G * D / (4.0 * NdotL * NdotV);\n    return NdotL * (diffuseContrib + specContrib);\n}"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nvec4 baseColor = u_baseColor;\n#ifdef HILO_BASECOLOR_MAP\n    baseColor = texture2D(u_baseColorMap, v_texcoord0) * u_baseColor;\n#endif\n\n#ifdef HILO_HAS_LIGHT\n    vec3 viewPos = vec3(0, 0, 0);\n    vec3 N = normal;\n    vec3 V = normalize(viewPos - v_fragPos);\n\n    #ifdef HILO_AO_MAP\n        float ao  = texture2D(u_ao, v_texcoord0).r;\n    #else\n        float ao = u_ao;\n    #endif\n\n    #ifdef HILO_PBR_SPECULAR_GLOSSINESS\n        vec3 specular = u_specular.rgb;\n        float glossiness = u_glossiness;\n        #ifdef HILO_SPECULAR_GLOSSINESS_MAP\n            vec4 specularGlossiness = texture2D(u_specularGlossinessMap, v_texcoord0);\n            specular = specularGlossiness.rgb * specular;\n            glossiness = specularGlossiness.a * glossiness;\n        #endif\n        float roughness = 1.0 - glossiness;\n        float metallic = 0.0;\n        vec3 diffuseColor = baseColor.rgb * (1.0 - max(max(specular.r, specular.g), specular.b));\n        vec3 specularColor = specular;\n    #else\n        float metallic = u_metallic;\n        float roughness = u_roughness;\n        #ifdef HILO_METALLIC_MAP\n            metallic = texture2D(u_metallicMap, v_texcoord0).r * u_metallic;\n        #endif\n        #ifdef HILO_ROUGHNESS_MAP\n            roughness  = texture2D(u_roughnessMap, v_texcoord0).r * u_roughness;\n        #endif\n        #ifdef HILO_METALLIC_ROUGHNESS\n            vec4 metallicRoughness = texture2D(u_metallicRoughness, v_texcoord0);\n            #ifdef HILO_AO_IN_METALLIC_ROUGHNESS\n                ao = metallicRoughness.r;\n            #endif\n            roughness = metallicRoughness.g * u_roughness;\n            metallic = metallicRoughness.b * u_metallic;\n        #endif\n        roughness = clamp(roughness, 0.04, 1.0);\n        metallic = clamp(metallic, 0.0, 1.0);\n        vec3 f0 = vec3(0.04);\n        vec3 diffuseColor = mix(baseColor.rgb * (1.0 - f0), vec3(0., 0., 0.), metallic);\n        vec3 specularColor = mix(f0, baseColor.rgb, metallic);\n    #endif\n\n\n    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n    // For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.\n    // For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.\n    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);\n    vec3 specularEnvironmentR0 = specularColor.rgb;\n    vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;\n\n    vec3 Lo = vec3(0.0);\n    #ifdef HILO_DIRECTIONAL_LIGHTS\n        for(int i = 0;i < HILO_DIRECTIONAL_LIGHTS;i++){\n            vec3 L = normalize(-u_directionalLightsInfo[i]);\n            vec3 radiance = u_directionalLightsColor[i];\n            float shadow = 1.0;\n            #ifdef HILO_DIRECTIONAL_LIGHTS_SMC\n                if (i < HILO_DIRECTIONAL_LIGHTS_SMC) {\n                    float bias = max(u_directionalLightsShadowBias[i][1] * (1.0 - dot(N, L)), u_directionalLightsShadowBias[i][0]);\n                    shadow = getShadow(u_directionalLightsShadowMap[i], u_directionalLightsShadowMapSize[i], bias, v_fragPos, u_directionalLightSpaceMatrix[i]);\n                }\n            #endif\n\n            Lo += shadow * radiance * calculateLo(N, V, L, metallic, roughness, diffuseColor, specularEnvironmentR0, specularEnvironmentR90);\n        }\n    #endif\n\n    #ifdef HILO_SPOT_LIGHTS\n        for(int i = 0; i < HILO_SPOT_LIGHTS; i++){\n            vec3 lightDir = normalize(-u_spotLightsDir[i]);\n            vec3 distanceVec = u_spotLightsPos[i] - v_fragPos;\n\n            float theta = dot(normalize(distanceVec), lightDir);\n            float epsilon = u_spotLightsCutOffs[i][0] - u_spotLightsCutOffs[i][1];\n            float intensity = clamp((theta - u_spotLightsCutOffs[i][1]) / epsilon, 0.0, 1.0);\n            float attenuation = getPointAttenuation(distanceVec, u_spotLightsInfo[i]);\n            vec3 radiance = intensity * attenuation * u_spotLightsColor[i];\n\n            float shadow = 1.0;\n            #ifdef HILO_SPOT_LIGHTS_SMC\n                if (i < HILO_SPOT_LIGHTS_SMC) {\n                    float bias = max(u_spotLightsShadowBias[i][1] * (1.0 - dot(N, lightDir)), u_spotLightsShadowBias[i][0]);\n                    shadow = getShadow(u_spotLightsShadowMap[i], u_spotLightsShadowMapSize[i], bias, v_fragPos, u_spotLightSpaceMatrix[i]);\n                }\n            #endif\n            Lo += shadow * radiance * calculateLo(N, V, lightDir, metallic, roughness, diffuseColor, specularEnvironmentR0, specularEnvironmentR90);\n        }\n    #endif\n\n    #ifdef HILO_POINT_LIGHTS\n        for(int i = 0; i < HILO_POINT_LIGHTS; i++){\n            vec3 distanceVec = u_pointLightsPos[i] - v_fragPos;\n            vec3 lightDir = normalize(distanceVec);\n\n            float attenuation = getPointAttenuation(distanceVec, u_pointLightsInfo[i]);\n            vec3 radiance = attenuation * u_pointLightsColor[i];\n\n            Lo += radiance * calculateLo(N, V, lightDir, metallic, roughness, diffuseColor, specularEnvironmentR0, specularEnvironmentR90);\n        }\n    #endif\n\n    #ifdef HILO_DIFFUSE_ENV_MAP\n        vec3 diffuseLight = textureCube(u_diffuseEnvMap, N).rgb;\n        color.rgb += ao * diffuseLight * diffuseColor;\n    #endif\n\n    #ifdef HILO_SPECULAR_ENV_MAP\n        vec3 R = -normalize(reflect(V, N));\n        float NdotV = abs(dot(N, V)) + 0.001;\n        vec3 brdf = texture2D(u_brdfLUT, vec2(NdotV, 1.0 - roughness)).rgb;\n        #ifdef HILO_USE_TEX_LOD\n            float mipCount = 9.0; // resolution of 512x512\n            float lod = (roughness * mipCount);\n            vec3 specularLight = textureCubeLodEXT(u_specularEnvMap, R, lod).rgb;\n        #else\n            vec3 specularLight = textureCube(u_specularEnvMap, R).rgb;\n        #endif\n        color.rgb += ao * specularLight * specularColor * (brdf.x + brdf.y);\n    #endif\n\n    #ifdef HILO_AMBIENT_LIGHTS\n        color.rgb += u_ambientLightsColor * baseColor.rgb * ao;\n    #endif\n\n    #ifdef HILO_EMISSION_MAP\n        color.rgb += texture2D(u_emission, v_texcoord0).rgb;\n    #endif\n\n    color.rgb += Lo;\n    color.a = baseColor.a;\n#else\n    color = baseColor;\n#endif"

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);

/**
 * 渲染信息
 * @class
 */
var RenderInfo = Class.create( /** @lends RenderInfo.prototype */{
  /**
   * @default RenderInfo
   * @type {String}
   */
  className: 'RenderInfo',

  /**
   * @default true
   * @type {Boolean}
   */
  isRenderInfo: true,

  /**
   * @constructs
   */
  constructor: function constructor() {
    this.reset();
  },

  /**
   * 增加面数
   * @param {Number} num
   */
  addFaceCount: function addFaceCount(num) {
    this._currentFaceCount += num;
  },

  /**
   * 增加绘图数
   * @param {Number} num
   */
  addDrawCount: function addDrawCount(num) {
    this._currentDrawCount += num;
  },

  /**
   * 重置信息
   */
  reset: function reset() {
    /**
     * 面数
     * @type {Number}
     * @readOnly
     */
    this.faceCount = Math.floor(this._currentFaceCount);

    /**
     * 绘图数
     * @type {Number}
     * @readOnly
     */
    this.drawCount = Math.floor(this._currentDrawCount);

    /**
     * 当前面数
     * @type {Number}
     * @private
     */
    this._currentFaceCount = 0;

    /**
     * 当前绘图数
     * @private
     * @type {Number}
     */
    this._currentDrawCount = 0;
  }
});

module.exports = RenderInfo;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Vector3 = __webpack_require__(5);
var util = __webpack_require__(3);

var tempVector3 = new Vector3();

/**
 * 渲染列表
 * @class
 */
var RenderList = Class.create( /** @lends RenderList.prototype */{
    /**
     * @default RenderList
     * @type {String}
     */
    className: 'RenderList',

    /**
     * @default true
     * @type {Boolean}
     */
    isRenderList: true,

    /**
     * @constructs
     */
    constructor: function constructor() {
        /**
         * 不透明物体字典
         * @type {Object}
         */
        this.dict = {};

        /**
         * 透明物体列表
         * @type {Array}
         */
        this.transparentList = [];
    },

    /**
     * 重置列表
     */
    reset: function reset() {
        this.dict = {};
        this.transparentList.length = 0;
    },

    /**
     * 遍历列表执行回调
     * @param  {RenderList~traverseCallback} callback
     */
    traverse: function traverse(callback) {
        var dict = this.dict;
        for (var id in dict) {
            callback(dict[id]);
        }

        this.transparentList.forEach(function (mesh) {
            callback([mesh]);
        });
    },

    /**
     * 增加 mesh
     * @param {Mesh} mesh
     * @param {Camera} camera
     */
    addMesh: function addMesh(mesh, camera) {
        var material = mesh.material;
        var geometry = mesh.geometry;

        if (material && geometry) {
            var id = material.id + '_' + geometry.id;
            mesh.instanceId = id;
            if (material.transparent) {
                mesh.worldMatrix.getTranslation(tempVector3);
                tempVector3.transformMat4(camera.viewProjectionMatrix);
                mesh._sortRenderZ = tempVector3.z;
                util.insertToSortedArray(this.transparentList, mesh, function (a, b) {
                    return a._sortRenderZ - b._sortRenderZ;
                });
            } else {
                var arr = this.dict[id] = this.dict[id] || [];
                arr.push(mesh);
            }
        } else {
            console.warn('Mesh must have material and geometry', mesh);
        }
    }
});

module.exports = RenderList;

/**
 * @callback RenderList~traverseCallback
 * @param {Mesh[]} mesh
 */

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cachedBuffer = new ArrayBuffer(1);

var bufferUtil = {
    getTypedArray: function getTypedArray(constructor, length) {
        this._updateBuffer(length * constructor.BYTES_PER_ELEMENT);
        return new constructor(cachedBuffer, 0, length);
    },
    fillArrayData: function fillArrayData(typedArray, data) {
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        for (var i = 0, l = data.length; i < l; i++) {
            typedArray[offset + i] = data[i];
        }
    },
    _updateBuffer: function _updateBuffer(byteSize) {
        if (cachedBuffer.byteLength < byteSize) {
            cachedBuffer = new ArrayBuffer(byteSize * 2);
        }
    }
};

module.exports = bufferUtil;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "#define GLSLIFY 1\n" + __webpack_require__(17) + "\n" + __webpack_require__(39) + "\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord0;\nvarying vec2 v_texcoord0;\n\n\nvoid main(void) {\n    vec4 pos = vec4(a_position, 0.0, 1.0);\n    gl_Position = pos;\n    v_texcoord0 = a_texcoord0;\n}"

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "#define GLSLIFY 1\n" + __webpack_require__(17) + "\n" + __webpack_require__(20) + "\n\nvarying vec2 v_texcoord0;\nuniform sampler2D u_diffuse;\n\nvoid main(void) {  \n    gl_FragColor = texture2D(u_diffuse, v_texcoord0);\n}"

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);

/**
 * WebGL 状态管理，减少 api 调用
 * @class
 */
var State = Class.create( /** @lends State.prototype */{
    /**
     * @default State
     * @type {String}
     */
    className: 'State',

    /**
     * @default true
     * @type {Boolean}
     */
    isState: true,

    /**
     * 系统frameBuffer
     * @default true
     * @type {null}
     */
    systemFrameBuffer: null,

    /**
     * @constructs
     * @param  {WebGLRenderingContext} gl
     */
    constructor: function constructor(gl) {
        /**
         * gl
         * @type {WebGLRenderingContext}
         */
        this.gl = gl;
        this.reset();
    },

    /**
     * 重置状态
     */
    reset: function reset() {
        this._dict = {};
        this.activeTextureIndex = null;
        this.textureUnitDict = {};
        this.currentFrameBuffer = null;
        this.preFrameBuffer = null;
        this._pixelStorei = {};
    },

    /**
     * enable
     * @param  {GLenum} capability
     */
    enable: function enable(capability) {
        var value = this._dict[capability];
        if (value !== true) {
            this._dict[capability] = true;
            this.gl.enable(capability);
        }
    },

    /**
     * disable
     * @param  {GLenum} capability
     */
    disable: function disable(capability) {
        var value = this._dict[capability];
        if (value !== false) {
            this._dict[capability] = false;
            this.gl.disable(capability);
        }
    },

    /**
     * bindFramebuffer
     * @param  {GLenum} target      
     * @param  {WebGLFramebuffer} framebuffer 
     */
    bindFramebuffer: function bindFramebuffer(target, framebuffer) {
        if (this.currentFrameBuffer !== framebuffer) {
            this.preFrameBuffer = this.currentFrameBuffer;
            this.currentFrameBuffer = framebuffer;
            this.gl.bindFramebuffer(target, framebuffer);
        }
    },

    /**
     * 绑定系统frameBuffer
     */
    bindSystemFrameBuffer: function bindSystemFrameBuffer() {
        this.bindFramebuffer(this.gl.FRAMEBUFFER, this.systemFrameBuffer);
    },

    /**
     * useProgram
     * @param  { WebGLProgram} program
     */
    useProgram: function useProgram(program) {
        this.set1('useProgram', program);
    },

    /**
     * depthFunc
     * @param  {GLenum } func
     */
    depthFunc: function depthFunc(func) {
        this.set1('depthFunc', func);
    },

    /**
     * depthMask
     * @param  {GLenum } flag
     */
    depthMask: function depthMask(flag) {
        this.set1('depthMask', flag);
    },

    /**
     * depthRange
     * @param  {Number} zNear 
     * @param  {Number} zFar  
     */
    depthRange: function depthRange(zNear, zFar) {
        this.set2('depthRange', zNear, zFar);
    },

    /**
     * cullFace
     * @param  {GLenum} mode 
     */
    cullFace: function cullFace(mode) {
        this.set1('cullFace', mode);
    },

    /**
     * blendFuncSeparate
     * @param  {GLenum} srcRGB   
     * @param  {GLenum} dstRGB   
     * @param  {GLenum} srcAlpha 
     * @param  {GLenum} dstAlpha 
     */
    blendFuncSeparate: function blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) {
        this.set4('blendFuncSeparate', srcRGB, dstRGB, srcAlpha, dstAlpha);
    },

    /**
     * blendEquationSeparate
     * @param  {GLenum} modeRGB  
     * @param  {GLenum} modeAlpha
     */
    blendEquationSeparate: function blendEquationSeparate(modeRGB, modeAlpha) {
        this.set2('blendEquationSeparate', modeRGB, modeAlpha);
    },

    /**
     * pixelStorei
     * @param  {Glenum} pname 
     * @param  {Glenum} param 
     */
    pixelStorei: function pixelStorei(pname, param) {
        var currentParam = this._pixelStorei[pname];
        if (currentParam !== param) {
            this._pixelStorei[pname] = param;
            this.gl.pixelStorei(pname, param);
        }
    },

    /**
     * viewport
     * @param  {Number} x     
     * @param  {Number} y     
     * @param  {Number} width 
     * @param  {Number} height
     */
    viewport: function viewport(x, y, width, height) {
        this.set4('viewport', x, y, width, height);
    },

    /**
     * activeTexture
     * @param  {Number} texture 
     */
    activeTexture: function activeTexture(texture) {
        if (this.activeTextureIndex !== texture) {
            this.activeTextureIndex = texture;
            this.gl.activeTexture(texture);
        }
    },

    /**
     * bindTexture
     * @param  {GLenum} target  
     * @param  {WebGLTexture } texture 
     */
    bindTexture: function bindTexture(target, texture) {
        var textureUnit = this.getActiveTextureUnit();
        if (textureUnit[target] !== texture) {
            textureUnit[target] = texture;
            this.gl.bindTexture(target, texture);
        }
    },

    /**
     * 获取当前激活的纹理对象
     * @return {TextureUnit}
     */
    getActiveTextureUnit: function getActiveTextureUnit() {
        var textureUnit = this.textureUnitDict[this.activeTextureIndex];
        if (!textureUnit) {
            textureUnit = this.textureUnitDict[this.activeTextureIndex] = {};
        }
        return textureUnit;
    },

    /**
     * 调 gl 1参数方法
     * @private
     * @param  {String} name  方法名
     * @param  {Number|Object} param 方法参数
     */
    set1: function set1(name, param) {
        var value = this._dict[name];
        if (value !== param) {
            this._dict[name] = param;
            this.gl[name](param);
        }
    },

    /**
     * 调 gl 2参数方法
     * @private
     * @param  {String} name  方法名
     * @param  {Number|Object} param0 方法参数
     * @param  {Number|Object} param1 方法参数
     */
    set2: function set2(name, param0, param1) {
        var value = this._dict[name];
        if (!value) {
            value = this._dict[name] = [];
        }

        if (value[0] !== param0 || value[1] !== param1) {
            value[0] = param0;
            value[1] = param1;
            this.gl[name](param0, param1);
        }
    },

    /**
     * 调 gl 3参数方法
     * @private
     * @param  {String} name  方法名
     * @param  {Number|Object} param0 方法参数
     * @param  {Number|Object} param1 方法参数
     * @param  {Number|Object} param2 方法参数
     */
    set3: function set3(name, param0, param1, param2) {
        var value = this._dict[name];
        if (!value) {
            value = this._dict[name] = [];
        }

        if (value[0] !== param0 || value[1] !== param1 || value[2] !== param2) {
            value[0] = param0;
            value[1] = param1;
            value[2] = param2;
            this.gl[name](param0, param1, param2);
        }
    },

    /**
     * 调 gl 4参数方法
     * @private
     * @param  {String} name  方法名
     * @param  {Number|Object} param0 方法参数
     * @param  {Number|Object} param1 方法参数
     * @param  {Number|Object} param2 方法参数
     * @param  {Number|Object} param3 方法参数
     */
    set4: function set4(name, param0, param1, param2, param3) {
        var value = this._dict[name];
        if (!value) {
            value = this._dict[name] = [];
        }

        if (value[0] !== param0 || value[1] !== param1 || value[2] !== param2 || value[3] !== param3) {
            value[0] = param0;
            value[1] = param1;
            value[2] = param2;
            value[3] = param3;
            this.gl[name](param0, param1, param2, param3);
        }
    },
    get: function get(name) {
        return this._dict[name];
    }
});

module.exports = State;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Matrix4 = __webpack_require__(4);
var Vector3 = __webpack_require__(5);
var util = __webpack_require__(3);

var tempMatrix4 = new Matrix4();
var tempVector3 = new Vector3();
var tempFloat32Array = new Float32Array([0, 0, 0]);

/**
 * 光管理类
 * @class
 */
var LightManager = Class.create( /** @lends LightManager.prototype */{
    /**
     * @constructs
     * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        this.ambientLights = [];
        this.directionalLights = [];
        this.pointLights = [];
        this.spotLights = [];
        this.lightInfo = {
            AMBIENT_LIGHTS: 0,
            POINT_LIGHTS: 0,
            DIRECTIONAL_LIGHTS: 0,
            SPOT_LIGHTS: 0,
            uid: 0
        };

        Object.assign(this, params);
    },
    getRenderOption: function getRenderOption() {
        var _this = this;

        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var hasLight = false;
        util.each(this.lightInfo, function (count, name) {
            if (name === 'uid' || !count) {
                return;
            }
            option[name] = count;
            hasLight = true;
            var shadowMapCount = _this.getShadowMapCount(name);
            if (shadowMapCount) {
                option[name + '_SMC'] = shadowMapCount;
            }
        });
        if (hasLight) {
            option.HAS_LIGHT = 1;
        }
        return option;
    },

    /**
     * 增加光
     * @param {Light} light 光源
     */
    addLight: function addLight(light) {
        var lights = null;

        if (light.isAmbientLight) {
            lights = this.ambientLights;
        } else if (light.isDirectionalLight) {
            lights = this.directionalLights;
        } else if (light.isPointLight) {
            lights = this.pointLights;
        } else if (light.isSpotLight) {
            lights = this.spotLights;
        } else {
            console.warn('Not support this light:', light);
        }

        if (lights) {
            if (light.shadow) {
                lights.unshift(light);
            } else {
                lights.push(light);
            }
        }
    },

    /**
     * 获取方向光信息
     * @param  {Camera} camera 摄像机
     * @return {Object}
     */
    getDirectionalInfo: function getDirectionalInfo(camera) {
        var colors = [];
        var infos = [];
        var shadowMap = [];
        var shadowMapSize = [];
        var lightSpaceMatrix = [];
        var shadowBias = [];

        this.directionalLights.forEach(function (light, index) {
            var offset = index * 3;
            light.color.toRGBArray(colors, offset);

            light.getViewDirection(camera).toArray(infos, offset);

            if (light.shadow && light.lightShadow) {
                shadowMap.push(light.lightShadow.framebuffer.texture);
                shadowMapSize.push(light.lightShadow.width);
                shadowMapSize.push(light.lightShadow.height);
                shadowBias.push(light.lightShadow.minBias, light.lightShadow.maxBias);

                tempMatrix4.copy(camera.worldMatrix);
                tempMatrix4.premultiply(light.lightShadow.camera.viewProjectionMatrix);
                tempMatrix4.toArray(lightSpaceMatrix, index * 16);
            }
        });

        var result = {
            colors: new Float32Array(colors),
            infos: new Float32Array(infos)
        };

        if (shadowMap.length) {
            result.shadowMap = shadowMap;
            result.shadowMapSize = new Float32Array(shadowMapSize);
            result.shadowBias = new Float32Array(shadowBias);
            result.lightSpaceMatrix = new Float32Array(lightSpaceMatrix);
        }

        return result;
    },

    /**
     * 获取聚光灯信息
     * @param {Camera} camera 摄像机
     * @return {Object}
     */
    getSpotInfo: function getSpotInfo(camera) {
        var colors = [];
        var infos = [];
        var poses = [];
        var dirs = [];
        var cutOffs = [];
        var shadowMap = [];
        var shadowMapSize = [];
        var lightSpaceMatrix = [];
        var shadowBias = [];
        this.spotLights.forEach(function (light, index) {
            var offset = index * 3;
            light.color.toRGBArray(colors, offset);
            light.toInfoArray(infos, offset);
            light.getViewDirection(camera).toArray(dirs, offset);
            cutOffs.push(light._cutOffCos, light._outerCutOffCos);

            camera.getModelViewMatrix(light, tempMatrix4);
            tempMatrix4.getTranslation(tempVector3);
            tempVector3.toArray(poses, offset);

            if (light.shadow && light.lightShadow) {
                shadowMap.push(light.lightShadow.framebuffer.texture);
                shadowMapSize.push(light.lightShadow.width);
                shadowMapSize.push(light.lightShadow.height);
                shadowBias.push(light.lightShadow.minBias, light.lightShadow.maxBias);

                tempMatrix4.copy(camera.worldMatrix);
                tempMatrix4.premultiply(light.lightShadow.camera.viewProjectionMatrix);
                tempMatrix4.toArray(lightSpaceMatrix, index * 16);
            }
        });

        var result = {
            colors: new Float32Array(colors),
            infos: new Float32Array(infos),
            poses: new Float32Array(poses),
            dirs: new Float32Array(dirs),
            cutOffs: new Float32Array(cutOffs)
        };

        if (shadowMap.length) {
            result.shadowMap = shadowMap;
            result.shadowMapSize = new Float32Array(shadowMapSize);
            result.shadowBias = new Float32Array(shadowBias);
            result.lightSpaceMatrix = new Float32Array(lightSpaceMatrix);
        }

        return result;
    },

    /**
     * 获取点光源信息
     * @param  {Camera} camera 摄像机
     * @return {Object}
     */
    getPointInfo: function getPointInfo(camera) {
        var colors = [];
        var infos = [];
        var poses = [];
        this.pointLights.forEach(function (light, index) {
            var offset = index * 3;
            light.color.toRGBArray(colors, offset);
            light.toInfoArray(infos, offset);

            camera.getModelViewMatrix(light, tempMatrix4);
            tempMatrix4.getTranslation(tempVector3);
            tempVector3.toArray(poses, offset);
        });

        return {
            colors: new Float32Array(colors),
            infos: new Float32Array(infos),
            poses: new Float32Array(poses)
        };
    },

    /**
     * 获取环境光信息
     * @return {Object}
     */
    getAmbientInfo: function getAmbientInfo() {
        tempFloat32Array[0] = tempFloat32Array[1] = tempFloat32Array[2] = 0;
        this.ambientLights.forEach(function (light) {
            var color = light.color,
                amount = light.amount;

            tempFloat32Array[0] += color.r * amount;
            tempFloat32Array[1] += color.g * amount;
            tempFloat32Array[2] += color.b * amount;
        });

        tempFloat32Array[0] = Math.min(1, tempFloat32Array[0]);
        tempFloat32Array[1] = Math.min(1, tempFloat32Array[1]);
        tempFloat32Array[2] = Math.min(1, tempFloat32Array[2]);
        return tempFloat32Array;
    },

    /**
     * 更新所有光源信息
     * @param  {Camera} camera 摄像机
     */
    updateInfo: function updateInfo(camera) {
        var lightInfo = this.lightInfo,
            ambientLights = this.ambientLights,
            directionalLights = this.directionalLights,
            pointLights = this.pointLights,
            spotLights = this.spotLights;


        lightInfo.AMBIENT_LIGHTS = ambientLights.length;
        lightInfo.POINT_LIGHTS = pointLights.length;
        lightInfo.DIRECTIONAL_LIGHTS = directionalLights.length;
        lightInfo.SPOT_LIGHTS = spotLights.length;

        lightInfo.uid = [lightInfo.AMBIENT_LIGHTS, lightInfo.POINT_LIGHTS, lightInfo.DIRECTIONAL_LIGHTS, lightInfo.SPOT_LIGHTS].join('_');

        this.directionalInfo = this.getDirectionalInfo(camera);
        this.pointInfo = this.getPointInfo(camera);
        this.spotInfo = this.getSpotInfo(camera);
        this.ambientInfo = this.getAmbientInfo();
    },

    /**
     * 获取光源信息
     * @return {Object}
     */
    getInfo: function getInfo() {
        return this.lightInfo;
    },

    /**
     * 重置所有光源
     */
    reset: function reset() {
        this.ambientLights.length = 0;
        this.directionalLights.length = 0;
        this.pointLights.length = 0;
        this.spotLights.length = 0;
    },
    getShadowMapCount: function getShadowMapCount(type) {
        var lights = [];
        if (type === 'POINT_LIGHTS') {
            lights = this.pointLights;
        } else if (type === 'DIRECTIONAL_LIGHTS') {
            lights = this.directionalLights;
        } else if (type === 'SPOT_LIGHTS') {
            lights = this.spotLights;
        }
        var count = 0;
        lights.forEach(function (light) {
            count += light.shadow ? 1 : 0;
        });
        return count;
    },
    createShadowMap: function createShadowMap(renderer, camera) {
        this.directionalLights.forEach(function (light) {
            light.createShadowMap(renderer, camera);
        });
        this.spotLights.forEach(function (light) {
            light.createShadowMap(renderer, camera);
        });
        // this.pointLights.forEach(light => {
        //     light.createShadowMap(renderer);
        // });
    }
});

module.exports = LightManager;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Tween类提供缓动功能。 
 * @class  Tween
 * @see {@link http://hiloteam.github.io/Hilo/docs/api-zh/symbols/Tween.html}
 */
var Tween = __webpack_require__(129);

/**
 * Ease类包含为Tween类提供各种缓动功能的函数。
 * @memberOf Tween
 * @see  {@link http://hiloteam.github.io/Hilo/docs/api-zh/symbols/Ease.html}
 */
Tween.Ease = __webpack_require__(130);

module.exports = Tween;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.1.1 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(22);



/**
 * @language=en
 * <iframe src='../../../examples/Tween.html?noHeader' width = '550' height = '130' scrolling='no'></iframe>
 * <br/>
 * Demo:
 * <pre>
 * ticker.addTick(Hilo.Tween);//Tween works after being added to ticker
 *
 * var view = new View({x:5, y:10});
 * Hilo.Tween.to(view, {
 *     x:100,
 *     y:20,
 *     alpha:0
 * }, {
 *     duration:1000,
 *     delay:500,
 *     ease:Hilo.Ease.Quad.EaseIn,
 *     onComplete:function(){
 *         console.log('complete');
 *     }
 * });
 * </pre>
 * @class Tween class makes tweening (easing, slow motion).
 * @param {Object} target Tween target object.
 * @param {Object} fromProps Beginning properties of target tweening object.
 * @param {Object} toProps Ending properties of target tweening object.
 * @param {Object} params Tweening parameters, include all writable Tween class properties.
 * @module hilo/tween/Tween
 * @requires hilo/core/Class
 * @property {Object} target Tween target object, readonly!
 * @property {Int} duration Tweening duration, measure in ms.
 * @property {Int} delay Tweenning delay time, measure in ms.
 * @property {Boolean} paused Is tweening paused, default value is false.
 * @property {Boolean} loop Does tweening loop, default value is false.
 * @property {Boolean} reverse Does tweening reverse, default value is false.
 * @property {Int} repeat Repeat times of tweening, default value is 0.
 * @property {Int} repeatDelay Delay time of repeating tweening, measure in ms.
 * @property {Function} ease Tweening transform function, default value is null.
 * @property {Int} time Time that tweening taken, measure in ms, readonly!
 * @property {Function} onStart Function invoked on the beginning of tweening. Require 1 parameter: tween. default value is null.
 * @property {Function} onUpdate Function invoked on tweening update. Require 2 parameters: ratio, tween.  default value is null.
 * @property {Function} onComplete Function invoked on the end of tweening. Require 1 parameter: tween.  default value is null.
 */
var Tween = (function(){

function now(){
    return +new Date();
}

return Class.create(/** @lends Tween.prototype */{
    constructor: function(target, fromProps, toProps, params){
        var me = this;

        me.target = target;
        me._startTime = 0;
        me._seekTime = 0;
        me._pausedTime = 0;
        me._pausedStartTime = 0;
        me._reverseFlag = 1;
        me._repeatCount = 0;

        //no fromProps if pass 3 arguments
        if(arguments.length == 3){
            params = toProps;
            toProps = fromProps;
            fromProps = null;
        }

        for(var p in params) me[p] = params[p];
        me.setProps(fromProps, toProps);

        //for old version compatiblity
        if(!params.duration && params.time){
            me.duration = params.time || 0;
            me.time = 0;
        }
    },

    target: null,
    duration: 1000,
    delay: 0,
    paused: false,
    loop: false,
    reverse: false,
    repeat: 0,
    repeatDelay: 0,
    ease: null,
    time: 0, //ready only

    onStart: null,
    onUpdate: null,
    onComplete: null,

    /**
     * @language=en
     * Set beginning properties and ending properties of tweening object.
     * @param {Object} fromProps Beginning properties of target tweening object.
     * @param {Object} toProps Ending properties of target tweening object.
     * @returns {Tween} Current Tween, for chain calls.
     */
    setProps: function(fromProps, toProps){
        var me = this, target = me.target,
            propNames = fromProps || toProps,
            from = me._fromProps = {}, to = me._toProps = {};

        fromProps = fromProps || target;
        toProps = toProps || target;

        for(var p in propNames){
            to[p] = toProps[p] || 0;
            target[p] = from[p] = fromProps[p] || 0;
        }
        return me;
    },

    /**
     * @language=en
     * Starting the tweening.
     * @returns {Tween} Current Tween, for chain calls.
     */
    start: function(){
        var me = this;
        me._startTime = now() + me.delay;
        me._seekTime = 0;
        me._pausedTime = 0;
        me.paused = false;
        Tween.add(me);
        return me;
    },

    /**
     * @language=en
     * Stop the tweening.
     * @returns {Tween} Current Tween, for chain calls.
     */
    stop: function(){
        Tween.remove(this);
        return this;
    },

    /**
     * @language=en
     * Pause the tweening.
     * @returns {Tween} Current Tween, for chain calls.
     */
    pause: function(){
        var me = this;
        me.paused = true;
        me._pausedStartTime = now();
        return me;
    },

    /**
     * @language=en
     * Continue to play the tweening.
     * @returns {Tween} Current Tween, for chain calls.
     */
    resume: function(){
        var me = this;
        me.paused = false;
        if(me._pausedStartTime) me._pausedTime += now() - me._pausedStartTime;
        me._pausedStartTime = 0;
        return me;
    },

    /**
     * @language=en
     * Tween jumps to some point.
     * @param {Number} time The time to jump to, range from 0 to duration.
     * @param {Boolean} pause Is paused.
     * @returns {Tween} Current Tween, for chain calls.
     */
    seek: function(time, pause){
        var me = this, current = now();
        me._startTime = current;
        me._seekTime = time;
        me._pausedTime = 0;
        if(pause !== undefined) me.paused = pause;
        me._update(current, true);
        Tween.add(me);
        return me;
    },

    /**
     * @language=en
     * Link next Tween. The beginning time of next Tween depends on the delay value. If delay is a string that begins with '+' or '-', next Tween will begin at (delay) ms after or before the current tween is ended. If delay is out of previous situation, next Tween will begin at (delay) ms after the beginning point of current Tween.
     * @param {Tween} tween Tween to link.
     * @returns {Tween} Current Tween, for chain calls.
     */
    link: function(tween){
        var me = this, delay = tween.delay, startTime = me._startTime;

        var plus, minus;
        if(typeof delay === 'string'){
            plus = delay.indexOf('+') == 0;
            minus = delay.indexOf('-') == 0;
            delay = plus || minus ? Number(delay.substr(1)) * (plus ? 1 : -1) : Number(delay);
        }
        tween.delay = delay;
        tween._startTime = plus || minus ? startTime + me.duration + delay : startTime + delay;

        me._next = tween;
        Tween.remove(tween);
        return me;
    },

    /**
     * @language=en
     * Private render method inside Tween class.
     * @private
     */
    _render: function(ratio){
        var me = this, target = me.target, fromProps = me._fromProps, p;
        for(p in fromProps) target[p] = fromProps[p] + (me._toProps[p] - fromProps[p]) * ratio;
    },

    /**
     * @language=en
     * Private update method inside Tween class.
     * @private
     */
    _update: function(time, forceUpdate){
        var me = this;
        if(me.paused && !forceUpdate) return;

        //elapsed time
        var elapsed = time - me._startTime - me._pausedTime + me._seekTime;
        if(elapsed < 0) return;

        //elapsed ratio
        var ratio = elapsed / me.duration, complete = false, callback;
        ratio = ratio <= 0 ? 0 : ratio >= 1 ? 1 : ratio;
        var easeRatio = me.ease ? me.ease(ratio) : ratio;

        if(me.reverse){
            //backward
            if(me._reverseFlag < 0) {
                ratio = 1 - ratio;
                easeRatio = 1 - easeRatio;
            }
            //forward
            if(ratio < 1e-7){
                //repeat complete or not loop
                if((me.repeat > 0 && me._repeatCount++ >= me.repeat) || (me.repeat == 0 && !me.loop)){
                    complete = true;
                }else{
                    me._startTime = now();
                    me._pausedTime = 0;
                    me._reverseFlag *= -1;
                }
            }
        }

        //start callback
        if(me.time == 0 && (callback = me.onStart)) callback.call(me, me);
        me.time = elapsed;

        //render & update callback
        me._render(easeRatio);
        (callback = me.onUpdate) && callback.call(me, ratio, me);

        //check if complete
        if(ratio >= 1){
            if(me.reverse){
                me._startTime = now();
                me._pausedTime = 0;
                me._reverseFlag *= -1;
            }else if(me.loop || me.repeat > 0 && me._repeatCount++ < me.repeat){
                me._startTime = now() + me.repeatDelay;
                me._pausedTime = 0;
            }else{
                complete = true;
            }
        }

        //next tween
        var next = me._next;
        if(next && next.time <= 0){
            var nextStartTime = next._startTime;
            if(nextStartTime > 0 && nextStartTime <= time){
                //parallel tween
                next._render(ratio);
                next.time = elapsed;
                Tween.add(next);
            }else if(complete && (nextStartTime < 0 || nextStartTime > time)){
                //next tween
                next.start();
            }
        }

        //complete
        if(complete){
            (callback = me.onComplete) && callback.call(me, me);
            return true;
        }
    },

    Statics: /** @lends Tween */ {
        /**
         * @language=en
         * @private
         */
        _tweens: [],

        /**
         * @language=en
         * Update all Tween instances.
         * @returns {Object} Tween。
         */
        tick: function(){
            var tweens = Tween._tweens, tween, i, len = tweens.length;

            for(i = 0; i < len; i++){
                tween = tweens[i];
                if(tween && tween._update(now())){
                    tweens.splice(i, 1);
                    i--;
                }
            }
            return Tween;
        },

        /**
         * @language=en
         * Add a Tween instance.
         * @param {Tween} tween Tween object to add.
         * @returns {Object} Tween。
         */
        add: function(tween){
            var tweens = Tween._tweens;
            if(tweens.indexOf(tween) == -1) tweens.push(tween);
            return Tween;
        },

        /**
         * @language=en
         * Remove one Tween target.
         * @param {Tween|Object|Array} tweenOrTarget Tween object, target object or an array of object to remove
         * @returns {Object} Tween。
         */
        remove: function(tweenOrTarget){
            var i, l;
            if(tweenOrTarget instanceof Array){
                for(i = 0, l = tweenOrTarget.length;i < l;i ++){
                    Tween.remove(tweenOrTarget[i]);
                }
                return Tween;
            }

            var tweens = Tween._tweens;
            if(tweenOrTarget instanceof Tween){
                i = tweens.indexOf(tweenOrTarget);
                if(i > -1) tweens.splice(i, 1);
            }else{
                for(i = 0; i < tweens.length; i++){
                    if(tweens[i].target === tweenOrTarget){
                        tweens.splice(i, 1);
                        i--;
                    }
                }
            }

            return Tween;
        },

        /**
         * @language=en
         * Remove all Tween instances.
         * @returns {Object} Tween。
         */
        removeAll: function(){
            Tween._tweens.length = 0;
            return Tween;
        },

        /**
         * @language=en
         * Create a tween, make target object easing from beginning properties to ending properties.
         * @param {Object|Array} target Tweening target or tweening target array.
         * @param fromProps Beginning properties of target tweening object.
         * @param toProps Ending properties of target tweening object.
         * @param params Tweening parameters.
         * @returns {Tween|Array} An tween instance or an array of tween instance.
         */
        fromTo: function(target, fromProps, toProps, params){
            params = params || {};
            var isArray = target instanceof Array;
            target = isArray ? target : [target];

            var tween, i, stagger = params.stagger, tweens = [];
            for(i = 0; i < target.length; i++){
                tween = new Tween(target[i], fromProps, toProps, params);
                if(stagger) tween.delay = (params.delay || 0) + (i * stagger || 0);
                tween.start();
                tweens.push(tween);
            }

            return isArray?tweens:tween;
        },

        /**
         * @language=en
         * Create a tween, make target object easing from current properties to ending properties.
         * @param {Object|Array} target Tweening target or tweening target array.
         * @param toProps Ending properties of target tweening object.
         * @param params Tweening parameters.
         * @returns {Tween|Array} An tween instance or an array of tween instance.
         */
        to: function(target, toProps, params){
            return Tween.fromTo(target, null, toProps, params);
        },

        /**
         * @language=en
         * Create a tween, make target object easing from beginning properties to current properties.
         * @param {Object|Array} target Tweening target or tweening target array.
         * @param fromProps Beginning properties of target tweening object.
         * @param params Tweening parameters.
         * @returns {Tween|Array} An tween instance or an array of tween instance.
         */
        from: function(target, fromProps, params){
            return Tween.fromTo(target, fromProps, null, params);
        }
    }

});

})();


module.exports = Tween;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

/**
 * Hilo 1.1.1 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */


/**
 * @language=en
 * @class Ease class provides multiple easing functions for Tween.
 * @module hilo/tween/Ease
 * @static
 */
var Ease = (function(){

function createEase(obj, easeInFn, easeOutFn, easeInOutFn, easeNoneFn){
    obj = obj || {};
    easeInFn && (obj.EaseIn = easeInFn);
    easeOutFn && (obj.EaseOut = easeOutFn);
    easeInOutFn && (obj.EaseInOut = easeInOutFn);
    easeNoneFn && (obj.EaseNone = easeNoneFn);
    return obj;
}

/**
 * @language=en
 * Linear easing function.Include EaseNone.
 */
var Linear = createEase(null, null, null, null, function(k){
    return k;
});

/**
 * @language=en
 * Quad easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Quad = createEase(null,
    function(k){
        return k * k;
    },

    function(k){
        return - k * (k - 2);
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k : -0.5 * (--k * (k - 2) - 1);
    }
);

/**
 * @language=en
 * Cubic easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Cubic = createEase(null,
    function(k){
        return k * k * k;
    },

    function(k){
        return --k * k * k + 1;
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k * k : 0.5 * ((k -= 2) * k * k + 2);
    }
);

/**
 * @language=en
 * Quart easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Quart = createEase(null,
    function(k){
        return k * k * k * k;
    },

    function(k){
        return -(--k * k * k * k - 1);
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k * k * k : - 0.5 * ((k -= 2) * k * k * k - 2);
    }
);

/**
 * @language=en
 * Quint easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Quint = createEase(null,
    function(k){
        return k * k * k * k * k;
    },

    function(k){
        return (k = k - 1) * k * k * k * k + 1;
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * k * k * k * k * k : 0.5 * ((k -= 2) * k * k * k * k + 2);
    }
);

var math = Math,
    PI = math.PI, HALF_PI = PI * 0.5,
    sin = math.sin, cos = math.cos,
    pow = math.pow, sqrt = math.sqrt;

/**
 * @language=en
 * Sine easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Sine = createEase(null,
    function(k){
        return -cos(k * HALF_PI) + 1;
    },

    function(k){
        return sin(k * HALF_PI);
    },

    function(k){
        return -0.5 * (cos(PI * k) - 1);
    }
);

/**
 * @language=en
 * Expo easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Expo = createEase(null,
    function(k){
        return k == 0 ? 0 : pow(2, 10 * (k - 1));
    },

    function(k){
        return k == 1 ? 1 : -pow(2, -10 * k) + 1;
    },

    function(k){
        if(k == 0 || k == 1) return k;
        if((k *= 2) < 1) return 0.5 * pow(2, 10 * (k - 1));
        return 0.5 * (-pow(2, - 10 * (k - 1)) + 2);
    }
);

/**
 * @language=en
 * Circ easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Circ = createEase(null,
    function(k){
        return -(sqrt(1 - k * k) - 1);
    },

    function(k){
        return sqrt(1 - (--k * k));
    },

    function(k){
        if((k /= 0.5) < 1) return - 0.5 * (sqrt(1 - k * k) - 1);
        return 0.5 * (sqrt(1 - (k -= 2) * k) + 1);
    }
);

/**
 * @language=en
 * Elastic easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Elastic = createEase(
    {
        a: 1,
        p: 0.4,
        s: 0.1,

        config: function(amplitude, period){
            Elastic.a = amplitude;
            Elastic.p = period;
            Elastic.s = period / (2 * PI) * Math.asin(1 / amplitude) || 0;
        }
    },

    function(k){
        return -(Elastic.a * pow(2, 10 * (k -= 1)) * sin((k - Elastic.s) * (2 * PI) / Elastic.p));
    },

    function(k){
        return (Elastic.a * pow(2, -10 * k) * sin((k - Elastic.s) * (2 * PI) / Elastic.p) + 1);
    },

    function(k){
        return ((k *= 2) < 1) ? -0.5 * (Elastic.a * pow(2, 10 * (k -= 1)) * sin((k - Elastic.s) * (2 * PI) / Elastic.p)) :
               Elastic.a * pow(2, -10 * (k -= 1)) * sin((k - Elastic.s) * (2 * PI) / Elastic.p) * 0.5 + 1;
    }
);

/**
 * @language=en
 * Back easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Back = createEase(
    {
        o: 1.70158,
        s: 2.59491,

        config: function(overshoot){
            Back.o = overshoot;
            Back.s = overshoot * 1.525;
        }
    },

    function(k){
        return k * k * ((Back.o + 1) * k - Back.o);
    },

    function(k){
        return (k = k - 1) * k * ((Back.o + 1) * k + Back.o) + 1;
    },

    function(k){
        return ((k *= 2) < 1) ? 0.5 * (k * k * ((Back.s + 1) * k - Back.s)) : 0.5 * ((k -= 2) * k * ((Back.s + 1) * k + Back.s) + 2);
    }
);

/**
 * @language=en
 * Bounce easing function.Include EaseIn, EaseOut, EaseInOut.
 */
var Bounce = createEase(null,
    function(k){
        return 1 - Bounce.EaseOut(1 - k);
    },

    function(k){
        if((k /= 1) < 0.36364){
            return 7.5625 * k * k;
        }else if(k < 0.72727){
            return 7.5625 * (k -= 0.54545) * k + 0.75;
        }else if(k < 0.90909){
            return 7.5625 * (k -= 0.81818) * k + 0.9375;
        }else{
            return 7.5625 * (k -= 0.95455) * k + 0.984375;
        }
    },

    function(k){
        return k < 0.5 ? Bounce.EaseIn(k * 2) * 0.5 : Bounce.EaseOut(k * 2 - 1) * 0.5 + 0.5;
    }
);

return {
    Linear: Linear,
    Quad: Quad,
    Cubic: Cubic,
    Quart: Quart,
    Quint: Quint,
    Sine: Sine,
    Expo: Expo,
    Circ: Circ,
    Elastic: Elastic,
    Back: Back,
    Bounce: Bounce
};

})();

module.exports = Ease;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Vector3 = __webpack_require__(5);

var Sphere = Class.create({
    radius: 0,
    constructor: function constructor(params) {
        Object.assign(this, params);
        if (!this.center) {
            this.center = new Vector3(0, 0, 0);
        }
    },
    clone: function clone() {
        var sphere = new Sphere();
        sphere.copy(this);
        return sphere;
    },
    copy: function copy(sphere) {
        this.center = sphere.center.copy();
        this.radius = sphere.radius;
        return this;
    },
    fromPoints: function fromPoints(points) {
        var center = this.center;
        var maxSquaredRadius = 0;
        for (var i = 0; i < points.length; i += 3) {
            var x = points[i] - center.x;
            var y = points[i + 1] - center.y;
            var z = points[i + 2] - center.z;
            maxSquaredRadius = Math.max(x * x + y * y + z * z, maxSquaredRadius);
        }

        this.radius = Math.sqrt(maxSquaredRadius);
    },
    transformMat4: function transformMat4(mat4) {
        this.center.transformMat4(mat4);
        var scale = mat4.getScaling();
        this.radius *= Math.max(scale.x, scale.y, scale.z);
    }
});

module.exports = Sphere;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Geometry = __webpack_require__(7);
var GeometryData = __webpack_require__(8);

var _require = __webpack_require__(2),
    FRONT = _require.FRONT,
    BACK = _require.BACK;

var normalData = [0, 0, 1];
/**
 * 平面几何体
 * @class
 * @extends Geometry
 */
var PlaneGeometry = Class.create( /** @lends PlaneGeometry.prototype */{
    Extends: Geometry,
    /**
     * @default true
     * @type {boolean}
     */
    isPlaneGeometry: true,
    /**
     * @default PlaneGeometry
     * @type {string}
     */
    className: 'PlaneGeometry',
    /**
     * 宽度
     * @default 1
     * @type {number}
     */
    width: 1,
    /**
     * 高度
     * @default 1
     * @type {number}
     */
    height: 1,
    /**
     * 水平分割面的数量
     * @default 1
     * @type {number}
     */
    widthSegments: 1,
    /**
     * 垂直分割面的数量
     * @default 1
     * @type {number}
     */
    heightSegments: 1,
    /**
     * @constructs
     * @param {object} [params] 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        PlaneGeometry.superclass.constructor.call(this, params);
        this.build();
    },
    build: function build() {
        var widthSegments = this.widthSegments,
            heightSegments = this.heightSegments;

        var count = (widthSegments + 1) * (heightSegments + 1);
        var diffW = this.width / widthSegments;
        var diffH = this.height / heightSegments;

        var vertices = new Float32Array(count * 3);
        var normals = new Float32Array(count * 3);
        var uvs = new Float32Array(count * 2);
        var indices = new Uint16Array(widthSegments * heightSegments * 6);

        var indicesIdx = 0;

        for (var h = 0; h <= heightSegments; h++) {
            for (var w = 0; w <= widthSegments; w++) {
                var idx = h * (widthSegments + 1) + w;
                vertices[idx * 3] = w * diffW - this.width / 2;
                vertices[idx * 3 + 1] = this.height / 2 - h * diffH;
                normals[idx * 3] = 0;
                normals[idx * 3 + 1] = 0;
                normals[idx * 3 + 2] = 1;
                uvs[idx * 2] = w / widthSegments;
                uvs[idx * 2 + 1] = 1 - h / heightSegments;

                if (h < heightSegments && w < widthSegments) {
                    var lb = (h + 1) * (widthSegments + 1) + w;
                    indices[indicesIdx++] = idx;
                    indices[indicesIdx++] = lb;
                    indices[indicesIdx++] = lb + 1;
                    indices[indicesIdx++] = idx;
                    indices[indicesIdx++] = lb + 1;
                    indices[indicesIdx++] = idx + 1;
                }
            }
        }

        this.vertices = new GeometryData(vertices, 3);
        this.indices = new GeometryData(indices, 1);
        this.normals = new GeometryData(normals, 3);
        this.uvs = new GeometryData(uvs, 2);
    },
    _raycast: function _raycast(ray, side) {
        var originZ = ray.origin.z;
        var directionZ = ray.direction.z;

        if (side === FRONT && (directionZ > 0 || originZ < 0)) {
            return null;
        } else if (side === BACK && (directionZ < 0 || originZ > 0)) {
            return null;
        }

        var point = ray.intersectsPlane(normalData, 0);
        if (point) {
            var x = point.x;
            var y = point.y;
            var halfWidth = this.width * .5;
            var halfHeight = this.height * .5;
            if (x >= -halfWidth && x <= halfWidth && y >= -halfHeight && y <= halfHeight) {
                return [point];
            }
        }
        return null;
    }
});

module.exports = PlaneGeometry;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Geometry = __webpack_require__(7);
var GeometryData = __webpack_require__(8);

var aabbData = [// eslint-disable-line no-unused-vars
[0, 0, 0], [0, 0, 0]];

/**
 * 长方体几何体
 * @class
 * @extends Geometry
 */
var BoxGeometry = Class.create( /** @lends BoxGeometry.prototype */{
    Extends: Geometry,
    /**
     * @default true
     * @type {boolean}
     */
    isBoxGeometry: true,
    /**
     * @default BoxGeometry
     * @type {string}
     */
    className: 'BoxGeometry',
    /**
     * box的宽度
     * @default 1
     * @type {number}
     */
    width: 1,
    /**
     * box的高度
     * @default 1
     * @type {number}
     */
    height: 1,
    /**
     * box的深度
     * @default 1
     * @type {number}
     */
    depth: 1,
    /**
     * 水平分割面的数量
     * @default 1
     * @type {number}
     */
    widthSegments: 1,
    /**
     * 垂直分割面的数量
     * @default 1
     * @type {number}
     */
    heightSegments: 1,
    /**
     * 深度分割面的数量
     * @default 1
     * @type {number}
     */
    depthSegments: 1,
    /**
     * @constructs
     * @param {object} [params] 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        BoxGeometry.superclass.constructor.call(this, params);
        if (this.isSegments()) {
            this.buildWithSegments();
        } else {
            this.build();
        }
    },
    buildWithSegments: function buildWithSegments() {
        var width = this.width,
            height = this.height,
            depth = this.depth,
            widthSegments = this.widthSegments,
            heightSegments = this.heightSegments,
            depthSegments = this.depthSegments;


        var xVertexCount = (heightSegments + 1) * (depthSegments + 1);
        var yVertexCount = (widthSegments + 1) * (depthSegments + 1);
        var zVertexCount = (widthSegments + 1) * (heightSegments + 1);
        var xIndexCount = heightSegments * depthSegments * 6;
        var yIndexCount = widthSegments * depthSegments * 6;
        var zIndexCount = widthSegments * heightSegments * 6;

        var verticesCount = (xVertexCount + yVertexCount + zVertexCount) * 2;
        var vertices = new Float32Array(verticesCount * 3);
        var normals = new Float32Array(verticesCount * 3);
        var uvs = new Float32Array(verticesCount * 2);
        var indices = new Uint16Array((xIndexCount + yIndexCount + zIndexCount) * 2);

        this.vertices = new GeometryData(vertices, 3);
        this.normals = new GeometryData(normals, 3);
        this.uvs = new GeometryData(uvs, 2);
        this.indices = new GeometryData(indices, 1);

        var idxInfo = [0, 0];
        // x right
        this.buildPlane(idxInfo, 2, 1, 0, -1, 1, depth, height, width / 2, depthSegments, heightSegments);
        // -x left
        this.buildPlane(idxInfo, 2, 1, 0, 1, 1, depth, height, -width / 2, depthSegments, heightSegments);
        // y top
        this.buildPlane(idxInfo, 0, 2, 1, 1, -1, width, depth, height / 2, widthSegments, depthSegments);
        // -y bottom
        this.buildPlane(idxInfo, 0, 2, 1, 1, 1, width, depth, -height / 2, widthSegments, depthSegments);
        // z front
        this.buildPlane(idxInfo, 0, 1, 2, 1, 1, width, height, depth / 2, widthSegments, heightSegments);
        // -z back
        this.buildPlane(idxInfo, 0, 1, 2, -1, 1, width, height, -depth / 2, widthSegments, heightSegments);
    },
    buildPlane: function buildPlane(idxInfo, u, v, w, uDir, vDir, uLength, vLength, wValue, uSegments, vSegments) {
        var uDiff = uLength / uSegments;
        var vDiff = vLength / vSegments;
        var uHalf = uLength / 2;
        var vHalf = vLength / 2;

        var idx = idxInfo[0];
        var currentIndicesIdx = idxInfo[1];

        var vertices = this.vertices.data;
        var normals = this.normals.data;
        var uvs = this.uvs.data;
        var indices = this.indices.data;

        for (var vi = 0; vi <= vSegments; vi++) {
            var vValue = (vi * vDiff - vHalf) * vDir;
            for (var ui = 0; ui <= uSegments; ui++) {
                vertices[idx * 3 + u] = (ui * uDiff - uHalf) * uDir;
                vertices[idx * 3 + v] = vValue;
                vertices[idx * 3 + w] = wValue;
                normals[idx * 3 + u] = 0;
                normals[idx * 3 + v] = 0;
                normals[idx * 3 + w] = wValue < 0 ? -1 : 1;
                uvs[idx * 2] = ui / uSegments;
                uvs[idx * 2 + 1] = 1 - vi / vSegments;

                if (ui < uSegments && vi < vSegments) {
                    var lb = idxInfo[0] + (vi + 1) * (uSegments + 1) + ui;
                    indices[currentIndicesIdx++] = lb;
                    indices[currentIndicesIdx++] = idx;
                    indices[currentIndicesIdx++] = lb + 1;

                    indices[currentIndicesIdx++] = lb + 1;
                    indices[currentIndicesIdx++] = idx;
                    indices[currentIndicesIdx++] = idx + 1;
                }
                idx++;
            }
        }

        idxInfo[0] = idx;
        idxInfo[1] = currentIndicesIdx;
    },
    build: function build() {
        var vertices = new Float32Array(72);
        var indices = new Uint16Array(36);

        this.vertices = new GeometryData(vertices, 3);
        this.indices = new GeometryData(indices, 1);

        var halfWidth = this.width / 2;
        var halfHeight = this.height / 2;
        var halfDepth = this.depth / 2;

        var p1 = [-halfWidth, -halfHeight, -halfDepth];
        var p2 = [halfWidth, -halfHeight, -halfDepth];
        var p3 = [halfWidth, halfHeight, -halfDepth];
        var p4 = [-halfWidth, halfHeight, -halfDepth];
        var p5 = [-halfWidth, -halfHeight, halfDepth];
        var p6 = [halfWidth, -halfHeight, halfDepth];
        var p7 = [halfWidth, halfHeight, halfDepth];
        var p8 = [-halfWidth, halfHeight, halfDepth];

        this.addRect(p6, p2, p3, p7); // right
        this.addRect(p1, p5, p8, p4); // left
        this.addRect(p8, p7, p3, p4); // top
        this.addRect(p1, p2, p6, p5); // bottom
        this.addRect(p5, p6, p7, p8); // front
        this.addRect(p2, p1, p4, p3); // back
    },
    isSegments: function isSegments() {
        return this.widthSegments > 1 || this.heightSegments > 1 || this.depthSegments > 1;
    },

    /**
     * 设置朝前面的uv，不支持设置带有 widthSegments heightSegments depthSegments 的实例
     * @param {number[][]} uv uv数据，如 [[0, 1], [1, 1], [1, 0], [0, 0]]
     */
    setFrontUV: function setFrontUV(uv) {
        if (this.isSegments()) {
            console.warn('segmented BoxGeometry dont support setFrontUV!');
            return;
        }
        this.setVertexUV(32, uv);
    },

    /**
     * 设置右侧面的uv，不支持设置带有 widthSegments heightSegments depthSegments 的实例
     * @param {number[][]} uv uv数据，如 [[0, 1], [1, 1], [1, 0], [0, 0]]
     */
    setRightUV: function setRightUV(uv) {
        if (this.isSegments()) {
            console.warn('segmented BoxGeometry dont support setRightUV!');
            return;
        }
        this.setVertexUV(0, uv);
    },

    /**
     * 设置朝后面的uv，不支持设置带有 widthSegments heightSegments depthSegments 的实例
     * @param {number[][]} uv uv数据，如 [[0, 1], [1, 1], [1, 0], [0, 0]]
     */
    setBackUV: function setBackUV(uv) {
        if (this.isSegments()) {
            console.warn('segmented BoxGeometry dont support setBackUV!');
            return;
        }
        this.setVertexUV(40, uv);
    },

    /**
     * 设置左侧面的uv，不支持设置带有 widthSegments heightSegments depthSegments 的实例
     * @param {number[][]} uv uv数据，如 [[0, 1], [1, 1], [1, 0], [0, 0]]
     */
    setLeftUV: function setLeftUV(uv) {
        if (this.isSegments()) {
            console.warn('segmented BoxGeometry dont support setLeftUV!');
            return;
        }
        this.setVertexUV(8, uv);
    },

    /**
     * 设置顶部面的uv，不支持设置带有 widthSegments heightSegments depthSegments 的实例
     * @param {number[][]} uv uv数据，如 [[0, 1], [1, 1], [1, 0], [0, 0]]
     */
    setTopUV: function setTopUV(uv) {
        if (this.isSegments()) {
            console.warn('segmented BoxGeometry dont support setTopUV!');
            return;
        }
        this.setVertexUV(16, uv);
    },

    /**
     * 设置底部面的uv，不支持设置带有 widthSegments heightSegments depthSegments 的实例
     * @param {number[][]} uv uv数据，如 [[0, 1], [1, 1], [1, 0], [0, 0]]
     */
    setBottomUV: function setBottomUV(uv) {
        if (this.isSegments()) {
            console.warn('segmented BoxGeometry dont support setBottomUV!');
            return;
        }
        this.setVertexUV(24, uv);
    },

    /**
     * 设置所有面的uv，不支持设置带有 widthSegments heightSegments depthSegments 的实例
     * @param {number[][][]} uv uv数据，如
     * [<br>
     *     [[0, 1], [1, 1], [1, 0], [0, 0]],<br>
     *     [[0, 1], [1, 1], [1, 0], [0, 0]],<br>
     *     [[0, 1], [1, 1], [1, 0], [0, 0]],<br>
     *     [[0, 1], [1, 1], [1, 0], [0, 0]],<br>
     *     [[0, 1], [1, 1], [1, 0], [0, 0]],<br>
     *     [[0, 1], [1, 1], [1, 0], [0, 0]]<br>
     * ]
     */
    setAllRectUV: function setAllRectUV(uv) {
        if (this.isSegments()) {
            console.warn('segmented BoxGeometry dont support setAllRectUV!');
            return;
        }
        for (var i = 0; i < 6; i++) {
            this.setVertexUV(i * 8, uv);
        }
    },
    _raycast: function _raycast(ray, side) {
        // TODO:optimize
        return BoxGeometry.superclass._raycast.call(this, ray, side);
    }
});

module.exports = BoxGeometry;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Geometry = __webpack_require__(7);
var GeometryData = __webpack_require__(8);

var centerData = [0, 0, 0]; // eslint-disable-line no-unused-vars
/**
 * 球形几何体
 * @class
 * @extends Geometry
 */
var SphereGeometry = Class.create( /** @lends SphereGeometry.prototype */{
    Extends: Geometry,
    /**
     * @default true
     * @type {boolean}
     */
    isPlaneGeometry: true,
    /**
     * @default SphereGeometry
     * @type {string}
     */
    className: 'SphereGeometry',
    /**
     * 半径
     * @default 1
     * @type {number}
     */
    radius: 1,
    /**
     * 垂直分割面的数量
     * @default 16
     * @type {number}
     */
    heightSegments: 16,
    /**
     * 水平分割面的数量
     * @default 32
     * @type {number}
     */
    widthSegments: 32,
    /**
     * @constructs
     * @param {object} params 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        SphereGeometry.superclass.constructor.call(this, params);
        this.build();
    },
    build: function build() {
        var radius = this.radius;
        var heightSegments = this.heightSegments;
        var widthSegments = this.widthSegments;

        var count = (widthSegments + 1) * (heightSegments + 1);
        var gridCount = widthSegments * heightSegments;
        var vertices = new Float32Array(count * 3);
        var tangents = new Float32Array(count * 3);
        var uvs = new Float32Array(count * 2);
        var indices = new Uint16Array(gridCount * 6);

        var indexId = 0;
        var vertexId = 0;
        var uvId = 0;
        var pointId = 0;
        var ANGLE_360 = Math.PI * 2;
        var ANGLE_180 = Math.PI;

        for (var h = 0; h <= heightSegments; h++) {
            var v = h / heightSegments;
            var pitchAngle = ANGLE_180 * v;
            var y = Math.cos(pitchAngle) * radius;
            var yawRadius = Math.sin(pitchAngle) * radius;

            for (var w = 0; w <= widthSegments; w++) {
                var u = w / widthSegments;
                var yawAngle = ANGLE_360 * u;
                var yawCos = Math.cos(yawAngle);
                var yawSin = Math.sin(yawAngle);
                var x = yawCos * yawRadius;
                var z = yawSin * yawRadius;

                var tangentX = yawSin;
                var tangentY = 0;
                var tangentZ = -yawCos;

                tangents[vertexId] = tangentX;
                tangents[vertexId + 1] = tangentY;
                tangents[vertexId + 2] = tangentZ;

                vertices[vertexId++] = x;
                vertices[vertexId++] = y;
                vertices[vertexId++] = z;

                uvs[uvId++] = u;
                uvs[uvId++] = v;

                if (h > 0 && w > 0) {
                    var a = pointId;
                    var b = a - 1;
                    var c = b - widthSegments - 1;
                    var d = a - widthSegments - 1;

                    indices[indexId++] = c;
                    indices[indexId++] = d;
                    indices[indexId++] = a;
                    indices[indexId++] = c;
                    indices[indexId++] = a;
                    indices[indexId++] = b;
                }
                pointId++;
            }
        }
        this.vertices = new GeometryData(vertices, 3);
        this.indices = new GeometryData(indices, 1);
        this.uvs = new GeometryData(uvs, 2);
        this.tangents = new GeometryData(tangents, 3);
        this.normals = new GeometryData(new Float32Array(vertices), 3);
    },
    _raycast: function _raycast(ray, side) {
        // TODO:optimize
        return SphereGeometry.superclass._raycast.call(this, ray, side);
    }
});

module.exports = SphereGeometry;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var EventMixin = __webpack_require__(9);
var util = __webpack_require__(3);
var BasicLoader = __webpack_require__(12);
var GLTFLoader = __webpack_require__(79);
var TextureLoader = __webpack_require__(84);
var CubeTextureLoader = __webpack_require__(85);

var LoaderClassMap = {
    Texture: TextureLoader,
    CubeTexture: CubeTextureLoader,
    glb: GLTFLoader,
    gltf: GLTFLoader
};

/**
 * 队列加载器，用于批量加载
 * @class
 * @mixes EventMixin
 * @fires complete load error
 * @example
 * var loadQueue = new Hilo3d.LoadQueue([{
 *     type: 'CubeTexture',
 *     images: [
 *         '//gw.alicdn.com/tfs/TB1Ss.ORpXXXXcNXVXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1YhUDRpXXXXcyaXXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1Y1MORpXXXXcpXVXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1ZgAqRpXXXXa0aFXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1IVZNRpXXXXaNXFXXXXXXXXXX-2048-2048.jpg_960x960.jpg',
 *         '//gw.alicdn.com/tfs/TB1M3gyRpXXXXb9apXXXXXXXXXX-2048-2048.jpg_960x960.jpg'
 *     ]
 * }, {
 *     src: '//ossgw.alicdn.com/tmall-c3/tmx/0356679fd543809bba95dfaea32e1d45.gltf'
 * }]).on('complete', function () {
 *     var result = loadQueue.getAllContent();
 *     var box = new Hilo3d.Mesh({
 *         geometry: geometry,
 *         material: new Hilo3d.BasicMaterial({
 *             lightType: 'NONE',
 *             cullFaceType: Hilo3d.constants.FRONT,
 *             diffuse: result[0]
 *         })
 *     }).addTo(stage);
 *     box.setScale(20);
 *     var material = new Hilo3d.BasicMaterial({
 *         diffuse: new Hilo3d.Color(0, 0, 0),
 *         skyboxMap: result[0],
 *         refractRatio: 1/1.5,
 *         refractivity: 0.8,
 *         reflectivity: 0.2
 *     });
 *     var model = result[1];
 *     model.node.setScale(0.001);
 *     model.meshes.forEach(function (m) {
 *         m.material = material;
 *         material.jointCount = model.materials[0].jointCount;
 *     });
 *     stage.addChild(model.node);
 * }).start();
 */
var LoadQueue = Class.create( /** @lends LoadQueue.prototype */{
    Mixes: EventMixin,

    Statics: {
        /**
         * 给LoadQueue类添加扩展Loader
         * @memberOf LoadQueue
         * @static
         * @param {string} ext 资源扩展，如gltf, png 等
         * @param {BasicLoader} LoaderClass 用于加载的类，需要继承BasicLoader
         */
        addLoader: function addLoader(ext, LoaderClass) {
            LoaderClassMap[ext] = LoaderClass;
        }
    },
    /**
     * @constructs
     * @param {Array} [source] 需要加载的资源列表
     */
    constructor: function constructor(source) {
        this._source = [];
        this.add(source);
    },


    /**
     * 最大并发连接数
     * @default 2
     * @type {number}
     */
    maxConnections: 2,

    _source: null,
    _loaded: 0,
    _connections: 0,
    _currentIndex: -1,

    /**
     * 添加需要加载的资源
     *
     * @param {object} source 资源信息
     * @param {string} source.src 资源地址
     * @param {string} [source.id] 资源id
     * @param {string} [source.type] 资源类型，对应ext，不传的话自动根据src来获取
     * @param {number} [source.size] 资源大小，用于精确计算当前加载进度
     */
    add: function add(source) {
        if (source) {
            source = Array.isArray(source) ? source : [source];
            this._source = this._source.concat(source);
        }
        return this;
    },

    /**
     * 获取指定id的资源
     *
     * @param {string} id id
     * @return {object} 返回对应的资源信息
     */
    get: function get(id) {
        if (!id) {
            return null;
        }
        var source = this._source;
        for (var i = 0; i < source.length; i++) {
            var item = source[i];
            if (item.id === id || item.src === id) {
                return item;
            }
        }
        return null;
    },

    /**
     * 获取指定id加载完后的数据
     *
     * @param {string} id id
     * @return {object} 加载完的结果
     */
    getContent: function getContent(id) {
        var item = this.get(id);
        return item && item.content;
    },

    /**
     * 开始加载资源
     * @return {LoadQueue} 返回this
     */
    start: function start() {
        this._loadNext();
        return this;
    },
    _loadNext: function _loadNext() {
        var _this = this;

        var source = this._source;
        var len = source.length;

        // all items loaded
        if (this._loaded >= len) {
            this.fire('complete');
            return;
        }

        if (this._currentIndex < len - 1 && this._connections < this.maxConnections) {
            var index = ++this._currentIndex;
            var item = source[index];
            var loader = this._getLoader(item);

            if (loader) {
                this._connections++;

                loader.load(item).then(function (data) {
                    _this._onItemLoad(index, data);
                }, function (err) {
                    _this._onItemError(index, err);
                });
            }

            this._loadNext();
        }
    },
    _getLoader: function _getLoader(item) {
        var loader = item.loader;
        if (loader) return loader;

        var type = item.type || util.getExtension(item.src);

        var Loader = LoaderClassMap[type] || BasicLoader;
        return new Loader();
    },
    _onItemLoad: function _onItemLoad(index, content) {
        var item = this._source[index];
        item.loaded = true;
        item.content = content;
        this._connections--;
        this._loaded++;
        this.fire('load', item);
        this._loadNext();
    },
    _onItemError: function _onItemError(index, e) {
        var item = this._source[index];
        item.error = e;
        this._connections--;
        this._loaded++;
        this.fire('error', item);
        this._loadNext();
    },
    getSize: function getSize(loaded) {
        var size = 0;
        var source = this._source;
        for (var i = 0; i < source.length; i++) {
            var item = source[i];
            size += (loaded ? item.loaded && item.size : item.size) || 0;
        }
        return size;
    },

    /**
     * 获取当前已经加载完的资源数量
     * @return {number}
     */
    getLoaded: function getLoaded() {
        return this._loaded;
    },

    /**
     * 获取需要加载的资源总数
     * @return {number}
     */
    getTotal: function getTotal() {
        return this._source.length;
    },

    /**
     * 获取加载的所有资源结果
     *
     * @return {Array} 加载的所有资源结果
     */
    getAllContent: function getAllContent() {
        return this._source.map(function (r) {
            return r.content;
        });
    }
});

module.exports = LoadQueue;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var EventMixin = __webpack_require__(9);

/**
 * 加载缓存类
 * @class
 * @mixes EventMixin
 * @ignore
 */
var Cache = Class.create( /** @lends Cache.prototype */{
    Mixes: EventMixin,
    Statics: {
        PENDING: 1,
        LOADED: 2,
        FAILED: 3
    },
    enabled: true,
    /**
     * @constructs
     */
    constructor: function constructor() {
        this._files = {};
    },
    update: function update(key, state, data) {
        if (!this.enabled) {
            return;
        }
        var file = { key: key, state: state, data: data };
        this._files[key] = file;
        this.fire('update', file);
        this.fire('update:' + file.key, file);
    },
    get: function get(key) {
        if (!this.enabled) {
            return null;
        }
        return this._files[key];
    },
    remove: function remove(key) {
        delete this._files[key];
    },
    clear: function clear() {
        this._files = {};
    },
    wait: function wait(file) {
        var _this = this;

        if (!file) {
            return Promise.reject();
        }
        if (file.state === Cache.LOADED) {
            return Promise.resolve(file.data);
        } else if (file.state === Cache.FAILED) {
            return Promise.reject();
        }

        return new Promise(function (resolve, reject) {
            _this.on('update:' + file.key, function (evt) {
                var file = evt.detail;
                if (file.state === Cache.LOADED) {
                    resolve(file.data);
                } else if (file.state === Cache.FAILED) {
                    reject(file.data);
                }
            }, true);
        });
    }
});

module.exports = Cache;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Class = __webpack_require__(0);
var Node = __webpack_require__(10);
var BasicMaterial = __webpack_require__(13);
var PBRMaterial = __webpack_require__(80);
var QuantizedMaterial = __webpack_require__(138);
var Geometry = __webpack_require__(7);
var MorphGeometry = __webpack_require__(139);
var GeometryData = __webpack_require__(8);
var Mesh = __webpack_require__(18);
var SkinedMesh = __webpack_require__(50);
var LazyTexture = __webpack_require__(81);
var math = __webpack_require__(1);
var Matrix4 = __webpack_require__(4);
var Color = __webpack_require__(6);
var util = __webpack_require__(3);
var AnimationStates = __webpack_require__(82);
var Animation = __webpack_require__(83);
var PerspectiveCamera = __webpack_require__(44);

var _require = __webpack_require__(2),
    BLEND = _require.BLEND,
    DEPTH_TEST = _require.DEPTH_TEST,
    CULL_FACE = _require.CULL_FACE,
    FRONT = _require.FRONT,
    BACK = _require.BACK,
    FRONT_AND_BACK = _require.FRONT_AND_BACK;

var ComponentTypeMap = {
    5120: [1, Int8Array],
    5121: [1, Uint8Array],
    5122: [2, Int16Array],
    5123: [2, Uint16Array],
    5125: [4, Uint32Array],
    5126: [4, Float32Array]
};

var ComponentNumberMap = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
};

var glTFAttrToGeometry = {
    POSITION: {
        name: 'vertices',
        decodeMatName: 'positionDecodeMat'
    },
    TEXCOORD_0: {
        name: 'uvs',
        decodeMatName: 'uvDecodeMat'
    },
    NORMAL: {
        name: 'normals',
        decodeMatName: 'normalDecodeMat'
    },
    JOINT: {
        name: 'skinIndices'
    },
    JOINTS_0: {
        name: 'skinIndices'
    },
    WEIGHT: {
        name: 'skinWeights'
    },
    WEIGHTS_0: {
        name: 'skinWeights'
    },
    TANGENT: {
        name: 'tangents'
    }
};

/**
 * @class
 */
var GLTFParser = Class.create( /** @lends GLTFParser.prototype */{
    Statics: {
        MAGIC: 'glTF'
    },
    isProgressive: false,
    isUseQuantizedMaterial: false,
    preHandlerImageURI: null,
    customMaterialCreator: null,
    src: '',
    /** 
     * @constructs
     * @param  {ArrayBuffer|String} content 
     * @param  {Object} params 
     */
    constructor: function constructor(content, params) {
        Object.assign(this, params);
        this.content = content;
    },
    parse: function parse() {
        if (this.content instanceof ArrayBuffer) {
            var buffer = this.content;
            var magic = util.convertUint8ArrayToString(new Uint8Array(buffer, 0, 4));
            if (magic === GLTFParser.MAGIC) {
                this.parseBinary(buffer);
            } else {
                var content = util.convertUint8ArrayToString(new Uint8Array(buffer), true);
                this.json = JSON.parse(content);
            }
        } else {
            this.json = JSON.parse(this.content);
        }
        this.glTFVersion = parseFloat(this.json.asset.version);
        if (this.glTFVersion >= 2) {
            this.isGLTF2 = true;
        }   
        console.log('glTFVersion', this.glTFVersion);

        this.parseExtensionUsed();
    },
    parseExtensionUsed: function parseExtensionUsed() {
        var _this = this;

        this.extensionsUsed = {};
        util.each(this.json.extensionsUsed, function (name) {
            _this.extensionsUsed[name] = true;
        });

        if (!this.extensionsUsed.WEB3D_quantized_attributes) {
            // this glTF model havn't use quantize!
            this.isUseQuantizedMaterial = false;
        }
    },
    parseBinary: function parseBinary(buffer) {
        this.isBinary = true;
        var infoDataView = new DataView(buffer);
        var version = infoDataView.getUint32(4, true);
        var totalLength = infoDataView.getUint32(8, true);
        var content = void 0;
        console.log('parseBinary', version, totalLength);
        var start = 12;
        if (version < 2) {
            var contentLength = infoDataView.getUint32(start, true);
            content = new Uint8Array(buffer, 20, contentLength);
            content = util.convertUint8ArrayToString(content, true);
            this.json = JSON.parse(content);
            this.binaryBody = buffer.slice(20 + contentLength);
        } else if (version === 2) {
            while (start < totalLength) {
                var chunkLength = infoDataView.getUint32(start, true);
                var chunkType = infoDataView.getUint32(start + 4, true);
                if (chunkType === 0x4E4F534A) {
                    // JSON...
                    content = new Uint8Array(buffer, start + 8, chunkLength);
                    content = util.convertUint8ArrayToString(content, true);
                    this.json = JSON.parse(content);
                } else if (chunkType === 0x004E4942) {
                    // binary
                    this.binaryBody = buffer.slice(start + 8, start + 8 + chunkLength);
                }
                start += 8 + chunkLength;
            }
        } else {
            throw new Error('Dont support glTF version ' + version);
        }
    },
    loadResources: function loadResources(loader) {
        var _this2 = this;

        if (this.isBinary) {
            return this.loadBuffers(loader).then(function () {
                return _this2.loadTextures(loader);
            });
        }
        return Promise.all([this.loadBuffers(loader), this.loadTextures(loader)]);
    },
    loadBuffers: function loadBuffers(loader) {
        var _this3 = this;

        this.buffers = {};

        if (this.isBinary) {
            if (this.isGLTF2) {
                this.buffers[0] = this.binaryBody;
            } else {
                this.buffers.binary_glTF = this.binaryBody;
            }
            this.parseBufferViews();
            return Promise.resolve();
        }

        return Promise.all(Object.keys(this.json.buffers).map(function (key) {
            var uri = util.getRelativePath(_this3.src, _this3.json.buffers[key].uri);
            return loader.loadRes(uri, 'buffer').then(function (buffer) {
                _this3.buffers[key] = buffer;
            });
        })).then(function () {
            _this3.parseBufferViews();
        });
    },
    getImageUri: function getImageUri(imageName) {
        var imgData = this.json.images[imageName];
        var uri = imgData.uri;
        if (imgData.extensions && imgData.extensions.KHR_binary_glTF) {
            var binaryInfo = imgData.extensions.KHR_binary_glTF;
            var bufferView = this.bufferViews[binaryInfo.bufferView];
            var data = new Uint8Array(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
            return util.getBlobUrl(binaryInfo.mimeType, data);
        } else if (!uri && 'bufferView' in imgData) {
            var _bufferView = this.bufferViews[imgData.bufferView];
            var _data = new Uint8Array(_bufferView.buffer, _bufferView.byteOffset, _bufferView.byteLength);
            return util.getBlobUrl(imgData.mimeType, _data);
        }

        return uri;
    },
    getUsedTextureNameMap: function getUsedTextureNameMap() {
        var _this4 = this;

        var map = {};
        util.each(this.json.materials, function (material) {
            var values = material;
            var isKMC = false;
            if (material.extensions && material.extensions.KHR_materials_common) {
                isKMC = true;
                values = material.extensions.KHR_materials_common.values;
            }
            if (_this4.isGLTF2 && !isKMC) {
                // glTF 2.0
                if (values.normalTexture) {
                    map[values.normalTexture.index] = true;
                }
                if (values.occlusionTexture) {
                    map[values.occlusionTexture.index] = true;
                }
                if (values.emissiveTexture) {
                    map[values.emissiveTexture.index] = true;
                }
                if (values.transparencyTexture) {
                    map[values.transparencyTexture.index] = true;
                }
                if (values.extensions && values.extensions.KHR_materials_pbrSpecularGlossiness) {
                    var subValues = values.extensions.KHR_materials_pbrSpecularGlossiness;
                    if (subValues.diffuseTexture) {
                        map[subValues.diffuseTexture.index] = true;
                    }
                    if (subValues.specularGlossinessTexture) {
                        map[subValues.specularGlossinessTexture.index] = true;
                    }
                } else if (values.pbrMetallicRoughness) {
                    var _subValues = values.pbrMetallicRoughness;
                    if (_subValues.baseColorTexture) {
                        map[_subValues.baseColorTexture.index] = true;
                    }
                    if (_subValues.metallicRoughnessTexture) {
                        map[_subValues.metallicRoughnessTexture.index] = true;
                    }
                }
            } else {
                // glTF 1.0
                if (!isKMC) {
                    values = material.values;
                }
                ['diffuse', 'specular', 'emission', 'ambient', 'transparency', 'normalMap'].forEach(function (name) {
                    if (util.isStrOrNumber(values[name]) && _this4.json.textures[values[name]]) {
                        map[values[name]] = true;
                    }
                });
            }
        });
        return map;
    },
    loadTextures: function loadTextures() {
        var _this5 = this;

        this.textures = {};

        if (!this.json.textures) {
            return Promise.resolve();
        }

        var usedTextures = this.getUsedTextureNameMap();

        return Promise.all(Object.keys(this.json.textures).filter(function (textureName) {
            return usedTextures[textureName];
        }).map(function (textureName) {
            var textureData = _this5.json.textures[textureName];
            var uri = _this5.getImageUri(textureData.source);
            uri = util.getRelativePath(_this5.src, uri);

            if (_this5.preHandlerImageURI) {
                uri = _this5.preHandlerImageURI(uri, textureName);
            }

            var texture = new LazyTexture(textureData);
            texture.autoLoad = _this5.isProgressive;
            texture.crossOrigin = true;
            texture.src = uri;
            texture.name = textureData.name || textureName;
            if (_this5.json.samplers) {
                Object.assign(texture, _this5.json.samplers[textureData.sampler]);
            }
            _this5.textures[textureName] = texture;

            if (!_this5.isProgressive) {
                return texture.load();
            }
            return Promise.resolve();
        }));
    },
    parseBufferViews: function parseBufferViews() {
        var _this6 = this;

        this.bufferViews = {};
        util.each(this.json.bufferViews, function (data, name) {
            var buffer = _this6.buffers[data.buffer];
            var byteOffset = data.byteOffset || 0;
            var byteLength = data.byteLength;
            _this6.bufferViews[name] = {
                byteOffset: byteOffset,
                byteLength: byteLength,
                buffer: _this6.buffers[data.buffer],
                byteStride: data.byteStride
            };
            if (data.byteStride) {
                _this6.bufferViews[name].array = new Float32Array(buffer, byteOffset, byteLength / 4);
            }
        });

        if (!this.isBinary) {
            delete this.buffers;
        }
    },
    getColorOrTexture: function getColorOrTexture(value) {
        if (Array.isArray(value)) {
            return new Color(value[0], value[1], value[2]);
        }
        return this.textures[value];
    },
    isPNGTexture: function isPNGTexture(textureName) {
        var texture = this.json.textures[textureName];
        var image = this.json.images[texture && texture.source];
        return (/.png$/.test(image.uri)
        );
    },
    parseMaterials: function parseMaterials() {
        var _this7 = this;

        var Material = this.isUseQuantizedMaterial ? QuantizedMaterial : BasicMaterial;
        this.materials = {};
        util.each(this.json.materials, function (materialData, name) {
            if (_this7.customMaterialCreator) {
                _this7.materials[name] = _this7.customMaterialCreator(name, materialData, _this7.json);
                return;
            }

            var kmc = null;
            if (materialData.extensions && materialData.extensions.KHR_materials_common) {
                kmc = materialData.extensions.KHR_materials_common;
            }

            var material = void 0;
            if (_this7.isGLTF2 && !kmc) {
                material = new PBRMaterial();
            } else {
                material = new Material();
            }

            material.name = materialData.name || name;
            _this7.materials[name] = material;

            var values = materialData;

            if (material.isPBRMaterial) {
                // glTF 2.0
                if (values.alphaMode === 'BLEND') {
                    material.transparent = true;
                }
                if (!values.doubleSided) {
                    material.side = FRONT;
                } else {
                    material.side = FRONT_AND_BACK;
                }
                if (values.normalTexture) {
                    material.normalMap = _this7.textures[values.normalTexture.index];
                }
                if (values.occlusionTexture) {
                    material.ao = _this7.textures[values.occlusionTexture.index];
                }
                if (values.emissiveTexture) {
                    material.emission = _this7.textures[values.emissiveTexture.index];
                }
                if (values.transparencyTexture) {
                    material.transparency = _this7.textures[values.transparencyTexture.index];
                }
                if (values.extensions && values.extensions.KHR_materials_pbrSpecularGlossiness) {
                    var subValues = values.extensions.KHR_materials_pbrSpecularGlossiness;
                    if (subValues.diffuseFactor) {
                        material.baseColor.fromArray(subValues.diffuseFactor);
                    }
                    if (subValues.diffuseTexture) {
                        material.baseColorMap = _this7.textures[subValues.diffuseTexture.index];
                    }
                    if (subValues.specularFactor) {
                        material.specular.fromArray(subValues.specularFactor);
                        material.specular.a = 1;
                    }
                    if ('glossinessFactor' in subValues) {
                        material.glossiness = subValues.glossinessFactor;
                    }
                    if (subValues.specularGlossinessTexture) {
                        material.specularGlossinessMap = _this7.textures[subValues.specularGlossinessTexture.index];
                    }
                    material.isSpecularGlossiness = true;
                } else if (values.pbrMetallicRoughness) {
                    var _subValues2 = values.pbrMetallicRoughness;
                    if (_subValues2.baseColorFactor) {
                        material.baseColor.fromArray(_subValues2.baseColorFactor);
                    }
                    if (_subValues2.baseColorTexture) {
                        material.baseColorMap = _this7.textures[_subValues2.baseColorTexture.index];
                    }
                    if (_subValues2.metallicRoughnessTexture) {
                        material.metallicRoughness = _this7.textures[_subValues2.metallicRoughnessTexture.index];
                        if (material.ao === material.metallicRoughness) {
                            material.ao = 1;
                            material.aoInMetallicRoughness = true;
                        }
                    }
                    if ('roughnessFactor' in _subValues2) {
                        material.roughness = _subValues2.roughnessFactor;
                    }
                    if ('metallicFactor' in _subValues2) {
                        material.metallic = _subValues2.metallicFactor;
                    }
                }
            } else {
                if (kmc) {
                    values = kmc.values;
                    material.lightType = kmc.technique;
                } else {
                    values = materialData.values;
                }
                // glTF 1.0 or KMC
                material.diffuse = _this7.getColorOrTexture(values.diffuse) || material.diffuse;
                material.specular = _this7.getColorOrTexture(values.specular) || material.specular;
                material.emission = _this7.getColorOrTexture(values.emission) || material.emission;
                material.ambient = _this7.getColorOrTexture(values.ambient) || material.ambient;

                if (values.normalMap) {
                    material.normalMap = _this7.getColorOrTexture(values.normalMap);
                }

                if (typeof values.transparency === 'number') {
                    material.transparency = values.transparency;
                    if (material.transparency < 1) {
                        material.transparent = true;
                    }
                } else if (typeof values.transparency === 'string') {
                    material.transparency = _this7.getColorOrTexture(values.transparency);
                    material.transparent = true;
                }

                if (values.transparent === true) {
                    material.transparent = true;
                }

                if ('shininess' in values) {
                    material.shininess = values.shininess;
                }
            }

            _this7.parseTechnique(materialData, material);
        });
    },
    unQuantizeData: function unQuantizeData(data, decodeMat) {
        if (!decodeMat) {
            return data;
        }

        var matSize = Math.sqrt(decodeMat.length);
        var itemLen = matSize - 1;
        var result = new Float32Array(data.length);
        var tempArr = [];
        data.traverse(function (d, i) {
            if (d.toArray) {
                d.toArray(tempArr);
            } else {
                tempArr[0] = d;
            }
            var idx = i * itemLen;
            for (var j = 0; j < matSize; j++) {
                result[idx + j] = 0;
                for (var k = 0; k < matSize; k++) {
                    var v = k === itemLen ? 1 : tempArr[k];
                    result[idx + j] += decodeMat[k * matSize + j] * v;
                }
            }
        });
        data.data = result;
        data.stride = 0;
        data.offset = 0;
        return data;
    },
    sparseAccessorHandler: function sparseAccessorHandler(data, sparse) {
        if (!sparse) {
            return data;
        }
        var count = sparse.count;
        // if dont create a new TpyedArray here, it will change the origin data in buffer
        var TypedArray = data.data.constructor;
        var newArray = new TypedArray(data.realLength);
        newArray.set(data.data);
        data.data = newArray;
        // values
        var buffer = this.bufferViews[sparse.values.bufferView];
        var values = new TypedArray(buffer, sparse.values.byteOffset, count);
        // indices
        TypedArray = ComponentTypeMap[sparse.indices.componentType][1];
        buffer = this.bufferViews[sparse.indices.bufferView];
        var indices = new TypedArray(buffer, sparse.indices.byteOffset, count);
        // change it
        for (var i = 0; i < count; i++) {
            var offset = data.getComponentOffset(indices[i]);
            newArray[offset] = values[i];
        }
        return data;
    },
    getAccessorData: function getAccessorData(name, isDecode) {
        var accessor = this.json.accessors[name];
        if (accessor.data) {
            return accessor.data;
        }

        var _ComponentTypeMap$acc = _slicedToArray(ComponentTypeMap[accessor.componentType], 2),
            TypedArray = _ComponentTypeMap$acc[1];

        var number = ComponentNumberMap[accessor.type];
        var bufferView = this.bufferViews[accessor.bufferView];
        var count = accessor.count * number;
        var result = void 0;
        if (bufferView.array && bufferView.byteStride > number * TypedArray.BYTES_PER_ELEMENT) {
            result = new GeometryData(bufferView.array, number, {
                offset: accessor.byteOffset || 0,
                stride: bufferView.byteStride
            });
        } else {
            var offset = (accessor.byteOffset || 0) + bufferView.byteOffset;
            var array = void 0;
            if (offset % TypedArray.BYTES_PER_ELEMENT) {
                var buffer = bufferView.buffer.slice(offset, offset + count * TypedArray.BYTES_PER_ELEMENT);
                array = new TypedArray(buffer);
            } else {
                array = new TypedArray(bufferView.buffer, offset, count);
            }
            result = new GeometryData(array, number);
        }

        if (accessor.sparse) {
            result = this.sparseAccessorHandler(result, accessor.sparse);
        }

        if (accessor.extensions && accessor.extensions.WEB3D_quantized_attributes) {
            var decodeMat = accessor.extensions.WEB3D_quantized_attributes.decodeMatrix;
            if (isDecode) {
                result = this.unQuantizeData(result, decodeMat);
            } else {
                result.decodeMat = decodeMat;
            }
        }
        accessor.data = result;
        return result;
    },
    getArrayByAccessor: function getArrayByAccessor(name, isDecode) {
        var accessor = this.json.accessors[name];
        if (accessor.array) {
            return accessor.array;
        }
        var data = this.getAccessorData(name, isDecode);
        if (!data.stride && !data.offset && data.size === 1) {
            return data.data;
        }

        var result = [];
        data.traverse(function (d) {
            result.push(d.toArray ? d.toArray() : d);
        });
        accessor.array = result;
        return result;
    },
    parseTechnique: function parseTechnique(materialData, material) {
        var technique = null;
        if (this.json.techniques) {
            technique = this.json.techniques[materialData.technique];
        }
        if (!technique) {
            return;
        }
        if (!technique.states) {
            return;
        }

        technique.states.enable.forEach(function (flag) {
            switch (flag) {
                case BLEND:
                    material.blend = true;
                    break;
                case DEPTH_TEST:
                    material.depthTest = true;
                    break;
                case CULL_FACE:
                    material.cullFace = true;
                    break;
                default:
                    break;
            }
        });

        util.each(technique.states.functions, function (value, fnName) {
            switch (fnName) {
                case 'blendEquationSeparate':
                    {
                        material.blendEquation = value[0];
                        material.blendEquationAlpha = value[1];
                        break;
                    }
                case 'blendFuncSeparate':
                    {
                        material.blendSrc = value[0];
                        material.blendDst = value[1];
                        material.blendSrcAlpha = value[2];
                        material.blendDstAlpha = value[3];
                        break;
                    }
                case 'depthMask':
                    {
                        material.depthMask = value[0];
                        break;
                    }
                case 'cullFace':
                    {
                        material.cullFaceType = value[0];
                        break;
                    }
                default:
                    material[fnName] = value;
                    break;
            }
        });

        if (material.cullFace) {
            material.side = material.cullFaceType === FRONT ? BACK : FRONT;
        } else {
            material.side = FRONT_AND_BACK;
        }
    },
    parseMesh: function parseMesh(meshName, node, nodeData) {
        var _this8 = this;

        var meshData = this.json.meshes[meshName];
        meshData.primitives.forEach(function (primitive) {
            if (primitive.meshNode) {
                node.addChild(primitive.meshNode.clone());
                return;
            }

            var geometry = void 0;
            if (primitive.targets && primitive.targets.length) {
                // MorphGeometry
                geometry = new MorphGeometry();
                var targets = geometry.targets = {};
                util.each(primitive.targets, function (target) {
                    util.each(target, function (accessorName, name) {
                        var geometryName = glTFAttrToGeometry[name].name;
                        if (!targets[geometryName]) {
                            targets[geometryName] = [];
                        }
                        var data = _this8.getAccessorData(accessorName, true);
                        targets[geometryName].push(data);
                    });
                });
                if (meshData.weights) {
                    geometry.weights = primitive.weights;
                } else {
                    geometry.weights = new Float32Array(primitive.targets.length);
                }
            } else {
                geometry = new Geometry();
            }

            if ('indices' in primitive) {
                geometry.indices = _this8.getAccessorData(primitive.indices);
            }
            var attr = primitive.attributes;
            for (var name in attr) {
                var info = glTFAttrToGeometry[name];
                if (!info) {
                    console.warn('Unknow attribute named ' + name + '!');
                    continue;
                }
                var isDecode = !(_this8.isUseQuantizedMaterial && info.decodeMatName);

                geometry[info.name] = _this8.getAccessorData(attr[name], isDecode);
                if (!isDecode) {
                    geometry[info.decodeMatName] = geometry[info.name].decodeMat;
                    delete geometry[info.name].decodeMat;
                }
            }

            if (geometry._tangents) {
                if (geometry._tangents.length > geometry.vertices.length) {
                    geometry._tangents.stride = 16;
                    geometry._tangents.size = 3;
                }
            }

            var material = _this8.materials[primitive.material];
            if (!material) {
                material = new BasicMaterial();
            }
            var skin = _this8.json.skins && _this8.json.skins[nodeData.skin];
            var MeshClass = skin ? SkinedMesh : Mesh;
            var mesh = new MeshClass({
                geometry: geometry,
                material: material,
                name: 'mesh-' + (meshData.name || meshName)
            });
            _this8.meshes.push(mesh);

            if (skin) {
                var jointCount = (skin.jointNames || skin.joints).length;
                var inverseBindMatrices = _this8.getArrayByAccessor(skin.inverseBindMatrices, true);
                mesh.bindShapeMatrix = new Matrix4();
                if (skin.bindShapeMatrix) {
                    mesh.bindShapeMatrix.fromArray(skin.bindShapeMatrix);
                }
                for (var i = 0; i < jointCount; i++) {
                    mesh.inverseBindMatrices.push(new Matrix4().fromArray(inverseBindMatrices[i]));
                }
                mesh.jointNames = skin.jointNames || skin.joints;
                if (_this8.useInstanced) {
                    mesh.useInstanced = true;
                }
            }
            node.addChild(mesh);
            primitive.meshNode = mesh;
        });
    },
    parseCameras: function parseCameras() {
        var _this9 = this;

        this.cameras = {};
        var defaultAspect = window.innerWidth / window.innerHeight;
        util.each(this.json.cameras, function (cameraData, name) {
            if (cameraData.type === 'perspective') {
                var camera = new PerspectiveCamera();
                camera.name = cameraData.name || name;
                camera.fov = math.radToDeg(cameraData.perspective.yfov);
                camera.near = cameraData.perspective.znear;
                camera.far = cameraData.perspective.zfar;
                if (cameraData.aspectRatio) {
                    camera.aspect = cameraData.aspectRatio;
                } else {
                    camera.aspect = defaultAspect;
                }
                _this9.cameras[name] = camera;
            }
        });
    },
    parseNode: function parseNode(nodeName, parentNode) {
        var _this10 = this;

        var data = this.json.nodes[nodeName];
        var node = null;
        if (data.camera && this.cameras[data.camera]) {
            node = this.cameras[data.camera];
        } else {
            node = new Node({
                name: this.isGLTF2 ? data.name || nodeName : nodeName
            });
        }
        if (data.matrix) {
            var matrix = new Matrix4();
            matrix.fromArray(data.matrix);
            node.matrix = matrix;
        } else {
            if (data.rotation) {
                node.quaternion.fromArray(data.rotation);
            }
            if (data.scale) {
                node.setScale(data.scale[0], data.scale[1], data.scale[2]);
            }
            if (data.translation) {
                node.x = data.translation[0];
                node.y = data.translation[1];
                node.z = data.translation[2];
            }
        }
        if (data.jointName) {
            node.jointName = data.jointName;
            this.jointMap[node.jointName] = node;
        } else if (this.isGLTF2) {
            node.jointName = nodeName;
            this.jointMap[nodeName] = node;
        }

        if (data.meshes) {
            data.meshes.forEach(function (meshName) {
                return _this10.parseMesh(meshName, node, data);
            });
        } else if ('mesh' in data) {
            this.parseMesh(data.mesh, node, data);
        }

        if (data.children) {
            data.children.forEach(function (name) {
                return _this10.parseNode(name, node);
            });
        }

        parentNode.addChild(node);
    },
    parseAnimations: function parseAnimations() {
        var _this11 = this;

        if (!this.json.animations) {
            return null;
        }
        var animStatesList = [];

        var _loop = function _loop(name) {
            var info = _this11.json.animations[name];
            info.channels.forEach(function (channel) {
                var path = channel.target.path;
                var nodeId = channel.target.id;
                if (_this11.isGLTF2) {
                    nodeId = channel.target.node;
                    if (_this11.json.nodes[nodeId].name) {
                        nodeId = _this11.json.nodes[nodeId].name;
                    }
                }

                var sampler = info.samplers[channel.sampler];
                var inputAccessName = _this11.isGLTF2 ? sampler.input : info.parameters[sampler.input];
                var outputAccessName = _this11.isGLTF2 ? sampler.output : info.parameters[path];
                var keyTime = _this11.getArrayByAccessor(inputAccessName, true);
                var states = _this11.getArrayByAccessor(outputAccessName, true);
                if (path === 'rotation') {
                    path = 'quaternion';
                }
                var animStates = new AnimationStates({
                    interpolationTpye: sampler.interpolation,
                    nodeName: nodeId,
                    keyTime: keyTime,
                    states: states,
                    type: AnimationStates.getType(path)
                });
                animStatesList.push(animStates);
            });
        };

        for (var name in this.json.animations) {
            _loop(name);
        }
        if (!animStatesList.length) {
            return null;
        }
        var anim = new Animation({
            rootNode: this.node,
            animStatesList: animStatesList
        });

        this.parseAnimationClipsExtension(anim);

        return anim;
    },
    parseAnimationClipsExtension: function parseAnimationClipsExtension(anim) {
        var extensions = this.json.extensions;
        var animationClips = extensions && extensions.HILO_animation_clips;
        if (!animationClips) {
            return;
        }
        for (var name in animationClips) {
            var clip = animationClips[name];
            anim.addClip(name, clip[0], clip[1]);
        }
    },
    parseScene: function parseScene() {
        var _this12 = this;

        this.parseMaterials();
        this.jointMap = {};
        this.meshes = [];

        this.node = new Node({
            needCallChildUpdate: false
        });

        this.parseCameras();

        var nodes = this.json.scenes[this.json.scene || 0].nodes;
        nodes.forEach(function (node) {
            return _this12.parseNode(node, _this12.node);
        });

        this.node.resetSkinedMeshRootNode();

        var anim = this.parseAnimations();
        if (anim) {
            this.node.setAnim(anim);
            anim.play();
        }

        return {
            node: this.node,
            meshes: this.meshes,
            anim: anim,
            cameras: Object.values(this.cameras),
            lights: [],
            textures: Object.values(this.textures),
            materials: Object.values(this.materials)
        };
    }
});

module.exports = GLTFParser;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var BasicMaterial = __webpack_require__(13);

/**
 * 对Attribute进行量化压缩后的解压Material
 * 需要对应的Geometry支持 positionDecodeMat, normalDecodeMat, uvDecodeMat 三个参数    
 * @class
 * @extends BasicMaterial
 */
var QuantizedMaterial = Class.create( /** @lends QuantizedMaterial.prototype */{
  Extends: BasicMaterial,
  /**
   * @default true
   * @type {boolean}
   */
  isQuantizedMaterial: true,
  /**
   * @default QuantizedMaterial
   * @type {string}
   */
  className: 'QuantizedMaterial',
  usedUniformVectors: 22,
  /**
   * @constructs
   * @param {object} params 初始化参数，所有params都会复制到实例上
   */
  constructor: function constructor(params) {
    QuantizedMaterial.superclass.constructor.call(this, params);

    Object.assign(this.uniforms, {
      u_positionDecodeMat: 'POSITIONDECODEMAT',
      u_normalDecodeMat: 'NORMALDECODEMAT',
      u_uvDecodeMat: 'UVDECODEMAT'
    });
  },
  getRenderOption: function getRenderOption() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    QuantizedMaterial.superclass.getRenderOption.call(this, option);
    option.QUANTIZED = 1;
    return option;
  }
});

module.exports = QuantizedMaterial;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(3);
var Class = __webpack_require__(0);
var Geometry = __webpack_require__(7);

/**
 * Morph几何体
 * @class
 * @extends Geometry
 */
var MorphGeometry = Class.create( /** @lends MorphGeometry.prototype */{
    Extends: Geometry,
    /**
     * @default true
     * @type {boolean}
     */
    isMorphGeometry: true,
    /**
     * @default MorphGeometry
     * @type {string}
     */
    className: 'MorphGeometry',
    isStatic: false,

    /**
     * morph animation weights
     * @type {Array.<number>}
     */
    weights: null,
    /**
     * like: 
     * {
     *     vertices: [[], []],
     *     normals: [[], []],
     *     tangents: [[], []]
     * }
     * @default null
     * @type {Object}
     */
    targets: null,
    /**
     * @constructs
     * @param {object} [params] 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        MorphGeometry.superclass.constructor.call(this, params);
        this.weights = this.weights || [];
    },
    update: function update(weights, originalWeightIndices) {
        this.weights = weights;
        this._originalMorphIndices = originalWeightIndices;
    },
    clone: function clone() {
        return Geometry.prototype.clone.call(this, {
            targets: this.targets,
            weights: this.weights
        });
    },
    getRenderOption: function getRenderOption() {
        var _this = this;

        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        MorphGeometry.superclass.getRenderOption.call(this, opt);

        if (this.targets) {
            if (!this._maxMorphTargetCount) {
                this._maxMorphTargetCount = Math.floor(8 / Object.keys(this.targets).length);
            }
            util.each(this.targets, function (list, name) {
                opt.MORPH_TARGET_COUNT = Math.min(list.length, _this._maxMorphTargetCount);
                if (name === 'vertices') {
                    opt.MORPH_HAS_POSITION = 1;
                } else if (name === 'normals') {
                    opt.MORPH_HAS_NORMAL = 1;
                } else if (name === 'tangents') {
                    opt.MORPH_HAS_TANGENT = 1;
                }
            });
        }
        return opt;
    }
});

module.exports = MorphGeometry;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var BasicLoader = __webpack_require__(12);
var ShaderMaterial = __webpack_require__(87);

/**
 * ShaderMaterial加载类
 * @class
 * @extends {BasicLoader}
 * @example
 * var loader = new Hilo3d.ShaderMaterialLoader();
 * loader.load({
 *     fs: './test.frag',
 *     vs: './test.vert',
 *     attributes: {
 *         a_pos: {
 *             semantic: 'POSITION'
 *         },
 *         a_uv: {
 *             semantic: 'TEXCOORD_0'
 *         }
 *     },
 *     uniforms: {
 *         u_mat: {
 *             semantic:'MODELVIEWPROJECTION'
 *         },
 *         u_diffuse: {
 *             semantic: 'DIFFUSE'
 *         }
 *     },
 *     diffuse: new Hilo3d.LazyTexture({
 *         crossOrigin: true,
 *         src: '//img.alicdn.com/tfs/TB1va2xQVXXXXaFapXXXXXXXXXX-1024-710.jpg'
 *     })
 * }).then(material => {
 *     var geometry = new Hilo3d.PlaneGeometry();
 *     var plane = new Hilo3d.Mesh({
 *         material: material,
 *         geometry: geometry
 *     });
 *     stage.addChild(plane);
 * });
 */
var ShaderMaterialLoader = Class.create({
    Extends: BasicLoader,
    constructor: function constructor() {
        ShaderMaterialLoader.superclass.constructor.call(this);
    },

    /**
     * 加载ShaderMaterial
     *
     * @memberOf ShaderMaterialLoader
     * @instance
     *
     * @param {object} params 加载参数，所有参数均会传递给 ShaderMaterial 的构造器
     * @param {string} params.fs fragment shader 文件的地址
     * @param {string} params.vs vertex shader 文件的地址
     * @return {Promise.<ShaderMaterial, Error>} 返回加载完的ShaderMaterial实例
     */
    load: function load(params) {
        var list = [this.loadRes(params.fs), this.loadRes(params.vs)];

        var args = Object.assign({}, params);
        return Promise.all(list).then(function (result) {
            args.fs = result[0];
            args.vs = result[1];
            return new ShaderMaterial(args);
        }, function (err) {
            console.warn('ShaderMaterial Loader Failed for ' + err);
        });
    }
});

module.exports = ShaderMaterialLoader;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Node = __webpack_require__(10);
var Mesh = __webpack_require__(18);
var Geometry = __webpack_require__(7);
var GeometryData = __webpack_require__(8);
var BasicMaterial = __webpack_require__(13);
var Color = __webpack_require__(6);

var _require = __webpack_require__(2),
    LINES = _require.LINES;

var axisMap = {
    x: [0, 0, 0, 1, 0, 0],
    y: [0, 0, 0, 0, 1, 0],
    z: [0, 0, 0, 0, 0, 1]
};

/**
 * 坐标轴帮助类
 * @class
 * @extends Node
 * @example
 * stage.addChild(new Hilo3d.AxisHelper());
 */
var AxisHelper = Class.create( /** @lends AxisHelper.prototype */{
    Extends: Node,
    /**
     * @default true
     * @type {boolean}
     */
    isAxisHelper: true,
    /**
     * @default AxisHelper
     * @type {string}
     */
    className: 'AxisHelper',
    /**
     * 坐标轴的长度，不可变更，需要变可以通过设置 scale
     * @default 1
     * @type {number}
     */
    size: 1,
    /**
     * @constructs
     * @param {object} [params] 初始化参数
     */
    constructor: function constructor(params) {
        AxisHelper.superclass.constructor.call(this, params);
        this.init();
    },
    addAxis: function addAxis(direction) {
        var mesh = new Mesh({
            name: 'AxisHelper_' + direction,
            geometry: new Geometry({
                mode: LINES,
                vertices: new GeometryData(new Float32Array(axisMap[direction])),
                indices: new GeometryData(new Uint16Array([0, 1]))
            }),
            material: new BasicMaterial({
                diffuse: new Color(axisMap[direction][3], axisMap[direction][4], axisMap[direction][5]),
                lightType: 'NONE'
            })
        });
        this.addChild(mesh);
    },
    init: function init() {
        this.setScale(this.size);
        this.addAxis('x');
        this.addAxis('y');
        this.addAxis('z');
    }
});

module.exports = AxisHelper;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Mesh = __webpack_require__(18);
var Geometry = __webpack_require__(7);
var BasicMaterial = __webpack_require__(13);
var Color = __webpack_require__(6);

var _require = __webpack_require__(2),
    LINES = _require.LINES;

/**
 * 网格帮助类
 * @class
 * @extends Mesh
 * @example
 * stage.addChild(new Hilo3d.AxisNetHelper({ size: 5 }));
 */


var AxisNetHelper = Class.create( /** @lends AxisNetHelper.prototype */{
  Extends: Mesh,
  /**
   * @default true
   * @type {boolean}
   */
  isAxisNetHelper: true,
  /**
   * @default AxisNetHelper
   * @type {string}
   */
  className: 'AxisNetHelper',
  /**
   * 网格线数量的一半(类似圆的半径)
   * @default 5
   * @type {number}
   */
  size: 5,
  /**
   * @constructs
   * @param {object} [params] 初始化参数
   */
  constructor: function constructor(params) {
    AxisNetHelper.superclass.constructor.call(this, params);
    /**
     * 颜色
     * @default new Color(.5, .5, .5)
     * @type {Color}
     */
    this.color = this.color || new Color(.5, .5, .5);

    var geometry = new Geometry({
      mode: LINES
    });
    var size = this.size;
    var max = size * 2 + 1;
    for (var i = 0; i < max; i++) {
      var x = i / size - 1;
      geometry.addLine([x, 0, -1], [x, 0, 1]);
      geometry.addLine([-1, 0, x], [1, 0, x]);
    }
    this.geometry = geometry;
    this.material = new BasicMaterial({
      diffuse: this.color,
      lightType: 'NONE'
    });
  }
});

module.exports = AxisNetHelper;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Light = __webpack_require__(21);
var LightShadow = __webpack_require__(88);
var Matrix4 = __webpack_require__(4);
var Vector3 = __webpack_require__(5);

var tempMatrix4 = new Matrix4();
var tempVector3 = new Vector3();

/**
 * 平行光
 * @class
 * @extends Light
 */
var DirectionalLight = Class.create( /** @lends DirectionalLight.prototype */{
    Extends: Light,
    /**
     * @default true
     * @type {boolean}
     */
    isDirectionalLight: true,
    /**
     * @default DirectionalLight
     * @type {string}
     */
    className: 'DirectionalLight',
    /**
     * 阴影生成参数，默认不生成阴影
     * @default null
     * @type {object}
     * @property {boolean} [debug=false] 是否显示生成的阴影贴图
     * @property {number} [width=render.width] 阴影贴图的宽，默认为画布宽
     * @property {number} [height=render.height] 阴影贴图的高，默认为画布高
     * @property {number} [maxBias=0.05] depth最大差值，实际的bias为max(maxBias * (1 - dot(normal, lightDir)), minBias)
     * @property {number} [minBias=0.005] depth最小差值
     */
    shadow: null,
    /**
     * @constructs
     * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        /**
         * 光方向
         * @type {Vector3}
         * @default new Vector3(0, 0, 1)
         */
        this.direction = new Vector3(0, 0, 1);
        DirectionalLight.superclass.constructor.call(this, params);
    },
    createShadowMap: function createShadowMap(renderer, camera) {
        if (!this.shadow) {
            return;
        }
        if (!this.lightShadow) {
            this.lightShadow = new LightShadow({
                light: this,
                renderer: renderer,
                width: this.shadow.width || renderer.width,
                height: this.shadow.height || renderer.height,
                debug: this.shadow.debug
            });
            if ('minBias' in this.shadow) {
                this.lightShadow.minBias = this.shadow.minBias;
            }
            if ('maxBias' in this.shadow) {
                this.lightShadow.maxBias = this.shadow.maxBias;
            }
        }
        this.lightShadow.createShadowMap(camera);
    },
    getWorldDirection: function getWorldDirection() {
        tempVector3.copy(this.direction).transformDirection(this.worldMatrix).normalize();
        return tempVector3;
    },
    getViewDirection: function getViewDirection(camera) {
        var modelViewMatrix = camera.getModelViewMatrix(this, tempMatrix4);
        tempVector3.copy(this.direction).transformDirection(modelViewMatrix).normalize();
        return tempVector3;
    }
});

module.exports = DirectionalLight;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var BasicMaterial = __webpack_require__(13);

var _require = __webpack_require__(2),
    FRONT = _require.FRONT;

var ShadowMaterial = Class.create({
    Extends: BasicMaterial,
    isShadowMaterial: true,
    className: 'ShadowMaterial',

    cullFace: true,
    cullFaceType: FRONT,

    lightType: 'NONE',
    constructor: function constructor(params) {
        ShadowMaterial.superclass.constructor.call(this, params);
    }
});

module.exports = ShadowMaterial;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Light = __webpack_require__(21);

/**
 * 点光源
 * @class
 * @extends Light
 */
var PointLight = Class.create( /** @lends PointLight.prototype */{
  Extends: Light,
  /**
   * @default true
   * @type {boolean}
   */
  isPointLight: true,
  /**
   * @default PointLight
   * @type {string}
   */
  className: 'PointLight',
  /**
   * @constructs
   * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性。
   */
  constructor: function constructor(params) {
    /**
     * 光常量衰减值
     * @type {Number}
     * @default 0
     */
    this.constantAttenuation = 0;

    /**
     * 光一次衰减值
     * @type {Number}
     * @default 1
     */
    this.linearAttenuation = 1;

    /**
     * 光二次衰减值
     * @type {Number}
     * @default 1
     */
    this.quadraticAttenuation = 1;
    PointLight.superclass.constructor.call(this, params);
  },

  /**
   * 获取光信息
   * @param  {Array} out  信息接受数组
   * @param  {Number} offset 偏移值
   */
  toInfoArray: function toInfoArray(out, offset) {
    out[offset + 0] = this.constantAttenuation;
    out[offset + 1] = this.linearAttenuation;
    out[offset + 2] = this.quadraticAttenuation;
  }
});

module.exports = PointLight;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Light = __webpack_require__(21);
var LightShadow = __webpack_require__(88);
var math = __webpack_require__(1);
var Matrix4 = __webpack_require__(4);
var Vector3 = __webpack_require__(5);

var tempMatrix4 = new Matrix4();
var tempVector3 = new Vector3();

/**
 * 聚光灯
 * @class
 * @extends Light
 */
var SpotLight = Class.create( /** @lends SpotLight.prototype */{
    Extends: Light,
    /**
     * @default true
     * @type {boolean}
     */
    isSpotLight: true,
    /**
     * @default SpotLight
     * @type {string}
     */
    className: 'SpotLight',
    /**
     * 阴影生成参数，默认不生成阴影
     * @default null
     * @type {object}
     * @property {boolean} [debug=false] 是否显示生成的阴影贴图
     * @property {number} [width=render.width] 阴影贴图的宽，默认为画布宽
     * @property {number} [height=render.height] 阴影贴图的高，默认为画布高
     * @property {number} [bias=0.005] depth最小差值，大于才显示阴影
     */
    shadow: null,
    _cutOffCos: 0.9763,
    _cutOff: 12.5,
    /**
     * 切光角(角度)，落在这个角度之内的光亮度为1
     * @default 12.5
     * @type {number}
     */
    cutOff: {
        get: function get() {
            return this._cutOff;
        },
        set: function set(value) {
            this._cutOff = value;
            this._cutOffCos = Math.cos(math.degToRad(value));
        }
    },
    _outerCutOffCos: 0.9537,
    _outerCutOff: 17.5,
    /**
     * 外切光角(角度)，在切光角合外切光角之间的光亮度渐变到0
     * @default 17.5
     * @type {number}
     */
    outerCutOff: {
        get: function get() {
            return this._outerCutOff;
        },
        set: function set(value) {
            this._outerCutOff = value;
            this._outerCutOffCos = Math.cos(math.degToRad(value));
        }
    },
    /**
     * 光常量衰减值
     * @type {number}
     * @default 1
     */
    constantAttenuation: 1,
    /**
     * 光一次衰减值
     * @type {number}
     * @default 0.09
     */
    linearAttenuation: 0.09,
    /**
     * 光二次衰减值
     * @type {number}
     * @default 0.32
     */
    quadraticAttenuation: 0.32,
    /**
     * @constructs
     * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        /**
         * 光方向
         * @type {Vector3}
         * @default new Vector3(0, 0, 1)
         */
        this.direction = new Vector3(0, 0, 1);
        SpotLight.superclass.constructor.call(this, params);
    },
    createShadowMap: function createShadowMap(renderer, camera) {
        if (!this.shadow) {
            return;
        }
        if (!this.lightShadow) {
            this.lightShadow = new LightShadow({
                light: this,
                renderer: renderer,
                width: this.shadow.width || renderer.width,
                height: this.shadow.height || renderer.height,
                debug: this.shadow.debug
            });
            if ('minBias' in this.shadow) {
                this.lightShadow.minBias = this.shadow.minBias;
            }
            if ('maxBias' in this.shadow) {
                this.lightShadow.maxBias = this.shadow.maxBias;
            }
        }
        this.lightShadow.createShadowMap(camera);
    },
    getWorldDirection: function getWorldDirection() {
        tempVector3.copy(this.direction).transformDirection(this.worldMatrix).normalize();
        return tempVector3;
    },
    getViewDirection: function getViewDirection(camera) {
        var modelViewMatrix = camera.getModelViewMatrix(this, tempMatrix4);
        tempVector3.copy(this.direction).transformDirection(modelViewMatrix).normalize();
        return tempVector3;
    },

    /**
     * 获取光信息
     * @param  {Array} out  信息接受数组
     * @param  {Number} offset 偏移值
     */
    toInfoArray: function toInfoArray(out, offset) {
        out[offset + 0] = this.constantAttenuation;
        out[offset + 1] = this.linearAttenuation;
        out[offset + 2] = this.quadraticAttenuation;
    }
});

module.exports = SpotLight;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Light = __webpack_require__(21);

/**
 * 环境光
 * @class
 * @extends Light
 */
var AmbientLight = Class.create( /** @lends AmbientLight.prototype */{
  Extends: Light,
  isAmbientLight: true,
  className: 'AmbientLight',
  autoUpdateWorldMatrix: false,
  /**
   * @constructs
   * @override
   * @param {Object} [params] 创建对象的属性参数。可包含此类的所有属性。
   */
  constructor: function constructor(params) {
    /**
     * 光强度
     * @type {Number}
     * @default 1
     */
    this.amount = 1;
    AmbientLight.superclass.constructor.call(this, params);
  }
});

module.exports = AmbientLight;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(0);
var Color = __webpack_require__(6);
var util = __webpack_require__(3);
var FrameBuffer = __webpack_require__(26);
var BasicMaterial = __webpack_require__(13);

var meshPickerMaterial = new BasicMaterial({
    lightType: 'NONE'
});
var clearColor = new Color(1, 1, 1);
var tempColor = new Color();

/**
 * Mesh 选择工具，可以获取画布中某个区域内的Mesh
 * @class
 * @example
 * const picker = new Hilo3d.MeshPicker({
 *     renderer: stage.renderer
 * });
 * picker.getSelection(20, 20, 1, 1);
 */
var MeshPicker = Class.create( /** @lends MeshPicker.prototype */{
    /**
     * @default true
     * @type {boolean}
     */
    isMeshPicker: true,
    /**
     * @default MeshPicker
     * @type {string}
     */
    className: 'MeshPicker',
    /**
     * 是否开启debug，开启后会将mesh以不同的颜色绘制在左下角
     * @default false
     * @type {boolean}
     */
    debug: false,
    /**
     * WebGLRenderer 的实例
     * @default null
     * @type {WebGLRenderer}
     */
    renderer: null,
    colorMeshMap: null,
    /**
     * @constructs
     * @param {object} params 创建对象的属性参数，可包含此类的所有属性。
     */
    constructor: function constructor(params) {
        Object.assign(this, params);
        this.colorMeshMap = {};
        this.init();
    },
    createFrameBuffer: function createFrameBuffer() {
        if (this.framebuffer) {
            return;
        }

        var renderer = this.renderer;

        this.framebuffer = new FrameBuffer(renderer, {
            useVao: renderer.useVao,
            width: renderer.width,
            height: renderer.height
        });
    },
    renderDebug: function renderDebug() {
        this.framebuffer.render(0, 0.7, 0.3, 0.3);
    },
    createMeshNumberId: function createMeshNumberId(mesh) {
        if (!('numberId' in mesh)) {
            mesh.numberId = Number(mesh.id.replace(/^.*_(\d+)$/, '$1')) * 10;
            mesh.color = util.padLeft(mesh.numberId.toString(16), 6);
            this.colorMeshMap[mesh.color] = mesh;
        }
    },
    renderColoredMeshes: function renderColoredMeshes() {
        var _this = this;

        var renderer = this.renderer,
            framebuffer = this.framebuffer;


        framebuffer.bind();
        renderer.clear(clearColor);
        var currentForceMaterial = renderer.forceMaterial;
        renderer.forceMaterial = meshPickerMaterial;
        renderer.renderList.traverse(function (arr) {
            arr.forEach(function (mesh) {
                _this.createMeshNumberId(mesh);
                meshPickerMaterial.diffuse.fromHEX(mesh.color);
                meshPickerMaterial.isDirty = true;
                renderer.renderMesh(mesh);
            });
        });
        renderer.forceMaterial = currentForceMaterial;
        framebuffer.unbind();
    },


    /**
     * 获取指定区域内的Mesh，注意无法获取被遮挡的Mesh
     * @param {number} x 左上角的x坐标
     * @param {number} y 左上角的y坐标
     * @param {number} [width=1] 区域的宽
     * @param {number} [height=1] 区域的高
     * @return {Mesh[]} 返回获取的Mesh数组
     */
    getSelection: function getSelection(x, y) {
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        var pixelRatio = this.renderer.pixelRatio;
        var meshes = [];
        var pixels = this.framebuffer.readPixels(x * pixelRatio, y * pixelRatio, width * pixelRatio, height * pixelRatio);
        for (var i = 0; i < pixels.length; i += 4) {
            var color = tempColor.fromUintArray(pixels, i).toHEX();
            if (this.colorMeshMap[color]) {
                meshes.push(this.colorMeshMap[color]);
            }
        }
        return meshes;
    },
    init: function init() {
        var _this2 = this;

        this.createFrameBuffer();
        this.renderer.on('afterRender', function () {
            _this2.renderColoredMeshes();
            if (_this2.debug) {
                _this2.renderDebug();
            }
        });
    }
});

module.exports = MeshPicker;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Ticker是一个定时器类。它可以按指定帧率重复运行，从而按计划执行代码。
 * @class  Ticker
 * @see  {@link http://hiloteam.github.io/Hilo/docs/api-zh/symbols/Ticker.html}
 */
var Ticker = __webpack_require__(150);

module.exports = Ticker;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.1.1 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(22);
var browser = __webpack_require__(89);



/**
 * @language=en
 * @class Ticker is a Timer. It can run the code at specified framerate.
 * @param {Number} fps The fps of ticker.
 * @module hilo/util/Ticker
 * @requires hilo/core/Class
 * @requires hilo/util/browser
 */
var Ticker = Class.create(/** @lends Ticker.prototype */{
    constructor: function(fps){
        this._targetFPS = fps || 30;
        this._interval = 1000 / this._targetFPS;
        this._tickers = [];
    },

    _paused: false,
    _targetFPS: 0,
    _interval: 0,
    _intervalId: null,
    _tickers: null,
    _lastTime: 0,
    _tickCount: 0,
    _tickTime: 0,
    _measuredFPS: 0,

    /**
     * @language=en
     * Start the ticker.
     * @param {Boolean} userRAF Whether or not use requestAnimationFrame, default is not.
     */
    start: function(useRAF){
        if(this._intervalId) return;
        this._lastTime = +new Date();

        var self = this, interval = this._interval,
            raf = window.requestAnimationFrame ||
                  window[browser.jsVendor + 'RequestAnimationFrame'];

        var runLoop;
        if(useRAF && raf && interval < 17){
            this._useRAF = true;
            runLoop = function(){
                self._intervalId = raf(runLoop);
                self._tick();
            };
        }else{
            runLoop = function(){
                self._intervalId = setTimeout(runLoop, interval);
                self._tick();
            };
        }

        this._paused = false;
        runLoop();
    },

    /**
     * @language=en
     * Stop the ticker.
     */
    stop: function(){
        if(this._useRAF){
            var cancelRAF = window.cancelAnimationFrame ||
                  window[browser.jsVendor + 'CancelAnimationFrame'];
            cancelRAF(this._intervalId);
        }
        else{
            clearTimeout(this._intervalId);
        }
        this._intervalId = null;
        this._lastTime = 0;
        this._paused = true;
    },

    /**
     * @language=en
     * Pause the ticker.
     */
    pause: function(){
        this._paused = true;
    },

    /**
     * @language=en
     * Resume the ticker.
     */
    resume: function(){
        this._paused = false;
    },

    /**
     * @private
     */
    _tick: function(){
        if(this._paused) return;
        var startTime = +new Date(),
            deltaTime = startTime - this._lastTime,
            tickers = this._tickers;

        //calculates the real fps
        if(++this._tickCount >= this._targetFPS){
            this._measuredFPS = 1000 / (this._tickTime / this._tickCount) + 0.5 >> 0;
            this._tickCount = 0;
            this._tickTime = 0;
        }else{
            this._tickTime += startTime - this._lastTime;
        }
        this._lastTime = startTime;

        var tickersCopy = tickers.slice(0);
        for(var i = 0, len = tickersCopy.length; i < len; i++){
            tickersCopy[i].tick(deltaTime);
        }
    },

    /**
     * @language=en
     * Get the fps.
     */
    getMeasuredFPS: function(){
        return this._measuredFPS;
    },

    /**
     * @language=en
     * Add tickObject. The tickObject must implement the tick method.
     * @param {Object} tickObject The tickObject to add.It must implement the tick method.
     */
    addTick: function(tickObject){
        if(!tickObject || typeof(tickObject.tick) != 'function'){
            throw new Error('Ticker: The tick object must implement the tick method.');
        }
        this._tickers.push(tickObject);
    },

    /**
     * @language=en
     * Remove the tickObject
     * @param {Object} tickObject The tickObject to remove.
     */
    removeTick: function(tickObject){
        var tickers = this._tickers,
            index = tickers.indexOf(tickObject);
        if(index >= 0){
            tickers.splice(index, 1);
        }
    },
    /**
     * 下次tick时回调
     * @param  {Function} callback
     * @return {tickObj}
     */
    nextTick:function(callback){
        var that = this;
        var tickObj = {
            tick:function(dt){
                that.removeTick(tickObj);
                callback();
            }
        };

        that.addTick(tickObj);
        return tickObj;
    },
    /**
     * 延迟指定的时间后调用回调, 类似setTimeout
     * @param  {Function} callback
     * @param  {Number}   duration 延迟的毫秒数
     * @return {tickObj}
     */
    timeout:function(callback, duration){
        var that = this;
        var targetTime = new Date().getTime() + duration;
        var tickObj = {
            tick:function(){
                var nowTime = new Date().getTime();
                var dt = nowTime - targetTime;
                if(dt >= 0){
                    that.removeTick(tickObj);
                    callback();
                }
            }
        };
        that.addTick(tickObj);
        return tickObj;
    },
    /**
     * 指定的时间周期来调用函数, 类似setInterval
     * @param  {Function} callback
     * @param  {Number}   duration 时间周期，单位毫秒
     * @return {tickObj}
     */
    interval:function(callback, duration){
        var that = this;
        var targetTime = new Date().getTime() + duration;
        var tickObj = {
            tick:function(){
                var nowTime = new Date().getTime();
                var dt = nowTime - targetTime;
                if(dt >= 0){
                    if(dt < duration){
                        nowTime -= dt;
                    }
                    targetTime = nowTime + duration;
                    callback();
                }
            }
        };
        that.addTick(tickObj);
        return tickObj;
    }
});

module.exports = Ticker;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 浏览器特性集合
 * @namespace 
 * @see  {@link http://hiloteam.github.io/Hilo/docs/api-zh/symbols/browser.html}
 */
var browser = __webpack_require__(89);

module.exports = browser;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * WebGL支持检测
 * @namespace WebGLSupport
 * @type {Object}
 */
var WebGLSupport = {
    /**
     * 是否支持 WebGL
     * @return {Boolean}
     */
    get: function get() {
        if (this._isWebGLSupport === undefined) {
            try {
                var canvas = document.createElement('canvas');
                var gl = canvas.getContext('webgl');
                gl.clearColor(0, 1, 0, 1);
                gl.clear(gl.COLOR_BUFFER_BIT);

                var pixels = new Uint8Array(4);
                gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
                if (pixels[0] === 0 && pixels[1] === 255 && pixels[2] === 0 && pixels[3] === 255) {
                    this._isWebGLSupport = true;
                } else {
                    this._isWebGLSupport = false;
                }

                canvas = null;
                gl = null;
                pixels = null;
            } catch (e) {
                this._isWebGLSupport = false;
            }
        }
        return this._isWebGLSupport;
    }
};

module.exports = WebGLSupport;

/***/ })
/******/ ]);
if(typeof window !== 'undefined' && window.Hilo3d){
    if(typeof exports === 'object' && typeof module === 'object'){
        module.exports = window.Hilo3d;
    }
}

var stream = weex.requireModule('stream');

var Hilo3d = window.Hilo3d;
// Hilo3d.CanvasRenderer.prototype.resize = function (){};
// Hilo3d.Stage.prototype.updateViewport = function () {
//     return this.canvas.getRect();
// };       

var gcanvas = require('weex-gcanvas');
Hilo3d.resetGCanvas = function () {
    gcanvas.disable();
};
Hilo3d.Image = Image;
Hilo3d.CanvasElement = require('./CanvasElement');

function _gcv_string2ArrayBuffer( data ) {
    var response = new ArrayBuffer( data.length );
    var view = new Uint8Array( response );
    for ( var i = 0; i < data.length; i ++ ) {
        view[ i ] = data.charCodeAt( i );
    }
    return view.buffer;
}

Hilo3d.BasicLoader.prototype.request = function request ( opt ){
    if( !opt.method ) opt.method = 'GET';
    var responseType = (opt.type || '').toLowerCase();
   
    return new Promise((resolve, reject) => {  
        stream.fetch( opt, function ( res ){
            if( !res.ok ) return reject(new TypeError(`Network request failed for ${res.status}`));
            var data = res.data;
            var response;

            switch( responseType ){
                case 'buffer': 
                case 'arraybuffer':
                    response = _gcv_string2ArrayBuffer(decodeURIComponent(data));
                    break;
                default: // 'text' or other
                    response = data;    
                    break;
            }
            resolve( response );
        }); 
    });
};

module.exports = Hilo3d;