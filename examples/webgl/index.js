var window = require('./window');
var navigator = window.navigator;
var document = window.document;
var Image = window.Image;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 157);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(109);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__(371);

module.exports = constants;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
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
    clamp: function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    },
    degToRad: function degToRad(deg) {
        return deg * this.DEG2RAD;
    },
    radToDeg: function radToDeg(rad) {
        return rad * this.RAD2DEG;
    },
    isPowerOfTwo: function isPowerOfTwo(value) {
        return (value & value - 1) === 0 && value !== 0;
    },
    nearestPowerOfTwo: function nearestPowerOfTwo(value) {
        return Math.pow(2, Math.round(Math.log(value) / Math.LN2));
    },
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(11),
    BYTE = _require.BYTE,
    UNSIGNED_BYTE = _require.UNSIGNED_BYTE,
    SHORT = _require.SHORT,
    UNSIGNED_SHORT = _require.UNSIGNED_SHORT,
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

function convertUint8ArrayToString(array, isUTF8) {
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

var getTypedArrayClass = function () {
    var _TypedArrayClassMap;

    var TypedArrayClassMap = (_TypedArrayClassMap = {}, _defineProperty(_TypedArrayClassMap, BYTE, Int8Array), _defineProperty(_TypedArrayClassMap, UNSIGNED_BYTE, Uint8Array), _defineProperty(_TypedArrayClassMap, SHORT, Int16Array), _defineProperty(_TypedArrayClassMap, UNSIGNED_SHORT, Uint16Array), _defineProperty(_TypedArrayClassMap, FLOAT, Float32Array), _TypedArrayClassMap);
    return function (type) {
        return TypedArrayClassMap[type] || Float32Array;
    };
}();

function copyArrayData(destArr, srcArr, destIdx, srcIdx, count) {
    if (!destArr || !srcArr) {
        return;
    }
    for (var i = 0; i < count; i++) {
        destArr[destIdx + i] = srcArr[srcIdx + i];
    }
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
    copyArrayData: copyArrayData
};

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec3 = __webpack_require__(57).vec3;
var Class = __webpack_require__(1);

var Vector3 = Class.create({
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        this.elements = vec3.fromValues(x, y, z);
    },
    copy: function copy(v) {
        vec3.copy(this.elements, v.elements);
        return this;
    },
    clone: function clone() {
        var elements = this.elements;
        return new Vector3(elements[0], elements[1], elements[2]);
    },
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        array[0 + offset] = elements[0];
        array[1 + offset] = elements[1];
        array[2 + offset] = elements[2];
        return array;
    },
    fromArray: function fromArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        elements[0] = array[offset + 0];
        elements[1] = array[offset + 1];
        elements[2] = array[offset + 2];
        return this;
    },
    set: function set(x, y, z) {
        vec3.set(this.elements, x, y, z);
        return this;
    },
    lerp: function lerp(v, t) {
        vec3.lerp(this.elements, this.elements, v.elements, t);
        return this;
    },
    length: function length() {
        return vec3.length(this.elements);
    },
    squaredLength: function squaredLength() {
        return vec3.squaredLength(this.elements);
    },
    normalize: function normalize() {
        vec3.normalize(this.elements, this.elements);
        return this;
    },
    transformMat3: function transformMat3(m) {
        vec3.transformMat3(this.elements, this.elements, m.elements);
        return this;
    },
    transformMat4: function transformMat4(m) {
        vec3.transformMat4(this.elements, this.elements, m.elements);
        return this;
    },
    sub: function sub(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.sub(this.elements, a.elements, b.elements);
        return this;
    },
    cross: function cross(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec3.cross(this.elements, a.elements, b.elements);
        return this;
    },
    inverse: function inverse(v) {
        vec3.inverse(this.elements, v.elements);
        return this;
    },

    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    },
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
        }
    }
});

module.exports = Vector3;

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Vector4 = __webpack_require__(185);
var util = __webpack_require__(21);

var Color = Class.create({
    Extends: Vector4,
    className: 'Color',
    isColor: true,
    r: {
        get: function get() {
            return this.x;
        },
        set: function set(v) {
            this.x = v;
        }
    },
    g: {
        get: function get() {
            return this.y;
        },
        set: function set(v) {
            this.y = v;
        }
    },
    b: {
        get: function get() {
            return this.z;
        },
        set: function set(v) {
            this.z = v;
        }
    },
    a: {
        get: function get() {
            return this.w;
        },
        set: function set(v) {
            this.w = v;
        }
    },
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
    toRGBArray: function toRGBArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var el = this.elements;
        array[offset] = el[0];
        array[offset + 1] = el[1];
        array[offset + 2] = el[2];
        return array;
    },
    fromUintArray: function fromUintArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        this.elements[0] = array[offset] / 255;
        this.elements[1] = array[offset + 1] / 255;
        this.elements[2] = array[offset + 2] / 255;
        this.elements[3] = array[offset + 3] / 255;
        return this;
    },
    fromHEX: function fromHEX(hex) {
        if (hex[0] === '#') {
            hex = hex.slice(1);
        }
        if (hex.length === 3) {
            hex = hex.replace(/(\w)/g, '$1$1');
        }
        this.elements[0] = parseInt(hex.slice(0, 2), 16) / 255;
        this.elements[1] = parseInt(hex.slice(2, 4), 16) / 255;
        this.elements[2] = parseInt(hex.slice(4, 6), 16) / 255;
        return this;
    },
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

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

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

// Configuration Constants
glMatrix.EPSILON = 0.000001;
glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
glMatrix.RANDOM = Math.random;
glMatrix.ENABLE_SIMD = false;

// Capability detection
glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === Float32Array) && ('SIMD' in this);
glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    glMatrix.ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 * 
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
glMatrix.equals = function(a, b) {
	return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}

module.exports = glMatrix;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mat4 = __webpack_require__(57).mat4;
var Class = __webpack_require__(1);
var Vector3 = __webpack_require__(25);
var Quaternion = __webpack_require__(63);

var tempMatrix4 = void 0;
var tempVector3 = new Vector3();
var tempVector32 = new Vector3();
var tempVector33 = new Vector3();

var Matrix4 = Class.create({
    constructor: function constructor() {
        this.elements = mat4.create();
    },
    copy: function copy(m) {
        mat4.copy(this.elements, m.elements);
        return this;
    },
    clone: function clone() {
        var m = new Matrix4();
        mat4.copy(m.elements, this.elements);
        return m;
    },
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 16; i++) {
            array[offset + i] = elements[i];
        }
        return array;
    },
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 16; i++) {
            elements[i] = array[offset + i];
        }
        return this;
    },
    set: function set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        mat4.set(this.elements, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    },
    identity: function identity() {
        mat4.identity(this.elements);
        return this;
    },
    transpose: function transpose() {
        mat4.transpose(this.elements, this.elements);
        return this;
    },
    invert: function invert(m) {
        mat4.invert(this.elements, m.elements);
        return this;
    },
    adjoint: function adjoint(m) {
        mat4.adjoint(this.elements, m.elements);
        return this;
    },
    determinant: function determinant() {
        return mat4.determinant(this.elements);
    },
    multiply: function multiply(m) {
        this.multiplyMatrices(this, m);
        return this;
    },
    multiplyMatrices: function multiplyMatrices(a, b) {
        mat4.multiply(this.elements, a.elements, b.elements);
        return this;
    },
    premultiply: function premultiply(m) {
        this.multiplyMatrices(m, this);
        return this;
    },
    translate: function translate(v) {
        mat4.translate(this.elements, this.elements, v.elements);
        return this;
    },
    rotate: function rotate(rad, axis) {
        mat4.rotate(this.elements, this.elements, rad, axis);
        return this;
    },
    rotateX: function rotateX(rad) {
        mat4.rotateX(this.elements, this.elements, rad);
        return this;
    },
    rotateY: function rotateY(rad) {
        mat4.rotateY(this.elements, this.elements, rad);
        return this;
    },
    rotateZ: function rotateZ(rad) {
        mat4.rotateZ(this.elements, this.elements, rad);
        return this;
    },
    scale: function scale(v) {
        mat4.scale(this.elements, this.elements, v.elements);
        return this;
    },
    fromTranslation: function fromTranslation(v) {
        mat4.fromTranslation(this.elements, v.elements);
        return this;
    },
    fromRotation: function fromRotation(rad, axis) {
        mat4.fromRotation(this.elements, rad, axis.elements);
        return this;
    },
    fromXRotation: function fromXRotation(rad) {
        mat4.fromXRotation(this.elements, rad);
        return this;
    },
    fromYRotation: function fromYRotation(rad) {
        mat4.fromYRotation(this.elements, rad);
        return this;
    },
    fromZRotation: function fromZRotation(rad) {
        mat4.fromZRotation(this.elements, rad);
        return this;
    },
    fromScaling: function fromScaling(v) {
        mat4.fromScaling(this.elements, v.elements);
        return this;
    },
    fromRotationTranslation: function fromRotationTranslation(q, v) {
        mat4.fromRotationTranslation(this.elements, q.elements, v.elements);
        return this;
    },
    fromRotationTranslationScale: function fromRotationTranslationScale(q, v, s) {
        mat4.fromRotationTranslationScale(this.elements, q.elements, v.elements, s.elements);
        return this;
    },
    fromRotationTranslationScaleOrigin: function fromRotationTranslationScaleOrigin(q, v, s, o) {
        mat4.fromRotationTranslationScaleOrigin(this.elements, q.elements, v.elements, s.elements, o.elements);
        return this;
    },
    fromQuat: function fromQuat(q) {
        mat4.fromQuat(this.elements, q.elements);
        return this;
    },
    frustum: function frustum(out, left, right, bottom, top, near, far) {
        mat4.frustum(this.elements, left, right, bottom, top, near, far);
        return this;
    },
    perspective: function perspective(fovy, aspect, near, far) {
        mat4.perspective(this.elements, fovy, aspect, near, far);
        return this;
    },
    perspectiveFromFieldOfView: function perspectiveFromFieldOfView(out, fov, near, far) {
        mat4.perspectiveFromFieldOfView(this.elements, out, fov, near, far);
        return this;
    },
    ortho: function ortho(left, right, bottom, top, near, far) {
        mat4.ortho(this.elements, left, right, bottom, top, near, far);
        return this;
    },
    lookAt: function lookAt(eye, center, up) {
        if (!eye.isVector3) {
            eye = new Vector3(eye.x, eye.y, eye.z);
        }
        if (!center.isVector3) {
            center = new Vector3(center.x, center.y, center.z);
        }
        var te = this.elements;

        tempVector33.sub(eye, center);
        if (tempVector33.squaredLength() === 0) {
            // eye and target are in the same position
            tempVector33.z = 1;
        }

        tempVector33.normalize();
        tempVector3.cross(up, tempVector33);

        if (tempVector3.squaredLength() === 0) {
            // eye and target are in the same vertical
            tempVector33.z += 0.0001;
            tempVector3.cross(up, tempVector33);
        }

        tempVector3.normalize();
        tempVector32.cross(tempVector33, tempVector3);

        te[0] = tempVector3.x;
        te[1] = tempVector3.y;
        te[2] = tempVector3.z;
        te[4] = tempVector32.x;
        te[5] = tempVector32.y;
        te[6] = tempVector32.z;
        te[8] = tempVector33.x;
        te[9] = tempVector33.y;
        te[10] = tempVector33.z;

        return this;
    },
    getTranslation: function getTranslation() {
        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector3();

        mat4.getTranslation(out.elements, this.elements);
        return out;
    },
    getScaling: function getScaling() {
        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vector3();

        var mat = this.elements;
        var m11 = mat[0],
            m12 = mat[1],
            m13 = mat[2],
            m21 = mat[4],
            m22 = mat[5],
            m23 = mat[6],
            m31 = mat[8],
            m32 = mat[9],
            m33 = mat[10];

        out.x = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
        out.y = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
        out.z = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

        return out;
    },
    getRotation: function getRotation() {
        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Quaternion();

        mat4.getRotation(out.elements, this.elements);
        return out;
    },
    compose: function compose(q, v, s) {
        this.fromRotationTranslationScale(q, v, s);
        return this;
    },
    decompose: function decompose(q, v, s) {
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
        return this;
    }
});

module.exports = Matrix4;

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var EventMixin = __webpack_require__(51);
var Matrix4 = __webpack_require__(35);
var Vector3 = __webpack_require__(25);
var Euler = __webpack_require__(78);
var Quaternion = __webpack_require__(63);
var math = __webpack_require__(13);

var defaultUp = new Vector3(0, 1, 0);
var tempMatrix4 = new Matrix4();

var Node = Class.create({
    isNode: true,
    className: 'Node',
    name: '',
    autoUpdateWorldMatrix: true,
    parent: null,
    Mixes: EventMixin,
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
    _positionDirty: false,
    _scaleDirty: false,
    _rotationDirty: false,
    _matrixDirty: false,
    needCallChildUpdate: true,
    visible: true,
    /**
     * @param  {Object} params
     * @property {String} name
     * @property {Node} parent
     * @property {Array} children
     * @property {Boolean=false} autoUpdateWorldMatrix
     * @property {Matrix4} matrix
     */
    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);
        this.up = defaultUp.clone();
        this.children = [];
        this.worldMatrix = new Matrix4();

        this._matrix = new Matrix4();
        this._position = new Vector3();
        this._scale = new Vector3(1, 1, 1);
        this._euler = new Euler();
        this.quaternion = new Quaternion();
        Object.assign(this, params);
    },
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
    setAnim: function setAnim(anim) {
        this.anim = anim;
        anim.rootNode = this;
    },
    resetSkinedMeshRootNode: function resetSkinedMeshRootNode() {
        var _this = this;

        this.traverse(function (mesh) {
            if (mesh.isSkinedMesh && mesh.jointNames) {
                mesh.rootNode = _this;
            }
        });
    },
    getChildrenNameMap: function getChildrenNameMap() {
        var map = {};
        this.traverse(function (child) {
            map[child.name] = child;
        });
        return map;
    },
    addChild: function addChild(child) {
        if (child.parent) {
            child.removeFromParent();
        }
        child.parent = this;
        this.children.push(child);
    },
    removeChild: function removeChild(child) {
        var index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
            child.parent = null;
        }
    },
    addTo: function addTo(parent) {
        parent.addChild(this);
        return this;
    },
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

        if (this._matrixDirty) {
            this._matrixDirty = false;
            isMatrixDirty = true;
        }

        if (isMatrixDirty) {
            this._matrix.compose(this._quaternion, this._position, this._scale);
        }
    },
    updateTransform: function updateTransform() {
        this._matrix.decompose(this._quaternion, this._position, this._scale);

        var position = this._position;
        var scale = this._scale;

        this._x = position.x;
        this._y = position.y;
        this._z = position.z;

        this._scaleX = scale.x;
        this._scaleY = scale.y;
        this._scaleZ = scale.z;

        this._onQuaternionChange();
        this._positionDirty = this._rotationDirty = this._scaleDirty = this._matrixDirty = false;
    },
    updateMatrixWorld: function updateMatrixWorld(force) {
        this.traverse(function (node) {
            if (node.autoUpdateWorldMatrix || force) {
                if (node.parent) {
                    node.worldMatrix.multiplyMatrices(node.parent.worldMatrix, node.matrix);
                } else {
                    node.worldMatrix.copy(node.matrix);
                }
            }
        });
    },
    getConcatenatedMatrix: function getConcatenatedMatrix(ancestor) {
        var mtx = new Matrix4();

        for (var o = this; o && o !== ancestor; o = o.parent) {
            mtx.multiplyMatrices(o.matrix, mtx);
        }
        return mtx;
    },
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
    getChildrenByFn: function getChildrenByFn(fn) {
        var result = [];
        this.traverse(function (child) {
            if (fn(child)) {
                result.push(child);
            }
        });
        return result;
    },
    getChildByName: function getChildByName(name) {
        return this.getChildByFn(function (child) {
            return child.name === name;
        });
    },
    getChildrenByName: function getChildrenByName(name) {
        return this.getChildrenByFn(function (child) {
            return child.name === name;
        });
    },
    getChildById: function getChildById(id) {
        return this.getChildByFn(function (child) {
            return child.id === id;
        });
    },
    getChildrenByClassName: function getChildrenByClassName(className) {
        return this.getChildrenByFn(function (child) {
            return child.className === className;
        });
    },
    setScale: function setScale(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : y;

        this.scaleX = x;
        this.scaleY = y;
        this.scaleZ = z;
    },
    setPosition: function setPosition(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    },
    setRotation: function setRotation(x, y, z) {
        this.rotationX = x;
        this.rotationY = y;
        this.rotationZ = z;
    },
    lookAt: function lookAt(node) {
        if (this.isCamera) {
            tempMatrix4.lookAt(this, node, this.up);
        } else {
            tempMatrix4.lookAt(node, this, this.up);
        }
        this._quaternion.fromMat4(tempMatrix4);
    },

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
    x: {
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            this._x = value;
            this._positionDirty = true;
        }
    },
    y: {
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            this._y = value;
            this._positionDirty = true;
        }
    },
    z: {
        get: function get() {
            return this._z;
        },
        set: function set(value) {
            this._z = value;
            this._positionDirty = true;
        }
    },
    scaleX: {
        get: function get() {
            return this._scaleX;
        },
        set: function set(value) {
            this._scaleX = value;
            this._scaleDirty = true;
        }
    },
    scaleY: {
        get: function get() {
            return this._scaleY;
        },
        set: function set(value) {
            this._scaleY = value;
            this._scaleDirty = true;
        }
    },
    scaleZ: {
        get: function get() {
            return this._scaleZ;
        },
        set: function set(value) {
            this._scaleZ = value;
            this._scaleDirty = true;
        }
    },
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

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var util = __webpack_require__(21);
var Vector2 = __webpack_require__(184);
var Vector3 = __webpack_require__(25);

var _require = __webpack_require__(11),
    TRIANGLES = _require.TRIANGLES,
    LINES = _require.LINES;

var tempVector31 = new Vector3();
var tempVector32 = new Vector3();
var tempVector33 = new Vector3();

var tempVector21 = new Vector2();
var tempVector22 = new Vector2();
var tempVector23 = new Vector2();

var Geometry = Class.create({
    isGeometry: true,
    className: 'Geometry',
    vertices: null,
    uvs: null,
    indices: null,
    skinWeights: null,
    skinIndices: null,
    mode: TRIANGLES,
    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);

        Object.assign(this, params);

        this.currentVerticesCount = 0;
        this.currentIndicesCount = 0;
    },

    _needUpdateNormals: false,
    normals: {
        get: function get() {
            if (this._needUpdateNormals || !this._normals) {
                this.updateNormals();
            }
            return this._normals;
        },
        set: function set(data) {
            this._normals = data;
        }
    },
    updateNormals: function updateNormals() {
        this._normals = new Float32Array(this.vertices.length);
        var idx = 0;
        for (var i = 0; i < this.indices.length; i += 3) {
            idx = this.indices[i];
            tempVector31.fromArray(this.vertices, idx * 3);
            idx = this.indices[i + 1];
            tempVector32.fromArray(this.vertices, idx * 3);
            idx = this.indices[i + 2];
            tempVector33.fromArray(this.vertices, idx * 3);

            tempVector32.sub(tempVector31);
            tempVector33.sub(tempVector31);
            tempVector32.cross(tempVector33);

            for (var j = 0; j < 3; j++) {
                this._normals[this.indices[i + j] * 3] = tempVector32.x;
                this._normals[this.indices[i + j] * 3 + 1] = tempVector32.y;
                this._normals[this.indices[i + j] * 3 + 2] = tempVector32.z;
            }
        }
        this._needUpdateNormals = false;
    },

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
        this._tangents = new Float32Array(this.vertices.length);
        var idx = 0;
        for (var i = 0; i < this.indices.length; i += 3) {
            idx = this.indices[i];
            tempVector31.fromArray(this.vertices, idx * 3);
            tempVector21.fromArray(this.uvs, idx * 2);
            idx = this.indices[i + 1];
            tempVector32.fromArray(this.vertices, idx * 3);
            tempVector22.fromArray(this.uvs, idx * 2);
            idx = this.indices[i + 2];
            tempVector33.fromArray(this.vertices, idx * 3);
            tempVector23.fromArray(this.uvs, idx * 2);

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

            for (var j = 0; j < 3; j++) {
                this._tangents[this.indices[i + j] * 3] = tempVector31.x;
                this._tangents[this.indices[i + j] * 3 + 1] = tempVector31.y;
                this._tangents[this.indices[i + j] * 3 + 2] = tempVector31.z;
            }
        }
    },
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
        for (var i = 0; i < this.indices.length; i += 3) {
            newIndices[i * 2] = this.indices[i]; // A
            newIndices[i * 2 + 1] = this.indices[i + 1]; // B
            newIndices[i * 2 + 2] = this.indices[i + 1]; // B
            newIndices[i * 2 + 3] = this.indices[i + 2]; // C
            newIndices[i * 2 + 4] = this.indices[i + 2]; // C
            newIndices[i * 2 + 5] = this.indices[i]; // A
        }
        this.indices = newIndices;
        this.mode = LINES;
    },
    ensureData: function ensureData(name, total, TypedArray) {
        if (!this[name] || total > this[name].length) {
            var newData = new TypedArray(total);
            if (this[name]) {
                newData.set(this[name]);
            }
            this[name] = newData;
        }
    },
    addPoints: function addPoints() {
        var _this = this;

        for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
            points[_key] = arguments[_key];
        }

        var total = (this.currentVerticesCount + points.length) * 3;
        this.ensureData('vertices', total, Float32Array);

        points.forEach(function (point) {
            var start = _this.currentVerticesCount++ * 3;
            _this.vertices[start] = point[0];
            _this.vertices[start + 1] = point[1];
            _this.vertices[start + 2] = point[2];
        });
        return this.currentVerticesCount - points.length;
    },
    addIndices: function addIndices() {
        var _this2 = this;

        for (var _len2 = arguments.length, indices = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            indices[_key2] = arguments[_key2];
        }

        var total = this.currentIndicesCount + indices.length;
        this.ensureData('indices', total, Uint16Array);
        indices.forEach(function (idx) {
            _this2.indices[_this2.currentIndicesCount++] = idx;
        });

        this._needUpdateNormals = true;
    },
    addLine: function addLine(p1, p2) {
        var start = this.addPoints(p1, p2);
        this.addIndices(start, start + 1);
    },
    addFace: function addFace(p1, p2, p3) {
        var start = this.addPoints(p1, p2, p3);
        this.addIndices(start, start + 1, start + 2);
    },
    addRect: function addRect(p1, p2, p3, p4) {
        var start = this.addPoints(p1, p2, p3, p4);
        // 0 1 2 & 0 2 3 make a rect
        this.addIndices(start, start + 1, start + 2, start, start + 2, start + 3);
    },
    setVertexUV: function setVertexUV(start, uvs) {
        this.ensureData('uvs', this.vertices.length / 3 * 2, Float32Array);
        for (var i = 0; i < uvs.length; i++) {
            this.uvs[start + i * 2] = uvs[i][0];
            this.uvs[start + i * 2 + 1] = uvs[i][1];
        }
    },
    setFaceUV: function setFaceUV(start, p1, p2, p3) {
        this.setVertexUV(start, [p1, p2, p3]);
    },
    setRectUV: function setRectUV(start, p1, p2, p3, p4) {
        this.setVertexUV(start, [p1, p2, p3, p4]);
    },
    getBounds: function getBounds(worldMatrix, bounds) {
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
        var vertices = this.vertices;
        for (var i = 0; i < vertices.length; i += 3) {
            tempVector31.fromArray(vertices, i);
            tempVector31.transformMat4(worldMatrix);
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
        var indices = this.indices;
        var indicesLen = indices.length;
        var vertices = new Float32Array(indicesLen * verticesItemLen);
        var uvs = this.uvs ? new Float32Array(indicesLen * 2) : null;
        var normals = this.normals ? new Float32Array(indicesLen * 3) : null;
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
        this.vertices = vertices;
        this.uvs = uvs;
        this.normals = normals;
        this.skinIndices = skinIndices;
        this.skinWeights = skinWeights;
    },
    clone: function clone() {
        var geometry = new this.constructor({
            mode: this.mode,
            normals: this.normals,
            vertices: this.vertices,
            uvs: this.uvs,
            indices: this.indices,
            skinWeights: this.skinWeights,
            skinIndices: this.skinIndices
        });

        return geometry;
    }
});

