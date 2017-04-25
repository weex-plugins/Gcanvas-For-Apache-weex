// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	var context;
	function getProto(Weex) {
	  return {
	    create: function create() {
	      this.node = document.createElement('canvas');
	      return this.node;
	    },
	    getContext: function getContext(type) {
	      context = this.node.getContext(type || '2d');
	      return context;
	    },

	    getContextAsyn: function getContextAsyn(type, callback) {
	      context = this.node.getContext(type || '2d');
	      callback(context);
	    },

	    drawImage: function drawImage(url) {
	      var img = new Image();
	      img.src = url;
	      arguments[0] = img;
	      return context.drawImage.apply(context, arguments);
	    }

	  };
	}

	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;

	  function GCanvas(data) {
	    Component.call(this, data);
	  }

	  GCanvas.prototype = Object.create(Component.prototype);
	  extend(GCanvas.prototype, getProto(Weex));

	  Weex.registerComponent('gcanvas', GCanvas);
	}

	module.exports = {
	  init: init
	};

/***/ })
/******/ ]);