module.exports = Geometry;

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Material = __webpack_require__(119);
var Color = __webpack_require__(29);

var BasicMaterial = Class.create({
    Extends: Material,
    isBasicMaterial: true,
    className: 'BasicMaterial',
    lightType: 'PHONG',
    diffuse: null,
    ambient: null,
    specular: null,
    emission: null,
    skyboxMap: null,
    reflectivity: 0,
    refractRatio: 0,
    refractivity: 0,
    shininess: 32,
    usedUniformVectors: 11,
    jointCount: 0,
    transparency: 1,
    constructor: function constructor(params) {
        this.diffuse = new Color(.5, .5, .5);
        this.specular = new Color(1, 1, 1);
        this.emission = new Color(0, 0, 0);
        BasicMaterial.superclass.constructor.call(this, params);

        Object.assign(this.uniforms, {
            u_normalMatrix: {
                semantic: 'MODELVIEWINVERSETRANSPOSE',
                supportInstanced: true,
                isDependOther: true
            },
            u_modelViewMatrix: {
                semantic: 'MODELVIEW',
                supportInstanced: true,
                isDependOther: true
            },
            u_modelViewProjectionMatrix: {
                semantic: 'MODELVIEWPROJECTION',
                supportInstanced: true,
                isDependOther: true
            },
            u_diffuse: {
                semantic: 'DIFFUSE'
            },
            u_specular: {
                semantic: 'SPECULAR'
            },
            u_ambient: {
                semantic: 'AMBIENT'
            },
            u_emission: {
                semantic: 'EMISSION'
            },
            u_normalMap: {
                semantic: 'NORMALMAP'
            },
            u_shininess: {
                semantic: 'SHININESS'
            },
            u_reflectivity: {
                semantic: 'REFLECTIVITY'
            },
            u_refractRatio: {
                semantic: 'REFRACTRATIO'
            },
            u_refractivity: {
                semantic: 'REFRACTIVITY'
            },
            u_transparency: {
                semantic: 'TRANSPARENCY'
            },
            u_skyboxMap: {
                semantic: 'SKYBOXMAP'
            },
            u_ambientLightsColor: {
                semantic: 'AMBIENTLIGHTSCOLOR'
            },
            u_directionalLightsColor: {
                semantic: 'DIRECTIONALLIGHTSCOLOR'
            },
            u_directionalLightsInfo: {
                semantic: 'DIRECTIONALLIGHTSINFO'
            },
            u_pointLightsPos: {
                semantic: 'POINTLIGHTSPOS'
            },
            u_pointLightsColor: {
                semantic: 'POINTLIGHTSCOLOR'
            },
            u_pointLightsInfo: {
                semantic: 'POINTLIGHTSINFO'
            },
            u_jointMat: {
                semantic: 'JOINTMATRIX',
                isDependOther: true
            },
            u_jointMatTexture: {
                semantic: 'JOINTMATRIXTEXTURE',
                isDependOther: true
            },
            u_jointMatTextureSize: {
                semantic: 'JOINTMATRIXTEXTURESIZE',
                isDependOther: true
            },
            u_fogColor: {
                semantic: 'FOGCOLOR'
            },
            u_fogInfo: {
                semantic: 'FOGINFO'
            }
        });

        Object.assign(this.attributes, {
            a_position: {
                semantic: 'POSITION'
            },
            a_normal: {
                semantic: 'NORMAL'
            },
            a_tangent: {
                semantic: 'TANGENT'
            },
            a_texcoord0: {
                semantic: 'TEXCOORD_0'
            },
            a_skinIndices: {
                semantic: 'SKININDICES'
            },
            a_skinWeights: {
                semantic: 'SKINWEIGHTS'
            }
        });
    }
});

module.exports = BasicMaterial;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(377);

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.3.2
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
// END HEADER

exports.glMatrix = __webpack_require__(34);
exports.mat2 = __webpack_require__(372);
exports.mat2d = __webpack_require__(373);
exports.mat3 = __webpack_require__(154);
exports.mat4 = __webpack_require__(374);
exports.quat = __webpack_require__(375);
exports.vec2 = __webpack_require__(376);
exports.vec3 = __webpack_require__(155);
exports.vec4 = __webpack_require__(156);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Node = __webpack_require__(39);

var _require = __webpack_require__(11),
    TRIANGLES = _require.TRIANGLES;

var Mesh = Class.create({
    Extends: Node,
    isMesh: true,
    className: 'Mesh',
    geometry: null,
    material: null,
    drawMode: TRIANGLES,
    name: '',
    useInstanced: true,
    /**
     * @param  {Object} params [description]
     * @property {Geometry} params.geometry
     * @property {Material} params.material
     * @property {Int} params.drawMode
     */
    constructor: function constructor(params) {
        Mesh.superclass.constructor.call(this, params);
    },
    clone: function clone(isChild) {
        var node = Node.prototype.clone.call(this, isChild);
        Object.assign(node, {
            geometry: this.geometry,
            material: this.material
        });
        return node;
    }
});

module.exports = Mesh;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var EventMixin = __webpack_require__(51);
var Cache = __webpack_require__(181);
var util = __webpack_require__(21);

var cache = new Cache();

var BasicLoader = Class.create({
    Mixes: EventMixin,
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
    loadImg: function loadImg(url, crossOrigin) {
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
                var err = new Error('Image load failed for ' + url);
                cache.update(url, Cache.FAILED, err);
                reject(err);
            };
            img.onabort = img.onerror;
            if (crossOrigin) {
                img.crossOrigin = 'anonymous';
            }
            img.src = url;
        });
    },
    loadRes: function loadRes(url, type) {
        var _this = this;

        var file = cache.get(url);
        if (file) {
            return cache.wait(file);
        }

        cache.update(url, Cache.PENDING);

        this.fire('beforeload');

        return this.request({ url: url, type: type }).then(function (data) {
            _this.fire('loaded');
            cache.update(url, Cache.LOADED, data);
            return data;
        }, function (err) {
            _this.fire('failed', err);
            cache.update(url, Cache.FAILED);
            throw new Error('Resource load failed for ' + url + ', ' + err);
        });
    },
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
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix3 = __webpack_require__(81);
var Vector3 = __webpack_require__(25);
var Class = __webpack_require__(1);
var EventMixin = __webpack_require__(51);

var _require = __webpack_require__(57),
    quat = _require.quat;

var tempMat3 = new Matrix3();

var Quaternion = Class.create({
    Mixes: EventMixin,
    className: 'Quaternion',
    isQuaternion: true,
    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
            this.fire('change');
        }
    },
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
            this.fire('change');
        }
    },
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
            this.fire('change');
        }
    },
    w: {
        get: function get() {
            return this.elements[3];
        },
        set: function set(value) {
            this.elements[3] = value;
            this.fire('change');
        }
    },
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        this.elements = quat.fromValues(x, y, z, w);
    },
    set: function set(x, y, z, w, dontFireEvent) {
        quat.set(this.elements, x, y, z, w);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    clone: function clone() {
        var el = this.elements;
        return new this.constructor(el[0], el[1], el[2], el[3]);
    },
    copy: function copy(q, dontFireEvent) {
        quat.copy(this.elements, q.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    identity: function identity(dontFireEvent) {
        quat.identity(this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    setAxisAngle: function setAxisAngle(axis, rad, dontFireEvent) {
        quat.setAxisAngle(this.elements, axis, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    getAxisAngle: function getAxisAngle(axis) {
        axis = axis || new Vector3();
        return quat.getAxisAngle(axis.elements, this.elements);
    },
    add: function add(q, dontFireEvent) {
        quat.add(this.elements, this.elements, q.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    multiply: function multiply(q, dontFireEvent) {
        quat.multiply(this.elements, this.elements, q.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    premultiply: function premultiply(q, dontFireEvent) {
        quat.multiply(this.elements, q.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    scale: function scale(_scale, dontFireEvent) {
        quat.scale(this.elements, this.elements, _scale);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    rotateX: function rotateX(rad, dontFireEvent) {
        quat.rotateX(this.elements, this.elements, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    rotateY: function rotateY(rad, dontFireEvent) {
        quat.rotateY(this.elements, this.elements, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    rotateZ: function rotateZ(rad, dontFireEvent) {
        quat.rotateZ(this.elements, this.elements, rad);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    calculateW: function calculateW(dontFireEvent) {
        quat.calculateW(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    dot: function dot(q) {
        return quat.dot(this.elements, q.elements);
    },
    lerp: function lerp(q, t, dontFireEvent) {
        quat.lerp(this.elements, this.elements, q.elements, t);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    slerp: function slerp(q, t, dontFireEvent) {
        quat.slerp(this.elements, this.elements, q.elements, t);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    sqlerp: function sqlerp(qb, qc, qd, t, dontFireEvent) {
        quat.sqlerp(this.elements, qb.elements, qc.elements, qd.elements, t);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    invert: function invert(dontFireEvent) {
        quat.invert(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    conjugate: function conjugate(dontFireEvent) {
        quat.conjugate(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    length: function length() {
        return quat.length(this.elements);
    },
    squaredLength: function squaredLength() {
        return quat.squaredLength(this.elements);
    },
    normalize: function normalize(dontFireEvent) {
        quat.normalize(this.elements, this.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    fromMat3: function fromMat3(mat, dontFireEvent) {
        quat.fromMat3(this.elements, mat.elements);
        if (!dontFireEvent) {
            this.fire('change');
        }
        return this;
    },
    fromMat4: function fromMat4(mat, dontFireEvent) {
        tempMat3.fromMat4(mat);
        this.fromMat3(tempMat3, dontFireEvent);
        return this;
    },
    str: function str() {
        return quat.str(this.elements);
    },
    exactEquals: function exactEquals(qb) {
        return quat.exactEquals(this.elements, qb.elements);
    },
    equals: function equals(qb) {
        return quat.equals(this.elements, qb.elements);
    },
    fromEuler: function fromEuler(euler, dontFireEvent) {
        // http://www.mathworks.com/matlabcentral/fileexchange/
        //  20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
        //  content/SpinCalc.m

        var c1 = Math.cos(euler.x / 2);
        var c2 = Math.cos(euler.y / 2);
        var c3 = Math.cos(euler.z / 2);
        var s1 = Math.sin(euler.x / 2);
        var s2 = Math.sin(euler.y / 2);
        var s3 = Math.sin(euler.z / 2);

        var el = this.elements;

        var order = euler.order;

        if (order === 'XYZ') {
            el[0] = s1 * c2 * c3 + c1 * s2 * s3;
            el[1] = c1 * s2 * c3 - s1 * c2 * s3;
            el[2] = c1 * c2 * s3 + s1 * s2 * c3;
            el[3] = c1 * c2 * c3 - s1 * s2 * s3;
        } else if (order === 'YXZ') {
            el[0] = s1 * c2 * c3 + c1 * s2 * s3;
            el[1] = c1 * s2 * c3 - s1 * c2 * s3;
            el[2] = c1 * c2 * s3 - s1 * s2 * c3;
            el[3] = c1 * c2 * c3 + s1 * s2 * s3;
        } else if (order === 'ZXY') {
            el[0] = s1 * c2 * c3 - c1 * s2 * s3;
            el[1] = c1 * s2 * c3 + s1 * c2 * s3;
            el[2] = c1 * c2 * s3 + s1 * s2 * c3;
            el[3] = c1 * c2 * c3 - s1 * s2 * s3;
        } else if (order === 'ZYX') {
            el[0] = s1 * c2 * c3 - c1 * s2 * s3;
            el[1] = c1 * s2 * c3 + s1 * c2 * s3;
            el[2] = c1 * c2 * s3 - s1 * s2 * c3;
            el[3] = c1 * c2 * c3 + s1 * s2 * s3;
        } else if (order === 'YZX') {
            el[0] = s1 * c2 * c3 + c1 * s2 * s3;
            el[1] = c1 * s2 * c3 + s1 * c2 * s3;
            el[2] = c1 * c2 * s3 - s1 * s2 * c3;
            el[3] = c1 * c2 * c3 - s1 * s2 * s3;
        } else if (order === 'XZY') {
            el[0] = s1 * c2 * c3 - c1 * s2 * s3;
            el[1] = c1 * s2 * c3 - s1 * c2 * s3;
            el[2] = c1 * c2 * s3 + s1 * s2 * c3;
            el[3] = c1 * c2 * c3 + s1 * s2 * s3;
        }

        if (!dontFireEvent) {
            this.fire('change');
        }

        return this;
    },
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
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var el = this.elements;

        array[offset] = el[0];
        array[offset + 1] = el[1];
        array[offset + 2] = el[2];
        array[offset + 3] = el[3];

        return array;
    }
});

module.exports = Quaternion;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var capabilities = __webpack_require__(82);

var _require = __webpack_require__(11),
    TEXTURE_2D = _require.TEXTURE_2D,
    RGBA = _require.RGBA,
    LINEAR = _require.LINEAR,
    NEAREST = _require.NEAREST,
    REPEAT = _require.REPEAT,
    CLAMP_TO_EDGE = _require.CLAMP_TO_EDGE,
    UNSIGNED_BYTE = _require.UNSIGNED_BYTE;

var Texture = Class.create({
    className: 'Texture',
    isTexture: true,

    image: null,
    target: TEXTURE_2D,
    level: 0,
    internalFormat: RGBA,
    format: RGBA,
    type: UNSIGNED_BYTE,
    width: 0,
    height: 0,

    magFilter: LINEAR,
    minFilter: LINEAR,
    wrapS: REPEAT,
    wrapT: REPEAT,

    mapping: null,
    anisotropy: null,
    encoding: null,
    name: '',
    generateMipmaps: false,
    premultiplyAlpha: false,
    flipY: false,

    needUpdate: true,
    autoUpdate: false,
    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);
        Object.assign(this, params);
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
        var canvas = document.createElement('canvas');
        canvas.width = newW;
        canvas.height = newH;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, newW, newH);
        console.warn('image is not power of two (' + img.width + 'x' + img.height + '). Resized to ' + canvas.width + 'x' + canvas.height, img.src);
        return canvas;
    },
    _updateTexture: function _updateTexture(state) {
        state.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
    },
    updateTexture: function updateTexture(state) {
        if (this.needUpdate || this.autoUpdate) {
            state.activeTexture(state.gl.TEXTURE0 + capabilities.MAX_TEXTURE_INDEX);
            state.bindTexture(this.target, this.tex);
            this._updateTexture(state);
            this.needUpdate = false;
        }
    },
    getGLTexture: function getGLTexture(state) {
        var gl = state.gl;
        if (this.tex) {
            this.updateTexture(state);
            return this.tex;
        }
        var useMipmap = this.minFilter !== LINEAR && this.minFilter !== NEAREST;
        var useRepeat = this.wrapS !== CLAMP_TO_EDGE || this.wrapT !== CLAMP_TO_EDGE;
        if (useRepeat || useMipmap) {
            this.image = this.resizeImgToPowerOfTwo(this.image);
        }
        this.tex = gl.createTexture();
        this.needUpdate = true;
        this.updateTexture(state);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!this.flipY);
        gl.texParameterf(this.target, gl.TEXTURE_MAG_FILTER, this.magFilter);
        gl.texParameterf(this.target, gl.TEXTURE_MIN_FILTER, this.minFilter);
        gl.texParameterf(this.target, gl.TEXTURE_WRAP_S, this.wrapS);
        gl.texParameterf(this.target, gl.TEXTURE_WRAP_T, this.wrapT);

        if (useMipmap) {
            gl.generateMipmap(this.target);
        }
        return this.tex;
    },
    destroy: function destroy(gl) {
        if (this.tex) {
            gl.deleteTexture(this.tex);
            delete this.tex;
        }
    }
});

module.exports = Texture;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extensions = {
    instanced: null,
    vao: null,
    texFloat: null,
    init: function init(gl) {
        this.gl = gl;
        var neededExt = {
            instanced: 'ANGLE_instanced_arrays',
            vao: 'OES_vertex_array_object',
            texFloat: 'OES_texture_float'
        };

        for (var name in neededExt) {
            var extName = neededExt[name];
            this[name] = this.get(extName);
        }
    },
    get: function get(name) {
        var gl = this.gl;
        var ext = this[name];
        if (ext === undefined) {
            ext = gl.getExtension(name) || gl.getExtension('WEBKIT_' + name) || gl.getExtension('MOZ_' + name) || null;
            this[name] = ext;
        }
        return ext;
    }
};

module.exports = extensions;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);

var Cache = Class.create({
    constructor: function constructor() {
        this._cache = {};
    },
    get: function get(id) {
        return this._cache[id];
    },
    add: function add(id, obj) {
        this._cache[id] = obj;
    },
    remove: function remove(id) {
        this._cache[id] = null;
    },
    removeAll: function removeAll() {
        this._cache = {};
    }
});

module.exports = Cache;

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var Matrix4 = __webpack_require__(35);

var tempMatrix = new Matrix4();

var Euler = Class.create({
    className: 'Euler',
    isEuler: true,
    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    },
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
        }
    },
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'XYZ';

        this.elements = [x, y, z];
        this.order = order;
    },
    set: function set(x, y, z) {
        this.elements[0] = x;
        this.elements[1] = y;
        this.elements[2] = z;
    },
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        this.elements[0] = array[offset];
        this.elements[0 + 1] = array[offset + 1];
        this.elements[0 + 2] = array[offset + 2];
        return this;
    },
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        array[offset] = this.elements[0];
        array[offset + 1] = this.elements[0 + 1];
        array[offset + 2] = this.elements[0 + 2];
        return array;
    },
    fromMat4: function fromMat4(mat, order) {
        var clamp = math.clamp;
        var te = mat.elements;
        var m11 = te[0];
        var m12 = te[4];
        var m13 = te[8];
        var m21 = te[1];
        var m22 = te[5];
        var m23 = te[9];
        var m31 = te[2];
        var m32 = te[6];
        var m33 = te[10];

        order = order || this.order;

        if (order === 'XYZ') {
            this.y = Math.asin(clamp(m13, -1, 1));
            if (Math.abs(m13) < 0.99999) {
                this.x = Math.atan2(-m23, m33);
                this.z = Math.atan2(-m12, m11);
            } else {
                this.x = Math.atan2(m32, m22);
                this.z = 0;
            }
        } else if (order === 'YXZ') {
            this.x = Math.asin(-clamp(m23, -1, 1));
            if (Math.abs(m23) < 0.99999) {
                this.y = Math.atan2(m13, m33);
                this.z = Math.atan2(m21, m22);
            } else {
                this.y = Math.atan2(-m31, m11);
                this.z = 0;
            }
        } else if (order === 'ZXY') {
            this.x = Math.asin(clamp(m32, -1, 1));
            if (Math.abs(m32) < 0.99999) {
                this.y = Math.atan2(-m31, m33);
                this.z = Math.atan2(-m12, m22);
            } else {
                this.y = 0;
                this.z = Math.atan2(m21, m11);
            }
        } else if (order === 'ZYX') {
            this.y = Math.asin(-clamp(m31, -1, 1));
            if (Math.abs(m31) < 0.99999) {
                this.x = Math.atan2(m32, m33);
                this.z = Math.atan2(m21, m11);
            } else {
                this.x = 0;
                this.z = Math.atan2(-m12, m22);
            }
        } else if (order === 'YZX') {
            this.z = Math.asin(clamp(m21, -1, 1));
            if (Math.abs(m21) < 0.99999) {
                this.x = Math.atan2(-m23, m22);
                this.y = Math.atan2(-m31, m11);
            } else {
                this.x = 0;
                this.y = Math.atan2(m13, m33);
            }
        } else if (order === 'XZY') {
            this.z = Math.asin(-clamp(m12, -1, 1));
            if (Math.abs(m12) < 0.99999) {
                this.x = Math.atan2(m32, m22);
                this.y = Math.atan2(m13, m11);
            } else {
                this.x = Math.atan2(-m23, m33);
                this.y = 0;
            }
        } else {
            console.warn('Hilo3d.Euler: .fromMat4() given unsupported order: ' + order);
        }

        this.order = order;
        return this;
    },
    fromQuat: function fromQuat(quat, order) {
        tempMatrix.fromQuat(quat);
        return this.fromMat4(tempMatrix, order);
    }
});

module.exports = Euler;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var Texture = __webpack_require__(64);
var util = __webpack_require__(21);

var _require = __webpack_require__(11),
    TEXTURE_2D = _require.TEXTURE_2D,
    RGBA = _require.RGBA,
    NEAREST = _require.NEAREST,
    CLAMP_TO_EDGE = _require.CLAMP_TO_EDGE,
    FLOAT = _require.FLOAT;

var DataTexture = Class.create({
    Extends: Texture,
    isDataTexture: true,
    className: 'DataTexture',

    target: TEXTURE_2D,
    internalFormat: RGBA,
    format: RGBA,
    type: FLOAT,

    magFilter: NEAREST,
    minFilter: NEAREST,
    wrapS: CLAMP_TO_EDGE,
    wrapT: CLAMP_TO_EDGE,

    resetSize: function resetSize(dataLen) {
        var pixelCount = math.nextPowerOfTwo(dataLen / 4);
        var n = Math.max(Math.log2(pixelCount), 4);
        var w = Math.floor(n / 2);
        var h = n - w;
        this.width = Math.pow(2, w);
        this.height = Math.pow(2, h);
        this.DataClass = util.getTypedArrayClass(this.type);
    },


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

    _updateTexture: function _updateTexture(state) {
        state.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
    },
    constructor: function constructor(params) {
        DataTexture.superclass.constructor.call(this, params);
    }
});

module.exports = DataTexture;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Node = __webpack_require__(39);
var Color = __webpack_require__(29);

var Light = Class.create({
    isLight: true,
    className: 'Light',
    Extends: Node,
    constructor: function constructor(params) {
        this.color = new Color(1, 1, 1);
        Light.superclass.constructor.call(this, params);
    }
});

module.exports = Light;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mat3 = __webpack_require__(57).mat3;
var Class = __webpack_require__(1);

var Matrix3 = Class.create({
    constructor: function constructor() {
        this.elements = mat3.create();
    },
    copy: function copy(m) {
        mat3.copy(this.elements, m.elements);
        return this;
    },
    clone: function clone() {
        var m = new Matrix3();
        mat3.copy(m.elements, this.elements);
        return m;
    },
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 9; i++) {
            array[offset + i] = elements[i];
        }
        return array;
    },
    fromArray: function fromArray(array) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        for (var i = 0; i < 9; i++) {
            elements[i] = array[offset + i];
        }
        return this;
    },
    set: function set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        mat3.set(this.elements, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    },
    identity: function identity() {
        mat3.identity(this.elements);
        return this;
    },
    transpose: function transpose() {
        mat3.transpose(this.elements, this.elements);
        return this;
    },
    invert: function invert(m) {
        mat3.invert(this.elements, m.elements);
        return this;
    },
    adjoint: function adjoint(m) {
        mat3.adjoint(this.elements, m);
        return this;
    },
    determinant: function determinant() {
        return mat3.determinant(this.elements);
    },
    multiplyMatrices: function multiplyMatrices(a, b) {
        mat3.multiply(this.elements, a.elements, b.elements);
        return this;
    },
    multiply: function multiply(m) {
        this.multiplyMatrices(this, m);
        return this;
    },
    premultiply: function premultiply(m) {
        this.multiplyMatrices(m, this);
        return this;
    },
    translate: function translate(v) {
        mat3.translate(this.elements, this.elements, v.elements);
        return this;
    },
    rotate: function rotate(rad) {
        mat3.rotate(this.elements, this.elements, rad);
        return this;
    },
    scale: function scale(v) {
        mat3.scale(this.elements, this.elements, v.elements);
        return this;
    },
    fromTranslation: function fromTranslation(v) {
        mat3.fromTranslation(this.elements, v);
        return this;
    },
    fromRotation: function fromRotation(rad) {
        mat3.fromRotation(this.elements, rad);
        return this;
    },
    fromScaling: function fromScaling(v) {
        mat3.fromScaling(this.elements, v);
        return this;
    },
    fromQuat: function fromQuat(q) {
        mat3.fromQuat(this.elements, q.elements);
        return this;
    },
    normalFromMat4: function normalFromMat4(m) {
        mat3.normalFromMat4(this.elements, m.elements);
        return this;
    },
    fromMat4: function fromMat4(m) {
        mat3.fromMat4(this.elements, m.elements);
        return this;
    }
});

module.exports = Matrix3;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var capabilities = {
    init: function init(gl) {
        var _this = this;

        this.gl = gl;
        var arr = ['MAX_RENDERBUFFER_SIZE', 'MAX_COMBINED_TEXTURE_IMAGE_UNITS', 'MAX_CUBE_MAP_TEXTURE_SIZE', 'MAX_FRAGMENT_UNIFORM_VECTORS', 'MAX_TEXTURE_IMAGE_UNITS', 'MAX_TEXTURE_SIZE', 'MAX_VARYING_VECTORS', 'MAX_VERTEX_ATTRIBS', 'MAX_VERTEX_TEXTURE_IMAGE_UNITS', 'MAX_VERTEX_UNIFORM_VECTORS', 'MAX_COMBINED_TEXTURE_IMAGE_UNITS'];

        arr.forEach(function (name) {
            _this.get(name);
        });

        this.MAX_TEXTURE_INDEX = this.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
    },
    get: function get(name) {
        var gl = this.gl;
        var value = this[name];
        if (value === undefined) {
            value = this[name] = gl.getParameter(gl[name]);
        }

        return value;
    }
};

module.exports = capabilities;

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
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
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports) {

/**
 * Hilo 1.0.4 for commonjs
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Class = __webpack_require__(1);
var math = __webpack_require__(13);

var Animation = Class.create({
    className: 'Animation',
    isAnimation: true,
    paused: false,
    currentLoopCount: 0,
    loop: Infinity,
    currentTime: 0,
    timeScale: 1,
    startTime: 0,
    endTime: 0,
    totalTime: 0,
    _rootNode: null,
    nodeNameMap: null,
    Statics: {
        _anims: [],
        tick: function tick(dt) {
            this._anims.forEach(function (anim) {
                return anim.tick(dt);
            });
        }
    },
    rootNode: {
        get: function get() {
            return this._rootNode;
        },
        set: function set(value) {
            this._rootNode = value;
            this.initNodeNameMap();
        }
    },
    constructor: function constructor(parmas) {
        this.id = math.generateUUID(this.className);
        this.animStatesList = [];
        this.clips = {};
        Object.assign(this, parmas);
        this.initTotalTime();
    },
    addClip: function addClip(name, start, end) {
        this.clips[name] = {
            start: start,
            end: end
        };
    },
    removeClip: function removeClip(name) {
        this.clips[name] = null;
    },
    initTotalTime: function initTotalTime() {
        var totalTime = 0;
        this.animStatesList.forEach(function (animStates) {
            totalTime = Math.max.apply(Math, [totalTime].concat(_toConsumableArray(animStates.keyTime)));
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
    stop: function stop() {
        this.paused = true;
        var anims = Animation._anims;
        var index = anims.indexOf(this);
        if (index !== -1) {
            anims.splice(index, 1);
        }
    },
    pause: function pause() {
        this.paused = true;
    },
    resume: function resume() {
        this.paused = false;
    },
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var Vector3 = __webpack_require__(25);
var Quaternion = __webpack_require__(63);
var Euler = __webpack_require__(78);
var util = __webpack_require__(21);

var tempVector31 = new Vector3();
var tempVector32 = new Vector3();
var tempQuat1 = new Quaternion();
var tempQuat2 = new Quaternion();
var tempEuler = new Euler();
tempEuler.order = 'ZYX';

function ascCompare(a, b) {
    return a - b;
}

var AnimationStates = Class.create({
    className: 'AnimationStates',
    Statics: {
        StateType: {
            TRANSLATE: 'Translation',
            POSITION: 'Translation',
            TRANSLATION: 'Translation',
            SCALE: 'Scale',
            ROTATE: 'Rotation',
            ROTATION: 'Rotation',
            QUATERNION: 'Quaternion'
        },
        getType: function getType(name) {
            name = String(name).toUpperCase();
            return AnimationStates.StateType[name];
        }
    },
    nodeName: '',
    type: '', // StateType
    constructor: function constructor(parmas) {
        this.id = math.generateUUID(this.className);
        this.keyTime = [];
        this.states = [];

        Object.assign(this, parmas);
    },
    findIndexByTime: function findIndexByTime(time) {
        return util.getIndexFromSortedArray(this.keyTime, time, ascCompare);
    },
    getState: function getState(time) {
        var _findIndexByTime = this.findIndexByTime(time),
            _findIndexByTime2 = _slicedToArray(_findIndexByTime, 2),
            index1 = _findIndexByTime2[0],
            index2 = _findIndexByTime2[1];

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
                return tempQuat1.toArray();
            }
            return state1;
        }

        var ratio = (time - time1) / (time2 - time1);

        if (this.type === AnimationStates.StateType.ROTATION) {
            tempQuat1.fromEuler(tempEuler.fromArray(state1));
            tempQuat2.fromEuler(tempEuler.fromArray(state2));
            tempQuat1.slerp(tempQuat2, ratio);
            return tempQuat1.toArray();
        }

        if (this.type === AnimationStates.StateType.QUATERNION) {
            tempQuat1.fromArray(state1);
            tempQuat2.fromArray(state2);
            tempQuat1.slerp(tempQuat2, ratio);
            return tempQuat1.toArray();
        }

        tempVector31.fromArray(state1);
        tempVector32.fromArray(state2);
        tempVector31.lerp(tempVector32, ratio);
        return tempVector31.toArray();
    },
    updateNodeTranslation: function updateNodeTranslation(node, value) {
        node.x = value[0];
        node.y = value[1];
        node.z = value[2];
    },
    updateNodeScale: function updateNodeScale(node, value) {
        node.scaleX = value[0];
        node.scaleY = value[1];
        node.scaleZ = value[2];
    },
    updateNodeQuaternion: function updateNodeQuaternion(node, value) {
        node.quaternion.fromArray(value);
    },
    updateNodeState: function updateNodeState(time, node) {
        if (!node) {
            return;
        }
        var type = this.type;
        if (type === AnimationStates.StateType.ROTATION) {
            type = AnimationStates.StateType.QUATERNION;
        }
        var state = this.getState(time);
        this['updateNode' + type](node, state);
    },
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var Camera = __webpack_require__(118);

var PerspectiveCamera = Class.create({
    Extends: Camera,
    isPerspectiveCamera: true,
    className: 'PerspectiveCamera',
    near: 0.1,
    far: 2000,
    fov: 50,
    aspect: 1,
    zoom: 1,
    constructor: function constructor(params) {
        PerspectiveCamera.superclass.constructor.call(this, params);
        this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
        this.projectionMatrix.perspective(math.degToRad(this.fov), this.aspect, this.near, this.far);
    }
});

module.exports = PerspectiveCamera;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var BasicLoader = __webpack_require__(59);
var GLTFParser = __webpack_require__(182);

var GLTFLoader = Class.create({
    Extends: BasicLoader,
    constructor: function constructor() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        GLTFLoader.superclass.constructor.call(this);
        Object.assign(this, params);
    },
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

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Material = __webpack_require__(119);

var ShaderMaterial = Class.create({
    Extends: Material,
    isShaderMaterial: true,
    className: 'ShaderMaterial',
    vs: '',
    fs: '',
    constructor: function constructor(params) {
        ShaderMaterial.superclass.constructor.call(this, params);
    }
});

module.exports = ShaderMaterial;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var semantic = __webpack_require__(120);
var Color = __webpack_require__(29);
var Cache = __webpack_require__(66);
var Shader = __webpack_require__(125);
var Program = __webpack_require__(122);
var RenderInfo = __webpack_require__(187);
var RenderList = __webpack_require__(188);
var VertexArrayObject = __webpack_require__(123);
var FrameBuffer = __webpack_require__(121);
var extensions = __webpack_require__(65);
var capabilities = __webpack_require__(82);
var glType = __webpack_require__(124);
var State = __webpack_require__(189);
var LightManager = __webpack_require__(180);
var EventMixin = __webpack_require__(51);

var _require = __webpack_require__(11),
    DEPTH_TEST = _require.DEPTH_TEST,
    CULL_FACE = _require.CULL_FACE,
    FRONT_AND_BACK = _require.FRONT_AND_BACK,
    BLEND = _require.BLEND,
    LINES = _require.LINES;

var cache = new Cache();

var WebGLRenderer = Class.create({
    gl: null,
    width: 0,
    height: 0,
    pixelRatio: 1,
    domElement: null,
    useInstanced: false,
    useVao: true,
    alpha: false,
    antialias: true,
    useFrameBuffer: false,
    _isInitContext: false,
    fog: null,

    Mixes: EventMixin,

    constructor: function constructor(params) {
        this.clearColor = new Color(1, 1, 1);
        this.renderInfo = new RenderInfo();
        this.renderList = new RenderList();
        this.lightManager = new LightManager();
        Object.assign(this, params);
    },
    resize: function resize(width, height, force) {
        if (force || this.width !== width || this.height !== height) {
            this.width = width;
            this.height = height;
            this.domElement.width = width;
            this.domElement.height = height;

            var gl = this.gl;
            if (gl) {
                gl.viewport(0, 0, this.width, this.height);
            }
        }
    },
    initContext: function initContext() {
        if (!this._isInitContext) {
            this._isInitContext = true;
            var gl = this.gl = this.domElement.getContext('webgl', {
                alpha: this.alpha,
                antialias: this.antialias
            });
            gl.viewport(0, 0, this.width, this.height);
            glType.init(gl);
            extensions.init(gl);
            capabilities.init(gl);


            
            this.state = new State(gl);

            if (!extensions.instanced) {
                this.useInstanced = false;
            }

            if (!extensions.vao) {
                this.useVao = false;
            }

            if (this.useFrameBuffer) {
                this.frameBuffer = new FrameBuffer({
                    useVao: this.useVao,
                    state: this.state,
                    width: this.width,
                    height: this.height
                });
            }
        }
    },
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
    setupCullFace: function setupCullFace(gl, material) {
        var state = this.state;
        if (material.cullFace && material.cullFaceType !== FRONT_AND_BACK) {
            state.enable(CULL_FACE);
            state.cullFace(material.cullFaceType);
        } else {
            state.disable(CULL_FACE);
        }
    },
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
    setupUniforms: function setupUniforms(program, mesh, force) {
        var material = this.forceMaterial || mesh.material;
        for (var name in program.uniforms) {
            var uniformInfo = material.uniforms[name];
            var programUniformInfo = program.uniforms[name];
            if (uniformInfo && !uniformInfo.supportInstanced && (force || uniformInfo.isDependOther)) {
                var uniformData = material.getUniformData(name, mesh, programUniformInfo);
                if (uniformData !== undefined) {
                    program[name] = uniformData;
                }
            }
        }
    },
    setupVao: function setupVao(vao, program, mesh) {
        var material = this.forceMaterial || mesh.material;
        var geometry = mesh.geometry;
        var materialAttributes = material.attributes;
        for (var name in materialAttributes) {
            var programAttribute = program.attributes[name];
            if (programAttribute) {
                var data = material.getAttributeData(name, mesh);
                if (data !== undefined) {
                    vao.addAttribute(data, programAttribute);
                }
            }
        }
        if (geometry.indices) {
            vao.addIndexBuffer(geometry.indices);
        }
    },
    setupMaterial: function setupMaterial(program, mesh) {
        var gl = this.gl;
        var material = this.forceMaterial || mesh.material;

        if (material.isDirty || this._lastMaterial !== material) {
            this.setupDepthTest(gl, material);
            this.setupCullFace(gl, material);
            this.setupBlend(gl, material);
            this.setupUniforms(program, mesh, true);
            this._lastMaterial = material;
        } else {
            this.setupUniforms(program, mesh, false);
        }

        material.isDirty = false;
    },
    setupMesh: function setupMesh(mesh, useInstanced) {
        var gl = this.gl;
        var state = this.state;
        var lightManager = this.lightManager;
        var geometry = mesh.geometry;
        var material = this.forceMaterial || mesh.material;
        material.jointCount = mesh.material.jointCount;
        var shader = Shader.getShader(material, useInstanced, lightManager, this.fog);
        var program = Program.getProgram(shader, state);

        program.useProgram();
        this.setupMaterial(program, mesh);

        if (material.wireframe && geometry.mode !== LINES) {
            geometry.convertToLinesMode();
        }

        var vaoId = geometry.id + program.id;
        var vao = cache.get(vaoId);
        if (!vao) {
            vao = new VertexArrayObject(gl, {
                useInstanced: useInstanced,
                useVao: this.useVao,
                mode: geometry.mode
            });
            cache.add(vaoId, vao);
            this.setupVao(vao, program, mesh);
        }

        return {
            vao: vao,
            program: program,
            geometry: geometry
        };
    },
    addRenderInfo: function addRenderInfo(faceCount, drawCount) {
        var renderInfo = this.renderInfo;
        renderInfo.currentFaceCount += faceCount;
        renderInfo.currentDrawCount += drawCount;
    },
    renderMeshes: function renderMeshes(meshes) {
        var useInstanced = this.useInstanced;
        var mesh = meshes[0];
        var material = this.forceMaterial || mesh.material;
        if (meshes.length > 1 && useInstanced && mesh.useInstanced) {
            this.renderInstancedMeshes(mesh, meshes, material);
        } else {
            this.renderMultipleMeshes(meshes);
        }
    },
    render: function render(stage, camera) {
        this.initContext();
        var gl = this.gl,
            renderList = this.renderList,
            renderInfo = this.renderInfo,
            lightManager = this.lightManager,
            state = this.state;


        this.fog = stage.fog;
        lightManager.reset();
        renderInfo.reset();
        renderList.reset();

        semantic.init(gl, camera, lightManager, state, this.fog);
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
        lightManager.updateInfo(camera);

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
        this.fire('afterRender');
    },
    renderScene: function renderScene() {
        var _this = this;

        var renderList = this.renderList;
        renderList.traverse(function (arr) {
            _this.renderMeshes(arr);
        });
    },
    clear: function clear(clearColor) {
        var gl = this.gl,
            state = this.state;


        clearColor = clearColor || this.clearColor;

        state.depthMask(true);
        this._lastMaterial = null;
        gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    },
    renderToScreen: function renderToScreen(frameBuffer) {
        this.state.bindSystemFrameBuffer();
        frameBuffer.render(0, 0, 1, 1, this.clearColor);
    },
    renderMesh: function renderMesh(mesh) {
        var _setupMesh = this.setupMesh(mesh, false),
            vao = _setupMesh.vao,
            program = _setupMesh.program;

        var material = mesh.material;
        var instancedUniforms = material.getInstancedUniforms();
        instancedUniforms.forEach(function (uniformObj) {
            var name = uniformObj.name;
            var programUniformInfo = program.uniforms[name];
            if (programUniformInfo) {
                var uniformData = material.getUniformData(name, mesh, programUniformInfo);
                if (uniformData !== undefined) {
                    program[name] = uniformData;
                }
            }
        });
        vao.bind();
        vao.draw();
        this.addRenderInfo(vao.vertexCount / 3, 1);
    },
    renderInstancedMeshes: function renderInstancedMeshes(mesh, meshes, material) {
        var _setupMesh2 = this.setupMesh(mesh, true),
            vao = _setupMesh2.vao,
            program = _setupMesh2.program;

        vao.bind();
        var instancedUniforms = material.getInstancedUniforms();
        instancedUniforms.forEach(function (uniformObj) {
            var name = uniformObj.name;
            var attribute = program.attributes[name];
            if (attribute) {
                vao.addInstancedAttribute(attribute, meshes, function (mesh) {
                    return material.getUniformData(name, mesh);
                });
            }
        });
        vao.drawInstance(meshes.length);
        this.addRenderInfo(vao.vertexCount / 3 * meshes.length, 1);
    },
    renderMultipleMeshes: function renderMultipleMeshes(meshes) {
        var _this2 = this;

        meshes.forEach(function (mesh) {
            _this2.renderMesh(mesh);
        });
    }
});

module.exports = WebGLRenderer;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Texture = __webpack_require__(64);
var BasicLoader = __webpack_require__(59);

var placeHolder = new Image();
placeHolder.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

var LazyTexture = Class.create({
    Extends: Texture,
    isLazyTexture: true,
    className: 'LazyTexture',

    _src: '',
    crossOrigin: false,
    autoLoad: true,

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

    constructor: function constructor(params) {
        LazyTexture.superclass.constructor.call(this, params);
        this.image = params.placeHolder || placeHolder;
    },
    load: function load() {
        var _this = this;

        LazyTexture.loader = LazyTexture.loader || new BasicLoader();
        return LazyTexture.loader.loadImg(this.src, this.crossOrigin).then(function (img) {
            _this.image = img;
            delete _this.tex;
        }, function (err) {
            console.warn('LazyTexture Failed ' + err);
        });
    }
});

module.exports = LazyTexture;

/***/ }),
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Node = __webpack_require__(39);
var Matrix4 = __webpack_require__(35);

var Camera = Class.create({
    isCamera: true,
    className: 'Camera',
    Extends: Node,
    constructor: function constructor(params) {
        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();
        this.viewProjectionMatrix = new Matrix4();
        Camera.superclass.constructor.call(this, params);
    },
    updateViewMatrix: function updateViewMatrix() {
        this.updateMatrixWorld();
        this.viewMatrix.invert(this.worldMatrix);
    },
    updateProjectionMatrix: function updateProjectionMatrix() {},
    updateViewProjectionMatrix: function updateViewProjectionMatrix() {
        this.updateProjectionMatrix();
        this.updateViewMatrix();
        this.viewProjectionMatrix.multiplyMatrices(this.projectionMatrix, this.viewMatrix);
    },
    getModelViewMatrix: function getModelViewMatrix(node, out) {
        out = out || new Matrix4();
        out.multiplyMatrices(this.viewMatrix, node.worldMatrix);
        return out;
    },
    getModelProjectionMatrix: function getModelProjectionMatrix(node, out) {
        out = out || new Matrix4();
        out.multiplyMatrices(this.viewProjectionMatrix, node.worldMatrix);
        return out;
    },
    projectVector: function projectVector(vector, width, height) {
        var result = vector.clone();
        result.transformMat4(this.viewProjectionMatrix);
        if (width && height) {
            result.x = (result.x + 1) / 2 * width;
            result.y = height - (result.y + 1) / 2 * height;
        }
        return result;
    }
});

module.exports = Camera;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var semantic = __webpack_require__(120);

var _require = __webpack_require__(11),
    LESS = _require.LESS,
    BACK = _require.BACK,
    ZERO = _require.ZERO,
    ONE = _require.ONE,
    FUNC_ADD = _require.FUNC_ADD,
    ONE_MINUS_SRC_ALPHA = _require.ONE_MINUS_SRC_ALPHA,
    SRC_ALPHA = _require.SRC_ALPHA;

var Material = Class.create({
    isMaterial: true,
    className: 'Material',

    wireframe: false,

    depthTest: true,
    depthMask: true,
    depthRange: [0, 1],
    depthFunc: LESS,

    cullFace: false,
    cullFaceType: BACK,

    blend: false,
    blendEquation: FUNC_ADD,
    blendEquationAlpha: FUNC_ADD,
    blendSrc: ONE,
    blendDst: ZERO,
    blendSrcAlpha: ONE,
    blendDstAlpha: ZERO,

    isDirty: false,

    _transparent: false,
    transparent: {
        get: function get() {
            return this._transparent;
        },
        set: function set(value) {
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
    },
    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);

        this.uniforms = {};
        this.attributes = {};

        Object.assign(this, params);
    },
    getInstancedUniforms: function getInstancedUniforms() {
        var instancedUniforms = this._instancedUniforms;
        if (!this._instancedUniforms) {
            var uniforms = this.uniforms;
            instancedUniforms = this._instancedUniforms = [];
            for (var name in uniforms) {
                var uniformData = uniforms[name];
                if (uniformData.supportInstanced) {
                    instancedUniforms.push({
                        name: name,
                        semantic: uniformData.semantic
                    });
                }
            }
        }

        return instancedUniforms;
    },
    getUniformData: function getUniformData(name, mesh, programInfo) {
        return this.getData('uniforms', name, mesh, programInfo);
    },
    getAttributeData: function getAttributeData(name, mesh) {
        return this.getData('attributes', name, mesh);
    },
    getData: function getData(dataType, name, mesh, programInfo) {
        var dataDict = this[dataType];
        var dataInfo = dataDict[name];
        if (dataInfo) {
            if (dataInfo.get) {
                return semantic.customGetData(dataInfo.get, mesh, this, programInfo);
            }
            return semantic.getData(dataInfo.semantic, mesh, this, programInfo);
        }
        return undefined;
    },
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-unused-vars: "off" */
var DataTexture = __webpack_require__(79);
var Vector3 = __webpack_require__(25);
var Matrix3 = __webpack_require__(81);
var Matrix4 = __webpack_require__(35);

var tempVector3 = new Vector3();
var tempMatrix3 = new Matrix3();
var tempMatrix4 = new Matrix4();
var tempColor = new Float32Array([0.5, 0.5, 0.5, 1]);
var blankFunc = function blankFunc(mesh) {
    return undefined;
};

var camera = void 0;
var gl = void 0;
var lightManager = void 0;
var state = void 0;
var fog = void 0;

var semantic = {
    init: function init(_gl, _camera, _lightManager, _state, _fog) {
        camera = _camera;
        gl = _gl;
        lightManager = _lightManager;
        state = _state;
        fog = _fog;
    },
    reset: function reset() {},
    get: function get(name) {
        if (this[name]) {
            return this[name];
        }

        console.warn('no this semantic:', name);
        return blankFunc;
    },
    customGet: function customGet(callback) {
        return function (mesh, material, programInfo) {
            return callback.call(semantic, gl, mesh, camera, lightManager, material, programInfo);
        };
    },
    getData: function getData(name, mesh, material, programInfo) {
        return this.get(name)(mesh, material, programInfo);
    },
    customGetData: function customGetData(name, mesh, material, programInfo) {
        return this.customGet(name)(mesh, material, programInfo);
    },
    handlerColorOrTexture: function handlerColorOrTexture(value, textureIndex) {
        if (value && value.isTexture) {
            var texture = value.getGLTexture(state);
            state.activeTexture(gl.TEXTURE0 + textureIndex);
            state.bindTexture(value.target, texture);
            return textureIndex;
        }
        if (value && value.isColor) {
            value.toArray(tempColor);
        } else {
            tempColor[0] = tempColor[1] = tempColor[2] = 0.5;
        }
        return tempColor;
    },


    // uniforms
    LOCAL: function LOCAL(mesh, material, programInfo) {
        return mesh.matrix.elements;
    },
    MODEL: function MODEL(mesh, material, programInfo) {
        return mesh.worldMatrix.elements;
    },
    VIEW: function VIEW(mesh, material, programInfo) {
        return camera.viewMatrix.elements;
    },
    PROJECTION: function PROJECTION(mesh, material, programInfo) {
        return camera.projectionMatrix.elements;
    },
    MODELVIEW: function MODELVIEW(mesh, material, programInfo) {
        return camera.getModelViewMatrix(mesh, tempMatrix4).elements;
    },
    MODELVIEWPROJECTION: function MODELVIEWPROJECTION(mesh, material, programInfo) {
        return camera.getModelProjectionMatrix(mesh, tempMatrix4).elements;
    },
    MODELINVERSE: function MODELINVERSE(mesh, material, programInfo) {
        return tempMatrix4.invert(mesh.worldMatrix).elements;
    },
    VIEWINVERSE: function VIEWINVERSE(mesh, material, programInfo) {
        return camera.worldMatrix.elements;
    },
    PROJECTIONINVERSE: function PROJECTIONINVERSE(mesh, material, programInfo) {
        return tempMatrix4.invert(camera.projectionMatrix).elements;
    },
    MODELVIEWINVERSE: function MODELVIEWINVERSE(mesh, material, programInfo) {
        return tempMatrix4.invert(camera.getModelViewMatrix(mesh, tempMatrix4)).elements;
    },
    MODELVIEWPROJECTIONINVERSE: function MODELVIEWPROJECTIONINVERSE(mesh, material, programInfo) {
        return tempMatrix4.invert(camera.getModelProjectionMatrix(mesh, tempMatrix4)).elements;
    },
    MODELINVERSETRANSPOSE: function MODELINVERSETRANSPOSE(mesh, material, programInfo) {
        return tempMatrix3.normalFromMat4(mesh.worldMatrix).elements;
    },
    MODELVIEWINVERSETRANSPOSE: function MODELVIEWINVERSETRANSPOSE(mesh, material, programInfo) {
        return tempMatrix3.normalFromMat4(camera.getModelViewMatrix(mesh, tempMatrix4)).elements;
    },
    VIEWPORT: function VIEWPORT(mesh, material, programInfo) {
        console.warn('no this semantic:', name);
    },
    JOINTMATRIX: function JOINTMATRIX(mesh, material, programInfo) {
        if (mesh.isSkinedMesh) {
            return mesh.getJointMat();
        }
        console.warn('Current mesh is not SkinedMesh!', mesh.id);
        return undefined;
    },
    JOINTMATRIXTEXTURE: function JOINTMATRIXTEXTURE(mesh, material, programInfo) {
        if (mesh.isSkinedMesh) {
            mesh.updateJointMatTexture();
            return semantic.handlerColorOrTexture(mesh.jointMatTexture, programInfo.textureIndex);
        }
        console.warn('Current mesh is not SkinedMesh!', mesh.id);
        return undefined;
    },
    JOINTMATRIXTEXTURESIZE: function JOINTMATRIXTEXTURESIZE(mesh, material, programInfo) {
        if (mesh.isSkinedMesh) {
            mesh.initJointMatTexture();
            return [mesh.jointMatTexture.width, mesh.jointMatTexture.height];
        }
        console.warn('Current mesh is not SkinedMesh!', mesh.id);
        return undefined;
    },
    DIFFUSE: function DIFFUSE(mesh, material, programInfo) {
        return semantic.handlerColorOrTexture(material.diffuse, programInfo.textureIndex);
    },
    SPECULAR: function SPECULAR(mesh, material, programInfo) {
        return semantic.handlerColorOrTexture(material.specular, programInfo.textureIndex);
    },
    EMISSION: function EMISSION(mesh, material, programInfo) {
        return semantic.handlerColorOrTexture(material.emission, programInfo.textureIndex);
    },
    AMBIENT: function AMBIENT(mesh, material, programInfo) {
        return semantic.handlerColorOrTexture(material.ambient, programInfo.textureIndex);
    },
    NORMALMAP: function NORMALMAP(mesh, material, programInfo) {
        if (!material.normalMap || !material.normalMap.isTexture) {
            return undefined;
        }
        return semantic.handlerColorOrTexture(material.normalMap, programInfo.textureIndex);
    },
    SHININESS: function SHININESS(mesh, material, programInfo) {
        return material.shininess;
    },
    TRANSPARENCY: function TRANSPARENCY(mesh, material, programInfo) {
        if ('transparency' in material) {
            if (material.transparency.isTexture) {
                return semantic.handlerColorOrTexture(material.transparency, programInfo.textureIndex);
            }
            return material.transparency;
        }
        return 1;
    },
    SKYBOXMAP: function SKYBOXMAP(mesh, material, programInfo) {
        if (material.skyboxMap && material.skyboxMap.isTexture) {
            return semantic.handlerColorOrTexture(material.skyboxMap, programInfo.textureIndex);
        }
        return undefined;
    },
    REFLECTIVITY: function REFLECTIVITY(mesh, material, programInfo) {
        return material.reflectivity;
    },
    REFRACTRATIO: function REFRACTRATIO(mesh, material, programInfo) {
        return material.refractRatio;
    },
    REFRACTIVITY: function REFRACTIVITY(mesh, material, programInfo) {
        return material.refractivity;
    },


    // light
    AMBIENTLIGHTSCOLOR: function AMBIENTLIGHTSCOLOR(mesh, material, programInfo) {
        return lightManager.ambientInfo;
    },
    DIRECTIONALLIGHTSCOLOR: function DIRECTIONALLIGHTSCOLOR(mesh, material, programInfo) {
        return lightManager.directionalInfo.colors;
    },
    DIRECTIONALLIGHTSINFO: function DIRECTIONALLIGHTSINFO(mesh, material, programInfo) {
        return lightManager.directionalInfo.infos;
    },
    POINTLIGHTSPOS: function POINTLIGHTSPOS(mesh, material, programInfo) {
        return lightManager.pointInfo.poses;
    },
    POINTLIGHTSCOLOR: function POINTLIGHTSCOLOR(mesh, material, programInfo) {
        return lightManager.pointInfo.colors;
    },
    POINTLIGHTSINFO: function POINTLIGHTSINFO(mesh, material, programInfo) {
        return lightManager.pointInfo.infos;
    },


    // fog
    FOGCOLOR: function FOGCOLOR(mesh, material, programInfo) {
        if (fog) {
            return fog.color.elements;
        }
        return undefined;
    },
    FOGINFO: function FOGINFO(mesh, material, programInfo) {
        if (fog) {
            return fog.getInfo();
        }
        return undefined;
    },


    // unQuantize
    POSITIONDECODEMAT: function POSITIONDECODEMAT(mesh, material, programInfo) {
        return mesh.geometry.positionDecodeMat;
    },
    NORMALDECODEMAT: function NORMALDECODEMAT(mesh, material, programInfo) {
        return mesh.geometry.normalDecodeMat;
    },
    UVDECODEMAT: function UVDECODEMAT(mesh, material, programInfo) {
        return mesh.geometry.uvDecodeMat;
    },


    // attributes
    POSITION: function POSITION(mesh) {
        return mesh.geometry.vertices;
    },
    NORMAL: function NORMAL(mesh) {
        return mesh.geometry.normals;
    },
    TANGENT: function TANGENT(mesh) {
        if (!mesh.material.normalMap || !mesh.material.normalMap.isTexture) {
            return undefined;
        }
        return mesh.geometry.tangents;
    },
    TEXCOORD_0: function TEXCOORD_0(mesh) {
        return mesh.geometry.uvs;
    },
    SKININDICES: function SKININDICES(mesh) {
        return mesh.geometry.skinIndices;
    },
    SKINWEIGHTS: function SKINWEIGHTS(mesh) {
        return mesh.geometry.skinWeights;
    }
};

module.exports = semantic;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Shader = __webpack_require__(125);
var screenVert = __webpack_require__(384);
var screenFrag = __webpack_require__(383);
var Cache = __webpack_require__(66);
var Program = __webpack_require__(122);
var VertexArrayObject = __webpack_require__(123);
var util = __webpack_require__(21);

var _require = __webpack_require__(11),
    RGBA = _require.RGBA,
    UNSIGNED_BYTE = _require.UNSIGNED_BYTE,
    COLOR_ATTACHMENT0 = _require.COLOR_ATTACHMENT0,
    DEPTH_STENCIL = _require.DEPTH_STENCIL,
    DEPTH_TEST = _require.DEPTH_TEST,
    CULL_FACE = _require.CULL_FACE,
    BLEND = _require.BLEND,
    TRIANGLE_STRIP = _require.TRIANGLE_STRIP;

var cache = new Cache();
var FrameBuffer = Class.create({
    bufferInternalFormat: DEPTH_STENCIL,
    internalFormat: RGBA,
    format: RGBA,
    type: UNSIGNED_BYTE,
    attachment: COLOR_ATTACHMENT0,
    needRenderBuffer: true,
    useVao: true,
    constructor: function constructor(params) {
        Object.assign(this, params);
        var gl = this.gl = this.state.gl;
        this.framebuffer = gl.createFramebuffer();
        this.bind();
        this.texture = this.createTexture();
        if (this.needRenderBuffer) {
            this.renderBuffer = this.createRenderBuffer();
        }
        this.unbind();
    },
    bind: function bind() {
        this.state.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
    },
    unbind: function unbind() {
        var state = this.state;
        state.bindFramebuffer(this.gl.FRAMEBUFFER, state.preFrameBuffer);
    },
    render: function render() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var clearColor = arguments[4];
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
        var vao = cache.get(vaoId);
        if (!vao) {
            vao = new VertexArrayObject(gl, {
                useVao: this.useVao,
                useInstanced: false,
                mode: TRIANGLE_STRIP
            });
            x = x * 2 - 1;
            y = 1 - y * 2;
            width *= 2;
            height *= 2;
            var vertices = [x, y, x + width, y, x, y - height, x + width, y - height];
            vao.addAttribute(new Float32Array(vertices), program.attributes.a_position);
            vao.addAttribute(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), program.attributes.a_texcoord0);
            cache.add(vaoId, vao);
        }

        state.activeTexture(gl.TEXTURE0);
        state.bindTexture(gl.TEXTURE_2D, this.texture);
        vao.bind();
        vao.draw();
    },
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
    createTexture: function createTexture() {
        var gl = this.gl,
            width = this.width,
            height = this.height;

        var texture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, this.internalFormat, width, height, 0, this.format, this.type, null);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, this.attachment, gl.TEXTURE_2D, texture, 0);

        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
            console.warn('Framebuffer is not complete');
        }
        return texture;
    },
    readPixels: function readPixels(x, y) {
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        var gl = this.gl;
        // convert to webgl coordinate system
        y = this.height - y - height;

        this.bind();
        var TypedArray = util.getTypedArrayClass(this.type);
        var pixels = new TypedArray(width * height * 4);
        gl.readPixels(x, y, width, height, this.format, this.type, pixels);
        this.unbind();
        return pixels;
    }
});

module.exports = FrameBuffer;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var Cache = __webpack_require__(66);
var glType = __webpack_require__(124);
var extensions = __webpack_require__(65);

var cache = new Cache();
var Program = Class.create({
    className: 'Program',
    state: null,
    gl: null,
    fragShader: '',
    vertexShader: '',

    Statics: {
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

    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);
        Object.assign(this, params);
        this._dict = {};
        this.attributes = {};
        this.uniforms = {};
        this.gl = this.state.gl;
        this.program = this.createProgram();
        this.initAttributes();
        this.initUniforms();
    },
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
    useProgram: function useProgram() {
        this.state.useProgram(this.program);
    },
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
            var pointer = function pointer() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gl.FLOAT;
                var stride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                gl.vertexAttribPointer(location, glTypeInfo.size, type, false, stride, offset);
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
                var stride = glTypeInfo.byteSize;
                var _size = glTypeInfo.size;
                var matSize = Math.sqrt(_size);
                var vectorByteSize = matSize * 4;

                var each = function each(callback) {
                    for (var _i = 0; _i < matSize; _i++) {
                        callback(location + _i, _i);
                    }
                };
                pointer = function pointer() {
                    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gl.FLOAT;

                    each(function (location, i) {
                        gl.vertexAttribPointer(location, matSize, type, false, stride, vectorByteSize * i);
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
                textureIndex++;
            }

            Object.defineProperty(_this2, name, {
                set: glTypeInfo.size > 1 ? function (value) {
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var extensions = __webpack_require__(65);
var Buffer = __webpack_require__(186);
var bufferUtil = __webpack_require__(191);

var _require = __webpack_require__(11),
    TRIANGLES = _require.TRIANGLES;

var globalStates = [];
var currentVao = null;

var VertexArrayObject = Class.create({
    vertexCount: null,
    useVao: false,
    useInstanced: false,
    mode: TRIANGLES,
    activeStates: [],
    constructor: function constructor(gl, params) {
        this.gl = gl;
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
        this.bind();
    },
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
    bindSystemVao: function bindSystemVao() {
        var gl = this.gl;
        if (currentVao && currentVao.useVao) {
            currentVao.unbind();
        }
        var activeStates = this.activeStates;

        var lastBuffer = void 0;
        this.attributes.forEach(function (attributeObject) {
            var buffer = attributeObject.buffer,
                attribute = attributeObject.attribute;


            if (lastBuffer !== buffer) {
                lastBuffer = buffer;
                buffer.bind();
            }

            attribute.enable();
            attribute.pointer();
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
    unbind: function unbind() {
        if (this.useVao) {
            this.vaoExtension.bindVertexArrayOES(null);
            currentVao = null;
        }
    },
    draw: function draw() {
        var gl = this.gl,
            mode = this.mode;

        if (this.indexBuffer) {
            gl.drawElements(mode, this.vertexCount, gl.UNSIGNED_SHORT, 0);
        } else {
            gl.drawArrays(mode, 0, this.getVertexCount());
        }
    },
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
    drawInstance: function drawInstance() {
        var primcount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
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
    addIndexBuffer: function addIndexBuffer(data) {
        var gl = this.gl;
        var buffer = Buffer.createIndexBuffer(gl, data);
        buffer.bind();
        this.indexBuffer = buffer;
        this.vertexCount = data.length;
    },
    addAttribute: function addAttribute(data, attribute, usage) {
        var gl = this.gl;
        if (usage === undefined) {
            usage = gl.STATIC_DRAW;
        }
        var buffer = Buffer.createVertexBuffer(gl, data, usage);
        var name = attribute.name;

        buffer.bind();
        attribute.enable();
        attribute.pointer();

        var attributeObject = {
            attribute: attribute,
            buffer: buffer
        };
        this.attributes.push(attributeObject);
        this[name] = attributeObject;
        attribute.addTo(this.activeStates, attributeObject);
        return attributeObject;
    },
    addInstancedAttribute: function addInstancedAttribute(attribute, meshes, getData) {
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
        if (!attributeObject) {
            attributeObject = this.addAttribute(instancedData, attribute, gl.DYNAMIC_DRAW);
            attribute.divisor();
            attributeObject.useInstanced = true;
        } else {
            attributeObject.buffer.upload(instancedData);
        }
    }
});

module.exports = VertexArrayObject;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DATA_TYPES = [{
    name: 'FLOAT',
    byteSize: 4,
    uniformFuncName: 'uniform1f',
    type: 'Single',
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
    type: 'Single',
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
    type: 'Single',
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
    type: 'Single',
    size: 1
}, {
    name: 'SAMPLER_CUBE',
    byteSize: 4,
    uniformFuncName: 'uniform1i',
    type: 'Single',
    size: 1
}];

var DATA_DICT = {};

var glType = {
    dict: DATA_DICT,
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
    get: function get(type) {
        return DATA_DICT[type];
    }
};

module.exports = glType;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var math = __webpack_require__(13);
var Cache = __webpack_require__(66);
var extensions = __webpack_require__(65);
var capabilities = __webpack_require__(82);
var basicFragCode = __webpack_require__(381);
var basicVertCode = __webpack_require__(382);

var cache = new Cache();

var Shader = Class.create({
    isShader: true,
    className: 'Shader',

    vs: null,
    fs: null,

    Statics: {
        getHeader: function getHeader(material, lightManager, fog) {
            var header = '';

            var lightType = material.lightType;
            header += '#define HILO_LIGHT_TYPE_' + lightType + ' 1\n';

            var hasLight = false;
            if (lightType !== 'NONE') {
                var lightInfoMap = lightManager.getInfo();
                for (var name in lightInfoMap) {
                    if (lightInfoMap[name] && name !== 'uid') {
                        header += '#define ' + name + ' ' + lightInfoMap[name] + '\n';
                        hasLight = true;
                    }
                }
                if (hasLight) {
                    header += '#define HILO_HAS_LIGHT 1\n';
                }
            }

            var hasSpecular = false;
            if (lightType === 'PHONG' || lightType === 'BLINN') {
                hasSpecular = true;
            }

            if (hasSpecular) {
                header += '#define HILO_HAS_SPECULAR 1\n';
            }

            var needUV = false;
            if (material.isBasicMaterial) {
                if (material.diffuse && material.diffuse.isTexture) {
                    if (material.diffuse.isCubeTexture) {
                        header += '#define HILO_DIFFUSE_CUBE_MAP 1\n';
                    } else {
                        header += '#define HILO_DIFFUSE_MAP 1\n';
                        needUV = true;
                    }
                }

                if (material.transparency && material.transparency.isTexture) {
                    header += '#define HILO_TRANSPARENCY_MAP 1\n';
                    needUV = true;
                }

                if (hasLight) {
                    header += '#define HILO_HAS_NORMAL 1\n';

                    if (material.normalMap) {
                        header += '#define HILO_HAS_NORMAL_MAP 1\n';
                        needUV = true;
                    }

                    if (material.specular && material.specular.isTexture) {
                        header += '#define HILO_SPECULAR_MAP 1\n';
                        needUV = true;
                    }

                    if (material.emission && material.emission.isTexture) {
                        header += '#define HILO_EMISSION_MAP 1\n';
                        needUV = true;
                    }

                    if (material.ambient && material.ambient.isTexture) {
                        header += '#define HILO_AMBIENT_MAP 1\n';
                        needUV = true;
                    }

                    if (material.skyboxMap) {
                        header += '#define HILO_SKYBOX_MAP 1\n';
                    }
                }
            }

            if (needUV) {
                header += '#define HILO_HAS_TEXCOORD0 1\n';
            }

            if (material.isQuantizedMaterial) {
                header += '#define HILO_QUANTIZED 1\n';
            }

            if (material.jointCount) {
                header += '#define HILO_JOINT_COUNT ' + material.jointCount + '\n';
                if (extensions.texFloat) {
                    var maxJointCount = (capabilities.MAX_VERTEX_UNIFORM_VECTORS - material.usedUniformVectors) / 4;
                    if (material.jointCount > maxJointCount) {
                        header += '#define HILO_JOINT_MAT_MAP 1\n';
                    }
                }
            }

            if (fog) {
                header += '#define HILO_HAS_FOG\n';
            }

            return header;
        },
        getShader: function getShader(material, isUseInstance, lightManager, fog) {
            if (material.isBasicMaterial) {
                return this.getBasicShader(material, isUseInstance, lightManager, fog);
            }
            if (material.isShaderMaterial) {
                return this.getCustomShader(material.vs, material.fs, material.id);
            }
            return null;
        },
        getBasicShader: function getBasicShader(material, isUseInstance, lightManager, fog) {
            var headerKey = 'header_' + material.id + '_' + material.jointCount + '_' + lightManager.lightInfo.uid;
            if (fog) {
                headerKey += '_fog';
            }

            var header = cache.get(headerKey);
            if (!header || material.isDirty) {
                header = Shader.getHeader(material, lightManager, fog);
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
                    fs += basicFragCode;
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
        getCustomShader: function getCustomShader(vs, fs, cacheKey) {
            var shader = cache.get(cacheKey);
            if (!shader) {
                shader = new Shader({
                    vs: vs,
                    fs: fs
                });

                if (cacheKey) {
                    cache.add(cacheKey, shader);
                }
            }

            return shader;
        }
    },

    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);
        Object.assign(this, params);
    }
});

module.exports = Shader;

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);

/**
 * @class 3x3 Matrix
 * @name mat3
 */
var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new glMatrix.ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
mat3.fromValues = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new glMatrix.ARRAY_TYPE(9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
};

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
mat3.fromTranslation = function(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.fromRotation = function(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);

    out[0] = c;
    out[1] = s;
    out[2] = 0;

    out[3] = -s;
    out[4] = c;
    out[5] = 0;

    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
mat3.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;

    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;

    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
};

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
mat3.sub = mat3.subtract;

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
mat3.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
};

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    out[6] = a[6] + (b[6] * scale);
    out[7] = a[7] + (b[7] * scale);
    out[8] = a[8] + (b[8] * scale);
    return out;
};

/*
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat3.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && 
           a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
           a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat3.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = a[6], b7 = b[7], b8 = b[8];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
};


module.exports = mat3;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */
var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new glMatrix.ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new glMatrix.ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
vec3.ceil = function (out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
};

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
vec3.floor = function (out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
};

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
vec3.round = function (out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
vec3.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.hermite = function (out, a, b, c, d, t) {
  var factorTimes2 = t * t,
      factor1 = factorTimes2 * (2 * t - 3) + 1,
      factor2 = factorTimes2 * (t - 2) + t,
      factor3 = factorTimes2 * (t - 1),
      factor4 = factorTimes2 * (3 - 2 * t);
  
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  
  return out;
};

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.bezier = function (out, a, b, c, d, t) {
  var inverseFactor = 1 - t,
      inverseFactorTimesTwo = inverseFactor * inverseFactor,
      factorTimes2 = t * t,
      factor1 = inverseFactorTimesTwo * inverseFactor,
      factor2 = 3 * t * inverseFactorTimesTwo,
      factor3 = 3 * factorTimes2 * inverseFactor,
      factor4 = factorTimes2 * t;
  
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

  	return out;
};

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateY = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  	r[1] = p[1];
  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
vec3.rotateZ = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  	r[2] = p[2];
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
vec3.angle = function(a, b) {
   
    var tempA = vec3.fromValues(a[0], a[1], a[2]);
    var tempB = vec3.fromValues(b[0], b[1], b[2]);
 
    vec3.normalize(tempA, tempA);
    vec3.normalize(tempB, tempB);
 
    var cosine = vec3.dot(tempA, tempB);

    if(cosine > 1.0){
        return 0;
    } else {
        return Math.acos(cosine);
    }     
};

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec3.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec3.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
};

module.exports = vec3;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */
var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
vec4.ceil = function (out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
};

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
vec4.floor = function (out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
};

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
vec4.round = function (out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
vec4.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = glMatrix.RANDOM();
    out[1] = glMatrix.RANDOM();
    out[2] = glMatrix.RANDOM();
    out[3] = glMatrix.RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec4.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec4.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
};

module.exports = vec4;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hilo3d = {
    Class: __webpack_require__(1),
    Node: __webpack_require__(39),
    Stage: __webpack_require__(160),
    PerspectiveCamera: __webpack_require__(112),
    OrthographicCamera: __webpack_require__(158),
    WebGLRenderer: __webpack_require__(115),
    Color: __webpack_require__(29),
    Ticker: __webpack_require__(174),
    BasicLoader: __webpack_require__(59),
    GLTFLoader: __webpack_require__(113),
    ShaderMaterialLoader: __webpack_require__(171),
    LoadQueue: __webpack_require__(170),
    Texture: __webpack_require__(64),
    LazyTexture: __webpack_require__(116),
    CubeTexture: __webpack_require__(172),
    DataTexture: __webpack_require__(79),
    Euler: __webpack_require__(78),
    Vector3: __webpack_require__(25),
    Matrix4: __webpack_require__(35),
    Quaternion: __webpack_require__(63),
    Tween: __webpack_require__(161),
    Mesh: __webpack_require__(58),
    Fog: __webpack_require__(159),
    Geometry: __webpack_require__(40),
    PlaneGeometry: __webpack_require__(163),
    BoxGeometry: __webpack_require__(162),
    SphereGeometry: __webpack_require__(164),
    BasicMaterial: __webpack_require__(50),
    ShaderMaterial: __webpack_require__(114),
    AxisHelper: __webpack_require__(165),
    AxisNetHelper: __webpack_require__(166),
    DirectionalLight: __webpack_require__(168),
    PointLight: __webpack_require__(169),
    AmbientLight: __webpack_require__(167),
    Animation: __webpack_require__(110),
    AnimationStates: __webpack_require__(111),
    MeshPicker: __webpack_require__(173),
    util: __webpack_require__(21),
    capabilities: __webpack_require__(82)
};

Object.assign(Hilo3d, __webpack_require__(11));

if (typeof window !== 'undefined') {
    window.Hilo3d = Hilo3d;
}
module.exports = Hilo3d;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Camera = __webpack_require__(118);

var OrthographicCamera = Class.create({
    Extends: Camera,
    isOrthographicCamera: true,
    className: 'OrthographicCamera',
    left: -1,
    right: 1,
    bottom: -1,
    top: 1,
    near: 0.1,
    far: 1,
    constructor: function constructor(params) {
        OrthographicCamera.superclass.constructor.call(this, params);
        this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
        this.projectionMatrix.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far);
    }
});

module.exports = OrthographicCamera;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Color = __webpack_require__(29);
var math = __webpack_require__(13);

var Fog = Class.create({
    isFog: true,
    className: 'Fog',
    constructor: function constructor(params) {
        this.id = math.generateUUID(this.className);
        this.color = new Color(1, 1, 1, 1);
        this.near = 0;
        this.far = 10;
        this.info = new Float32Array(2);
        Object.assign(this, params);
    },
    getInfo: function getInfo() {
        this.info[0] = this.near;
        this.info[1] = this.far;
        return this.info;
    }
});

module.exports = Fog;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Node = __webpack_require__(39);
var WebGLRenderer = __webpack_require__(115);

var Stage = Class.create({
    Extends: Node,

    isStage: true,
    className: 'Stage',

    renderer: null,
    camera: null,
    pixelRatio: null,
    constructor: function constructor(params) {
        Stage.superclass.constructor.call(this, params);
        if (!this.pixelRatio) {
            this.pixelRatio = Math.min(2, window.devicePixelRatio || 1);
        }
        this.initRenderer(params);
    },
    initRenderer: function initRenderer(params) {
        var canvas = this.canvas = this.createCanvas(params);
        this.renderer = new WebGLRenderer(Object.assign(params, {
            domElement: canvas
        }));
        this.resize(this.width, this.height, this.pixelRatio, true);
    },
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
    resize: function resize(width, height, pixelRatio, force) {
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
    tick: function tick(dt) {
        this.traverseUpdate(dt);
        this.renderer.render(this, this.camera);
    }
});

module.exports = Stage;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Tween = __webpack_require__(379);
Tween.Ease = __webpack_require__(378);

module.exports = Tween;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Geometry = __webpack_require__(40);

var BoxGeometry = Class.create({
    Extends: Geometry,
    isBoxGeometry: true,
    className: 'BoxGeometry',

    width: 1,
    height: 1,
    depth: 1,
    constructor: function constructor(params) {
        BoxGeometry.superclass.constructor.call(this, params);

        this.vertices = new Float32Array(72);
        // this.normals = new Float32Array(72);
        this.indices = new Uint16Array(36);
        this.build();
    },
    build: function build() {
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

        this.addRect(p5, p6, p7, p8); // front
        this.addRect(p6, p2, p3, p7); // right
        this.addRect(p2, p1, p4, p3); // back
        this.addRect(p1, p5, p8, p4); // left
        this.addRect(p8, p7, p3, p4); // top
        this.addRect(p1, p2, p6, p5); // bottom
    },
    setFrontUV: function setFrontUV(uv) {
        this.setVertexUV(0, uv);
    },
    setRightUV: function setRightUV(uv) {
        this.setVertexUV(8, uv);
    },
    setBackUV: function setBackUV(uv) {
        this.setVertexUV(16, uv);
    },
    setLeftUV: function setLeftUV(uv) {
        this.setVertexUV(24, uv);
    },
    setTopUV: function setTopUV(uv) {
        this.setVertexUV(32, uv);
    },
    setBottomUV: function setBottomUV(uv) {
        this.setVertexUV(40, uv);
    },
    setAllRectUV: function setAllRectUV(uv) {
        for (var i = 0; i < 6; i++) {
            this.setVertexUV(i * 8, uv);
        }
    }
});

module.exports = BoxGeometry;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Geometry = __webpack_require__(40);

var _require = __webpack_require__(11),
    TRIANGLES = _require.TRIANGLES;

var PlaneGeometry = Class.create({
    Extends: Geometry,
    isPlaneGeometry: true,
    className: 'PlaneGeometry',

    mode: TRIANGLES,

    width: 1,
    height: 1,
    grid: 1,
    constructor: function constructor(params) {
        PlaneGeometry.superclass.constructor.call(this, params);
        var grid = this.grid;
        var count = Math.pow(grid + 1, 2);
        var diffW = this.width / grid;
        var diffH = this.height / grid;

        this.vertices = new Float32Array(count * 3);
        this.normals = new Float32Array(count * 3);
        this.uvs = new Float32Array(count * 2);
        this.indices = new Uint16Array(Math.pow(grid, 2) * 6);

        var indicesIdx = 0;

        for (var h = 0; h <= grid; h++) {
            for (var w = 0; w <= grid; w++) {
                var idx = h * (grid + 1) + w;
                this.vertices[idx * 3] = w * diffW - this.width / 2;
                this.vertices[idx * 3 + 1] = 1 - (h * diffH + this.height / 2);
                this.normals[idx * 3] = 0;
                this.normals[idx * 3 + 1] = 0;
                this.normals[idx * 3 + 2] = 1;
                this.uvs[idx * 2] = w / this.grid;
                this.uvs[idx * 2 + 1] = 1 - h / this.grid;

                if (h < grid && w < grid) {
                    var lb = (h + 1) * (grid + 1) + w;
                    this.indices[indicesIdx++] = idx;
                    this.indices[indicesIdx++] = lb;
                    this.indices[indicesIdx++] = lb + 1;
                    this.indices[indicesIdx++] = idx;
                    this.indices[indicesIdx++] = lb + 1;
                    this.indices[indicesIdx++] = idx + 1;
                }
            }
        }
    }
});

module.exports = PlaneGeometry;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by wang on 2017/4/21.
 */
var Class = __webpack_require__(1);
var Geometry = __webpack_require__(40);

var SphereGeometry = Class.create({
    Extends: Geometry,
    isPlaneGeometry: true,
    className: 'SphereGeometry',

    radius: 1,
    heightSegments: 16,
    widthSegments: 32,
    constructor: function constructor(params) {
        SphereGeometry.superclass.constructor.call(this, params);
        this.build();
    },
    build: function build() {
        var i = void 0;
        var j = void 0;
        var uv = [];
        var radius = this.radius;
        var heightSegments = this.heightSegments;
        var widthSegments = this.widthSegments;
        var temp = 0;

        function getPoint(x, y) {

            var a = Math.PI * x / heightSegments,
                b = 2 * Math.PI * y / widthSegments,
                l = Math.sin(a) * radius;
            return [Math.sin(b) * l, Math.cos(a) * radius, Math.cos(b) * l];
        }
        for (i = 1; i <= heightSegments; i++) {
            for (j = 1; j <= widthSegments; j++) {
                this.addPoints(getPoint(i, j), getPoint(i - 1, j), getPoint(i, j - 1), getPoint(i - 1, j - 1));
                this.addIndices(temp, temp + 1, temp + 2, temp + 2, temp + 1, temp + 3);
                temp += 4;
                uv.push(j / widthSegments, heightSegments - i / heightSegments, j / widthSegments, heightSegments - (i - 1) / heightSegments, (j - 1) / widthSegments, heightSegments - i / heightSegments, (j - 1) / widthSegments, heightSegments - (i - 1) / heightSegments);
            }
        }
        this.uvs = new Float32Array(uv);
    }
});

module.exports = SphereGeometry;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Class = __webpack_require__(1);
var Node = __webpack_require__(39);
var Mesh = __webpack_require__(58);
var Geometry = __webpack_require__(40);
var BasicMaterial = __webpack_require__(50);
var Color = __webpack_require__(29);

var _require = __webpack_require__(11),
    LINES = _require.LINES;

var axisMap = {
    x: [0, 0, 0, 1, 0, 0],
    y: [0, 0, 0, 0, 1, 0],
    z: [0, 0, 0, 0, 0, 1]
};

var AxisHelper = Class.create({
    Extends: Node,
    className: 'AxisHelper',

    size: 1,
    constructor: function constructor(params) {
        AxisHelper.superclass.constructor.call(this, params);
        this.init();
    },
    addAxis: function addAxis(direction) {
        var mesh = new Mesh({
            name: 'AxisHelper_' + direction,
            geometry: new Geometry({
                mode: LINES,
                vertices: new Float32Array(axisMap[direction]),
                indices: new Uint16Array([0, 1])
            }),
            material: new BasicMaterial({
                diffuse: new (Function.prototype.bind.apply(Color, [null].concat(_toConsumableArray(axisMap[direction].slice(3, 6)))))(),
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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Mesh = __webpack_require__(58);
var Geometry = __webpack_require__(40);
var BasicMaterial = __webpack_require__(50);
var Color = __webpack_require__(29);

var _require = __webpack_require__(11),
    LINES = _require.LINES;

var AxisNetHelper = Class.create({
    Extends: Mesh,
    className: 'AxisNetHelper',
    color: null,
    size: 5,
    constructor: function constructor(params) {
        AxisNetHelper.superclass.constructor.call(this, params);

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
            diffuse: this.color || new Color(.5, .5, .5),
            lightType: 'NONE'
        });
    }
});

module.exports = AxisNetHelper;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Light = __webpack_require__(80);

var AmbientLight = Class.create({
    isAmbientLight: true,
    className: 'AmbientLight',
    Extends: Light,
    autoUpdateWorldMatrix: false,
    constructor: function constructor(params) {
        this.amount = 1;
        AmbientLight.superclass.constructor.call(this, params);
    }
});

module.exports = AmbientLight;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Vector3 = __webpack_require__(25);
var Light = __webpack_require__(80);

var DirectionalLight = Class.create({
    isDirectionalLight: true,
    className: 'DirectionalLight',
    Extends: Light,
    autoUpdateWorldMatrix: true,
    constructor: function constructor(params) {
        this.direction = new Vector3(0, 0, 1);
        DirectionalLight.superclass.constructor.call(this, params);
    }
});

module.exports = DirectionalLight;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Light = __webpack_require__(80);

var PointLight = Class.create({
    isPointLight: true,
    className: 'PointLight',
    Extends: Light,
    constructor: function constructor(params) {
        this.constantAttenuation = 0;
        this.linearAttenuation = 1;
        this.quadraticAttenuation = 1;
        PointLight.superclass.constructor.call(this, params);
    },
    toInfoArray: function toInfoArray(out, offset) {
        out[offset + 0] = this.constantAttenuation;
        out[offset + 1] = this.linearAttenuation;
        out[offset + 2] = this.quadraticAttenuation;
    }
});

module.exports = PointLight;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var EventMixin = __webpack_require__(51);
var util = __webpack_require__(21);
var BasicLoader = __webpack_require__(59);
var GLTFLoader = __webpack_require__(113);

var LoaderClassMap = {
    glb: GLTFLoader,
    gltf: GLTFLoader
};

var LoadQueue = Class.create({
    Mixes: EventMixin,

    Statics: {
        addLoader: function addLoader(ext, LoaderClass) {
            LoaderClassMap[ext] = LoaderClass;
        }
    },

    constructor: function constructor(source) {
        this._source = [];
        this.add(source);
    },


    maxConnections: 2,

    _source: null,
    _loaded: 0,
    _connections: 0,
    _currentIndex: -1,

    add: function add(source) {
        if (source) {
            source = Array.isArray(source) ? source : [source];
            this._source = this._source.concat(source);
        }
        return this;
    },
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
    getContent: function getContent(id) {
        var item = this.get(id);
        return item && item.content;
    },
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
    getLoaded: function getLoaded() {
        return this._loaded;
    },
    getTotal: function getTotal() {
        return this._source.length;
    },
    getAllContent: function getAllContent() {
        return this._source.map(function (r) {
            return r.content;
        });
    }
});

module.exports = LoadQueue;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var BasicLoader = __webpack_require__(59);
var ShaderMaterial = __webpack_require__(114);

var ShaderMaterialLoader = Class.create({
    Extends: BasicLoader,
    constructor: function constructor() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        ShaderMaterialLoader.superclass.constructor.call(this);
        Object.assign(this, params);
    },
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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Texture = __webpack_require__(64);

var _require = __webpack_require__(11),
    TEXTURE_CUBE_MAP = _require.TEXTURE_CUBE_MAP,
    RGB = _require.RGB,
    LINEAR = _require.LINEAR,
    CLAMP_TO_EDGE = _require.CLAMP_TO_EDGE,
    TEXTURE_CUBE_MAP_POSITIVE_X = _require.TEXTURE_CUBE_MAP_POSITIVE_X;

var CubeTexture = Class.create({
    Extends: Texture,
    isCubeTexture: true,
    className: 'CubeTexture',

    target: TEXTURE_CUBE_MAP,
    internalFormat: RGB,
    format: RGB,

    magFilter: LINEAR,
    minFilter: LINEAR,
    wrapS: CLAMP_TO_EDGE,
    wrapT: CLAMP_TO_EDGE,

    constructor: function constructor(params) {
        CubeTexture.superclass.constructor.call(this, params);
        this.image = this.image || [];
    },
    _updateTexture: function _updateTexture(state) {
        var _this = this;

        if (!Array.isArray(this.image) || this.image.length !== 6) {
            console.error('CubeTexture image must be an Array of length 6', this.image);
            return;
        }
        this.image.forEach(function (img, i) {
            state.gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + i, _this.level, _this.internalFormat, _this.format, _this.type, img);
        });
    },

    right: {
        get: function get() {
            return this.image[0];
        },
        set: function set(img) {
            this.image[0] = img;
        }
    },
    left: {
        get: function get() {
            return this.image[1];
        },
        set: function set(img) {
            this.image[1] = img;
        }
    },
    top: {
        get: function get() {
            return this.image[2];
        },
        set: function set(img) {
            this.image[2] = img;
        }
    },
    bottom: {
        get: function get() {
            return this.image[3];
        },
        set: function set(img) {
            this.image[3] = img;
        }
    },
    back: {
        get: function get() {
            return this.image[4];
        },
        set: function set(img) {
            this.image[4] = img;
        }
    },
    front: {
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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Color = __webpack_require__(29);
var util = __webpack_require__(21);
var FrameBuffer = __webpack_require__(121);
var BasicMaterial = __webpack_require__(50);

var meshPickerMaterial = new BasicMaterial({
    lightType: 'NONE'
});
var clearColor = new Color(1, 1, 1);
var tempColor = new Color();

var MeshPicker = Class.create({
    className: 'MeshPicker',

    debug: false,
    renderer: null,
    colorMeshMap: null,
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

        this.framebuffer = new FrameBuffer({
            useVao: renderer.useVao,
            state: renderer.state,
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
    getSelection: function getSelection(x, y) {
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        var meshes = [];
        var pixels = this.framebuffer.readPixels(x, y, width, height);
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var Class = __webpack_require__(1);
var browser = __webpack_require__(190);
/**
 * @language=zh
 * @class Ticker是一个定时器类。它可以按指定帧率重复运行，从而按计划执行代码。
 * @param {Number} fps 指定定时器的运行帧率。
 * @module hilo/util/Ticker
 * @requires hilo/core/Class
 * @requires hilo/core/Hilo
 */
var Ticker = Class.create( /** @lends Ticker.prototype */{
    constructor: function constructor(fps) {
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
     * @language=zh
     * 启动定时器。
     * @param {Boolean} userRAF 是否使用requestAnimationFrame，默认为false。
     */
    start: function start(useRAF) {
        if (this._intervalId) return;
        this._lastTime = +new Date();

        var self = this,
            interval = this._interval,
            raf = window.requestAnimationFrame || window[browser.jsVendor + 'RequestAnimationFrame'];

        var _runLoop2;
        if (useRAF && raf && interval < 17) {
            this._useRAF = true;
            _runLoop2 = function runLoop() {
                self._intervalId = raf(_runLoop2);
                self._tick();
            };
        } else {
            _runLoop2 = function _runLoop() {
                self._intervalId = setTimeout(_runLoop2, interval);
                self._tick();
            };
        }

        this._paused = false;
        _runLoop2();
    },

    /**
     * @language=en
     * Stop the ticker.
     */
    /**
     * @language=zh
     * 停止定时器。
     */
    stop: function stop() {
        if (this._useRAF) {
            var cancelRAF = window.cancelAnimationFrame || window[browser.jsVendor + 'CancelAnimationFrame'];
            cancelRAF(this._intervalId);
        } else {
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
    /**
     * @language=zh
     * 暂停定时器。
     */
    pause: function pause() {
        this._paused = true;
    },

    /**
     * @language=en
     * Resume the ticker.
     */
    /**
     * @language=zh
     * 恢复定时器。
     */
    resume: function resume() {
        this._paused = false;
    },

    /**
     * @private
     */
    _tick: function _tick() {
        if (this._paused) return;
        var startTime = +new Date(),
            deltaTime = startTime - this._lastTime,
            tickers = this._tickers;

        //calculates the real fps
        if (++this._tickCount >= this._targetFPS) {
            this._measuredFPS = Math.min(1000 / (this._tickTime / this._tickCount) + 0.5 >> 0, this._targetFPS);
            this._tickCount = 0;
            this._tickTime = 0;
        } else {
            this._tickTime += startTime - this._lastTime;
        }
        this._lastTime = startTime;

        var tickersCopy = tickers.slice(0);
        for (var i = 0, len = tickersCopy.length; i < len; i++) {
            tickersCopy[i].tick(deltaTime);
        }
    },

    /**
     * @language=en
     * Get the fps.
     */
    /**
     * @language=zh
     * 获得测定的运行时帧率。
     */
    getMeasuredFPS: function getMeasuredFPS() {
        return this._measuredFPS;
    },

    /**
     * @language=en
     * Add tickObject. The tickObject must implement the tick method.
     * @param {Object} tickObject The tickObject to add.It must implement the tick method.
     */
    /**
     * @language=zh
     * 添加定时器对象。定时器对象必须实现 tick 方法。
     * @param {Object} tickObject 要添加的定时器对象。此对象必须包含 tick 方法。
     */
    addTick: function addTick(tickObject) {
        if (!tickObject || typeof tickObject.tick != 'function') {
            throw new Error('Ticker: The tick object must implement the tick method.');
        }
        this._tickers.push(tickObject);
    },

    /**
     * @language=en
     * Remove the tickObject
     * @param {Object} tickObject The tickObject to remove.
     */
    /**
     * @language=zh
     * 删除定时器对象。
     * @param {Object} tickObject 要删除的定时器对象。
     */
    removeTick: function removeTick(tickObject) {
        var tickers = this._tickers,
            index = tickers.indexOf(tickObject);
        if (index >= 0) {
            tickers.splice(index, 1);
        }
    },
    /**
     * 下次tick时回调
     * @param  {Function} callback
     * @return {tickObj}
     */
    nextTick: function nextTick(callback) {
        var that = this;
        var tickObj = {
            tick: function tick(dt) {
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
    timeout: function timeout(callback, duration) {
        var that = this;
        var targetTime = new Date().getTime() + duration;
        var tickObj = {
            tick: function tick() {
                var nowTime = new Date().getTime();
                var dt = nowTime - targetTime;
                if (dt >= 0) {
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
    interval: function interval(callback, duration) {
        var that = this;
        var targetTime = new Date().getTime() + duration;
        var tickObj = {
            tick: function tick() {
                var nowTime = new Date().getTime();
                var dt = nowTime - targetTime;
                if (dt >= 0) {
                    if (dt < duration) {
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
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Mesh = __webpack_require__(58);
var Matrix4 = __webpack_require__(35);
var DataTexture = __webpack_require__(79);

var tempMatrix1 = new Matrix4();
var tempMatrix2 = new Matrix4();

var SkinedMesh = Class.create({
    Extends: Mesh,
    isSkinedMesh: true,
    className: 'SkinedMesh',
    _rootNode: null,
    jointNodeList: null,
    useInstanced: false,
    constructor: function constructor(params) {
        this.jointNames = [];
        this.bindShapeMatrix = new Matrix4();
        this.inverseBindMatrices = [];
        Mesh.superclass.constructor.call(this, params);
    },

    rootNode: {
        get: function get() {
            return this._rootNode;
        },
        set: function set(node) {
            this._rootNode = node;
            this.initJointNodeList();
        }
    },
    initJointNodeList: function initJointNodeList() {
        var _this = this;

        if (!this._rootNode) {
            return;
        }
        var jointMap = {};
        this._rootNode.traverse(function (child) {
            if (child.jointName) {
                jointMap[child.jointName] = child;
            }
        });
        this.jointNodeList = [];
        this.jointNames.forEach(function (name) {
            _this.jointNodeList.push(jointMap[name]);
        });
    },
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
    initJointMatTexture: function initJointMatTexture() {
        if (!this.jointMatTexture) {
            var jointMat = this.getJointMat();
            this.jointMatTexture = new DataTexture({
                data: jointMat
            });
        }
        return this.jointMatTexture;
    },
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
    }
});

module.exports = SkinedMesh;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Matrix4 = __webpack_require__(35);
var Matrix3 = __webpack_require__(81);
var Vector3 = __webpack_require__(25);

var tempFloat32Array = new Float32Array([0, 0, 0]);
var tempMatrix3 = new Matrix3();
var tempMatrix4 = new Matrix4();
var tempVector3 = new Vector3();

var LightManager = Class.create({
    constructor: function constructor(params) {
        this.ambientLights = [];
        this.directionalLights = [];
        this.pointLights = [];
        this.lightInfo = {
            HILO_AMBIENT_LIGHTS: 0,
            HILO_POINT_LIGHTS: 0,
            HILO_DIRECTIONAL_LIGHTS: 0,
            uid: 0
        };
        Object.assign(this, params);
    },
    addLight: function addLight(light) {
        if (light.isAmbientLight) {
            this.ambientLights.push(light);
        } else if (light.isDirectionalLight) {
            this.directionalLights.push(light);
        } else if (light.isPointLight) {
            this.pointLights.push(light);
        } else {
            console.warn('Not support this light:', light);
        }
    },
    getDirectionalInfo: function getDirectionalInfo(camera) {
        var colors = [];
        var infos = [];
        this.directionalLights.forEach(function (light, index) {
            var offset = index * 3;
            light.color.toRGBArray(colors, offset);

            tempMatrix3.normalFromMat4(camera.getModelViewMatrix(light, tempMatrix4));
            tempVector3.copy(light.direction).transformMat3(tempMatrix3);
            tempVector3.toArray(infos, offset);
        });

        return {
            colors: new Float32Array(colors),
            infos: new Float32Array(infos)
        };
    },
    getPointInfo: function getPointInfo(camera) {
        var colors = [];
        var infos = [];
        var poses = [];
        this.pointLights.forEach(function (light, index) {
            var offset = index * 3;
            light.color.toRGBArray(colors, offset);
            light.toInfoArray(infos, offset);

            camera.getModelViewMatrix(light, tempMatrix4);
            tempVector3.copy(light._position).transformMat4(tempMatrix4);
            tempVector3.toArray(poses, offset);
        });

        return {
            colors: new Float32Array(colors),
            infos: new Float32Array(infos),
            poses: new Float32Array(poses)
        };
    },
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
    updateInfo: function updateInfo(camera) {
        var lightInfo = this.lightInfo,
            ambientLights = this.ambientLights,
            directionalLights = this.directionalLights,
            pointLights = this.pointLights;


        lightInfo.HILO_AMBIENT_LIGHTS = ambientLights.length;
        lightInfo.HILO_POINT_LIGHTS = pointLights.length;
        lightInfo.HILO_DIRECTIONAL_LIGHTS = directionalLights.length;

        lightInfo.uid = lightInfo.HILO_AMBIENT_LIGHTS + '_' + lightInfo.HILO_POINT_LIGHTS + '_' + lightInfo.HILO_DIRECTIONAL_LIGHTS;

        this.directionalInfo = this.getDirectionalInfo(camera);
        this.pointInfo = this.getPointInfo(camera);
        this.ambientInfo = this.getAmbientInfo();
    },
    getInfo: function getInfo() {
        return this.lightInfo;
    },
    reset: function reset() {
        this.ambientLights.length = 0;
        this.directionalLights.length = 0;
        this.pointLights.length = 0;
    }
});

module.exports = LightManager;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var EventMixin = __webpack_require__(51);

var Cache = Class.create({
    Mixes: EventMixin,
    Statics: {
        PENDING: 1,
        LOADED: 2,
        FAILED: 3
    },
    enabled: true,
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
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Class = __webpack_require__(1);
var Node = __webpack_require__(39);
var BasicMaterial = __webpack_require__(50);
var QuantizedMaterial = __webpack_require__(183);
var Geometry = __webpack_require__(40);
var Mesh = __webpack_require__(58);
var SkinedMesh = __webpack_require__(179);
var LazyTexture = __webpack_require__(116);
var math = __webpack_require__(13);
var Matrix4 = __webpack_require__(35);
var Color = __webpack_require__(29);
var util = __webpack_require__(21);
var AnimationStates = __webpack_require__(111);
var Animation = __webpack_require__(110);
var PerspectiveCamera = __webpack_require__(112);

var _require = __webpack_require__(11),
    BLEND = _require.BLEND,
    DEPTH_TEST = _require.DEPTH_TEST,
    CULL_FACE = _require.CULL_FACE;

var ComponentTypeMap = {
    5120: [1, Int8Array],
    5121: [1, Uint8Array],
    5122: [2, Int16Array],
    5123: [2, Uint16Array],
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
    WEIGHT: {
        name: 'skinWeights'
    }
};

var GLTFParser = Class.create({
    Statics: {
        MAGIC: 'glTF'
    },
    /**
     * 是否渐进式加载
     *
     * @type {boolean}
     */
    isProgressive: false,
    /**
     * 是否使用量化后的Material，即在shader中解码数据
     *
     * @type {boolean}
     */
    isUseQuantizedMaterial: false,
    preHandlerImageURI: null,
    /**
     * 自定义的 Material 创建器
     *
     * customMaterialCreator(name, materialData, glTFJSON)
     *
     * @type {Function}
     */
    customMaterialCreator: null,
    /**
     * 自定义的 Image Loader 需要返回 Promise
     *
     * customImageLoader(uri, textureName, glTFJSON)
     *
     * @type {Function}
     */
    customImageLoader: null,
    /**
     * glTF模型路径，用于解析相对路径
     *
     * @type {string}
     */
    src: '',
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
        var info = new Uint32Array(buffer, 4, 4);

        var _info = _slicedToArray(info, 4),
            version = _info[0],
            length = _info[1],
            contentLength = _info[2],
            contentFormat = _info[3];

        console.log(version, length, contentLength, contentFormat);

        var content = new Uint8Array(buffer, 20, contentLength);
        content = util.convertUint8ArrayToString(content, true);
        this.json = JSON.parse(content);
        this.binaryBody = buffer.slice(20 + contentLength);
        this.isBinary = true;
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
            this.buffers.binary_glTF = this.binaryBody;
            this.parseBufferViews();
            return Promise.resolve();
        }

        var promises = Object.keys(this.json.buffers).map(function (key) {
            var uri = util.getRelativePath(_this3.src, _this3.json.buffers[key].uri);
            return loader.loadRes(uri, 'buffer').then(function (buffer) {
                _this3.buffers[key] = buffer;
                _this3.parseBufferViews();
            });
        });

        return Promise.all(promises);
    },
    getImageUri: function getImageUri(imageName) {
        var imgData = this.json.images[imageName];
        var uri = imgData.uri;
        if (imgData.extensions && imgData.extensions.KHR_binary_glTF) {
            var binaryInfo = imgData.extensions.KHR_binary_glTF;
            var buffer = this.bufferViews[binaryInfo.bufferView];
            var data = new Uint8Array(buffer);
            if (window.Blob && window.URL) {
                var blob = new Blob([data], {
                    type: binaryInfo.mimeType
                });

                uri = window.URL.createObjectURL(blob);
            } else {
                uri = 'data:' + binaryInfo.mimeType + ';base64,' + btoa(util.convertUint8ArrayToString(data));
            }
        }

        return uri;
    },
    getUsedTextureNameMap: function getUsedTextureNameMap() {
        var map = {};
        util.each(this.json.materials, function (material) {
            var values = material.values;
            if (material.extensions && material.extensions.KHR_materials_common) {
                values = material.extensions.KHR_materials_common.values;
            }
            if (typeof values.diffuse === 'string') {
                map[values.diffuse] = true;
            }
            if (typeof values.specular === 'string') {
                map[values.specular] = true;
            }
            if (typeof values.emission === 'string') {
                map[values.emission] = true;
            }
            if (typeof values.ambient === 'string') {
                map[values.ambient] = true;
            }
            if (typeof values.transparency === 'string') {
                map[values.transparency] = true;
            }
            if (typeof values.normalMap === 'string') {
                map[values.normalMap] = true;
            }
        });
        return map;
    },
    loadTextures: function loadTextures() {
        var _this4 = this;

        this.textures = {};

        if (!this.json.textures) {
            return Promise.resolve();
        }

        var usedTextures = this.getUsedTextureNameMap();

        return Promise.all(Object.keys(this.json.textures).filter(function (textureName) {
            return usedTextures[textureName];
        }).map(function (textureName) {
            var textureData = _this4.json.textures[textureName];
            var uri = _this4.getImageUri(textureData.source);
            uri = util.getRelativePath(_this4.src, uri);

            if (_this4.preHandlerImageURI) {
                uri = _this4.preHandlerImageURI(uri, textureName);
            }

            var texture = new LazyTexture(textureData);
            texture.autoLoad = _this4.isProgressive;
            texture.crossOrigin = true;
            texture.src = uri;
            texture.name = textureName;
            Object.assign(texture, _this4.json.samplers[textureData.sampler]);
            _this4.textures[textureName] = texture;

            if (!_this4.isProgressive) {
                return texture.load();
            }
            return Promise.resolve();
        }));
    },
    parseBufferViews: function parseBufferViews() {
        var _this5 = this;

        this.bufferViews = {};
        util.each(this.json.bufferViews, function (data, name) {
            var start = data.byteOffset;
            var end = start + data.byteLength;
            var buffer = _this5.buffers[data.buffer].slice(start, end);
            _this5.bufferViews[name] = buffer;
        });

        if (!this.isBinary) {
            delete this.buffers;
        }
    },
    getColorOrTexture: function getColorOrTexture(value) {
        if (!value) {
            return null;
        }
        if (Array.isArray(value)) {
            return new Color(value[0], value[1], value[2]);
        }
        return this.textures[value];
    },
    getJointCount: function getJointCount(materialName) {
        var _this6 = this;

        if (!this.materialNameJointMap) {
            var meshNameJointMap = {};
            util.each(this.json.nodes, function (node) {
                var jointCount = node.skin ? _this6.json.skins[node.skin].jointNames.length : 0;
                util.each(node.meshes, function (meshName) {
                    meshNameJointMap[meshName] = jointCount;
                });
            });

            var materialNameJointMap = {};
            util.each(this.json.meshes, function (mesh, meshName) {
                util.each(mesh.primitives, function (primitive) {
                    if (!materialNameJointMap[primitive.material]) {
                        materialNameJointMap[primitive.material] = meshNameJointMap[meshName];
                    }
                });
            });

            this.materialNameJointMap = materialNameJointMap;
        }
        return this.materialNameJointMap[materialName];
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
            var material = new Material();
            material.name = name;
            _this7.materials[name] = material;

            var values = materialData.values;
            var kmc = null;

            if (materialData.extensions && materialData.extensions.KHR_materials_common) {
                kmc = materialData.extensions.KHR_materials_common;
                values = kmc.values;
                material.lightType = kmc.technique;
            }

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

            if (kmc && kmc.jointCount) {
                material.jointCount = kmc.jointCount;
            } else if (materialData.joint) {
                material.jointCount = materialData.joint;
            } else {
                material.jointCount = _this7.getJointCount(name);
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
        for (var i = 0; i < data.length; i += itemLen) {
            for (var j = 0; j < matSize; j++) {
                result[i + j] = 0;
                for (var k = 0; k < matSize; k++) {
                    var v = k === itemLen ? 1 : data[i + k];
                    result[i + j] += decodeMat[k * matSize + j] * v;
                }
            }
        }
        return result;
    },
    getAccessorData: function getAccessorData(name, isDecode) {
        var accessor = this.json.accessors[name];

        var _ComponentTypeMap$acc = _slicedToArray(ComponentTypeMap[accessor.componentType], 2),
            TypedArray = _ComponentTypeMap$acc[1];

        var number = ComponentNumberMap[accessor.type];
        var buffer = this.bufferViews[accessor.bufferView];
        var result = new TypedArray(buffer, accessor.byteOffset, accessor.count * number);
        if (accessor.extensions && accessor.extensions.WEB3D_quantized_attributes) {
            var decodeMat = accessor.extensions.WEB3D_quantized_attributes.decodeMatrix;
            if (isDecode) {
                result = this.unQuantizeData(result, decodeMat);
            } else {
                result.decodeMat = decodeMat;
            }
        }
        return result;
    },
    getArrayByAccessor: function getArrayByAccessor(name, isDecode) {
        var accessor = this.json.accessors[name];
        var number = ComponentNumberMap[accessor.type];
        var data = this.getAccessorData(name, isDecode);
        if (number === 1) {
            return data;
        }

        var result = [];
        for (var i = 0; i < accessor.count; i++) {
            result.push(data.slice(i * number, i * number + number));
        }
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
    },
    parseMesh: function parseMesh(meshName, node, nodeData) {
        var _this8 = this;

        var meshData = this.json.meshes[meshName];
        meshData.primitives.forEach(function (primitive) {
            if (primitive.meshNode) {
                node.addChild(primitive.meshNode.clone());
                return;
            }
            var geometry = new Geometry();
            if (primitive.indices) {
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
                if (!(geometry[info.name] instanceof Float32Array)) {
                    geometry[info.name] = new Float32Array(geometry[info.name]);
                }
            }

            var material = _this8.materials[primitive.material];
            var MeshClass = material.jointCount ? SkinedMesh : Mesh;
            var mesh = new MeshClass({
                geometry: geometry,
                material: material,
                name: meshName
            });
            _this8.meshes.push(mesh);

            if (material.jointCount) {
                var skin = _this8.json.skins[nodeData.skin];
                var inverseBindMatrices = _this8.getAccessorData(skin.inverseBindMatrices, true);
                mesh.bindShapeMatrix = new Matrix4().fromArray(skin.bindShapeMatrix);
                for (var i = 0; i < material.jointCount; i++) {
                    mesh.inverseBindMatrices.push(new Matrix4().fromArray(inverseBindMatrices, i * 16));
                }
                mesh.jointNames = skin.jointNames;
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
                name: nodeName
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
        }

        if (data.meshes) {
            data.meshes.forEach(function (meshName) {
                return _this10.parseMesh(meshName, node, data);
            });
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
                var sampler = info.samplers[channel.sampler];
                var keyTime = _this11.getArrayByAccessor(info.parameters[sampler.input], true);
                var states = _this11.getArrayByAccessor(info.parameters[path], true);
                if (path === 'rotation') {
                    path = 'quaternion';
                }
                var animStates = new AnimationStates({
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
        return new Animation({
            rootNode: this.node,
            animStatesList: animStatesList
        });
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

        var nodes = this.json.scenes[this.json.scene].nodes;
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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var BasicMaterial = __webpack_require__(50);

var QuantizedMaterial = Class.create({
    Extends: BasicMaterial,
    isQuantizedMaterial: true,
    className: 'QuantizedMaterial',
    usedUniformVectors: 22,
    constructor: function constructor(params) {
        QuantizedMaterial.superclass.constructor.call(this, params);

        Object.assign(this.uniforms, {
            u_positionDecodeMat: {
                semantic: 'POSITIONDECODEMAT',
                isDependOther: true
            },
            u_normalDecodeMat: {
                semantic: 'NORMALDECODEMAT',
                isDependOther: true
            },
            u_uvDecodeMat: {
                semantic: 'UVDECODEMAT',
                isDependOther: true
            }
        });
    }
});

module.exports = QuantizedMaterial;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec2 = __webpack_require__(57).vec2;
var Class = __webpack_require__(1);

var Vector2 = Class.create({
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        this.elements = vec2.fromValues(x, y);
    },
    copy: function copy(v) {
        vec2.copy(this.elements, v.elements);
        return this;
    },
    clone: function clone() {
        var elements = this.elements;
        return new Vector2(elements[0], elements[1]);
    },
    toArray: function toArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        array[0 + offset] = elements[0];
        array[1 + offset] = elements[1];
        return array;
    },
    fromArray: function fromArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        elements[0] = array[offset + 0];
        elements[1] = array[offset + 1];
        return this;
    },
    set: function set(x, y, z) {
        vec2.set(this.elements, x, y, z);
        return this;
    },
    lerp: function lerp(v, t) {
        vec2.lerp(this.elements, this.elements, v.elements, t);
        return this;
    },
    length: function length() {
        return vec2.length(this.elements);
    },
    squaredLength: function squaredLength() {
        return vec2.squaredLength(this.elements);
    },
    normalize: function normalize() {
        vec2.normalize(this.elements, this.elements);
        return this;
    },
    transformMat2: function transformMat2(m) {
        vec2.transformMat2(this.elements, this.elements, m.elements);
        return this;
    },
    transformMat3: function transformMat3(m) {
        vec2.transformMat3(this.elements, this.elements, m.elements);
        return this;
    },
    transformMat4: function transformMat4(m) {
        vec2.transformMat4(this.elements, this.elements, m.elements);
        return this;
    },
    sub: function sub(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.sub(this.elements, a.elements, b.elements);
        return this;
    },
    cross: function cross(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec2.cross(this.elements, a.elements, b.elements);
        return this;
    },
    inverse: function inverse(v) {
        vec2.inverse(this.elements, v.elements);
        return this;
    },

    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    }
});

module.exports = Vector2;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vec4 = __webpack_require__(57).vec4;
var Class = __webpack_require__(1);

var Vector4 = Class.create({
    constructor: function constructor() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        this.elements = vec4.fromValues(x, y, z, w);
    },
    copy: function copy(v) {
        vec4.copy(this.elements, v.elements);
        return this;
    },
    clone: function clone() {
        var elements = this.elements;
        return new Vector4(elements[0], elements[1], elements[2], elements[3]);
    },
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
    fromArray: function fromArray() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var elements = this.elements;
        elements[0] = array[offset + 0];
        elements[1] = array[offset + 1];
        elements[2] = array[offset + 2];
        elements[3] = array[offset + 3];
        return this;
    },
    set: function set(x, y, z, w) {
        vec4.set(this.elements, x, y, z, w);
        return this;
    },
    lerp: function lerp(v, t) {
        vec4.lerp(this.elements, this.elements, v.elements, t);
        return this;
    },
    length: function length() {
        return vec4.length(this.elements);
    },
    squaredLength: function squaredLength() {
        return vec4.squaredLength(this.elements);
    },
    normalize: function normalize() {
        vec4.normalize(this.elements, this.elements);
        return this;
    },
    transformMat4: function transformMat4(m) {
        vec4.transformMat4(this.elements, this.elements, m.elements);
        return this;
    },
    sub: function sub(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.sub(this.elements, a.elements, b.elements);
        return this;
    },
    cross: function cross(a, b) {
        if (!b) {
            b = a;
            a = this;
        }
        vec4.cross(this.elements, a.elements, b.elements);
        return this;
    },
    inverse: function inverse(v) {
        vec4.inverse(this.elements, v.elements);
        return this;
    },

    x: {
        get: function get() {
            return this.elements[0];
        },
        set: function set(value) {
            this.elements[0] = value;
        }
    },
    y: {
        get: function get() {
            return this.elements[1];
        },
        set: function set(value) {
            this.elements[1] = value;
        }
    },
    z: {
        get: function get() {
            return this.elements[2];
        },
        set: function set(value) {
            this.elements[2] = value;
        }
    },
    w: {
        get: function get() {
            return this.elements[3];
        },
        set: function set(value) {
            this.elements[3] = value;
        }
    }
});

module.exports = Vector4;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);

var Buffer = Class.create({
    Statics: {
        createVertexBuffer: function createVertexBuffer(gl, data) {
            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : gl.STATIC_DRAW;

            var buffer = new Buffer(gl, gl.ARRAY_BUFFER, data, usage);
            return buffer;
        },
        createIndexBuffer: function createIndexBuffer(gl, data) {
            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : gl.STATIC_DRAW;

            var buffer = new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, usage);
            return buffer;
        }
    },
    constructor: function constructor(gl) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gl.ARRAY_BUFFER;
        var data = arguments[2];
        var usage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gl.STATIC_DRAW;

        this.gl = gl;
        this.target = target;
        this.usage = usage;
        this.buffer = gl.createBuffer();

        if (data) {
            this.upload(data);
        }
    },
    bind: function bind() {
        this.gl.bindBuffer(this.target, this.buffer);
    },
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
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);

var RenderInfo = Class.create({
    constructor: function constructor() {
        this.reset();
    },
    reset: function reset() {
        this.faceCount = Math.floor(this.currentFaceCount);
        this.drawCount = Math.floor(this.currentDrawCount);
        this.currentFaceCount = 0;
        this.currentDrawCount = 0;
    }
});

module.exports = RenderInfo;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);
var Vector3 = __webpack_require__(25);
var util = __webpack_require__(21);

var tempVector3 = new Vector3();

var RenderList = Class.create({
    constructor: function constructor() {
        this.dict = {};
        this.transparentList = [];
    },
    reset: function reset() {
        this.dict = {};
        this.transparentList.length = 0;
    },
    traverse: function traverse(callback) {
        var dict = this.dict;
        for (var id in dict) {
            callback(dict[id]);
        }

        this.transparentList.forEach(function (mesh) {
            callback([mesh]);
        });
    },
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
        }
    }
});

module.exports = RenderList;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Class = __webpack_require__(1);

var State = Class.create({
    systemFrameBuffer: null,
    constructor: function constructor(gl) {
        this.gl = gl;
        this._dict = {};
        this.activeTextureIndex = gl.TEXTURE0;
        this.textureUnitDict = {};
        this.currentFrameBuffer = null;
        this.preFrameBuffer = null;
    },
    enable: function enable(capability) {
        var value = this._dict[capability];
        if (value !== true) {
            this._dict[capability] = true;
            this.gl.enable(capability);
        }
    },
    disable: function disable(capability) {
        var value = this._dict[capability];
        if (value !== false) {
            this._dict[capability] = false;
            this.gl.disable(capability);
        }
    },
    bindFramebuffer: function bindFramebuffer(target, framebuffer) {
        if (this.currentFrameBuffer !== framebuffer) {
            this.preFrameBuffer = this.currentFrameBuffer;
            this.currentFrameBuffer = framebuffer;
            this.gl.bindFramebuffer(target, framebuffer);
        }
    },
    bindSystemFrameBuffer: function bindSystemFrameBuffer() {
        this.bindFramebuffer(this.gl.FRAMEBUFFER, this.systemFrameBuffer);
    },
    useProgram: function useProgram(program) {
        this.set1('useProgram', program);
    },
    depthFunc: function depthFunc(func) {
        this.set1('depthFunc', func);
    },
    depthMask: function depthMask(flag) {
        this.set1('depthMask', flag);
    },
    depthRange: function depthRange(zNear, zFar) {
        this.set2('depthRange', zNear, zFar);
    },
    cullFace: function cullFace(mode) {
        this.set1('cullFace', mode);
    },
    blendFuncSeparate: function blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) {
        this.set4('blendFuncSeparate', srcRGB, dstRGB, srcAlpha, dstAlpha);
    },
    blendEquationSeparate: function blendEquationSeparate(modeRGB, modeAlpha) {
        this.set2('blendEquationSeparate', modeRGB, modeAlpha);
    },
    activeTexture: function activeTexture(texture) {
        if (this.activeTextureIndex !== texture) {
            this.activeTextureIndex = texture;
            this.gl.activeTexture(texture);
        }
    },
    bindTexture: function bindTexture(target, texture) {
        var textureUnit = this.getActiveTextureUnit();
        if (textureUnit[target] !== texture) {
            textureUnit[target] = texture;
            this.gl.bindTexture(target, texture);
        }
    },
    getActiveTextureUnit: function getActiveTextureUnit() {
        var textureUnit = this.textureUnitDict[this.activeTextureIndex];
        if (!textureUnit) {
            textureUnit = this.textureUnitDict[this.activeTextureIndex] = {};
        }
        return textureUnit;
    },
    set1: function set1(name, param) {
        var value = this._dict[name];
        if (value !== param) {
            this._dict[name] = param;
            this.gl[name](param);
        }
    },
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
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var ua = navigator.userAgent;
var win = window;
var doc = document;

var browser = {
    iphone: /iphone/i.test(ua),
    ipad: /ipad/i.test(ua),
    ipod: /ipod/i.test(ua),
    ios: /iphone|ipad|ipod/i.test(ua),
    android: /android/i.test(ua),
    webkit: /webkit/i.test(ua),
    chrome: /chrome/i.test(ua),
    safari: /safari/i.test(ua),
    firefox: /firefox/i.test(ua),
    ie: /msie/i.test(ua),
    opera: /opera/i.test(ua),
    supportTouch: 'ontouchstart' in win,
    supportCanvas: doc.createElement('canvas').getContext != null,
    supportOrientation: 'orientation' in win,
    supportDeviceMotion: 'ondevicemotion' in win,
    supportStorage: false,
    jsVendor: null,
    cssVendor: null
};

try {
    var value = 'hilo';
    localStorage.setItem(value, value);
    localStorage.removeItem(value);
    browser.supportStorage = true;
} catch (e) {}

var jsVendor = browser.jsVendor = browser.webkit ? 'webkit' : browser.firefox ? 'moz' : browser.opera ? 'o' : browser.ie ? 'ms' : '';
browser.cssVendor = '-' + jsVendor + '-';

module.exports = browser;

/***/ }),
/* 191 */
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
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */
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
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);

/**
 * @class 2x2 Matrix
 * @name mat2
 */
var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
mat2.fromValues = function(m00, m01, m10, m11) {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
};

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
mat2.set = function(out, m00, m01, m10, m11) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
};


/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return null;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.fromRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
mat2.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
mat2.sub = mat2.subtract;

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
};

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
mat2.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
mat2.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

module.exports = mat2;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */
var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
mat2d.fromValues = function(a, b, c, d, tx, ty) {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
};

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
mat2d.set = function(out, a, b, c, d, tx, ty) {
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.fromRotation = function(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    out[4] = 0;
    out[5] = 0;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
mat2d.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    out[4] = 0;
    out[5] = 0;
    return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
mat2d.fromTranslation = function(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = v[0];
    out[5] = v[1];
    return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    return out;
};

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
mat2d.sub = mat2d.subtract;

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
mat2d.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    return out;
};

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
mat2d.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    return out;
};

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2d.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat2d.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
};

module.exports = mat2d;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);

/**
 * @class 4x4 Matrix
 * @name mat4
 */
var mat4 = {
  scalar: {},
  SIMD: {},
};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new glMatrix.ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
mat4.fromValues = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new glMatrix.ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
};

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
mat4.set = function(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
};


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.scalar.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }

    return out;
};

/**
 * Transpose the values of a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.SIMD.transpose = function(out, a) {
    var a0, a1, a2, a3,
        tmp01, tmp23,
        out0, out1, out2, out3;

    a0 = SIMD.Float32x4.load(a, 0);
    a1 = SIMD.Float32x4.load(a, 4);
    a2 = SIMD.Float32x4.load(a, 8);
    a3 = SIMD.Float32x4.load(a, 12);

    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
    out0  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
    out1  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
    SIMD.Float32x4.store(out, 0,  out0);
    SIMD.Float32x4.store(out, 4,  out1);

    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
    out2  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
    out3  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
    SIMD.Float32x4.store(out, 8,  out2);
    SIMD.Float32x4.store(out, 12, out3);

    return out;
};

/**
 * Transpse a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = glMatrix.USE_SIMD ? mat4.SIMD.transpose : mat4.scalar.transpose;

/**
 * Inverts a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.scalar.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Inverts a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.SIMD.invert = function(out, a) {
  var row0, row1, row2, row3,
      tmp1,
      minor0, minor1, minor2, minor3,
      det,
      a0 = SIMD.Float32x4.load(a, 0),
      a1 = SIMD.Float32x4.load(a, 4),
      a2 = SIMD.Float32x4.load(a, 8),
      a3 = SIMD.Float32x4.load(a, 12);

  // Compute matrix adjugate
  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);

  tmp1   = SIMD.Float32x4.mul(row2, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.mul(row1, tmp1);
  minor1 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row1, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
  minor3 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
  minor2 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row0, row1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);

  // Compute matrix determinant
  det   = SIMD.Float32x4.mul(row0, minor0);
  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 2, 3, 0, 1), det);
  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 1, 0, 3, 2), det);
  tmp1  = SIMD.Float32x4.reciprocalApproximation(det);
  det   = SIMD.Float32x4.sub(
               SIMD.Float32x4.add(tmp1, tmp1),
               SIMD.Float32x4.mul(det, SIMD.Float32x4.mul(tmp1, tmp1)));
  det   = SIMD.Float32x4.swizzle(det, 0, 0, 0, 0);
  if (!det) {
      return null;
  }

  // Compute matrix inverse
  SIMD.Float32x4.store(out, 0,  SIMD.Float32x4.mul(det, minor0));
  SIMD.Float32x4.store(out, 4,  SIMD.Float32x4.mul(det, minor1));
  SIMD.Float32x4.store(out, 8,  SIMD.Float32x4.mul(det, minor2));
  SIMD.Float32x4.store(out, 12, SIMD.Float32x4.mul(det, minor3));
  return out;
}

/**
 * Inverts a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = glMatrix.USE_SIMD ? mat4.SIMD.invert : mat4.scalar.invert;

/**
 * Calculates the adjugate of a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.scalar.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the adjugate of a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.SIMD.adjoint = function(out, a) {
  var a0, a1, a2, a3;
  var row0, row1, row2, row3;
  var tmp1;
  var minor0, minor1, minor2, minor3;

  var a0 = SIMD.Float32x4.load(a, 0);
  var a1 = SIMD.Float32x4.load(a, 4);
  var a2 = SIMD.Float32x4.load(a, 8);
  var a3 = SIMD.Float32x4.load(a, 12);

  // Transpose the source matrix.  Sort of.  Not a true transpose operation
  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);

  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);

  tmp1   = SIMD.Float32x4.mul(row2, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.mul(row1, tmp1);
  minor1 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row1, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
  minor3 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
  minor2 = SIMD.Float32x4.mul(row0, tmp1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);

  tmp1   = SIMD.Float32x4.mul(row0, row1);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row3);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));

  tmp1   = SIMD.Float32x4.mul(row0, row2);
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);

  SIMD.Float32x4.store(out, 0,  minor0);
  SIMD.Float32x4.store(out, 4,  minor1);
  SIMD.Float32x4.store(out, 8,  minor2);
  SIMD.Float32x4.store(out, 12, minor3);
  return out;
};

/**
 * Calculates the adjugate of a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
 mat4.adjoint = glMatrix.USE_SIMD ? mat4.SIMD.adjoint : mat4.scalar.adjoint;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's explicitly using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand, must be a Float32Array
 * @param {mat4} b the second operand, must be a Float32Array
 * @returns {mat4} out
 */
mat4.SIMD.multiply = function (out, a, b) {
    var a0 = SIMD.Float32x4.load(a, 0);
    var a1 = SIMD.Float32x4.load(a, 4);
    var a2 = SIMD.Float32x4.load(a, 8);
    var a3 = SIMD.Float32x4.load(a, 12);

    var b0 = SIMD.Float32x4.load(b, 0);
    var out0 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 1, 1, 1, 1), a1),
                       SIMD.Float32x4.add(
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 2, 2, 2, 2), a2),
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 0, out0);

    var b1 = SIMD.Float32x4.load(b, 4);
    var out1 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 1, 1, 1, 1), a1),
                       SIMD.Float32x4.add(
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 2, 2, 2, 2), a2),
                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 4, out1);

    var b2 = SIMD.Float32x4.load(b, 8);
    var out2 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 1, 1, 1, 1), a1),
                       SIMD.Float32x4.add(
                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 2, 2, 2, 2), a2),
                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 8, out2);

    var b3 = SIMD.Float32x4.load(b, 12);
    var out3 = SIMD.Float32x4.add(
                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 0, 0, 0, 0), a0),
                   SIMD.Float32x4.add(
                        SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 1, 1, 1, 1), a1),
                        SIMD.Float32x4.add(
                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 2, 2, 2, 2), a2),
                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 3, 3, 3, 3), a3))));
    SIMD.Float32x4.store(out, 12, out3);

    return out;
};

/**
 * Multiplies two mat4's explicitly not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.scalar.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Multiplies two mat4's using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = glMatrix.USE_SIMD ? mat4.SIMD.multiply : mat4.scalar.multiply;

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.scalar.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Translates a mat4 by the given vector using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.SIMD.translate = function (out, a, v) {
    var a0 = SIMD.Float32x4.load(a, 0),
        a1 = SIMD.Float32x4.load(a, 4),
        a2 = SIMD.Float32x4.load(a, 8),
        a3 = SIMD.Float32x4.load(a, 12),
        vec = SIMD.Float32x4(v[0], v[1], v[2] , 0);

    if (a !== out) {
        out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
        out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
        out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
    }

    a0 = SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0));
    a1 = SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1));
    a2 = SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2));

    var t0 = SIMD.Float32x4.add(a0, SIMD.Float32x4.add(a1, SIMD.Float32x4.add(a2, a3)));
    SIMD.Float32x4.store(out, 12, t0);

    return out;
};

/**
 * Translates a mat4 by the given vector using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = glMatrix.USE_SIMD ? mat4.SIMD.translate : mat4.scalar.translate;

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scalar.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3 using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.SIMD.scale = function(out, a, v) {
    var a0, a1, a2;
    var vec = SIMD.Float32x4(v[0], v[1], v[2], 0);

    a0 = SIMD.Float32x4.load(a, 0);
    SIMD.Float32x4.store(
        out, 0, SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0)));

    a1 = SIMD.Float32x4.load(a, 4);
    SIMD.Float32x4.store(
        out, 4, SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1)));

    a2 = SIMD.Float32x4.load(a, 8);
    SIMD.Float32x4.store(
        out, 8, SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2)));

    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 */
mat4.scale = glMatrix.USE_SIMD ? mat4.SIMD.scale : mat4.scalar.scale;

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < glMatrix.EPSILON) { return null; }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.scalar.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.SIMD.rotateX = function (out, a, rad) {
    var s = SIMD.Float32x4.splat(Math.sin(rad)),
        c = SIMD.Float32x4.splat(Math.cos(rad));

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
      out[0]  = a[0];
      out[1]  = a[1];
      out[2]  = a[2];
      out[3]  = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    var a_1 = SIMD.Float32x4.load(a, 4);
    var a_2 = SIMD.Float32x4.load(a, 8);
    SIMD.Float32x4.store(out, 4,
                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_2, s)));
    SIMD.Float32x4.store(out, 8,
                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2, c), SIMD.Float32x4.mul(a_1, s)));
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = glMatrix.USE_SIMD ? mat4.SIMD.rotateX : mat4.scalar.rotateX;

/**
 * Rotates a matrix by the given angle around the Y axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.scalar.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.SIMD.rotateY = function (out, a, rad) {
    var s = SIMD.Float32x4.splat(Math.sin(rad)),
        c = SIMD.Float32x4.splat(Math.cos(rad));

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    var a_0 = SIMD.Float32x4.load(a, 0);
    var a_2 = SIMD.Float32x4.load(a, 8);
    SIMD.Float32x4.store(out, 0,
                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_2, s)));
    SIMD.Float32x4.store(out, 8,
                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, s), SIMD.Float32x4.mul(a_2, c)));
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
 mat4.rotateY = glMatrix.USE_SIMD ? mat4.SIMD.rotateY : mat4.scalar.rotateY;

/**
 * Rotates a matrix by the given angle around the Z axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.scalar.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.SIMD.rotateZ = function (out, a, rad) {
    var s = SIMD.Float32x4.splat(Math.sin(rad)),
        c = SIMD.Float32x4.splat(Math.cos(rad));

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    var a_0 = SIMD.Float32x4.load(a, 0);
    var a_1 = SIMD.Float32x4.load(a, 4);
    SIMD.Float32x4.store(out, 0,
                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_1, s)));
    SIMD.Float32x4.store(out, 4,
                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_0, s)));
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
 mat4.rotateZ = glMatrix.USE_SIMD ? mat4.SIMD.rotateZ : mat4.scalar.rotateZ;

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromTranslation = function(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
mat4.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.fromRotation = function(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t;

    if (Math.abs(len) < glMatrix.EPSILON) { return null; }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.fromXRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0]  = 1;
    out[1]  = 0;
    out[2]  = 0;
    out[3]  = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.fromYRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0]  = c;
    out[1]  = 0;
    out[2]  = -s;
    out[3]  = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.fromZRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0]  = c;
    out[1]  = s;
    out[2]  = 0;
    out[3]  = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
};

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
mat4.getTranslation = function (out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
};

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
mat4.getRotation = function (out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) { 
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S; 
    out[2] = (mat[1] - mat[4]) / S; 
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) { 
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S; 
    out[2] = (mat[8] + mat[2]) / S; 
  } else if (mat[5] > mat[10]) { 
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S; 
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S; 
  } else { 
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
};

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslationScale = function (out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2,
        sx = s[0],
        sy = s[1],
        sz = s[2];

    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
};

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
  // Quaternion math
  var x = q[0], y = q[1], z = q[2], w = q[3],
      x2 = x + x,
      y2 = y + y,
      z2 = z + z,

      xx = x * x2,
      xy = x * y2,
      xz = x * z2,
      yy = y * y2,
      yz = y * z2,
      zz = z * z2,
      wx = w * x2,
      wy = w * y2,
      wz = w * z2,

      sx = s[0],
      sy = s[1],
      sz = s[2],

      ox = o[0],
      oy = o[1],
      oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
};

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
        xScale = 2.0 / (leftTan + rightTan),
        yScale = 2.0 / (upTan + downTan);

    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = ((upTan - downTan) * yScale * 0.5);
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = (far * near) / (near - far);
    out[15] = 0.0;
    return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < glMatrix.EPSILON &&
        Math.abs(eyey - centery) < glMatrix.EPSILON &&
        Math.abs(eyez - centerz) < glMatrix.EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
};

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
mat4.sub = mat4.subtract;

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
mat4.multiplyScalar = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
};

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
mat4.multiplyScalarAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    out[6] = a[6] + (b[6] * scale);
    out[7] = a[7] + (b[7] * scale);
    out[8] = a[8] + (b[8] * scale);
    out[9] = a[9] + (b[9] * scale);
    out[10] = a[10] + (b[10] * scale);
    out[11] = a[11] + (b[11] * scale);
    out[12] = a[12] + (b[12] * scale);
    out[13] = a[13] + (b[13] * scale);
    out[14] = a[14] + (b[14] * scale);
    out[15] = a[15] + (b[15] * scale);
    return out;
};

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat4.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && 
           a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && 
           a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
           a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
};

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
mat4.equals = function (a, b) {
    var a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3],
        a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7], 
        a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11], 
        a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

    var b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3],
        b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7], 
        b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11], 
        b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
            Math.abs(a9 - b9) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
            Math.abs(a10 - b10) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
            Math.abs(a11 - b11) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
            Math.abs(a12 - b12) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
            Math.abs(a13 - b13) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
            Math.abs(a14 - b14) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
            Math.abs(a15 - b15) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
};



module.exports = mat4;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);
var mat3 = __webpack_require__(154);
var vec3 = __webpack_require__(155);
var vec4 = __webpack_require__(156);

/**
 * @class Quaternion
 * @name quat
 */
var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new glMatrix.ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
quat.getAxisAngle = function(out_axis, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s != 0.0) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
    } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
    }
    return rad;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
quat.sqlerp = (function () {
  var temp1 = quat.create();
  var temp2 = quat.create();
  
  return function (out, a, b, c, d, t) {
    quat.slerp(temp1, a, d, t);
    quat.slerp(temp2, b, c, t);
    quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
    
    return out;
  };
}());

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[5]-m[7])*fRoot;
        out[1] = (m[6]-m[2])*fRoot;
        out[2] = (m[1]-m[3])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }
    
    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
quat.exactEquals = vec4.exactEquals;

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
quat.equals = vec4.equals;

module.exports = quat;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

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

var glMatrix = __webpack_require__(34);

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */
var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new glMatrix.ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new glMatrix.ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
vec2.ceil = function (out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
vec2.floor = function (out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
vec2.round = function (out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
vec2.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec2.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
vec2.equals = function (a, b) {
    var a0 = a[0], a1 = a[1];
    var b0 = b[0], b1 = b[1];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
};

module.exports = vec2;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.4 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(109);



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
/* 378 */
/***/ (function(module, exports) {

/**
 * Hilo 1.0.4 for commonjs
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
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hilo 1.0.4 for commonjs
 * Copyright 2016 alibaba.com
 * Licensed under the MIT License
 */
var Class = __webpack_require__(109);



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
/* 380 */,
/* 381 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\n#ifdef HILO_HAS_TEXCOORD0\n    varying vec2 v_texcoord0;\n#endif\n\n#if defined(HILO_DIFFUSE_MAP)\n    uniform sampler2D u_diffuse;\n#elif defined(HILO_DIFFUSE_CUBE_MAP)\n    varying vec3 v_position;\n    uniform samplerCube u_diffuse;\n#else\n    uniform vec4 u_diffuse;\n#endif\n\n#ifdef HILO_HAS_NORMAL\n    varying vec3 v_normal;\n#endif\n\n#ifdef HILO_TRANSPARENCY_MAP\n    uniform sampler2D u_transparency;\n#else\n    uniform float u_transparency;\n#endif\n\n#ifdef HILO_POINT_LIGHTS\n    uniform vec3 u_pointLightsPos[HILO_POINT_LIGHTS];\n    uniform vec3 u_pointLightsColor[HILO_POINT_LIGHTS];\n    uniform vec3 u_pointLightsInfo[HILO_POINT_LIGHTS];\n#endif\n\n#ifdef HILO_DIRECTIONAL_LIGHTS\n    uniform vec3 u_directionalLightsColor[HILO_DIRECTIONAL_LIGHTS];\n    uniform vec3 u_directionalLightsInfo[HILO_DIRECTIONAL_LIGHTS];\n#endif\n\n#ifdef HILO_AMBIENT_LIGHTS\n    uniform vec3 u_ambientLightsColor;\n#endif\n\n#ifdef HILO_HAS_LIGHT\n    varying vec3 v_fragPos;\n    #ifdef HILO_HAS_SPECULAR\n        #ifdef HILO_SPECULAR_MAP\n            uniform sampler2D u_specular;\n        #else\n            uniform vec4 u_specular;\n        #endif\n    #endif\n    #ifdef HILO_EMISSION_MAP\n        uniform sampler2D u_emission;\n    #else\n        uniform vec4 u_emission;\n    #endif\n    #ifdef HILO_AMBIENT_MAP\n        uniform sampler2D u_ambientMap;\n    #endif\n    #ifdef HILO_HAS_NORMAL_MAP\n        uniform sampler2D u_normalMap;\n        varying mat3 TBN;\n    #endif\n    #ifdef HILO_SKYBOX_MAP\n        uniform samplerCube u_skyboxMap;\n        uniform float u_reflectivity;\n        uniform float u_refractRatio;\n        uniform float u_refractivity;\n    #endif\n    uniform float u_shininess;\n#endif\n\n#ifdef HILO_HAS_FOG\n    varying float v_dist;\n    uniform vec4 u_fogColor;\n    uniform vec2 u_fogInfo;\n#endif\n\nfloat getDiffuse_1_0(vec3 normal, vec3 lightDir){\n    return max(dot(normal, lightDir), 0.0);\n}\n\n\nfloat getSpecular_2_1(vec3 cameraPos, vec3 fragPos, vec3 lightDir, vec3 normal, float shininess){\n    vec3 viewDir = normalize(cameraPos - fragPos);\n    vec3 reflectDir = reflect(-lightDir, normal);\n    return pow(max(dot(viewDir, reflectDir), 0.0), shininess);\n}\n\n\nfloat getPointAttenuation_3_2(vec3 distanceVec, vec3 info){\n    float distance = length(distanceVec);\n    return 1.0/(info.x + info.y * distance + info.z * distance * distance);\n}\n\n\n\nvoid main(void) {\n    vec4 diffuse = vec4(0., 0., 0., 1.);\n    vec4 color = vec4(0., 0., 0., 1.);\n    #if defined(HILO_DIFFUSE_MAP)\n        diffuse = texture2D(u_diffuse, v_texcoord0);\n    #elif defined(HILO_DIFFUSE_CUBE_MAP)\n        diffuse = textureCube(u_diffuse, v_position);\n    #else\n        diffuse = u_diffuse;\n    #endif\n\n    #ifdef HILO_HAS_LIGHT\n        vec3 lightDiffuse = vec3(0, 0, 0);\n        vec3 lightAmbient = vec3(0, 0, 0);\n        vec3 viewPos = vec3(0, 0, 0);\n\n        #ifdef HILO_HAS_NORMAL_MAP\n            vec3 normal = normalize(texture2D(u_normalMap, v_texcoord0).rgb * 2.0 - 1.0);\n            viewPos = TBN * viewPos;\n        #elif defined(HILO_HAS_NORMAL)\n            vec3 normal = normalize(v_normal);\n        #else\n            vec3 normal = vec3(0, 0, 1);\n        #endif\n\n        #ifdef HILO_AMBIENT_MAP\n            lightAmbient = texture2D(u_ambientMap, v_texcoord0).rgb;\n        #else\n            lightAmbient = diffuse.rgb;\n        #endif\n\n        #ifdef HILO_HAS_SPECULAR\n            vec3 lightSpecular = vec3(0, 0, 0);\n            #ifdef HILO_SPECULAR_MAP\n                vec4 specular = texture2D(u_specular, v_texcoord0);\n            #else\n                vec4 specular = u_specular;\n            #endif\n        #endif\n        \n        #ifdef HILO_EMISSION_MAP\n            vec4 emission = texture2D(u_emission, v_texcoord0);\n        #else\n            vec4 emission = u_emission;\n        #endif\n\n        #ifdef HILO_DIRECTIONAL_LIGHTS\n            for(int i = 0;i < HILO_DIRECTIONAL_LIGHTS;i++){\n                #ifdef HILO_HAS_NORMAL_MAP\n                    vec3 lightDir = normalize(-TBN * u_directionalLightsInfo[i]);\n                #else\n                    vec3 lightDir = normalize(-u_directionalLightsInfo[i]);\n                #endif\n                \n                float diff = getDiffuse_1_0(normal, lightDir);\n                lightDiffuse += diff * u_directionalLightsColor[i];\n\n                #ifdef HILO_HAS_SPECULAR\n                    float spec = getSpecular_2_1(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                    lightSpecular += spec * u_directionalLightsColor[i];\n                #endif\n            }\n        #endif\n\n        #ifdef HILO_POINT_LIGHTS\n            for(int i = 0;i < HILO_POINT_LIGHTS;i++){\n                #ifdef HILO_HAS_NORMAL_MAP\n                    vec3 distanceVec = TBN * u_pointLightsPos[i] - v_fragPos;\n                #else\n                    vec3 distanceVec = u_pointLightsPos[i] - v_fragPos; \n                #endif\n                vec3 lightDir = normalize(distanceVec);\n\n                float diff = getDiffuse_1_0(normal, lightDir);\n                float attenuation = getPointAttenuation_3_2(distanceVec, u_pointLightsInfo[i]);\n                lightDiffuse += diff * attenuation * u_pointLightsColor[i];\n\n                #ifdef HILO_HAS_SPECULAR\n                    float spec = getSpecular_2_1(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                    lightSpecular += spec * attenuation * u_pointLightsColor[i];\n                #endif\n            }\n        #endif\n\n        #ifdef HILO_AMBIENT_LIGHTS\n            color.rgb += u_ambientLightsColor * lightAmbient;\n        #endif\n\n        color.rgb += lightDiffuse * diffuse.rgb;\n        #ifdef HILO_HAS_SPECULAR\n            color.rgb += lightSpecular * specular.rgb;\n        #endif\n\n        color.rgb += emission.rgb;\n        color.a = diffuse.a;\n\n        #ifdef HILO_SKYBOX_MAP\n            vec3 I = normalize(v_fragPos - viewPos);\n            if (u_reflectivity > 0.0) {\n                vec3 R = reflect(I, normal);\n                color.rgb = color.rgb * (1.0 - u_reflectivity) + textureCube(u_skyboxMap, R).rgb * u_reflectivity;\n            }\n            if (u_refractivity > 0.0) {\n                vec3 R = refract(I, normal, u_refractRatio);\n                color.rgb = color.rgb * (1.0 - u_refractivity) + textureCube(u_skyboxMap, R).rgb * u_refractivity;\n            }\n        #endif\n    #else\n        color = diffuse;\n    #endif\n\n    float transparency = 1.0;\n    #ifdef HILO_TRANSPARENCY_MAP\n        transparency = texture2D(u_transparency, v_texcoord0).r;\n    #else\n        transparency = u_transparency;\n    #endif\n    color = vec4(color.rgb * color.a * transparency, color.a * transparency);\n\n    #ifdef HILO_HAS_FOG\n        float fogFactor = (u_fogInfo.y - v_dist)/(u_fogInfo.y - u_fogInfo.x);\n        if(fogFactor < 0.0){\n            fogFactor = 0.0;\n        }\n        else if(fogFactor > 1.0){\n            fogFactor = 1.0;\n        }\n        color = fogFactor * color + (1.0 - fogFactor) * u_fogColor;\n    #endif\n\n    gl_FragColor = color;\n}"

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\nattribute vec3 a_position;\n\n#ifdef HILO_HAS_TEXCOORD0\n    attribute vec2 a_texcoord0;\n    varying vec2 v_texcoord0;\n#endif\n\n#ifdef HILO_DIFFUSE_CUBE_MAP\n    varying vec3 v_position;\n#endif\n\n#ifdef HILO_HAS_NORMAL\n    attribute vec3 a_normal;\n    uniform mat3 u_normalMatrix;\n    varying vec3 v_normal;\n\n    #ifdef HILO_HAS_NORMAL_MAP\n        attribute vec3 a_tangent;\n        varying mat3 TBN;\n    #endif\n#endif\n\n#ifdef HILO_QUANTIZED\n    uniform mat4 u_positionDecodeMat;\n    uniform mat4 u_normalDecodeMat;\n    uniform mat3 u_uvDecodeMat;\n#endif\n\n#if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FOG)\n    uniform mat4 u_modelViewMatrix;\n    #ifdef HILO_HAS_FOG\n        varying float v_dist;\n    #endif\n\n    #ifdef HILO_HAS_LIGHT\n        varying vec3 v_fragPos;\n    #endif\n#endif\n\n#ifdef HILO_JOINT_COUNT\n    attribute vec4 a_skinIndices;\n    attribute vec4 a_skinWeights;\n    #ifdef HILO_JOINT_MAT_MAP\n        uniform sampler2D u_jointMatTexture;\n        uniform vec2 u_jointMatTextureSize;\n    #else\n        uniform mat4 u_jointMat[HILO_JOINT_COUNT];\n    #endif\n#endif\n\nuniform mat4 u_modelViewProjectionMatrix;\n\nvec2 unQuantize_1_0(vec2 pos, mat3 decodeMat) {\n    vec3 result = vec3(pos, 1.0);\n    result = decodeMat * result;\n    return vec2(result.x, result.y);\n}\n\nvec3 unQuantize_1_0(vec3 pos, mat4 decodeMat) {\n    vec4 result = vec4(pos, 1.0);\n    result = decodeMat * result;\n    return vec3(result.x, result.y, result.z);\n}\n\n\nfloat transpose_2_1(float m) {\n  return m;\n}\n\nmat2 transpose_2_1(mat2 m) {\n  return mat2(m[0][0], m[1][0],\n              m[0][1], m[1][1]);\n}\n\nmat3 transpose_2_1(mat3 m) {\n  return mat3(m[0][0], m[1][0], m[2][0],\n              m[0][1], m[1][1], m[2][1],\n              m[0][2], m[1][2], m[2][2]);\n}\n\nmat4 transpose_2_1(mat4 m) {\n  return mat4(m[0][0], m[1][0], m[2][0], m[3][0],\n              m[0][1], m[1][1], m[2][1], m[3][1],\n              m[0][2], m[1][2], m[2][2], m[3][2],\n              m[0][3], m[1][3], m[2][3], m[3][3]);\n}\n\n\n\n#ifdef HILO_JOINT_COUNT\n    mat4 getJointMat(float index) {\n        #ifdef HILO_JOINT_MAT_MAP\n            index *= 4.0;\n            float x = float(mod(index, u_jointMatTextureSize.x));\n            float y = float(floor(index / u_jointMatTextureSize.x));\n            float dx = 1.0 / float(u_jointMatTextureSize.x);\n            float dy = 1.0 / float(u_jointMatTextureSize.y);\n            y = dy * (y + 0.5);\n            vec4 v1 = texture2D(u_jointMatTexture, vec2(dx * (x + 0.5), y));\n            vec4 v2 = texture2D(u_jointMatTexture, vec2(dx * (x + 1.5), y));\n            vec4 v3 = texture2D(u_jointMatTexture, vec2(dx * (x + 2.5), y));\n            vec4 v4 = texture2D(u_jointMatTexture, vec2(dx * (x + 3.5), y));\n            mat4 mat = mat4(v1, v2, v3, v4);\n            return mat;\n        #else\n            return u_jointMat[int(index)];\n        #endif\n    }\n#endif\n\nvoid main(void) {\n    #ifdef HILO_QUANTIZED\n        vec4 pos = vec4(unQuantize_1_0(a_position, u_positionDecodeMat), 1.0);\n    #else\n        vec4 pos = vec4(a_position, 1.0);\n    #endif\n\n    #ifdef HILO_DIFFUSE_MAP\n        #ifdef HILO_QUANTIZED\n            v_texcoord0 = unQuantize_1_0(a_texcoord0, u_uvDecodeMat);\n        #else\n            v_texcoord0 = a_texcoord0;\n        #endif\n    #elif defined(HILO_DIFFUSE_CUBE_MAP)\n        v_position = vec3(pos);\n    #endif\n\n    #ifdef HILO_JOINT_COUNT\n        mat4 skinMat = a_skinWeights.x * getJointMat(a_skinIndices.x);\n        skinMat += a_skinWeights.y * getJointMat(a_skinIndices.y);\n        skinMat += a_skinWeights.z * getJointMat(a_skinIndices.z);\n        skinMat += a_skinWeights.w * getJointMat(a_skinIndices.w);\n        pos = skinMat * pos;\n    #endif\n\n    #ifdef HILO_HAS_NORMAL\n        #ifdef HILO_QUANTIZED\n            vec3 normal = unQuantize_1_0(a_normal, u_normalDecodeMat);\n        #else\n            vec3 normal = a_normal;\n        #endif\n        #ifdef HILO_JOINT_COUNT\n            normal = mat3(skinMat) * normal;\n        #endif\n        #ifdef HILO_HAS_NORMAL_MAP\n            vec3 T = normalize(u_normalMatrix * a_tangent);\n            vec3 N = normalize(u_normalMatrix * a_normal);\n            T = normalize(T - dot(T, N) * N);\n            vec3 B = cross(T, N);\n            TBN = transpose_2_1(mat3(T, B, N));\n        #endif\n        v_normal = u_normalMatrix * normal;\n    #endif\n\n    #if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FOG)\n        vec3 fragPos = (u_modelViewMatrix * pos).xyz;\n\n        #ifdef HILO_HAS_NORMAL_MAP\n            fragPos = TBN * fragPos;\n        #endif\n\n        #ifdef HILO_HAS_LIGHT\n            v_fragPos = fragPos;\n        #endif\n\n        #ifdef HILO_HAS_FOG\n            v_dist = length(fragPos);\n        #endif\n    #endif\n\n    gl_Position = u_modelViewProjectionMatrix * pos;\n}"

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n#define GLSLIFY 1\nvarying vec2 v_texcoord0;\nuniform sampler2D u_diffuse;\n\nvoid main(void) {\n    vec4 color = vec4(0., 0., 0., 0.);\n    vec4 diffuse = vec4(0., 0., 0., 1.);\n    diffuse = texture2D(u_diffuse, v_texcoord0);    \n    color = diffuse;\n    gl_FragColor = diffuse.xyzw;\n}"

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n#define GLSLIFY 1\nattribute vec2 a_position;\nattribute vec2 a_texcoord0;\nvarying vec2 v_texcoord0;\n\n\nvoid main(void) {\n    vec4 pos = vec4(a_position, 0.0, 1.0);\n    gl_Position = pos;\n    v_texcoord0 = a_texcoord0;\n}"

/***/ })
/******/ ]);

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

module.exports = Hilo3d;