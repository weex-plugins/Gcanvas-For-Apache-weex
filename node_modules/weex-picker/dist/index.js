(this.nativeLog || function(s) {console.log(s)})('START WEEX PICKER: 0.1.0 Build 20170116');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeexPicker = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject(".weex-picker {\n    font-size: 1rem;\n    line-height: 1.5;\n    overflow: hidden;\n    display: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-transition: opacity .15s ease;\n    -o-transition: opacity .15s ease;\n    transition: opacity .15s ease;\n    color: #333;\n    background-color: rgba(0, 0, 0, 0.5);\n    direction: ltr;\n}\n.weex-picker-fixed {\n    position: fixed;\n    z-index: 1986;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.weex-picker-mask {\n    position: fixed;\n    z-index: 1986;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n\n}\n.weex-picker-fixed > .weex-picker-content {\n    position: absolute;\n    right: 0;\n    bottom: -100%;\n    left: 0;\n    max-height: 100%;\n    -webkit-transition: bottom .3s ease;\n    -o-transition: bottom .3s ease;\n    transition: bottom .3s ease;\n}\n.weex-picker-fixed .weex-picker-header {\n    display: block;\n}\n.weex-picker-fixed .weex-picker-footer {\n    display: table;\n}\n.weex-picker-open {\n    display: block;\n    opacity: 0;\n}\n.weex-picker-open {\n    opacity: 1;\n}\n.weex-picker-open > .weex-picker-content {\n    bottom: 0;\n}\n.weex-picker-content {\n    background-color: #fff;\n}\n\n\n.weex-picker-content ul{\n    position: absolute;\n}\n.weex-picker-header {\n    position: relative;\n    height: 1.2rem;\n    border-bottom: 1px solid #eee;\n    background-color: gainsboro;\n\n}\n\n.weex-picker-header a {\n    font-size: 0.4rem;\n    height: 1.2rem;\n    line-height: 1.2rem;\n    text-align: center;\n    width: 50%;\n    display: block;\n    float:left\n\n}\n.weex-picker-title {\n    font-size: 1.125rem;\n    font-weight: normal;\n    line-height: 1.25rem;\n    margin: 0;\n}\n.weex-picker-close {\n    font-size: 2rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 3rem;\n    height: 3rem;\n    color: #999;\n    border-width: 0;\n    background-color: transparent;\n}\n.weex-picker-body {\n    overflow: hidden;\n    height:6rem;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n}\n\n.weex-picker-scroller {\n    height: 6rem;\n    overflow: hidden;\n    position: relative;\n    flex: 1;\n}\n\n.weex-picker-body .weex-picker-scroller{\n    border-right:solid 1px #eee;\n}\n\n.weex-picker-body .weex-picker-scroller:last-child{\n    border-right:none!important;\n}\n\n.weex-picker-body ul{\n    display: block;\n    width: 100%;\n}\n\n.weex-picker-body li {\n    text-align: center;\n    height:1.2rem;\n    line-height: 1.2rem;\n    vertical-align: middle;\n    font-size: 0.4rem;\n}\n\n.weex-picker-body li.active {\n    color: darkred;\n}\n\n\n\n.weex-picker-content .weex-picker-bar{\n    position: absolute;\n    top:3.6rem;\n    left:0;\n    height:1.2rem;\n    border-bottom: solid 1px gainsboro;\n    border-top: solid 1px gainsboro;\n    width: 100%;\n    pointer-events: none;\n}\n\n\n.weex-picker-grid {\n    display: table;\n    width: 100%;\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem;\n}\n.picker-cell {\n    position: relative;\n    display: table-cell;\n}\n.picker-cell::before,\n.picker-cell::after {\n    position: absolute;\n    z-index: 0;\n    right: 0;\n    left: 0;\n    display: block;\n    content: '';\n}\n.picker-cell::before {\n    top: 0;\n    bottom: 50%;\n    margin-bottom: 1.25rem;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.05)));\n    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    border-bottom: 1px solid #eee;\n}\n.picker-cell::after {\n    top: 50%;\n    bottom: 0;\n    margin-top: 1.25rem;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.05)));\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));\n    border-top: 1px solid #eee;\n}\n.picker-cell + .picker-cell {\n    border-left: 1px solid #eee;\n}\n.picker-single .picker-cell::before,\n.picker-single .picker-cell::after {\n    display: none;\n}\n.picker-list {\n    position: relative;\n    z-index: 1;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.picker-item {\n    padding: .5rem;\n    text-align: center;\n    white-space: nowrap;\n    color: #999;\n}\n.picker-picked {\n    font-size: 1.125em;\n    color: #0074d9;\n}\n.picker-footer {\n    width: 100%;\n    border-top: 1px solid #eee;\n}\n.wee-picker-cancel,\n.wee-picker-confirm {\n    font-size: 1rem;\n    display: table-cell;\n    width: 50%;\n    padding: 1rem;\n    border-width: 0;\n    background-color: transparent;\n}\n.weex-picker-confirm {\n    color: #0074d9;\n}\n\n\n.pika-single {\n    z-index: 9999;\n    display: block;\n    position: relative;\n    color: #333;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-bottom-color: #bbb;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    align-self: center;\n}\n\n\n.pika-single:before,\n.pika-single:after {\n    content: \" \";\n    display: table;\n}\n.pika-single:after { clear: both }\n.pika-single { *zoom: 1 }\n\n.pika-single.is-hidden {\n    display: none;\n}\n\n.pika-single.is-bound {\n    position: absolute;\n    box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);\n}\n\n.pika-lendar {\n    float: left;\n    width: 6.4rem;\n    margin: 0.213rem;\n}\n\n.pika-title {\n    position: relative;\n    text-align: center;\n}\n\n.pika-label {\n    display: inline-block;\n    *display: inline;\n    position: relative;\n    z-index: 9999;\n    overflow: hidden;\n    margin: 0;\n    padding: 0.13rem 0.08rem;\n    font-size: 0.32rem;\n    line-height: 0.53rem;\n    font-weight: bold;\n    background-color: #fff;\n}\n.pika-title select {\n    cursor: pointer;\n    position: absolute;\n    z-index: 9998;\n    margin: 0;\n    left: 0;\n    top: 0.13rem;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    height: 0.53rem;\n    width: 100%;\n}\n\n.pika-prev,\n.pika-next {\n    display: block;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    border: 0;\n    padding: 0;\n    width: 0.53rem;\n    height: 0.53rem;\n    /* hide text using text-indent trick, using width value (it's enough) */\n    text-indent: 0.53rem;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 75% 75%;\n    opacity: .5;\n    *position: absolute;\n    *top: 0;\n}\n\n.pika-prev:hover,\n.pika-next:hover {\n    opacity: 1;\n}\n\n.pika-prev,\n.is-rtl .pika-next {\n    float: left;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');\n    *left: 0;\n}\n\n.pika-next,\n.is-rtl .pika-prev {\n    float: right;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');\n    *right: 0;\n}\n\n.pika-prev.is-disabled,\n.pika-next.is-disabled {\n    cursor: default;\n    opacity: .2;\n}\n\n.pika-select {\n    display: inline-block;\n    *display: inline;\n}\n\n.pika-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    border: 0;\n}\n\n.pika-table th,\n.pika-table td {\n    width: 14.285714285714286%;\n    padding: 0;\n}\n\n.pika-table th {\n    color: #999;\n    font-size: 0.32rem;\n    line-height: 0.66rem;\n    font-weight: bold;\n    text-align: center;\n}\n\n.pika-button {\n    cursor: pointer;\n    display: block;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    outline: none;\n    border: 0;\n    margin: 0;\n    width: 100%;\n    padding: 10px;\n    color: #666;\n    font-size: 0.32rem;\n    line-height: 0.4rem;\n    text-align: right;\n    background: #f5f5f5;\n}\n\n.pika-week {\n    font-size: 0.3rem;\n    color: #999;\n}\n\n.is-today .pika-button {\n    color: #33aaff;\n    font-weight: bold;\n}\n\n.is-selected .pika-button {\n    color: #fff;\n    font-weight: bold;\n    background: #33aaff;\n    box-shadow: inset 0 2px 6px #178fe5;\n    border-radius: 6px;\n}\n\n.is-inrange .pika-button {\n    background: #D5E9F7;\n}\n\n.is-startrange .pika-button {\n    color: #fff;\n    background: #6CB31D;\n    box-shadow: none;\n    border-radius: 6px;\n}\n\n.is-endrange .pika-button {\n    color: #fff;\n    background: #33aaff;\n    box-shadow: none;\n    border-radius: 6px;\n}\n\n.is-disabled .pika-button,\n.is-outside-current-month .pika-button {\n    pointer-events: none;\n    cursor: default;\n    color: #999;\n    opacity: .3;\n}\n\n.pika-button:hover {\n    color: #fff;\n    background: #ff8000;\n    box-shadow: none;\n    border-radius: 6px;\n}\n\n/* styling for abbr */\n.pika-table abbr {\n    border-bottom: none;\n    cursor: help;\n}\n\n",undefined);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var iscroll = createCommonjsModule(function (module) {
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) { return vendors[i].substr(0, vendors[i].length-1); }
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) { return false; }
		if ( _vendor === '' ) { return style; }
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();
function IScroll (el, options) {
	var this$1 = this;

	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this$1.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		var arguments$1 = arguments;
		var this$1 = this;

		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this$1._events[type][i].apply(this$1, [].slice.call(arguments$1, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		var this$1 = this;

		time = time || 0;

		var durationProp = utils.style.transitionDuration;
		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this$1.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		var this$1 = this;

		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this$1.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		var this$1 = this;

		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this$1.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var this$1 = this;

		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this$1.indicators.push( new Indicator(this$1, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var this$1 = this;

			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this$1.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this$1.pages[i][l] = {
							x: Math.max(x, this$1.maxScrollX),
							y: Math.max(y, this$1.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this$1.pages[m] ) {
						this$1.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this$1.maxScrollX);
					y = Math.max(-el[i].offsetTop, this$1.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this$1.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this$1.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		var this$1 = this;

		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this$1.pages[i][0].cx ) {
				x = this$1.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this$1.pages[0][m].cy ) {
				y = this$1.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		var this$1 = this;

		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this$1.options.keyBindings[i] == 'string' ) {
					this$1.options.keyBindings[i] = this$1.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this$1.options.keyBindings[i] = this$1.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	var this$1 = this;

	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this$1.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);
});

var modal;
var pickerContainer;
var pickerHeader;
var pickerBody;
var pickerConfirm;
var pickerCancel;
var pickerBar;
var pickerScroller;

function Picker (configs) {
  this.confirmCallback = configs.confirmCallback;
  this.cancelCallback = configs.cancelCallback;
  this.data = configs.data;
  this.column = this._getColumnLength(this.data);
  this.sender = configs.sender;
  this.pickerScrollers = [];
  this.itemScrolls = [];
  this.formateResult = configs.formateResult;
  this.resultIndexs = configs.defaultIndexs || this._getDefaultIndex();
  this._init();
}

Picker.prototype = {

  _init: function () {
    this._create();
    this._addEvent();
    this._createColumn();
    this.show();
    this._createScroll();
    this._initIndex();
  },

  _create: function () {
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'weex-picker weex-picker-fixed';
      pickerContainer = document.createElement('div');
      pickerHeader = document.createElement('div');
      pickerBody = document.createElement('div');

      pickerBar = document.createElement('div');
      pickerBar.className = 'weex-picker-bar';

      pickerContainer.className = 'weex-picker-content';
      pickerHeader.className = 'weex-picker-header';
      pickerBody.className = 'weex-picker-body';
      pickerContainer.appendChild(pickerHeader);
      pickerContainer.appendChild(pickerBody);
      pickerContainer.appendChild(pickerBar);
      modal.appendChild(pickerContainer);
      document.body.appendChild(modal);
    }

    pickerHeader.innerHTML = '';
    pickerConfirm = document.createElement('a');
    pickerCancel = document.createElement('a');
    pickerConfirm.className = 'weex-picker-confirm';
    pickerCancel.className = 'weex-picker-cancel';
    pickerConfirm.innerText = '确定';
    pickerCancel.innerText = '取消';
    pickerHeader.appendChild(pickerCancel);
    pickerHeader.appendChild(pickerConfirm);
  },

  _getColumnLength: function (data) {
    if (typeof (data[0]) === 'object') {
      return data.length
    }
    else {
      return 1
    }
  },

  _getDefaultIndex: function () {
    var result = [];
    for (var i = 0; i < this.column; i++) {
      result[0] = 0;
    }
    return result
  },

  _getCurrentIndex: function () {
    if (this.resultIndexs.length === 1) {
      return this.resultIndexs[0]
    }
    else {
      return this.resultIndexs
    }
  },

  _addEvent: function () {
    var this$1 = this;

    var confirmCallback = function () {
      var indexs = this$1._getCurrentIndex();
      var resultData = this$1.formateResult ? this$1.formateResult(this$1.data, indexs) : indexs;
      var result = {
        result: 'success',
        data: resultData
      };

      this$1.confirmCallback && this$1.sender.performCallback(this$1.confirmCallback, result);
      this$1.hide();
    };

    var cancelCallback = function () {
      this$1.cancelCallback && this$1.sender.performCallback(this$1.cancelCallback);
      var indexs = this$1._getCurrentIndex();
      var resultData = this$1.formateResult ? this$1.formateResult(this$1.data, indexs) : indexs;
      var result = {
        result: 'cancel',
        data: resultData
      };
      this$1.confirmCallback && this$1.sender.performCallback(this$1.confirmCallback, result);
      this$1.hide();
    };

    pickerConfirm.addEventListener('click', confirmCallback);
    pickerCancel.addEventListener('click', cancelCallback);
  },

  _createColumn: function () {
    var this$1 = this;

    var items = this.data;
    pickerBody.innerHTML = '';
    if (this.column > 1) {
      for (var i = 0; i < items.length; i++) {
        this$1._createItem(items[i]);
      }
    }
    else {
      this._createItem(items);
    }
  },

  _createItem: function (items) {
    pickerScroller = document.createElement('div');
    var ui = document.createElement('ul');
    for (var i = -2; i < items.length + 2; i++) {
      var cell = document.createElement('li');
      if (i < 0 || i >= items.length) {
        cell.innerText = '';
      }
      else {
        cell.innerText = items[i];
      }
      ui.appendChild(cell);
    }
    pickerScroller.className = 'weex-picker-scroller';
    pickerScroller.appendChild(ui);
    pickerBody.appendChild(pickerScroller);
    this.pickerScrollers.push(pickerScroller);
  },

  _createScroll: function () {
    var self = this;
    var loop = function ( i ) {
      (function (index) {
        var itemScroll = new iscroll(self.pickerScrollers[i], {
          snap: 'li',
          mouseWheel: true,
          vScrollbar: false,
          hScrollbar: false,
          hScroll: false
        });

        self.itemScrolls.push(itemScroll);

        itemScroll.on('scrollEnd', function () {
          self._nohightLight(self.pickerScrollers[i]);
          var yIndex = Math.abs(Math.round(-1 * this.y / self.itemHeight));
          self.resultIndexs[index] = yIndex;
          self._hightLight(self.pickerScrollers[i], yIndex);
        });

        itemScroll.on('scroll', function () {
        });

        itemScroll.on('scrollStart', function () {
          self._nohightLight(self.pickerScrollers[i]);
        });

        self.pickerScrollers[i].addEventListener('click', function (ev) {
          var target = ev.target;
          if (target.tagName.toLowerCase() === 'li') {
            self._goToPage(i, target);
          }
        });

        // self.pickerScrollers[i].addEventListener('touchend', function (ev) {
        //   const target = ev.target
        //   if (target.tagName.toLowerCase() === 'li') {
        //     self._goToPage(i, target)
        //   }
        // })
      })(i);
    };

    for (var i = 0; i < this.pickerScrollers.length; i++) loop( i );
  },

  _goToPage: function (scrollIndex, li) {
    var this$1 = this;

    var alllist = this.pickerScrollers[scrollIndex].getElementsByTagName('li');
    for (var i = 2; i < alllist.length - 2; i++) {
      if (alllist[i] === li) {
        this$1.itemScrolls[scrollIndex].goToPage(0, i - 2, 500);
      }
    }
  },

  _hightLight: function (el, index) {
    var alllist = el.getElementsByTagName('li');
    for (var i = 2; i < alllist.length - 2; i++) {
      if (i === index + 2) {
        alllist[i].className = 'active';
      }
    }
  },
  _nohightLight: function (el) {
    var alllist = el.getElementsByTagName('li');
    for (var i = 0; i < alllist.length; i++) {
      if (alllist[i].className === 'active') {
        alllist[i].className = '';
      }
    }
  },

  _initIndex: function () {
    var self = this;
    self.itemHeight = pickerBody.offsetHeight / 5;
    for (var i = 0; i < this.pickerScrollers.length; i++) {
      (function (index) {
        self.itemScrolls[index].goToPage(0, self.resultIndexs[index], 0);
        self._hightLight(self.pickerScrollers[index], self.resultIndexs[index]);
      })(i);
    }
  },

  show: function () {
    modal.className = 'weex-picker weex-picker-fixed weex-picker-open';
  },

  hide: function () {
    modal.className = 'weex-picker weex-picker-fixed weex-picker-close';
  }
};

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var this$1 = this;

        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this$1, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

function isUndefined(input) {
    return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        var arguments$1 = arguments;

        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments$1[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments$1[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments$1[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var this$1 = this;

    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this$1[i] = prop;
        } else {
            this$1['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    var this$1 = this;

    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this$1[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        var this$1 = this;

        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this$1[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return this._months;
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return this._monthsShort;
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var this$1 = this;

    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this$1._shortMonthsParse[i] = this$1.monthsShort(mom, '').toLocaleLowerCase();
            this$1._longMonthsParse[i] = this$1.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var this$1 = this;

    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this$1._longMonthsParse[i]) {
            this$1._longMonthsParse[i] = new RegExp('^' + this$1.months(mom, '').replace('.', '') + '$', 'i');
            this$1._shortMonthsParse[i] = new RegExp('^' + this$1.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this$1._monthsParse[i]) {
            regex = '^' + this$1.months(mom, '') + '|^' + this$1.monthsShort(mom, '');
            this$1._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this$1._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this$1._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this$1._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    var this$1 = this;

    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this$1.monthsShort(mom, ''));
        longPieces.push(this$1.months(mom, ''));
        mixedPieces.push(this$1.months(mom, ''));
        mixedPieces.push(this$1.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    //the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return this._weekdays;
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var this$1 = this;

    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this$1._minWeekdaysParse[i] = this$1.weekdaysMin(mom, '').toLocaleLowerCase();
            this$1._shortWeekdaysParse[i] = this$1.weekdaysShort(mom, '').toLocaleLowerCase();
            this$1._weekdaysParse[i] = this$1.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var this$1 = this;

    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this$1._fullWeekdaysParse[i]) {
            this$1._fullWeekdaysParse[i] = new RegExp('^' + this$1.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this$1._shortWeekdaysParse[i] = new RegExp('^' + this$1.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this$1._minWeekdaysParse[i] = new RegExp('^' + this$1.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this$1._weekdaysParse[i]) {
            regex = '^' + this$1.weekdays(mom, '') + '|^' + this$1.weekdaysShort(mom, '') + '|^' + this$1.weekdaysMin(mom, '');
            this$1._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this$1._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this$1._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this$1._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this$1._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    var this$1 = this;

    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this$1.weekdaysMin(mom, '');
        shortp = this$1.weekdaysShort(mom, '');
        longp = this$1.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    ordinalParse: defaultOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse)) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }

    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (typeof(input) === 'object') {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    s: 45,  // seconds to minute
    m: 45,  // minutes to hour
    h: 22,  // hours to day
    d: 26,  // days to month
    M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
}

function humanize (withSuffix) {
    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

hooks.version = '2.17.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;




var moment$1 = Object.freeze({
	default: hooks
});

var createData = function () {
  var hour = [];
  var moment = [];
  var i = 0;
  for (i = 0; i < 24; i++) {
    if (i < 10) {
      hour.push('0' + i);
    }
    else {
      hour.push(i + '');
    }
  }
  for (i = 0; i < 60; i++) {
    if (i < 10) {
      moment.push('0' + i);
    }
    else {
      moment.push(i + '');
    }
  }

  return [hour, moment]
};

var inputData = createData();

var getDefaultIndexs = function (time) {
  var hour = time.format('HH');
  var moment = time.format('mm');
  var result = [0, 0];
  var i = 0;
  for (i = 0; i < inputData[0].length; i++) {
    if (hour === inputData[0][i]) {
      result[0] = i;
    }
  }
  for (i = 0; i < inputData[1].length; i++) {
    if (moment === inputData[1][i]) {
      result[1] = i;
    }
  }

  return result
};

var formateResult = function (data, indexs) {
  var hour = data[0][indexs[0]];
  var moment = data[1][indexs[1]];
  return hour + ':' + moment
};

var TimePicker = function (configs) {
  var time = hooks(configs.value || new Date(), 'HH:mm');
  var value = getDefaultIndexs(time);
  return new Picker({
    data: inputData,
    formateResult: formateResult,
    defaultIndexs: value,
    confirmCallback: configs.confirmCallback,
    sender: configs.sender
  })
};

var require$$0 = ( moment$1 && moment$1['default'] ) || moment$1;

var pikaday = createCommonjsModule(function (module, exports) {
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (typeof exports === 'object') {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require$$0; } catch (e) {}
        module.exports = factory(moment);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function (req)
        {
            // Load moment.js as an optional dependency
            var id = 'moment';
            try { moment = req(id); } catch (e) {}
            return factory(moment);
        });
    } else {
        root.Pikaday = factory(root.moment);
    }
}(commonjsGlobal, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) { date.setHours(0,0,0,0); }
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');
            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL)
    {
        return '<tr>' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        opts.field.blur();
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (hasMoment) {
                date = moment(opts.field.value, opts.format, opts.formatStrict);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);
        addEvent(document, 'keydown', self._onKeyChange);

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            return !isDate(this._d) ? '' : hasMoment ? moment(this._d).format(format || this._o.format) : this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection with fallback for the current date
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : new Date();
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            if (hasMoment) {
                if (sign === 'add') {
                    newDay = moment(day).add(days, "days").toDate();
                } else if (sign === 'subtract') {
                    newDay = moment(day).subtract(days, "days").toDate();
                }
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            var this$1 = this;

            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this$1.calendars[c] = adjustCalendar({
                    month: this$1.calendars[0].month + c,
                    year: this$1.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            var this$1 = this;

            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this$1, c, this$1.calendars[c].year, this$1.calendars[c].month, this$1.calendars[0].year, randId) + this$1.render(this$1.calendars[c].year, this$1.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }
            
            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) { return; }

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var this$1 = this;

            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this$1._d) ? compareDates(day, this$1._d) : false,
                    isToday = compareDates(day, now),
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths
                    };

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL));
                    row = [];
                    r = 0;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                removeClass(this.el, 'is-hidden');
                this._v = true;
                this.draw();
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (this._o.field) {
                removeEvent(this._o.field, 'change', this._onInputChange);
                if (this._o.bound) {
                    removeEvent(this._o.trigger, 'click', this._onInputClick);
                    removeEvent(this._o.trigger, 'focus', this._onInputFocus);
                    removeEvent(this._o.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;

}));
});

var pickerModule = {
  pick: function (options, confirmCallback, cancelCallback) {
    var items = options.items;
    var index = options.index;
    new Picker({
      data: items,
      defaultIndexs: [index],
      confirmCallback: confirmCallback,
      cancelCallback: cancelCallback,
      sender: this.sender
    });
  },

  pickDate: function (options, confirmCallback) {
    var mask = document.createElement('div');
    mask.className = 'weex-picker-mask';
    var self = this;
    var picker = new pikaday({
      defaultDate: hooks(options.value, 'YYYY-MM-DD').toDate(),
      setDefaultDate: hooks(options.value, 'YYYY-MM-DD').toDate(),
      format: 'YYYY-MM-DD',
      minDate: hooks(options.min, 'YYYY-MM-DD').toDate(),
      maxDate: hooks(options.max, 'YYYY-MM-DD').toDate(),
      onSelect: function (date) {
        confirmCallback && self.sender.performCallback(confirmCallback, { result: 'success', data: hooks(date).format('YYYY-MM-DD') });
        picker.destroy();
        mask.parentNode.removeChild(mask);
      }
    });
    mask.appendChild(picker.el);
    document.body.append(mask);
  },

  pickTime: function (options, confirmCallback) {
    new TimePicker({
      value: options.value,
      confirmCallback: confirmCallback,
      sender: this.sender
    });
  }
};

var meta = {
  picker: [{
    name: 'pick',
    args: ['object', 'function']
  }, {
    name: 'pickDate',
    args: ['object', 'function']
  }, {
    name: 'pickTime',
    args: ['object', 'function']
  }]
};

var index = {
  init: function (Weex) {
    Weex.registerApiModule('picker', pickerModule, meta);
  }
};

return index;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9pc2Nyb2xsL2J1aWxkL2lzY3JvbGwuanMiLCIuLi9zcmMvUGlja2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2hvb2tzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9pcy1vYmplY3QtZW1wdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvaXMtbnVtYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWRhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvbWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2hhcy1vd24tcHJvcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9leHRlbmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL3V0Yy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvcGFyc2luZy1mbGFncy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9zb21lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS92YWxpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9pcy11bmRlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2NvbnN0cnVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2Ficy1mbG9vci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy90by1pbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvY29tcGFyZS1hcnJheXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvZGVwcmVjYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2lzLWZ1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9zZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2NvbnN0cnVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2tleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2NhbGVuZGFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9mb3JtYXRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9pbnZhbGlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9vcmRpbmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9yZWxhdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9hbGlhc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3ByaW9yaXRpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2dldC1zZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdXRpbHMvemVyby1maWxsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvcGFyc2UvcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvcGFyc2UvdG9rZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvY29uc3RhbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2luZGV4LW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL21vbnRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3llYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL2RhdGUtZnJvbS1hcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3dlZWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvZGF5LW9mLXdlZWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvaG91ci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvYmFzZS1jb25maWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2xvY2FsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvY3JlYXRlL2NoZWNrLW92ZXJmbG93LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS9mcm9tLXN0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9kZWZhdWx0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1hcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWZvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2NyZWF0ZS9mcm9tLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvZnJvbS1hbnl0aGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9jcmVhdGUvbG9jYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L21pbi1tYXguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L25vdy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9jb25zdHJ1Y3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91dGlscy9hYnMtcm91bmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvb2Zmc2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2R1cmF0aW9uL2NyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvYWRkLXN1YnRyYWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC9jYWxlbmRhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvY2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2NvbXBhcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2RpZmYuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZnJvbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvdG8uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbW9tZW50L2xvY2FsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvc3RhcnQtZW5kLW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC90by10eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC92YWxpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvY3JlYXRpb24tZGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy93ZWVrLXllYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvcXVhcnRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9kYXktb2YtbW9udGguanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvZGF5LW9mLXllYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvbWludXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3NlY29uZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy9taWxsaXNlY29uZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi91bml0cy90aW1lem9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9tb21lbnQvcHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL21vbWVudC9tb21lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL3ByZS1wb3N0LWZvcm1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvcHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2xvY2FsZS9saXN0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9sb2NhbGUvZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvbG9jYWxlL2xvY2FsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9hYnMuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vYWRkLXN1YnRyYWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3V0aWxzL2Ficy1jZWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL2R1cmF0aW9uL2J1YmJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9hcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9nZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vaHVtYW5pemUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vaXNvLXN0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvc3JjL2xpYi9kdXJhdGlvbi9wcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvZHVyYXRpb24vZHVyYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L3NyYy9saWIvdW5pdHMvdGltZXN0YW1wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbGliL3VuaXRzL3VuaXRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9zcmMvbW9tZW50LmpzIiwiLi4vc3JjL1RpbWVQaWNrZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcGlrYWRheS9waWthZGF5LmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBpU2Nyb2xsIHY1LjIuMCB+IChjKSAyMDA4LTIwMTYgTWF0dGVvIFNwaW5lbGxpIH4gaHR0cDovL2N1YmlxLm9yZy9saWNlbnNlICovXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpIHtcbnZhciByQUYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHR8fFxuXHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdHx8XG5cdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVx0XHR8fFxuXHRmdW5jdGlvbiAoY2FsbGJhY2spIHsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cbnZhciB1dGlscyA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBtZSA9IHt9O1xuXG5cdHZhciBfZWxlbWVudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG5cdHZhciBfdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdmVuZG9ycyA9IFsndCcsICd3ZWJraXRUJywgJ01velQnLCAnbXNUJywgJ09UJ10sXG5cdFx0XHR0cmFuc2Zvcm0sXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB2ZW5kb3JzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRyYW5zZm9ybSA9IHZlbmRvcnNbaV0gKyAncmFuc2Zvcm0nO1xuXHRcdFx0aWYgKCB0cmFuc2Zvcm0gaW4gX2VsZW1lbnRTdHlsZSApIHJldHVybiB2ZW5kb3JzW2ldLnN1YnN0cigwLCB2ZW5kb3JzW2ldLmxlbmd0aC0xKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCk7XG5cblx0ZnVuY3Rpb24gX3ByZWZpeFN0eWxlIChzdHlsZSkge1xuXHRcdGlmICggX3ZlbmRvciA9PT0gZmFsc2UgKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKCBfdmVuZG9yID09PSAnJyApIHJldHVybiBzdHlsZTtcblx0XHRyZXR1cm4gX3ZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xuXHR9XG5cblx0bWUuZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uIGdldFRpbWUgKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cblx0bWUuZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCwgb2JqKSB7XG5cdFx0Zm9yICggdmFyIGkgaW4gb2JqICkge1xuXHRcdFx0dGFyZ2V0W2ldID0gb2JqW2ldO1xuXHRcdH1cblx0fTtcblxuXHRtZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCAhIWNhcHR1cmUpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xuXHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sICEhY2FwdHVyZSk7XG5cdH07XG5cblx0bWUucHJlZml4UG9pbnRlckV2ZW50ID0gZnVuY3Rpb24gKHBvaW50ZXJFdmVudCkge1xuXHRcdHJldHVybiB3aW5kb3cuTVNQb2ludGVyRXZlbnQgP1xuXHRcdFx0J01TUG9pbnRlcicgKyBwb2ludGVyRXZlbnQuY2hhckF0KDcpLnRvVXBwZXJDYXNlKCkgKyBwb2ludGVyRXZlbnQuc3Vic3RyKDgpOlxuXHRcdFx0cG9pbnRlckV2ZW50O1xuXHR9O1xuXG5cdG1lLm1vbWVudHVtID0gZnVuY3Rpb24gKGN1cnJlbnQsIHN0YXJ0LCB0aW1lLCBsb3dlck1hcmdpbiwgd3JhcHBlclNpemUsIGRlY2VsZXJhdGlvbikge1xuXHRcdHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydCxcblx0XHRcdHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcblx0XHRcdGRlc3RpbmF0aW9uLFxuXHRcdFx0ZHVyYXRpb247XG5cblx0XHRkZWNlbGVyYXRpb24gPSBkZWNlbGVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDAuMDAwNiA6IGRlY2VsZXJhdGlvbjtcblxuXHRcdGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApO1xuXHRcdGR1cmF0aW9uID0gc3BlZWQgLyBkZWNlbGVyYXRpb247XG5cblx0XHRpZiAoIGRlc3RpbmF0aW9uIDwgbG93ZXJNYXJnaW4gKSB7XG5cdFx0XHRkZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplID8gbG93ZXJNYXJnaW4gLSAoIHdyYXBwZXJTaXplIC8gMi41ICogKCBzcGVlZCAvIDggKSApIDogbG93ZXJNYXJnaW47XG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XG5cdFx0XHRkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG5cdFx0fSBlbHNlIGlmICggZGVzdGluYXRpb24gPiAwICkge1xuXHRcdFx0ZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZSA/IHdyYXBwZXJTaXplIC8gMi41ICogKCBzcGVlZCAvIDggKSA6IDA7XG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnQpICsgZGVzdGluYXRpb247XG5cdFx0XHRkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlc3RpbmF0aW9uOiBNYXRoLnJvdW5kKGRlc3RpbmF0aW9uKSxcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvblxuXHRcdH07XG5cdH07XG5cblx0dmFyIF90cmFuc2Zvcm0gPSBfcHJlZml4U3R5bGUoJ3RyYW5zZm9ybScpO1xuXG5cdG1lLmV4dGVuZChtZSwge1xuXHRcdGhhc1RyYW5zZm9ybTogX3RyYW5zZm9ybSAhPT0gZmFsc2UsXG5cdFx0aGFzUGVyc3BlY3RpdmU6IF9wcmVmaXhTdHlsZSgncGVyc3BlY3RpdmUnKSBpbiBfZWxlbWVudFN0eWxlLFxuXHRcdGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csXG5cdFx0aGFzUG9pbnRlcjogISEod2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpLCAvLyBJRTEwIGlzIHByZWZpeGVkXG5cdFx0aGFzVHJhbnNpdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJykgaW4gX2VsZW1lbnRTdHlsZVxuXHR9KTtcblxuXHQvKlxuXHRUaGlzIHNob3VsZCBmaW5kIGFsbCBBbmRyb2lkIGJyb3dzZXJzIGxvd2VyIHRoYW4gYnVpbGQgNTM1LjE5IChib3RoIHN0b2NrIGJyb3dzZXIgYW5kIHdlYnZpZXcpXG5cdC0gZ2FsYXh5IFMyIGlzIG9rXG4gICAgLSAyLjMuNiA6IGBBcHBsZVdlYktpdC81MzMuMSAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTMzLjFgXG4gICAgLSA0LjAuNCA6IGBBcHBsZVdlYktpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMGBcbiAgIC0gZ2FsYXh5IFMzIGlzIGJhZEFuZHJvaWQgKHN0b2NrIGJyb3dlciwgd2VidmlldylcbiAgICAgYEFwcGxlV2ViS2l0LzUzNC4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM0LjMwYFxuICAgLSBnYWxheHkgUzQgaXMgYmFkQW5kcm9pZCAoc3RvY2sgYnJvd2VyLCB3ZWJ2aWV3KVxuICAgICBgQXBwbGVXZWJLaXQvNTM0LjMwIChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzQuMzBgXG4gICAtIGdhbGF4eSBTNSBpcyBPS1xuICAgICBgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzcuMzYgKENocm9tZS8pYFxuICAgLSBnYWxheHkgUzYgaXMgT0tcbiAgICAgYEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IChDaHJvbWUvKWBcbiAgKi9cblx0bWUuaXNCYWRBbmRyb2lkID0gKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhcHBWZXJzaW9uID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdC8vIEFuZHJvaWQgYnJvd3NlciBpcyBub3QgYSBjaHJvbWUgYnJvd3Nlci5cblx0XHRpZiAoL0FuZHJvaWQvLnRlc3QoYXBwVmVyc2lvbikgJiYgISgvQ2hyb21lXFwvXFxkLy50ZXN0KGFwcFZlcnNpb24pKSkge1xuXHRcdFx0dmFyIHNhZmFyaVZlcnNpb24gPSBhcHBWZXJzaW9uLm1hdGNoKC9TYWZhcmlcXC8oXFxkKy5cXGQpLyk7XG5cdFx0XHRpZihzYWZhcmlWZXJzaW9uICYmIHR5cGVvZiBzYWZhcmlWZXJzaW9uID09PSBcIm9iamVjdFwiICYmIHNhZmFyaVZlcnNpb24ubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoc2FmYXJpVmVyc2lvblsxXSkgPCA1MzUuMTk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSkoKTtcblxuXHRtZS5leHRlbmQobWUuc3R5bGUgPSB7fSwge1xuXHRcdHRyYW5zZm9ybTogX3RyYW5zZm9ybSxcblx0XHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJyksXG5cdFx0dHJhbnNpdGlvbkR1cmF0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxuXHRcdHRyYW5zaXRpb25EZWxheTogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcblx0XHR0cmFuc2Zvcm1PcmlnaW46IF9wcmVmaXhTdHlsZSgndHJhbnNmb3JtT3JpZ2luJylcblx0fSk7XG5cblx0bWUuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdHZhciByZSA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGMgKyBcIihcXFxcc3wkKVwiKTtcblx0XHRyZXR1cm4gcmUudGVzdChlLmNsYXNzTmFtZSk7XG5cdH07XG5cblx0bWUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuXHRcdGlmICggbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG5ld2NsYXNzID0gZS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRuZXdjbGFzcy5wdXNoKGMpO1xuXHRcdGUuY2xhc3NOYW1lID0gbmV3Y2xhc3Muam9pbignICcpO1xuXHR9O1xuXG5cdG1lLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHRpZiAoICFtZS5oYXNDbGFzcyhlLCBjKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIiwgJ2cnKTtcblx0XHRlLmNsYXNzTmFtZSA9IGUuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG5cdH07XG5cblx0bWUub2Zmc2V0ID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0dmFyIGxlZnQgPSAtZWwub2Zmc2V0TGVmdCxcblx0XHRcdHRvcCA9IC1lbC5vZmZzZXRUb3A7XG5cblx0XHQvLyBqc2hpbnQgLVcwODRcblx0XHR3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpIHtcblx0XHRcdGxlZnQgLT0gZWwub2Zmc2V0TGVmdDtcblx0XHRcdHRvcCAtPSBlbC5vZmZzZXRUb3A7XG5cdFx0fVxuXHRcdC8vIGpzaGludCArVzA4NFxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxlZnQ6IGxlZnQsXG5cdFx0XHR0b3A6IHRvcFxuXHRcdH07XG5cdH07XG5cblx0bWUucHJldmVudERlZmF1bHRFeGNlcHRpb24gPSBmdW5jdGlvbiAoZWwsIGV4Y2VwdGlvbnMpIHtcblx0XHRmb3IgKCB2YXIgaSBpbiBleGNlcHRpb25zICkge1xuXHRcdFx0aWYgKCBleGNlcHRpb25zW2ldLnRlc3QoZWxbaV0pICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0bWUuZXh0ZW5kKG1lLmV2ZW50VHlwZSA9IHt9LCB7XG5cdFx0dG91Y2hzdGFydDogMSxcblx0XHR0b3VjaG1vdmU6IDEsXG5cdFx0dG91Y2hlbmQ6IDEsXG5cblx0XHRtb3VzZWRvd246IDIsXG5cdFx0bW91c2Vtb3ZlOiAyLFxuXHRcdG1vdXNldXA6IDIsXG5cblx0XHRwb2ludGVyZG93bjogMyxcblx0XHRwb2ludGVybW92ZTogMyxcblx0XHRwb2ludGVydXA6IDMsXG5cblx0XHRNU1BvaW50ZXJEb3duOiAzLFxuXHRcdE1TUG9pbnRlck1vdmU6IDMsXG5cdFx0TVNQb2ludGVyVXA6IDNcblx0fSk7XG5cblx0bWUuZXh0ZW5kKG1lLmVhc2UgPSB7fSwge1xuXHRcdHF1YWRyYXRpYzoge1xuXHRcdFx0c3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHJldHVybiBrICogKCAyIC0gayApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2lyY3VsYXI6IHtcblx0XHRcdHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKScsXHQvLyBOb3QgcHJvcGVybHkgXCJjaXJjdWxhclwiIGJ1dCB0aGlzIGxvb2tzIGJldHRlciwgaXQgc2hvdWxkIGJlICgwLjA3NSwgMC44MiwgMC4xNjUsIDEpXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0cmV0dXJuIE1hdGguc3FydCggMSAtICggLS1rICogayApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRiYWNrOiB7XG5cdFx0XHRzdHlsZTogJ2N1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGIgPSA0O1xuXHRcdFx0XHRyZXR1cm4gKCBrID0gayAtIDEgKSAqIGsgKiAoICggYiArIDEgKSAqIGsgKyBiICkgKyAxO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ym91bmNlOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0aWYgKCAoIGsgLz0gMSApIDwgKCAxIC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMiAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcblx0XHRcdFx0fSBlbHNlIGlmICggayA8ICggMi41IC8gMi43NSApICkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbGFzdGljOiB7XG5cdFx0XHRzdHlsZTogJycsXG5cdFx0XHRmbjogZnVuY3Rpb24gKGspIHtcblx0XHRcdFx0dmFyIGYgPSAwLjIyLFxuXHRcdFx0XHRcdGUgPSAwLjQ7XG5cblx0XHRcdFx0aWYgKCBrID09PSAwICkgeyByZXR1cm4gMDsgfVxuXHRcdFx0XHRpZiAoIGsgPT0gMSApIHsgcmV0dXJuIDE7IH1cblxuXHRcdFx0XHRyZXR1cm4gKCBlICogTWF0aC5wb3coIDIsIC0gMTAgKiBrICkgKiBNYXRoLnNpbiggKCBrIC0gZiAvIDQgKSAqICggMiAqIE1hdGguUEkgKSAvIGYgKSArIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdG1lLnRhcCA9IGZ1bmN0aW9uIChlLCBldmVudE5hbWUpIHtcblx0XHR2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRldi5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblx0XHRldi5wYWdlWCA9IGUucGFnZVg7XG5cdFx0ZXYucGFnZVkgPSBlLnBhZ2VZO1xuXHRcdGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xuXHR9O1xuXG5cdG1lLmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXG5cdFx0XHRldjtcblxuXHRcdGlmICggISgvKFNFTEVDVHxJTlBVVHxURVhUQVJFQSkvaSkudGVzdCh0YXJnZXQudGFnTmFtZSkgKSB7XG5cdFx0XHRldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdFx0ZXYuaW5pdE1vdXNlRXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSwgZS52aWV3LCAxLFxuXHRcdFx0XHR0YXJnZXQuc2NyZWVuWCwgdGFyZ2V0LnNjcmVlblksIHRhcmdldC5jbGllbnRYLCB0YXJnZXQuY2xpZW50WSxcblx0XHRcdFx0ZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LFxuXHRcdFx0XHQwLCBudWxsKTtcblxuXHRcdFx0ZXYuX2NvbnN0cnVjdGVkID0gdHJ1ZTtcblx0XHRcdHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG1lO1xufSkoKTtcbmZ1bmN0aW9uIElTY3JvbGwgKGVsLCBvcHRpb25zKSB7XG5cdHRoaXMud3JhcHBlciA9IHR5cGVvZiBlbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG5cdHRoaXMuc2Nyb2xsZXIgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG5cdHRoaXMuc2Nyb2xsZXJTdHlsZSA9IHRoaXMuc2Nyb2xsZXIuc3R5bGU7XHRcdC8vIGNhY2hlIHN0eWxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcblxuXHR0aGlzLm9wdGlvbnMgPSB7XG5cblx0XHRyZXNpemVTY3JvbGxiYXJzOiB0cnVlLFxuXG5cdFx0bW91c2VXaGVlbFNwZWVkOiAyMCxcblxuXHRcdHNuYXBUaHJlc2hvbGQ6IDAuMzM0LFxuXG4vLyBJTlNFUlQgUE9JTlQ6IE9QVElPTlNcblx0XHRkaXNhYmxlUG9pbnRlciA6ICF1dGlscy5oYXNQb2ludGVyLFxuXHRcdGRpc2FibGVUb3VjaCA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgIXV0aWxzLmhhc1RvdWNoLFxuXHRcdGRpc2FibGVNb3VzZSA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgdXRpbHMuaGFzVG91Y2gsXG5cdFx0c3RhcnRYOiAwLFxuXHRcdHN0YXJ0WTogMCxcblx0XHRzY3JvbGxZOiB0cnVlLFxuXHRcdGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ6IDUsXG5cdFx0bW9tZW50dW06IHRydWUsXG5cblx0XHRib3VuY2U6IHRydWUsXG5cdFx0Ym91bmNlVGltZTogNjAwLFxuXHRcdGJvdW5jZUVhc2luZzogJycsXG5cblx0XHRwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcblx0XHRwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjogeyB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUKSQvIH0sXG5cblx0XHRIV0NvbXBvc2l0aW5nOiB0cnVlLFxuXHRcdHVzZVRyYW5zaXRpb246IHRydWUsXG5cdFx0dXNlVHJhbnNmb3JtOiB0cnVlLFxuXHRcdGJpbmRUb1dyYXBwZXI6IHR5cGVvZiB3aW5kb3cub25tb3VzZWRvd24gPT09IFwidW5kZWZpbmVkXCJcblx0fTtcblxuXHRmb3IgKCB2YXIgaSBpbiBvcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0aW9uc1xuXHR0aGlzLnRyYW5zbGF0ZVogPSB0aGlzLm9wdGlvbnMuSFdDb21wb3NpdGluZyAmJiB1dGlscy5oYXNQZXJzcGVjdGl2ZSA/ICcgdHJhbnNsYXRlWigwKScgOiAnJztcblxuXHR0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA9IHV0aWxzLmhhc1RyYW5zaXRpb24gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb247XG5cdHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gPSB1dGlscy5oYXNUcmFuc2Zvcm0gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybTtcblxuXHR0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgPSAhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggJiYgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0O1xuXG5cdC8vIElmIHlvdSB3YW50IGV2ZW50UGFzc3Rocm91Z2ggSSBoYXZlIHRvIGxvY2sgb25lIG9mIHRoZSBheGVzXG5cdHRoaXMub3B0aW9ucy5zY3JvbGxZID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyA/IGZhbHNlIDogdGhpcy5vcHRpb25zLnNjcm9sbFk7XG5cdHRoaXMub3B0aW9ucy5zY3JvbGxYID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnID8gZmFsc2UgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsWDtcblxuXHQvLyBXaXRoIGV2ZW50UGFzc3Rocm91Z2ggd2UgYWxzbyBuZWVkIGxvY2tEaXJlY3Rpb24gbWVjaGFuaXNtXG5cdHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsID0gdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgIXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID8gMCA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xuXG5cdHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcgPSB0eXBlb2YgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyA9PSAnc3RyaW5nJyA/IHV0aWxzLmVhc2VbdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZ10gfHwgdXRpbHMuZWFzZS5jaXJjdWxhciA6IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cblx0dGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcgPSB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyA9PT0gdW5kZWZpbmVkID8gNjAgOiB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZztcblxuXHRpZiAoIHRoaXMub3B0aW9ucy50YXAgPT09IHRydWUgKSB7XG5cdFx0dGhpcy5vcHRpb25zLnRhcCA9ICd0YXAnO1xuXHR9XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyA9PSAnc2NhbGUnICkge1xuXHRcdHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uID0gZmFsc2U7XG5cdH1cblxuXHR0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPyAtMSA6IDE7XG5cbi8vIElOU0VSVCBQT0lOVDogTk9STUFMSVpBVElPTlxuXG5cdC8vIFNvbWUgZGVmYXVsdHNcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcblx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0dGhpcy5fZXZlbnRzID0ge307XG5cbi8vIElOU0VSVCBQT0lOVDogREVGQVVMVFNcblxuXHR0aGlzLl9pbml0KCk7XG5cdHRoaXMucmVmcmVzaCgpO1xuXG5cdHRoaXMuc2Nyb2xsVG8odGhpcy5vcHRpb25zLnN0YXJ0WCwgdGhpcy5vcHRpb25zLnN0YXJ0WSk7XG5cdHRoaXMuZW5hYmxlKCk7XG59XG5cbklTY3JvbGwucHJvdG90eXBlID0ge1xuXHR2ZXJzaW9uOiAnNS4yLjAnLFxuXG5cdF9pbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5faW5pdEV2ZW50cygpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyB8fCB0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyApIHtcblx0XHRcdHRoaXMuX2luaXRJbmRpY2F0b3JzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubW91c2VXaGVlbCApIHtcblx0XHRcdHRoaXMuX2luaXRXaGVlbCgpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnNuYXAgKSB7XG5cdFx0XHR0aGlzLl9pbml0U25hcCgpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzICkge1xuXHRcdFx0dGhpcy5faW5pdEtleXMoKTtcblx0XHR9XG5cbi8vIElOU0VSVCBQT0lOVDogX2luaXRcblxuXHR9LFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLl9pbml0RXZlbnRzKHRydWUpO1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuIFx0XHR0aGlzLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xuXHRcdHRoaXMuX2V4ZWNFdmVudCgnZGVzdHJveScpO1xuXHR9LFxuXG5cdF90cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggZS50YXJnZXQgIT0gdGhpcy5zY3JvbGxlciB8fCAhdGhpcy5pc0luVHJhbnNpdGlvbiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuXHRcdGlmICggIXRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblx0fSxcblxuXHRfc3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gUmVhY3QgdG8gbGVmdCBtb3VzZSBidXR0b24gb25seVxuXHRcdGlmICggdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT0gMSApIHtcblx0XHQgIC8vIGZvciBidXR0b24gcHJvcGVydHlcblx0XHQgIC8vIGh0dHA6Ly91bml4cGFwYS5jb20vanMvbW91c2UuaHRtbFxuXHRcdCAgdmFyIGJ1dHRvbjtcblx0ICAgIGlmICghZS53aGljaCkge1xuXHQgICAgICAvKiBJRSBjYXNlICovXG5cdCAgICAgIGJ1dHRvbiA9IChlLmJ1dHRvbiA8IDIpID8gMCA6XG5cdCAgICAgICAgICAgICAgICgoZS5idXR0b24gPT0gNCkgPyAxIDogMik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvKiBBbGwgb3RoZXJzICovXG5cdCAgICAgIGJ1dHRvbiA9IGUuYnV0dG9uO1xuXHQgICAgfVxuXHRcdFx0aWYgKCBidXR0b24gIT09IDAgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgKHRoaXMuaW5pdGlhdGVkICYmIHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgJiYgIXV0aWxzLmlzQmFkQW5kcm9pZCAmJiAhdXRpbHMucHJldmVudERlZmF1bHRFeGNlcHRpb24oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHBvaW50ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSxcblx0XHRcdHBvcztcblxuXHRcdHRoaXMuaW5pdGlhdGVkXHQ9IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdO1xuXHRcdHRoaXMubW92ZWRcdFx0PSBmYWxzZTtcblx0XHR0aGlzLmRpc3RYXHRcdD0gMDtcblx0XHR0aGlzLmRpc3RZXHRcdD0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAwO1xuXG5cdFx0dGhpcy5zdGFydFRpbWUgPSB1dGlscy5nZXRUaW1lKCk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuXHRcdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuXHRcdFx0cG9zID0gdGhpcy5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0fSBlbHNlIGlmICggIXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNBbmltYXRpbmcgKSB7XG5cdFx0XHR0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhcnRYICAgID0gdGhpcy54O1xuXHRcdHRoaXMuc3RhcnRZICAgID0gdGhpcy55O1xuXHRcdHRoaXMuYWJzU3RhcnRYID0gdGhpcy54O1xuXHRcdHRoaXMuYWJzU3RhcnRZID0gdGhpcy55O1xuXHRcdHRoaXMucG9pbnRYICAgID0gcG9pbnQucGFnZVg7XG5cdFx0dGhpcy5wb2ludFkgICAgPSBwb2ludC5wYWdlWTtcblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcblx0fSxcblxuXHRfbW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICkge1x0Ly8gaW5jcmVhc2VzIHBlcmZvcm1hbmNlIG9uIEFuZHJvaWQ/IFRPRE86IGNoZWNrIVxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHZhciBwb2ludFx0XHQ9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUsXG5cdFx0XHRkZWx0YVhcdFx0PSBwb2ludC5wYWdlWCAtIHRoaXMucG9pbnRYLFxuXHRcdFx0ZGVsdGFZXHRcdD0gcG9pbnQucGFnZVkgLSB0aGlzLnBvaW50WSxcblx0XHRcdHRpbWVzdGFtcFx0PSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0YWJzRGlzdFgsIGFic0Rpc3RZO1xuXG5cdFx0dGhpcy5wb2ludFhcdFx0PSBwb2ludC5wYWdlWDtcblx0XHR0aGlzLnBvaW50WVx0XHQ9IHBvaW50LnBhZ2VZO1xuXG5cdFx0dGhpcy5kaXN0WFx0XHQrPSBkZWx0YVg7XG5cdFx0dGhpcy5kaXN0WVx0XHQrPSBkZWx0YVk7XG5cdFx0YWJzRGlzdFhcdFx0PSBNYXRoLmFicyh0aGlzLmRpc3RYKTtcblx0XHRhYnNEaXN0WVx0XHQ9IE1hdGguYWJzKHRoaXMuZGlzdFkpO1xuXG5cdFx0Ly8gV2UgbmVlZCB0byBtb3ZlIGF0IGxlYXN0IDEwIHBpeGVscyBmb3IgdGhlIHNjcm9sbGluZyB0byBpbml0aWF0ZVxuXHRcdGlmICggdGltZXN0YW1wIC0gdGhpcy5lbmRUaW1lID4gMzAwICYmIChhYnNEaXN0WCA8IDEwICYmIGFic0Rpc3RZIDwgMTApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHlvdSBhcmUgc2Nyb2xsaW5nIGluIG9uZSBkaXJlY3Rpb24gbG9jayB0aGUgb3RoZXJcblx0XHRpZiAoICF0aGlzLmRpcmVjdGlvbkxvY2tlZCAmJiAhdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgKSB7XG5cdFx0XHRpZiAoIGFic0Rpc3RYID4gYWJzRGlzdFkgKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCApIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnaCc7XHRcdC8vIGxvY2sgaG9yaXpvbnRhbGx5XG5cdFx0XHR9IGVsc2UgaWYgKCBhYnNEaXN0WSA+PSBhYnNEaXN0WCArIHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkICkge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICd2JztcdFx0Ly8gbG9jayB2ZXJ0aWNhbGx5XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICduJztcdFx0Ly8gbm8gbG9ja1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ2gnICkge1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAndmVydGljYWwnICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGFZID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PSAndicgKSB7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICdob3Jpem9udGFsJyApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcblx0XHRcdFx0dGhpcy5pbml0aWF0ZWQgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YVggPSAwO1xuXHRcdH1cblxuXHRcdGRlbHRhWCA9IHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCA/IGRlbHRhWCA6IDA7XG5cdFx0ZGVsdGFZID0gdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCA/IGRlbHRhWSA6IDA7XG5cblx0XHRuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cblx0XHQvLyBTbG93IGRvd24gaWYgb3V0c2lkZSBvZiB0aGUgYm91bmRhcmllc1xuXHRcdGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy54ICsgZGVsdGFYIC8gMyA6IG5ld1ggPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cdFx0aWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0bmV3WSA9IHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLnkgKyBkZWx0YVkgLyAzIDogbmV3WSA+IDAgPyAwIDogdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IGRlbHRhWCA+IDAgPyAtMSA6IGRlbHRhWCA8IDAgPyAxIDogMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSBkZWx0YVkgPiAwID8gLTEgOiBkZWx0YVkgPCAwID8gMSA6IDA7XG5cblx0XHRpZiAoICF0aGlzLm1vdmVkICkge1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxTdGFydCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubW92ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG4vKiBSRVBMQUNFIFNUQVJUOiBfbW92ZSAqL1xuXG5cdFx0aWYgKCB0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0VGltZSA+IDMwMCApIHtcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuXHRcdFx0dGhpcy5zdGFydFggPSB0aGlzLng7XG5cdFx0XHR0aGlzLnN0YXJ0WSA9IHRoaXMueTtcblx0XHR9XG5cbi8qIFJFUExBQ0UgRU5EOiBfbW92ZSAqL1xuXG5cdH0sXG5cblx0X2VuZDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcG9pbnQgPSBlLmNoYW5nZWRUb3VjaGVzID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUsXG5cdFx0XHRtb21lbnR1bVgsXG5cdFx0XHRtb21lbnR1bVksXG5cdFx0XHRkdXJhdGlvbiA9IHV0aWxzLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lLFxuXHRcdFx0bmV3WCA9IE1hdGgucm91bmQodGhpcy54KSxcblx0XHRcdG5ld1kgPSBNYXRoLnJvdW5kKHRoaXMueSksXG5cdFx0XHRkaXN0YW5jZVggPSBNYXRoLmFicyhuZXdYIC0gdGhpcy5zdGFydFgpLFxuXHRcdFx0ZGlzdGFuY2VZID0gTWF0aC5hYnMobmV3WSAtIHRoaXMuc3RhcnRZKSxcblx0XHRcdHRpbWUgPSAwLFxuXHRcdFx0ZWFzaW5nID0gJyc7XG5cblx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gMDtcblx0XHR0aGlzLmluaXRpYXRlZCA9IDA7XG5cdFx0dGhpcy5lbmRUaW1lID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0Ly8gcmVzZXQgaWYgd2UgYXJlIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRpZiAoIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZKTtcdC8vIGVuc3VyZXMgdGhhdCB0aGUgbGFzdCBwb3NpdGlvbiBpcyByb3VuZGVkXG5cblx0XHQvLyB3ZSBzY3JvbGxlZCBsZXNzIHRoYW4gMTAgcGl4ZWxzXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnRhcCApIHtcblx0XHRcdFx0dXRpbHMudGFwKGUsIHRoaXMub3B0aW9ucy50YXApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcblx0XHRcdFx0dXRpbHMuY2xpY2soZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsQ2FuY2VsJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9ldmVudHMuZmxpY2sgJiYgZHVyYXRpb24gPCAyMDAgJiYgZGlzdGFuY2VYIDwgMTAwICYmIGRpc3RhbmNlWSA8IDEwMCApIHtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnZmxpY2snKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubW9tZW50dW0gJiYgZHVyYXRpb24gPCAzMDAgKSB7XG5cdFx0XHRtb21lbnR1bVggPSB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyB1dGlscy5tb21lbnR1bSh0aGlzLngsIHRoaXMuc3RhcnRYLCBkdXJhdGlvbiwgdGhpcy5tYXhTY3JvbGxYLCB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy53cmFwcGVyV2lkdGggOiAwLCB0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKSA6IHsgZGVzdGluYXRpb246IG5ld1gsIGR1cmF0aW9uOiAwIH07XG5cdFx0XHRtb21lbnR1bVkgPSB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gdXRpbHMubW9tZW50dW0odGhpcy55LCB0aGlzLnN0YXJ0WSwgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsWSwgdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMud3JhcHBlckhlaWdodCA6IDAsIHRoaXMub3B0aW9ucy5kZWNlbGVyYXRpb24pIDogeyBkZXN0aW5hdGlvbjogbmV3WSwgZHVyYXRpb246IDAgfTtcblx0XHRcdG5ld1ggPSBtb21lbnR1bVguZGVzdGluYXRpb247XG5cdFx0XHRuZXdZID0gbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xuXHRcdFx0dGltZSA9IE1hdGgubWF4KG1vbWVudHVtWC5kdXJhdGlvbiwgbW9tZW50dW1ZLmR1cmF0aW9uKTtcblx0XHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSAxO1xuXHRcdH1cblxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcblx0XHRcdHZhciBzbmFwID0gdGhpcy5fbmVhcmVzdFNuYXAobmV3WCwgbmV3WSk7XG5cdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gc25hcDtcblx0XHRcdHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuXHRcdFx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMobmV3WCAtIHNuYXAueCksIDEwMDApLFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMobmV3WSAtIHNuYXAueSksIDEwMDApXG5cdFx0XHRcdFx0KSwgMzAwKTtcblx0XHRcdG5ld1ggPSBzbmFwLng7XG5cdFx0XHRuZXdZID0gc25hcC55O1xuXG5cdFx0XHR0aGlzLmRpcmVjdGlvblggPSAwO1xuXHRcdFx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0XHRcdGVhc2luZyA9IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cdFx0fVxuXG4vLyBJTlNFUlQgUE9JTlQ6IF9lbmRcblxuXHRcdGlmICggbmV3WCAhPSB0aGlzLnggfHwgbmV3WSAhPSB0aGlzLnkgKSB7XG5cdFx0XHQvLyBjaGFuZ2UgZWFzaW5nIGZ1bmN0aW9uIHdoZW4gc2Nyb2xsZXIgZ29lcyBvdXQgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRcdGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCB8fCBuZXdZID4gMCB8fCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0XHRlYXNpbmcgPSB1dGlscy5lYXNlLnF1YWRyYXRpYztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCB0aW1lLCBlYXNpbmcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdH0sXG5cblx0X3Jlc2l6ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuXG5cdFx0dGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGF0LnJlZnJlc2goKTtcblx0XHR9LCB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyk7XG5cdH0sXG5cblx0cmVzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHRpbWUpIHtcblx0XHR2YXIgeCA9IHRoaXMueCxcblx0XHRcdHkgPSB0aGlzLnk7XG5cblx0XHR0aW1lID0gdGltZSB8fCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsIHx8IHRoaXMueCA+IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLnggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHR4ID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgfHwgdGhpcy55ID4gMCApIHtcblx0XHRcdHkgPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHRoaXMueSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdHkgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0fVxuXG5cdFx0aWYgKCB4ID09IHRoaXMueCAmJiB5ID09IHRoaXMueSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcpO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0ZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9LFxuXG5cdGVuYWJsZTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH0sXG5cblx0cmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZiA9IHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7XHRcdC8vIEZvcmNlIHJlZmxvd1xuXG5cdFx0dGhpcy53cmFwcGVyV2lkdGhcdD0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuXHRcdHRoaXMud3JhcHBlckhlaWdodFx0PSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4vKiBSRVBMQUNFIFNUQVJUOiByZWZyZXNoICovXG5cblx0XHR0aGlzLnNjcm9sbGVyV2lkdGhcdD0gdGhpcy5zY3JvbGxlci5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLnNjcm9sbGVySGVpZ2h0XHQ9IHRoaXMuc2Nyb2xsZXIub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0dGhpcy5tYXhTY3JvbGxYXHRcdD0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNjcm9sbGVyV2lkdGg7XG5cdFx0dGhpcy5tYXhTY3JvbGxZXHRcdD0gdGhpcy53cmFwcGVySGVpZ2h0IC0gdGhpcy5zY3JvbGxlckhlaWdodDtcblxuLyogUkVQTEFDRSBFTkQ6IHJlZnJlc2ggKi9cblxuXHRcdHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWCAmJiB0aGlzLm1heFNjcm9sbFggPCAwO1xuXHRcdHRoaXMuaGFzVmVydGljYWxTY3JvbGxcdFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWSAmJiB0aGlzLm1heFNjcm9sbFkgPCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICkge1xuXHRcdFx0dGhpcy5tYXhTY3JvbGxYID0gMDtcblx0XHRcdHRoaXMuc2Nyb2xsZXJXaWR0aCA9IHRoaXMud3JhcHBlcldpZHRoO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR0aGlzLm1heFNjcm9sbFkgPSAwO1xuXHRcdFx0dGhpcy5zY3JvbGxlckhlaWdodCA9IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHR9XG5cblx0XHR0aGlzLmVuZFRpbWUgPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblxuXHRcdHRoaXMud3JhcHBlck9mZnNldCA9IHV0aWxzLm9mZnNldCh0aGlzLndyYXBwZXIpO1xuXG5cdFx0dGhpcy5fZXhlY0V2ZW50KCdyZWZyZXNoJyk7XG5cblx0XHR0aGlzLnJlc2V0UG9zaXRpb24oKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfcmVmcmVzaFxuXG5cdH0sXG5cblx0b246IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXSA9IFtdO1xuXHRcdH1cblxuXHRcdHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGZuKTtcblx0fSxcblxuXHRvZmY6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaW5kZXggPSB0aGlzLl9ldmVudHNbdHlwZV0uaW5kZXhPZihmbik7XG5cblx0XHRpZiAoIGluZGV4ID4gLTEgKSB7XG5cdFx0XHR0aGlzLl9ldmVudHNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH0sXG5cblx0X2V4ZWNFdmVudDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG5cblx0XHRpZiAoICFsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXVtpXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGxCeTogZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZykge1xuXHRcdHggPSB0aGlzLnggKyB4O1xuXHRcdHkgPSB0aGlzLnkgKyB5O1xuXHRcdHRpbWUgPSB0aW1lIHx8IDA7XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0c2Nyb2xsVG86IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHRlYXNpbmcgPSBlYXNpbmcgfHwgdXRpbHMuZWFzZS5jaXJjdWxhcjtcblxuXHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aW1lID4gMDtcblx0XHR2YXIgdHJhbnNpdGlvblR5cGUgPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiBlYXNpbmcuc3R5bGU7XG5cdFx0aWYgKCAhdGltZSB8fCB0cmFuc2l0aW9uVHlwZSApIHtcblx0XHRcdFx0aWYodHJhbnNpdGlvblR5cGUpIHtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZWFzaW5nLnN0eWxlKTtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSh0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKHgsIHkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9hbmltYXRlKHgsIHksIHRpbWUsIGVhc2luZy5mbik7XG5cdFx0fVxuXHR9LFxuXG5cdHNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24gKGVsLCB0aW1lLCBvZmZzZXRYLCBvZmZzZXRZLCBlYXNpbmcpIHtcblx0XHRlbCA9IGVsLm5vZGVUeXBlID8gZWwgOiB0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXG5cdFx0aWYgKCAhZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHBvcyA9IHV0aWxzLm9mZnNldChlbCk7XG5cblx0XHRwb3MubGVmdCAtPSB0aGlzLndyYXBwZXJPZmZzZXQubGVmdDtcblx0XHRwb3MudG9wICAtPSB0aGlzLndyYXBwZXJPZmZzZXQudG9wO1xuXG5cdFx0Ly8gaWYgb2Zmc2V0WC9ZIGFyZSB0cnVlIHdlIGNlbnRlciB0aGUgZWxlbWVudCB0byB0aGUgc2NyZWVuXG5cdFx0aWYgKCBvZmZzZXRYID09PSB0cnVlICkge1xuXHRcdFx0b2Zmc2V0WCA9IE1hdGgucm91bmQoZWwub2Zmc2V0V2lkdGggLyAyIC0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoIC8gMik7XG5cdFx0fVxuXHRcdGlmICggb2Zmc2V0WSA9PT0gdHJ1ZSApIHtcblx0XHRcdG9mZnNldFkgPSBNYXRoLnJvdW5kKGVsLm9mZnNldEhlaWdodCAvIDIgLSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMik7XG5cdFx0fVxuXG5cdFx0cG9zLmxlZnQgLT0gb2Zmc2V0WCB8fCAwO1xuXHRcdHBvcy50b3AgIC09IG9mZnNldFkgfHwgMDtcblxuXHRcdHBvcy5sZWZ0ID0gcG9zLmxlZnQgPiAwID8gMCA6IHBvcy5sZWZ0IDwgdGhpcy5tYXhTY3JvbGxYID8gdGhpcy5tYXhTY3JvbGxYIDogcG9zLmxlZnQ7XG5cdFx0cG9zLnRvcCAgPSBwb3MudG9wICA+IDAgPyAwIDogcG9zLnRvcCAgPCB0aGlzLm1heFNjcm9sbFkgPyB0aGlzLm1heFNjcm9sbFkgOiBwb3MudG9wO1xuXG5cdFx0dGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lID09PSBudWxsIHx8IHRpbWUgPT09ICdhdXRvJyA/IE1hdGgubWF4KE1hdGguYWJzKHRoaXMueC1wb3MubGVmdCksIE1hdGguYWJzKHRoaXMueS1wb3MudG9wKSkgOiB0aW1lO1xuXG5cdFx0dGhpcy5zY3JvbGxUbyhwb3MubGVmdCwgcG9zLnRvcCwgdGltZSwgZWFzaW5nKTtcblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblxuXHRcdHZhciBkdXJhdGlvblByb3AgPSB1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSB0aW1lICsgJ21zJztcblxuXHRcdGlmICggIXRpbWUgJiYgdXRpbHMuaXNCYWRBbmRyb2lkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuXHRcdFx0Ly8gcmVtb3ZlIDAuMDAwMW1zXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID09PSAnMC4wMDAxbXMnKSB7XG5cdFx0XHRcdFx0c2VsZi5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWUodGltZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1lXG5cblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKGVhc2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuXG5cdH0sXG5cblx0X3RyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cbi8qIFJFUExBQ0UgU1RBUlQ6IF90cmFuc2xhdGUgKi9cblxuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KScgKyB0aGlzLnRyYW5zbGF0ZVo7XG5cbi8qIFJFUExBQ0UgRU5EOiBfdHJhbnNsYXRlICovXG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0eCA9IE1hdGgucm91bmQoeCk7XG5cdFx0XHR5ID0gTWF0aC5yb3VuZCh5KTtcblx0XHRcdHRoaXMuc2Nyb2xsZXJTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGUudG9wID0geSArICdweCc7XG5cdFx0fVxuXG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXG5cblx0aWYgKCB0aGlzLmluZGljYXRvcnMgKSB7XG5cdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JzW2ldLnVwZGF0ZVBvc2l0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNsYXRlXG5cblx0fSxcblxuXHRfaW5pdEV2ZW50czogZnVuY3Rpb24gKHJlbW92ZSkge1xuXHRcdHZhciBldmVudFR5cGUgPSByZW1vdmUgPyB1dGlscy5yZW1vdmVFdmVudCA6IHV0aWxzLmFkZEV2ZW50LFxuXHRcdFx0dGFyZ2V0ID0gdGhpcy5vcHRpb25zLmJpbmRUb1dyYXBwZXIgPyB0aGlzLndyYXBwZXIgOiB3aW5kb3c7XG5cblx0XHRldmVudFR5cGUod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzKTtcblx0XHRldmVudFR5cGUod2luZG93LCAncmVzaXplJywgdGhpcyk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcblx0XHRcdGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsICdjbGljaycsIHRoaXMsIHRydWUpO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlTW91c2UgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAnbW91c2Vkb3duJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2Vtb3ZlJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2VjYW5jZWwnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICdtb3VzZXVwJywgdGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKCB1dGlscy5oYXNQb2ludGVyICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBvaW50ZXIgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJkb3duJyksIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmNhbmNlbCcpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmICggdXRpbHMuaGFzVG91Y2ggJiYgIXRoaXMub3B0aW9ucy5kaXNhYmxlVG91Y2ggKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNobW92ZScsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAndG91Y2hlbmQnLCB0aGlzKTtcblx0XHR9XG5cblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ3RyYW5zaXRpb25lbmQnLCB0aGlzKTtcblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0aGlzKTtcblx0XHRldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ29UcmFuc2l0aW9uRW5kJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICdNU1RyYW5zaXRpb25FbmQnLCB0aGlzKTtcblx0fSxcblxuXHRnZXRDb21wdXRlZFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2Nyb2xsZXIsIG51bGwpLFxuXHRcdFx0eCwgeTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblx0XHRcdG1hdHJpeCA9IG1hdHJpeFt1dGlscy5zdHlsZS50cmFuc2Zvcm1dLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XG5cdFx0XHR4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XG5cdFx0XHR5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHggPSArbWF0cml4LmxlZnQucmVwbGFjZSgvW14tXFxkLl0vZywgJycpO1xuXHRcdFx0eSA9ICttYXRyaXgudG9wLnJlcGxhY2UoL1teLVxcZC5dL2csICcnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geyB4OiB4LCB5OiB5IH07XG5cdH0sXG5cdF9pbml0SW5kaWNhdG9yczogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBpbnRlcmFjdGl2ZSA9IHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZVNjcm9sbGJhcnMsXG5cdFx0XHRjdXN0b21TdHlsZSA9IHR5cGVvZiB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyAhPSAnc3RyaW5nJyxcblx0XHRcdGluZGljYXRvcnMgPSBbXSxcblx0XHRcdGluZGljYXRvcjtcblxuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuaW5kaWNhdG9ycyA9IFtdO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyApIHtcblx0XHRcdC8vIFZlcnRpY2FsIHNjcm9sbGJhclxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsWSApIHtcblx0XHRcdFx0aW5kaWNhdG9yID0ge1xuXHRcdFx0XHRcdGVsOiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyKCd2JywgaW50ZXJhY3RpdmUsIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmUsXG5cdFx0XHRcdFx0ZGVmYXVsdFNjcm9sbGJhcnM6IHRydWUsXG5cdFx0XHRcdFx0Y3VzdG9tU3R5bGU6IGN1c3RvbVN0eWxlLFxuXHRcdFx0XHRcdHJlc2l6ZTogdGhpcy5vcHRpb25zLnJlc2l6ZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0c2hyaW5rOiB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRmYWRlOiB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0bGlzdGVuWDogZmFsc2Vcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yLmVsKTtcblx0XHRcdFx0aW5kaWNhdG9ycy5wdXNoKGluZGljYXRvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhvcml6b250YWwgc2Nyb2xsYmFyXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zY3JvbGxYICkge1xuXHRcdFx0XHRpbmRpY2F0b3IgPSB7XG5cdFx0XHRcdFx0ZWw6IGNyZWF0ZURlZmF1bHRTY3JvbGxiYXIoJ2gnLCBpbnRlcmFjdGl2ZSwgdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMpLFxuXHRcdFx0XHRcdGludGVyYWN0aXZlOiBpbnRlcmFjdGl2ZSxcblx0XHRcdFx0XHRkZWZhdWx0U2Nyb2xsYmFyczogdHJ1ZSxcblx0XHRcdFx0XHRjdXN0b21TdHlsZTogY3VzdG9tU3R5bGUsXG5cdFx0XHRcdFx0cmVzaXplOiB0aGlzLm9wdGlvbnMucmVzaXplU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRzaHJpbms6IHRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzLFxuXHRcdFx0XHRcdGZhZGU6IHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRsaXN0ZW5ZOiBmYWxzZVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbmRpY2F0b3IuZWwpO1xuXHRcdFx0XHRpbmRpY2F0b3JzLnB1c2goaW5kaWNhdG9yKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Ly8gVE9ETzogY2hlY2sgY29uY2F0IGNvbXBhdGliaWxpdHlcblx0XHRcdGluZGljYXRvcnMgPSBpbmRpY2F0b3JzLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyk7XG5cdFx0fVxuXG5cdFx0Zm9yICggdmFyIGkgPSBpbmRpY2F0b3JzLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9ycy5wdXNoKCBuZXcgSW5kaWNhdG9yKHRoaXMsIGluZGljYXRvcnNbaV0pICk7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogY2hlY2sgaWYgd2UgY2FuIHVzZSBhcnJheS5tYXAgKHdpZGUgY29tcGF0aWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UgaXNzdWVzKVxuXHRcdGZ1bmN0aW9uIF9pbmRpY2F0b3JzTWFwIChmbikge1xuXHRcdFx0aWYgKHRoYXQuaW5kaWNhdG9ycykge1xuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IHRoYXQuaW5kaWNhdG9ycy5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0Zm4uY2FsbCh0aGF0LmluZGljYXRvcnNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMgKSB7XG5cdFx0XHR0aGlzLm9uKCdzY3JvbGxFbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZhZGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5vbignc2Nyb2xsQ2FuY2VsJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mYWRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oJ3Njcm9sbFN0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mYWRlKDEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm9uKCdiZWZvcmVTY3JvbGxTdGFydCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMuZmFkZSgxLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdHRoaXMub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRkZWxldGUgdGhpcy5pbmRpY2F0b3JzO1xuXHRcdH0pO1xuXHR9LFxuXG5cdF9pbml0V2hlZWw6IGZ1bmN0aW9uICgpIHtcblx0XHR1dGlscy5hZGRFdmVudCh0aGlzLndyYXBwZXIsICd3aGVlbCcsIHRoaXMpO1xuXHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMud3JhcHBlciwgJ21vdXNld2hlZWwnLCB0aGlzKTtcblx0XHR1dGlscy5hZGRFdmVudCh0aGlzLndyYXBwZXIsICdET01Nb3VzZVNjcm9sbCcsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLndoZWVsVGltZW91dCk7XG5cdFx0XHR0aGlzLndoZWVsVGltZW91dCA9IG51bGw7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsICd3aGVlbCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLCAnbW91c2V3aGVlbCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcblx0XHR9KTtcblx0fSxcblxuXHRfd2hlZWw6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciB3aGVlbERlbHRhWCwgd2hlZWxEZWx0YVksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0dGhhdCA9IHRoaXM7XG5cblx0XHRpZiAoIHRoaXMud2hlZWxUaW1lb3V0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0aGF0Ll9leGVjRXZlbnQoJ3Njcm9sbFN0YXJ0Jyk7XG5cdFx0fVxuXG5cdFx0Ly8gRXhlY3V0ZSB0aGUgc2Nyb2xsRW5kIGV2ZW50IGFmdGVyIDQwMG1zIHRoZSB3aGVlbCBzdG9wcGVkIHNjcm9sbGluZ1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLndoZWVsVGltZW91dCk7XG5cdFx0dGhpcy53aGVlbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmKCF0aGF0Lm9wdGlvbnMuc25hcCkge1xuXHRcdFx0XHR0aGF0Ll9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdFx0fVxuXHRcdFx0dGhhdC53aGVlbFRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cdFx0fSwgNDAwKTtcblxuXHRcdGlmICggJ2RlbHRhWCcgaW4gZSApIHtcblx0XHRcdGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuXHRcdFx0XHR3aGVlbERlbHRhWCA9IC1lLmRlbHRhWCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0XHRcdHdoZWVsRGVsdGFZID0gLWUuZGVsdGFZICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoZWVsRGVsdGFYID0gLWUuZGVsdGFYO1xuXHRcdFx0XHR3aGVlbERlbHRhWSA9IC1lLmRlbHRhWTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCAnd2hlZWxEZWx0YVgnIGluIGUgKSB7XG5cdFx0XHR3aGVlbERlbHRhWCA9IGUud2hlZWxEZWx0YVggLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdFx0d2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gMTIwICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHR9IGVsc2UgaWYgKCAnd2hlZWxEZWx0YScgaW4gZSApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGEgLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoICdkZXRhaWwnIGluIGUgKSB7XG5cdFx0XHR3aGVlbERlbHRhWCA9IHdoZWVsRGVsdGFZID0gLWUuZGV0YWlsIC8gMyAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aGVlbERlbHRhWCAqPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb247XG5cdFx0d2hlZWxEZWx0YVkgKj0gdGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVk7XG5cdFx0XHR3aGVlbERlbHRhWSA9IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYO1xuXHRcdFx0bmV3WSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cblx0XHRcdGlmICggd2hlZWxEZWx0YVggPiAwICkge1xuXHRcdFx0XHRuZXdYLS07XG5cdFx0XHR9IGVsc2UgaWYgKCB3aGVlbERlbHRhWCA8IDAgKSB7XG5cdFx0XHRcdG5ld1grKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aGVlbERlbHRhWSA+IDAgKSB7XG5cdFx0XHRcdG5ld1ktLTtcblx0XHRcdH0gZWxzZSBpZiAoIHdoZWVsRGVsdGFZIDwgMCApIHtcblx0XHRcdFx0bmV3WSsrO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmdvVG9QYWdlKG5ld1gsIG5ld1kpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bmV3WCA9IHRoaXMueCArIE1hdGgucm91bmQodGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsID8gd2hlZWxEZWx0YVggOiAwKTtcblx0XHRuZXdZID0gdGhpcy55ICsgTWF0aC5yb3VuZCh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gd2hlZWxEZWx0YVkgOiAwKTtcblxuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IHdoZWVsRGVsdGFYID4gMCA/IC0xIDogd2hlZWxEZWx0YVggPCAwID8gMSA6IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gd2hlZWxEZWx0YVkgPiAwID8gLTEgOiB3aGVlbERlbHRhWSA8IDAgPyAxIDogMDtcblxuXHRcdGlmICggbmV3WCA+IDAgKSB7XG5cdFx0XHRuZXdYID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0bmV3WCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cblx0XHRpZiAoIG5ld1kgPiAwICkge1xuXHRcdFx0bmV3WSA9IDA7XG5cdFx0fSBlbHNlIGlmICggbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfd2hlZWxcblx0fSxcblxuXHRfaW5pdFNuYXA6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0ge307XG5cblx0XHRpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMuc25hcCA9PSAnc3RyaW5nJyApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zbmFwID0gdGhpcy5zY3JvbGxlci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5zbmFwKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGkgPSAwLCBsLFxuXHRcdFx0XHRtID0gMCwgbixcblx0XHRcdFx0Y3gsIGN5LFxuXHRcdFx0XHR4ID0gMCwgeSxcblx0XHRcdFx0c3RlcFggPSB0aGlzLm9wdGlvbnMuc25hcFN0ZXBYIHx8IHRoaXMud3JhcHBlcldpZHRoLFxuXHRcdFx0XHRzdGVwWSA9IHRoaXMub3B0aW9ucy5zbmFwU3RlcFkgfHwgdGhpcy53cmFwcGVySGVpZ2h0LFxuXHRcdFx0XHRlbDtcblxuXHRcdFx0dGhpcy5wYWdlcyA9IFtdO1xuXG5cdFx0XHRpZiAoICF0aGlzLndyYXBwZXJXaWR0aCB8fCAhdGhpcy53cmFwcGVySGVpZ2h0IHx8ICF0aGlzLnNjcm9sbGVyV2lkdGggfHwgIXRoaXMuc2Nyb2xsZXJIZWlnaHQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcCA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0Y3ggPSBNYXRoLnJvdW5kKCBzdGVwWCAvIDIgKTtcblx0XHRcdFx0Y3kgPSBNYXRoLnJvdW5kKCBzdGVwWSAvIDIgKTtcblxuXHRcdFx0XHR3aGlsZSAoIHggPiAtdGhpcy5zY3JvbGxlcldpZHRoICkge1xuXHRcdFx0XHRcdHRoaXMucGFnZXNbaV0gPSBbXTtcblx0XHRcdFx0XHRsID0gMDtcblx0XHRcdFx0XHR5ID0gMDtcblxuXHRcdFx0XHRcdHdoaWxlICggeSA+IC10aGlzLnNjcm9sbGVySGVpZ2h0ICkge1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlc1tpXVtsXSA9IHtcblx0XHRcdFx0XHRcdFx0eDogTWF0aC5tYXgoeCwgdGhpcy5tYXhTY3JvbGxYKSxcblx0XHRcdFx0XHRcdFx0eTogTWF0aC5tYXgoeSwgdGhpcy5tYXhTY3JvbGxZKSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHN0ZXBYLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHN0ZXBZLFxuXHRcdFx0XHRcdFx0XHRjeDogeCAtIGN4LFxuXHRcdFx0XHRcdFx0XHRjeTogeSAtIGN5XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHR5IC09IHN0ZXBZO1xuXHRcdFx0XHRcdFx0bCsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHggLT0gc3RlcFg7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbCA9IHRoaXMub3B0aW9ucy5zbmFwO1xuXHRcdFx0XHRsID0gZWwubGVuZ3RoO1xuXHRcdFx0XHRuID0gLTE7XG5cblx0XHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGlmICggaSA9PT0gMCB8fCBlbFtpXS5vZmZzZXRMZWZ0IDw9IGVsW2ktMV0ub2Zmc2V0TGVmdCApIHtcblx0XHRcdFx0XHRcdG0gPSAwO1xuXHRcdFx0XHRcdFx0bisrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggIXRoaXMucGFnZXNbbV0gKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW21dID0gW107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0eCA9IE1hdGgubWF4KC1lbFtpXS5vZmZzZXRMZWZ0LCB0aGlzLm1heFNjcm9sbFgpO1xuXHRcdFx0XHRcdHkgPSBNYXRoLm1heCgtZWxbaV0ub2Zmc2V0VG9wLCB0aGlzLm1heFNjcm9sbFkpO1xuXHRcdFx0XHRcdGN4ID0geCAtIE1hdGgucm91bmQoZWxbaV0ub2Zmc2V0V2lkdGggLyAyKTtcblx0XHRcdFx0XHRjeSA9IHkgLSBNYXRoLnJvdW5kKGVsW2ldLm9mZnNldEhlaWdodCAvIDIpO1xuXG5cdFx0XHRcdFx0dGhpcy5wYWdlc1ttXVtuXSA9IHtcblx0XHRcdFx0XHRcdHg6IHgsXG5cdFx0XHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRcdFx0d2lkdGg6IGVsW2ldLm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBlbFtpXS5vZmZzZXRIZWlnaHQsXG5cdFx0XHRcdFx0XHRjeDogY3gsXG5cdFx0XHRcdFx0XHRjeTogY3lcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0aWYgKCB4ID4gdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0XHRcdFx0bSsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UucGFnZVggfHwgMCwgdGhpcy5jdXJyZW50UGFnZS5wYWdlWSB8fCAwLCAwKTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNuYXAgdGhyZXNob2xkIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCAlIDEgPT09IDAgKSB7XG5cdFx0XHRcdHRoaXMuc25hcFRocmVzaG9sZFggPSB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZDtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWSA9IHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWCA9IE1hdGgucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS53aWR0aCAqIHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkKTtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWSA9IE1hdGgucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS5oZWlnaHQgKiB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdmbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcblx0XHRcdFx0XHRNYXRoLm1heChcblx0XHRcdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKHRoaXMueCAtIHRoaXMuc3RhcnRYKSwgMTAwMCksXG5cdFx0XHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyh0aGlzLnkgLSB0aGlzLnN0YXJ0WSksIDEwMDApXG5cdFx0XHRcdFx0KSwgMzAwKTtcblxuXHRcdFx0dGhpcy5nb1RvUGFnZShcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZS5wYWdlWCArIHRoaXMuZGlyZWN0aW9uWCxcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZS5wYWdlWSArIHRoaXMuZGlyZWN0aW9uWSxcblx0XHRcdFx0dGltZVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSxcblxuXHRfbmVhcmVzdFNuYXA6IGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0aWYgKCAhdGhpcy5wYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB4OiAwLCB5OiAwLCBwYWdlWDogMCwgcGFnZVk6IDAgfTtcblx0XHR9XG5cblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRsID0gdGhpcy5wYWdlcy5sZW5ndGgsXG5cdFx0XHRtID0gMDtcblxuXHRcdC8vIENoZWNrIGlmIHdlIGV4Y2VlZGVkIHRoZSBzbmFwIHRocmVzaG9sZFxuXHRcdGlmICggTWF0aC5hYnMoeCAtIHRoaXMuYWJzU3RhcnRYKSA8IHRoaXMuc25hcFRocmVzaG9sZFggJiZcblx0XHRcdE1hdGguYWJzKHkgLSB0aGlzLmFic1N0YXJ0WSkgPCB0aGlzLnNuYXBUaHJlc2hvbGRZICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKCB4ID4gMCApIHtcblx0XHRcdHggPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHR4ID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggeSA+IDAgKSB7XG5cdFx0XHR5ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB5IDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0eSA9IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRpZiAoIHggPj0gdGhpcy5wYWdlc1tpXVswXS5jeCApIHtcblx0XHRcdFx0eCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bCA9IHRoaXMucGFnZXNbaV0ubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBtIDwgbDsgbSsrICkge1xuXHRcdFx0aWYgKCB5ID49IHRoaXMucGFnZXNbMF1bbV0uY3kgKSB7XG5cdFx0XHRcdHkgPSB0aGlzLnBhZ2VzWzBdW21dLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaSA9PSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYICkge1xuXHRcdFx0aSArPSB0aGlzLmRpcmVjdGlvblg7XG5cblx0XHRcdGlmICggaSA8IDAgKSB7XG5cdFx0XHRcdGkgPSAwO1xuXHRcdFx0fSBlbHNlIGlmICggaSA+PSB0aGlzLnBhZ2VzLmxlbmd0aCApIHtcblx0XHRcdFx0aSA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMTtcblx0XHRcdH1cblxuXHRcdFx0eCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcblx0XHR9XG5cblx0XHRpZiAoIG0gPT0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWSApIHtcblx0XHRcdG0gKz0gdGhpcy5kaXJlY3Rpb25ZO1xuXG5cdFx0XHRpZiAoIG0gPCAwICkge1xuXHRcdFx0XHRtID0gMDtcblx0XHRcdH0gZWxzZSBpZiAoIG0gPj0gdGhpcy5wYWdlc1swXS5sZW5ndGggKSB7XG5cdFx0XHRcdG0gPSB0aGlzLnBhZ2VzWzBdLmxlbmd0aCAtIDE7XG5cdFx0XHR9XG5cblx0XHRcdHkgPSB0aGlzLnBhZ2VzWzBdW21dLnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IHgsXG5cdFx0XHR5OiB5LFxuXHRcdFx0cGFnZVg6IGksXG5cdFx0XHRwYWdlWTogbVxuXHRcdH07XG5cdH0sXG5cblx0Z29Ub1BhZ2U6IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHRlYXNpbmcgPSBlYXNpbmcgfHwgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZztcblxuXHRcdGlmICggeCA+PSB0aGlzLnBhZ2VzLmxlbmd0aCApIHtcblx0XHRcdHggPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIGlmICggeCA8IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9XG5cblx0XHRpZiAoIHkgPj0gdGhpcy5wYWdlc1t4XS5sZW5ndGggKSB7XG5cdFx0XHR5ID0gdGhpcy5wYWdlc1t4XS5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoIHkgPCAwICkge1xuXHRcdFx0eSA9IDA7XG5cdFx0fVxuXG5cdFx0dmFyIHBvc1ggPSB0aGlzLnBhZ2VzW3hdW3ldLngsXG5cdFx0XHRwb3NZID0gdGhpcy5wYWdlc1t4XVt5XS55O1xuXG5cdFx0dGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5zbmFwU3BlZWQgfHwgTWF0aC5tYXgoXG5cdFx0XHRNYXRoLm1heChcblx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnMocG9zWCAtIHRoaXMueCksIDEwMDApLFxuXHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyhwb3NZIC0gdGhpcy55KSwgMTAwMClcblx0XHRcdCksIDMwMCkgOiB0aW1lO1xuXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IHtcblx0XHRcdHg6IHBvc1gsXG5cdFx0XHR5OiBwb3NZLFxuXHRcdFx0cGFnZVg6IHgsXG5cdFx0XHRwYWdlWTogeVxuXHRcdH07XG5cblx0XHR0aGlzLnNjcm9sbFRvKHBvc1gsIHBvc1ksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0bmV4dDogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuXHRcdHZhciB4ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCxcblx0XHRcdHkgPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZO1xuXG5cdFx0eCsrO1xuXG5cdFx0aWYgKCB4ID49IHRoaXMucGFnZXMubGVuZ3RoICYmIHRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHRcdHkrKztcblx0XHR9XG5cblx0XHR0aGlzLmdvVG9QYWdlKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0cHJldjogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuXHRcdHZhciB4ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCxcblx0XHRcdHkgPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZO1xuXG5cdFx0eC0tO1xuXG5cdFx0aWYgKCB4IDwgMCAmJiB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0eCA9IDA7XG5cdFx0XHR5LS07XG5cdFx0fVxuXG5cdFx0dGhpcy5nb1RvUGFnZSh4LCB5LCB0aW1lLCBlYXNpbmcpO1xuXHR9LFxuXG5cdF9pbml0S2V5czogZnVuY3Rpb24gKGUpIHtcblx0XHQvLyBkZWZhdWx0IGtleSBiaW5kaW5nc1xuXHRcdHZhciBrZXlzID0ge1xuXHRcdFx0cGFnZVVwOiAzMyxcblx0XHRcdHBhZ2VEb3duOiAzNCxcblx0XHRcdGVuZDogMzUsXG5cdFx0XHRob21lOiAzNixcblx0XHRcdGxlZnQ6IDM3LFxuXHRcdFx0dXA6IDM4LFxuXHRcdFx0cmlnaHQ6IDM5LFxuXHRcdFx0ZG93bjogNDBcblx0XHR9O1xuXHRcdHZhciBpO1xuXG5cdFx0Ly8gaWYgeW91IGdpdmUgbWUgY2hhcmFjdGVycyBJIGdpdmUgeW91IGtleWNvZGVcblx0XHRpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MgPT0gJ29iamVjdCcgKSB7XG5cdFx0XHRmb3IgKCBpIGluIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyApIHtcblx0XHRcdFx0aWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID09ICdzdHJpbmcnICkge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXSA9IHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzID0ge307XG5cdFx0fVxuXG5cdFx0Zm9yICggaSBpbiBrZXlzICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID0gdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldIHx8IGtleXNbaV07XG5cdFx0fVxuXG5cdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAna2V5ZG93bicsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ2tleWRvd24nLCB0aGlzKTtcblx0XHR9KTtcblx0fSxcblxuXHRfa2V5OiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggIXRoaXMuZW5hYmxlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgc25hcCA9IHRoaXMub3B0aW9ucy5zbmFwLFx0Ly8gd2UgYXJlIHVzaW5nIHRoaXMgYWxvdCwgYmV0dGVyIHRvIGNhY2hlIGl0XG5cdFx0XHRuZXdYID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVggOiB0aGlzLngsXG5cdFx0XHRuZXdZID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVkgOiB0aGlzLnksXG5cdFx0XHRub3cgPSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRwcmV2VGltZSA9IHRoaXMua2V5VGltZSB8fCAwLFxuXHRcdFx0YWNjZWxlcmF0aW9uID0gMC4yNTAsXG5cdFx0XHRwb3M7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHRwb3MgPSB0aGlzLmdldENvbXB1dGVkUG9zaXRpb24oKTtcblxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5rZXlBY2NlbGVyYXRpb24gPSBub3cgLSBwcmV2VGltZSA8IDIwMCA/IE1hdGgubWluKHRoaXMua2V5QWNjZWxlcmF0aW9uICsgYWNjZWxlcmF0aW9uLCA1MCkgOiAwO1xuXG5cdFx0c3dpdGNoICggZS5rZXlDb2RlICkge1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZVVwOlxuXHRcdFx0XHRpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdFx0XHRuZXdYICs9IHNuYXAgPyAxIDogdGhpcy53cmFwcGVyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3WSArPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnBhZ2VEb3duOlxuXHRcdFx0XHRpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdFx0XHRuZXdYIC09IHNuYXAgPyAxIDogdGhpcy53cmFwcGVyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3WSAtPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmVuZDpcblx0XHRcdFx0bmV3WCA9IHNuYXAgPyB0aGlzLnBhZ2VzLmxlbmd0aC0xIDogdGhpcy5tYXhTY3JvbGxYO1xuXHRcdFx0XHRuZXdZID0gc25hcCA/IHRoaXMucGFnZXNbMF0ubGVuZ3RoLTEgOiB0aGlzLm1heFNjcm9sbFk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuaG9tZTpcblx0XHRcdFx0bmV3WCA9IDA7XG5cdFx0XHRcdG5ld1kgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmxlZnQ6XG5cdFx0XHRcdG5ld1ggKz0gc25hcCA/IC0xIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnVwOlxuXHRcdFx0XHRuZXdZICs9IHNuYXAgPyAxIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnJpZ2h0OlxuXHRcdFx0XHRuZXdYIC09IHNuYXAgPyAtMSA6IDUgKyB0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5kb3duOlxuXHRcdFx0XHRuZXdZIC09IHNuYXAgPyAxIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHNuYXAgKSB7XG5cdFx0XHR0aGlzLmdvVG9QYWdlKG5ld1gsIG5ld1kpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggbmV3WCA+IDAgKSB7XG5cdFx0XHRuZXdYID0gMDtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0bmV3WCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9XG5cblx0XHRpZiAoIG5ld1kgPiAwICkge1xuXHRcdFx0bmV3WSA9IDA7XG5cdFx0XHR0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG5cdFx0fSBlbHNlIGlmICggbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm1heFNjcm9sbFk7XG5cdFx0XHR0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuXHRcdHRoaXMua2V5VGltZSA9IG5vdztcblx0fSxcblxuXHRfYW5pbWF0ZTogZnVuY3Rpb24gKGRlc3RYLCBkZXN0WSwgZHVyYXRpb24sIGVhc2luZ0ZuKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0c3RhcnRYID0gdGhpcy54LFxuXHRcdFx0c3RhcnRZID0gdGhpcy55LFxuXHRcdFx0c3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0ZGVzdFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcblxuXHRcdGZ1bmN0aW9uIHN0ZXAgKCkge1xuXHRcdFx0dmFyIG5vdyA9IHV0aWxzLmdldFRpbWUoKSxcblx0XHRcdFx0bmV3WCwgbmV3WSxcblx0XHRcdFx0ZWFzaW5nO1xuXG5cdFx0XHRpZiAoIG5vdyA+PSBkZXN0VGltZSApIHtcblx0XHRcdFx0dGhhdC5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGF0Ll90cmFuc2xhdGUoZGVzdFgsIGRlc3RZKTtcblxuXHRcdFx0XHRpZiAoICF0aGF0LnJlc2V0UG9zaXRpb24odGhhdC5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0XHRcdHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG5vdyA9ICggbm93IC0gc3RhcnRUaW1lICkgLyBkdXJhdGlvbjtcblx0XHRcdGVhc2luZyA9IGVhc2luZ0ZuKG5vdyk7XG5cdFx0XHRuZXdYID0gKCBkZXN0WCAtIHN0YXJ0WCApICogZWFzaW5nICsgc3RhcnRYO1xuXHRcdFx0bmV3WSA9ICggZGVzdFkgLSBzdGFydFkgKSAqIGVhc2luZyArIHN0YXJ0WTtcblx0XHRcdHRoYXQuX3RyYW5zbGF0ZShuZXdYLCBuZXdZKTtcblxuXHRcdFx0aWYgKCB0aGF0LmlzQW5pbWF0aW5nICkge1xuXHRcdFx0XHRyQUYoc3RlcCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG5cdFx0c3RlcCgpO1xuXHR9LFxuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRzd2l0Y2ggKCBlLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0b3VjaHN0YXJ0Jzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJkb3duJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckRvd24nOlxuXHRcdFx0Y2FzZSAnbW91c2Vkb3duJzpcblx0XHRcdFx0dGhpcy5fc3RhcnQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2htb3ZlJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJtb3ZlJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuXHRcdFx0Y2FzZSAnbW91c2Vtb3ZlJzpcblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdHRoaXMuX2VuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcmllbnRhdGlvbmNoYW5nZSc6XG5cdFx0XHRjYXNlICdyZXNpemUnOlxuXHRcdFx0XHR0aGlzLl9yZXNpemUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0cmFuc2l0aW9uZW5kJzpcblx0XHRcdGNhc2UgJ3dlYmtpdFRyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnb1RyYW5zaXRpb25FbmQnOlxuXHRcdFx0Y2FzZSAnTVNUcmFuc2l0aW9uRW5kJzpcblx0XHRcdFx0dGhpcy5fdHJhbnNpdGlvbkVuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3aGVlbCc6XG5cdFx0XHRjYXNlICdET01Nb3VzZVNjcm9sbCc6XG5cdFx0XHRjYXNlICdtb3VzZXdoZWVsJzpcblx0XHRcdFx0dGhpcy5fd2hlZWwoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAna2V5ZG93bic6XG5cdFx0XHRcdHRoaXMuX2tleShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjbGljayc6XG5cdFx0XHRcdGlmICggdGhpcy5lbmFibGVkICYmICFlLl9jb25zdHJ1Y3RlZCApIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyIChkaXJlY3Rpb24sIGludGVyYWN0aXZlLCB0eXBlKSB7XG5cdHZhciBzY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRpZiAoIHR5cGUgPT09IHRydWUgKSB7XG5cdFx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5Jztcblx0XHRpbmRpY2F0b3Iuc3R5bGUuY3NzVGV4dCA9ICctd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7Ym9yZGVyLXJhZGl1czozcHgnO1xuXHR9XG5cblx0aW5kaWNhdG9yLmNsYXNzTmFtZSA9ICdpU2Nyb2xsSW5kaWNhdG9yJztcblxuXHRpZiAoIGRpcmVjdGlvbiA9PSAnaCcgKSB7XG5cdFx0aWYgKCB0eXBlID09PSB0cnVlICkge1xuXHRcdFx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJztoZWlnaHQ6N3B4O2xlZnQ6MnB4O3JpZ2h0OjJweDtib3R0b206MCc7XG5cdFx0XHRpbmRpY2F0b3Iuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHRcdH1cblx0XHRzY3JvbGxiYXIuY2xhc3NOYW1lID0gJ2lTY3JvbGxIb3Jpem9udGFsU2Nyb2xsYmFyJztcblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGUgPT09IHRydWUgKSB7XG5cdFx0XHRzY3JvbGxiYXIuc3R5bGUuY3NzVGV4dCArPSAnO3dpZHRoOjdweDtib3R0b206MnB4O3RvcDoycHg7cmlnaHQ6MXB4Jztcblx0XHRcdGluZGljYXRvci5zdHlsZS53aWR0aCA9ICcxMDAlJztcblx0XHR9XG5cdFx0c2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdpU2Nyb2xsVmVydGljYWxTY3JvbGxiYXInO1xuXHR9XG5cblx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJztvdmVyZmxvdzpoaWRkZW4nO1xuXG5cdGlmICggIWludGVyYWN0aXZlICkge1xuXHRcdHNjcm9sbGJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXHR9XG5cblx0c2Nyb2xsYmFyLmFwcGVuZENoaWxkKGluZGljYXRvcik7XG5cblx0cmV0dXJuIHNjcm9sbGJhcjtcbn1cblxuZnVuY3Rpb24gSW5kaWNhdG9yIChzY3JvbGxlciwgb3B0aW9ucykge1xuXHR0aGlzLndyYXBwZXIgPSB0eXBlb2Ygb3B0aW9ucy5lbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5lbCkgOiBvcHRpb25zLmVsO1xuXHR0aGlzLndyYXBwZXJTdHlsZSA9IHRoaXMud3JhcHBlci5zdHlsZTtcblx0dGhpcy5pbmRpY2F0b3IgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG5cdHRoaXMuaW5kaWNhdG9yU3R5bGUgPSB0aGlzLmluZGljYXRvci5zdHlsZTtcblx0dGhpcy5zY3JvbGxlciA9IHNjcm9sbGVyO1xuXG5cdHRoaXMub3B0aW9ucyA9IHtcblx0XHRsaXN0ZW5YOiB0cnVlLFxuXHRcdGxpc3Rlblk6IHRydWUsXG5cdFx0aW50ZXJhY3RpdmU6IGZhbHNlLFxuXHRcdHJlc2l6ZTogdHJ1ZSxcblx0XHRkZWZhdWx0U2Nyb2xsYmFyczogZmFsc2UsXG5cdFx0c2hyaW5rOiBmYWxzZSxcblx0XHRmYWRlOiBmYWxzZSxcblx0XHRzcGVlZFJhdGlvWDogMCxcblx0XHRzcGVlZFJhdGlvWTogMFxuXHR9O1xuXG5cdGZvciAoIHZhciBpIGluIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcblx0fVxuXG5cdHRoaXMuc2l6ZVJhdGlvWCA9IDE7XG5cdHRoaXMuc2l6ZVJhdGlvWSA9IDE7XG5cdHRoaXMubWF4UG9zWCA9IDA7XG5cdHRoaXMubWF4UG9zWSA9IDA7XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUgKSB7XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2hlbmQnLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5hZGRFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuXHRcdH1cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsICdtb3VzZWRvd24nLCB0aGlzKTtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ21vdXNldXAnLCB0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIHRoaXMub3B0aW9ucy5mYWRlICkge1xuXHRcdHRoaXMud3JhcHBlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSB0aGlzLnNjcm9sbGVyLnRyYW5zbGF0ZVo7XG5cdFx0dmFyIGR1cmF0aW9uUHJvcCA9IHV0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcblx0XHR0aGlzLndyYXBwZXJTdHlsZVtkdXJhdGlvblByb3BdID0gdXRpbHMuaXNCYWRBbmRyb2lkID8gJzAuMDAwMW1zJyA6ICcwbXMnO1xuXHRcdC8vIHJlbW92ZSAwLjAwMDFtc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRpZih1dGlscy5pc0JhZEFuZHJvaWQpIHtcblx0XHRcdHJBRihmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoc2VsZi53cmFwcGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuXHRcdFx0XHRcdHNlbGYud3JhcHBlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eSA9ICcwJztcblx0fVxufVxuXG5JbmRpY2F0b3IucHJvdG90eXBlID0ge1xuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRzd2l0Y2ggKCBlLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0b3VjaHN0YXJ0Jzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJkb3duJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckRvd24nOlxuXHRcdFx0Y2FzZSAnbW91c2Vkb3duJzpcblx0XHRcdFx0dGhpcy5fc3RhcnQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2htb3ZlJzpcblx0XHRcdGNhc2UgJ3BvaW50ZXJtb3ZlJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuXHRcdFx0Y2FzZSAnbW91c2Vtb3ZlJzpcblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdHRoaXMuX2VuZChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyApIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmZhZGVUaW1lb3V0KTtcblx0XHRcdHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZSApIHtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvciwgJ21vdXNlZG93bicsIHRoaXMpO1xuXG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaG1vdmUnLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaGVuZCcsIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJ1cCcpLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNldXAnLCB0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyApIHtcblx0XHRcdHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlcik7XG5cdFx0fVxuXHR9LFxuXG5cdF9zdGFydDogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHR0aGlzLnRyYW5zaXRpb25UaW1lKCk7XG5cblx0XHR0aGlzLmluaXRpYXRlZCA9IHRydWU7XG5cdFx0dGhpcy5tb3ZlZCA9IGZhbHNlO1xuXHRcdHRoaXMubGFzdFBvaW50WFx0PSBwb2ludC5wYWdlWDtcblx0XHR0aGlzLmxhc3RQb2ludFlcdD0gcG9pbnQucGFnZVk7XG5cblx0XHR0aGlzLnN0YXJ0VGltZVx0PSB1dGlscy5nZXRUaW1lKCk7XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoICkge1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2htb3ZlJywgdGhpcyk7XG5cdFx0fVxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZSApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcblx0fSxcblxuXHRfbW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuXHRcdFx0ZGVsdGFYLCBkZWx0YVksXG5cdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0dGltZXN0YW1wID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vdmVkID0gdHJ1ZTtcblxuXHRcdGRlbHRhWCA9IHBvaW50LnBhZ2VYIC0gdGhpcy5sYXN0UG9pbnRYO1xuXHRcdHRoaXMubGFzdFBvaW50WCA9IHBvaW50LnBhZ2VYO1xuXG5cdFx0ZGVsdGFZID0gcG9pbnQucGFnZVkgLSB0aGlzLmxhc3RQb2ludFk7XG5cdFx0dGhpcy5sYXN0UG9pbnRZID0gcG9pbnQucGFnZVk7XG5cblx0XHRuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cblx0XHR0aGlzLl9wb3MobmV3WCwgbmV3WSk7XG5cbi8vIElOU0VSVCBQT0lOVDogaW5kaWNhdG9yLl9tb3ZlXG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSxcblxuXHRfZW5kOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggIXRoaXMuaW5pdGlhdGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ3RvdWNobW92ZScsIHRoaXMpO1xuXHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcblx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5vcHRpb25zLnNuYXAgKSB7XG5cdFx0XHR2YXIgc25hcCA9IHRoaXMuc2Nyb2xsZXIuX25lYXJlc3RTbmFwKHRoaXMuc2Nyb2xsZXIueCwgdGhpcy5zY3JvbGxlci55KTtcblxuXHRcdFx0dmFyIHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuXHRcdFx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnModGhpcy5zY3JvbGxlci54IC0gc25hcC54KSwgMTAwMCksXG5cdFx0XHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyh0aGlzLnNjcm9sbGVyLnkgLSBzbmFwLnkpLCAxMDAwKVxuXHRcdFx0XHRcdCksIDMwMCk7XG5cblx0XHRcdGlmICggdGhpcy5zY3JvbGxlci54ICE9IHNuYXAueCB8fCB0aGlzLnNjcm9sbGVyLnkgIT0gc25hcC55ICkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmRpcmVjdGlvblggPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmRpcmVjdGlvblkgPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbGVyLmN1cnJlbnRQYWdlID0gc25hcDtcblx0XHRcdFx0dGhpcy5zY3JvbGxlci5zY3JvbGxUbyhzbmFwLngsIHNuYXAueSwgdGltZSwgdGhpcy5zY3JvbGxlci5vcHRpb25zLmJvdW5jZUVhc2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm1vdmVkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlci5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHR9XG5cdH0sXG5cblx0dHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblx0XHR2YXIgZHVyYXRpb25Qcm9wID0gdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uO1xuXHRcdHRoaXMuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9IHRpbWUgKyAnbXMnO1xuXG5cdFx0aWYgKCAhdGltZSAmJiB1dGlscy5pc0JhZEFuZHJvaWQgKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuXHRcdFx0Ly8gcmVtb3ZlIDAuMDAwMW1zXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuXHRcdFx0XHRcdHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9ICcwcyc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGZ1bmN0aW9uIChlYXNpbmcpIHtcblx0XHR0aGlzLmluZGljYXRvclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cdH0sXG5cblx0cmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudHJhbnNpdGlvblRpbWUoKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggJiYgIXRoaXMub3B0aW9ucy5saXN0ZW5ZICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWSAmJiAhdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsIHx8IHRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGwgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsICYmIHRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsQm90aFNjcm9sbGJhcnMnKTtcblx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlciwgJ2lTY3JvbGxMb25lU2Nyb2xsYmFyJyk7XG5cblx0XHRcdGlmICggdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzICYmIHRoaXMub3B0aW9ucy5jdXN0b21TdHlsZSApIHtcblx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcblx0XHRcdFx0XHR0aGlzLndyYXBwZXIuc3R5bGUucmlnaHQgPSAnOHB4Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLndyYXBwZXIuc3R5bGUuYm90dG9tID0gJzhweCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dXRpbHMucmVtb3ZlQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbEJvdGhTY3JvbGxiYXJzJyk7XG5cdFx0XHR1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsTG9uZVNjcm9sbGJhcicpO1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyAmJiB0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzJweCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICcycHgnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHIgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1x0Ly8gZm9yY2UgcmVmcmVzaFxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcblx0XHRcdHRoaXMud3JhcHBlcldpZHRoID0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcldpZHRoID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh0aGlzLndyYXBwZXJXaWR0aCAqIHRoaXMud3JhcHBlcldpZHRoIC8gKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJXaWR0aCB8fCB0aGlzLndyYXBwZXJXaWR0aCB8fCAxKSksIDgpO1xuXHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy5pbmRpY2F0b3JXaWR0aCArICdweCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcldpZHRoID0gdGhpcy5pbmRpY2F0b3IuY2xpZW50V2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWCA9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5pbmRpY2F0b3JXaWR0aDtcblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdjbGlwJyApIHtcblx0XHRcdFx0dGhpcy5taW5Cb3VuZGFyeVggPSAtdGhpcy5pbmRpY2F0b3JXaWR0aCArIDg7XG5cdFx0XHRcdHRoaXMubWF4Qm91bmRhcnlYID0gdGhpcy53cmFwcGVyV2lkdGggLSA4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5taW5Cb3VuZGFyeVggPSAwO1xuXHRcdFx0XHR0aGlzLm1heEJvdW5kYXJ5WCA9IHRoaXMubWF4UG9zWDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zaXplUmF0aW9YID0gdGhpcy5vcHRpb25zLnNwZWVkUmF0aW9YIHx8ICh0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFggJiYgKHRoaXMubWF4UG9zWCAvIHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWCkpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblkgKSB7XG5cdFx0XHR0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvckhlaWdodCA9IE1hdGgubWF4KE1hdGgucm91bmQodGhpcy53cmFwcGVySGVpZ2h0ICogdGhpcy53cmFwcGVySGVpZ2h0IC8gKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJIZWlnaHQgfHwgdGhpcy53cmFwcGVySGVpZ2h0IHx8IDEpKSwgOCk7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3JIZWlnaHQgKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbmRpY2F0b3JIZWlnaHQgPSB0aGlzLmluZGljYXRvci5jbGllbnRIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ2NsaXAnICkge1xuXHRcdFx0XHR0aGlzLm1pbkJvdW5kYXJ5WSA9IC10aGlzLmluZGljYXRvckhlaWdodCArIDg7XG5cdFx0XHRcdHRoaXMubWF4Qm91bmRhcnlZID0gdGhpcy53cmFwcGVySGVpZ2h0IC0gODtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWluQm91bmRhcnlZID0gMDtcblx0XHRcdFx0dGhpcy5tYXhCb3VuZGFyeVkgPSB0aGlzLm1heFBvc1k7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXHRcdFx0dGhpcy5zaXplUmF0aW9ZID0gdGhpcy5vcHRpb25zLnNwZWVkUmF0aW9ZIHx8ICh0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFkgJiYgKHRoaXMubWF4UG9zWSAvIHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblx0fSxcblxuXHR1cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciB4ID0gdGhpcy5vcHRpb25zLmxpc3RlblggJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1ggKiB0aGlzLnNjcm9sbGVyLngpIHx8IDAsXG5cdFx0XHR5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1kgKiB0aGlzLnNjcm9sbGVyLnkpIHx8IDA7XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuaWdub3JlQm91bmRhcmllcyApIHtcblx0XHRcdGlmICggeCA8IHRoaXMubWluQm91bmRhcnlYICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JXaWR0aCArIHgsIDgpO1xuXHRcdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4Jztcblx0XHRcdFx0fVxuXHRcdFx0XHR4ID0gdGhpcy5taW5Cb3VuZGFyeVg7XG5cdFx0XHR9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhCb3VuZGFyeVggKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICkge1xuXHRcdFx0XHRcdHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLmluZGljYXRvcldpZHRoIC0gKHggLSB0aGlzLm1heFBvc1gpLCA4KTtcblx0XHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG5cdFx0XHRcdFx0eCA9IHRoaXMubWF4UG9zWCArIHRoaXMuaW5kaWNhdG9yV2lkdGggLSB0aGlzLndpZHRoO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHggPSB0aGlzLm1heEJvdW5kYXJ5WDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICYmIHRoaXMud2lkdGggIT0gdGhpcy5pbmRpY2F0b3JXaWR0aCApIHtcblx0XHRcdFx0dGhpcy53aWR0aCA9IHRoaXMuaW5kaWNhdG9yV2lkdGg7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4Jztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB5IDwgdGhpcy5taW5Cb3VuZGFyeVkgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICkge1xuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JIZWlnaHQgKyB5ICogMywgOCk7XG5cdFx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0eSA9IHRoaXMubWluQm91bmRhcnlZO1xuXHRcdFx0fSBlbHNlIGlmICggeSA+IHRoaXMubWF4Qm91bmRhcnlZICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMuaW5kaWNhdG9ySGVpZ2h0IC0gKHkgLSB0aGlzLm1heFBvc1kpICogMywgOCk7XG5cdFx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG5cdFx0XHRcdFx0eSA9IHRoaXMubWF4UG9zWSArIHRoaXMuaW5kaWNhdG9ySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eSA9IHRoaXMubWF4Qm91bmRhcnlZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgJiYgdGhpcy5oZWlnaHQgIT0gdGhpcy5pbmRpY2F0b3JIZWlnaHQgKSB7XG5cdFx0XHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3JIZWlnaHQ7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblxuXHRcdGlmICggdGhpcy5zY3JvbGxlci5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtXSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpJyArIHRoaXMuc2Nyb2xsZXIudHJhbnNsYXRlWjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHRcdH1cblx0fSxcblxuXHRfcG9zOiBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdGlmICggeCA8IDAgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhQb3NYICkge1xuXHRcdFx0eCA9IHRoaXMubWF4UG9zWDtcblx0XHR9XG5cblx0XHRpZiAoIHkgPCAwICkge1xuXHRcdFx0eSA9IDA7XG5cdFx0fSBlbHNlIGlmICggeSA+IHRoaXMubWF4UG9zWSApIHtcblx0XHRcdHkgPSB0aGlzLm1heFBvc1k7XG5cdFx0fVxuXG5cdFx0eCA9IHRoaXMub3B0aW9ucy5saXN0ZW5YID8gTWF0aC5yb3VuZCh4IC8gdGhpcy5zaXplUmF0aW9YKSA6IHRoaXMuc2Nyb2xsZXIueDtcblx0XHR5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgPyBNYXRoLnJvdW5kKHkgLyB0aGlzLnNpemVSYXRpb1kpIDogdGhpcy5zY3JvbGxlci55O1xuXG5cdFx0dGhpcy5zY3JvbGxlci5zY3JvbGxUbyh4LCB5KTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAodmFsLCBob2xkKSB7XG5cdFx0aWYgKCBob2xkICYmICF0aGlzLnZpc2libGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZmFkZVRpbWVvdXQpO1xuXHRcdHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXG5cdFx0dmFyIHRpbWUgPSB2YWwgPyAyNTAgOiA1MDAsXG5cdFx0XHRkZWxheSA9IHZhbCA/IDAgOiAzMDA7XG5cblx0XHR2YWwgPSB2YWwgPyAnMScgOiAnMCc7XG5cblx0XHR0aGlzLndyYXBwZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb25dID0gdGltZSArICdtcyc7XG5cblx0XHR0aGlzLmZhZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0dGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eSA9IHZhbDtcblx0XHRcdHRoaXMudmlzaWJsZSA9ICt2YWw7XG5cdFx0fSkuYmluZCh0aGlzLCB2YWwpLCBkZWxheSk7XG5cdH1cbn07XG5cbklTY3JvbGwudXRpbHMgPSB1dGlscztcblxuaWYgKCB0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzICkge1xuXHRtb2R1bGUuZXhwb3J0cyA9IElTY3JvbGw7XG59IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAgICAgZGVmaW5lKCBmdW5jdGlvbiAoKSB7IHJldHVybiBJU2Nyb2xsOyB9ICk7XG59IGVsc2Uge1xuXHR3aW5kb3cuSVNjcm9sbCA9IElTY3JvbGw7XG59XG5cbn0pKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpO1xuIiwiXG5pbXBvcnQgJy4vcGlja2VyLmNzcydcbmltcG9ydCBJU2Nyb2xsIGZyb20gJ2lzY3JvbGwnXG5cbmxldCBtb2RhbCwgcGlja2VyQ29udGFpbmVyLCBwaWNrZXJIZWFkZXIsIHBpY2tlckJvZHksIHBpY2tlckNvbmZpcm0sIHBpY2tlckNhbmNlbCwgcGlja2VyQmFyLCBwaWNrZXJTY3JvbGxlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNrZXIgKGNvbmZpZ3MpIHtcbiAgdGhpcy5jb25maXJtQ2FsbGJhY2sgPSBjb25maWdzLmNvbmZpcm1DYWxsYmFja1xuICB0aGlzLmNhbmNlbENhbGxiYWNrID0gY29uZmlncy5jYW5jZWxDYWxsYmFja1xuICB0aGlzLmRhdGEgPSBjb25maWdzLmRhdGFcbiAgdGhpcy5jb2x1bW4gPSB0aGlzLl9nZXRDb2x1bW5MZW5ndGgodGhpcy5kYXRhKVxuICB0aGlzLnNlbmRlciA9IGNvbmZpZ3Muc2VuZGVyXG4gIHRoaXMucGlja2VyU2Nyb2xsZXJzID0gW11cbiAgdGhpcy5pdGVtU2Nyb2xscyA9IFtdXG4gIHRoaXMuZm9ybWF0ZVJlc3VsdCA9IGNvbmZpZ3MuZm9ybWF0ZVJlc3VsdFxuICB0aGlzLnJlc3VsdEluZGV4cyA9IGNvbmZpZ3MuZGVmYXVsdEluZGV4cyB8fCB0aGlzLl9nZXREZWZhdWx0SW5kZXgoKVxuICB0aGlzLl9pbml0KClcbn1cblxuUGlja2VyLnByb3RvdHlwZSA9IHtcblxuICBfaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2NyZWF0ZSgpXG4gICAgdGhpcy5fYWRkRXZlbnQoKVxuICAgIHRoaXMuX2NyZWF0ZUNvbHVtbigpXG4gICAgdGhpcy5zaG93KClcbiAgICB0aGlzLl9jcmVhdGVTY3JvbGwoKVxuICAgIHRoaXMuX2luaXRJbmRleCgpXG4gIH0sXG5cbiAgX2NyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICghbW9kYWwpIHtcbiAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlciB3ZWV4LXBpY2tlci1maXhlZCdcbiAgICAgIHBpY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwaWNrZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcGlja2VyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIHBpY2tlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwaWNrZXJCYXIuY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyLWJhcidcblxuICAgICAgcGlja2VyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1jb250ZW50J1xuICAgICAgcGlja2VySGVhZGVyLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1oZWFkZXInXG4gICAgICBwaWNrZXJCb2R5LmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1ib2R5J1xuICAgICAgcGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY2tlckhlYWRlcilcbiAgICAgIHBpY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwaWNrZXJCb2R5KVxuICAgICAgcGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpY2tlckJhcilcbiAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHBpY2tlckNvbnRhaW5lcilcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpXG4gICAgfVxuXG4gICAgcGlja2VySGVhZGVyLmlubmVySFRNTCA9ICcnXG4gICAgcGlja2VyQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHBpY2tlckNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHBpY2tlckNvbmZpcm0uY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyLWNvbmZpcm0nXG4gICAgcGlja2VyQ2FuY2VsLmNsYXNzTmFtZSA9ICd3ZWV4LXBpY2tlci1jYW5jZWwnXG4gICAgcGlja2VyQ29uZmlybS5pbm5lclRleHQgPSAn56Gu5a6aJ1xuICAgIHBpY2tlckNhbmNlbC5pbm5lclRleHQgPSAn5Y+W5raIJ1xuICAgIHBpY2tlckhlYWRlci5hcHBlbmRDaGlsZChwaWNrZXJDYW5jZWwpXG4gICAgcGlja2VySGVhZGVyLmFwcGVuZENoaWxkKHBpY2tlckNvbmZpcm0pXG4gIH0sXG5cbiAgX2dldENvbHVtbkxlbmd0aDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIChkYXRhWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkYXRhLmxlbmd0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICB9LFxuXG4gIF9nZXREZWZhdWx0SW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW47IGkrKykge1xuICAgICAgcmVzdWx0WzBdID0gMFxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG5cbiAgX2dldEN1cnJlbnRJbmRleDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJlc3VsdEluZGV4cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdEluZGV4c1swXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdEluZGV4c1xuICAgIH1cbiAgfSxcblxuICBfYWRkRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb25maXJtQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleHMgPSB0aGlzLl9nZXRDdXJyZW50SW5kZXgoKVxuICAgICAgY29uc3QgcmVzdWx0RGF0YSA9IHRoaXMuZm9ybWF0ZVJlc3VsdCA/IHRoaXMuZm9ybWF0ZVJlc3VsdCh0aGlzLmRhdGEsIGluZGV4cykgOiBpbmRleHNcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICAgIGRhdGE6IHJlc3VsdERhdGFcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb25maXJtQ2FsbGJhY2sgJiYgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKHRoaXMuY29uZmlybUNhbGxiYWNrLCByZXN1bHQpXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmNlbENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYW5jZWxDYWxsYmFjayAmJiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2sodGhpcy5jYW5jZWxDYWxsYmFjaylcbiAgICAgIGNvbnN0IGluZGV4cyA9IHRoaXMuX2dldEN1cnJlbnRJbmRleCgpXG4gICAgICBjb25zdCByZXN1bHREYXRhID0gdGhpcy5mb3JtYXRlUmVzdWx0ID8gdGhpcy5mb3JtYXRlUmVzdWx0KHRoaXMuZGF0YSwgaW5kZXhzKSA6IGluZGV4c1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICByZXN1bHQ6ICdjYW5jZWwnLFxuICAgICAgICBkYXRhOiByZXN1bHREYXRhXG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpcm1DYWxsYmFjayAmJiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2sodGhpcy5jb25maXJtQ2FsbGJhY2ssIHJlc3VsdClcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuXG4gICAgcGlja2VyQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1DYWxsYmFjaylcbiAgICBwaWNrZXJDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxDYWxsYmFjaylcbiAgfSxcblxuICBfY3JlYXRlQ29sdW1uOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmRhdGFcbiAgICBwaWNrZXJCb2R5LmlubmVySFRNTCA9ICcnXG4gICAgaWYgKHRoaXMuY29sdW1uID4gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9jcmVhdGVJdGVtKGl0ZW1zW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUl0ZW0oaXRlbXMpXG4gICAgfVxuICB9LFxuXG4gIF9jcmVhdGVJdGVtOiBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICBwaWNrZXJTY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgZm9yIChsZXQgaSA9IC0yOyBpIDwgaXRlbXMubGVuZ3RoICsgMjsgaSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gJydcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjZWxsLmlubmVyVGV4dCA9IGl0ZW1zW2ldXG4gICAgICB9XG4gICAgICB1aS5hcHBlbmRDaGlsZChjZWxsKVxuICAgIH1cbiAgICBwaWNrZXJTY3JvbGxlci5jbGFzc05hbWUgPSAnd2VleC1waWNrZXItc2Nyb2xsZXInXG4gICAgcGlja2VyU2Nyb2xsZXIuYXBwZW5kQ2hpbGQodWkpXG4gICAgcGlja2VyQm9keS5hcHBlbmRDaGlsZChwaWNrZXJTY3JvbGxlcilcbiAgICB0aGlzLnBpY2tlclNjcm9sbGVycy5wdXNoKHBpY2tlclNjcm9sbGVyKVxuICB9LFxuXG4gIF9jcmVhdGVTY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5waWNrZXJTY3JvbGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaXRlbVNjcm9sbCA9IG5ldyBJU2Nyb2xsKHNlbGYucGlja2VyU2Nyb2xsZXJzW2ldLCB7XG4gICAgICAgICAgc25hcDogJ2xpJyxcbiAgICAgICAgICBtb3VzZVdoZWVsOiB0cnVlLFxuICAgICAgICAgIHZTY3JvbGxiYXI6IGZhbHNlLFxuICAgICAgICAgIGhTY3JvbGxiYXI6IGZhbHNlLFxuICAgICAgICAgIGhTY3JvbGw6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5pdGVtU2Nyb2xscy5wdXNoKGl0ZW1TY3JvbGwpXG5cbiAgICAgICAgaXRlbVNjcm9sbC5vbignc2Nyb2xsRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuX25vaGlnaHRMaWdodChzZWxmLnBpY2tlclNjcm9sbGVyc1tpXSlcbiAgICAgICAgICBjb25zdCB5SW5kZXggPSBNYXRoLmFicyhNYXRoLnJvdW5kKC0xICogdGhpcy55IC8gc2VsZi5pdGVtSGVpZ2h0KSlcbiAgICAgICAgICBzZWxmLnJlc3VsdEluZGV4c1tpbmRleF0gPSB5SW5kZXhcbiAgICAgICAgICBzZWxmLl9oaWdodExpZ2h0KHNlbGYucGlja2VyU2Nyb2xsZXJzW2ldLCB5SW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaXRlbVNjcm9sbC5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB9KVxuXG4gICAgICAgIGl0ZW1TY3JvbGwub24oJ3Njcm9sbFN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuX25vaGlnaHRMaWdodChzZWxmLnBpY2tlclNjcm9sbGVyc1tpXSlcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLnBpY2tlclNjcm9sbGVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxuICAgICAgICAgIGlmICh0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSB7XG4gICAgICAgICAgICBzZWxmLl9nb1RvUGFnZShpLCB0YXJnZXQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGYucGlja2VyU2Nyb2xsZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIC8vICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0XG4gICAgICAgIC8vICAgaWYgKHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaScpIHtcbiAgICAgICAgLy8gICAgIHNlbGYuX2dvVG9QYWdlKGksIHRhcmdldClcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0pXG4gICAgICB9KShpKVxuICAgIH1cbiAgfSxcblxuICBfZ29Ub1BhZ2U6IGZ1bmN0aW9uIChzY3JvbGxJbmRleCwgbGkpIHtcbiAgICBjb25zdCBhbGxsaXN0ID0gdGhpcy5waWNrZXJTY3JvbGxlcnNbc2Nyb2xsSW5kZXhdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhbGxsaXN0Lmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgaWYgKGFsbGxpc3RbaV0gPT09IGxpKSB7XG4gICAgICAgIHRoaXMuaXRlbVNjcm9sbHNbc2Nyb2xsSW5kZXhdLmdvVG9QYWdlKDAsIGkgLSAyLCA1MDApXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9oaWdodExpZ2h0OiBmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgY29uc3QgYWxsbGlzdCA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhbGxsaXN0Lmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgaWYgKGkgPT09IGluZGV4ICsgMikge1xuICAgICAgICBhbGxsaXN0W2ldLmNsYXNzTmFtZSA9ICdhY3RpdmUnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfbm9oaWdodExpZ2h0OiBmdW5jdGlvbiAoZWwpIHtcbiAgICBjb25zdCBhbGxsaXN0ID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbGxsaXN0W2ldLmNsYXNzTmFtZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgYWxsbGlzdFtpXS5jbGFzc05hbWUgPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfaW5pdEluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBzZWxmLml0ZW1IZWlnaHQgPSBwaWNrZXJCb2R5Lm9mZnNldEhlaWdodCAvIDVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGlja2VyU2Nyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHNlbGYuaXRlbVNjcm9sbHNbaW5kZXhdLmdvVG9QYWdlKDAsIHNlbGYucmVzdWx0SW5kZXhzW2luZGV4XSwgMClcbiAgICAgICAgc2VsZi5faGlnaHRMaWdodChzZWxmLnBpY2tlclNjcm9sbGVyc1tpbmRleF0sIHNlbGYucmVzdWx0SW5kZXhzW2luZGV4XSlcbiAgICAgIH0pKGkpXG4gICAgfVxuICB9LFxuXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAnd2VleC1waWNrZXIgd2VleC1waWNrZXItZml4ZWQgd2VleC1waWNrZXItb3BlbidcbiAgfSxcblxuICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gJ3dlZXgtcGlja2VyIHdlZXgtcGlja2VyLWZpeGVkIHdlZXgtcGlja2VyLWNsb3NlJ1xuICB9XG59XG5cbiIsImV4cG9ydCB7IGhvb2tzLCBzZXRIb29rQ2FsbGJhY2sgfTtcblxudmFyIGhvb2tDYWxsYmFjaztcblxuZnVuY3Rpb24gaG9va3MgKCkge1xuICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbi8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrIChjYWxsYmFjaykge1xuICAgIGhvb2tDYWxsYmFjayA9IGNhbGxiYWNrO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBcnJheShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdChpbnB1dCkge1xuICAgIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAgIC8vIGlucHV0ICE9IG51bGxcbiAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKSB7XG4gICAgdmFyIGs7XG4gICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAvLyBldmVuIGlmIGl0cyBub3Qgb3duIHByb3BlcnR5IEknZCBzdGlsbCBjYWxsIGl0IG5vbi1lbXB0eVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdW1iZXIoaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIERhdGUgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwKGFyciwgZm4pIHtcbiAgICB2YXIgcmVzID0gW10sIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgICAgICByZXMucHVzaChmbihhcnJbaV0sIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc093blByb3AoYSwgYikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG59XG4iLCJpbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuL2hhcy1vd24tcHJvcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsIGkpKSB7XG4gICAgICAgICAgICBhW2ldID0gYltpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wKGIsICd0b1N0cmluZycpKSB7XG4gICAgICAgIGEudG9TdHJpbmcgPSBiLnRvU3RyaW5nO1xuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wKGIsICd2YWx1ZU9mJykpIHtcbiAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4vZnJvbS1hbnl0aGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVEMgKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIHRydWUpLnV0YygpO1xufVxuIiwiZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wdHkgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHVudXNlZFRva2VucyAgICA6IFtdLFxuICAgICAgICB1bnVzZWRJbnB1dCAgICAgOiBbXSxcbiAgICAgICAgb3ZlcmZsb3cgICAgICAgIDogLTIsXG4gICAgICAgIGNoYXJzTGVmdE92ZXIgICA6IDAsXG4gICAgICAgIG51bGxJbnB1dCAgICAgICA6IGZhbHNlLFxuICAgICAgICBpbnZhbGlkTW9udGggICAgOiBudWxsLFxuICAgICAgICBpbnZhbGlkRm9ybWF0ICAgOiBmYWxzZSxcbiAgICAgICAgdXNlckludmFsaWRhdGVkIDogZmFsc2UsXG4gICAgICAgIGlzbyAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBwYXJzZWREYXRlUGFydHMgOiBbXSxcbiAgICAgICAgbWVyaWRpZW0gICAgICAgIDogbnVsbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhtKSB7XG4gICAgaWYgKG0uX3BmID09IG51bGwpIHtcbiAgICAgICAgbS5fcGYgPSBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk7XG4gICAgfVxuICAgIHJldHVybiBtLl9wZjtcbn1cbiIsInZhciBzb21lO1xuaWYgKEFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgc29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xufSBlbHNlIHtcbiAgICBzb21lID0gZnVuY3Rpb24gKGZ1bikge1xuICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQgJiYgZnVuLmNhbGwodGhpcywgdFtpXSwgaSwgdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBzb21lIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBleHRlbmQgZnJvbSAnLi4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCB7IGNyZWF0ZVVUQyB9IGZyb20gJy4vdXRjJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHNvbWUgZnJvbSAnLi4vdXRpbHMvc29tZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKG0pIHtcbiAgICBpZiAobS5faXNWYWxpZCA9PSBudWxsKSB7XG4gICAgICAgIHZhciBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhtKTtcbiAgICAgICAgdmFyIHBhcnNlZFBhcnRzID0gc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaXNOb3dWYWxpZCA9ICFpc05hTihtLl9kLmdldFRpbWUoKSkgJiZcbiAgICAgICAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgICAgICAgIWZsYWdzLmVtcHR5ICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAgICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xuXG4gICAgICAgIGlmIChtLl9zdHJpY3QpIHtcbiAgICAgICAgICAgIGlzTm93VmFsaWQgPSBpc05vd1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihtKSkge1xuICAgICAgICAgICAgbS5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNOb3dWYWxpZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbS5faXNWYWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQgKGZsYWdzKSB7XG4gICAgdmFyIG0gPSBjcmVhdGVVVEMoTmFOKTtcbiAgICBpZiAoZmxhZ3MgIT0gbnVsbCkge1xuICAgICAgICBleHRlbmQoZ2V0UGFyc2luZ0ZsYWdzKG0pLCBmbGFncyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkudXNlckludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XG59XG4iLCJpbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnLi4vdXRpbHMvaXMtdW5kZWZpbmVkJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuXG4vLyBQbHVnaW5zIHRoYXQgYWRkIHByb3BlcnRpZXMgc2hvdWxkIGFsc28gYWRkIHRoZSBrZXkgaGVyZSAobnVsbCB2YWx1ZSksXG4vLyBzbyB3ZSBjYW4gcHJvcGVybHkgY2xvbmUgb3Vyc2VsdmVzLlxudmFyIG1vbWVudFByb3BlcnRpZXMgPSBob29rcy5tb21lbnRQcm9wZXJ0aWVzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5Q29uZmlnKHRvLCBmcm9tKSB7XG4gICAgdmFyIGksIHByb3AsIHZhbDtcblxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xuICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XG4gICAgICAgIHRvLl9pID0gZnJvbS5faTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xuICAgICAgICB0by5fZiA9IGZyb20uX2Y7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcbiAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcbiAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XG4gICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XG4gICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcbiAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcbiAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcbiAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAobW9tZW50UHJvcGVydGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaSBpbiBtb21lbnRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBwcm9wID0gbW9tZW50UHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgIHZhbCA9IGZyb21bcHJvcF07XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICAgICAgICB0b1twcm9wXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0bztcbn1cblxudmFyIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuLy8gTW9tZW50IHByb3RvdHlwZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XG4gICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xuICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShjb25maWcuX2QgIT0gbnVsbCA/IGNvbmZpZy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAvLyBvYmplY3RzLlxuICAgIGlmICh1cGRhdGVJblByb2dyZXNzID09PSBmYWxzZSkge1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb21lbnQgKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNb21lbnQgfHwgKG9iaiAhPSBudWxsICYmIG9iai5faXNBTW9tZW50T2JqZWN0ICE9IG51bGwpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJzRmxvb3IgKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIC8vIC0wIC0+IDBcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpIHx8IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYWJzRmxvb3IgZnJvbSAnLi9hYnMtZmxvb3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XG4gICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcbiAgICAgICAgdmFsdWUgPSAwO1xuXG4gICAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICAgICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG4iLCJpbXBvcnQgdG9JbnQgZnJvbSAnLi90by1pbnQnO1xuXG4vLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXJyYXlzKGFycmF5MSwgYXJyYXkyLCBkb250Q29udmVydCkge1xuICAgIHZhciBsZW4gPSBNYXRoLm1pbihhcnJheTEubGVuZ3RoLCBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgZGlmZnMgPSAwLFxuICAgICAgICBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB8fFxuICAgICAgICAgICAgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKSkge1xuICAgICAgICAgICAgZGlmZnMrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xufVxuIiwiaW1wb3J0IGV4dGVuZCBmcm9tICcuL2V4dGVuZCc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4vaG9va3MnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJy4vaXMtdW5kZWZpbmVkJztcblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAoaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgKHR5cGVvZiBjb25zb2xlICE9PSAgJ3VuZGVmaW5lZCcpICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0RlcHJlY2F0aW9uIHdhcm5pbmc6ICcgKyBtc2cpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZShtc2csIGZuKSB7XG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIobnVsbCwgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgdmFyIGFyZztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyArPSAnXFxuWycgKyBpICsgJ10gJztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnICs9IGtleSArICc6ICcgKyBhcmd1bWVudHNbMF1ba2V5XSArICcsICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKDAsIC0yKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIGNvbW1hIGFuZCBzcGFjZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3YXJuKG1zZyArICdcXG5Bcmd1bWVudHM6ICcgKyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKS5qb2luKCcnKSArICdcXG4nICsgKG5ldyBFcnJvcigpKS5zdGFjayk7XG4gICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LCBmbik7XG59XG5cbnZhciBkZXByZWNhdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZVNpbXBsZShuYW1lLCBtc2cpIHtcbiAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG5hbWUsIG1zZyk7XG4gICAgfVxuICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XG4gICAgICAgIHdhcm4obXNnKTtcbiAgICAgICAgZGVwcmVjYXRpb25zW25hbWVdID0gdHJ1ZTtcbiAgICB9XG59XG5cbmhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9IGZhbHNlO1xuaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvaXMtZnVuY3Rpb24nO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL3V0aWxzL2lzLW9iamVjdCc7XG5pbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0IChjb25maWcpIHtcbiAgICB2YXIgcHJvcCwgaTtcbiAgICBmb3IgKGkgaW4gY29uZmlnKSB7XG4gICAgICAgIHByb3AgPSBjb25maWdbaV07XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3ApKSB7XG4gICAgICAgICAgICB0aGlzW2ldID0gcHJvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbJ18nICsgaV0gPSBwcm9wO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAvLyBMZW5pZW50IG9yZGluYWwgcGFyc2luZyBhY2NlcHRzIGp1c3QgYSBudW1iZXIgaW4gYWRkaXRpb24gdG9cbiAgICAvLyBudW1iZXIgKyAocG9zc2libHkpIHN0dWZmIGNvbWluZyBmcm9tIF9vcmRpbmFsUGFyc2VMZW5pZW50LlxuICAgIHRoaXMuX29yZGluYWxQYXJzZUxlbmllbnQgPSBuZXcgUmVnRXhwKHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UgKyAnfCcgKyAoL1xcZHsxLDJ9Lykuc291cmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNoaWxkQ29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IGV4dGVuZCh7fSwgcGFyZW50Q29uZmlnKSwgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSAmJiBpc09iamVjdChjaGlsZENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBwYXJlbnRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIGNoaWxkQ29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGNoaWxkQ29uZmlnW3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AocGFyZW50Q29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcbiAgICAgICAgICAgIHJlc1twcm9wXSA9IGV4dGVuZCh7fSwgcmVzW3Byb3BdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIExvY2FsZShjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuL2hhcy1vd24tcHJvcCc7XG5cbnZhciBrZXlzO1xuXG5pZiAoT2JqZWN0LmtleXMpIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXM7XG59IGVsc2Uge1xuICAgIGtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBpLCByZXMgPSBbXTtcbiAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsga2V5cyBhcyBkZWZhdWx0IH07XG4iLCJleHBvcnQgdmFyIGRlZmF1bHRDYWxlbmRhciA9IHtcbiAgICBzYW1lRGF5IDogJ1tUb2RheSBhdF0gTFQnLFxuICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbYXRdIExUJyxcbiAgICBsYXN0RGF5IDogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcbiAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xufTtcblxuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvaXMtZnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsZW5kYXIgKGtleSwgbW9tLCBub3cpIHtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhclsnc2FtZUVsc2UnXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobW9tLCBub3cpIDogb3V0cHV0O1xufVxuIiwiZXhwb3J0IHZhciBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQgPSB7XG4gICAgTFRTICA6ICdoOm1tOnNzIEEnLFxuICAgIExUICAgOiAnaDptbSBBJyxcbiAgICBMICAgIDogJ01NL0REL1lZWVknLFxuICAgIExMICAgOiAnTU1NTSBELCBZWVlZJyxcbiAgICBMTEwgIDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICAgIExMTEwgOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb25nRGF0ZUZvcm1hdCAoa2V5KSB7XG4gICAgdmFyIGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0sXG4gICAgICAgIGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xuXG4gICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xufVxuIiwiZXhwb3J0IHZhciBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWREYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG59XG4iLCJleHBvcnQgdmFyIGRlZmF1bHRPcmRpbmFsID0gJyVkJztcbmV4cG9ydCB2YXIgZGVmYXVsdE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRpbmFsIChudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG59XG5cbiIsImV4cG9ydCB2YXIgZGVmYXVsdFJlbGF0aXZlVGltZSA9IHtcbiAgICBmdXR1cmUgOiAnaW4gJXMnLFxuICAgIHBhc3QgICA6ICclcyBhZ28nLFxuICAgIHMgIDogJ2EgZmV3IHNlY29uZHMnLFxuICAgIG0gIDogJ2EgbWludXRlJyxcbiAgICBtbSA6ICclZCBtaW51dGVzJyxcbiAgICBoICA6ICdhbiBob3VyJyxcbiAgICBoaCA6ICclZCBob3VycycsXG4gICAgZCAgOiAnYSBkYXknLFxuICAgIGRkIDogJyVkIGRheXMnLFxuICAgIE0gIDogJ2EgbW9udGgnLFxuICAgIE1NIDogJyVkIG1vbnRocycsXG4gICAgeSAgOiAnYSB5ZWFyJyxcbiAgICB5eSA6ICclZCB5ZWFycydcbn07XG5cbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2lzLWZ1bmN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZSAobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSB7XG4gICAgdmFyIG91dHB1dCA9IHRoaXMuX3JlbGF0aXZlVGltZVtzdHJpbmddO1xuICAgIHJldHVybiAoaXNGdW5jdGlvbihvdXRwdXQpKSA/XG4gICAgICAgIG91dHB1dChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIDpcbiAgICAgICAgb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bWJlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXN0RnV0dXJlIChkaWZmLCBvdXRwdXQpIHtcbiAgICB2YXIgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xufVxuIiwiaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcblxudmFyIGFsaWFzZXMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRBbGlhcyAodW5pdCwgc2hvcnRoYW5kKSB7XG4gICAgdmFyIGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2xvd2VyQ2FzZSArICdzJ10gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSB1bml0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHVuaXRzID09PSAnc3RyaW5nJyA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV0gOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSB7fSxcbiAgICAgICAgbm9ybWFsaXplZFByb3AsXG4gICAgICAgIHByb3A7XG5cbiAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbn1cblxuIiwidmFyIHByaW9yaXRpZXMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRQcmlvcml0eSh1bml0LCBwcmlvcml0eSkge1xuICAgIHByaW9yaXRpZXNbdW5pdF0gPSBwcmlvcml0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaW9yaXRpemVkVW5pdHModW5pdHNPYmopIHtcbiAgICB2YXIgdW5pdHMgPSBbXTtcbiAgICBmb3IgKHZhciB1IGluIHVuaXRzT2JqKSB7XG4gICAgICAgIHVuaXRzLnB1c2goe3VuaXQ6IHUsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VdfSk7XG4gICAgfVxuICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHJldHVybiB1bml0cztcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzLCBub3JtYWxpemVPYmplY3RVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgZ2V0UHJpb3JpdGl6ZWRVbml0cyB9IGZyb20gJy4uL3VuaXRzL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi91dGlscy9pcy1mdW5jdGlvbic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHZXRTZXQgKHVuaXQsIGtlZXBUaW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0KHRoaXMsIHVuaXQsIHZhbHVlKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCBrZWVwVGltZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQodGhpcywgdW5pdCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0IChtb20sIHVuaXQpIHtcbiAgICByZXR1cm4gbW9tLmlzVmFsaWQoKSA/XG4gICAgICAgIG1vbS5fZFsnZ2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSgpIDogTmFOO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0IChtb20sIHVuaXQsIHZhbHVlKSB7XG4gICAgaWYgKG1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKHZhbHVlKTtcbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0dldCAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdTZXQgKHVuaXRzLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdW5pdHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplT2JqZWN0VW5pdHModW5pdHMpO1xuICAgICAgICB2YXIgcHJpb3JpdGl6ZWQgPSBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmlvcml0aXplZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpc1twcmlvcml0aXplZFtpXS51bml0XSh1bml0c1twcmlvcml0aXplZFtpXS51bml0XSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bml0c10odmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcbiAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgKyBhYnNOdW1iZXI7XG59XG4iLCJpbXBvcnQgemVyb0ZpbGwgZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcblxuZXhwb3J0IHZhciBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcblxudmFyIGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2c7XG5cbnZhciBmb3JtYXRGdW5jdGlvbnMgPSB7fTtcblxuZXhwb3J0IHZhciBmb3JtYXRUb2tlbkZ1bmN0aW9ucyA9IHt9O1xuXG4vLyB0b2tlbjogICAgJ00nXG4vLyBwYWRkZWQ6ICAgWydNTScsIDJdXG4vLyBvcmRpbmFsOiAgJ01vJ1xuLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG5leHBvcnQgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4gKHRva2VuLCBwYWRkZWQsIG9yZGluYWwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGZ1bmMgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbY2FsbGJhY2tdKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0b2tlbikge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBmdW5jO1xuICAgIH1cbiAgICBpZiAocGFkZGVkKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gemVyb0ZpbGwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChvcmRpbmFsKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm9yZGluYWwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0b2tlbik7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICB2YXIgYXJyYXkgPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2VucyksIGksIGxlbmd0aDtcblxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJywgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gYXJyYXlbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpIDogYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb21lbnQobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbS5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSBleHBhbmRGb3JtYXQoZm9ybWF0LCBtLmxvY2FsZURhdGEoKSk7XG4gICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmb3JtYXQsIGxvY2FsZSkge1xuICAgIHZhciBpID0gNTtcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmxvbmdEYXRlRm9ybWF0KGlucHV0KSB8fCBpbnB1dDtcbiAgICB9XG5cbiAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgaSAtPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQ7XG59XG4iLCJleHBvcnQgdmFyIG1hdGNoMSAgICAgICAgID0gL1xcZC87ICAgICAgICAgICAgLy8gICAgICAgMCAtIDlcbmV4cG9ydCB2YXIgbWF0Y2gyICAgICAgICAgPSAvXFxkXFxkLzsgICAgICAgICAgLy8gICAgICAwMCAtIDk5XG5leHBvcnQgdmFyIG1hdGNoMyAgICAgICAgID0gL1xcZHszfS87ICAgICAgICAgLy8gICAgIDAwMCAtIDk5OVxuZXhwb3J0IHZhciBtYXRjaDQgICAgICAgICA9IC9cXGR7NH0vOyAgICAgICAgIC8vICAgIDAwMDAgLSA5OTk5XG5leHBvcnQgdmFyIG1hdGNoNiAgICAgICAgID0gL1srLV0/XFxkezZ9LzsgICAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuZXhwb3J0IHZhciBtYXRjaDF0bzIgICAgICA9IC9cXGRcXGQ/LzsgICAgICAgICAvLyAgICAgICAwIC0gOTlcbmV4cG9ydCB2YXIgbWF0Y2gzdG80ICAgICAgPSAvXFxkXFxkXFxkXFxkPy87ICAgICAvLyAgICAgOTk5IC0gOTk5OVxuZXhwb3J0IHZhciBtYXRjaDV0bzYgICAgICA9IC9cXGRcXGRcXGRcXGRcXGRcXGQ/LzsgLy8gICA5OTk5OSAtIDk5OTk5OVxuZXhwb3J0IHZhciBtYXRjaDF0bzMgICAgICA9IC9cXGR7MSwzfS87ICAgICAgIC8vICAgICAgIDAgLSA5OTlcbmV4cG9ydCB2YXIgbWF0Y2gxdG80ICAgICAgPSAvXFxkezEsNH0vOyAgICAgICAvLyAgICAgICAwIC0gOTk5OVxuZXhwb3J0IHZhciBtYXRjaDF0bzYgICAgICA9IC9bKy1dP1xcZHsxLDZ9LzsgIC8vIC05OTk5OTkgLSA5OTk5OTlcblxuZXhwb3J0IHZhciBtYXRjaFVuc2lnbmVkICA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcbmV4cG9ydCB2YXIgbWF0Y2hTaWduZWQgICAgPSAvWystXT9cXGQrLzsgICAgICAvLyAgICAtaW5mIC0gaW5mXG5cbmV4cG9ydCB2YXIgbWF0Y2hPZmZzZXQgICAgPSAvWnxbKy1dXFxkXFxkOj9cXGRcXGQvZ2k7IC8vICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuZXhwb3J0IHZhciBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2k7IC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5cbmV4cG9ydCB2YXIgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vOyAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuXG4vLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cbi8vIGluY2x1ZGVzIHNjb3R0aXNoIGdhZWxpYyB0d28gd29yZCBhbmQgaHlwaGVuYXRlZCBtb250aHNcbmV4cG9ydCB2YXIgbWF0Y2hXb3JkID0gL1swLTldKlsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSt8W1xcdTA2MDAtXFx1MDZGRlxcL10rKFxccyo/W1xcdTA2MDAtXFx1MDZGRl0rKXsxLDJ9L2k7XG5cblxuaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2lzLWZ1bmN0aW9uJztcblxudmFyIHJlZ2V4ZXMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4gKHRva2VuLCByZWdleCwgc3RyaWN0UmVnZXgpIHtcbiAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpID8gcmVnZXggOiBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIChpc1N0cmljdCAmJiBzdHJpY3RSZWdleCkgPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4gKHRva2VuLCBjb25maWcpIHtcbiAgICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKGNvbmZpZy5fc3RyaWN0LCBjb25maWcuX2xvY2FsZSk7XG59XG5cbi8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbmZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHMpIHtcbiAgICByZXR1cm4gcmVnZXhFc2NhcGUocy5yZXBsYWNlKCdcXFxcJywgJycpLnJlcGxhY2UoL1xcXFwoXFxbKXxcXFxcKFxcXSl8XFxbKFteXFxdXFxbXSopXFxdfFxcXFwoLikvZywgZnVuY3Rpb24gKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdleEVzY2FwZShzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG59XG4iLCJpbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL3V0aWxzL2lzLW51bWJlcic7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxudmFyIHRva2VucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbiAodG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIGksIGZ1bmMgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICB0b2tlbiA9IFt0b2tlbl07XG4gICAgfVxuICAgIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IHRva2VuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbltpXV0gPSBmdW5jO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuICh0b2tlbiwgY2FsbGJhY2spIHtcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcbiAgICAgICAgY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCB0b2tlbik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgaW5wdXQsIGNvbmZpZykge1xuICAgIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICAgICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIFlFQVIgPSAwO1xuZXhwb3J0IHZhciBNT05USCA9IDE7XG5leHBvcnQgdmFyIERBVEUgPSAyO1xuZXhwb3J0IHZhciBIT1VSID0gMztcbmV4cG9ydCB2YXIgTUlOVVRFID0gNDtcbmV4cG9ydCB2YXIgU0VDT05EID0gNTtcbmV4cG9ydCB2YXIgTUlMTElTRUNPTkQgPSA2O1xuZXhwb3J0IHZhciBXRUVLID0gNztcbmV4cG9ydCB2YXIgV0VFS0RBWSA9IDg7XG4iLCJ2YXIgaW5kZXhPZjtcblxuaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgaW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xufSBlbHNlIHtcbiAgICBpbmRleE9mID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgLy8gSSBrbm93XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgaW5kZXhPZiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9tb21lbnQvZ2V0LXNldCc7XG5pbXBvcnQgaGFzT3duUHJvcCBmcm9tICcuLi91dGlscy9oYXMtb3duLXByb3AnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIsIG1hdGNoV29yZCwgcmVnZXhFc2NhcGUgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyBNT05USCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vdXRpbHMvaXMtYXJyYXknO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL3V0aWxzL2lzLW51bWJlcic7XG5pbXBvcnQgaW5kZXhPZiBmcm9tICcuLi91dGlscy9pbmRleC1vZic7XG5pbXBvcnQgeyBjcmVhdGVVVEMgfSBmcm9tICcuLi9jcmVhdGUvdXRjJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggKyAxLCAwKSkuZ2V0VVRDRGF0ZSgpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDJdLCAnTW8nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ01NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignTU1NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ21vbnRoJywgJ00nKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdtb250aCcsIDgpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ00nLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignTU0nLCAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ01NTScsICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzU2hvcnRSZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNT05USF0gPSB0b0ludChpbnB1dCkgLSAxO1xufSk7XG5cbmFkZFBhcnNlVG9rZW4oWydNTU0nLCAnTU1NTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gY29uZmlnLl9sb2NhbGUubW9udGhzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgLy8gaWYgd2UgZGlkbid0IGZpbmQgYSBtb250aCBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWQuXG4gICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gbW9udGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gaW5wdXQ7XG4gICAgfVxufSk7XG5cbi8vIExPQ0FMRVNcblxudmFyIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy87XG5leHBvcnQgdmFyIGRlZmF1bHRMb2NhbGVNb250aHMgPSAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVNb250aHMgKG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpID8gdGhpcy5fbW9udGhzW20ubW9udGgoKV0gOlxuICAgICAgICB0aGlzLl9tb250aHNbKHRoaXMuX21vbnRocy5pc0Zvcm1hdCB8fCBNT05USFNfSU5fRk9STUFUKS50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ11bbS5tb250aCgpXTtcbn1cblxuZXhwb3J0IHZhciBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQgPSAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyk7XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTW9udGhzU2hvcnQgKG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnQ7XG4gICAgfVxuICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KSA/IHRoaXMuX21vbnRoc1Nob3J0W20ubW9udGgoKV0gOlxuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFtNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLm1vbnRoKCldO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZShtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIGlpLCBtb20sIGxsYyA9IG1vbnRoTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBub3QgdXNlZFxuICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHNTaG9ydChtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVNb250aHNQYXJzZSAobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlLmNhbGwodGhpcywgbW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBzb3J0aW5nXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICByZWdleCA9ICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTU0nICYmIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU0nICYmIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vbnRoIChtb20sIHZhbHVlKSB7XG4gICAgdmFyIGRheU9mTW9udGg7XG5cbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgcmV0dXJuIG1vbTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9JbnQodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIFRPRE86IEFub3RoZXIgc2lsZW50IGZhaWx1cmU/XG4gICAgICAgICAgICBpZiAoIWlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXlPZk1vbnRoID0gTWF0aC5taW4obW9tLmRhdGUoKSwgZGF5c0luTW9udGgobW9tLnllYXIoKSwgdmFsdWUpKTtcbiAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgJ01vbnRoJ10odmFsdWUsIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBtb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRNb250aCAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBzZXRNb250aCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLCAnTW9udGgnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzSW5Nb250aCAoKSB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkpO1xufVxuXG52YXIgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG5leHBvcnQgZnVuY3Rpb24gbW9udGhzU2hvcnRSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5leHBvcnQgZnVuY3Rpb24gbW9udGhzUmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNSZWdleDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVNb250aHNQYXJzZSAoKSB7XG4gICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIHNob3J0UGllY2VzID0gW10sIGxvbmdQaWVjZXMgPSBbXSwgbWl4ZWRQaWVjZXMgPSBbXSxcbiAgICAgICAgaSwgbW9tO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgfVxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb250aHNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xufVxuIiwiaW1wb3J0IHsgbWFrZUdldFNldCB9IGZyb20gJy4uL21vbWVudC9nZXQtc2V0JztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gxdG80LCBtYXRjaDF0bzYsIG1hdGNoMiwgbWF0Y2g0LCBtYXRjaDYsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IHsgWUVBUiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdZJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB5ID0gdGhpcy55ZWFyKCk7XG4gICAgcmV0dXJuIHkgPD0gOTk5OSA/ICcnICsgeSA6ICcrJyArIHk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydZWScsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMueWVhcigpICUgMTAwO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWScsICAgNF0sICAgICAgIDAsICd5ZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZJywgIDVdLCAgICAgICAwLCAneWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWVknLCA2LCB0cnVlXSwgMCwgJ3llYXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3llYXInLCAneScpO1xuXG4vLyBQUklPUklUSUVTXG5cbmFkZFVuaXRQcmlvcml0eSgneWVhcicsIDEpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1knLCAgICAgIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZJywgICAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVknLCAgIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuYWRkUGFyc2VUb2tlbihbJ1lZWVlZJywgJ1lZWVlZWSddLCBZRUFSKTtcbmFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBpbnB1dC5sZW5ndGggPT09IDIgPyBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCkgOiB0b0ludChpbnB1dCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xufSk7XG5hZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbn1cblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xufVxuXG4vLyBIT09LU1xuXG5ob29rcy5wYXJzZVR3b0RpZ2l0WWVhciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG59O1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCB2YXIgZ2V0U2V0WWVhciA9IG1ha2VHZXRTZXQoJ0Z1bGxZZWFyJywgdHJ1ZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJc0xlYXBZZWFyICgpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIoKSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0ZSAoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcbiAgICAvL2Nhbid0IGp1c3QgYXBwbHkoKSB0byBjcmVhdGUgYSBkYXRlOlxuICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xODEzNDgvaW5zdGFudGlhdGluZy1hLWphdmFzY3JpcHQtb2JqZWN0LWJ5LWNhbGxpbmctcHJvdG90eXBlLWNvbnN0cnVjdG9yLWFwcGx5XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG5cbiAgICAvL3RoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVVRDRGF0ZSAoeSkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG5cbiAgICAvL3RoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbn1cbiIsImltcG9ydCB7IGRheXNJblllYXIgfSBmcm9tICcuL3llYXInO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuXG4vLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuZnVuY3Rpb24gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSB7XG4gICAgdmFyIC8vIGZpcnN0LXdlZWsgZGF5IC0tIHdoaWNoIGphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrICg0IGZvciBpc28sIDEgZm9yIG90aGVyKVxuICAgICAgICBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAvLyBmaXJzdC13ZWVrIGRheSBsb2NhbCB3ZWVrZGF5IC0tIHdoaWNoIGxvY2FsIHdlZWtkYXkgaXMgZndkXG4gICAgICAgIGZ3ZGx3ID0gKDcgKyBjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cpICUgNztcblxuICAgIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xufVxuXG4vL2h0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZSNDYWxjdWxhdGluZ19hX2RhdGVfZ2l2ZW5fdGhlX3llYXIuMkNfd2Vla19udW1iZXJfYW5kX3dlZWtkYXlcbmV4cG9ydCBmdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla3MoeWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICB2YXIgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDcsXG4gICAgICAgIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICBkYXlPZlllYXIgPSAxICsgNyAqICh3ZWVrIC0gMSkgKyBsb2NhbFdlZWtkYXkgKyB3ZWVrT2Zmc2V0LFxuICAgICAgICByZXNZZWFyLCByZXNEYXlPZlllYXI7XG5cbiAgICBpZiAoZGF5T2ZZZWFyIDw9IDApIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXIgLSAxO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xuICAgIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xuICAgICAgICByZXNZZWFyID0geWVhciArIDE7XG4gICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXI7XG4gICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiByZXNZZWFyLFxuICAgICAgICBkYXlPZlllYXI6IHJlc0RheU9mWWVhclxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrT2ZZZWFyKG1vbSwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldChtb20ueWVhcigpLCBkb3csIGRveSksXG4gICAgICAgIHdlZWsgPSBNYXRoLmZsb29yKChtb20uZGF5T2ZZZWFyKCkgLSB3ZWVrT2Zmc2V0IC0gMSkgLyA3KSArIDEsXG4gICAgICAgIHJlc1dlZWssIHJlc1llYXI7XG5cbiAgICBpZiAod2VlayA8IDEpIHtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgLSAxO1xuICAgICAgICByZXNXZWVrID0gd2VlayArIHdlZWtzSW5ZZWFyKHJlc1llYXIsIGRvdywgZG95KTtcbiAgICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSkpIHtcbiAgICAgICAgcmVzV2VlayA9IHdlZWsgLSB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSk7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKTtcbiAgICAgICAgcmVzV2VlayA9IHdlZWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2VlazogcmVzV2VlayxcbiAgICAgICAgeWVhcjogcmVzWWVhclxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyLCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgd2Vla09mZnNldE5leHQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciArIDEsIGRvdywgZG95KTtcbiAgICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IHdlZWtPZlllYXIgfSBmcm9tICcuL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCd3JywgWyd3dycsIDJdLCAnd28nLCAnd2VlaycpO1xuYWRkRm9ybWF0VG9rZW4oJ1cnLCBbJ1dXJywgMl0sICdXbycsICdpc29XZWVrJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd3ZWVrJywgJ3cnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2VlaycsICdXJyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuYWRkVW5pdFByaW9yaXR5KCd3ZWVrJywgNSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWsnLCA1KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd3JywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCd3dycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1cnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ1dXJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ3cnLCAnd3cnLCAnVycsICdXVyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAxKV0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyBMT0NBTEVTXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVXZWVrIChtb20pIHtcbiAgICByZXR1cm4gd2Vla09mWWVhcihtb20sIHRoaXMuX3dlZWsuZG93LCB0aGlzLl93ZWVrLmRveSkud2Vlaztcbn1cblxuZXhwb3J0IHZhciBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgICBkb3cgOiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZldlZWsgKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZZZWFyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3k7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFdlZWsgKGlucHV0KSB7XG4gICAgdmFyIHdlZWsgPSB0aGlzLmxvY2FsZURhdGEoKS53ZWVrKHRoaXMpO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT1dlZWsgKGlucHV0KSB7XG4gICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaFdvcmQsIHJlZ2V4RXNjYXBlIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL3V0aWxzL2lzLWFycmF5JztcbmltcG9ydCBpbmRleE9mIGZyb20gJy4uL3V0aWxzL2luZGV4LW9mJztcbmltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5pbXBvcnQgeyBjcmVhdGVVVEMgfSBmcm9tICcuLi9jcmVhdGUvdXRjJztcbmltcG9ydCBnZXRQYXJzaW5nRmxhZ3MgZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdkJywgMCwgJ2RvJywgJ2RheScpO1xuXG5hZGRGb3JtYXRUb2tlbignZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5cyh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdlJywgMCwgMCwgJ3dlZWtkYXknKTtcbmFkZEZvcm1hdFRva2VuKCdFJywgMCwgMCwgJ2lzb1dlZWtkYXknKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2RheScsICdkJyk7XG5hZGRVbml0QWxpYXMoJ3dlZWtkYXknLCAnZScpO1xuYWRkVW5pdEFsaWFzKCdpc29XZWVrZGF5JywgJ0UnKTtcblxuLy8gUFJJT1JJVFlcbmFkZFVuaXRQcmlvcml0eSgnZGF5JywgMTEpO1xuYWRkVW5pdFByaW9yaXR5KCd3ZWVrZGF5JywgMTEpO1xuYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrZGF5JywgMTEpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ2QnLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignZScsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdFJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2RkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2RkJywgJ2RkZCcsICdkZGRkJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciB3ZWVrZGF5ID0gY29uZmlnLl9sb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcbiAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICAgIHdlZWsuZCA9IHdlZWtkYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSBpbnB1dDtcbiAgICB9XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydkJywgJ2UnLCAnRSddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuXSA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbmZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGlmICghaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dCwgMTApO1xuICAgIH1cblxuICAgIGlucHV0ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcGFyc2VJc29XZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpICUgNyB8fCA3O1xuICAgIH1cbiAgICByZXR1cm4gaXNOYU4oaW5wdXQpID8gbnVsbCA6IGlucHV0O1xufVxuXG4vLyBMT0NBTEVTXG5cbmV4cG9ydCB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzID0gJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpO1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzIChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl93ZWVrZGF5cykgPyB0aGlzLl93ZWVrZGF5c1ttLmRheSgpXSA6XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzW3RoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLmRheSgpXTtcbn1cblxuZXhwb3J0IHZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyk7XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNTaG9ydCAobSkge1xuICAgIHJldHVybiAobSkgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldIDogdGhpcy5fd2Vla2RheXNTaG9ydDtcbn1cblxuZXhwb3J0IHZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyk7XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4gKG0pIHtcbiAgICByZXR1cm4gKG0pID8gdGhpcy5fd2Vla2RheXNNaW5bbS5kYXkoKV0gOiB0aGlzLl93ZWVrZGF5c01pbjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2Uod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIGlpLCBtb20sIGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5cyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzUGFyc2UgKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UuY2FsbCh0aGlzLCB3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcblxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy53ZWVrZGF5cyhtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcLj8nKSArICckJywgJ2knKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcLj8nKSArICckJywgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHJlZ2V4ID0gJ14nICsgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArICd8XicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykgKyAnfF4nICsgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGRkJyAmJiB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZCcgJiYgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGQnICYmIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fd2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldERheU9mV2VlayAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgdmFyIGRheSA9IHRoaXMuX2lzVVRDID8gdGhpcy5fZC5nZXRVVENEYXkoKSA6IHRoaXMuX2QuZ2V0RGF5KCk7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGlucHV0IC0gZGF5LCAnZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrIChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICB2YXIgd2Vla2RheSA9ICh0aGlzLmRheSgpICsgNyAtIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdykgJSA3O1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2Vla2RheSA6IHRoaXMuYWRkKGlucHV0IC0gd2Vla2RheSwgJ2QnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT0RheU9mV2VlayAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG5cbiAgICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gICAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcbiAgICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXG5cbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICB2YXIgd2Vla2RheSA9IHBhcnNlSXNvV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkodGhpcy5kYXkoKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRheSgpIHx8IDc7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdFdlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQ7XG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheXNSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBkZWZhdWx0V2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0V2Vla2RheXNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlzU2hvcnRSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdFdlZWtkYXlzTWluUmVnZXggPSBtYXRjaFdvcmQ7XG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheXNNaW5SZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c01pblJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSBkZWZhdWx0V2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY29tcHV0ZVdlZWtkYXlzUGFyc2UgKCkge1xuICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBtaW5QaWVjZXMgPSBbXSwgc2hvcnRQaWVjZXMgPSBbXSwgbG9uZ1BpZWNlcyA9IFtdLCBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICBpLCBtb20sIG1pbnAsIHNob3J0cCwgbG9uZ3A7XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICBtaW5wID0gdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpO1xuICAgICAgICBsb25ncCA9IHRoaXMud2Vla2RheXMobW9tLCAnJyk7XG4gICAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgIGxvbmdQaWVjZXMucHVzaChsb25ncCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChsb25ncCk7XG4gICAgfVxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBtaW5QaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICB9XG5cbiAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG5cbiAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaW5QaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xufVxuIiwiaW1wb3J0IHsgbWFrZUdldFNldCB9IGZyb20gJy4uL21vbWVudC9nZXQtc2V0JztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyLCBtYXRjaDN0bzQsIG1hdGNoNXRvNiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBIT1VSLCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuaW1wb3J0IHplcm9GaWxsIGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBoRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmhvdXJzKCkgJSAxMiB8fCAxMjtcbn1cblxuZnVuY3Rpb24ga0Zvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3VycygpIHx8IDI0O1xufVxuXG5hZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyXSwgMCwgJ2hvdXInKTtcbmFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDJdLCAwLCBoRm9ybWF0KTtcbmFkZEZvcm1hdFRva2VuKCdrJywgWydraycsIDJdLCAwLCBrRm9ybWF0KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyBoRm9ybWF0LmFwcGx5KHRoaXMpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyBoRm9ybWF0LmFwcGx5KHRoaXMpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdIbW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgdGhpcy5ob3VycygpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdIbW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG59KTtcblxuZnVuY3Rpb24gbWVyaWRpZW0gKHRva2VuLCBsb3dlcmNhc2UpIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubWVyaWRpZW0odGhpcy5ob3VycygpLCB0aGlzLm1pbnV0ZXMoKSwgbG93ZXJjYXNlKTtcbiAgICB9KTtcbn1cblxubWVyaWRpZW0oJ2EnLCB0cnVlKTtcbm1lcmlkaWVtKCdBJywgZmFsc2UpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnaG91cicsICdoJyk7XG5cbi8vIFBSSU9SSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2hvdXInLCAxMyk7XG5cbi8vIFBBUlNJTkdcblxuZnVuY3Rpb24gbWF0Y2hNZXJpZGllbSAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XG59XG5cbmFkZFJlZ2V4VG9rZW4oJ2EnLCAgbWF0Y2hNZXJpZGllbSk7XG5hZGRSZWdleFRva2VuKCdBJywgIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignSCcsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignaCcsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdoaCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbScsIG1hdGNoM3RvNCk7XG5hZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XG5cbmFkZFBhcnNlVG9rZW4oWydIJywgJ0hIJ10sIEhPVVIpO1xuYWRkUGFyc2VUb2tlbihbJ2EnLCAnQSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2lzUG0gPSBjb25maWcuX2xvY2FsZS5pc1BNKGlucHV0KTtcbiAgICBjb25maWcuX21lcmlkaWVtID0gaW5wdXQ7XG59KTtcbmFkZFBhcnNlVG9rZW4oWydoJywgJ2hoJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xufSk7XG5hZGRQYXJzZVRva2VuKCdobW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xufSk7XG5hZGRQYXJzZVRva2VuKCdobW1zcycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICB2YXIgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xufSk7XG5hZGRQYXJzZVRva2VuKCdIbW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xufSk7XG5hZGRQYXJzZVRva2VuKCdIbW1zcycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICB2YXIgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xufSk7XG5cbi8vIExPQ0FMRVNcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUlzUE0gKGlucHV0KSB7XG4gICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxuICAgIHJldHVybiAoKGlucHV0ICsgJycpLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAncCcpO1xufVxuXG5leHBvcnQgdmFyIGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlID0gL1thcF1cXC4/bT9cXC4/L2k7XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTWVyaWRpZW0gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdhbScgOiAnQU0nO1xuICAgIH1cbn1cblxuXG4vLyBNT01FTlRTXG5cbi8vIFNldHRpbmcgdGhlIGhvdXIgc2hvdWxkIGtlZXAgdGhlIHRpbWUsIGJlY2F1c2UgdGhlIHVzZXIgZXhwbGljaXRseVxuLy8gc3BlY2lmaWVkIHdoaWNoIGhvdXIgaGUgd2FudHMuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxuLy8gYSBuZXcgdGltZXpvbmUpIG1ha2VzIHNlbnNlLiBBZGRpbmcvc3VidHJhY3RpbmcgaG91cnMgZG9lcyBub3QgZm9sbG93XG4vLyB0aGlzIHJ1bGUuXG5leHBvcnQgdmFyIGdldFNldEhvdXIgPSBtYWtlR2V0U2V0KCdIb3VycycsIHRydWUpO1xuIiwiaW1wb3J0IHsgZGVmYXVsdENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdHMnO1xuaW1wb3J0IHsgZGVmYXVsdEludmFsaWREYXRlIH0gZnJvbSAnLi9pbnZhbGlkJztcbmltcG9ydCB7IGRlZmF1bHRPcmRpbmFsLCBkZWZhdWx0T3JkaW5hbFBhcnNlIH0gZnJvbSAnLi9vcmRpbmFsJztcbmltcG9ydCB7IGRlZmF1bHRSZWxhdGl2ZVRpbWUgfSBmcm9tICcuL3JlbGF0aXZlJztcblxuLy8gbW9udGhzXG5pbXBvcnQge1xuICAgIGRlZmF1bHRMb2NhbGVNb250aHMsXG4gICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxufSBmcm9tICcuLi91bml0cy9tb250aCc7XG5cbi8vIHdlZWtcbmltcG9ydCB7IGRlZmF1bHRMb2NhbGVXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5cbi8vIHdlZWtkYXlzXG5pbXBvcnQge1xuICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gICAgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG59IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8gbWVyaWRpZW1cbmltcG9ydCB7IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlIH0gZnJvbSAnLi4vdW5pdHMvaG91cic7XG5cbmV4cG9ydCB2YXIgYmFzZUNvbmZpZyA9IHtcbiAgICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICAgIGxvbmdEYXRlRm9ybWF0OiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsXG4gICAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgICBvcmRpbmFsUGFyc2U6IGRlZmF1bHRPcmRpbmFsUGFyc2UsXG4gICAgcmVsYXRpdmVUaW1lOiBkZWZhdWx0UmVsYXRpdmVUaW1lLFxuXG4gICAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICAgIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgICB3ZWVrOiBkZWZhdWx0TG9jYWxlV2VlayxcblxuICAgIHdlZWtkYXlzOiBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gICAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgICB3ZWVrZGF5c1Nob3J0OiBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcblxuICAgIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlXG59O1xuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vdXRpbHMvaXMtYXJyYXknO1xuaW1wb3J0IGhhc093blByb3AgZnJvbSAnLi4vdXRpbHMvaGFzLW93bi1wcm9wJztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICcuLi91dGlscy9pcy11bmRlZmluZWQnO1xuaW1wb3J0IGNvbXBhcmVBcnJheXMgZnJvbSAnLi4vdXRpbHMvY29tcGFyZS1hcnJheXMnO1xuaW1wb3J0IHsgZGVwcmVjYXRlU2ltcGxlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcbmltcG9ydCB7IG1lcmdlQ29uZmlncyB9IGZyb20gJy4vc2V0JztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IGtleXMgZnJvbSAnLi4vdXRpbHMva2V5cyc7XG5cbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL2Jhc2UtY29uZmlnJztcblxuLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xudmFyIGxvY2FsZXMgPSB7fTtcbnZhciBsb2NhbGVGYW1pbGllcyA9IHt9O1xudmFyIGdsb2JhbExvY2FsZTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xuICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbn1cblxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCwgYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzKSB7XG4gICAgdmFyIGkgPSAwLCBqLCBuZXh0LCBsb2NhbGUsIHNwbGl0O1xuXG4gICAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgIGogPSBzcGxpdC5sZW5ndGg7XG4gICAgICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xuICAgICAgICAgICAgICAgIC8vdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWUpIHtcbiAgICB2YXIgb2xkTG9jYWxlID0gbnVsbDtcbiAgICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxuICAgIGlmICghbG9jYWxlc1tuYW1lXSAmJiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICAgICAgICAgIHJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgZGVmaW5lTG9jYWxlIGN1cnJlbnRseSBhbHNvIHNldHMgdGhlIGdsb2JhbCBsb2NhbGUsIHdlXG4gICAgICAgICAgICAvLyB3YW50IHRvIHVuZG8gdGhhdCBmb3IgbGF6eSBsb2FkZWQgbG9jYWxlc1xuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXG4vLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuLy8gbG9jYWxlIGtleS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRHbG9iYWxMb2NhbGUgKGtleSwgdmFsdWVzKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgaWYgKGtleSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JhbExvY2FsZS5fYWJicjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUxvY2FsZSAobmFtZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoJ2RlZmluZUxvY2FsZU92ZXJyaWRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3VzZSBtb21lbnQudXBkYXRlTG9jYWxlKGxvY2FsZU5hbWUsIGNvbmZpZykgdG8gY2hhbmdlICcgK1xuICAgICAgICAgICAgICAgICAgICAnYW4gZXhpc3RpbmcgbG9jYWxlLiBtb21lbnQuZGVmaW5lTG9jYWxlKGxvY2FsZU5hbWUsICcgK1xuICAgICAgICAgICAgICAgICAgICAnY29uZmlnKSBzaG91bGQgb25seSBiZSB1c2VkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGUgJyArXG4gICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kZWZpbmUtbG9jYWxlLyBmb3IgbW9yZSBpbmZvLicpO1xuICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tuYW1lXS5fY29uZmlnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICAgICAgICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gICAgICAgIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cblxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcbiAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGxvY2FsZSwgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgLy8gTUVSR0VcbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tuYW1lXS5fY29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgIGxvY2FsZSA9IG5ldyBMb2NhbGUoY29uZmlnKTtcbiAgICAgICAgbG9jYWxlLnBhcmVudExvY2FsZSA9IGxvY2FsZXNbbmFtZV07XG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG5cbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwYXNzIG51bGwgZm9yIGNvbmZpZyB0byB1bnVwZGF0ZSwgdXNlZnVsIGZvciB0ZXN0c1xuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIHJldHVybnMgbG9jYWxlIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUgKGtleSkge1xuICAgIHZhciBsb2NhbGU7XG5cbiAgICBpZiAoa2V5ICYmIGtleS5fbG9jYWxlICYmIGtleS5fbG9jYWxlLl9hYmJyKSB7XG4gICAgICAgIGtleSA9IGtleS5fbG9jYWxlLl9hYmJyO1xuICAgIH1cblxuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0FycmF5KGtleSkpIHtcbiAgICAgICAgLy9zaG9ydC1jaXJjdWl0IGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKGtleSk7XG4gICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob29zZUxvY2FsZShrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdExvY2FsZXMoKSB7XG4gICAgcmV0dXJuIGtleXMobG9jYWxlcyk7XG59XG4iLCJpbXBvcnQgeyBkYXlzSW5Nb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IFlFQVIsIE1PTlRILCBEQVRFLCBIT1VSLCBNSU5VVEUsIFNFQ09ORCwgTUlMTElTRUNPTkQsIFdFRUssIFdFRUtEQVkgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3cgKG0pIHtcbiAgICB2YXIgb3ZlcmZsb3c7XG4gICAgdmFyIGEgPSBtLl9hO1xuXG4gICAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICBvdmVyZmxvdyA9XG4gICAgICAgICAgICBhW01PTlRIXSAgICAgICA8IDAgfHwgYVtNT05USF0gICAgICAgPiAxMSAgPyBNT05USCA6XG4gICAgICAgICAgICBhW0RBVEVdICAgICAgICA8IDEgfHwgYVtEQVRFXSAgICAgICAgPiBkYXlzSW5Nb250aChhW1lFQVJdLCBhW01PTlRIXSkgPyBEQVRFIDpcbiAgICAgICAgICAgIGFbSE9VUl0gICAgICAgIDwgMCB8fCBhW0hPVVJdICAgICAgICA+IDI0IHx8IChhW0hPVVJdID09PSAyNCAmJiAoYVtNSU5VVEVdICE9PSAwIHx8IGFbU0VDT05EXSAhPT0gMCB8fCBhW01JTExJU0VDT05EXSAhPT0gMCkpID8gSE9VUiA6XG4gICAgICAgICAgICBhW01JTlVURV0gICAgICA8IDAgfHwgYVtNSU5VVEVdICAgICAgPiA1OSAgPyBNSU5VVEUgOlxuICAgICAgICAgICAgYVtTRUNPTkRdICAgICAgPCAwIHx8IGFbU0VDT05EXSAgICAgID4gNTkgID8gU0VDT05EIDpcbiAgICAgICAgICAgIGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OSA/IE1JTExJU0VDT05EIDpcbiAgICAgICAgICAgIC0xO1xuXG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93RGF5T2ZZZWFyICYmIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbiIsImltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuXG4vLyBpc28gODYwMSByZWdleFxuLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXG52YXIgZXh0ZW5kZWRJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcbnZhciBiYXNpY0lzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KSg/OlxcZFxcZFxcZFxcZHxXXFxkXFxkXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86XFxkXFxkKD86XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcblxudmFyIHR6UmVnZXggPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy87XG5cbnZhciBpc29EYXRlcyA9IFtcbiAgICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvXSxcbiAgICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXG4gICAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9L10sXG4gICAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXG4gICAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9L10sXG4gICAgWydZWVlZTU1ERCcsIC9cXGR7OH0vXSxcbiAgICAvLyBZWVlZTU0gaXMgTk9UIGFsbG93ZWQgYnkgdGhlIHN0YW5kYXJkXG4gICAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vXSxcbiAgICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxuICAgIFsnWVlZWURERCcsIC9cXGR7N30vXVxuXTtcblxuLy8gaXNvIHRpbWUgZm9ybWF0cyBhbmQgcmVnZXhlc1xudmFyIGlzb1RpbWVzID0gW1xuICAgIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcbiAgICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxuICAgIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcbiAgICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcbiAgICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXG4gICAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXG4gICAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxuICAgIFsnSEgnLCAvXFxkXFxkL11cbl07XG5cbnZhciBhc3BOZXRKc29uUmVnZXggPSAvXlxcLz9EYXRlXFwoKFxcLT9cXGQrKS9pO1xuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21JU08oY29uZmlnKSB7XG4gICAgdmFyIGksIGwsXG4gICAgICAgIHN0cmluZyA9IGNvbmZpZy5faSxcbiAgICAgICAgbWF0Y2ggPSBleHRlbmRlZElzb1JlZ2V4LmV4ZWMoc3RyaW5nKSB8fCBiYXNpY0lzb1JlZ2V4LmV4ZWMoc3RyaW5nKSxcbiAgICAgICAgYWxsb3dUaW1lLCBkYXRlRm9ybWF0LCB0aW1lRm9ybWF0LCB0ekZvcm1hdDtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgICAgICAgICAgICBhbGxvd1RpbWUgPSBpc29EYXRlc1tpXVsyXSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoWzJdIHNob3VsZCBiZSAnVCcgb3Igc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdCA9IChtYXRjaFsyXSB8fCAnICcpICsgaXNvVGltZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbNF0pIHtcbiAgICAgICAgICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XG4gICAgICAgICAgICAgICAgdHpGb3JtYXQgPSAnWic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25maWcuX2YgPSBkYXRlRm9ybWF0ICsgKHRpbWVGb3JtYXQgfHwgJycpICsgKHR6Rm9ybWF0IHx8ICcnKTtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuLy8gZGF0ZSBmcm9tIGlzbyBmb3JtYXQgb3IgZmFsbGJhY2tcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nKGNvbmZpZykge1xuICAgIHZhciBtYXRjaGVkID0gYXNwTmV0SnNvblJlZ2V4LmV4ZWMoY29uZmlnLl9pKTtcblxuICAgIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCttYXRjaGVkWzFdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgIH1cbn1cblxuaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4gICAgJ3ZhbHVlIHByb3ZpZGVkIGlzIG5vdCBpbiBhIHJlY29nbml6ZWQgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4gICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIElTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xuICAgICdkaXNjb3VyYWdlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGFuIHVwY29taW5nIG1ham9yIHJlbGVhc2UuIFBsZWFzZSByZWZlciB0byAnICtcbiAgICAnaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXG4gICAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShjb25maWcuX2kgKyAoY29uZmlnLl91c2VVVEMgPyAnIFVUQycgOiAnJykpO1xuICAgIH1cbik7XG4iLCIvLyBQaWNrIHRoZSBmaXJzdCBkZWZpbmVkIG9mIHR3byBvciB0aHJlZSBhcmd1bWVudHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0cyhhLCBiLCBjKSB7XG4gICAgaWYgKGEgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgaWYgKGIgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGM7XG59XG4iLCJpbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IGNyZWF0ZURhdGUsIGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5pbXBvcnQgeyB3ZWVrT2ZZZWFyLCB3ZWVrc0luWWVhciwgZGF5T2ZZZWFyRnJvbVdlZWtzIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBZRUFSLCBNT05USCwgREFURSwgSE9VUiwgTUlOVVRFLCBTRUNPTkQsIE1JTExJU0VDT05EIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi9sb2NhbCc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vdXRpbHMvZGVmYXVsdHMnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuXG5mdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZykge1xuICAgIC8vIGhvb2tzIGlzIGFjdHVhbGx5IHRoZSBleHBvcnRlZCBtb21lbnQgb2JqZWN0XG4gICAgdmFyIG5vd1ZhbHVlID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgICAgICByZXR1cm4gW25vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKV07XG4gICAgfVxuICAgIHJldHVybiBbbm93VmFsdWUuZ2V0RnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0TW9udGgoKSwgbm93VmFsdWUuZ2V0RGF0ZSgpXTtcbn1cblxuLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4vLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXG4vLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tQXJyYXkgKGNvbmZpZykge1xuICAgIHZhciBpLCBkYXRlLCBpbnB1dCA9IFtdLCBjdXJyZW50RGF0ZSwgeWVhclRvVXNlO1xuXG4gICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICAgICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy9pZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXG4gICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyKSB7XG4gICAgICAgIHllYXJUb1VzZSA9IGRlZmF1bHRzKGNvbmZpZy5fYVtZRUFSXSwgY3VycmVudERhdGVbWUVBUl0pO1xuXG4gICAgICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgICAgICBjb25maWcuX2FbREFURV0gPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XG4gICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAgIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xuICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcbiAgICB9XG5cbiAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IChjb25maWcuX2FbaV0gPT0gbnVsbCkgPyAoaSA9PT0gMiA/IDEgOiAwKSA6IGNvbmZpZy5fYVtpXTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXG4gICAgaWYgKGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXG4gICAgICAgICAgICBjb25maWcuX2FbU0VDT05EXSA9PT0gMCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMCkge1xuICAgICAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xuICAgIH1cblxuICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShudWxsLCBpbnB1dCk7XG4gICAgLy8gQXBwbHkgdGltZXpvbmUgb2Zmc2V0IGZyb20gaW5wdXQuIFRoZSBhY3R1YWwgdXRjT2Zmc2V0IGNhbiBiZSBjaGFuZ2VkXG4gICAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gICAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZykge1xuICAgIHZhciB3LCB3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3ksIHRlbXAsIHdlZWtkYXlPdmVyZmxvdztcblxuICAgIHcgPSBjb25maWcuX3c7XG4gICAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgICAgICBkb3cgPSAxO1xuICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgICAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXG4gICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuR0csIGNvbmZpZy5fYVtZRUFSXSwgd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCAxLCA0KS55ZWFyKTtcbiAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcuVywgMSk7XG4gICAgICAgIHdlZWtkYXkgPSBkZWZhdWx0cyh3LkUsIDEpO1xuICAgICAgICBpZiAod2Vla2RheSA8IDEgfHwgd2Vla2RheSA+IDcpIHtcbiAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkb3cgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3c7XG4gICAgICAgIGRveSA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRveTtcblxuICAgICAgICB2YXIgY3VyV2VlayA9IHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgZG93LCBkb3kpO1xuXG4gICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5nZywgY29uZmlnLl9hW1lFQVJdLCBjdXJXZWVrLnllYXIpO1xuXG4gICAgICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCB3ZWVrLlxuICAgICAgICB3ZWVrID0gZGVmYXVsdHMody53LCBjdXJXZWVrLndlZWspO1xuXG4gICAgICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gdy5kO1xuICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbG9jYWwgd2Vla2RheSAtLSBjb3VudGluZyBzdGFydHMgZnJvbSBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0IHRvIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlZWsgPCAxIHx8IHdlZWsgPiB3ZWVrc0luWWVhcih3ZWVrWWVhciwgZG93LCBkb3kpKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNvbmZpZ0Zyb21JU08gfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4gfSAgIGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFRpbWVUb0FycmF5RnJvbVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgZXhwYW5kRm9ybWF0LCBmb3JtYXRUb2tlbkZ1bmN0aW9ucywgZm9ybWF0dGluZ1Rva2VucyB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IGNoZWNrT3ZlcmZsb3cgZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBIT1VSIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuXG4vLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgSVNPIHN0YW5kYXJkXG5ob29rcy5JU09fODYwMSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpIHtcbiAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYW5vdGhlciBwYXJ0IG9mIHRoZSBjcmVhdGlvbiBmbG93IHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwc1xuICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLklTT184NjAxKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZy5fYSA9IFtdO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICAgIC8vIFRoaXMgYXJyYXkgaXMgdXNlZCB0byBtYWtlIGEgRGF0ZSwgZWl0aGVyIHdpdGggYG5ldyBEYXRlYCBvciBgRGF0ZS5VVENgXG4gICAgdmFyIHN0cmluZyA9ICcnICsgY29uZmlnLl9pLFxuICAgICAgICBpLCBwYXJzZWRJbnB1dCwgdG9rZW5zLCB0b2tlbiwgc2tpcHBlZCxcbiAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDA7XG5cbiAgICB0b2tlbnMgPSBleHBhbmRGb3JtYXQoY29uZmlnLl9mLCBjb25maWcuX2xvY2FsZSkubWF0Y2goZm9ybWF0dGluZ1Rva2VucykgfHwgW107XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICBwYXJzZWRJbnB1dCA9IChzdHJpbmcubWF0Y2goZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpKSB8fCBbXSlbMF07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2tlbicsIHRva2VuLCAncGFyc2VkSW5wdXQnLCBwYXJzZWRJbnB1dCxcbiAgICAgICAgLy8gICAgICAgICAncmVnZXgnLCBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpO1xuICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgIHNraXBwZWQgPSBzdHJpbmcuc3Vic3RyKDAsIHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSk7XG4gICAgICAgICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChza2lwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZShzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkgKyBwYXJzZWRJbnB1dC5sZW5ndGgpO1xuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIHBhcnNlZElucHV0LCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmNoYXJzTGVmdE92ZXIgPSBzdHJpbmdMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHN0cmluZyk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcbiAgICBpZiAoY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPT09IHRydWUgJiZcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID4gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XG4gICAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKGNvbmZpZy5fbG9jYWxlLCBjb25maWcuX2FbSE9VUl0sIGNvbmZpZy5fbWVyaWRpZW0pO1xuXG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgY2hlY2tPdmVyZmxvdyhjb25maWcpO1xufVxuXG5cbmZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcCAobG9jYWxlLCBob3VyLCBtZXJpZGllbSkge1xuICAgIHZhciBpc1BtO1xuXG4gICAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAgICAgLy8gbm90aGluZyB0byBkb1xuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9XG4gICAgaWYgKGxvY2FsZS5tZXJpZGllbUhvdXIgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XG4gICAgfSBlbHNlIGlmIChsb2NhbGUuaXNQTSAhPSBudWxsKSB7XG4gICAgICAgIC8vIEZhbGxiYWNrXG4gICAgICAgIGlzUG0gPSBsb2NhbGUuaXNQTShtZXJpZGllbSk7XG4gICAgICAgIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgaG91ciArPSAxMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb3B5Q29uZmlnIH0gZnJvbSAnLi4vbW9tZW50L2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuaW1wb3J0IGdldFBhcnNpbmdGbGFncyBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuLi91dGlscy9leHRlbmQnO1xuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcbiAgICB2YXIgdGVtcENvbmZpZyxcbiAgICAgICAgYmVzdE1vbWVudCxcblxuICAgICAgICBzY29yZVRvQmVhdCxcbiAgICAgICAgaSxcbiAgICAgICAgY3VycmVudFNjb3JlO1xuXG4gICAgaWYgKGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnLl9mLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIHRlbXBDb25maWcgPSBjb3B5Q29uZmlnKHt9LCBjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQodGVtcENvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcbiAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5jaGFyc0xlZnRPdmVyO1xuXG4gICAgICAgIC8vb3IgdG9rZW5zXG4gICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcblxuICAgICAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICAgICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4dGVuZChjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVPYmplY3RVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbHMvbWFwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGkgPSBub3JtYWxpemVPYmplY3RVbml0cyhjb25maWcuX2kpO1xuICAgIGNvbmZpZy5fYSA9IG1hcChbaS55ZWFyLCBpLm1vbnRoLCBpLmRheSB8fCBpLmRhdGUsIGkuaG91ciwgaS5taW51dGUsIGkuc2Vjb25kLCBpLm1pbGxpc2Vjb25kXSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHBhcnNlSW50KG9iaiwgMTApO1xuICAgIH0pO1xuXG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG59XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuLi91dGlscy9pcy1hcnJheSc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vdXRpbHMvaXMtb2JqZWN0JztcbmltcG9ydCBpc09iamVjdEVtcHR5IGZyb20gJy4uL3V0aWxzL2lzLW9iamVjdC1lbXB0eSc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi4vdXRpbHMvaXMtbnVtYmVyJztcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vdXRpbHMvaXMtZGF0ZSc7XG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWxzL21hcCc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBNb21lbnQsIGlzTW9tZW50IH0gZnJvbSAnLi4vbW9tZW50L2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IGNoZWNrT3ZlcmZsb3cgZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5cbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheSB9ICBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmcgfSAgICAgICAgICBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9ICAgICAgICAgICBmcm9tICcuL2Zyb20tYXJyYXknO1xuaW1wb3J0IHsgY29uZmlnRnJvbU9iamVjdCB9ICAgICAgICAgIGZyb20gJy4vZnJvbS1vYmplY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnIChjb25maWcpIHtcbiAgICB2YXIgcmVzID0gbmV3IE1vbWVudChjaGVja092ZXJmbG93KHByZXBhcmVDb25maWcoY29uZmlnKSkpO1xuICAgIGlmIChyZXMuX25leHREYXkpIHtcbiAgICAgICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXG4gICAgICAgIHJlcy5hZGQoMSwgJ2QnKTtcbiAgICAgICAgcmVzLl9uZXh0RGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnIChjb25maWcpIHtcbiAgICB2YXIgaW5wdXQgPSBjb25maWcuX2ksXG4gICAgICAgIGZvcm1hdCA9IGNvbmZpZy5fZjtcblxuICAgIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoe251bGxJbnB1dDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xuICAgIH1cblxuICAgIGlmIChpc01vbWVudChpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhpbnB1dCkpO1xuICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2QgPSBpbnB1dDtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgfSAgZWxzZSB7XG4gICAgICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gY29uZmlnRnJvbUlucHV0KGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faTtcbiAgICBpZiAoaW5wdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0LnZhbHVlT2YoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG9iaiwgMTApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YoaW5wdXQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGlzVVRDKSB7XG4gICAgdmFyIGMgPSB7fTtcblxuICAgIGlmIChsb2NhbGUgPT09IHRydWUgfHwgbG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBzdHJpY3QgPSBsb2NhbGU7XG4gICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoKGlzT2JqZWN0KGlucHV0KSAmJiBpc09iamVjdEVtcHR5KGlucHV0KSkgfHxcbiAgICAgICAgICAgIChpc0FycmF5KGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIGlucHV0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAgIGMuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gICAgYy5fdXNlVVRDID0gYy5faXNVVEMgPSBpc1VUQztcbiAgICBjLl9sID0gbG9jYWxlO1xuICAgIGMuX2kgPSBpbnB1dDtcbiAgICBjLl9mID0gZm9ybWF0O1xuICAgIGMuX3N0cmljdCA9IHN0cmljdDtcblxuICAgIHJldHVybiBjcmVhdGVGcm9tQ29uZmlnKGMpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4vZnJvbS1hbnl0aGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbCAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgZmFsc2UpO1xufVxuIiwiaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL3V0aWxzL2lzLWFycmF5JztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQgfSBmcm9tICcuLi9jcmVhdGUvdmFsaWQnO1xuXG5leHBvcnQgdmFyIHByb3RvdHlwZU1pbiA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50KCkubWluIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWF4IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG90aGVyIDwgdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgdmFyIHByb3RvdHlwZU1heCA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50KCkubWF4IGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWluIGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG90aGVyID4gdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG4vLyBQaWNrIGEgbW9tZW50IG0gZnJvbSBtb21lbnRzIHNvIHRoYXQgbVtmbl0ob3RoZXIpIGlzIHRydWUgZm9yIGFsbFxuLy8gb3RoZXIuIFRoaXMgcmVsaWVzIG9uIHRoZSBmdW5jdGlvbiBmbiB0byBiZSB0cmFuc2l0aXZlLlxuLy9cbi8vIG1vbWVudHMgc2hvdWxkIGVpdGhlciBiZSBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cyBvciBhbiBhcnJheSwgd2hvc2Vcbi8vIGZpcnN0IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMuXG5mdW5jdGlvbiBwaWNrQnkoZm4sIG1vbWVudHMpIHtcbiAgICB2YXIgcmVzLCBpO1xuICAgIGlmIChtb21lbnRzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG1vbWVudHNbMF0pKSB7XG4gICAgICAgIG1vbWVudHMgPSBtb21lbnRzWzBdO1xuICAgIH1cbiAgICBpZiAoIW1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbCgpO1xuICAgIH1cbiAgICByZXMgPSBtb21lbnRzWzBdO1xuICAgIGZvciAoaSA9IDE7IGkgPCBtb21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgICAgICAgICAgcmVzID0gbW9tZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xuZXhwb3J0IGZ1bmN0aW9uIG1pbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0JlZm9yZScsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4ICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHJldHVybiBwaWNrQnkoJ2lzQWZ0ZXInLCBhcmdzKTtcbn1cbiIsImV4cG9ydCB2YXIgbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBEYXRlLm5vdyA/IERhdGUubm93KCkgOiArKG5ldyBEYXRlKCkpO1xufTtcbiIsImltcG9ydCB7IG5vcm1hbGl6ZU9iamVjdFVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBEdXJhdGlvbiAoZHVyYXRpb24pIHtcbiAgICB2YXIgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pLFxuICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgIHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMCxcbiAgICAgICAgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDAsXG4gICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgMCxcbiAgICAgICAgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMCxcbiAgICAgICAgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91ciB8fCAwLFxuICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZCB8fCAwLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmQgfHwgMDtcblxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gK21pbGxpc2Vjb25kcyArXG4gICAgICAgIHNlY29uZHMgKiAxZTMgKyAvLyAxMDAwXG4gICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcbiAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArXG4gICAgICAgIHdlZWtzICogNztcbiAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xuICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXG4gICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICtcbiAgICAgICAgcXVhcnRlcnMgKiAzICtcbiAgICAgICAgeWVhcnMgKiAxMjtcblxuICAgIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgdGhpcy5fYnViYmxlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRHVyYXRpb247XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYnNSb3VuZCAobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoLTEgKiBudW1iZXIpICogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgemVyb0ZpbGwgZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY3JlYXRlJztcbmltcG9ydCB7IGFkZFN1YnRyYWN0IH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBpc01vbWVudCwgY29weUNvbmZpZyB9IGZyb20gJy4uL21vbWVudC9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2hPZmZzZXQsIG1hdGNoU2hvcnRPZmZzZXQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWwgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgcHJlcGFyZUNvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9mcm9tLWFueXRoaW5nJztcbmltcG9ydCB7IGNyZWF0ZVVUQyB9IGZyb20gJy4uL2NyZWF0ZS91dGMnO1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi91dGlscy9pcy1kYXRlJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJy4uL3V0aWxzL2lzLXVuZGVmaW5lZCc7XG5pbXBvcnQgY29tcGFyZUFycmF5cyBmcm9tICcuLi91dGlscy9jb21wYXJlLWFycmF5cyc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBvZmZzZXQgKHRva2VuLCBzZXBhcmF0b3IpIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy51dGNPZmZzZXQoKTtcbiAgICAgICAgdmFyIHNpZ24gPSAnKyc7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xuICAgICAgICAgICAgc2lnbiA9ICctJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2lnbiArIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgKyBzZXBhcmF0b3IgKyB6ZXJvRmlsbCh+fihvZmZzZXQpICUgNjAsIDIpO1xuICAgIH0pO1xufVxuXG5vZmZzZXQoJ1onLCAnOicpO1xub2Zmc2V0KCdaWicsICcnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdaJywgIG1hdGNoU2hvcnRPZmZzZXQpO1xuYWRkUmVnZXhUb2tlbignWlonLCBtYXRjaFNob3J0T2Zmc2V0KTtcbmFkZFBhcnNlVG9rZW4oWydaJywgJ1paJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fdXNlVVRDID0gdHJ1ZTtcbiAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuLy8gdGltZXpvbmUgY2h1bmtlclxuLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXG4vLyAnLTE1MzAnICA+IFsnLTE1JywgJzMwJ11cbnZhciBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcblxuZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaGVyLCBzdHJpbmcpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IChzdHJpbmcgfHwgJycpLm1hdGNoKG1hdGNoZXIpO1xuXG4gICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNodW5rICAgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0gfHwgW107XG4gICAgdmFyIHBhcnRzICAgPSAoY2h1bmsgKyAnJykubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsIDAsIDBdO1xuICAgIHZhciBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHRvSW50KHBhcnRzWzJdKTtcblxuICAgIHJldHVybiBtaW51dGVzID09PSAwID9cbiAgICAgIDAgOlxuICAgICAgcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcbn1cblxuLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIG1vZGVsKSB7XG4gICAgdmFyIHJlcywgZGlmZjtcbiAgICBpZiAobW9kZWwuX2lzVVRDKSB7XG4gICAgICAgIHJlcyA9IG1vZGVsLmNsb25lKCk7XG4gICAgICAgIGRpZmYgPSAoaXNNb21lbnQoaW5wdXQpIHx8IGlzRGF0ZShpbnB1dCkgPyBpbnB1dC52YWx1ZU9mKCkgOiBjcmVhdGVMb2NhbChpbnB1dCkudmFsdWVPZigpKSAtIHJlcy52YWx1ZU9mKCk7XG4gICAgICAgIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgICAgICAgcmVzLl9kLnNldFRpbWUocmVzLl9kLnZhbHVlT2YoKSArIGRpZmYpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0KS5sb2NhbCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZU9mZnNldCAobSkge1xuICAgIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgcmV0dXJuIC1NYXRoLnJvdW5kKG0uX2QuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xufVxuXG4vLyBIT09LU1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIGEgbW9tZW50IGlzIG11dGF0ZWQuXG4vLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbmhvb2tzLnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBNT01FTlRTXG5cbi8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cbi8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcbi8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbi8vXG4vLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcbi8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxuLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXG4vLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldE9mZnNldCAoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fb2Zmc2V0IHx8IDAsXG4gICAgICAgIGxvY2FsQWRqdXN0O1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaW5wdXQgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbiAgICAgICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGlucHV0KSA8IDE2KSB7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX2lzVVRDID0gdHJ1ZTtcbiAgICAgICAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGxvY2FsQWRqdXN0LCAnbScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgIT09IGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGNyZWF0ZUR1cmF0aW9uKGlucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/IG9mZnNldCA6IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0Wm9uZSAoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaW5wdXQgPSAtaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnV0Y09mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC10aGlzLnV0Y09mZnNldCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvVVRDIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbCAoa2VlcExvY2FsVGltZSkge1xuICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQgKCkge1xuICAgIGlmICh0aGlzLl90em0gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnV0Y09mZnNldCh0aGlzLl90em0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2kgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0Wm9uZSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hPZmZzZXQsIHRoaXMuX2kpO1xuICAgICAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodFpvbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNBbGlnbmVkSG91ck9mZnNldCAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5wdXQgPSBpbnB1dCA/IGNyZWF0ZUxvY2FsKGlucHV0KS51dGNPZmZzZXQoKSA6IDA7XG5cbiAgICByZXR1cm4gKHRoaXMudXRjT2Zmc2V0KCkgLSBpbnB1dCkgJSA2MCA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDApLnV0Y09mZnNldCgpIHx8XG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KCkgPiB0aGlzLmNsb25lKCkubW9udGgoNSkudXRjT2Zmc2V0KClcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkICgpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX2lzRFNUU2hpZnRlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgICB9XG5cbiAgICB2YXIgYyA9IHt9O1xuXG4gICAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcblxuICAgIGlmIChjLl9hKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlVVRDKGMuX2EpIDogY3JlYXRlTG9jYWwoYy5fYSk7XG4gICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICBjb21wYXJlQXJyYXlzKGMuX2EsIG90aGVyLnRvQXJyYXkoKSkgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXRjT2Zmc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVdGMgKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgRHVyYXRpb24sIGlzRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi91dGlscy9pcy1udW1iZXInO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5pbXBvcnQgYWJzUm91bmQgZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcbmltcG9ydCBoYXNPd25Qcm9wIGZyb20gJy4uL3V0aWxzL2hhcy1vd24tcHJvcCc7XG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSU5VVEUsIFNFQ09ORCwgTUlMTElTRUNPTkQgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcblxuLy8gQVNQLk5FVCBqc29uIGRhdGUgZm9ybWF0IHJlZ2V4XG52YXIgYXNwTmV0UmVnZXggPSAvXihcXC0pPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xuXG4vLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxudmFyIGlzb1JlZ2V4ID0gL14oLSk/UCg/OigtP1swLTksLl0qKVkpPyg/OigtP1swLTksLl0qKU0pPyg/OigtP1swLTksLl0qKVcpPyg/OigtP1swLTksLl0qKUQpPyg/OlQoPzooLT9bMC05LC5dKilIKT8oPzooLT9bMC05LC5dKilNKT8oPzooLT9bMC05LC5dKilTKT8pPyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24gKGlucHV0LCBrZXkpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBpbnB1dCxcbiAgICAgICAgLy8gbWF0Y2hpbmcgYWdhaW5zdCByZWdleHAgaXMgZXhwZW5zaXZlLCBkbyBpdCBvbiBkZW1hbmRcbiAgICAgICAgbWF0Y2ggPSBudWxsLFxuICAgICAgICBzaWduLFxuICAgICAgICByZXQsXG4gICAgICAgIGRpZmZSZXM7XG5cbiAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICBtcyA6IGlucHV0Ll9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICBkICA6IGlucHV0Ll9kYXlzLFxuICAgICAgICAgICAgTSAgOiBpbnB1dC5fbW9udGhzXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgZHVyYXRpb25ba2V5XSA9IGlucHV0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmRzID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgIHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IDE7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgeSAgOiAwLFxuICAgICAgICAgICAgZCAgOiB0b0ludChtYXRjaFtEQVRFXSkgICAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgaCAgOiB0b0ludChtYXRjaFtIT1VSXSkgICAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgbSAgOiB0b0ludChtYXRjaFtNSU5VVEVdKSAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgcyAgOiB0b0ludChtYXRjaFtTRUNPTkRdKSAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgbXMgOiB0b0ludChhYnNSb3VuZChtYXRjaFtNSUxMSVNFQ09ORF0gKiAxMDAwKSkgKiBzaWduIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoISEobWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICB5IDogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICAgICAgTSA6IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcbiAgICAgICAgICAgIHcgOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgICAgICBkIDogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICAgICAgaCA6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcbiAgICAgICAgICAgIG0gOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgICAgICBzIDogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7Ly8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnb2JqZWN0JyAmJiAoJ2Zyb20nIGluIGR1cmF0aW9uIHx8ICd0bycgaW4gZHVyYXRpb24pKSB7XG4gICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShjcmVhdGVMb2NhbChkdXJhdGlvbi5mcm9tKSwgY3JlYXRlTG9jYWwoZHVyYXRpb24udG8pKTtcblxuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICBkdXJhdGlvbi5tcyA9IGRpZmZSZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICBkdXJhdGlvbi5NID0gZGlmZlJlcy5tb250aHM7XG4gICAgfVxuXG4gICAgcmV0ID0gbmV3IER1cmF0aW9uKGR1cmF0aW9uKTtcblxuICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSAmJiBoYXNPd25Qcm9wKGlucHV0LCAnX2xvY2FsZScpKSB7XG4gICAgICAgIHJldC5fbG9jYWxlID0gaW5wdXQuX2xvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxuZnVuY3Rpb24gcGFyc2VJc28gKGlucCwgc2lnbikge1xuICAgIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gICAgLy8gY29udmVydHMgZmxvYXRzIHRvIGludHMuXG4gICAgLy8gaW5wIG1heSBiZSB1bmRlZmluZWQsIHNvIGNhcmVmdWwgY2FsbGluZyByZXBsYWNlIG9uIGl0LlxuICAgIHZhciByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xuICAgIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcbiAgICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG59XG5cbmZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzID0ge21pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwfTtcblxuICAgIHJlcy5tb250aHMgPSBvdGhlci5tb250aCgpIC0gYmFzZS5tb250aCgpICtcbiAgICAgICAgKG90aGVyLnllYXIoKSAtIGJhc2UueWVhcigpKSAqIDEyO1xuICAgIGlmIChiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykuaXNBZnRlcihvdGhlcikpIHtcbiAgICAgICAgLS1yZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArKGJhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKSk7XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgIHZhciByZXM7XG4gICAgaWYgKCEoYmFzZS5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4ge21pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwfTtcbiAgICB9XG5cbiAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XG4gICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xuICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuIiwiaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuL2dldC1zZXQnO1xuaW1wb3J0IHsgc2V0TW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XG5pbXBvcnQgeyBkZXByZWNhdGVTaW1wbGUgfSBmcm9tICcuLi91dGlscy9kZXByZWNhdGUnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5pbXBvcnQgYWJzUm91bmQgZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcblxuXG4vLyBUT0RPOiByZW1vdmUgJ25hbWUnIGFyZyBhZnRlciBkZXByZWNhdGlvbiBpcyByZW1vdmVkXG5mdW5jdGlvbiBjcmVhdGVBZGRlcihkaXJlY3Rpb24sIG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgcGVyaW9kKSB7XG4gICAgICAgIHZhciBkdXIsIHRtcDtcbiAgICAgICAgLy9pbnZlcnQgdGhlIGFyZ3VtZW50cywgYnV0IGNvbXBsYWluIGFib3V0IGl0XG4gICAgICAgIGlmIChwZXJpb2QgIT09IG51bGwgJiYgIWlzTmFOKCtwZXJpb2QpKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUobmFtZSwgJ21vbWVudCgpLicgKyBuYW1lICArICcocGVyaW9kLCBudW1iZXIpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgbW9tZW50KCkuJyArIG5hbWUgKyAnKG51bWJlciwgcGVyaW9kKS4gJyArXG4gICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvYWRkLWludmVydGVkLXBhcmFtLyBmb3IgbW9yZSBpbmZvLicpO1xuICAgICAgICAgICAgdG1wID0gdmFsOyB2YWwgPSBwZXJpb2Q7IHBlcmlvZCA9IHRtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gK3ZhbCA6IHZhbDtcbiAgICAgICAgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuICAgICAgICBhZGRTdWJ0cmFjdCh0aGlzLCBkdXIsIGRpcmVjdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0cmFjdCAobW9tLCBkdXJhdGlvbiwgaXNBZGRpbmcsIHVwZGF0ZU9mZnNldCkge1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzLFxuICAgICAgICBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpLFxuICAgICAgICBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcblxuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgaWYgKG1pbGxpc2Vjb25kcykge1xuICAgICAgICBtb20uX2Quc2V0VGltZShtb20uX2QudmFsdWVPZigpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAoZGF5cykge1xuICAgICAgICBzZXQobW9tLCAnRGF0ZScsIGdldChtb20sICdEYXRlJykgKyBkYXlzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAobW9udGhzKSB7XG4gICAgICAgIHNldE1vbnRoKG1vbSwgZ2V0KG1vbSwgJ01vbnRoJykgKyBtb250aHMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KG1vbSwgZGF5cyB8fCBtb250aHMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciBhZGQgICAgICA9IGNyZWF0ZUFkZGVyKDEsICdhZGQnKTtcbmV4cG9ydCB2YXIgc3VidHJhY3QgPSBjcmVhdGVBZGRlcigtMSwgJ3N1YnRyYWN0Jyk7XG5cbiIsImltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi91dGlscy9pcy1mdW5jdGlvbic7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcbiAgICB2YXIgZGlmZiA9IG15TW9tZW50LmRpZmYobm93LCAnZGF5cycsIHRydWUpO1xuICAgIHJldHVybiBkaWZmIDwgLTYgPyAnc2FtZUVsc2UnIDpcbiAgICAgICAgICAgIGRpZmYgPCAtMSA/ICdsYXN0V2VlaycgOlxuICAgICAgICAgICAgZGlmZiA8IDAgPyAnbGFzdERheScgOlxuICAgICAgICAgICAgZGlmZiA8IDEgPyAnc2FtZURheScgOlxuICAgICAgICAgICAgZGlmZiA8IDIgPyAnbmV4dERheScgOlxuICAgICAgICAgICAgZGlmZiA8IDcgPyAnbmV4dFdlZWsnIDogJ3NhbWVFbHNlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGVuZGFyICh0aW1lLCBmb3JtYXRzKSB7XG4gICAgLy8gV2Ugd2FudCB0byBjb21wYXJlIHRoZSBzdGFydCBvZiB0b2RheSwgdnMgdGhpcy5cbiAgICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSBsb2NhbC91dGMvb2Zmc2V0IG9yIG5vdC5cbiAgICB2YXIgbm93ID0gdGltZSB8fCBjcmVhdGVMb2NhbCgpLFxuICAgICAgICBzb2QgPSBjbG9uZVdpdGhPZmZzZXQobm93LCB0aGlzKS5zdGFydE9mKCdkYXknKSxcbiAgICAgICAgZm9ybWF0ID0gaG9va3MuY2FsZW5kYXJGb3JtYXQodGhpcywgc29kKSB8fCAnc2FtZUVsc2UnO1xuXG4gICAgdmFyIG91dHB1dCA9IGZvcm1hdHMgJiYgKGlzRnVuY3Rpb24oZm9ybWF0c1tmb3JtYXRdKSA/IGZvcm1hdHNbZm9ybWF0XS5jYWxsKHRoaXMsIG5vdykgOiBmb3JtYXRzW2Zvcm1hdF0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KG91dHB1dCB8fCB0aGlzLmxvY2FsZURhdGEoKS5jYWxlbmRhcihmb3JtYXQsIHRoaXMsIGNyZWF0ZUxvY2FsKG5vdykpKTtcbn1cbiIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKCkge1xuICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xufVxuIiwiaW1wb3J0IHsgaXNNb21lbnQgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnLi4vdXRpbHMvaXMtdW5kZWZpbmVkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWZ0ZXIgKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyghaXNVbmRlZmluZWQodW5pdHMpID8gdW5pdHMgOiAnbWlsbGlzZWNvbmQnKTtcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID4gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5wdXQudmFsdWVPZigpIDwgdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JlZm9yZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KTtcbiAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKCFpc1VuZGVmaW5lZCh1bml0cykgPyB1bml0cyA6ICdtaWxsaXNlY29uZCcpO1xuICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPCBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKCkgPCBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4gKGZyb20sIHRvLCB1bml0cywgaW5jbHVzaXZpdHkpIHtcbiAgICBpbmNsdXNpdml0eSA9IGluY2x1c2l2aXR5IHx8ICcoKSc7XG4gICAgcmV0dXJuIChpbmNsdXNpdml0eVswXSA9PT0gJygnID8gdGhpcy5pc0FmdGVyKGZyb20sIHVuaXRzKSA6ICF0aGlzLmlzQmVmb3JlKGZyb20sIHVuaXRzKSkgJiZcbiAgICAgICAgKGluY2x1c2l2aXR5WzFdID09PSAnKScgPyB0aGlzLmlzQmVmb3JlKHRvLCB1bml0cykgOiAhdGhpcy5pc0FmdGVyKHRvLCB1bml0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lIChpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpLFxuICAgICAgICBpbnB1dE1zO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMgfHwgJ21pbGxpc2Vjb25kJyk7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA9PT0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRNcyA9IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JBZnRlciAoaW5wdXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0FmdGVyKGlucHV0LHVuaXRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlIChpbnB1dCwgdW5pdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQmVmb3JlKGlucHV0LHVuaXRzKTtcbn1cbiIsImltcG9ydCBhYnNGbG9vciBmcm9tICcuLi91dGlscy9hYnMtZmxvb3InO1xuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmIChpbnB1dCwgdW5pdHMsIGFzRmxvYXQpIHtcbiAgICB2YXIgdGhhdCxcbiAgICAgICAgem9uZURlbHRhLFxuICAgICAgICBkZWx0YSwgb3V0cHV0O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHRoYXQgPSBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIHRoaXMpO1xuXG4gICAgaWYgKCF0aGF0LmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHpvbmVEZWx0YSA9ICh0aGF0LnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSkgKiA2ZTQ7XG5cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgIGlmICh1bml0cyA9PT0gJ3llYXInIHx8IHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAncXVhcnRlcicpIHtcbiAgICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpO1xuICAgICAgICBpZiAodW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0IC8gMztcbiAgICAgICAgfSBlbHNlIGlmICh1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgLyAxMjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbHRhID0gdGhpcyAtIHRoYXQ7XG4gICAgICAgIG91dHB1dCA9IHVuaXRzID09PSAnc2Vjb25kJyA/IGRlbHRhIC8gMWUzIDogLy8gMTAwMFxuICAgICAgICAgICAgdW5pdHMgPT09ICdtaW51dGUnID8gZGVsdGEgLyA2ZTQgOiAvLyAxMDAwICogNjBcbiAgICAgICAgICAgIHVuaXRzID09PSAnaG91cicgPyBkZWx0YSAvIDM2ZTUgOiAvLyAxMDAwICogNjAgKiA2MFxuICAgICAgICAgICAgdW5pdHMgPT09ICdkYXknID8gKGRlbHRhIC0gem9uZURlbHRhKSAvIDg2NGU1IDogLy8gMTAwMCAqIDYwICogNjAgKiAyNCwgbmVnYXRlIGRzdFxuICAgICAgICAgICAgdW5pdHMgPT09ICd3ZWVrJyA/IChkZWx0YSAtIHpvbmVEZWx0YSkgLyA2MDQ4ZTUgOiAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxuICAgICAgICAgICAgZGVsdGE7XG4gICAgfVxuICAgIHJldHVybiBhc0Zsb2F0ID8gb3V0cHV0IDogYWJzRmxvb3Iob3V0cHV0KTtcbn1cblxuZnVuY3Rpb24gbW9udGhEaWZmIChhLCBiKSB7XG4gICAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgICB2YXIgd2hvbGVNb250aERpZmYgPSAoKGIueWVhcigpIC0gYS55ZWFyKCkpICogMTIpICsgKGIubW9udGgoKSAtIGEubW9udGgoKSksXG4gICAgICAgIC8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXG4gICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcbiAgICAgICAgYW5jaG9yMiwgYWRqdXN0O1xuXG4gICAgaWYgKGIgLSBhbmNob3IgPCAwKSB7XG4gICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRocycpO1xuICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yIC0gYW5jaG9yMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAxLCAnbW9udGhzJyk7XG4gICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IyIC0gYW5jaG9yKTtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGZvciBuZWdhdGl2ZSB6ZXJvLCByZXR1cm4gemVybyBpZiBuZWdhdGl2ZSB6ZXJvXG4gICAgcmV0dXJuIC0od2hvbGVNb250aERpZmYgKyBhZGp1c3QpIHx8IDA7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRNb21lbnQgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvaXMtZnVuY3Rpb24nO1xuXG5ob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcbmhvb2tzLmRlZmF1bHRGb3JtYXRVdGMgPSAnWVlZWS1NTS1ERFRISDptbTpzc1taXSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sb2NhbGUoJ2VuJykuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9JU09TdHJpbmcgKCkge1xuICAgIHZhciBtID0gdGhpcy5jbG9uZSgpLnV0YygpO1xuICAgIGlmICgwIDwgbS55ZWFyKCkgJiYgbS55ZWFyKCkgPD0gOTk5OSkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykpIHtcbiAgICAgICAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhIGh1bWFuIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9tZW50IHRoYXQgY2FuXG4gKiBhbHNvIGJlIGV2YWx1YXRlZCB0byBnZXQgYSBuZXcgbW9tZW50IHdoaWNoIGlzIHRoZSBzYW1lXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0L2RvY3MvYXBpL3V0aWwuaHRtbCN1dGlsX2N1c3RvbV9pbnNwZWN0X2Z1bmN0aW9uX29uX29iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuICdtb21lbnQuaW52YWxpZCgvKiAnICsgdGhpcy5faSArICcgKi8pJztcbiAgICB9XG4gICAgdmFyIGZ1bmMgPSAnbW9tZW50JztcbiAgICB2YXIgem9uZSA9ICcnO1xuICAgIGlmICghdGhpcy5pc0xvY2FsKCkpIHtcbiAgICAgICAgZnVuYyA9IHRoaXMudXRjT2Zmc2V0KCkgPT09IDAgPyAnbW9tZW50LnV0YycgOiAnbW9tZW50LnBhcnNlWm9uZSc7XG4gICAgICAgIHpvbmUgPSAnWic7XG4gICAgfVxuICAgIHZhciBwcmVmaXggPSAnWycgKyBmdW5jICsgJyhcIl0nO1xuICAgIHZhciB5ZWFyID0gKDAgPCB0aGlzLnllYXIoKSAmJiB0aGlzLnllYXIoKSA8PSA5OTk5KSA/ICdZWVlZJyA6ICdZWVlZWVknO1xuICAgIHZhciBkYXRldGltZSA9ICctTU0tRERbVF1ISDptbTpzcy5TU1MnO1xuICAgIHZhciBzdWZmaXggPSB6b25lICsgJ1tcIildJztcblxuICAgIHJldHVybiB0aGlzLmZvcm1hdChwcmVmaXggKyB5ZWFyICsgZGF0ZXRpbWUgKyBzdWZmaXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0IChpbnB1dFN0cmluZykge1xuICAgIGlmICghaW5wdXRTdHJpbmcpIHtcbiAgICAgICAgaW5wdXRTdHJpbmcgPSB0aGlzLmlzVXRjKCkgPyBob29rcy5kZWZhdWx0Rm9ybWF0VXRjIDogaG9va3MuZGVmYXVsdEZvcm1hdDtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IGZvcm1hdE1vbWVudCh0aGlzLCBpbnB1dFN0cmluZyk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY3JlYXRlJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGlzTW9tZW50IH0gZnJvbSAnLi4vbW9tZW50L2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb20gKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8XG4gICAgICAgICAgICAgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oe3RvOiB0aGlzLCBmcm9tOiB0aW1lfSkubG9jYWxlKHRoaXMubG9jYWxlKCkpLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTm93ICh3aXRob3V0U3VmZml4KSB7XG4gICAgcmV0dXJuIHRoaXMuZnJvbShjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY3JlYXRlJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGlzTW9tZW50IH0gZnJvbSAnLi4vbW9tZW50L2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvICh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fFxuICAgICAgICAgICAgIGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHtmcm9tOiB0aGlzLCB0bzogdGltZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSgpKS5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Ob3cgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICByZXR1cm4gdGhpcy50byhjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbn1cbiIsImltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5cbi8vIElmIHBhc3NlZCBhIGxvY2FsZSBrZXksIGl0IHdpbGwgc2V0IHRoZSBsb2NhbGUgZm9yIHRoaXNcbi8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIHZhcmlhYmxlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGUgKGtleSkge1xuICAgIHZhciBuZXdMb2NhbGVEYXRhO1xuXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUuX2FiYnI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TG9jYWxlRGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICBpZiAobmV3TG9jYWxlRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciBsYW5nID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5sYW5nKCkgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgdXNlIG1vbWVudCgpLmxvY2FsZURhdGEoKSB0byBnZXQgdGhlIGxhbmd1YWdlIGNvbmZpZ3VyYXRpb24uIFVzZSBtb21lbnQoKS5sb2NhbGUoKSB0byBjaGFuZ2UgbGFuZ3VhZ2VzLicsXG4gICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZiAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAvLyB0aGUgZm9sbG93aW5nIHN3aXRjaCBpbnRlbnRpb25hbGx5IG9taXRzIGJyZWFrIGtleXdvcmRzXG4gICAgLy8gdG8gdXRpbGl6ZSBmYWxsaW5nIHRocm91Z2ggdGhlIGNhc2VzLlxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICB0aGlzLm1vbnRoKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgdGhpcy5kYXRlKDEpO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgdGhpcy5ob3VycygwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICB0aGlzLnNlY29uZHMoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICB0aGlzLm1pbGxpc2Vjb25kcygwKTtcbiAgICB9XG5cbiAgICAvLyB3ZWVrcyBhcmUgYSBzcGVjaWFsIGNhc2VcbiAgICBpZiAodW5pdHMgPT09ICd3ZWVrJykge1xuICAgICAgICB0aGlzLndlZWtkYXkoMCk7XG4gICAgfVxuICAgIGlmICh1bml0cyA9PT0gJ2lzb1dlZWsnKSB7XG4gICAgICAgIHRoaXMuaXNvV2Vla2RheSgxKTtcbiAgICB9XG5cbiAgICAvLyBxdWFydGVycyBhcmUgYWxzbyBzcGVjaWFsXG4gICAgaWYgKHVuaXRzID09PSAncXVhcnRlcicpIHtcbiAgICAgICAgdGhpcy5tb250aChNYXRoLmZsb29yKHRoaXMubW9udGgoKSAvIDMpICogMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZiAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyAnZGF0ZScgaXMgYW4gYWxpYXMgZm9yICdkYXknLCBzbyBpdCBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyBzdWNoLlxuICAgIGlmICh1bml0cyA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIHVuaXRzID0gJ2RheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhcnRPZih1bml0cykuYWRkKDEsICh1bml0cyA9PT0gJ2lzb1dlZWsnID8gJ3dlZWsnIDogdW5pdHMpKS5zdWJ0cmFjdCgxLCAnbXMnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB2YWx1ZU9mICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZC52YWx1ZU9mKCkgLSAoKHRoaXMuX29mZnNldCB8fCAwKSAqIDYwMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXggKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpIC8gMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUgKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5ICgpIHtcbiAgICB2YXIgbSA9IHRoaXM7XG4gICAgcmV0dXJuIFttLnllYXIoKSwgbS5tb250aCgpLCBtLmRhdGUoKSwgbS5ob3VyKCksIG0ubWludXRlKCksIG0uc2Vjb25kKCksIG0ubWlsbGlzZWNvbmQoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdCAoKSB7XG4gICAgdmFyIG0gPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHllYXJzOiBtLnllYXIoKSxcbiAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG0uZGF0ZSgpLFxuICAgICAgICBob3VyczogbS5ob3VycygpLFxuICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgc2Vjb25kczogbS5zZWNvbmRzKCksXG4gICAgICAgIG1pbGxpc2Vjb25kczogbS5taWxsaXNlY29uZHMoKVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0pTT04gKCkge1xuICAgIC8vIG5ldyBEYXRlKE5hTikudG9KU09OKCkgPT09IG51bGxcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xufVxuIiwiaW1wb3J0IHsgaXNWYWxpZCBhcyBfaXNWYWxpZCB9IGZyb20gJy4uL2NyZWF0ZS92YWxpZCc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4uL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgZ2V0UGFyc2luZ0ZsYWdzIGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQgKCkge1xuICAgIHJldHVybiBfaXNWYWxpZCh0aGlzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNpbmdGbGFncyAoKSB7XG4gICAgcmV0dXJuIGV4dGVuZCh7fSwgZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRBdCAoKSB7XG4gICAgcmV0dXJuIGdldFBhcnNpbmdGbGFncyh0aGlzKS5vdmVyZmxvdztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQ6IHRoaXMuX2ksXG4gICAgICAgIGZvcm1hdDogdGhpcy5fZixcbiAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgIGlzVVRDOiB0aGlzLl9pc1VUQyxcbiAgICAgICAgc3RyaWN0OiB0aGlzLl9zdHJpY3RcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDF0bzQsIG1hdGNoMXRvNiwgbWF0Y2gyLCBtYXRjaDQsIG1hdGNoNiwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IHdlZWtPZlllYXIsIHdlZWtzSW5ZZWFyLCBkYXlPZlllYXJGcm9tV2Vla3MgfSBmcm9tICcuL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ2dnJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy53ZWVrWWVhcigpICUgMTAwO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnR0cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKCkgJSAxMDA7XG59KTtcblxuZnVuY3Rpb24gYWRkV2Vla1llYXJGb3JtYXRUb2tlbiAodG9rZW4sIGdldHRlcikge1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoXSwgMCwgZ2V0dGVyKTtcbn1cblxuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsICAgICAnd2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2dnJywgICAgJ3dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHJywgICdpc29XZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCAnaXNvV2Vla1llYXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3dlZWtZZWFyJywgJ2dnJyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWtZZWFyJywgJ0dHJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnd2Vla1llYXInLCAxKTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla1llYXInLCAxKTtcblxuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0cnLCAgICAgIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ2cnLCAgICAgIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHJywgICAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2dnJywgICAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCAgIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ2dnZ2cnLCAgIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbmFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydnZ2dnJywgJ2dnZ2dnJywgJ0dHR0cnLCAnR0dHR0cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMildID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZ2cnLCAnR0cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIgKGlucHV0KSB7XG4gICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwodGhpcyxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy53ZWVrKCksXG4gICAgICAgICAgICB0aGlzLndlZWtkYXkoKSxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRveSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRJU09XZWVrWWVhciAoaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbCh0aGlzLFxuICAgICAgICAgICAgaW5wdXQsIHRoaXMuaXNvV2VlaygpLCB0aGlzLmlzb1dlZWtkYXkoKSwgMSwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhciAoKSB7XG4gICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCAxLCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtzSW5ZZWFyICgpIHtcbiAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXJIZWxwZXIoaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtzVGFyZ2V0O1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKHRoaXMsIGRvdywgZG95KS55ZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcbiAgICAgICAgaWYgKHdlZWsgPiB3ZWVrc1RhcmdldCkge1xuICAgICAgICAgICAgd2VlayA9IHdlZWtzVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRXZWVrQWxsLmNhbGwodGhpcywgaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFdlZWtBbGwod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcbiAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG5cbiAgICB0aGlzLnllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICB0aGlzLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSk7XG4gICAgdGhpcy5kYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMSB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNT05USCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdRJywgMCwgJ1FvJywgJ3F1YXJ0ZXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3F1YXJ0ZXInLCAnUScpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3F1YXJ0ZXInLCA3KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdRJywgbWF0Y2gxKTtcbmFkZFBhcnNlVG9rZW4oJ1EnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcbn0pO1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRRdWFydGVyIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gTWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkgKyAxKSAvIDMpIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyB0aGlzLm1vbnRoKCkgJSAzKTtcbn1cbiIsImltcG9ydCB7IG1ha2VHZXRTZXQgfSBmcm9tICcuLi9tb21lbnQvZ2V0LXNldCc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMl0sICdEbycsICdkYXRlJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcblxuLy8gUFJJT1JPSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2RhdGUnLCA5KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdEJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gaXNTdHJpY3QgPyBsb2NhbGUuX29yZGluYWxQYXJzZSA6IGxvY2FsZS5fb3JkaW5hbFBhcnNlTGVuaWVudDtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbmFkZFBhcnNlVG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSwgMTApO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IHZhciBnZXRTZXREYXlPZk1vbnRoID0gbWFrZUdldFNldCgnRGF0ZScsIHRydWUpO1xuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gzLCBtYXRjaDF0bzMgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgdG9JbnQgZnJvbSAnLi4vdXRpbHMvdG8taW50JztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignREREJywgWydEREREJywgM10sICdERERvJywgJ2RheU9mWWVhcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF5T2ZZZWFyJywgJ0RERCcpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdkYXlPZlllYXInLCA0KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdEREQnLCAgbWF0Y2gxdG8zKTtcbmFkZFJlZ2V4VG9rZW4oJ0REREQnLCBtYXRjaDMpO1xuYWRkUGFyc2VUb2tlbihbJ0RERCcsICdEREREJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0RGF5T2ZZZWFyIChpbnB1dCkge1xuICAgIHZhciBkYXlPZlllYXIgPSBNYXRoLnJvdW5kKCh0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykgLSB0aGlzLmNsb25lKCkuc3RhcnRPZigneWVhcicpKSAvIDg2NGU1KSArIDE7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBkYXlPZlllYXIgOiB0aGlzLmFkZCgoaW5wdXQgLSBkYXlPZlllYXIpLCAnZCcpO1xufVxuIiwiaW1wb3J0IHsgbWFrZUdldFNldCB9IGZyb20gJy4uL21vbWVudC9nZXQtc2V0JztcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1JTlVURSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignbScsIFsnbW0nLCAyXSwgMCwgJ21pbnV0ZScpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnbWludXRlJywgJ20nKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignbScsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRQYXJzZVRva2VuKFsnbScsICdtbSddLCBNSU5VVEUpO1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCB2YXIgZ2V0U2V0TWludXRlID0gbWFrZUdldFNldCgnTWludXRlcycsIGZhbHNlKTtcbiIsImltcG9ydCB7IG1ha2VHZXRTZXQgfSBmcm9tICcuLi9tb21lbnQvZ2V0LXNldCc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMl0sIDAsICdzZWNvbmQnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3NlY29uZCcsICdzJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnc2Vjb25kJywgMTUpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ3MnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ3NzJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgdmFyIGdldFNldFNlY29uZCA9IG1ha2VHZXRTZXQoJ1NlY29uZHMnLCBmYWxzZSk7XG4iLCJpbXBvcnQgeyBtYWtlR2V0U2V0IH0gZnJvbSAnLi4vbW9tZW50L2dldC1zZXQnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxLCBtYXRjaDIsIG1hdGNoMywgbWF0Y2gxdG8zLCBtYXRjaFVuc2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1JTExJU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwMCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydTUycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTUycsIDNdLCAwLCAnbWlsbGlzZWNvbmQnKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTUycsIDRdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTJywgNV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTUycsIDZdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTUycsIDddLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTJywgOF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTUycsIDldLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDA7XG59KTtcblxuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnbWlsbGlzZWNvbmQnLCAnbXMnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdtaWxsaXNlY29uZCcsIDE2KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdTJywgICAgbWF0Y2gxdG8zLCBtYXRjaDEpO1xuYWRkUmVnZXhUb2tlbignU1MnLCAgIG1hdGNoMXRvMywgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1NTUycsICBtYXRjaDF0bzMsIG1hdGNoMyk7XG5cbnZhciB0b2tlbjtcbmZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRSZWdleFRva2VuKHRva2VuLCBtYXRjaFVuc2lnbmVkKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludCgoJzAuJyArIGlucHV0KSAqIDEwMDApO1xufVxuXG5mb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgcGFyc2VNcyk7XG59XG4vLyBNT01FTlRTXG5cbmV4cG9ydCB2YXIgZ2V0U2V0TWlsbGlzZWNvbmQgPSBtYWtlR2V0U2V0KCdNaWxsaXNlY29uZHMnLCBmYWxzZSk7XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCd6JywgIDAsIDAsICd6b25lQWJicicpO1xuYWRkRm9ybWF0VG9rZW4oJ3p6JywgMCwgMCwgJ3pvbmVOYW1lJyk7XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVBYmJyICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnVVRDJyA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZU5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbn1cbiIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG52YXIgcHJvdG8gPSBNb21lbnQucHJvdG90eXBlO1xuXG5pbXBvcnQgeyBhZGQsIHN1YnRyYWN0IH0gZnJvbSAnLi9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgY2FsZW5kYXIsIGdldENhbGVuZGFyRm9ybWF0IH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gJy4vY2xvbmUnO1xuaW1wb3J0IHsgaXNCZWZvcmUsIGlzQmV0d2VlbiwgaXNTYW1lLCBpc0FmdGVyLCBpc1NhbWVPckFmdGVyLCBpc1NhbWVPckJlZm9yZSB9IGZyb20gJy4vY29tcGFyZSc7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmJztcbmltcG9ydCB7IGZvcm1hdCwgdG9TdHJpbmcsIHRvSVNPU3RyaW5nLCBpbnNwZWN0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbU5vdyB9IGZyb20gJy4vZnJvbSc7XG5pbXBvcnQgeyB0bywgdG9Ob3cgfSBmcm9tICcuL3RvJztcbmltcG9ydCB7IHN0cmluZ0dldCwgc3RyaW5nU2V0IH0gZnJvbSAnLi9nZXQtc2V0JztcbmltcG9ydCB7IGxvY2FsZSwgbG9jYWxlRGF0YSwgbGFuZyB9IGZyb20gJy4vbG9jYWxlJztcbmltcG9ydCB7IHByb3RvdHlwZU1pbiwgcHJvdG90eXBlTWF4IH0gZnJvbSAnLi9taW4tbWF4JztcbmltcG9ydCB7IHN0YXJ0T2YsIGVuZE9mIH0gZnJvbSAnLi9zdGFydC1lbmQtb2YnO1xuaW1wb3J0IHsgdmFsdWVPZiwgdG9EYXRlLCB0b0FycmF5LCB0b09iamVjdCwgdG9KU09OLCB1bml4IH0gZnJvbSAnLi90by10eXBlJztcbmltcG9ydCB7IGlzVmFsaWQsIHBhcnNpbmdGbGFncywgaW52YWxpZEF0IH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBjcmVhdGlvbkRhdGEgfSBmcm9tICcuL2NyZWF0aW9uLWRhdGEnO1xuXG5wcm90by5hZGQgICAgICAgICAgICAgICA9IGFkZDtcbnByb3RvLmNhbGVuZGFyICAgICAgICAgID0gY2FsZW5kYXI7XG5wcm90by5jbG9uZSAgICAgICAgICAgICA9IGNsb25lO1xucHJvdG8uZGlmZiAgICAgICAgICAgICAgPSBkaWZmO1xucHJvdG8uZW5kT2YgICAgICAgICAgICAgPSBlbmRPZjtcbnByb3RvLmZvcm1hdCAgICAgICAgICAgID0gZm9ybWF0O1xucHJvdG8uZnJvbSAgICAgICAgICAgICAgPSBmcm9tO1xucHJvdG8uZnJvbU5vdyAgICAgICAgICAgPSBmcm9tTm93O1xucHJvdG8udG8gICAgICAgICAgICAgICAgPSB0bztcbnByb3RvLnRvTm93ICAgICAgICAgICAgID0gdG9Ob3c7XG5wcm90by5nZXQgICAgICAgICAgICAgICA9IHN0cmluZ0dldDtcbnByb3RvLmludmFsaWRBdCAgICAgICAgID0gaW52YWxpZEF0O1xucHJvdG8uaXNBZnRlciAgICAgICAgICAgPSBpc0FmdGVyO1xucHJvdG8uaXNCZWZvcmUgICAgICAgICAgPSBpc0JlZm9yZTtcbnByb3RvLmlzQmV0d2VlbiAgICAgICAgID0gaXNCZXR3ZWVuO1xucHJvdG8uaXNTYW1lICAgICAgICAgICAgPSBpc1NhbWU7XG5wcm90by5pc1NhbWVPckFmdGVyICAgICA9IGlzU2FtZU9yQWZ0ZXI7XG5wcm90by5pc1NhbWVPckJlZm9yZSAgICA9IGlzU2FtZU9yQmVmb3JlO1xucHJvdG8uaXNWYWxpZCAgICAgICAgICAgPSBpc1ZhbGlkO1xucHJvdG8ubGFuZyAgICAgICAgICAgICAgPSBsYW5nO1xucHJvdG8ubG9jYWxlICAgICAgICAgICAgPSBsb2NhbGU7XG5wcm90by5sb2NhbGVEYXRhICAgICAgICA9IGxvY2FsZURhdGE7XG5wcm90by5tYXggICAgICAgICAgICAgICA9IHByb3RvdHlwZU1heDtcbnByb3RvLm1pbiAgICAgICAgICAgICAgID0gcHJvdG90eXBlTWluO1xucHJvdG8ucGFyc2luZ0ZsYWdzICAgICAgPSBwYXJzaW5nRmxhZ3M7XG5wcm90by5zZXQgICAgICAgICAgICAgICA9IHN0cmluZ1NldDtcbnByb3RvLnN0YXJ0T2YgICAgICAgICAgID0gc3RhcnRPZjtcbnByb3RvLnN1YnRyYWN0ICAgICAgICAgID0gc3VidHJhY3Q7XG5wcm90by50b0FycmF5ICAgICAgICAgICA9IHRvQXJyYXk7XG5wcm90by50b09iamVjdCAgICAgICAgICA9IHRvT2JqZWN0O1xucHJvdG8udG9EYXRlICAgICAgICAgICAgPSB0b0RhdGU7XG5wcm90by50b0lTT1N0cmluZyAgICAgICA9IHRvSVNPU3RyaW5nO1xucHJvdG8uaW5zcGVjdCAgICAgICAgICAgPSBpbnNwZWN0O1xucHJvdG8udG9KU09OICAgICAgICAgICAgPSB0b0pTT047XG5wcm90by50b1N0cmluZyAgICAgICAgICA9IHRvU3RyaW5nO1xucHJvdG8udW5peCAgICAgICAgICAgICAgPSB1bml4O1xucHJvdG8udmFsdWVPZiAgICAgICAgICAgPSB2YWx1ZU9mO1xucHJvdG8uY3JlYXRpb25EYXRhICAgICAgPSBjcmVhdGlvbkRhdGE7XG5cbi8vIFllYXJcbmltcG9ydCB7IGdldFNldFllYXIsIGdldElzTGVhcFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbnByb3RvLnllYXIgICAgICAgPSBnZXRTZXRZZWFyO1xucHJvdG8uaXNMZWFwWWVhciA9IGdldElzTGVhcFllYXI7XG5cbi8vIFdlZWsgWWVhclxuaW1wb3J0IHsgZ2V0U2V0V2Vla1llYXIsIGdldFNldElTT1dlZWtZZWFyLCBnZXRXZWVrc0luWWVhciwgZ2V0SVNPV2Vla3NJblllYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLXllYXInO1xucHJvdG8ud2Vla1llYXIgICAgPSBnZXRTZXRXZWVrWWVhcjtcbnByb3RvLmlzb1dlZWtZZWFyID0gZ2V0U2V0SVNPV2Vla1llYXI7XG5cbi8vIFF1YXJ0ZXJcbmltcG9ydCB7IGdldFNldFF1YXJ0ZXIgfSBmcm9tICcuLi91bml0cy9xdWFydGVyJztcbnByb3RvLnF1YXJ0ZXIgPSBwcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XG5cbi8vIE1vbnRoXG5pbXBvcnQgeyBnZXRTZXRNb250aCwgZ2V0RGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5wcm90by5tb250aCAgICAgICA9IGdldFNldE1vbnRoO1xucHJvdG8uZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aDtcblxuLy8gV2Vla1xuaW1wb3J0IHsgZ2V0U2V0V2VlaywgZ2V0U2V0SVNPV2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xucHJvdG8ud2VlayAgICAgICAgICAgPSBwcm90by53ZWVrcyAgICAgICAgPSBnZXRTZXRXZWVrO1xucHJvdG8uaXNvV2VlayAgICAgICAgPSBwcm90by5pc29XZWVrcyAgICAgPSBnZXRTZXRJU09XZWVrO1xucHJvdG8ud2Vla3NJblllYXIgICAgPSBnZXRXZWVrc0luWWVhcjtcbnByb3RvLmlzb1dlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXI7XG5cbi8vIERheVxuaW1wb3J0IHsgZ2V0U2V0RGF5T2ZNb250aCB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi1tb250aCc7XG5pbXBvcnQgeyBnZXRTZXREYXlPZldlZWssIGdldFNldElTT0RheU9mV2VlaywgZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgZ2V0U2V0RGF5T2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXllYXInO1xucHJvdG8uZGF0ZSAgICAgICA9IGdldFNldERheU9mTW9udGg7XG5wcm90by5kYXkgICAgICAgID0gcHJvdG8uZGF5cyAgICAgICAgICAgICA9IGdldFNldERheU9mV2VlaztcbnByb3RvLndlZWtkYXkgICAgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG5wcm90by5pc29XZWVrZGF5ID0gZ2V0U2V0SVNPRGF5T2ZXZWVrO1xucHJvdG8uZGF5T2ZZZWFyICA9IGdldFNldERheU9mWWVhcjtcblxuLy8gSG91clxuaW1wb3J0IHsgZ2V0U2V0SG91ciB9IGZyb20gJy4uL3VuaXRzL2hvdXInO1xucHJvdG8uaG91ciA9IHByb3RvLmhvdXJzID0gZ2V0U2V0SG91cjtcblxuLy8gTWludXRlXG5pbXBvcnQgeyBnZXRTZXRNaW51dGUgfSBmcm9tICcuLi91bml0cy9taW51dGUnO1xucHJvdG8ubWludXRlID0gcHJvdG8ubWludXRlcyA9IGdldFNldE1pbnV0ZTtcblxuLy8gU2Vjb25kXG5pbXBvcnQgeyBnZXRTZXRTZWNvbmQgfSBmcm9tICcuLi91bml0cy9zZWNvbmQnO1xucHJvdG8uc2Vjb25kID0gcHJvdG8uc2Vjb25kcyA9IGdldFNldFNlY29uZDtcblxuLy8gTWlsbGlzZWNvbmRcbmltcG9ydCB7IGdldFNldE1pbGxpc2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvbWlsbGlzZWNvbmQnO1xucHJvdG8ubWlsbGlzZWNvbmQgPSBwcm90by5taWxsaXNlY29uZHMgPSBnZXRTZXRNaWxsaXNlY29uZDtcblxuLy8gT2Zmc2V0XG5pbXBvcnQge1xuICAgIGdldFNldE9mZnNldCxcbiAgICBzZXRPZmZzZXRUb1VUQyxcbiAgICBzZXRPZmZzZXRUb0xvY2FsLFxuICAgIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0LFxuICAgIGhhc0FsaWduZWRIb3VyT2Zmc2V0LFxuICAgIGlzRGF5bGlnaHRTYXZpbmdUaW1lLFxuICAgIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCxcbiAgICBnZXRTZXRab25lLFxuICAgIGlzTG9jYWwsXG4gICAgaXNVdGNPZmZzZXQsXG4gICAgaXNVdGNcbn0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbnByb3RvLnV0Y09mZnNldCAgICAgICAgICAgID0gZ2V0U2V0T2Zmc2V0O1xucHJvdG8udXRjICAgICAgICAgICAgICAgICAgPSBzZXRPZmZzZXRUb1VUQztcbnByb3RvLmxvY2FsICAgICAgICAgICAgICAgID0gc2V0T2Zmc2V0VG9Mb2NhbDtcbnByb3RvLnBhcnNlWm9uZSAgICAgICAgICAgID0gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQ7XG5wcm90by5oYXNBbGlnbmVkSG91ck9mZnNldCA9IGhhc0FsaWduZWRIb3VyT2Zmc2V0O1xucHJvdG8uaXNEU1QgICAgICAgICAgICAgICAgPSBpc0RheWxpZ2h0U2F2aW5nVGltZTtcbnByb3RvLmlzTG9jYWwgICAgICAgICAgICAgID0gaXNMb2NhbDtcbnByb3RvLmlzVXRjT2Zmc2V0ICAgICAgICAgID0gaXNVdGNPZmZzZXQ7XG5wcm90by5pc1V0YyAgICAgICAgICAgICAgICA9IGlzVXRjO1xucHJvdG8uaXNVVEMgICAgICAgICAgICAgICAgPSBpc1V0YztcblxuLy8gVGltZXpvbmVcbmltcG9ydCB7IGdldFpvbmVBYmJyLCBnZXRab25lTmFtZSB9IGZyb20gJy4uL3VuaXRzL3RpbWV6b25lJztcbnByb3RvLnpvbmVBYmJyID0gZ2V0Wm9uZUFiYnI7XG5wcm90by56b25lTmFtZSA9IGdldFpvbmVOYW1lO1xuXG4vLyBEZXByZWNhdGlvbnNcbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5wcm90by5kYXRlcyAgPSBkZXByZWNhdGUoJ2RhdGVzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBkYXRlIGluc3RlYWQuJywgZ2V0U2V0RGF5T2ZNb250aCk7XG5wcm90by5tb250aHMgPSBkZXByZWNhdGUoJ21vbnRocyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgbW9udGggaW5zdGVhZCcsIGdldFNldE1vbnRoKTtcbnByb3RvLnllYXJzICA9IGRlcHJlY2F0ZSgneWVhcnMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIHllYXIgaW5zdGVhZCcsIGdldFNldFllYXIpO1xucHJvdG8uem9uZSAgID0gZGVwcmVjYXRlKCdtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy96b25lLycsIGdldFNldFpvbmUpO1xucHJvdG8uaXNEU1RTaGlmdGVkID0gZGVwcmVjYXRlKCdpc0RTVFNoaWZ0ZWQgaXMgZGVwcmVjYXRlZC4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZHN0LXNoaWZ0ZWQvIGZvciBtb3JlIGluZm9ybWF0aW9uJywgaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvdG87XG4iLCJpbXBvcnQgeyBjcmVhdGVMb2NhbCB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBjcmVhdGVVVEMgfSBmcm9tICcuLi9jcmVhdGUvdXRjJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQgfSBmcm9tICcuLi9jcmVhdGUvdmFsaWQnO1xuaW1wb3J0IHsgaXNNb21lbnQgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IG1pbiwgbWF4IH0gZnJvbSAnLi9taW4tbWF4JztcbmltcG9ydCB7IG5vdyB9IGZyb20gJy4vbm93JztcbmltcG9ydCBtb21lbnRQcm90b3R5cGUgZnJvbSAnLi9wcm90b3R5cGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVVbml4IChpbnB1dCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCAqIDEwMDApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJblpvbmUgKCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpLnBhcnNlWm9uZSgpO1xufVxuXG5leHBvcnQge1xuICAgIG5vdyxcbiAgICBtaW4sXG4gICAgbWF4LFxuICAgIGlzTW9tZW50LFxuICAgIGNyZWF0ZVVUQyxcbiAgICBjcmVhdGVVbml4LFxuICAgIGNyZWF0ZUxvY2FsLFxuICAgIGNyZWF0ZUluWm9uZSxcbiAgICBjcmVhdGVJbnZhbGlkLFxuICAgIG1vbWVudFByb3RvdHlwZVxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxudmFyIHByb3RvID0gTG9jYWxlLnByb3RvdHlwZTtcblxuaW1wb3J0IHsgY2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IGxvbmdEYXRlRm9ybWF0IH0gZnJvbSAnLi9mb3JtYXRzJztcbmltcG9ydCB7IGludmFsaWREYXRlIH0gZnJvbSAnLi9pbnZhbGlkJztcbmltcG9ydCB7IG9yZGluYWwgfSBmcm9tICcuL29yZGluYWwnO1xuaW1wb3J0IHsgcHJlUGFyc2VQb3N0Rm9ybWF0IH0gZnJvbSAnLi9wcmUtcG9zdC1mb3JtYXQnO1xuaW1wb3J0IHsgcmVsYXRpdmVUaW1lLCBwYXN0RnV0dXJlIH0gZnJvbSAnLi9yZWxhdGl2ZSc7XG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCc7XG5cbnByb3RvLmNhbGVuZGFyICAgICAgICA9IGNhbGVuZGFyO1xucHJvdG8ubG9uZ0RhdGVGb3JtYXQgID0gbG9uZ0RhdGVGb3JtYXQ7XG5wcm90by5pbnZhbGlkRGF0ZSAgICAgPSBpbnZhbGlkRGF0ZTtcbnByb3RvLm9yZGluYWwgICAgICAgICA9IG9yZGluYWw7XG5wcm90by5wcmVwYXJzZSAgICAgICAgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG5wcm90by5wb3N0Zm9ybWF0ICAgICAgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG5wcm90by5yZWxhdGl2ZVRpbWUgICAgPSByZWxhdGl2ZVRpbWU7XG5wcm90by5wYXN0RnV0dXJlICAgICAgPSBwYXN0RnV0dXJlO1xucHJvdG8uc2V0ICAgICAgICAgICAgID0gc2V0O1xuXG4vLyBNb250aFxuaW1wb3J0IHtcbiAgICBsb2NhbGVNb250aHNQYXJzZSxcbiAgICBsb2NhbGVNb250aHMsXG4gICAgbG9jYWxlTW9udGhzU2hvcnQsXG4gICAgbW9udGhzUmVnZXgsXG4gICAgbW9udGhzU2hvcnRSZWdleFxufSBmcm9tICcuLi91bml0cy9tb250aCc7XG5cbnByb3RvLm1vbnRocyAgICAgICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRocztcbnByb3RvLm1vbnRoc1Nob3J0ICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRoc1Nob3J0O1xucHJvdG8ubW9udGhzUGFyc2UgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzUGFyc2U7XG5wcm90by5tb250aHNSZWdleCAgICAgICA9IG1vbnRoc1JlZ2V4O1xucHJvdG8ubW9udGhzU2hvcnRSZWdleCAgPSBtb250aHNTaG9ydFJlZ2V4O1xuXG4vLyBXZWVrXG5pbXBvcnQgeyBsb2NhbGVXZWVrLCBsb2NhbGVGaXJzdERheU9mWWVhciwgbG9jYWxlRmlyc3REYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbnByb3RvLndlZWsgPSBsb2NhbGVXZWVrO1xucHJvdG8uZmlyc3REYXlPZlllYXIgPSBsb2NhbGVGaXJzdERheU9mWWVhcjtcbnByb3RvLmZpcnN0RGF5T2ZXZWVrID0gbG9jYWxlRmlyc3REYXlPZldlZWs7XG5cbi8vIERheSBvZiBXZWVrXG5pbXBvcnQge1xuICAgIGxvY2FsZVdlZWtkYXlzUGFyc2UsXG4gICAgbG9jYWxlV2Vla2RheXMsXG4gICAgbG9jYWxlV2Vla2RheXNNaW4sXG4gICAgbG9jYWxlV2Vla2RheXNTaG9ydCxcblxuICAgIHdlZWtkYXlzUmVnZXgsXG4gICAgd2Vla2RheXNTaG9ydFJlZ2V4LFxuICAgIHdlZWtkYXlzTWluUmVnZXhcbn0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG5wcm90by53ZWVrZGF5cyAgICAgICA9ICAgICAgICBsb2NhbGVXZWVrZGF5cztcbnByb3RvLndlZWtkYXlzTWluICAgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzTWluO1xucHJvdG8ud2Vla2RheXNTaG9ydCAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNTaG9ydDtcbnByb3RvLndlZWtkYXlzUGFyc2UgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzUGFyc2U7XG5cbnByb3RvLndlZWtkYXlzUmVnZXggICAgICAgPSAgICAgICAgd2Vla2RheXNSZWdleDtcbnByb3RvLndlZWtkYXlzU2hvcnRSZWdleCAgPSAgICAgICAgd2Vla2RheXNTaG9ydFJlZ2V4O1xucHJvdG8ud2Vla2RheXNNaW5SZWdleCAgICA9ICAgICAgICB3ZWVrZGF5c01pblJlZ2V4O1xuXG4vLyBIb3Vyc1xuaW1wb3J0IHsgbG9jYWxlSXNQTSwgbG9jYWxlTWVyaWRpZW0gfSBmcm9tICcuLi91bml0cy9ob3VyJztcblxucHJvdG8uaXNQTSA9IGxvY2FsZUlzUE07XG5wcm90by5tZXJpZGllbSA9IGxvY2FsZU1lcmlkaWVtO1xuIiwiaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL3V0aWxzL2lzLW51bWJlcic7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZXMnO1xuaW1wb3J0IHsgY3JlYXRlVVRDIH0gZnJvbSAnLi4vY3JlYXRlL3V0Yyc7XG5cbmZ1bmN0aW9uIGdldCAoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xuICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKTtcbiAgICB2YXIgdXRjID0gY3JlYXRlVVRDKCkuc2V0KHNldHRlciwgaW5kZXgpO1xuICAgIHJldHVybiBsb2NhbGVbZmllbGRdKHV0YywgZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRoc0ltcGwgKGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG5cbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZ2V0KGZvcm1hdCwgaW5kZXgsIGZpZWxkLCAnbW9udGgnKTtcbiAgICB9XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgb3V0W2ldID0gZ2V0KGZvcm1hdCwgaSwgZmllbGQsICdtb250aCcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vLyAoKVxuLy8gKDUpXG4vLyAoZm10LCA1KVxuLy8gKGZtdClcbi8vICh0cnVlKVxuLy8gKHRydWUsIDUpXG4vLyAodHJ1ZSwgZm10LCA1KVxuLy8gKHRydWUsIGZtdClcbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c0ltcGwgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICBpZiAodHlwZW9mIGxvY2FsZVNvcnRlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXQgPSBsb2NhbGVTb3J0ZWQ7XG4gICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICBsb2NhbGVTb3J0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgfVxuXG4gICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpLFxuICAgICAgICBzaGlmdCA9IGxvY2FsZVNvcnRlZCA/IGxvY2FsZS5fd2Vlay5kb3cgOiAwO1xuXG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdldChmb3JtYXQsIChpbmRleCArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgb3V0W2ldID0gZ2V0KGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdE1vbnRocyAoZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0TW9udGhzU2hvcnQgKGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRoc1Nob3J0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0V2Vla2RheXMgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0V2Vla2RheXNTaG9ydCAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNTaG9ydCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdFdlZWtkYXlzTWluIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c01pbicpO1xufVxuIiwiaW1wb3J0ICcuL3Byb3RvdHlwZSc7XG5pbXBvcnQgeyBnZXRTZXRHbG9iYWxMb2NhbGUgfSBmcm9tICcuL2xvY2FsZXMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbmdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgb3JkaW5hbFBhcnNlOiAvXFxkezEsMn0odGh8c3R8bmR8cmQpLyxcbiAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgb3V0cHV0ID0gKHRvSW50KG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICB9XG59KTtcbiIsIi8vIFNpZGUgZWZmZWN0IGltcG9ydHNcbmltcG9ydCAnLi9wcm90b3R5cGUnO1xuXG5pbXBvcnQge1xuICAgIGdldFNldEdsb2JhbExvY2FsZSxcbiAgICBkZWZpbmVMb2NhbGUsXG4gICAgdXBkYXRlTG9jYWxlLFxuICAgIGdldExvY2FsZSxcbiAgICBsaXN0TG9jYWxlc1xufSBmcm9tICcuL2xvY2FsZXMnO1xuXG5pbXBvcnQge1xuICAgIGxpc3RNb250aHMsXG4gICAgbGlzdE1vbnRoc1Nob3J0LFxuICAgIGxpc3RXZWVrZGF5cyxcbiAgICBsaXN0V2Vla2RheXNTaG9ydCxcbiAgICBsaXN0V2Vla2RheXNNaW5cbn0gZnJvbSAnLi9saXN0cyc7XG5cbmV4cG9ydCB7XG4gICAgZ2V0U2V0R2xvYmFsTG9jYWxlLFxuICAgIGRlZmluZUxvY2FsZSxcbiAgICB1cGRhdGVMb2NhbGUsXG4gICAgZ2V0TG9jYWxlLFxuICAgIGxpc3RMb2NhbGVzLFxuICAgIGxpc3RNb250aHMsXG4gICAgbGlzdE1vbnRoc1Nob3J0LFxuICAgIGxpc3RXZWVrZGF5cyxcbiAgICBsaXN0V2Vla2RheXNTaG9ydCxcbiAgICBsaXN0V2Vla2RheXNNaW5cbn07XG5cbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcblxuaG9va3MubGFuZyA9IGRlcHJlY2F0ZSgnbW9tZW50LmxhbmcgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGUgaW5zdGVhZC4nLCBnZXRTZXRHbG9iYWxMb2NhbGUpO1xuaG9va3MubGFuZ0RhdGEgPSBkZXByZWNhdGUoJ21vbWVudC5sYW5nRGF0YSBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZURhdGEgaW5zdGVhZC4nLCBnZXRMb2NhbGUpO1xuXG5pbXBvcnQgJy4vZW4nO1xuIiwidmFyIG1hdGhBYnMgPSBNYXRoLmFicztcblxuZXhwb3J0IGZ1bmN0aW9uIGFicyAoKSB7XG4gICAgdmFyIGRhdGEgICAgICAgICAgID0gdGhpcy5fZGF0YTtcblxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICB0aGlzLl9kYXlzICAgICAgICAgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xuICAgIHRoaXMuX21vbnRocyAgICAgICA9IG1hdGhBYnModGhpcy5fbW9udGhzKTtcblxuICAgIGRhdGEubWlsbGlzZWNvbmRzICA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgIGRhdGEuc2Vjb25kcyAgICAgICA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICBkYXRhLm1pbnV0ZXMgICAgICAgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgZGF0YS5ob3VycyAgICAgICAgID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICBkYXRhLm1vbnRocyAgICAgICAgPSBtYXRoQWJzKGRhdGEubW9udGhzKTtcbiAgICBkYXRhLnllYXJzICAgICAgICAgPSBtYXRoQWJzKGRhdGEueWVhcnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcblxuZnVuY3Rpb24gYWRkU3VidHJhY3QgKGR1cmF0aW9uLCBpbnB1dCwgdmFsdWUsIGRpcmVjdGlvbikge1xuICAgIHZhciBvdGhlciA9IGNyZWF0ZUR1cmF0aW9uKGlucHV0LCB2YWx1ZSk7XG5cbiAgICBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9taWxsaXNlY29uZHM7XG4gICAgZHVyYXRpb24uX2RheXMgICAgICAgICArPSBkaXJlY3Rpb24gKiBvdGhlci5fZGF5cztcbiAgICBkdXJhdGlvbi5fbW9udGhzICAgICAgICs9IGRpcmVjdGlvbiAqIG90aGVyLl9tb250aHM7XG5cbiAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBhZGQoMSwgJ3MnKSBvciBhZGQoZHVyYXRpb24pXG5leHBvcnQgZnVuY3Rpb24gYWRkIChpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QodGhpcywgaW5wdXQsIHZhbHVlLCAxKTtcbn1cblxuLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgc3VidHJhY3QoMSwgJ3MnKSBvciBzdWJ0cmFjdChkdXJhdGlvbilcbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdCAoaW5wdXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGFkZFN1YnRyYWN0KHRoaXMsIGlucHV0LCB2YWx1ZSwgLTEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJzQ2VpbCAobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IGFic0Zsb29yIGZyb20gJy4uL3V0aWxzL2Ficy1mbG9vcic7XG5pbXBvcnQgYWJzQ2VpbCBmcm9tICcuLi91dGlscy9hYnMtY2VpbCc7XG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWJibGUgKCkge1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG4gICAgdmFyIGRheXMgICAgICAgICA9IHRoaXMuX2RheXM7XG4gICAgdmFyIG1vbnRocyAgICAgICA9IHRoaXMuX21vbnRocztcbiAgICB2YXIgZGF0YSAgICAgICAgID0gdGhpcy5fZGF0YTtcbiAgICB2YXIgc2Vjb25kcywgbWludXRlcywgaG91cnMsIHllYXJzLCBtb250aHNGcm9tRGF5cztcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgICAvLyBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzIxNjZcbiAgICBpZiAoISgobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMCkpKSB7XG4gICAgICAgIG1pbGxpc2Vjb25kcyArPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHMpICsgZGF5cykgKiA4NjRlNTtcbiAgICAgICAgZGF5cyA9IDA7XG4gICAgICAgIG1vbnRocyA9IDA7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJ1YmJsZXMgdXAgdmFsdWVzLCBzZWUgdGhlIHRlc3RzIGZvclxuICAgIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgICBzZWNvbmRzICAgICAgICAgICA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIGRhdGEuc2Vjb25kcyAgICAgID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgbWludXRlcyAgICAgICAgICAgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGRhdGEubWludXRlcyAgICAgID0gbWludXRlcyAlIDYwO1xuXG4gICAgaG91cnMgICAgICAgICAgICAgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgIGRhdGEuaG91cnMgICAgICAgID0gaG91cnMgJSAyNDtcblxuICAgIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgICAvLyBjb252ZXJ0IGRheXMgdG8gbW9udGhzXG4gICAgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICAgIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgICBkYXlzIC09IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRoc0Zyb21EYXlzKSk7XG5cbiAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgbW9udGhzICU9IDEyO1xuXG4gICAgZGF0YS5kYXlzICAgPSBkYXlzO1xuICAgIGRhdGEubW9udGhzID0gbW9udGhzO1xuICAgIGRhdGEueWVhcnMgID0geWVhcnM7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNUb01vbnRocyAoZGF5cykge1xuICAgIC8vIDQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcbiAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxMiBtb250aHMgPT09IDQ4MDBcbiAgICByZXR1cm4gZGF5cyAqIDQ4MDAgLyAxNDYwOTc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNUb0RheXMgKG1vbnRocykge1xuICAgIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICAgIHJldHVybiBtb250aHMgKiAxNDYwOTcgLyA0ODAwO1xufVxuIiwiaW1wb3J0IHsgZGF5c1RvTW9udGhzLCBtb250aHNUb0RheXMgfSBmcm9tICcuL2J1YmJsZSc7XG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHRvSW50IGZyb20gJy4uL3V0aWxzL3RvLWludCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcyAodW5pdHMpIHtcbiAgICB2YXIgZGF5cztcbiAgICB2YXIgbW9udGhzO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG5cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgIGlmICh1bml0cyA9PT0gJ21vbnRoJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgIGRheXMgICA9IHRoaXMuX2RheXMgICArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XG4gICAgICAgIHJldHVybiB1bml0cyA9PT0gJ21vbnRoJyA/IG1vbnRocyA6IG1vbnRocyAvIDEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnd2VlaycgICA6IHJldHVybiBkYXlzIC8gNyAgICAgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XG4gICAgICAgICAgICBjYXNlICdkYXknICAgIDogcmV0dXJuIGRheXMgICAgICAgICArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgY2FzZSAnaG91cicgICA6IHJldHVybiBkYXlzICogMjQgICAgKyBtaWxsaXNlY29uZHMgLyAzNmU1O1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJyA6IHJldHVybiBkYXlzICogMTQ0MCAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnIDogcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcbiAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzogcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignVW5rbm93biB1bml0ICcgKyB1bml0cyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFRPRE86IFVzZSB0aGlzLmFzKCdtcycpP1xuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlT2YgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArXG4gICAgICAgIHRoaXMuX2RheXMgKiA4NjRlNSArXG4gICAgICAgICh0aGlzLl9tb250aHMgJSAxMikgKiAyNTkyZTYgK1xuICAgICAgICB0b0ludCh0aGlzLl9tb250aHMgLyAxMikgKiAzMTUzNmU2XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZUFzIChhbGlhcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzKGFsaWFzKTtcbiAgICB9O1xufVxuXG5leHBvcnQgdmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpO1xuZXhwb3J0IHZhciBhc1NlY29uZHMgICAgICA9IG1ha2VBcygncycpO1xuZXhwb3J0IHZhciBhc01pbnV0ZXMgICAgICA9IG1ha2VBcygnbScpO1xuZXhwb3J0IHZhciBhc0hvdXJzICAgICAgICA9IG1ha2VBcygnaCcpO1xuZXhwb3J0IHZhciBhc0RheXMgICAgICAgICA9IG1ha2VBcygnZCcpO1xuZXhwb3J0IHZhciBhc1dlZWtzICAgICAgICA9IG1ha2VBcygndycpO1xuZXhwb3J0IHZhciBhc01vbnRocyAgICAgICA9IG1ha2VBcygnTScpO1xuZXhwb3J0IHZhciBhc1llYXJzICAgICAgICA9IG1ha2VBcygneScpO1xuIiwiaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcbmltcG9ydCBhYnNGbG9vciBmcm9tICcuLi91dGlscy9hYnMtZmxvb3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0ICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIHJldHVybiB0aGlzW3VuaXRzICsgJ3MnXSgpO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0dGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtuYW1lXTtcbiAgICB9O1xufVxuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kcyA9IG1ha2VHZXR0ZXIoJ21pbGxpc2Vjb25kcycpO1xuZXhwb3J0IHZhciBzZWNvbmRzICAgICAgPSBtYWtlR2V0dGVyKCdzZWNvbmRzJyk7XG5leHBvcnQgdmFyIG1pbnV0ZXMgICAgICA9IG1ha2VHZXR0ZXIoJ21pbnV0ZXMnKTtcbmV4cG9ydCB2YXIgaG91cnMgICAgICAgID0gbWFrZUdldHRlcignaG91cnMnKTtcbmV4cG9ydCB2YXIgZGF5cyAgICAgICAgID0gbWFrZUdldHRlcignZGF5cycpO1xuZXhwb3J0IHZhciBtb250aHMgICAgICAgPSBtYWtlR2V0dGVyKCdtb250aHMnKTtcbmV4cG9ydCB2YXIgeWVhcnMgICAgICAgID0gbWFrZUdldHRlcigneWVhcnMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzICgpIHtcbiAgICByZXR1cm4gYWJzRmxvb3IodGhpcy5kYXlzKCkgLyA3KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xuXG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xudmFyIHRocmVzaG9sZHMgPSB7XG4gICAgczogNDUsICAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxuICAgIG06IDQ1LCAgLy8gbWludXRlcyB0byBob3VyXG4gICAgaDogMjIsICAvLyBob3VycyB0byBkYXlcbiAgICBkOiAyNiwgIC8vIGRheXMgdG8gbW9udGhcbiAgICBNOiAxMSAgIC8vIG1vbnRocyB0byB5ZWFyXG59O1xuXG4vLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRpbWVBZ28oc3RyaW5nLCBudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGlzRnV0dXJlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLnJlbGF0aXZlVGltZShudW1iZXIgfHwgMSwgISF3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKTtcbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lIChwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgbG9jYWxlKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpO1xuICAgIHZhciBzZWNvbmRzICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpO1xuICAgIHZhciBtaW51dGVzICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpO1xuICAgIHZhciBob3VycyAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpO1xuICAgIHZhciBkYXlzICAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdkJykpO1xuICAgIHZhciBtb250aHMgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpO1xuICAgIHZhciB5ZWFycyAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpO1xuXG4gICAgdmFyIGEgPSBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsncycsIHNlY29uZHNdICB8fFxuICAgICAgICAgICAgbWludXRlcyA8PSAxICAgICAgICAgICAmJiBbJ20nXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gJiYgWydtbScsIG1pbnV0ZXNdIHx8XG4gICAgICAgICAgICBob3VycyAgIDw9IDEgICAgICAgICAgICYmIFsnaCddICAgICAgICAgICB8fFxuICAgICAgICAgICAgaG91cnMgICA8IHRocmVzaG9sZHMuaCAmJiBbJ2hoJywgaG91cnNdICAgfHxcbiAgICAgICAgICAgIGRheXMgICAgPD0gMSAgICAgICAgICAgJiYgWydkJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBkYXlzICAgIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSAgICB8fFxuICAgICAgICAgICAgbW9udGhzICA8PSAxICAgICAgICAgICAmJiBbJ00nXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIG1vbnRocyAgPCB0aHJlc2hvbGRzLk0gJiYgWydNTScsIG1vbnRoc10gIHx8XG4gICAgICAgICAgICB5ZWFycyAgIDw9IDEgICAgICAgICAgICYmIFsneSddICAgICAgICAgICB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gICAgYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gICAgYVszXSA9ICtwb3NOZWdEdXJhdGlvbiA+IDA7XG4gICAgYVs0XSA9IGxvY2FsZTtcbiAgICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyAocm91bmRpbmdGdW5jdGlvbikge1xuICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kO1xuICAgIH1cbiAgICBpZiAodHlwZW9mKHJvdW5kaW5nRnVuY3Rpb24pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkICh0aHJlc2hvbGQsIGxpbWl0KSB7XG4gICAgaWYgKHRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgICB9XG4gICAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodW1hbml6ZSAod2l0aFN1ZmZpeCkge1xuICAgIHZhciBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICB2YXIgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xuXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG4iLCJpbXBvcnQgYWJzRmxvb3IgZnJvbSAnLi4vdXRpbHMvYWJzLWZsb29yJztcbnZhciBhYnMgPSBNYXRoLmFicztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xuICAgIC8vIGZvciBJU08gc3RyaW5ncyB3ZSBkbyBub3QgdXNlIHRoZSBub3JtYWwgYnViYmxpbmcgcnVsZXM6XG4gICAgLy8gICogbWlsbGlzZWNvbmRzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSBob3Vyc1xuICAgIC8vICAqIGRheXMgZG8gbm90IGJ1YmJsZSBhdCBhbGxcbiAgICAvLyAgKiBtb250aHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIHllYXJzXG4gICAgLy8gVGhpcyBpcyBiZWNhdXNlIHRoZXJlIGlzIG5vIGNvbnRleHQtZnJlZSBjb252ZXJzaW9uIGJldHdlZW4gaG91cnMgYW5kIGRheXNcbiAgICAvLyAodGhpbmsgb2YgY2xvY2sgY2hhbmdlcylcbiAgICAvLyBhbmQgYWxzbyBub3QgYmV0d2VlbiBkYXlzIGFuZCBtb250aHMgKDI4LTMxIGRheXMgcGVyIG1vbnRoKVxuICAgIHZhciBzZWNvbmRzID0gYWJzKHRoaXMuX21pbGxpc2Vjb25kcykgLyAxMDAwO1xuICAgIHZhciBkYXlzICAgICAgICAgPSBhYnModGhpcy5fZGF5cyk7XG4gICAgdmFyIG1vbnRocyAgICAgICA9IGFicyh0aGlzLl9tb250aHMpO1xuICAgIHZhciBtaW51dGVzLCBob3VycywgeWVhcnM7XG5cbiAgICAvLyAzNjAwIHNlY29uZHMgLT4gNjAgbWludXRlcyAtPiAxIGhvdXJcbiAgICBtaW51dGVzICAgICAgICAgICA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgaG91cnMgICAgICAgICAgICAgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgIHNlY29uZHMgJT0gNjA7XG4gICAgbWludXRlcyAlPSA2MDtcblxuICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICB5ZWFycyAgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgbW9udGhzICU9IDEyO1xuXG5cbiAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgIHZhciBZID0geWVhcnM7XG4gICAgdmFyIE0gPSBtb250aHM7XG4gICAgdmFyIEQgPSBkYXlzO1xuICAgIHZhciBoID0gaG91cnM7XG4gICAgdmFyIG0gPSBtaW51dGVzO1xuICAgIHZhciBzID0gc2Vjb25kcztcbiAgICB2YXIgdG90YWwgPSB0aGlzLmFzU2Vjb25kcygpO1xuXG4gICAgaWYgKCF0b3RhbCkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSBzYW1lIGFzIEMjJ3MgKE5vZGEpIGFuZCBweXRob24gKGlzb2RhdGUpLi4uXG4gICAgICAgIC8vIGJ1dCBub3Qgb3RoZXIgSlMgKGdvb2cuZGF0ZSlcbiAgICAgICAgcmV0dXJuICdQMEQnO1xuICAgIH1cblxuICAgIHJldHVybiAodG90YWwgPCAwID8gJy0nIDogJycpICtcbiAgICAgICAgJ1AnICtcbiAgICAgICAgKFkgPyBZICsgJ1knIDogJycpICtcbiAgICAgICAgKE0gPyBNICsgJ00nIDogJycpICtcbiAgICAgICAgKEQgPyBEICsgJ0QnIDogJycpICtcbiAgICAgICAgKChoIHx8IG0gfHwgcykgPyAnVCcgOiAnJykgK1xuICAgICAgICAoaCA/IGggKyAnSCcgOiAnJykgK1xuICAgICAgICAobSA/IG0gKyAnTScgOiAnJykgK1xuICAgICAgICAocyA/IHMgKyAnUycgOiAnJyk7XG59XG4iLCJpbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG52YXIgcHJvdG8gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5cbmltcG9ydCB7IGFicyB9IGZyb20gJy4vYWJzJztcbmltcG9ydCB7IGFkZCwgc3VidHJhY3QgfSBmcm9tICcuL2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBhcywgYXNNaWxsaXNlY29uZHMsIGFzU2Vjb25kcywgYXNNaW51dGVzLCBhc0hvdXJzLCBhc0RheXMsIGFzV2Vla3MsIGFzTW9udGhzLCBhc1llYXJzLCB2YWx1ZU9mIH0gZnJvbSAnLi9hcyc7XG5pbXBvcnQgeyBidWJibGUgfSBmcm9tICcuL2J1YmJsZSc7XG5pbXBvcnQgeyBnZXQsIG1pbGxpc2Vjb25kcywgc2Vjb25kcywgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgeWVhcnMsIHdlZWtzIH0gZnJvbSAnLi9nZXQnO1xuaW1wb3J0IHsgaHVtYW5pemUgfSBmcm9tICcuL2h1bWFuaXplJztcbmltcG9ydCB7IHRvSVNPU3RyaW5nIH0gZnJvbSAnLi9pc28tc3RyaW5nJztcbmltcG9ydCB7IGxhbmcsIGxvY2FsZSwgbG9jYWxlRGF0YSB9IGZyb20gJy4uL21vbWVudC9sb2NhbGUnO1xuXG5wcm90by5hYnMgICAgICAgICAgICA9IGFicztcbnByb3RvLmFkZCAgICAgICAgICAgID0gYWRkO1xucHJvdG8uc3VidHJhY3QgICAgICAgPSBzdWJ0cmFjdDtcbnByb3RvLmFzICAgICAgICAgICAgID0gYXM7XG5wcm90by5hc01pbGxpc2Vjb25kcyA9IGFzTWlsbGlzZWNvbmRzO1xucHJvdG8uYXNTZWNvbmRzICAgICAgPSBhc1NlY29uZHM7XG5wcm90by5hc01pbnV0ZXMgICAgICA9IGFzTWludXRlcztcbnByb3RvLmFzSG91cnMgICAgICAgID0gYXNIb3VycztcbnByb3RvLmFzRGF5cyAgICAgICAgID0gYXNEYXlzO1xucHJvdG8uYXNXZWVrcyAgICAgICAgPSBhc1dlZWtzO1xucHJvdG8uYXNNb250aHMgICAgICAgPSBhc01vbnRocztcbnByb3RvLmFzWWVhcnMgICAgICAgID0gYXNZZWFycztcbnByb3RvLnZhbHVlT2YgICAgICAgID0gdmFsdWVPZjtcbnByb3RvLl9idWJibGUgICAgICAgID0gYnViYmxlO1xucHJvdG8uZ2V0ICAgICAgICAgICAgPSBnZXQ7XG5wcm90by5taWxsaXNlY29uZHMgICA9IG1pbGxpc2Vjb25kcztcbnByb3RvLnNlY29uZHMgICAgICAgID0gc2Vjb25kcztcbnByb3RvLm1pbnV0ZXMgICAgICAgID0gbWludXRlcztcbnByb3RvLmhvdXJzICAgICAgICAgID0gaG91cnM7XG5wcm90by5kYXlzICAgICAgICAgICA9IGRheXM7XG5wcm90by53ZWVrcyAgICAgICAgICA9IHdlZWtzO1xucHJvdG8ubW9udGhzICAgICAgICAgPSBtb250aHM7XG5wcm90by55ZWFycyAgICAgICAgICA9IHllYXJzO1xucHJvdG8uaHVtYW5pemUgICAgICAgPSBodW1hbml6ZTtcbnByb3RvLnRvSVNPU3RyaW5nICAgID0gdG9JU09TdHJpbmc7XG5wcm90by50b1N0cmluZyAgICAgICA9IHRvSVNPU3RyaW5nO1xucHJvdG8udG9KU09OICAgICAgICAgPSB0b0lTT1N0cmluZztcbnByb3RvLmxvY2FsZSAgICAgICAgID0gbG9jYWxlO1xucHJvdG8ubG9jYWxlRGF0YSAgICAgPSBsb2NhbGVEYXRhO1xuXG4vLyBEZXByZWNhdGlvbnNcbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZSc7XG5cbnByb3RvLnRvSXNvU3RyaW5nID0gZGVwcmVjYXRlKCd0b0lzb1N0cmluZygpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdG9JU09TdHJpbmcoKSBpbnN0ZWFkIChub3RpY2UgdGhlIGNhcGl0YWxzKScsIHRvSVNPU3RyaW5nKTtcbnByb3RvLmxhbmcgPSBsYW5nO1xuIiwiLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuaW1wb3J0ICcuL3Byb3RvdHlwZSc7XG5cbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgaXNEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHtcbiAgICBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyxcbiAgICBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGRcbn0gZnJvbSAnLi9odW1hbml6ZSc7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRHVyYXRpb24sXG4gICAgaXNEdXJhdGlvbixcbiAgICBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyxcbiAgICBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGRcbn07XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2hUaW1lc3RhbXAsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB0b0ludCBmcm9tICcuLi91dGlscy90by1pbnQnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdYJywgMCwgMCwgJ3VuaXgnKTtcbmFkZEZvcm1hdFRva2VuKCd4JywgMCwgMCwgJ3ZhbHVlT2YnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd4JywgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcbmFkZFBhcnNlVG9rZW4oJ1gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0LCAxMCkgKiAxMDAwKTtcbn0pO1xuYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG59KTtcbiIsIi8vIFNpZGUgZWZmZWN0IGltcG9ydHNcbmltcG9ydCAnLi9kYXktb2YtbW9udGgnO1xuaW1wb3J0ICcuL2RheS1vZi13ZWVrJztcbmltcG9ydCAnLi9kYXktb2YteWVhcic7XG5pbXBvcnQgJy4vaG91cic7XG5pbXBvcnQgJy4vbWlsbGlzZWNvbmQnO1xuaW1wb3J0ICcuL21pbnV0ZSc7XG5pbXBvcnQgJy4vbW9udGgnO1xuaW1wb3J0ICcuL29mZnNldCc7XG5pbXBvcnQgJy4vcXVhcnRlcic7XG5pbXBvcnQgJy4vc2Vjb25kJztcbmltcG9ydCAnLi90aW1lc3RhbXAnO1xuaW1wb3J0ICcuL3RpbWV6b25lJztcbmltcG9ydCAnLi93ZWVrLXllYXInO1xuaW1wb3J0ICcuL3dlZWsnO1xuaW1wb3J0ICcuL3llYXInO1xuXG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4vYWxpYXNlcyc7XG5cbmV4cG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH07XG4iLCIvLyEgbW9tZW50LmpzXG4vLyEgdmVyc2lvbiA6IDIuMTcuMVxuLy8hIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgbW9tZW50anMuY29tXG5cbmltcG9ydCB7IGhvb2tzIGFzIG1vbWVudCwgc2V0SG9va0NhbGxiYWNrIH0gZnJvbSAnLi9saWIvdXRpbHMvaG9va3MnO1xuXG5tb21lbnQudmVyc2lvbiA9ICcyLjE3LjEnO1xuXG5pbXBvcnQge1xuICAgIG1pbixcbiAgICBtYXgsXG4gICAgbm93LFxuICAgIGlzTW9tZW50LFxuICAgIG1vbWVudFByb3RvdHlwZSBhcyBmbixcbiAgICBjcmVhdGVVVEMgICAgICAgYXMgdXRjLFxuICAgIGNyZWF0ZVVuaXggICAgICBhcyB1bml4LFxuICAgIGNyZWF0ZUxvY2FsICAgICBhcyBsb2NhbCxcbiAgICBjcmVhdGVJbnZhbGlkICAgYXMgaW52YWxpZCxcbiAgICBjcmVhdGVJblpvbmUgICAgYXMgcGFyc2Vab25lXG59IGZyb20gJy4vbGliL21vbWVudC9tb21lbnQnO1xuXG5pbXBvcnQge1xuICAgIGdldENhbGVuZGFyRm9ybWF0XG59IGZyb20gJy4vbGliL21vbWVudC9jYWxlbmRhcic7XG5cbmltcG9ydCB7XG4gICAgZGVmaW5lTG9jYWxlLFxuICAgIHVwZGF0ZUxvY2FsZSxcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUgYXMgbG9jYWxlLFxuICAgIGdldExvY2FsZSAgICAgICAgICBhcyBsb2NhbGVEYXRhLFxuICAgIGxpc3RMb2NhbGVzICAgICAgICBhcyBsb2NhbGVzLFxuICAgIGxpc3RNb250aHMgICAgICAgICBhcyBtb250aHMsXG4gICAgbGlzdE1vbnRoc1Nob3J0ICAgIGFzIG1vbnRoc1Nob3J0LFxuICAgIGxpc3RXZWVrZGF5cyAgICAgICBhcyB3ZWVrZGF5cyxcbiAgICBsaXN0V2Vla2RheXNNaW4gICAgYXMgd2Vla2RheXNNaW4sXG4gICAgbGlzdFdlZWtkYXlzU2hvcnQgIGFzIHdlZWtkYXlzU2hvcnRcbn0gZnJvbSAnLi9saWIvbG9jYWxlL2xvY2FsZSc7XG5cbmltcG9ydCB7XG4gICAgaXNEdXJhdGlvbixcbiAgICBjcmVhdGVEdXJhdGlvbiBhcyBkdXJhdGlvbixcbiAgICBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyBhcyByZWxhdGl2ZVRpbWVSb3VuZGluZyxcbiAgICBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQgYXMgcmVsYXRpdmVUaW1lVGhyZXNob2xkXG59IGZyb20gJy4vbGliL2R1cmF0aW9uL2R1cmF0aW9uJztcblxuaW1wb3J0IHsgbm9ybWFsaXplVW5pdHMgfSBmcm9tICcuL2xpYi91bml0cy91bml0cyc7XG5cbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9saWIvdXRpbHMvaXMtZGF0ZSc7XG5cbnNldEhvb2tDYWxsYmFjayhsb2NhbCk7XG5cbm1vbWVudC5mbiAgICAgICAgICAgICAgICAgICAgPSBmbjtcbm1vbWVudC5taW4gICAgICAgICAgICAgICAgICAgPSBtaW47XG5tb21lbnQubWF4ICAgICAgICAgICAgICAgICAgID0gbWF4O1xubW9tZW50Lm5vdyAgICAgICAgICAgICAgICAgICA9IG5vdztcbm1vbWVudC51dGMgICAgICAgICAgICAgICAgICAgPSB1dGM7XG5tb21lbnQudW5peCAgICAgICAgICAgICAgICAgID0gdW5peDtcbm1vbWVudC5tb250aHMgICAgICAgICAgICAgICAgPSBtb250aHM7XG5tb21lbnQuaXNEYXRlICAgICAgICAgICAgICAgID0gaXNEYXRlO1xubW9tZW50LmxvY2FsZSAgICAgICAgICAgICAgICA9IGxvY2FsZTtcbm1vbWVudC5pbnZhbGlkICAgICAgICAgICAgICAgPSBpbnZhbGlkO1xubW9tZW50LmR1cmF0aW9uICAgICAgICAgICAgICA9IGR1cmF0aW9uO1xubW9tZW50LmlzTW9tZW50ICAgICAgICAgICAgICA9IGlzTW9tZW50O1xubW9tZW50LndlZWtkYXlzICAgICAgICAgICAgICA9IHdlZWtkYXlzO1xubW9tZW50LnBhcnNlWm9uZSAgICAgICAgICAgICA9IHBhcnNlWm9uZTtcbm1vbWVudC5sb2NhbGVEYXRhICAgICAgICAgICAgPSBsb2NhbGVEYXRhO1xubW9tZW50LmlzRHVyYXRpb24gICAgICAgICAgICA9IGlzRHVyYXRpb247XG5tb21lbnQubW9udGhzU2hvcnQgICAgICAgICAgID0gbW9udGhzU2hvcnQ7XG5tb21lbnQud2Vla2RheXNNaW4gICAgICAgICAgID0gd2Vla2RheXNNaW47XG5tb21lbnQuZGVmaW5lTG9jYWxlICAgICAgICAgID0gZGVmaW5lTG9jYWxlO1xubW9tZW50LnVwZGF0ZUxvY2FsZSAgICAgICAgICA9IHVwZGF0ZUxvY2FsZTtcbm1vbWVudC5sb2NhbGVzICAgICAgICAgICAgICAgPSBsb2NhbGVzO1xubW9tZW50LndlZWtkYXlzU2hvcnQgICAgICAgICA9IHdlZWtkYXlzU2hvcnQ7XG5tb21lbnQubm9ybWFsaXplVW5pdHMgICAgICAgID0gbm9ybWFsaXplVW5pdHM7XG5tb21lbnQucmVsYXRpdmVUaW1lUm91bmRpbmcgPSByZWxhdGl2ZVRpbWVSb3VuZGluZztcbm1vbWVudC5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSByZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XG5tb21lbnQuY2FsZW5kYXJGb3JtYXQgICAgICAgID0gZ2V0Q2FsZW5kYXJGb3JtYXQ7XG5tb21lbnQucHJvdG90eXBlICAgICAgICAgICAgID0gZm47XG5cbmV4cG9ydCBkZWZhdWx0IG1vbWVudDtcbiIsImltcG9ydCBQaWNrZXIgZnJvbSAnLi9QaWNrZXInXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuY29uc3QgY3JlYXRlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaG91ciA9IFtdXG4gIGNvbnN0IG1vbWVudCA9IFtdXG4gIGxldCBpID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGlmIChpIDwgMTApIHtcbiAgICAgIGhvdXIucHVzaCgnMCcgKyBpKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhvdXIucHVzaChpICsgJycpXG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgaWYgKGkgPCAxMCkge1xuICAgICAgbW9tZW50LnB1c2goJzAnICsgaSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtb21lbnQucHVzaChpICsgJycpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtob3VyLCBtb21lbnRdXG59XG5cbmNvbnN0IGlucHV0RGF0YSA9IGNyZWF0ZURhdGEoKVxuXG5jb25zdCBnZXREZWZhdWx0SW5kZXhzID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgY29uc3QgaG91ciA9IHRpbWUuZm9ybWF0KCdISCcpXG4gIGNvbnN0IG1vbWVudCA9IHRpbWUuZm9ybWF0KCdtbScpXG4gIGNvbnN0IHJlc3VsdCA9IFswLCAwXVxuICBsZXQgaSA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGlucHV0RGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChob3VyID09PSBpbnB1dERhdGFbMF1baV0pIHtcbiAgICAgIHJlc3VsdFswXSA9IGlcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGlucHV0RGF0YVsxXS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtb21lbnQgPT09IGlucHV0RGF0YVsxXVtpXSkge1xuICAgICAgcmVzdWx0WzFdID0gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZm9ybWF0ZVJlc3VsdCA9IGZ1bmN0aW9uIChkYXRhLCBpbmRleHMpIHtcbiAgY29uc3QgaG91ciA9IGRhdGFbMF1baW5kZXhzWzBdXVxuICBjb25zdCBtb21lbnQgPSBkYXRhWzFdW2luZGV4c1sxXV1cbiAgcmV0dXJuIGhvdXIgKyAnOicgKyBtb21lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmZpZ3MpIHtcbiAgY29uc3QgdGltZSA9IG1vbWVudChjb25maWdzLnZhbHVlIHx8IG5ldyBEYXRlKCksICdISDptbScpXG4gIGNvbnN0IHZhbHVlID0gZ2V0RGVmYXVsdEluZGV4cyh0aW1lKVxuICByZXR1cm4gbmV3IFBpY2tlcih7XG4gICAgZGF0YTogaW5wdXREYXRhLFxuICAgIGZvcm1hdGVSZXN1bHQ6IGZvcm1hdGVSZXN1bHQsXG4gICAgZGVmYXVsdEluZGV4czogdmFsdWUsXG4gICAgY29uZmlybUNhbGxiYWNrOiBjb25maWdzLmNvbmZpcm1DYWxsYmFjayxcbiAgICBzZW5kZXI6IGNvbmZpZ3Muc2VuZGVyXG4gIH0pXG59XG5cbiIsIi8qIVxuICogUGlrYWRheVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0IERhdmlkIEJ1c2hlbGwgfCBCU0QgJiBNSVQgbGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9kYnVzaGVsbC9QaWthZGF5XG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KVxue1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtb21lbnQ7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBDb21tb25KUyBtb2R1bGVcbiAgICAgICAgLy8gTG9hZCBtb21lbnQuanMgYXMgYW4gb3B0aW9uYWwgZGVwZW5kZW5jeVxuICAgICAgICB0cnkgeyBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KG1vbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKHJlcSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gTG9hZCBtb21lbnQuanMgYXMgYW4gb3B0aW9uYWwgZGVwZW5kZW5jeVxuICAgICAgICAgICAgdmFyIGlkID0gJ21vbWVudCc7XG4gICAgICAgICAgICB0cnkgeyBtb21lbnQgPSByZXEoaWQpOyB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkobW9tZW50KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5QaWthZGF5ID0gZmFjdG9yeShyb290Lm1vbWVudCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAobW9tZW50KVxue1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIGZlYXR1cmUgZGV0ZWN0aW9uIGFuZCBoZWxwZXIgZnVuY3Rpb25zXG4gICAgICovXG4gICAgdmFyIGhhc01vbWVudCA9IHR5cGVvZiBtb21lbnQgPT09ICdmdW5jdGlvbicsXG5cbiAgICBoYXNFdmVudExpc3RlbmVycyA9ICEhd2luZG93LmFkZEV2ZW50TGlzdGVuZXIsXG5cbiAgICBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCxcblxuICAgIHN0byA9IHdpbmRvdy5zZXRUaW1lb3V0LFxuXG4gICAgYWRkRXZlbnQgPSBmdW5jdGlvbihlbCwgZSwgY2FsbGJhY2ssIGNhcHR1cmUpXG4gICAge1xuICAgICAgICBpZiAoaGFzRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgY2FsbGJhY2ssICEhY2FwdHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oZWwsIGUsIGNhbGxiYWNrLCBjYXB0dXJlKVxuICAgIHtcbiAgICAgICAgaWYgKGhhc0V2ZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIGNhbGxiYWNrLCAhIWNhcHR1cmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaXJlRXZlbnQgPSBmdW5jdGlvbihlbCwgZXZlbnROYW1lLCBkYXRhKVxuICAgIHtcbiAgICAgICAgdmFyIGV2O1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgICAgICAgZXYuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgZXYgPSBleHRlbmQoZXYsIGRhdGEpO1xuICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldik7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICAgICAgICAgIGV2ID0gZXh0ZW5kKGV2LCBkYXRhKTtcbiAgICAgICAgICAgIGVsLmZpcmVFdmVudCgnb24nICsgZXZlbnROYW1lLCBldik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJpbSA9IGZ1bmN0aW9uKHN0cilcbiAgICB7XG4gICAgICAgIHJldHVybiBzdHIudHJpbSA/IHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywnJyk7XG4gICAgfSxcblxuICAgIGhhc0NsYXNzID0gZnVuY3Rpb24oZWwsIGNuKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICgnICcgKyBlbC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyAnICsgY24gKyAnICcpICE9PSAtMTtcbiAgICB9LFxuXG4gICAgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY24pXG4gICAge1xuICAgICAgICBpZiAoIWhhc0NsYXNzKGVsLCBjbikpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IChlbC5jbGFzc05hbWUgPT09ICcnKSA/IGNuIDogZWwuY2xhc3NOYW1lICsgJyAnICsgY247XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY24pXG4gICAge1xuICAgICAgICBlbC5jbGFzc05hbWUgPSB0cmltKCgnICcgKyBlbC5jbGFzc05hbWUgKyAnICcpLnJlcGxhY2UoJyAnICsgY24gKyAnICcsICcgJykpO1xuICAgIH0sXG5cbiAgICBpc0FycmF5ID0gZnVuY3Rpb24ob2JqKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICgvQXJyYXkvKS50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKTtcbiAgICB9LFxuXG4gICAgaXNEYXRlID0gZnVuY3Rpb24ob2JqKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICgvRGF0ZS8pLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpICYmICFpc05hTihvYmouZ2V0VGltZSgpKTtcbiAgICB9LFxuXG4gICAgaXNXZWVrZW5kID0gZnVuY3Rpb24oZGF0ZSlcbiAgICB7XG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgICByZXR1cm4gZGF5ID09PSAwIHx8IGRheSA9PT0gNjtcbiAgICB9LFxuXG4gICAgaXNMZWFwWWVhciA9IGZ1bmN0aW9uKHllYXIpXG4gICAge1xuICAgICAgICAvLyBzb2x1dGlvbiBieSBNYXR0aSBWaXJra3VuZW46IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4ODE5NTFcbiAgICAgICAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMDtcbiAgICB9LFxuXG4gICAgZ2V0RGF5c0luTW9udGggPSBmdW5jdGlvbih5ZWFyLCBtb250aClcbiAgICB7XG4gICAgICAgIHJldHVybiBbMzEsIGlzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9udGhdO1xuICAgIH0sXG5cbiAgICBzZXRUb1N0YXJ0T2ZEYXkgPSBmdW5jdGlvbihkYXRlKVxuICAgIHtcbiAgICAgICAgaWYgKGlzRGF0ZShkYXRlKSkgZGF0ZS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICB9LFxuXG4gICAgY29tcGFyZURhdGVzID0gZnVuY3Rpb24oYSxiKVxuICAgIHtcbiAgICAgICAgLy8gd2VhayBkYXRlIGNvbXBhcmlzb24gKHVzZSBzZXRUb1N0YXJ0T2ZEYXkoZGF0ZSkgdG8gZW5zdXJlIGNvcnJlY3QgcmVzdWx0KVxuICAgICAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICAgIH0sXG5cbiAgICBleHRlbmQgPSBmdW5jdGlvbih0bywgZnJvbSwgb3ZlcndyaXRlKVxuICAgIHtcbiAgICAgICAgdmFyIHByb3AsIGhhc1Byb3A7XG4gICAgICAgIGZvciAocHJvcCBpbiBmcm9tKSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gdG9bcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wICYmIHR5cGVvZiBmcm9tW3Byb3BdID09PSAnb2JqZWN0JyAmJiBmcm9tW3Byb3BdICE9PSBudWxsICYmIGZyb21bcHJvcF0ubm9kZU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0RhdGUoZnJvbVtwcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9bcHJvcF0gPSBuZXcgRGF0ZShmcm9tW3Byb3BdLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShmcm9tW3Byb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b1twcm9wXSA9IGZyb21bcHJvcF0uc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b1twcm9wXSA9IGV4dGVuZCh7fSwgZnJvbVtwcm9wXSwgb3ZlcndyaXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJ3cml0ZSB8fCAhaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gZnJvbVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgfSxcblxuICAgIGFkanVzdENhbGVuZGFyID0gZnVuY3Rpb24oY2FsZW5kYXIpIHtcbiAgICAgICAgaWYgKGNhbGVuZGFyLm1vbnRoIDwgMCkge1xuICAgICAgICAgICAgY2FsZW5kYXIueWVhciAtPSBNYXRoLmNlaWwoTWF0aC5hYnMoY2FsZW5kYXIubW9udGgpLzEyKTtcbiAgICAgICAgICAgIGNhbGVuZGFyLm1vbnRoICs9IDEyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxlbmRhci5tb250aCA+IDExKSB7XG4gICAgICAgICAgICBjYWxlbmRhci55ZWFyICs9IE1hdGguZmxvb3IoTWF0aC5hYnMoY2FsZW5kYXIubW9udGgpLzEyKTtcbiAgICAgICAgICAgIGNhbGVuZGFyLm1vbnRoIC09IDEyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxlbmRhcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZGVmYXVsdHMgYW5kIGxvY2FsaXNhdGlvblxuICAgICAqL1xuICAgIGRlZmF1bHRzID0ge1xuXG4gICAgICAgIC8vIGJpbmQgdGhlIHBpY2tlciB0byBhIGZvcm0gZmllbGRcbiAgICAgICAgZmllbGQ6IG51bGwsXG5cbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBzaG93L2hpZGUgdGhlIHBpY2tlciBvbiBgZmllbGRgIGZvY3VzIChkZWZhdWx0IGB0cnVlYCBpZiBgZmllbGRgIGlzIHNldClcbiAgICAgICAgYm91bmQ6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyBwb3NpdGlvbiBvZiB0aGUgZGF0ZXBpY2tlciwgcmVsYXRpdmUgdG8gdGhlIGZpZWxkIChkZWZhdWx0IHRvIGJvdHRvbSAmIGxlZnQpXG4gICAgICAgIC8vICgnYm90dG9tJyAmICdsZWZ0JyBrZXl3b3JkcyBhcmUgbm90IHVzZWQsICd0b3AnICYgJ3JpZ2h0JyBhcmUgbW9kaWZpZXIgb24gdGhlIGJvdHRvbS9sZWZ0IHBvc2l0aW9uKVxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcblxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGZpdCBpbiB0aGUgdmlld3BvcnQgZXZlbiBpZiBpdCBtZWFucyByZXBvc2l0aW9uaW5nIGZyb20gdGhlIHBvc2l0aW9uIG9wdGlvblxuICAgICAgICByZXBvc2l0aW9uOiB0cnVlLFxuXG4gICAgICAgIC8vIHRoZSBkZWZhdWx0IG91dHB1dCBmb3JtYXQgZm9yIGAudG9TdHJpbmcoKWAgYW5kIGBmaWVsZGAgdmFsdWVcbiAgICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG5cbiAgICAgICAgLy8gdGhlIGluaXRpYWwgZGF0ZSB0byB2aWV3IHdoZW4gZmlyc3Qgb3BlbmVkXG4gICAgICAgIGRlZmF1bHREYXRlOiBudWxsLFxuXG4gICAgICAgIC8vIG1ha2UgdGhlIGBkZWZhdWx0RGF0ZWAgdGhlIGluaXRpYWwgc2VsZWN0ZWQgdmFsdWVcbiAgICAgICAgc2V0RGVmYXVsdERhdGU6IGZhbHNlLFxuXG4gICAgICAgIC8vIGZpcnN0IGRheSBvZiB3ZWVrICgwOiBTdW5kYXksIDE6IE1vbmRheSBldGMpXG4gICAgICAgIGZpcnN0RGF5OiAwLFxuXG4gICAgICAgIC8vIHRoZSBkZWZhdWx0IGZsYWcgZm9yIG1vbWVudCdzIHN0cmljdCBkYXRlIHBhcnNpbmdcbiAgICAgICAgZm9ybWF0U3RyaWN0OiBmYWxzZSxcblxuICAgICAgICAvLyB0aGUgbWluaW11bS9lYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkXG4gICAgICAgIG1pbkRhdGU6IG51bGwsXG4gICAgICAgIC8vIHRoZSBtYXhpbXVtL2xhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkXG4gICAgICAgIG1heERhdGU6IG51bGwsXG5cbiAgICAgICAgLy8gbnVtYmVyIG9mIHllYXJzIGVpdGhlciBzaWRlLCBvciBhcnJheSBvZiB1cHBlci9sb3dlciByYW5nZVxuICAgICAgICB5ZWFyUmFuZ2U6IDEwLFxuXG4gICAgICAgIC8vIHNob3cgd2VlayBudW1iZXJzIGF0IGhlYWQgb2Ygcm93XG4gICAgICAgIHNob3dXZWVrTnVtYmVyOiBmYWxzZSxcblxuICAgICAgICAvLyB1c2VkIGludGVybmFsbHkgKGRvbid0IGNvbmZpZyBvdXRzaWRlKVxuICAgICAgICBtaW5ZZWFyOiAwLFxuICAgICAgICBtYXhZZWFyOiA5OTk5LFxuICAgICAgICBtaW5Nb250aDogdW5kZWZpbmVkLFxuICAgICAgICBtYXhNb250aDogdW5kZWZpbmVkLFxuXG4gICAgICAgIHN0YXJ0UmFuZ2U6IG51bGwsXG4gICAgICAgIGVuZFJhbmdlOiBudWxsLFxuXG4gICAgICAgIGlzUlRMOiBmYWxzZSxcblxuICAgICAgICAvLyBBZGRpdGlvbmFsIHRleHQgdG8gYXBwZW5kIHRvIHRoZSB5ZWFyIGluIHRoZSBjYWxlbmRhciB0aXRsZVxuICAgICAgICB5ZWFyU3VmZml4OiAnJyxcblxuICAgICAgICAvLyBSZW5kZXIgdGhlIG1vbnRoIGFmdGVyIHllYXIgaW4gdGhlIGNhbGVuZGFyIHRpdGxlXG4gICAgICAgIHNob3dNb250aEFmdGVyWWVhcjogZmFsc2UsXG5cbiAgICAgICAgLy8gUmVuZGVyIGRheXMgb2YgdGhlIGNhbGVuZGFyIGdyaWQgdGhhdCBmYWxsIGluIHRoZSBuZXh0IG9yIHByZXZpb3VzIG1vbnRoXG4gICAgICAgIHNob3dEYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHM6IGZhbHNlLFxuXG4gICAgICAgIC8vIGhvdyBtYW55IG1vbnRocyBhcmUgdmlzaWJsZVxuICAgICAgICBudW1iZXJPZk1vbnRoczogMSxcblxuICAgICAgICAvLyB3aGVuIG51bWJlck9mTW9udGhzIGlzIHVzZWQsIHRoaXMgd2lsbCBoZWxwIHlvdSB0byBjaG9vc2Ugd2hlcmUgdGhlIG1haW4gY2FsZW5kYXIgd2lsbCBiZSAoZGVmYXVsdCBgbGVmdGAsIGNhbiBiZSBzZXQgdG8gYHJpZ2h0YClcbiAgICAgICAgLy8gb25seSB1c2VkIGZvciB0aGUgZmlyc3QgZGlzcGxheSBvciB3aGVuIGEgc2VsZWN0ZWQgZGF0ZSBpcyBub3QgdmlzaWJsZVxuICAgICAgICBtYWluQ2FsZW5kYXI6ICdsZWZ0JyxcblxuICAgICAgICAvLyBTcGVjaWZ5IGEgRE9NIGVsZW1lbnQgdG8gcmVuZGVyIHRoZSBjYWxlbmRhciBpblxuICAgICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcblxuICAgICAgICAvLyBpbnRlcm5hdGlvbmFsaXphdGlvblxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICBwcmV2aW91c01vbnRoIDogJ1ByZXZpb3VzIE1vbnRoJyxcbiAgICAgICAgICAgIG5leHRNb250aCAgICAgOiAnTmV4dCBNb250aCcsXG4gICAgICAgICAgICBtb250aHMgICAgICAgIDogWydKYW51YXJ5JywnRmVicnVhcnknLCdNYXJjaCcsJ0FwcmlsJywnTWF5JywnSnVuZScsJ0p1bHknLCdBdWd1c3QnLCdTZXB0ZW1iZXInLCdPY3RvYmVyJywnTm92ZW1iZXInLCdEZWNlbWJlciddLFxuICAgICAgICAgICAgd2Vla2RheXMgICAgICA6IFsnU3VuZGF5JywnTW9uZGF5JywnVHVlc2RheScsJ1dlZG5lc2RheScsJ1RodXJzZGF5JywnRnJpZGF5JywnU2F0dXJkYXknXSxcbiAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQgOiBbJ1N1bicsJ01vbicsJ1R1ZScsJ1dlZCcsJ1RodScsJ0ZyaScsJ1NhdCddXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhlbWUgQ2xhc3NuYW1lXG4gICAgICAgIHRoZW1lOiBudWxsLFxuXG4gICAgICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgIG9uU2VsZWN0OiBudWxsLFxuICAgICAgICBvbk9wZW46IG51bGwsXG4gICAgICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgICAgIG9uRHJhdzogbnVsbFxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIHRlbXBsYXRpbmcgZnVuY3Rpb25zIHRvIGFic3RyYWN0IEhUTUwgcmVuZGVyaW5nXG4gICAgICovXG4gICAgcmVuZGVyRGF5TmFtZSA9IGZ1bmN0aW9uKG9wdHMsIGRheSwgYWJicilcbiAgICB7XG4gICAgICAgIGRheSArPSBvcHRzLmZpcnN0RGF5O1xuICAgICAgICB3aGlsZSAoZGF5ID49IDcpIHtcbiAgICAgICAgICAgIGRheSAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhYmJyID8gb3B0cy5pMThuLndlZWtkYXlzU2hvcnRbZGF5XSA6IG9wdHMuaTE4bi53ZWVrZGF5c1tkYXldO1xuICAgIH0sXG5cbiAgICByZW5kZXJEYXkgPSBmdW5jdGlvbihvcHRzKVxuICAgIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICB2YXIgYXJpYVNlbGVjdGVkID0gJ2ZhbHNlJztcbiAgICAgICAgaWYgKG9wdHMuaXNFbXB0eSkge1xuICAgICAgICAgICAgaWYgKG9wdHMuc2hvd0RheXNJbk5leHRBbmRQcmV2aW91c01vbnRocykge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKCdpcy1vdXRzaWRlLWN1cnJlbnQtbW9udGgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8dGQgY2xhc3M9XCJpcy1lbXB0eVwiPjwvdGQ+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc1RvZGF5KSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtdG9kYXknKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGFyaWFTZWxlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc0luUmFuZ2UpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCdpcy1pbnJhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNTdGFydFJhbmdlKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtc3RhcnRyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzRW5kUmFuZ2UpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKCdpcy1lbmRyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPHRkIGRhdGEtZGF5PVwiJyArIG9wdHMuZGF5ICsgJ1wiIGNsYXNzPVwiJyArIGFyci5qb2luKCcgJykgKyAnXCIgYXJpYS1zZWxlY3RlZD1cIicgKyBhcmlhU2VsZWN0ZWQgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwicGlrYS1idXR0b24gcGlrYS1kYXlcIiB0eXBlPVwiYnV0dG9uXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICdkYXRhLXBpa2EteWVhcj1cIicgKyBvcHRzLnllYXIgKyAnXCIgZGF0YS1waWthLW1vbnRoPVwiJyArIG9wdHMubW9udGggKyAnXCIgZGF0YS1waWthLWRheT1cIicgKyBvcHRzLmRheSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuZGF5ICtcbiAgICAgICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgJzwvdGQ+JztcbiAgICB9LFxuXG4gICAgcmVuZGVyV2VlayA9IGZ1bmN0aW9uIChkLCBtLCB5KSB7XG4gICAgICAgIC8vIExpZnRlZCBmcm9tIGh0dHA6Ly9qYXZhc2NyaXB0LmFib3V0LmNvbS9saWJyYXJ5L2Jsd2Vla3llYXIuaHRtLCBsaWdodGx5IG1vZGlmaWVkLlxuICAgICAgICB2YXIgb25lamFuID0gbmV3IERhdGUoeSwgMCwgMSksXG4gICAgICAgICAgICB3ZWVrTnVtID0gTWF0aC5jZWlsKCgoKG5ldyBEYXRlKHksIG0sIGQpIC0gb25lamFuKSAvIDg2NDAwMDAwKSArIG9uZWphbi5nZXREYXkoKSsxKS83KTtcbiAgICAgICAgcmV0dXJuICc8dGQgY2xhc3M9XCJwaWthLXdlZWtcIj4nICsgd2Vla051bSArICc8L3RkPic7XG4gICAgfSxcblxuICAgIHJlbmRlclJvdyA9IGZ1bmN0aW9uKGRheXMsIGlzUlRMKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICc8dHI+JyArIChpc1JUTCA/IGRheXMucmV2ZXJzZSgpIDogZGF5cykuam9pbignJykgKyAnPC90cj4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJCb2R5ID0gZnVuY3Rpb24ocm93cylcbiAgICB7XG4gICAgICAgIHJldHVybiAnPHRib2R5PicgKyByb3dzLmpvaW4oJycpICsgJzwvdGJvZHk+JztcbiAgICB9LFxuXG4gICAgcmVuZGVySGVhZCA9IGZ1bmN0aW9uKG9wdHMpXG4gICAge1xuICAgICAgICB2YXIgaSwgYXJyID0gW107XG4gICAgICAgIGlmIChvcHRzLnNob3dXZWVrTnVtYmVyKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnPHRoPjwvdGg+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goJzx0aCBzY29wZT1cImNvbFwiPjxhYmJyIHRpdGxlPVwiJyArIHJlbmRlckRheU5hbWUob3B0cywgaSkgKyAnXCI+JyArIHJlbmRlckRheU5hbWUob3B0cywgaSwgdHJ1ZSkgKyAnPC9hYmJyPjwvdGg+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICc8dGhlYWQ+PHRyPicgKyAob3B0cy5pc1JUTCA/IGFyci5yZXZlcnNlKCkgOiBhcnIpLmpvaW4oJycpICsgJzwvdHI+PC90aGVhZD4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJUaXRsZSA9IGZ1bmN0aW9uKGluc3RhbmNlLCBjLCB5ZWFyLCBtb250aCwgcmVmWWVhciwgcmFuZElkKVxuICAgIHtcbiAgICAgICAgdmFyIGksIGosIGFycixcbiAgICAgICAgICAgIG9wdHMgPSBpbnN0YW5jZS5fbyxcbiAgICAgICAgICAgIGlzTWluWWVhciA9IHllYXIgPT09IG9wdHMubWluWWVhcixcbiAgICAgICAgICAgIGlzTWF4WWVhciA9IHllYXIgPT09IG9wdHMubWF4WWVhcixcbiAgICAgICAgICAgIGh0bWwgPSAnPGRpdiBpZD1cIicgKyByYW5kSWQgKyAnXCIgY2xhc3M9XCJwaWthLXRpdGxlXCIgcm9sZT1cImhlYWRpbmdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIj4nLFxuICAgICAgICAgICAgbW9udGhIdG1sLFxuICAgICAgICAgICAgeWVhckh0bWwsXG4gICAgICAgICAgICBwcmV2ID0gdHJ1ZSxcbiAgICAgICAgICAgIG5leHQgPSB0cnVlO1xuXG4gICAgICAgIGZvciAoYXJyID0gW10sIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goJzxvcHRpb24gdmFsdWU9XCInICsgKHllYXIgPT09IHJlZlllYXIgPyBpIC0gYyA6IDEyICsgaSAtIGMpICsgJ1wiJyArXG4gICAgICAgICAgICAgICAgKGkgPT09IG1vbnRoID8gJyBzZWxlY3RlZD1cInNlbGVjdGVkXCInOiAnJykgK1xuICAgICAgICAgICAgICAgICgoaXNNaW5ZZWFyICYmIGkgPCBvcHRzLm1pbk1vbnRoKSB8fCAoaXNNYXhZZWFyICYmIGkgPiBvcHRzLm1heE1vbnRoKSA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJycpICsgJz4nICtcbiAgICAgICAgICAgICAgICBvcHRzLmkxOG4ubW9udGhzW2ldICsgJzwvb3B0aW9uPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9udGhIdG1sID0gJzxkaXYgY2xhc3M9XCJwaWthLWxhYmVsXCI+JyArIG9wdHMuaTE4bi5tb250aHNbbW9udGhdICsgJzxzZWxlY3QgY2xhc3M9XCJwaWthLXNlbGVjdCBwaWthLXNlbGVjdC1tb250aFwiIHRhYmluZGV4PVwiLTFcIj4nICsgYXJyLmpvaW4oJycpICsgJzwvc2VsZWN0PjwvZGl2Pic7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob3B0cy55ZWFyUmFuZ2UpKSB7XG4gICAgICAgICAgICBpID0gb3B0cy55ZWFyUmFuZ2VbMF07XG4gICAgICAgICAgICBqID0gb3B0cy55ZWFyUmFuZ2VbMV0gKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSA9IHllYXIgLSBvcHRzLnllYXJSYW5nZTtcbiAgICAgICAgICAgIGogPSAxICsgeWVhciArIG9wdHMueWVhclJhbmdlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChhcnIgPSBbXTsgaSA8IGogJiYgaSA8PSBvcHRzLm1heFllYXI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPj0gb3B0cy5taW5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIicgKyAoaSA9PT0geWVhciA/ICcgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJzogJycpICsgJz4nICsgKGkpICsgJzwvb3B0aW9uPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHllYXJIdG1sID0gJzxkaXYgY2xhc3M9XCJwaWthLWxhYmVsXCI+JyArIHllYXIgKyBvcHRzLnllYXJTdWZmaXggKyAnPHNlbGVjdCBjbGFzcz1cInBpa2Etc2VsZWN0IHBpa2Etc2VsZWN0LXllYXJcIiB0YWJpbmRleD1cIi0xXCI+JyArIGFyci5qb2luKCcnKSArICc8L3NlbGVjdD48L2Rpdj4nO1xuXG4gICAgICAgIGlmIChvcHRzLnNob3dNb250aEFmdGVyWWVhcikge1xuICAgICAgICAgICAgaHRtbCArPSB5ZWFySHRtbCArIG1vbnRoSHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgKz0gbW9udGhIdG1sICsgeWVhckh0bWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNaW5ZZWFyICYmIChtb250aCA9PT0gMCB8fCBvcHRzLm1pbk1vbnRoID49IG1vbnRoKSkge1xuICAgICAgICAgICAgcHJldiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTWF4WWVhciAmJiAobW9udGggPT09IDExIHx8IG9wdHMubWF4TW9udGggPD0gbW9udGgpKSB7XG4gICAgICAgICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgICAgICAgaHRtbCArPSAnPGJ1dHRvbiBjbGFzcz1cInBpa2EtcHJldicgKyAocHJldiA/ICcnIDogJyBpcy1kaXNhYmxlZCcpICsgJ1wiIHR5cGU9XCJidXR0b25cIj4nICsgb3B0cy5pMThuLnByZXZpb3VzTW9udGggKyAnPC9idXR0b24+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA9PT0gKGluc3RhbmNlLl9vLm51bWJlck9mTW9udGhzIC0gMSkgKSB7XG4gICAgICAgICAgICBodG1sICs9ICc8YnV0dG9uIGNsYXNzPVwicGlrYS1uZXh0JyArIChuZXh0ID8gJycgOiAnIGlzLWRpc2FibGVkJykgKyAnXCIgdHlwZT1cImJ1dHRvblwiPicgKyBvcHRzLmkxOG4ubmV4dE1vbnRoICsgJzwvYnV0dG9uPic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbCArPSAnPC9kaXY+JztcbiAgICB9LFxuXG4gICAgcmVuZGVyVGFibGUgPSBmdW5jdGlvbihvcHRzLCBkYXRhLCByYW5kSWQpXG4gICAge1xuICAgICAgICByZXR1cm4gJzx0YWJsZSBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjbGFzcz1cInBpa2EtdGFibGVcIiByb2xlPVwiZ3JpZFwiIGFyaWEtbGFiZWxsZWRieT1cIicgKyByYW5kSWQgKyAnXCI+JyArIHJlbmRlckhlYWQob3B0cykgKyByZW5kZXJCb2R5KGRhdGEpICsgJzwvdGFibGU+JztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBQaWthZGF5IGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgUGlrYWRheSA9IGZ1bmN0aW9uKG9wdGlvbnMpXG4gICAge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBvcHRzID0gc2VsZi5jb25maWcob3B0aW9ucyk7XG5cbiAgICAgICAgc2VsZi5fb25Nb3VzZURvd24gPSBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuX3YpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzQ2xhc3ModGFyZ2V0LCAnaXMtZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyh0YXJnZXQsICdwaWthLWJ1dHRvbicpICYmICFoYXNDbGFzcyh0YXJnZXQsICdpcy1lbXB0eScpICYmICFoYXNDbGFzcyh0YXJnZXQucGFyZW50Tm9kZSwgJ2lzLWRpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXREYXRlKG5ldyBEYXRlKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGlrYS15ZWFyJyksIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGlrYS1tb250aCcpLCB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBpa2EtZGF5JykpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuYm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0byhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5maWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmZpZWxkLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhhc0NsYXNzKHRhcmdldCwgJ3Bpa2EtcHJldicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJldk1vbnRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhhc0NsYXNzKHRhcmdldCwgJ3Bpa2EtbmV4dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubmV4dE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNDbGFzcyh0YXJnZXQsICdwaWthLXNlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyB0b3VjaCBldmVudCBwcmV2ZW50IG1vdXNlIGV2ZW50cyBlbXVsYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLl9vbkNoYW5nZSA9IGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNDbGFzcyh0YXJnZXQsICdwaWthLXNlbGVjdC1tb250aCcpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nb3RvTW9udGgodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc0NsYXNzKHRhcmdldCwgJ3Bpa2Etc2VsZWN0LXllYXInKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ290b1llYXIodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLl9vbktleUNoYW5nZSA9IGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgICAgICAgaWYgKHNlbGYuaXNWaXNpYmxlKCkpIHtcblxuICAgICAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5maWVsZC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRqdXN0RGF0ZSgnc3VidHJhY3QnLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGp1c3REYXRlKCdzdWJ0cmFjdCcsIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkanVzdERhdGUoJ2FkZCcsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkanVzdERhdGUoJ2FkZCcsIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuX29uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZGF0ZTtcblxuICAgICAgICAgICAgaWYgKGUuZmlyZWRCeSA9PT0gc2VsZikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNNb21lbnQpIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gbW9tZW50KG9wdHMuZmllbGQudmFsdWUsIG9wdHMuZm9ybWF0LCBvcHRzLmZvcm1hdFN0cmljdCk7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IChkYXRlICYmIGRhdGUuaXNWYWxpZCgpKSA/IGRhdGUudG9EYXRlKCkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2Uob3B0cy5maWVsZC52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZShkYXRlKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuX3YpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLl9vbklucHV0Rm9jdXMgPSBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGYuc2hvdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuX29uSW5wdXRDbGljayA9IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZi5zaG93KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5fb25JbnB1dEJsdXIgPSBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIElFIGFsbG93cyBwaWthIGRpdiB0byBnYWluIGZvY3VzOyBjYXRjaCBibHVyIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICAgICAgdmFyIHBFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHBFbCwgJ3Bpa2Etc2luZ2xlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICgocEVsID0gcEVsLnBhcmVudE5vZGUpKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLl9jKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fYiA9IHN0byhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5fYyA9IGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuX29uQ2xpY2sgPSBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LFxuICAgICAgICAgICAgICAgIHBFbCA9IHRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNFdmVudExpc3RlbmVycyAmJiBoYXNDbGFzcyh0YXJnZXQsICdwaWthLXNlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQub25jaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnb25jaGFuZ2UnLCAncmV0dXJuOycpO1xuICAgICAgICAgICAgICAgICAgICBhZGRFdmVudCh0YXJnZXQsICdjaGFuZ2UnLCBzZWxmLl9vbkNoYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhwRWwsICdwaWthLXNpbmdsZScpIHx8IHBFbCA9PT0gb3B0cy50cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoKHBFbCA9IHBFbC5wYXJlbnROb2RlKSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5fdiAmJiB0YXJnZXQgIT09IG9wdHMudHJpZ2dlciAmJiBwRWwgIT09IG9wdHMudHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VsZi5lbC5jbGFzc05hbWUgPSAncGlrYS1zaW5nbGUnICsgKG9wdHMuaXNSVEwgPyAnIGlzLXJ0bCcgOiAnJykgKyAob3B0cy50aGVtZSA/ICcgJyArIG9wdHMudGhlbWUgOiAnJyk7XG5cbiAgICAgICAgYWRkRXZlbnQoc2VsZi5lbCwgJ21vdXNlZG93bicsIHNlbGYuX29uTW91c2VEb3duLCB0cnVlKTtcbiAgICAgICAgYWRkRXZlbnQoc2VsZi5lbCwgJ3RvdWNoZW5kJywgc2VsZi5fb25Nb3VzZURvd24sIHRydWUpO1xuICAgICAgICBhZGRFdmVudChzZWxmLmVsLCAnY2hhbmdlJywgc2VsZi5fb25DaGFuZ2UpO1xuICAgICAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBzZWxmLl9vbktleUNoYW5nZSk7XG5cbiAgICAgICAgaWYgKG9wdHMuZmllbGQpIHtcbiAgICAgICAgICAgIGlmIChvcHRzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIG9wdHMuY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuZWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRzLmJvdW5kKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxmLmVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0cy5maWVsZC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmVsLCBvcHRzLmZpZWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZEV2ZW50KG9wdHMuZmllbGQsICdjaGFuZ2UnLCBzZWxmLl9vbklucHV0Q2hhbmdlKTtcblxuICAgICAgICAgICAgaWYgKCFvcHRzLmRlZmF1bHREYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc01vbWVudCAmJiBvcHRzLmZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMuZGVmYXVsdERhdGUgPSBtb21lbnQob3B0cy5maWVsZC52YWx1ZSwgb3B0cy5mb3JtYXQpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMuZGVmYXVsdERhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKG9wdHMuZmllbGQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0cy5zZXREZWZhdWx0RGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVmRGF0ZSA9IG9wdHMuZGVmYXVsdERhdGU7XG5cbiAgICAgICAgaWYgKGlzRGF0ZShkZWZEYXRlKSkge1xuICAgICAgICAgICAgaWYgKG9wdHMuc2V0RGVmYXVsdERhdGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGUoZGVmRGF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuZ290b0RhdGUoZGVmRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmdvdG9EYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdHMuYm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgc2VsZi5lbC5jbGFzc05hbWUgKz0gJyBpcy1ib3VuZCc7XG4gICAgICAgICAgICBhZGRFdmVudChvcHRzLnRyaWdnZXIsICdjbGljaycsIHNlbGYuX29uSW5wdXRDbGljayk7XG4gICAgICAgICAgICBhZGRFdmVudChvcHRzLnRyaWdnZXIsICdmb2N1cycsIHNlbGYuX29uSW5wdXRGb2N1cyk7XG4gICAgICAgICAgICBhZGRFdmVudChvcHRzLnRyaWdnZXIsICdibHVyJywgc2VsZi5fb25JbnB1dEJsdXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBwdWJsaWMgUGlrYWRheSBBUElcbiAgICAgKi9cbiAgICBQaWthZGF5LnByb3RvdHlwZSA9IHtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjb25maWd1cmUgZnVuY3Rpb25hbGl0eVxuICAgICAgICAgKi9cbiAgICAgICAgY29uZmlnOiBmdW5jdGlvbihvcHRpb25zKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX28pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vID0gZXh0ZW5kKHt9LCBkZWZhdWx0cywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvcHRzID0gZXh0ZW5kKHRoaXMuX28sIG9wdGlvbnMsIHRydWUpO1xuXG4gICAgICAgICAgICBvcHRzLmlzUlRMID0gISFvcHRzLmlzUlRMO1xuXG4gICAgICAgICAgICBvcHRzLmZpZWxkID0gKG9wdHMuZmllbGQgJiYgb3B0cy5maWVsZC5ub2RlTmFtZSkgPyBvcHRzLmZpZWxkIDogbnVsbDtcblxuICAgICAgICAgICAgb3B0cy50aGVtZSA9ICh0eXBlb2Ygb3B0cy50aGVtZSkgPT09ICdzdHJpbmcnICYmIG9wdHMudGhlbWUgPyBvcHRzLnRoZW1lIDogbnVsbDtcblxuICAgICAgICAgICAgb3B0cy5ib3VuZCA9ICEhKG9wdHMuYm91bmQgIT09IHVuZGVmaW5lZCA/IG9wdHMuZmllbGQgJiYgb3B0cy5ib3VuZCA6IG9wdHMuZmllbGQpO1xuXG4gICAgICAgICAgICBvcHRzLnRyaWdnZXIgPSAob3B0cy50cmlnZ2VyICYmIG9wdHMudHJpZ2dlci5ub2RlTmFtZSkgPyBvcHRzLnRyaWdnZXIgOiBvcHRzLmZpZWxkO1xuXG4gICAgICAgICAgICBvcHRzLmRpc2FibGVXZWVrZW5kcyA9ICEhb3B0cy5kaXNhYmxlV2Vla2VuZHM7XG5cbiAgICAgICAgICAgIG9wdHMuZGlzYWJsZURheUZuID0gKHR5cGVvZiBvcHRzLmRpc2FibGVEYXlGbikgPT09ICdmdW5jdGlvbicgPyBvcHRzLmRpc2FibGVEYXlGbiA6IG51bGw7XG5cbiAgICAgICAgICAgIHZhciBub20gPSBwYXJzZUludChvcHRzLm51bWJlck9mTW9udGhzLCAxMCkgfHwgMTtcbiAgICAgICAgICAgIG9wdHMubnVtYmVyT2ZNb250aHMgPSBub20gPiA0ID8gNCA6IG5vbTtcblxuICAgICAgICAgICAgaWYgKCFpc0RhdGUob3B0cy5taW5EYXRlKSkge1xuICAgICAgICAgICAgICAgIG9wdHMubWluRGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0RhdGUob3B0cy5tYXhEYXRlKSkge1xuICAgICAgICAgICAgICAgIG9wdHMubWF4RGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChvcHRzLm1pbkRhdGUgJiYgb3B0cy5tYXhEYXRlKSAmJiBvcHRzLm1heERhdGUgPCBvcHRzLm1pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICBvcHRzLm1heERhdGUgPSBvcHRzLm1pbkRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRzLm1pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1pbkRhdGUob3B0cy5taW5EYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRzLm1heERhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1heERhdGUob3B0cy5tYXhEYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzQXJyYXkob3B0cy55ZWFyUmFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZhbGxiYWNrID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMTA7XG4gICAgICAgICAgICAgICAgb3B0cy55ZWFyUmFuZ2VbMF0gPSBwYXJzZUludChvcHRzLnllYXJSYW5nZVswXSwgMTApIHx8IGZhbGxiYWNrO1xuICAgICAgICAgICAgICAgIG9wdHMueWVhclJhbmdlWzFdID0gcGFyc2VJbnQob3B0cy55ZWFyUmFuZ2VbMV0sIDEwKSB8fCBmYWxsYmFjaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0cy55ZWFyUmFuZ2UgPSBNYXRoLmFicyhwYXJzZUludChvcHRzLnllYXJSYW5nZSwgMTApKSB8fCBkZWZhdWx0cy55ZWFyUmFuZ2U7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMueWVhclJhbmdlID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMueWVhclJhbmdlID0gMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJldHVybiBhIGZvcm1hdHRlZCBzdHJpbmcgb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uICh1c2luZyBNb21lbnQuanMgaWYgYXZhaWxhYmxlKVxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKGZvcm1hdClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICFpc0RhdGUodGhpcy5fZCkgPyAnJyA6IGhhc01vbWVudCA/IG1vbWVudCh0aGlzLl9kKS5mb3JtYXQoZm9ybWF0IHx8IHRoaXMuX28uZm9ybWF0KSA6IHRoaXMuX2QudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJldHVybiBhIE1vbWVudC5qcyBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIChpZiBhdmFpbGFibGUpXG4gICAgICAgICAqL1xuICAgICAgICBnZXRNb21lbnQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGhhc01vbWVudCA/IG1vbWVudCh0aGlzLl9kKSA6IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gZnJvbSBhIE1vbWVudC5qcyBvYmplY3QgKGlmIGF2YWlsYWJsZSlcbiAgICAgICAgICovXG4gICAgICAgIHNldE1vbWVudDogZnVuY3Rpb24oZGF0ZSwgcHJldmVudE9uU2VsZWN0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoaGFzTW9tZW50ICYmIG1vbWVudC5pc01vbWVudChkYXRlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZShkYXRlLnRvRGF0ZSgpLCBwcmV2ZW50T25TZWxlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZXR1cm4gYSBEYXRlIG9iamVjdCBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gd2l0aCBmYWxsYmFjayBmb3IgdGhlIGN1cnJlbnQgZGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RGF0ZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gaXNEYXRlKHRoaXMuX2QpID8gbmV3IERhdGUodGhpcy5fZC5nZXRUaW1lKCkpIDogbmV3IERhdGUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogc2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgc2V0RGF0ZTogZnVuY3Rpb24oZGF0ZSwgcHJldmVudE9uU2VsZWN0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vLmZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX28uZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KHRoaXMuX28uZmllbGQsICdjaGFuZ2UnLCB7IGZpcmVkQnk6IHRoaXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNEYXRlKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWluID0gdGhpcy5fby5taW5EYXRlLFxuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuX28ubWF4RGF0ZTtcblxuICAgICAgICAgICAgaWYgKGlzRGF0ZShtaW4pICYmIGRhdGUgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gbWluO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUobWF4KSAmJiBkYXRlID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG1heDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIHNldFRvU3RhcnRPZkRheSh0aGlzLl9kKTtcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUodGhpcy5fZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vLmZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5maWVsZC52YWx1ZSA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQodGhpcy5fby5maWVsZCwgJ2NoYW5nZScsIHsgZmlyZWRCeTogdGhpcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcHJldmVudE9uU2VsZWN0ICYmIHR5cGVvZiB0aGlzLl9vLm9uU2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5vblNlbGVjdC5jYWxsKHRoaXMsIHRoaXMuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hhbmdlIHZpZXcgdG8gYSBzcGVjaWZpYyBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICBnb3RvRGF0ZTogZnVuY3Rpb24oZGF0ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIG5ld0NhbGVuZGFyID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCFpc0RhdGUoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGVuZGFycykge1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdFZpc2libGVEYXRlID0gbmV3IERhdGUodGhpcy5jYWxlbmRhcnNbMF0ueWVhciwgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGgsIDEpLFxuICAgICAgICAgICAgICAgICAgICBsYXN0VmlzaWJsZURhdGUgPSBuZXcgRGF0ZSh0aGlzLmNhbGVuZGFyc1t0aGlzLmNhbGVuZGFycy5sZW5ndGgtMV0ueWVhciwgdGhpcy5jYWxlbmRhcnNbdGhpcy5jYWxlbmRhcnMubGVuZ3RoLTFdLm1vbnRoLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZURhdGUgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGVuZCBvZiB0aGUgbW9udGhcbiAgICAgICAgICAgICAgICBsYXN0VmlzaWJsZURhdGUuc2V0TW9udGgobGFzdFZpc2libGVEYXRlLmdldE1vbnRoKCkrMSk7XG4gICAgICAgICAgICAgICAgbGFzdFZpc2libGVEYXRlLnNldERhdGUobGFzdFZpc2libGVEYXRlLmdldERhdGUoKS0xKTtcbiAgICAgICAgICAgICAgICBuZXdDYWxlbmRhciA9ICh2aXNpYmxlRGF0ZSA8IGZpcnN0VmlzaWJsZURhdGUuZ2V0VGltZSgpIHx8IGxhc3RWaXNpYmxlRGF0ZS5nZXRUaW1lKCkgPCB2aXNpYmxlRGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdDYWxlbmRhcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX28ubWFpbkNhbGVuZGFyID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoICs9IDEgLSB0aGlzLl9vLm51bWJlck9mTW9udGhzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGp1c3REYXRlOiBmdW5jdGlvbihzaWduLCBkYXlzKSB7XG5cbiAgICAgICAgICAgIHZhciBkYXkgPSB0aGlzLmdldERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlID0gcGFyc2VJbnQoZGF5cykqMjQqNjAqNjAqMTAwMDtcblxuICAgICAgICAgICAgdmFyIG5ld0RheTtcblxuICAgICAgICAgICAgaWYgKHNpZ24gPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgbmV3RGF5ID0gbmV3IERhdGUoZGF5LnZhbHVlT2YoKSArIGRpZmZlcmVuY2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaWduID09PSAnc3VidHJhY3QnKSB7XG4gICAgICAgICAgICAgICAgbmV3RGF5ID0gbmV3IERhdGUoZGF5LnZhbHVlT2YoKSAtIGRpZmZlcmVuY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGFzTW9tZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpZ24gPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0RheSA9IG1vbWVudChkYXkpLmFkZChkYXlzLCBcImRheXNcIikudG9EYXRlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaWduID09PSAnc3VidHJhY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0RheSA9IG1vbWVudChkYXkpLnN1YnRyYWN0KGRheXMsIFwiZGF5c1wiKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZShuZXdEYXkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkanVzdENhbGVuZGFyczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXSA9IGFkanVzdENhbGVuZGFyKHRoaXMuY2FsZW5kYXJzWzBdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAxOyBjIDwgdGhpcy5fby5udW1iZXJPZk1vbnRoczsgYysrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbY10gPSBhZGp1c3RDYWxlbmRhcih7XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLmNhbGVuZGFyc1swXS5tb250aCArIGMsXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IHRoaXMuY2FsZW5kYXJzWzBdLnllYXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdvdG9Ub2RheTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjaGFuZ2UgdmlldyB0byBhIHNwZWNpZmljIG1vbnRoICh6ZXJvLWluZGV4LCBlLmcuIDA6IEphbnVhcnkpXG4gICAgICAgICAqL1xuICAgICAgICBnb3RvTW9udGg6IGZ1bmN0aW9uKG1vbnRoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG1vbnRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG5leHRNb250aDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXS5tb250aCsrO1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcmV2TW9udGg6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGgtLTtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNoYW5nZSB2aWV3IHRvIGEgc3BlY2lmaWMgZnVsbCB5ZWFyIChlLmcuIFwiMjAxMlwiKVxuICAgICAgICAgKi9cbiAgICAgICAgZ290b1llYXI6IGZ1bmN0aW9uKHllYXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oeWVhcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXS55ZWFyID0gcGFyc2VJbnQoeWVhciwgMTApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNoYW5nZSB0aGUgbWluRGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0TWluRGF0ZTogZnVuY3Rpb24odmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHNldFRvU3RhcnRPZkRheSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5taW5EYXRlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5taW5ZZWFyICA9IHZhbHVlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5taW5Nb250aCA9IHZhbHVlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWluRGF0ZSA9IGRlZmF1bHRzLm1pbkRhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5taW5ZZWFyICA9IGRlZmF1bHRzLm1pblllYXI7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5taW5Nb250aCA9IGRlZmF1bHRzLm1pbk1vbnRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX28uc3RhcnRSYW5nZSA9IGRlZmF1bHRzLnN0YXJ0UmFuZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjaGFuZ2UgdGhlIG1heERhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNldE1heERhdGU6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICBzZXRUb1N0YXJ0T2ZEYXkodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWF4RGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWF4WWVhciA9IHZhbHVlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5tYXhNb250aCA9IHZhbHVlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX28ubWF4RGF0ZSA9IGRlZmF1bHRzLm1heERhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5tYXhZZWFyID0gZGVmYXVsdHMubWF4WWVhcjtcbiAgICAgICAgICAgICAgICB0aGlzLl9vLm1heE1vbnRoID0gZGVmYXVsdHMubWF4TW9udGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5lbmRSYW5nZSA9IGRlZmF1bHRzLmVuZFJhbmdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRTdGFydFJhbmdlOiBmdW5jdGlvbih2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fby5zdGFydFJhbmdlID0gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RW5kUmFuZ2U6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9vLmVuZFJhbmdlID0gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlZnJlc2ggdGhlIEhUTUxcbiAgICAgICAgICovXG4gICAgICAgIGRyYXc6IGZ1bmN0aW9uKGZvcmNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3YgJiYgIWZvcmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9wdHMgPSB0aGlzLl9vLFxuICAgICAgICAgICAgICAgIG1pblllYXIgPSBvcHRzLm1pblllYXIsXG4gICAgICAgICAgICAgICAgbWF4WWVhciA9IG9wdHMubWF4WWVhcixcbiAgICAgICAgICAgICAgICBtaW5Nb250aCA9IG9wdHMubWluTW9udGgsXG4gICAgICAgICAgICAgICAgbWF4TW9udGggPSBvcHRzLm1heE1vbnRoLFxuICAgICAgICAgICAgICAgIGh0bWwgPSAnJyxcbiAgICAgICAgICAgICAgICByYW5kSWQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl95IDw9IG1pblllYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl95ID0gbWluWWVhcjtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG1pbk1vbnRoKSAmJiB0aGlzLl9tIDwgbWluTW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbSA9IG1pbk1vbnRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl95ID49IG1heFllYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl95ID0gbWF4WWVhcjtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG1heE1vbnRoKSAmJiB0aGlzLl9tID4gbWF4TW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbSA9IG1heE1vbnRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmFuZElkID0gJ3Bpa2EtdGl0bGUtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCAyKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBvcHRzLm51bWJlck9mTW9udGhzOyBjKyspIHtcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwicGlrYS1sZW5kYXJcIj4nICsgcmVuZGVyVGl0bGUodGhpcywgYywgdGhpcy5jYWxlbmRhcnNbY10ueWVhciwgdGhpcy5jYWxlbmRhcnNbY10ubW9udGgsIHRoaXMuY2FsZW5kYXJzWzBdLnllYXIsIHJhbmRJZCkgKyB0aGlzLnJlbmRlcih0aGlzLmNhbGVuZGFyc1tjXS55ZWFyLCB0aGlzLmNhbGVuZGFyc1tjXS5tb250aCwgcmFuZElkKSArICc8L2Rpdj4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgICAgICAgIGlmIChvcHRzLmJvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYob3B0cy5maWVsZC50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgICAgICBzdG8oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX28ub25EcmF3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fby5vbkRyYXcodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvcHRzLmJvdW5kKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IHRoZSBzY3JlZW4gcmVhZGVyIHVzZXIga25vdyB0byB1c2UgYXJyb3cga2V5c1xuICAgICAgICAgICAgICAgIG9wdHMuZmllbGQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1VzZSB0aGUgYXJyb3cga2V5cyB0byBwaWNrIGEgZGF0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkanVzdFBvc2l0aW9uOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCwgcEVsLCB3aWR0aCwgaGVpZ2h0LCB2aWV3cG9ydFdpZHRoLCB2aWV3cG9ydEhlaWdodCwgc2Nyb2xsVG9wLCBsZWZ0LCB0b3AsIGNsaWVudFJlY3Q7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vLmNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgICAgICAgICAgZmllbGQgPSB0aGlzLl9vLnRyaWdnZXI7XG4gICAgICAgICAgICBwRWwgPSBmaWVsZDtcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRSZWN0ID0gZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGNsaWVudFJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgICAgICAgICB0b3AgPSBjbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHBFbC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgIHRvcCAgPSBwRWwub2Zmc2V0VG9wICsgcEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB3aGlsZSgocEVsID0gcEVsLm9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdCArPSBwRWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdG9wICArPSBwRWwub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGVmYXVsdCBwb3NpdGlvbiBpcyBib3R0b20gJiBsZWZ0XG4gICAgICAgICAgICBpZiAoKHRoaXMuX28ucmVwb3NpdGlvbiAmJiBsZWZ0ICsgd2lkdGggPiB2aWV3cG9ydFdpZHRoKSB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fby5wb3NpdGlvbi5pbmRleE9mKCdyaWdodCcpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgbGVmdCAtIHdpZHRoICsgZmllbGQub2Zmc2V0V2lkdGggPiAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQgLSB3aWR0aCArIGZpZWxkLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0aGlzLl9vLnJlcG9zaXRpb24gJiYgdG9wICsgaGVpZ2h0ID4gdmlld3BvcnRIZWlnaHQgKyBzY3JvbGxUb3ApIHx8XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vLnBvc2l0aW9uLmluZGV4T2YoJ3RvcCcpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgdG9wIC0gaGVpZ2h0IC0gZmllbGQub2Zmc2V0SGVpZ2h0ID4gMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRvcCA9IHRvcCAtIGhlaWdodCAtIGZpZWxkLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlbmRlciBIVE1MIGZvciBhIHBhcnRpY3VsYXIgbW9udGhcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oeWVhciwgbW9udGgsIHJhbmRJZClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIG9wdHMgICA9IHRoaXMuX28sXG4gICAgICAgICAgICAgICAgbm93ICAgID0gbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBkYXlzICAgPSBnZXREYXlzSW5Nb250aCh5ZWFyLCBtb250aCksXG4gICAgICAgICAgICAgICAgYmVmb3JlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLmdldERheSgpLFxuICAgICAgICAgICAgICAgIGRhdGEgICA9IFtdLFxuICAgICAgICAgICAgICAgIHJvdyAgICA9IFtdO1xuICAgICAgICAgICAgc2V0VG9TdGFydE9mRGF5KG5vdyk7XG4gICAgICAgICAgICBpZiAob3B0cy5maXJzdERheSA+IDApIHtcbiAgICAgICAgICAgICAgICBiZWZvcmUgLT0gb3B0cy5maXJzdERheTtcbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmUgKz0gNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNNb250aCA9IG1vbnRoID09PSAwID8gMTEgOiBtb250aCAtIDEsXG4gICAgICAgICAgICAgICAgbmV4dE1vbnRoID0gbW9udGggPT09IDExID8gMCA6IG1vbnRoICsgMSxcbiAgICAgICAgICAgICAgICB5ZWFyT2ZQcmV2aW91c01vbnRoID0gbW9udGggPT09IDAgPyB5ZWFyIC0gMSA6IHllYXIsXG4gICAgICAgICAgICAgICAgeWVhck9mTmV4dE1vbnRoID0gbW9udGggPT09IDExID8geWVhciArIDEgOiB5ZWFyLFxuICAgICAgICAgICAgICAgIGRheXNJblByZXZpb3VzTW9udGggPSBnZXREYXlzSW5Nb250aCh5ZWFyT2ZQcmV2aW91c01vbnRoLCBwcmV2aW91c01vbnRoKTtcbiAgICAgICAgICAgIHZhciBjZWxscyA9IGRheXMgKyBiZWZvcmUsXG4gICAgICAgICAgICAgICAgYWZ0ZXIgPSBjZWxscztcbiAgICAgICAgICAgIHdoaWxlKGFmdGVyID4gNykge1xuICAgICAgICAgICAgICAgIGFmdGVyIC09IDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxscyArPSA3IC0gYWZ0ZXI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgciA9IDA7IGkgPCBjZWxsczsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSArIChpIC0gYmVmb3JlKSksXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBpc0RhdGUodGhpcy5fZCkgPyBjb21wYXJlRGF0ZXMoZGF5LCB0aGlzLl9kKSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpc1RvZGF5ID0gY29tcGFyZURhdGVzKGRheSwgbm93KSxcbiAgICAgICAgICAgICAgICAgICAgaXNFbXB0eSA9IGkgPCBiZWZvcmUgfHwgaSA+PSAoZGF5cyArIGJlZm9yZSksXG4gICAgICAgICAgICAgICAgICAgIGRheU51bWJlciA9IDEgKyAoaSAtIGJlZm9yZSksXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gbW9udGgsXG4gICAgICAgICAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyLFxuICAgICAgICAgICAgICAgICAgICBpc1N0YXJ0UmFuZ2UgPSBvcHRzLnN0YXJ0UmFuZ2UgJiYgY29tcGFyZURhdGVzKG9wdHMuc3RhcnRSYW5nZSwgZGF5KSxcbiAgICAgICAgICAgICAgICAgICAgaXNFbmRSYW5nZSA9IG9wdHMuZW5kUmFuZ2UgJiYgY29tcGFyZURhdGVzKG9wdHMuZW5kUmFuZ2UsIGRheSksXG4gICAgICAgICAgICAgICAgICAgIGlzSW5SYW5nZSA9IG9wdHMuc3RhcnRSYW5nZSAmJiBvcHRzLmVuZFJhbmdlICYmIG9wdHMuc3RhcnRSYW5nZSA8IGRheSAmJiBkYXkgPCBvcHRzLmVuZFJhbmdlLFxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkID0gKG9wdHMubWluRGF0ZSAmJiBkYXkgPCBvcHRzLm1pbkRhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0cy5tYXhEYXRlICYmIGRheSA+IG9wdHMubWF4RGF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRzLmRpc2FibGVXZWVrZW5kcyAmJiBpc1dlZWtlbmQoZGF5KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRzLmRpc2FibGVEYXlGbiAmJiBvcHRzLmRpc2FibGVEYXlGbihkYXkpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlOdW1iZXIgPSBkYXlzSW5QcmV2aW91c01vbnRoICsgZGF5TnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBwcmV2aW91c01vbnRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJPZlByZXZpb3VzTW9udGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlOdW1iZXIgPSBkYXlOdW1iZXIgLSBkYXlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBuZXh0TW9udGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck9mTmV4dE1vbnRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRheUNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogZGF5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IG1vbnRoTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogeWVhck51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RvZGF5OiBpc1RvZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1wdHk6IGlzRW1wdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N0YXJ0UmFuZ2U6IGlzU3RhcnRSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5kUmFuZ2U6IGlzRW5kUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luUmFuZ2U6IGlzSW5SYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHM6IG9wdHMuc2hvd0RheXNJbk5leHRBbmRQcmV2aW91c01vbnRoc1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcm93LnB1c2gocmVuZGVyRGF5KGRheUNvbmZpZykpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCsrciA9PT0gNykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5zaG93V2Vla051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LnVuc2hpZnQocmVuZGVyV2VlayhpIC0gYmVmb3JlLCBtb250aCwgeWVhcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChyZW5kZXJSb3cocm93LCBvcHRzLmlzUlRMKSk7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFibGUob3B0cywgZGF0YSwgcmFuZElkKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc1Zpc2libGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Y7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2hvdzogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCAnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX28uYm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkRXZlbnQoZG9jdW1lbnQsICdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fby5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fby5vbk9wZW4uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuX3Y7XG4gICAgICAgICAgICBpZiAodiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fby5ib3VuZCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudChkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5fb25DbGljayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJzsgLy8gcmVzZXRcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgJ2lzLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3YgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLl9vLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fby5vbkNsb3NlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHQU1FIE9WRVJcbiAgICAgICAgICovXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICByZW1vdmVFdmVudCh0aGlzLmVsLCAnbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24sIHRydWUpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQodGhpcy5lbCwgJ3RvdWNoZW5kJywgdGhpcy5fb25Nb3VzZURvd24sIHRydWUpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQodGhpcy5lbCwgJ2NoYW5nZScsIHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vLmZpZWxkKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQodGhpcy5fby5maWVsZCwgJ2NoYW5nZScsIHRoaXMuX29uSW5wdXRDaGFuZ2UpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vLmJvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KHRoaXMuX28udHJpZ2dlciwgJ2NsaWNrJywgdGhpcy5fb25JbnB1dENsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQodGhpcy5fby50cmlnZ2VyLCAnZm9jdXMnLCB0aGlzLl9vbklucHV0Rm9jdXMpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudCh0aGlzLl9vLnRyaWdnZXIsICdibHVyJywgdGhpcy5fb25JbnB1dEJsdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICByZXR1cm4gUGlrYWRheTtcblxufSkpO1xuIiwiXG5pbXBvcnQgUGlja2VyIGZyb20gJy4vUGlja2VyJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL1RpbWVQaWNrZXInXG5pbXBvcnQgUGlrYWRheSBmcm9tICdwaWthZGF5J1xuXG5jb25zdCBwaWNrZXJNb2R1bGUgPSB7XG4gIHBpY2s6IGZ1bmN0aW9uIChvcHRpb25zLCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSB7XG4gICAgY29uc3QgaXRlbXMgPSBvcHRpb25zLml0ZW1zXG4gICAgY29uc3QgaW5kZXggPSBvcHRpb25zLmluZGV4XG4gICAgbmV3IFBpY2tlcih7XG4gICAgICBkYXRhOiBpdGVtcyxcbiAgICAgIGRlZmF1bHRJbmRleHM6IFtpbmRleF0sXG4gICAgICBjb25maXJtQ2FsbGJhY2s6IGNvbmZpcm1DYWxsYmFjayxcbiAgICAgIGNhbmNlbENhbGxiYWNrOiBjYW5jZWxDYWxsYmFjayxcbiAgICAgIHNlbmRlcjogdGhpcy5zZW5kZXJcbiAgICB9KVxuICB9LFxuXG4gIHBpY2tEYXRlOiBmdW5jdGlvbiAob3B0aW9ucywgY29uZmlybUNhbGxiYWNrKSB7XG4gICAgY29uc3QgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFzay5jbGFzc05hbWUgPSAnd2VleC1waWNrZXItbWFzaydcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHBpY2tlciA9IG5ldyBQaWthZGF5KHtcbiAgICAgIGRlZmF1bHREYXRlOiBtb21lbnQob3B0aW9ucy52YWx1ZSwgJ1lZWVktTU0tREQnKS50b0RhdGUoKSxcbiAgICAgIHNldERlZmF1bHREYXRlOiBtb21lbnQob3B0aW9ucy52YWx1ZSwgJ1lZWVktTU0tREQnKS50b0RhdGUoKSxcbiAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgICAgbWluRGF0ZTogbW9tZW50KG9wdGlvbnMubWluLCAnWVlZWS1NTS1ERCcpLnRvRGF0ZSgpLFxuICAgICAgbWF4RGF0ZTogbW9tZW50KG9wdGlvbnMubWF4LCAnWVlZWS1NTS1ERCcpLnRvRGF0ZSgpLFxuICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjayAmJiBzZWxmLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY29uZmlybUNhbGxiYWNrLCB7IHJlc3VsdDogJ3N1Y2Nlc3MnLCBkYXRhOiBtb21lbnQoZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykgfSlcbiAgICAgICAgcGlja2VyLmRlc3Ryb3koKVxuICAgICAgICBtYXNrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobWFzaylcbiAgICAgIH1cbiAgICB9KVxuICAgIG1hc2suYXBwZW5kQ2hpbGQocGlja2VyLmVsKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1hc2spXG4gIH0sXG5cbiAgcGlja1RpbWU6IGZ1bmN0aW9uIChvcHRpb25zLCBjb25maXJtQ2FsbGJhY2spIHtcbiAgICBuZXcgVGltZVBpY2tlcih7XG4gICAgICB2YWx1ZTogb3B0aW9ucy52YWx1ZSxcbiAgICAgIGNvbmZpcm1DYWxsYmFjazogY29uZmlybUNhbGxiYWNrLFxuICAgICAgc2VuZGVyOiB0aGlzLnNlbmRlclxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgcGlja2VyOiBbe1xuICAgIG5hbWU6ICdwaWNrJyxcbiAgICBhcmdzOiBbJ29iamVjdCcsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAncGlja0RhdGUnLFxuICAgIGFyZ3M6IFsnb2JqZWN0JywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdwaWNrVGltZScsXG4gICAgYXJnczogWydvYmplY3QnLCAnZnVuY3Rpb24nXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgncGlja2VyJywgcGlja2VyTW9kdWxlLCBtZXRhKVxuICB9XG59XG4iXSwibmFtZXMiOlsidGhpcyIsImFyZ3VtZW50cyIsImxldCIsImNvbnN0IiwiSVNjcm9sbCIsImkiLCJzb21lIiwic2V0IiwiaW5kZXhPZiIsImhhbmRsZVN0cmljdFBhcnNlIiwia2V5cyIsImNhbGVuZGFyIiwiaXNWYWxpZCIsIl9pc1ZhbGlkIiwicHJvdG8iLCJnZXQiLCJhZGRTdWJ0cmFjdCIsImFkZCIsInN1YnRyYWN0IiwidmFsdWVPZiIsInJlbGF0aXZlVGltZSIsImFicyIsInRvSVNPU3RyaW5nIiwibW9tZW50IiwibG9jYWwiLCJmbiIsInV0YyIsInVuaXgiLCJtb250aHMiLCJsb2NhbGUiLCJpbnZhbGlkIiwiZHVyYXRpb24iLCJ3ZWVrZGF5cyIsInBhcnNlWm9uZSIsImxvY2FsZURhdGEiLCJtb250aHNTaG9ydCIsIndlZWtkYXlzTWluIiwibG9jYWxlcyIsIndlZWtkYXlzU2hvcnQiLCJyZWxhdGl2ZVRpbWVSb3VuZGluZyIsInJlbGF0aXZlVGltZVRocmVzaG9sZCIsIlBpa2FkYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQ0FBQyxVQUFVLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQ25DLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUI7Q0FDckMsTUFBTSxDQUFDLDJCQUEyQjtDQUNsQyxNQUFNLENBQUMsd0JBQXdCO0NBQy9CLE1BQU0sQ0FBQyxzQkFBc0I7Q0FDN0IsTUFBTSxDQUFDLHVCQUF1QjtDQUM5QixVQUFVLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7O0FBRWpFLElBQUksS0FBSyxHQUFHLENBQUMsWUFBWTtDQUN4QixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7O0NBRVosSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7Q0FDeEQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxZQUFZO0VBQzFCLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztHQUNsRCxTQUFTO0dBQ1QsQ0FBQyxHQUFHLENBQUM7R0FDTCxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7RUFFcEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0dBQ3BCLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO0dBQ3BDLEtBQUssU0FBUyxJQUFJLGFBQWEsR0FBRyxFQUFBLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBO0dBQ25GOztFQUVELE9BQU8sS0FBSyxDQUFDO0VBQ2IsR0FBRyxDQUFDOztDQUVMLFNBQVMsWUFBWSxFQUFFLEtBQUssRUFBRTtFQUM3QixLQUFLLE9BQU8sS0FBSyxLQUFLLEdBQUcsRUFBQSxPQUFPLEtBQUssQ0FBQyxFQUFBO0VBQ3RDLEtBQUssT0FBTyxLQUFLLEVBQUUsR0FBRyxFQUFBLE9BQU8sS0FBSyxDQUFDLEVBQUE7RUFDbkMsT0FBTyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pFOztDQUVELEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLE9BQU8sSUFBSSxFQUFFLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O0NBRTlFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxNQUFNLEVBQUUsR0FBRyxFQUFFO0VBQ2xDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO0dBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDbkI7RUFDRCxDQUFDOztDQUVGLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7RUFDOUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ3pDLENBQUM7O0NBRUYsRUFBRSxDQUFDLFdBQVcsR0FBRyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTtFQUNqRCxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsQ0FBQzs7Q0FFRixFQUFFLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxZQUFZLEVBQUU7RUFDL0MsT0FBTyxNQUFNLENBQUMsY0FBYztHQUMzQixXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztHQUMzRSxZQUFZLENBQUM7RUFDZCxDQUFDOztDQUVGLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtFQUNyRixJQUFJLFFBQVEsR0FBRyxPQUFPLEdBQUcsS0FBSztHQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJO0dBQ2pDLFdBQVc7R0FDWCxRQUFRLENBQUM7O0VBRVYsWUFBWSxHQUFHLFlBQVksS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLFlBQVksQ0FBQzs7RUFFbEUsV0FBVyxHQUFHLE9BQU8sR0FBRyxFQUFFLEtBQUssR0FBRyxLQUFLLE9BQU8sQ0FBQyxHQUFHLFlBQVksRUFBRSxLQUFLLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7RUFDN0YsUUFBUSxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUM7O0VBRWhDLEtBQUssV0FBVyxHQUFHLFdBQVcsR0FBRztHQUNoQyxXQUFXLEdBQUcsV0FBVyxHQUFHLFdBQVcsS0FBSyxXQUFXLEdBQUcsR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLFdBQVcsQ0FBQztHQUM5RixRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUM7R0FDM0MsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7R0FDNUIsTUFBTSxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUc7R0FDN0IsV0FBVyxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDbEUsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsV0FBVyxDQUFDO0dBQzNDLFFBQVEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO0dBQzVCOztFQUVELE9BQU87R0FDTixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7R0FDcEMsUUFBUSxFQUFFLFFBQVE7R0FDbEIsQ0FBQztFQUNGLENBQUM7O0NBRUYsSUFBSSxVQUFVLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztDQUUzQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtFQUNiLFlBQVksRUFBRSxVQUFVLEtBQUssS0FBSztFQUNsQyxjQUFjLEVBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQWE7RUFDNUQsUUFBUSxFQUFFLGNBQWMsSUFBSSxNQUFNO0VBQ2xDLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDO0VBQzVELGFBQWEsRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksYUFBYTtFQUMxRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkgsRUFBRSxDQUFDLFlBQVksR0FBRyxDQUFDLFdBQVc7RUFDN0IsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7O0VBRTdDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtHQUNuRSxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7R0FDekQsR0FBRyxhQUFhLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxJQUFJLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0lBQ25GLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUM3QyxNQUFNO0lBQ04sT0FBTyxJQUFJLENBQUM7SUFDWjtHQUNELE1BQU07R0FDTixPQUFPLEtBQUssQ0FBQztHQUNiO0VBQ0QsR0FBRyxDQUFDOztDQUVMLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7RUFDeEIsU0FBUyxFQUFFLFVBQVU7RUFDckIsd0JBQXdCLEVBQUUsWUFBWSxDQUFDLDBCQUEwQixDQUFDO0VBQ2xFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztFQUN0RCxlQUFlLEVBQUUsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQ2hELGVBQWUsRUFBRSxZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDaEQsQ0FBQyxDQUFDOztDQUVILEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQzdCLElBQUksRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7RUFDL0MsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztFQUM1QixDQUFDOztDQUVGLEVBQUUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQzdCLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUc7R0FDeEIsT0FBTztHQUNQOztFQUVELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ2pDLENBQUM7O0NBRUYsRUFBRSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDaEMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0dBQ3pCLE9BQU87R0FDUDs7RUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUNwRCxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUMzQyxDQUFDOztDQUVGLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFLEVBQUU7RUFDekIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVTtHQUN4QixHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzs7RUFHckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRTtHQUM1QixJQUFJLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztHQUN0QixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQztHQUNwQjs7O0VBR0QsT0FBTztHQUNOLElBQUksRUFBRSxJQUFJO0dBQ1YsR0FBRyxFQUFFLEdBQUc7R0FDUixDQUFDO0VBQ0YsQ0FBQzs7Q0FFRixFQUFFLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxFQUFFLEVBQUUsVUFBVSxFQUFFO0VBQ3RELE1BQU0sSUFBSSxDQUFDLElBQUksVUFBVSxHQUFHO0dBQzNCLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztJQUNoQyxPQUFPLElBQUksQ0FBQztJQUNaO0dBQ0Q7O0VBRUQsT0FBTyxLQUFLLENBQUM7RUFDYixDQUFDOztDQUVGLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUU7RUFDNUIsVUFBVSxFQUFFLENBQUM7RUFDYixTQUFTLEVBQUUsQ0FBQztFQUNaLFFBQVEsRUFBRSxDQUFDOztFQUVYLFNBQVMsRUFBRSxDQUFDO0VBQ1osU0FBUyxFQUFFLENBQUM7RUFDWixPQUFPLEVBQUUsQ0FBQzs7RUFFVixXQUFXLEVBQUUsQ0FBQztFQUNkLFdBQVcsRUFBRSxDQUFDO0VBQ2QsU0FBUyxFQUFFLENBQUM7O0VBRVosYUFBYSxFQUFFLENBQUM7RUFDaEIsYUFBYSxFQUFFLENBQUM7RUFDaEIsV0FBVyxFQUFFLENBQUM7RUFDZCxDQUFDLENBQUM7O0NBRUgsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRTtFQUN2QixTQUFTLEVBQUU7R0FDVixLQUFLLEVBQUUsc0NBQXNDO0dBQzdDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTtJQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDckI7R0FDRDtFQUNELFFBQVEsRUFBRTtHQUNULEtBQUssRUFBRSxpQ0FBaUM7R0FDeEMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFO0lBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwQztHQUNEO0VBQ0QsSUFBSSxFQUFFO0dBQ0wsS0FBSyxFQUFFLHlDQUF5QztHQUNoRCxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7SUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRDtHQUNEO0VBQ0QsTUFBTSxFQUFFO0dBQ1AsS0FBSyxFQUFFLEVBQUU7R0FDVCxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7SUFDaEIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHO0tBQ2hDLE9BQU8sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEIsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUc7S0FDOUIsT0FBTyxNQUFNLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDbkQsTUFBTSxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUc7S0FDaEMsT0FBTyxNQUFNLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDdEQsTUFBTTtLQUNOLE9BQU8sTUFBTSxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0tBQ3pEO0lBQ0Q7R0FDRDtFQUNELE9BQU8sRUFBRTtHQUNSLEtBQUssRUFBRSxFQUFFO0dBQ1QsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFO0lBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUk7S0FDWCxDQUFDLEdBQUcsR0FBRyxDQUFDOztJQUVULEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUU7SUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRTs7SUFFM0IsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHO0lBQzdGO0dBQ0Q7RUFDRCxDQUFDLENBQUM7O0NBRUgsRUFBRSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUU7RUFDaEMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUN2QyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDcEMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0VBQ25CLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztFQUNuQixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUMzQixDQUFDOztDQUVGLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUU7RUFDdkIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU07R0FDcEIsRUFBRSxDQUFDOztFQUVKLEtBQUssQ0FBQyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7R0FDekQsRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDekMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87SUFDOUQsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU87SUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDOztHQUVWLEVBQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0dBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7R0FDekI7RUFDRCxDQUFDOztDQUVGLE9BQU8sRUFBRSxDQUFDO0NBQ1YsR0FBRyxDQUFDO0FBQ0wsU0FBUyxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTs7O0NBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs7Q0FFekMsSUFBSSxDQUFDLE9BQU8sR0FBRzs7RUFFZCxnQkFBZ0IsRUFBRSxJQUFJOztFQUV0QixlQUFlLEVBQUUsRUFBRTs7RUFFbkIsYUFBYSxFQUFFLEtBQUs7OztFQUdwQixjQUFjLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVTtFQUNsQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0VBQ2xELFlBQVksR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxRQUFRO0VBQ2pELE1BQU0sRUFBRSxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUM7RUFDVCxPQUFPLEVBQUUsSUFBSTtFQUNiLHNCQUFzQixFQUFFLENBQUM7RUFDekIsUUFBUSxFQUFFLElBQUk7O0VBRWQsTUFBTSxFQUFFLElBQUk7RUFDWixVQUFVLEVBQUUsR0FBRztFQUNmLFlBQVksRUFBRSxFQUFFOztFQUVoQixjQUFjLEVBQUUsSUFBSTtFQUNwQix1QkFBdUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRTs7RUFFeEUsYUFBYSxFQUFFLElBQUk7RUFDbkIsYUFBYSxFQUFFLElBQUk7RUFDbkIsWUFBWSxFQUFFLElBQUk7RUFDbEIsYUFBYSxFQUFFLE9BQU8sTUFBTSxDQUFDLFdBQVcsS0FBSyxXQUFXO0VBQ3hELENBQUM7O0NBRUYsTUFBTSxJQUFJLENBQUMsSUFBSSxPQUFPLEdBQUc7RUFDeEJBLE1BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdCOzs7Q0FHRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztDQUU3RixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0NBQy9FLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7O0NBRTVFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Q0FDcEgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDOzs7Q0FHNUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0NBQ2xHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLElBQUksWUFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7O0NBR3BHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztDQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7O0NBRTlHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzs7Q0FFcEssSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUssU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQzs7Q0FFeEcsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxJQUFJLEdBQUc7RUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0VBQ3pCOztDQUVELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLEdBQUc7RUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0VBQ25DOztDQUVELElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0NBSy9FLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDWCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztDQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztDQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7OztDQUlsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRWYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3hELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUNkOztBQUVELE9BQU8sQ0FBQyxTQUFTLEdBQUc7Q0FDbkIsT0FBTyxFQUFFLE9BQU87O0NBRWhCLEtBQUssRUFBRSxZQUFZO0VBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7RUFFbkIsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztHQUN6RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7R0FDdkI7O0VBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztHQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7R0FDbEI7O0VBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRztHQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7R0FDakI7O0VBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRztHQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7R0FDakI7Ozs7RUFJRDs7Q0FFRCxPQUFPLEVBQUUsWUFBWTtFQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7RUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztFQUMzQjs7Q0FFRCxjQUFjLEVBQUUsVUFBVSxDQUFDLEVBQUU7RUFDNUIsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHO0dBQ3hELE9BQU87R0FDUDs7RUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7RUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRztHQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztHQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzdCO0VBQ0Q7O0NBRUQsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFOztFQUVwQixLQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O0lBR2xDLElBQUksTUFBTSxDQUFDO0tBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7O09BRVosTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQztpQkFDakIsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDcEMsTUFBTTs7T0FFTCxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztNQUNuQjtHQUNILEtBQUssTUFBTSxLQUFLLENBQUMsR0FBRztJQUNuQixPQUFPO0lBQ1A7R0FDRDs7RUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRztHQUN0RixPQUFPO0dBQ1A7O0VBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEdBQUc7R0FDM0ksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0dBQ25COztFQUVELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0dBQ3ZDLEdBQUcsQ0FBQzs7RUFFTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3pDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDOztFQUV6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7RUFFakMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHO0dBQ3hELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztHQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztHQUM1QixHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7R0FDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDN0IsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRztHQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztHQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzdCOztFQUVELElBQUksQ0FBQyxNQUFNLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN4QixJQUFJLENBQUMsTUFBTSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN4QixJQUFJLENBQUMsTUFBTSxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7RUFDN0IsSUFBSSxDQUFDLE1BQU0sTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDOztFQUU3QixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7RUFDckM7O0NBRUQsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0VBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLEdBQUc7R0FDbEUsT0FBTztHQUNQOztFQUVELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUc7R0FDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0dBQ25COztFQUVELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0dBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO0dBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO0dBQ25DLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFO0dBQzNCLElBQUksRUFBRSxJQUFJO0dBQ1YsUUFBUSxFQUFFLFFBQVEsQ0FBQzs7RUFFcEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO0VBQzNCLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQzs7RUFFM0IsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUM7RUFDdEIsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUM7RUFDdEIsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2pDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0VBR2pDLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxLQUFLLFFBQVEsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0dBQ3pFLE9BQU87R0FDUDs7O0VBR0QsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztHQUN4RCxLQUFLLFFBQVEsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRztJQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztJQUMzQixNQUFNLEtBQUssUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixHQUFHO0lBQ3hFLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO0lBQzNCLE1BQU07SUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztJQUMzQjtHQUNEOztFQUVELEtBQUssSUFBSSxDQUFDLGVBQWUsSUFBSSxHQUFHLEdBQUc7R0FDbEMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLFVBQVUsR0FBRztJQUNsRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLElBQUksWUFBWSxHQUFHO0lBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLE9BQU87SUFDUDs7R0FFRCxNQUFNLEdBQUcsQ0FBQyxDQUFDO0dBQ1gsTUFBTSxLQUFLLElBQUksQ0FBQyxlQUFlLElBQUksR0FBRyxHQUFHO0dBQ3pDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxZQUFZLEdBQUc7SUFDcEQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLFVBQVUsR0FBRztJQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN2QixPQUFPO0lBQ1A7O0dBRUQsTUFBTSxHQUFHLENBQUMsQ0FBQztHQUNYOztFQUVELE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMvQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7O0VBRTdDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztFQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7OztFQUd2QixLQUFLLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUc7R0FDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0dBQ2xGO0VBQ0QsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHO0dBQ3pDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUNsRjs7RUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0VBRXZELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHO0dBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDL0I7O0VBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O0VBRWxCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O0VBSTVCLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHO0dBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0dBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDckI7Ozs7RUFJRDs7Q0FFRCxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUU7RUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRztHQUNsRSxPQUFPO0dBQ1A7O0VBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRztHQUNwSCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7R0FDbkI7O0VBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7R0FDckQsU0FBUztHQUNULFNBQVM7R0FDVCxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTO0dBQzNDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUN6QixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztHQUN4QyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztHQUN4QyxJQUFJLEdBQUcsQ0FBQztHQUNSLE1BQU0sR0FBRyxFQUFFLENBQUM7O0VBRWIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7RUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7RUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7OztFQUcvQixLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRztHQUNsRCxPQUFPO0dBQ1A7O0VBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7OztFQUcxQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRztHQUNsQixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHO0lBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0I7O0dBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRztJQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2Y7O0dBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztHQUNoQyxPQUFPO0dBQ1A7O0VBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxRQUFRLEdBQUcsR0FBRyxJQUFJLFNBQVMsR0FBRyxHQUFHLElBQUksU0FBUyxHQUFHLEdBQUcsR0FBRztHQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3pCLE9BQU87R0FDUDs7O0VBR0QsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxRQUFRLEdBQUcsR0FBRyxHQUFHO0dBQzlDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO0dBQ25OLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO0dBQ2xOLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0dBQzdCLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0dBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0dBQ3hCOzs7RUFHRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHO0dBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0dBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRztLQUN2QyxJQUFJLENBQUMsR0FBRztNQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDdkMsRUFBRSxHQUFHLENBQUMsQ0FBQztHQUNWLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O0dBRWQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7R0FDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7R0FDcEIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0dBQ25DOzs7O0VBSUQsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRzs7R0FFdkMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUc7SUFDL0UsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzlCOztHQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDeEMsT0FBTztHQUNQOztFQUVELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDN0I7O0NBRUQsT0FBTyxFQUFFLFlBQVk7RUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztFQUVoQixZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztFQUVqQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZO0dBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUNmLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztFQUMvQjs7Q0FFRCxhQUFhLEVBQUUsVUFBVSxJQUFJLEVBQUU7RUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7R0FDYixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7RUFFWixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQzs7RUFFakIsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRztHQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ04sTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRztHQUN0QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUNwQjs7RUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0dBQzVDLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDTixNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHO0dBQ3RDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0dBQ3BCOztFQUVELEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUc7R0FDakMsT0FBTyxLQUFLLENBQUM7R0FDYjs7RUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0VBRXJELE9BQU8sSUFBSSxDQUFDO0VBQ1o7O0NBRUQsT0FBTyxFQUFFLFlBQVk7RUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7RUFDckI7O0NBRUQsTUFBTSxFQUFFLFlBQVk7RUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDcEI7O0NBRUQsT0FBTyxFQUFFLFlBQVk7RUFDcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7O0VBRW5DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7RUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzs7OztFQUkvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0VBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7O0VBRWpELElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0VBQzFELElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOzs7O0VBSTVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztFQUN2RSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7O0VBRXRFLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUc7R0FDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7R0FDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0dBQ3ZDOztFQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7R0FDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7R0FDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0dBQ3pDOztFQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOztFQUVwQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztFQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztFQUUzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7RUFJckI7O0NBRUQsRUFBRSxFQUFFLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRztHQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztHQUN4Qjs7RUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM1Qjs7Q0FFRCxHQUFHLEVBQUUsVUFBVSxJQUFJLEVBQUUsRUFBRSxFQUFFO0VBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHO0dBQzFCLE9BQU87R0FDUDs7RUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzs7RUFFM0MsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUc7R0FDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQ3BDO0VBQ0Q7O0NBRUQsVUFBVSxFQUFFLFVBQVUsSUFBSSxFQUFFOzs7O0VBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHO0dBQzFCLE9BQU87R0FDUDs7RUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDO0dBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDOztFQUUvQixLQUFLLENBQUMsQ0FBQyxHQUFHO0dBQ1QsT0FBTztHQUNQOztFQUVELFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztHQUNwQkEsTUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUNBLE1BQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQ0MsV0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDL0Q7RUFDRDs7Q0FFRCxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7RUFDdkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ2YsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7O0VBRWpCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDbEM7O0NBRUQsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0VBQ3ZDLE1BQU0sR0FBRyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O0VBRXZDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztFQUM3RCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQ2hFLEtBQUssQ0FBQyxJQUFJLElBQUksY0FBYyxHQUFHO0lBQzdCLEdBQUcsY0FBYyxFQUFFO0tBQ2xCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjtHQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQ3RCLE1BQU07R0FDTixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztHQUNyQztFQUNEOztDQUVELGVBQWUsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDOUQsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztFQUV4RCxLQUFLLENBQUMsRUFBRSxHQUFHO0dBQ1YsT0FBTztHQUNQOztFQUVELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7O0VBRTNCLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDcEMsR0FBRyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQzs7O0VBR25DLEtBQUssT0FBTyxLQUFLLElBQUksR0FBRztHQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztHQUN4RTtFQUNELEtBQUssT0FBTyxLQUFLLElBQUksR0FBRztHQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztHQUMxRTs7RUFFRCxHQUFHLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUM7RUFDekIsR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDOztFQUV6QixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0VBQ3RGLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7O0VBRXJGLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7RUFFckksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQy9DOztDQUVELGVBQWUsRUFBRSxVQUFVLElBQUksRUFBRTs7O0VBQ2hDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDOztFQUVqQixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO0VBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQzs7RUFFL0MsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHO0dBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDOztHQUU5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7R0FDaEIsR0FBRyxDQUFDLFdBQVc7SUFDZCxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUFFO0tBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3hDO0lBQ0QsQ0FBQyxDQUFDO0dBQ0g7OztFQUdELEtBQUssSUFBSSxDQUFDLFVBQVUsR0FBRztHQUN0QixNQUFNLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJO0lBQzVDRCxNQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QztHQUNEOzs7OztFQUtEOztDQUVELHlCQUF5QixFQUFFLFVBQVUsTUFBTSxFQUFFOzs7RUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsTUFBTSxDQUFDOzs7RUFHbEUsS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHO0dBQ3RCLE1BQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDNUNBLE1BQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQ7R0FDRDs7Ozs7RUFLRDs7Q0FFRCxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzs7RUFDM0IsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRzs7OztHQUloQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDOzs7O0dBSW5HLE1BQU07R0FDTixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7R0FDbEM7O0VBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O0NBR1osS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHO0VBQ3RCLE1BQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUk7R0FDNUNBLE1BQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7R0FDcEM7RUFDRDs7Ozs7RUFLQTs7Q0FFRCxXQUFXLEVBQUUsVUFBVSxNQUFNLEVBQUU7RUFDOUIsSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVE7R0FDMUQsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztFQUU3RCxTQUFTLENBQUMsTUFBTSxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzdDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOztFQUVsQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHO0dBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDN0M7O0VBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHO0dBQ2pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUMzQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNyQyxTQUFTLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN2QyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNuQzs7RUFFRCxLQUFLLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRztHQUN2RCxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDdkUsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDakUsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDbkUsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDL0Q7O0VBRUQsS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUc7R0FDbkQsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzVDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3JDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3ZDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3BDOztFQUVELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUN0RCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNqRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNsRDs7Q0FFRCxtQkFBbUIsRUFBRSxZQUFZO0VBQ2hDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztHQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDOztFQUVOLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUc7R0FDaEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDakUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQy9CLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUMvQixNQUFNO0dBQ04sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0dBQ3pDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztHQUN4Qzs7RUFFRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDdEI7Q0FDRCxlQUFlLEVBQUUsWUFBWTs7O0VBQzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCO0dBQ25ELFdBQVcsR0FBRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLFFBQVE7R0FDeEQsVUFBVSxHQUFHLEVBQUU7R0FDZixTQUFTLENBQUM7O0VBRVgsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztFQUVoQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7RUFFckIsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRzs7R0FFOUIsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRztJQUMzQixTQUFTLEdBQUc7S0FDWCxFQUFFLEVBQUUsc0JBQXNCLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztLQUNyRSxXQUFXLEVBQUUsV0FBVztLQUN4QixpQkFBaUIsRUFBRSxJQUFJO0tBQ3ZCLFdBQVcsRUFBRSxXQUFXO0tBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQjtLQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0I7S0FDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYztLQUNqQyxPQUFPLEVBQUUsS0FBSztLQUNkLENBQUM7O0lBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0I7OztHQUdELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7SUFDM0IsU0FBUyxHQUFHO0tBQ1gsRUFBRSxFQUFFLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDckUsV0FBVyxFQUFFLFdBQVc7S0FDeEIsaUJBQWlCLEVBQUUsSUFBSTtLQUN2QixXQUFXLEVBQUUsV0FBVztLQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0I7S0FDckMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCO0tBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWM7S0FDakMsT0FBTyxFQUFFLEtBQUs7S0FDZCxDQUFDOztJQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCO0dBQ0Q7O0VBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRzs7R0FFOUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztHQUN4RDs7RUFFRCxNQUFNLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUk7R0FDdkNBLE1BQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksU0FBUyxDQUFDQSxNQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztHQUMzRDs7O0VBR0QsU0FBUyxjQUFjLEVBQUUsRUFBRSxFQUFFO0dBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtJQUNwQixNQUFNLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJO0tBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBQ0Q7R0FDRDs7RUFFRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHO0dBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVk7SUFDaEMsY0FBYyxDQUFDLFlBQVk7S0FDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ1osQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDOztHQUVILElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFlBQVk7SUFDbkMsY0FBYyxDQUFDLFlBQVk7S0FDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ1osQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDOztHQUVILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVk7SUFDbEMsY0FBYyxDQUFDLFlBQVk7S0FDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNiLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQzs7R0FFSCxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVk7SUFDeEMsY0FBYyxDQUFDLFlBQVk7S0FDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDbkIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0dBQ0g7OztFQUdELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVk7R0FDOUIsY0FBYyxDQUFDLFlBQVk7SUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0dBQ0gsQ0FBQyxDQUFDOztFQUVILElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVk7R0FDOUIsY0FBYyxDQUFDLFlBQVk7SUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDOztHQUVILE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUN2QixDQUFDLENBQUM7RUFDSDs7Q0FFRCxVQUFVLEVBQUUsWUFBWTtFQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzVDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDakQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDOztFQUVyRCxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZO0dBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7R0FDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7R0FDekIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztHQUMvQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3BELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN4RCxDQUFDLENBQUM7RUFDSDs7Q0FFRCxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUU7RUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUc7R0FDcEIsT0FBTztHQUNQOztFQUVELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7RUFFbkIsSUFBSSxXQUFXLEVBQUUsV0FBVztHQUMzQixJQUFJLEVBQUUsSUFBSTtHQUNWLElBQUksR0FBRyxJQUFJLENBQUM7O0VBRWIsS0FBSyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsR0FBRztHQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQy9COzs7RUFHRCxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0VBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVk7R0FDMUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0I7R0FDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztHQUM5QixFQUFFLEdBQUcsQ0FBQyxDQUFDOztFQUVSLEtBQUssUUFBUSxJQUFJLENBQUMsR0FBRztHQUNwQixJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO0lBQ3RCLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDdkQsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxNQUFNO0lBQ04sV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN4QixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3hCO0dBQ0QsTUFBTSxLQUFLLGFBQWEsSUFBSSxDQUFDLEdBQUc7R0FDaEMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO0dBQ2pFLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztHQUNqRSxNQUFNLEtBQUssWUFBWSxJQUFJLENBQUMsR0FBRztHQUMvQixXQUFXLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO0dBQzlFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQyxHQUFHO0dBQzNCLFdBQVcsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztHQUN6RSxNQUFNO0dBQ04sT0FBTztHQUNQOztFQUVELFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0VBQ2pELFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDOztFQUVqRCxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHO0dBQzlCLFdBQVcsR0FBRyxXQUFXLENBQUM7R0FDMUIsV0FBVyxHQUFHLENBQUMsQ0FBQztHQUNoQjs7RUFFRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHO0dBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztHQUM5QixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7O0dBRTlCLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRztJQUN0QixJQUFJLEVBQUUsQ0FBQztJQUNQLE1BQU0sS0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHO0lBQzdCLElBQUksRUFBRSxDQUFDO0lBQ1A7O0dBRUQsS0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHO0lBQ3RCLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUc7SUFDN0IsSUFBSSxFQUFFLENBQUM7SUFDUDs7R0FFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7R0FFMUIsT0FBTztHQUNQOztFQUVELElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUN2RSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRXJFLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7RUFFakUsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHO0dBQ2YsSUFBSSxHQUFHLENBQUMsQ0FBQztHQUNULE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRztHQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUN2Qjs7RUFFRCxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUc7R0FDZixJQUFJLEdBQUcsQ0FBQyxDQUFDO0dBQ1QsTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHO0dBQ3BDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0dBQ3ZCOztFQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7O0VBRzdCOztDQUVELFNBQVMsRUFBRSxZQUFZO0VBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztFQUV0QixLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksUUFBUSxHQUFHO0dBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUN0RTs7RUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZOzs7R0FDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDWCxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDUixFQUFFLEVBQUUsRUFBRTtJQUNOLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNSLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWTtJQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWE7SUFDcEQsRUFBRSxDQUFDOztHQUVKLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztHQUVoQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRztJQUMvRixPQUFPO0lBQ1A7O0dBRUQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUc7SUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQzdCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQzs7SUFFN0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHO0tBQ2pDQSxNQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7S0FFTixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUc7TUFDbENBLE1BQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7T0FDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFQSxNQUFJLENBQUMsVUFBVSxDQUFDO09BQy9CLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRUEsTUFBSSxDQUFDLFVBQVUsQ0FBQztPQUMvQixLQUFLLEVBQUUsS0FBSztPQUNaLE1BQU0sRUFBRSxLQUFLO09BQ2IsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFO09BQ1YsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFO09BQ1YsQ0FBQzs7TUFFRixDQUFDLElBQUksS0FBSyxDQUFDO01BQ1gsQ0FBQyxFQUFFLENBQUM7TUFDSjs7S0FFRCxDQUFDLElBQUksS0FBSyxDQUFDO0tBQ1gsQ0FBQyxFQUFFLENBQUM7S0FDSjtJQUNELE1BQU07SUFDTixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRVAsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0tBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHO01BQ3hELENBQUMsR0FBRyxDQUFDLENBQUM7TUFDTixDQUFDLEVBQUUsQ0FBQztNQUNKOztLQUVELEtBQUssQ0FBQ0EsTUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRztNQUNyQkEsTUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7TUFDbkI7O0tBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFQSxNQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFQSxNQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDaEQsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0MsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0tBRTVDQSxNQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO01BQ2xCLENBQUMsRUFBRSxDQUFDO01BQ0osQ0FBQyxFQUFFLENBQUM7TUFDSixLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7TUFDeEIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO01BQzFCLEVBQUUsRUFBRSxFQUFFO01BQ04sRUFBRSxFQUFFLEVBQUU7TUFDTixDQUFDOztLQUVGLEtBQUssQ0FBQyxHQUFHQSxNQUFJLENBQUMsVUFBVSxHQUFHO01BQzFCLENBQUMsRUFBRSxDQUFDO01BQ0o7S0FDRDtJQUNEOztHQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O0dBRzNFLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRztJQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDakQsTUFBTTtJQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakk7R0FDRCxDQUFDLENBQUM7O0VBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtHQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRztLQUMzQyxJQUFJLENBQUMsR0FBRztNQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztNQUM5QyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztHQUVWLElBQUksQ0FBQyxRQUFRO0lBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVU7SUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVU7SUFDeEMsSUFBSTtJQUNKLENBQUM7R0FDRixDQUFDLENBQUM7RUFDSDs7Q0FFRCxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzs7RUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHO0dBQ3pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDMUM7O0VBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQztHQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07R0FDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O0VBR1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWM7R0FDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUc7R0FDckQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0dBQ3hCOztFQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRztHQUNaLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDTixNQUFNLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUc7R0FDakMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7R0FDcEI7O0VBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0dBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNOLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRztHQUNqQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUNwQjs7RUFFRCxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7R0FDcEIsS0FBSyxDQUFDLElBQUlBLE1BQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHO0lBQy9CLENBQUMsR0FBR0EsTUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsTUFBTTtJQUNOO0dBQ0Q7O0VBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDOztFQUV6QixRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7R0FDcEIsS0FBSyxDQUFDLElBQUlBLE1BQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHO0lBQy9CLENBQUMsR0FBR0EsTUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsTUFBTTtJQUNOO0dBQ0Q7O0VBRUQsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUc7R0FDbEMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7O0dBRXJCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRztJQUNaLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDTixNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHO0lBQ3BDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDMUI7O0dBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3ZCOztFQUVELEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHO0dBQ2xDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDOztHQUVyQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUc7SUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ04sTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRztJQUN2QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdCOztHQUVELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUN2Qjs7RUFFRCxPQUFPO0dBQ04sQ0FBQyxFQUFFLENBQUM7R0FDSixDQUFDLEVBQUUsQ0FBQztHQUNKLEtBQUssRUFBRSxDQUFDO0dBQ1IsS0FBSyxFQUFFLENBQUM7R0FDUixDQUFDO0VBQ0Y7O0NBRUQsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0VBQ3ZDLE1BQU0sR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7O0VBRTdDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHO0dBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7R0FDMUIsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUc7R0FDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNOOztFQUVELEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHO0dBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7R0FDN0IsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUc7R0FDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNOOztFQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRTNCLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHO0dBQzdELElBQUksQ0FBQyxHQUFHO0lBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUN2QyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzs7RUFFaEIsSUFBSSxDQUFDLFdBQVcsR0FBRztHQUNsQixDQUFDLEVBQUUsSUFBSTtHQUNQLENBQUMsRUFBRSxJQUFJO0dBQ1AsS0FBSyxFQUFFLENBQUM7R0FDUixLQUFLLEVBQUUsQ0FBQztHQUNSLENBQUM7O0VBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztFQUN4Qzs7Q0FFRCxJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFO0VBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztHQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7O0VBRTVCLENBQUMsRUFBRSxDQUFDOztFQUVKLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRztHQUN2RCxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ04sQ0FBQyxFQUFFLENBQUM7R0FDSjs7RUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQ2xDOztDQUVELElBQUksRUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUU7RUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO0dBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQzs7RUFFNUIsQ0FBQyxFQUFFLENBQUM7O0VBRUosS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRztHQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ04sQ0FBQyxFQUFFLENBQUM7R0FDSjs7RUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQ2xDOztDQUVELFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRTs7OztFQUV2QixJQUFJLElBQUksR0FBRztHQUNWLE1BQU0sRUFBRSxFQUFFO0dBQ1YsUUFBUSxFQUFFLEVBQUU7R0FDWixHQUFHLEVBQUUsRUFBRTtHQUNQLElBQUksRUFBRSxFQUFFO0dBQ1IsSUFBSSxFQUFFLEVBQUU7R0FDUixFQUFFLEVBQUUsRUFBRTtHQUNOLEtBQUssRUFBRSxFQUFFO0dBQ1QsSUFBSSxFQUFFLEVBQUU7R0FDUixDQUFDO0VBQ0YsSUFBSSxDQUFDLENBQUM7OztFQUdOLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxRQUFRLEdBQUc7R0FDbEQsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUc7SUFDckMsS0FBSyxPQUFPQSxNQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEdBQUc7S0FDckRBLE1BQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxNQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEY7SUFDRDtHQUNELE1BQU07R0FDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7R0FDOUI7O0VBRUQsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHO0dBQ2pCQSxNQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBR0EsTUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3JFOztFQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7RUFFeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWTtHQUM5QixLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDM0MsQ0FBQyxDQUFDO0VBQ0g7O0NBRUQsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFO0VBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHO0dBQ3BCLE9BQU87R0FDUDs7RUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7R0FDM0IsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztHQUM3QyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0dBQzdDLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFO0dBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7R0FDNUIsWUFBWSxHQUFHLEtBQUs7R0FDcEIsR0FBRyxDQUFDOztFQUVMLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRztHQUN4RCxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7O0dBRWpDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUN0RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztHQUM1Qjs7RUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztFQUVwRyxTQUFTLENBQUMsQ0FBQyxPQUFPO0dBQ2pCLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTTtJQUNuQyxLQUFLLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRztLQUMxRCxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQ3JDLE1BQU07S0FDTixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQ3RDO0lBQ0QsTUFBTTtHQUNQLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUTtJQUNyQyxLQUFLLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRztLQUMxRCxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQ3JDLE1BQU07S0FDTixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQ3RDO0lBQ0QsTUFBTTtHQUNQLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRztJQUNoQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3BELElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkQsTUFBTTtHQUNQLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSTtJQUNqQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNULE1BQU07R0FDUCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUk7SUFDakMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDaEQsTUFBTTtHQUNQLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUMvQixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDL0MsTUFBTTtHQUNQLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSztJQUNsQyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNoRCxNQUFNO0dBQ1AsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJO0lBQ2pDLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUMvQyxNQUFNO0dBQ1A7SUFDQyxPQUFPO0dBQ1I7O0VBRUQsS0FBSyxJQUFJLEdBQUc7R0FDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUMxQixPQUFPO0dBQ1A7O0VBRUQsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHO0dBQ2YsSUFBSSxHQUFHLENBQUMsQ0FBQztHQUNULElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0dBQ3pCLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRztHQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztHQUN6Qjs7RUFFRCxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUc7R0FDZixJQUFJLEdBQUcsQ0FBQyxDQUFDO0dBQ1QsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7R0FDekIsTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHO0dBQ3BDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0dBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0dBQ3pCOztFQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7RUFFN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7RUFDbkI7O0NBRUQsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0VBQ3JELElBQUksSUFBSSxHQUFHLElBQUk7R0FDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7R0FDZixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7R0FDZixTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRTtHQUMzQixRQUFRLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQzs7RUFFakMsU0FBUyxJQUFJLElBQUk7R0FDaEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRTtJQUN4QixJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sQ0FBQzs7R0FFUixLQUFLLEdBQUcsSUFBSSxRQUFRLEdBQUc7SUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRTlCLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUc7S0FDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM3Qjs7SUFFRCxPQUFPO0lBQ1A7O0dBRUQsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLFNBQVMsS0FBSyxRQUFRLENBQUM7R0FDckMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUN2QixJQUFJLEdBQUcsRUFBRSxLQUFLLEdBQUcsTUFBTSxLQUFLLE1BQU0sR0FBRyxNQUFNLENBQUM7R0FDNUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxHQUFHLE1BQU0sS0FBSyxNQUFNLEdBQUcsTUFBTSxDQUFDO0dBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztHQUU1QixLQUFLLElBQUksQ0FBQyxXQUFXLEdBQUc7SUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1Y7R0FDRDs7RUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztFQUN4QixJQUFJLEVBQUUsQ0FBQztFQUNQO0NBQ0QsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0VBQ3pCLFNBQVMsQ0FBQyxDQUFDLElBQUk7R0FDZCxLQUFLLFlBQVksQ0FBQztHQUNsQixLQUFLLGFBQWEsQ0FBQztHQUNuQixLQUFLLGVBQWUsQ0FBQztHQUNyQixLQUFLLFdBQVc7SUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsTUFBTTtHQUNQLEtBQUssV0FBVyxDQUFDO0dBQ2pCLEtBQUssYUFBYSxDQUFDO0dBQ25CLEtBQUssZUFBZSxDQUFDO0dBQ3JCLEtBQUssV0FBVztJQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZCxNQUFNO0dBQ1AsS0FBSyxVQUFVLENBQUM7R0FDaEIsS0FBSyxXQUFXLENBQUM7R0FDakIsS0FBSyxhQUFhLENBQUM7R0FDbkIsS0FBSyxTQUFTLENBQUM7R0FDZixLQUFLLGFBQWEsQ0FBQztHQUNuQixLQUFLLGVBQWUsQ0FBQztHQUNyQixLQUFLLGlCQUFpQixDQUFDO0dBQ3ZCLEtBQUssYUFBYTtJQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsTUFBTTtHQUNQLEtBQUssbUJBQW1CLENBQUM7R0FDekIsS0FBSyxRQUFRO0lBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsTUFBTTtHQUNQLEtBQUssZUFBZSxDQUFDO0dBQ3JCLEtBQUsscUJBQXFCLENBQUM7R0FDM0IsS0FBSyxnQkFBZ0IsQ0FBQztHQUN0QixLQUFLLGlCQUFpQjtJQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU07R0FDUCxLQUFLLE9BQU8sQ0FBQztHQUNiLEtBQUssZ0JBQWdCLENBQUM7R0FDdEIsS0FBSyxZQUFZO0lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixNQUFNO0dBQ1AsS0FBSyxTQUFTO0lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNiLE1BQU07R0FDUCxLQUFLLE9BQU87SUFDWCxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHO0tBQ3RDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDcEI7SUFDRCxNQUFNO0dBQ1A7RUFDRDtDQUNELENBQUM7QUFDRixTQUFTLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0NBQzlELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzVDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztDQUUzQyxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUc7RUFDcEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsZ0NBQWdDLENBQUM7RUFDM0QsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsc0xBQXNMLENBQUM7RUFDak47O0NBRUQsU0FBUyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQzs7Q0FFekMsS0FBSyxTQUFTLElBQUksR0FBRyxHQUFHO0VBQ3ZCLEtBQUssSUFBSSxLQUFLLElBQUksR0FBRztHQUNwQixTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSx5Q0FBeUMsQ0FBQztHQUNyRSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7R0FDaEM7RUFDRCxTQUFTLENBQUMsU0FBUyxHQUFHLDRCQUE0QixDQUFDO0VBQ25ELE1BQU07RUFDTixLQUFLLElBQUksS0FBSyxJQUFJLEdBQUc7R0FDcEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUkseUNBQXlDLENBQUM7R0FDckUsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0dBQy9CO0VBQ0QsU0FBUyxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztFQUNqRDs7Q0FFRCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQzs7Q0FFOUMsS0FBSyxDQUFDLFdBQVcsR0FBRztFQUNuQixTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7RUFDdkM7O0NBRUQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Q0FFakMsT0FBTyxTQUFTLENBQUM7Q0FDakI7O0FBRUQsU0FBUyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTs7O0NBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxPQUFPLENBQUMsRUFBRSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0NBQy9GLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Q0FDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0NBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztDQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHO0VBQ2QsT0FBTyxFQUFFLElBQUk7RUFDYixPQUFPLEVBQUUsSUFBSTtFQUNiLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLE1BQU0sRUFBRSxJQUFJO0VBQ1osaUJBQWlCLEVBQUUsS0FBSztFQUN4QixNQUFNLEVBQUUsS0FBSztFQUNiLElBQUksRUFBRSxLQUFLO0VBQ1gsV0FBVyxFQUFFLENBQUM7RUFDZCxXQUFXLEVBQUUsQ0FBQztFQUNkLENBQUM7O0NBRUYsTUFBTSxJQUFJLENBQUMsSUFBSSxPQUFPLEdBQUc7RUFDeEJBLE1BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdCOztDQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0NBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0NBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0NBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztDQUVqQixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO0VBQy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRztHQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ25ELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN6QztFQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRztHQUNuQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzlFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNwRTtFQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRztHQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ2xELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN4QztFQUNEOztDQUVELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUc7RUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0VBQ3BFLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7RUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUM7O0VBRTFFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztFQUNoQixHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUU7R0FDdEIsR0FBRyxDQUFDLFdBQVc7SUFDZCxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUFFO0tBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3ZDO0lBQ0QsQ0FBQyxDQUFDO0dBQ0g7RUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7RUFDaEM7Q0FDRDs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHO0NBQ3JCLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBRTtFQUN6QixTQUFTLENBQUMsQ0FBQyxJQUFJO0dBQ2QsS0FBSyxZQUFZLENBQUM7R0FDbEIsS0FBSyxhQUFhLENBQUM7R0FDbkIsS0FBSyxlQUFlLENBQUM7R0FDckIsS0FBSyxXQUFXO0lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLE1BQU07R0FDUCxLQUFLLFdBQVcsQ0FBQztHQUNqQixLQUFLLGFBQWEsQ0FBQztHQUNuQixLQUFLLGVBQWUsQ0FBQztHQUNyQixLQUFLLFdBQVc7SUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsTUFBTTtHQUNQLEtBQUssVUFBVSxDQUFDO0dBQ2hCLEtBQUssV0FBVyxDQUFDO0dBQ2pCLEtBQUssYUFBYSxDQUFDO0dBQ25CLEtBQUssU0FBUyxDQUFDO0dBQ2YsS0FBSyxhQUFhLENBQUM7R0FDbkIsS0FBSyxlQUFlLENBQUM7R0FDckIsS0FBSyxpQkFBaUIsQ0FBQztHQUN2QixLQUFLLGFBQWE7SUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNiLE1BQU07R0FDUDtFQUNEOztDQUVELE9BQU8sRUFBRSxZQUFZO0VBQ3BCLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUc7R0FDbEMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztHQUN4QjtFQUNELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUc7R0FDL0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN0RCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ2pGLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O0dBRXJELEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUM3QyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDekUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDOztHQUU3QyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDNUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3ZFLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUMzQzs7RUFFRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUc7R0FDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNsRDtFQUNEOztDQUVELE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRTtFQUNwQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztFQUV6QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7RUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOztFQUVwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7O0VBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0VBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0VBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztFQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O0VBRTlCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOztFQUVqQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUc7R0FDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzFDO0VBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHO0dBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN0RTtFQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRztHQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDMUM7O0VBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztFQUM5Qzs7Q0FFRCxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUU7RUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7R0FDdkMsTUFBTSxFQUFFLE1BQU07R0FDZCxJQUFJLEVBQUUsSUFBSTtHQUNWLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O0VBRTdCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHO0dBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ3hDOztFQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztFQUVsQixNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7RUFFOUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztFQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O0VBRTlCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztFQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7O0VBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O0VBSXRCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztFQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7RUFDcEI7O0NBRUQsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFO0VBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHO0dBQ3RCLE9BQU87R0FDUDs7RUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7RUFFdkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0VBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7RUFFcEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzdDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUN6RSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O0VBRTdDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHO0dBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O0dBRXhFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHO0tBQzNDLElBQUksQ0FBQyxHQUFHO01BQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDbEQsRUFBRSxHQUFHLENBQUMsQ0FBQzs7R0FFVixLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRztJQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pGO0dBQ0Q7O0VBRUQsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHO0dBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQ3RDO0VBQ0Q7O0NBRUQsY0FBYyxFQUFFLFVBQVUsSUFBSSxFQUFFO0VBQy9CLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0VBQ2pCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7RUFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztFQUVoRCxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUc7R0FDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7O0dBRS9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztHQUNoQixHQUFHLENBQUMsV0FBVztJQUNkLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7S0FDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDekM7SUFDRCxDQUFDLENBQUM7R0FDSDtFQUNEOztDQUVELHdCQUF3QixFQUFFLFVBQVUsTUFBTSxFQUFFO0VBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQztFQUNuRTs7Q0FFRCxPQUFPLEVBQUUsWUFBWTtFQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7O0VBRXRCLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRztHQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7R0FDbkYsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7R0FDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO0dBQ2pGLE1BQU07R0FDTixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztHQUN0SDs7RUFFRCxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRztHQUMzRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztHQUN0RCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQzs7R0FFeEQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO0lBQ2pFLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7S0FDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNqQyxNQUFNO0tBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNsQztJQUNEO0dBQ0QsTUFBTTtHQUNOLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0dBQ3pELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxDQUFDOztHQUVyRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUc7SUFDakUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRztLQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2pDLE1BQU07S0FDTixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ2xDO0lBQ0Q7R0FDRDs7RUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzs7RUFFbEMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRztHQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0dBQzdDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUN2RCxNQUFNO0lBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUNqRDs7R0FFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7R0FFdkQsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLEdBQUc7SUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUMsTUFBTTtJQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQzs7R0FFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0dBQ3RIOztFQUVELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7R0FDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztHQUMvQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEosSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDekQsTUFBTTtJQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDbkQ7O0dBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7O0dBRXpELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxHQUFHO0lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLE1BQU07SUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDakM7O0dBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7R0FDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztHQUN0SDs7RUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7RUFDdEI7O0NBRUQsY0FBYyxFQUFFLFlBQVk7RUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztHQUNqRixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOztFQUVoRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRztHQUNyQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHO0lBQzVCLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxHQUFHO0tBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUM5QztJQUNELENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3RCLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRztJQUNuQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sR0FBRztLQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQzlDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNwRCxNQUFNO0tBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDdEI7SUFDRCxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRztJQUNqRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDOUM7O0dBRUQsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRztJQUM1QixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sR0FBRztLQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2hEO0lBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDdEIsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHO0lBQ25DLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxHQUFHO0tBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2hELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUN0RCxNQUFNO0tBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDdEI7SUFDRCxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRztJQUNuRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDaEQ7R0FDRDs7RUFFRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztFQUVYLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHO0dBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0dBQzdHLE1BQU07R0FDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7R0FDbkM7RUFDRDs7Q0FFRCxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3JCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRztHQUNaLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDTixNQUFNLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUc7R0FDOUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7R0FDakI7O0VBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0dBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNOLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRztHQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztHQUNqQjs7RUFFRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzdFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O0VBRTdFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUM3Qjs7Q0FFRCxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFO0VBQzFCLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRztHQUM1QixPQUFPO0dBQ1A7O0VBRUQsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7RUFFeEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0dBQ3pCLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7RUFFdkIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDOztFQUV0QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztFQUVoRSxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFO0dBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztHQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDO0dBQ3BCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztFQUMzQjtDQUNELENBQUM7O0FBRUYsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0FBRXRCLEtBQUssT0FBTyxNQUFNLElBQUksV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUc7Q0FDckQsY0FBYyxHQUFHLE9BQU8sQ0FBQztDQUN6QixNQUFNLEtBQUssT0FBTyxNQUFNLElBQUksVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUc7UUFDaEQsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQztDQUNqRCxNQUFNO0NBQ04sTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDekI7O0NBRUEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7QUN0aUUzQkUsSUFBSSxLQUFLO0lBQUUsZUFBZTtJQUFFLFlBQVk7SUFBRSxVQUFVO0lBQUUsYUFBYTtJQUFFLFlBQVk7SUFBRSxTQUFTO0lBQUUsY0FBYyxDQUFBOztBQUU1RyxBQUFlLFNBQVMsTUFBTSxFQUFFLE9BQU8sRUFBRTtFQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUE7RUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFBO0VBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQTtFQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBO0VBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFBO0VBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO0VBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQTtFQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7RUFDcEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0NBQ2I7O0FBRUQsTUFBTSxDQUFDLFNBQVMsR0FBRzs7RUFFakIsS0FBSyxFQUFFLFlBQVk7SUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0dBQ2xCOztFQUVELE9BQU8sRUFBRSxZQUFZO0lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUU7TUFDVixLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtNQUNyQyxLQUFLLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFBO01BQ2pELGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO01BQy9DLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO01BQzVDLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBOztNQUUxQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtNQUN6QyxTQUFTLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFBOztNQUV2QyxlQUFlLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFBO01BQ2pELFlBQVksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUE7TUFDN0MsVUFBVSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQTtNQUN6QyxlQUFlLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO01BQ3pDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7TUFDdkMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtNQUN0QyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBO01BQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ2pDOztJQUVELFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO0lBQzNCLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUE7SUFDL0MsWUFBWSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQTtJQUM3QyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtJQUM5QixZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtJQUM3QixZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3RDLFlBQVksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7R0FDeEM7O0VBRUQsZ0JBQWdCLEVBQUUsVUFBVSxJQUFJLEVBQUU7SUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO01BQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU07S0FDbkI7U0FDSTtNQUNILE9BQU8sQ0FBQztLQUNUO0dBQ0Y7O0VBRUQsZ0JBQWdCLEVBQUUsWUFBWTtJQUM1QkMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ2pCLEtBQUtELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ2Q7SUFDRCxPQUFPLE1BQU07R0FDZDs7RUFFRCxnQkFBZ0IsRUFBRSxZQUFZO0lBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ2xDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDNUI7U0FDSTtNQUNILE9BQU8sSUFBSSxDQUFDLFlBQVk7S0FDekI7R0FDRjs7RUFFRCxTQUFTLEVBQUUsWUFBWTs7O0lBQ3JCQyxJQUFNLGVBQWUsR0FBRyxZQUFHO01BQ3pCQSxJQUFNLE1BQU0sR0FBR0gsTUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7TUFDdENHLElBQU0sVUFBVSxHQUFHSCxNQUFJLENBQUMsYUFBYSxHQUFHQSxNQUFJLENBQUMsYUFBYSxDQUFDQSxNQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtNQUN0RkcsSUFBTSxNQUFNLEdBQUc7UUFDYixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsVUFBVTtPQUNqQixDQUFBOztNQUVESCxNQUFJLENBQUMsZUFBZSxJQUFJQSxNQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQ0EsTUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQTtNQUNqRkEsTUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0tBQ1osQ0FBQTs7SUFFREcsSUFBTSxjQUFjLEdBQUcsWUFBRztNQUN4QkgsTUFBSSxDQUFDLGNBQWMsSUFBSUEsTUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUNBLE1BQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtNQUN2RUcsSUFBTSxNQUFNLEdBQUdILE1BQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO01BQ3RDRyxJQUFNLFVBQVUsR0FBR0gsTUFBSSxDQUFDLGFBQWEsR0FBR0EsTUFBSSxDQUFDLGFBQWEsQ0FBQ0EsTUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUE7TUFDdEZHLElBQU0sTUFBTSxHQUFHO1FBQ2IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFVBQVU7T0FDakIsQ0FBQTtNQUNESCxNQUFJLENBQUMsZUFBZSxJQUFJQSxNQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQ0EsTUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQTtNQUNqRkEsTUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0tBQ1osQ0FBQTs7SUFFRCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ3hELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUE7R0FDdkQ7O0VBRUQsYUFBYSxFQUFFLFlBQVk7OztJQUN6QkcsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUN2QixVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtJQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ25CLEtBQUtELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQ0YsTUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUMzQjtLQUNGO1NBQ0k7TUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3hCO0dBQ0Y7O0VBRUQsV0FBVyxFQUFFLFVBQVUsS0FBSyxFQUFFO0lBQzVCLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlDRyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZDLEtBQUtELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUMxQ0MsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtNQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7T0FDcEI7V0FDSTtRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQzFCO01BQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNyQjtJQUNELGNBQWMsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUE7SUFDakQsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM5QixVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0dBQzFDOztFQUVELGFBQWEsRUFBRSxZQUFZO0lBQ3pCQSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUE7SUFDcUMsMEJBQUE7TUFDcEQsQ0FBQyxVQUFVLEtBQUssRUFBRTtRQUNoQkEsSUFBTSxVQUFVLEdBQUcsSUFBSUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDdEQsSUFBSSxFQUFFLElBQUk7VUFDVixVQUFVLEVBQUUsSUFBSTtVQUNoQixVQUFVLEVBQUUsS0FBSztVQUNqQixVQUFVLEVBQUUsS0FBSztVQUNqQixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQTs7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTs7UUFFakMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWTtVQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtVQUMzQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7VUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUE7VUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQ2xELENBQUMsQ0FBQTs7UUFFRixVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZO1NBQ25DLENBQUMsQ0FBQTs7UUFFRixVQUFVLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZO1VBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzVDLENBQUMsQ0FBQTs7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRTtVQUM5REEsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQTtVQUN4QixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1dBQzFCO1NBQ0YsQ0FBQyxDQUFBOzs7Ozs7OztPQVFILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNOOztJQXhDRCxLQUFLRCxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUF3Q25ELFVBQUE7R0FDRjs7RUFFRCxTQUFTLEVBQUUsVUFBVSxXQUFXLEVBQUUsRUFBRSxFQUFFOzs7SUFDcENGLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUUsS0FBS0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUMzQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDckJGLE1BQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO09BQ3REO0tBQ0Y7R0FDRjs7RUFFRCxXQUFXLEVBQUUsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFO0lBQ2hDRyxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0MsS0FBS0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUMzQyxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO09BQ2hDO0tBQ0Y7R0FDRjtFQUNELGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRTtJQUMzQkMsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdDLEtBQUtELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUN2QyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO09BQzFCO0tBQ0Y7R0FDRjs7RUFFRCxVQUFVLEVBQUUsWUFBWTtJQUN0QkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7SUFDN0MsS0FBS0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUNwRCxDQUFDLFVBQVUsS0FBSyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7T0FDeEUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ047R0FDRjs7RUFFRCxJQUFJLEVBQUUsWUFBWTtJQUNoQixLQUFLLENBQUMsU0FBUyxHQUFHLGdEQUFnRCxDQUFBO0dBQ25FOztFQUVELElBQUksRUFBRSxZQUFZO0lBQ2hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsaURBQWlELENBQUE7R0FDcEU7Q0FDRixDQUFBOztBQzVPRCxJQUFJLFlBQVksQ0FBQzs7QUFFakIsU0FBUyxLQUFLLElBQUk7SUFDZCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0NBQzlDOzs7O0FBSUQsU0FBUyxlQUFlLEVBQUUsUUFBUSxFQUFFO0lBQ2hDLFlBQVksR0FBRyxRQUFRLENBQUM7Q0FDM0I7O0FDWmMsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0lBQ25DLE9BQU8sS0FBSyxZQUFZLEtBQUssSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssZ0JBQWdCLENBQUM7Q0FDL0Y7O0FDRmMsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFOzs7SUFHcEMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztDQUN2Rjs7QUNKYyxTQUFTLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFDdkMsSUFBSSxDQUFDLENBQUM7SUFDTixLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUU7O1FBRVgsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNmOztBQ1BjLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNwQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssaUJBQWlCLENBQUM7Q0FDbkc7O0FDRmMsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2xDLE9BQU8sS0FBSyxZQUFZLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssZUFBZSxDQUFDO0NBQzdGOztBQ0ZjLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7SUFDRCxPQUFPLEdBQUcsQ0FBQztDQUNkOztBQ05jLFNBQVMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDckMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3JEOztBQ0FjLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDakMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO0tBQ0o7O0lBRUQsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQzNCLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUMzQjs7SUFFRCxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUU7UUFDMUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQ3pCOztJQUVELE9BQU8sQ0FBQyxDQUFDO0NBQ1o7O0FDaEJNLFNBQVMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUN0RCxPQUFPLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztDQUN0RTs7QUNKRCxTQUFTLG1CQUFtQixHQUFHOztJQUUzQixPQUFPO1FBQ0gsS0FBSyxhQUFhLEtBQUs7UUFDdkIsWUFBWSxNQUFNLEVBQUU7UUFDcEIsV0FBVyxPQUFPLEVBQUU7UUFDcEIsUUFBUSxVQUFVLENBQUMsQ0FBQztRQUNwQixhQUFhLEtBQUssQ0FBQztRQUNuQixTQUFTLFNBQVMsS0FBSztRQUN2QixZQUFZLE1BQU0sSUFBSTtRQUN0QixhQUFhLEtBQUssS0FBSztRQUN2QixlQUFlLEdBQUcsS0FBSztRQUN2QixHQUFHLGVBQWUsS0FBSztRQUN2QixlQUFlLEdBQUcsRUFBRTtRQUNwQixRQUFRLFVBQVUsSUFBSTtLQUN6QixDQUFDO0NBQ0w7O0FBRUQsQUFBZSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUU7SUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTtRQUNmLENBQUMsQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQztLQUNqQztJQUNELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztDQUNoQjs7QUN2QkQsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO0lBQ3RCLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztDQUMvQixNQUFNO0lBQ0gsSUFBSSxHQUFHLFVBQVUsR0FBRyxFQUFFOzs7UUFDbEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDOztRQUV6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDRixNQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdEMsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKOztRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2hCLENBQUM7Q0FDTDs7QUFFRCxrQkFBMkI7O0FDYnBCLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3BCLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLFdBQVcsR0FBR00sTUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQzVELE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUNsQixDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ1osQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNuQixDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ3JCLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDaEIsQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUNwQixDQUFDLEtBQUssQ0FBQyxlQUFlO1lBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDOztRQUV6RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDWCxVQUFVLEdBQUcsVUFBVTtnQkFDbkIsS0FBSyxDQUFDLGFBQWEsS0FBSyxDQUFDO2dCQUN6QixLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUMvQixLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQztTQUNuQzs7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoRCxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztTQUMzQjthQUNJO1lBQ0QsT0FBTyxVQUFVLENBQUM7U0FDckI7S0FDSjtJQUNELE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztDQUNyQjs7QUFFRCxBQUFPLFNBQVMsYUFBYSxFQUFFLEtBQUssRUFBRTtJQUNsQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2YsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNyQztTQUNJO1FBQ0QsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7S0FDN0M7O0lBRUQsT0FBTyxDQUFDLENBQUM7Q0FDWjs7QUNoRGMsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFO0lBQ3ZDLE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0NBQzNCOzs7O0FDS0QsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztBQUVuRCxBQUFPLFNBQVMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUU7SUFDakMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQzs7SUFFakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtRQUNyQyxFQUFFLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0tBQy9DO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekIsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3ZCO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDM0IsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQzNCO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDeEIsRUFBRSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7SUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUM1QixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDN0I7O0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzdCLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixFQUFFO1lBQ3hCLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDbEI7U0FDSjtLQUNKOztJQUVELE9BQU8sRUFBRSxDQUFDO0NBQ2I7O0FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7OztBQUc3QixBQUFPLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUMzQixVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDM0I7OztJQUdELElBQUksZ0JBQWdCLEtBQUssS0FBSyxFQUFFO1FBQzVCLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLGdCQUFnQixHQUFHLEtBQUssQ0FBQztLQUM1QjtDQUNKOztBQUVELEFBQU8sU0FBUyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQzNCLE9BQU8sR0FBRyxZQUFZLE1BQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxDQUFDO0NBQ2pGOztBQzVFYyxTQUFTLFFBQVEsRUFBRSxNQUFNLEVBQUU7SUFDdEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFOztRQUVaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakMsTUFBTTtRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QjtDQUNKOztBQ0xjLFNBQVMsS0FBSyxDQUFDLG1CQUFtQixFQUFFO0lBQy9DLElBQUksYUFBYSxHQUFHLENBQUMsbUJBQW1CO1FBQ3BDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBRWQsSUFBSSxhQUFhLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoRCxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ25DOztJQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2hCOzs7QUNSRCxBQUFlLFNBQVMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO0lBQy9ELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxLQUFLLEdBQUcsQ0FBQztRQUNULENBQUMsQ0FBQztJQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6RCxLQUFLLEVBQUUsQ0FBQztTQUNYO0tBQ0o7SUFDRCxPQUFPLEtBQUssR0FBRyxVQUFVLENBQUM7Q0FDN0I7O0FDWEQsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2YsSUFBSSxLQUFLLENBQUMsMkJBQTJCLEtBQUssS0FBSztZQUN2QyxDQUFDLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUMvQztDQUNKOztBQUVELEFBQU8sU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRTtJQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7O0lBRXJCLE9BQU8sTUFBTSxDQUFDLFlBQVk7OztRQUN0QixJQUFJLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFDbEMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBSSxHQUFHLENBQUM7WUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDVCxJQUFJLE9BQU9MLFdBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ2xDLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDeEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzFCLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHQSxXQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO3FCQUNoRDtvQkFDRCxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDMUIsTUFBTTtvQkFDSCxHQUFHLEdBQUdBLFdBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JHLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDVjs7QUFFRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7O0FBRXRCLEFBQU8sU0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN2QyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7UUFDbEMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN2QztJQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUM3QjtDQUNKOztBQUVELEtBQUssQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7QUFDMUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQzs7QUN0RGpCLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRTtJQUN0QyxPQUFPLEtBQUssWUFBWSxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0NBQ3JHOztBQ0dNLFNBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRTs7O0lBQ3pCLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNaLEtBQUssQ0FBQyxJQUFJLE1BQU0sRUFBRTtRQUNkLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEJELE1BQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDbEIsTUFBTTtZQUNIQSxNQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN4QjtLQUNKO0lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7OztJQUd0QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDaEc7O0FBRUQsQUFBTyxTQUFTLFlBQVksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFO0lBQ3BELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3pDLEtBQUssSUFBSSxJQUFJLFdBQVcsRUFBRTtRQUN0QixJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUM3RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDeEMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakMsTUFBTTtnQkFDSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQjtTQUNKO0tBQ0o7SUFDRCxLQUFLLElBQUksSUFBSSxZQUFZLEVBQUU7UUFDdkIsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztnQkFDOUIsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFOztZQUVsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNyQztLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUM7Q0FDZDs7QUM3Q00sU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BCO0NBQ0o7O0FDRkQsSUFBSSxJQUFJLENBQUM7O0FBRVQsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDdEIsTUFBTTtJQUNILElBQUksR0FBRyxVQUFVLEdBQUcsRUFBRTtRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUNYLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNkLENBQUM7Q0FDTDs7QUFFRCxrQkFBMkI7O0FDbEJwQixJQUFJLGVBQWUsR0FBRztJQUN6QixPQUFPLEdBQUcsZUFBZTtJQUN6QixPQUFPLEdBQUcsa0JBQWtCO0lBQzVCLFFBQVEsR0FBRyxjQUFjO0lBQ3pCLE9BQU8sR0FBRyxtQkFBbUI7SUFDN0IsUUFBUSxHQUFHLHFCQUFxQjtJQUNoQyxRQUFRLEdBQUcsR0FBRztDQUNqQixDQUFDOztBQUVGLEFBRUEsQUFBTyxTQUFTLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0QsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0NBQzlEOztBQ2RNLElBQUkscUJBQXFCLEdBQUc7SUFDL0IsR0FBRyxJQUFJLFdBQVc7SUFDbEIsRUFBRSxLQUFLLFFBQVE7SUFDZixDQUFDLE1BQU0sWUFBWTtJQUNuQixFQUFFLEtBQUssY0FBYztJQUNyQixHQUFHLElBQUkscUJBQXFCO0lBQzVCLElBQUksR0FBRywyQkFBMkI7Q0FDckMsQ0FBQzs7QUFFRixBQUFPLFNBQVMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7SUFFMUQsSUFBSSxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDeEIsT0FBTyxNQUFNLENBQUM7S0FDakI7O0lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsR0FBRyxFQUFFO1FBQy9FLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QixDQUFDLENBQUM7O0lBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3BDOztBQ3RCTSxJQUFJLGtCQUFrQixHQUFHLGNBQWMsQ0FBQzs7QUFFL0MsQUFBTyxTQUFTLFdBQVcsSUFBSTtJQUMzQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7Q0FDNUI7O0FDSk0sSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLEFBQU8sSUFBSSxtQkFBbUIsR0FBRyxTQUFTLENBQUM7O0FBRTNDLEFBQU8sU0FBUyxPQUFPLEVBQUUsTUFBTSxFQUFFO0lBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQzlDOztBQ0xNLElBQUksbUJBQW1CLEdBQUc7SUFDN0IsTUFBTSxHQUFHLE9BQU87SUFDaEIsSUFBSSxLQUFLLFFBQVE7SUFDakIsQ0FBQyxJQUFJLGVBQWU7SUFDcEIsQ0FBQyxJQUFJLFVBQVU7SUFDZixFQUFFLEdBQUcsWUFBWTtJQUNqQixDQUFDLElBQUksU0FBUztJQUNkLEVBQUUsR0FBRyxVQUFVO0lBQ2YsQ0FBQyxJQUFJLE9BQU87SUFDWixFQUFFLEdBQUcsU0FBUztJQUNkLENBQUMsSUFBSSxTQUFTO0lBQ2QsRUFBRSxHQUFHLFdBQVc7SUFDaEIsQ0FBQyxJQUFJLFFBQVE7SUFDYixFQUFFLEdBQUcsVUFBVTtDQUNsQixDQUFDOztBQUVGLEFBRUEsQUFBTyxTQUFTLFlBQVksRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDbkUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7UUFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDckM7O0FBRUQsQUFBTyxTQUFTLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDOUQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQzlFOztBQzFCRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRWpCLEFBQU8sU0FBUyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUMzQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztDQUM3RTs7QUFFRCxBQUFPLFNBQVMsY0FBYyxDQUFDLEtBQUssRUFBRTtJQUNsQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztDQUNqRzs7QUFFRCxBQUFPLFNBQVMsb0JBQW9CLENBQUMsV0FBVyxFQUFFO0lBQzlDLElBQUksZUFBZSxHQUFHLEVBQUU7UUFDcEIsY0FBYztRQUNkLElBQUksQ0FBQzs7SUFFVCxLQUFLLElBQUksSUFBSSxXQUFXLEVBQUU7UUFDdEIsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQy9CLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxjQUFjLEVBQUU7Z0JBQ2hCLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkQ7U0FDSjtLQUNKOztJQUVELE9BQU8sZUFBZSxDQUFDO0NBQzFCOztBQzVCRCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXBCLEFBQU8sU0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUM1QyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0NBQy9COztBQUVELEFBQU8sU0FBUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFDMUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2QixPQUFPLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUNsQyxDQUFDLENBQUM7SUFDSCxPQUFPLEtBQUssQ0FBQztDQUNoQjs7QUNUTSxTQUFTLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ3hDLE9BQU8sVUFBVSxLQUFLLEVBQUU7UUFDcEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2ZPLEtBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2YsTUFBTTtZQUNILE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxQjtLQUNKLENBQUM7Q0FDTDs7QUFFRCxBQUFPLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7SUFDNUIsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFO1FBQ2hCLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7Q0FDaEU7O0FBRUQsQUFBTyxTQUFTQSxLQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDbkMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDZixHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNEO0NBQ0o7Ozs7QUFJRCxBQUFPLFNBQVMsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUM5QixLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7S0FDeEI7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNmOzs7QUFHRCxBQUFPLFNBQVMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7OztJQUNyQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQixLQUFLLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxXQUFXLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekNQLE1BQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0tBQ0osTUFBTTtRQUNILEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2Y7O0FDdERjLFNBQVMsUUFBUSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFO0lBQzlELElBQUksU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxXQUFXLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNO1FBQzdDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7Q0FDL0U7O0FDSk0sSUFBSSxnQkFBZ0IsR0FBRyxzTEFBc0wsQ0FBQzs7QUFFck4sSUFBSSxxQkFBcUIsR0FBRyw0Q0FBNEMsQ0FBQzs7QUFFekUsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUV6QixBQUFPLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNckMsQUFBTyxTQUFTLGNBQWMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7SUFDOUQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3BCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQzlCLElBQUksR0FBRyxZQUFZO1lBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUMzQixDQUFDO0tBQ0w7SUFDRCxJQUFJLEtBQUssRUFBRTtRQUNQLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztLQUN0QztJQUNELElBQUksTUFBTSxFQUFFO1FBQ1Isb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWTtZQUMxQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEUsQ0FBQztLQUNMO0lBQ0QsSUFBSSxPQUFPLEVBQUU7UUFDVCxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxZQUFZO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4RSxDQUFDO0tBQ0w7Q0FDSjs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLEtBQUssRUFBRTtJQUNuQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN4QztJQUNELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDbkM7O0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7SUFDaEMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7O0lBRXRELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2hELElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDLE1BQU07WUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7S0FDSjs7SUFFRCxPQUFPLFVBQVUsR0FBRyxFQUFFO1FBQ2xCLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakIsQ0FBQztDQUNMOzs7QUFHRCxBQUFPLFNBQVMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUU7SUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNkLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3ZDOztJQUVELE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBRWhGLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3JDOztBQUVELEFBQU8sU0FBUyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRVYsU0FBUywyQkFBMkIsQ0FBQyxLQUFLLEVBQUU7UUFDeEMsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztLQUNoRDs7SUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDakQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUM1RSxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDVjs7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUMxRk0sSUFBSSxNQUFNLFdBQVcsSUFBSSxDQUFDO0FBQ2pDLEFBQU8sSUFBSSxNQUFNLFdBQVcsTUFBTSxDQUFDO0FBQ25DLEFBQU8sSUFBSSxNQUFNLFdBQVcsT0FBTyxDQUFDO0FBQ3BDLEFBQU8sSUFBSSxNQUFNLFdBQVcsT0FBTyxDQUFDO0FBQ3BDLEFBQU8sSUFBSSxNQUFNLFdBQVcsWUFBWSxDQUFDO0FBQ3pDLEFBQU8sSUFBSSxTQUFTLFFBQVEsT0FBTyxDQUFDO0FBQ3BDLEFBQU8sSUFBSSxTQUFTLFFBQVEsV0FBVyxDQUFDO0FBQ3hDLEFBQU8sSUFBSSxTQUFTLFFBQVEsZUFBZSxDQUFDO0FBQzVDLEFBQU8sSUFBSSxTQUFTLFFBQVEsU0FBUyxDQUFDO0FBQ3RDLEFBQU8sSUFBSSxTQUFTLFFBQVEsU0FBUyxDQUFDO0FBQ3RDLEFBQU8sSUFBSSxTQUFTLFFBQVEsY0FBYyxDQUFDOztBQUUzQyxBQUFPLElBQUksYUFBYSxJQUFJLEtBQUssQ0FBQztBQUNsQyxBQUFPLElBQUksV0FBVyxNQUFNLFVBQVUsQ0FBQzs7QUFFdkMsQUFBTyxJQUFJLFdBQVcsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxBQUFPLElBQUksZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7O0FBRXhELEFBQU8sSUFBSSxjQUFjLEdBQUcsc0JBQXNCLENBQUM7Ozs7QUFJbkQsQUFBTyxJQUFJLFNBQVMsR0FBRyxrSEFBa0gsQ0FBQzs7O0FBRzFJLEFBQ0EsQUFFQSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRWpCLEFBQU8sU0FBUyxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsVUFBVSxRQUFRLEVBQUUsVUFBVSxFQUFFO1FBQ3pFLE9BQU8sQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQztLQUMxRCxDQUFDO0NBQ0w7O0FBRUQsQUFBTyxTQUFTLHFCQUFxQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0IsT0FBTyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1Qzs7SUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUN6RDs7O0FBR0QsU0FBUyxjQUFjLENBQUMsQ0FBQyxFQUFFO0lBQ3ZCLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDckgsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDL0IsQ0FBQyxDQUFDLENBQUM7Q0FDUDs7QUFFRCxBQUFPLFNBQVMsV0FBVyxDQUFDLENBQUMsRUFBRTtJQUMzQixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDdEQ7O0FDakRELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsQUFBTyxTQUFTLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0lBQzVDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxRQUFRLENBQUM7SUFDdkIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDM0IsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkI7SUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNwQixJQUFJLEdBQUcsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzNCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEMsQ0FBQztLQUNMO0lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDM0I7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUNoRCxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1FBQ3hELE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM3QyxDQUFDLENBQUM7Q0FDTjs7QUFFRCxBQUFPLFNBQVMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDMUQsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNsRDtDQUNKOztBQ2hDTSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDcEIsQUFBTyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDckIsQUFBTyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDcEIsQUFBTyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDcEIsQUFBTyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDdEIsQUFBTyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDdEIsQUFBTyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDM0IsQUFBTyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDcEIsQUFBTyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7O0FDUnZCLElBQUksT0FBTyxDQUFDOztBQUVaLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7SUFDekIsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0NBQ3JDLE1BQU07SUFDSCxPQUFPLEdBQUcsVUFBVSxDQUFDLEVBQUU7Ozs7UUFFbkIsSUFBSSxDQUFDLENBQUM7UUFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDOUIsSUFBSUEsTUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsQ0FBQzthQUNaO1NBQ0o7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2IsQ0FBQztDQUNMOztBQUVELHdCQUE4Qjs7QUNEdkIsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUNyQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztDQUM5RDs7OztBQUlELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVk7SUFDN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzNCLENBQUMsQ0FBQzs7QUFFSCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxNQUFNLEVBQUU7SUFDMUMsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztDQUN0RCxDQUFDLENBQUM7O0FBRUgsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsTUFBTSxFQUFFO0lBQzNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDakQsQ0FBQyxDQUFDOzs7O0FBSUgsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQzs7OztBQUkzQixlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7O0FBSTVCLGFBQWEsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUM7QUFDakMsYUFBYSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekMsYUFBYSxDQUFDLEtBQUssR0FBRyxVQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUU7SUFDOUMsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDNUMsQ0FBQyxDQUFDO0FBQ0gsYUFBYSxDQUFDLE1BQU0sRUFBRSxVQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUU7SUFDOUMsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ3ZDLENBQUMsQ0FBQzs7QUFFSCxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQy9DLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ25DLENBQUMsQ0FBQzs7QUFFSCxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDbEUsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBRXJFLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDeEIsTUFBTTtRQUNILGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0tBQ2hEO0NBQ0osQ0FBQyxDQUFDOzs7O0FBSUgsSUFBSSxnQkFBZ0IsR0FBRywrQkFBK0IsQ0FBQztBQUN2RCxBQUFPLElBQUksbUJBQW1CLEdBQUcsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BJLEFBQU8sU0FBUyxZQUFZLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRTtJQUNyQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Q0FDbkg7O0FBRUQsQUFBTyxJQUFJLHdCQUF3QixHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRyxBQUFPLFNBQVMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRTtJQUMxQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzVCO0lBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztDQUM3Rjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFOzs7SUFDbEQsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7O1FBRXBCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQixHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0JBLE1BQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBR0EsTUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMxRUEsTUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHQSxNQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZFO0tBQ0o7O0lBRUQsSUFBSSxNQUFNLEVBQUU7UUFDUixJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDbEIsRUFBRSxHQUFHUSxTQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2hDLE1BQU07WUFDSCxFQUFFLEdBQUdBLFNBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7U0FDaEM7S0FDSixNQUFNO1FBQ0gsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ2xCLEVBQUUsR0FBR0EsU0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUNELEVBQUUsR0FBR0EsU0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztTQUNoQyxNQUFNO1lBQ0gsRUFBRSxHQUFHQSxTQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDWCxPQUFPLEVBQUUsQ0FBQzthQUNiO1lBQ0QsRUFBRSxHQUFHQSxTQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0tBQ0o7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7OztJQUMxRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDOztJQUVsQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUN4QixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNsRTs7SUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7S0FDL0I7Ozs7O0lBS0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1FBRXJCLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLE1BQU0sSUFBSSxDQUFDUixNQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckNBLE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUdBLE1BQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlGQSxNQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHQSxNQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2RztRQUNELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQ0EsTUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQyxLQUFLLEdBQUcsR0FBRyxHQUFHQSxNQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUdBLE1BQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFQSxNQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xFOztRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUlBLE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekUsT0FBTyxDQUFDLENBQUM7U0FDWixNQUFNLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUlBLE1BQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEYsT0FBTyxDQUFDLENBQUM7U0FDWixNQUFNLElBQUksQ0FBQyxNQUFNLElBQUlBLE1BQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sQ0FBQyxDQUFDO1NBQ1o7S0FDSjtDQUNKOzs7O0FBSUQsQUFBTyxTQUFTLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0lBQ2xDLElBQUksVUFBVSxDQUFDOztJQUVmLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7O1FBRWhCLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7O0lBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEIsTUFBTTtZQUNILEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUU1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixPQUFPLEdBQUcsQ0FBQzthQUNkO1NBQ0o7S0FDSjs7SUFFRCxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU8sR0FBRyxDQUFDO0NBQ2Q7O0FBRUQsQUFBTyxTQUFTLFdBQVcsRUFBRSxLQUFLLEVBQUU7SUFDaEMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2YsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QixLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQztLQUNmLE1BQU07UUFDSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsY0FBYyxJQUFJO0lBQzlCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztDQUNqRDs7QUFFRCxJQUFJLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztBQUN4QyxBQUFPLFNBQVMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFO0lBQ3hDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxFQUFFO1lBQ25DLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksUUFBUSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsTUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQ2pDO0tBQ0osTUFBTTtRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHVCQUF1QixDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxJQUFJLENBQUMsdUJBQXVCLElBQUksUUFBUTtZQUMzQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBQzdEO0NBQ0o7O0FBRUQsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUM7QUFDbkMsQUFBTyxTQUFTLFdBQVcsRUFBRSxRQUFRLEVBQUU7SUFDbkMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEVBQUU7WUFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxRQUFRLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNsQyxNQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzVCO0tBQ0osTUFBTTtRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxRQUFRO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQ25EO0NBQ0o7O0FBRUQsU0FBUyxrQkFBa0IsSUFBSTs7O0lBQzNCLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDckIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDOUI7O0lBRUQsSUFBSSxXQUFXLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsV0FBVyxHQUFHLEVBQUU7UUFDbkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFOztRQUVyQixHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQ0EsTUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsSUFBSSxDQUFDQSxNQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxJQUFJLENBQUNBLE1BQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLElBQUksQ0FBQ0EsTUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMvQzs7O0lBR0QsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoRDs7SUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcs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RSxNQUFNLEVBQUU7SUFDakQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQzFDLENBQUMsQ0FBQztBQUNILGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNuRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQzFDLENBQUMsQ0FBQztBQUNILGFBQWEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNqRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMs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QUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEQsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFakQsT0FBTyxPQUFPLEtBQUssQ0FBQztNQUNsQixDQUFDO01BQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7Q0FDM0M7OztBQUdELEFBQU8sU0FBUyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQyxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUM7SUFDZCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDZCxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFFM0csR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPLEdBQUcsQ0FBQztLQUNkLE1BQU07UUFDSCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNyQztDQUNKOztBQUVELFNBQVMsYUFBYSxFQUFFLENBQUMsRUFBRTs7O0lBR3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7Q0FDMUQ7Ozs7OztBQU1ELEtBQUssQ0FBQyxZQUFZLEdBQUcsWUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY3BDLEFBQU8sU0FBUyxZQUFZLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7UUFDMUIsV0FBVyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDakIsT0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7S0FDckM7SUFDRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixLQUFLLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0osTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzdCLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksYUFBYSxFQUFFO1lBQy9CLFdBQVcsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7YUFDakM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2YsTUFBTTtRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JEO0NBQ0o7O0FBRUQsQUFBTyxTQUFTLFVBQVUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO0lBQzlDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztTQUNsQjs7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQzs7UUFFckMsT0FBTyxJQUFJLENBQUM7S0FDZixNQUFNO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUM1QjtDQUNKOztBQUVELEFBQU8sU0FBUyxjQUFjLEVBQUUsYUFBYSxFQUFFO0lBQzNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FDM0M7O0FBRUQsQUFBTyxTQUFTLGdCQUFnQixFQUFFLGFBQWEsRUFBRTtJQUM3QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7UUFFcEIsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDZjs7QUFFRCxBQUFPLFNBQVMsdUJBQXVCLElBQUk7SUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3QixNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRTtRQUNwQyxJQUFJLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFDSTtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNCO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNmOztBQUVELEFBQU8sU0FBUyxvQkFBb0IsRUFBRSxLQUFLLEVBQUU7SUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNqQixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELEtBQUssR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFFbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2hEOztBQUVELEFBQU8sU0FBUyxvQkFBb0IsSUFBSTtJQUNwQyxPQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO1FBQ3BELElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtLQUN2RCxDQUFDO0NBQ0w7O0FBRUQsQUFBTyxTQUFTLDJCQUEyQixJQUFJO0lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUM3Qjs7SUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O0lBRVgsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVyQixJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0IsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hELE1BQU07UUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztLQUM5Qjs7SUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7Q0FDN0I7O0FBRUQsQUFBTyxTQUFTLE9BQU8sSUFBSTtJQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0NBQ2hEOztBQUVELEFBQU8sU0FBUyxXQUFXLElBQUk7SUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDL0M7O0FBRUQsQUFBTyxTQUFTLEtBQUssSUFBSTtJQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztDQUNyRTs7O0FDaE9ELElBQUksV0FBVyxHQUFHLHVEQUF1RCxDQUFDOzs7OztBQUsxRSxJQUFJLFFBQVEsR0FBRyw2SUFBNkksQ0FBQzs7QUFFN0osQUFBTyxTQUFTLGNBQWMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLElBQUksUUFBUSxHQUFHLEtBQUs7O1FBRWhCLEtBQUssR0FBRyxJQUFJO1FBQ1osSUFBSTtRQUNKLEdBQUc7UUFDSCxPQUFPLENBQUM7O0lBRVosSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsUUFBUSxHQUFHO1lBQ1AsRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhO1lBQ3hCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSztZQUNoQixDQUFDLElBQUksS0FBSyxDQUFDLE9BQU87U0FDckIsQ0FBQztLQUNMLE1BQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksR0FBRyxFQUFFO1lBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN6QixNQUFNO1lBQ0gsUUFBUSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDakM7S0FDSixNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUM1QyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLFFBQVEsR0FBRztZQUNQLENBQUMsSUFBSSxDQUFDO1lBQ04sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsMkJBQTJCLElBQUk7WUFDdEQsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsMkJBQTJCLElBQUk7WUFDdEQsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMseUJBQXlCLElBQUk7WUFDdEQsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMseUJBQXlCLElBQUk7WUFDdEQsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtTQUN6RCxDQUFDO0tBQ0wsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDekMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxRQUFRLEdBQUc7WUFDUCxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDNUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzVCLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUM1QixDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDNUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzVCLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUM1QixDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7U0FDL0IsQ0FBQztLQUNMLE1BQU0sSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3pCLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxFQUFFO1FBQ2pGLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFFbEYsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFFBQVEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FDL0I7O0lBRUQsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQUU3QixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1FBQ25ELEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUMvQjs7SUFFRCxPQUFPLEdBQUcsQ0FBQztDQUNkOztBQUVELGNBQWMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7QUFFdkMsU0FBUyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTs7OztJQUkxQixJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRW5ELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztDQUN4Qzs7QUFFRCxTQUFTLHlCQUF5QixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDNUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUFFdkMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNyQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xELEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUNoQjs7SUFFRCxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFFakUsT0FBTyxHQUFHLENBQUM7Q0FDZDs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDcEMsSUFBSSxHQUFHLENBQUM7SUFDUixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDdEMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDOztJQUVELEtBQUssR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QixHQUFHLEdBQUcseUJBQXlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2hELE1BQU07UUFDSCxHQUFHLEdBQUcseUJBQXlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQzVCOztJQUVELE9BQU8sR0FBRyxDQUFDO0NBQ2Q7OztBQzlHRCxTQUFTLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFO0lBQ2xDLE9BQU8sVUFBVSxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQzFCLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQzs7UUFFYixJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsR0FBRyxJQUFJLElBQUksc0RBQXNELEdBQUcsSUFBSSxHQUFHLG9CQUFvQjtZQUNoSSw4RUFBOEUsQ0FBQyxDQUFDO1lBQ2hGLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUN6Qzs7UUFFRCxHQUFHLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzQyxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztLQUNmLENBQUM7Q0FDTDs7QUFFRCxBQUFPLFNBQVMsV0FBVyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtJQUNoRSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYTtRQUNyQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0IsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBRXhDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7O1FBRWhCLE9BQU87S0FDVjs7SUFFRCxZQUFZLEdBQUcsWUFBWSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsWUFBWSxDQUFDOztJQUUxRCxJQUFJLFlBQVksRUFBRTtRQUNkLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsSUFBSSxJQUFJLEVBQUU7UUFDTkgsS0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUM7S0FDeEQ7SUFDRCxJQUFJLE1BQU0sRUFBRTtRQUNSLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7S0FDeEQ7SUFDRCxJQUFJLFlBQVksRUFBRTtRQUNkLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQztLQUMzQztDQUNKOztBQUVELEFBQU8sSUFBSSxHQUFHLFFBQVEsV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1QyxBQUFPLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQzs7QUNoRDNDLFNBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUM3QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVTtZQUNyQixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxHQUFHLFNBQVM7WUFDcEIsSUFBSSxHQUFHLENBQUMsR0FBRyxTQUFTO1lBQ3BCLElBQUksR0FBRyxDQUFDLEdBQUcsU0FBUztZQUNwQixJQUFJLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDOUM7O0FBRUQsQUFBTyxTQUFTSSxVQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7O0lBR3JDLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxXQUFXLEVBQUU7UUFDM0IsR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDOztJQUUzRCxJQUFJLE1BQU0sR0FBRyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBRTFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUY7O0FDdkJNLFNBQVMsS0FBSyxJQUFJO0lBQ3JCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDM0I7O0FDQ00sU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUNuQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDM0MsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNwRSxJQUFJLEtBQUssS0FBSyxhQUFhLEVBQUU7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hELE1BQU07UUFDSCxPQUFPLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZFO0NBQ0o7O0FBRUQsQUFBTyxTQUFTLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQ3BDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUMzQyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELEtBQUssR0FBRyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQ3BFLElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRTtRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEQsTUFBTTtRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDckU7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUNyRCxXQUFXLEdBQUcsV0FBVyxJQUFJLElBQUksQ0FBQztJQUNsQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JGLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDdEY7O0FBRUQsQUFBTyxTQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQ2xDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUN6RCxPQUFPLENBQUM7SUFDWixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDM0MsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUMsQ0FBQztJQUMvQyxJQUFJLEtBQUssS0FBSyxhQUFhLEVBQUU7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2xELE1BQU07UUFDSCxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDN0c7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDekMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNqRTs7QUFFRCxBQUFPLFNBQVMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNsRTs7QUN0RE0sU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDekMsSUFBSSxJQUFJO1FBQ0osU0FBUztRQUNULEtBQUssRUFBRSxNQUFNLENBQUM7O0lBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDakIsT0FBTyxHQUFHLENBQUM7S0FDZDs7SUFFRCxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNkOztJQUVELFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7O0lBRXhELEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBRTlCLElBQUksS0FBSyxLQUFLLE1BQU0sSUFBSSxLQUFLLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDOUQsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCLE1BQU0sSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO0tBQ0osTUFBTTtRQUNILEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxLQUFLLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHO1lBQ3JDLEtBQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHLEdBQUc7WUFDaEMsS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSTtZQUMvQixLQUFLLEtBQUssS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEtBQUs7WUFDN0MsS0FBSyxLQUFLLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxNQUFNO1lBQy9DLEtBQUssQ0FBQztLQUNiO0lBQ0QsT0FBTyxPQUFPLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUM5Qzs7QUFFRCxTQUFTLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOztJQUV0QixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7UUFFdkUsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQztRQUNoRCxPQUFPLEVBQUUsTUFBTSxDQUFDOztJQUVwQixJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7O1FBRXRELE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztLQUM5QyxNQUFNO1FBQ0gsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzs7UUFFdEQsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0tBQzlDOzs7SUFHRCxPQUFPLENBQUMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzFDOztBQ3pERCxLQUFLLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFDO0FBQzdDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQzs7QUFFbEQsQUFBTyxTQUFTLFFBQVEsSUFBSTtJQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Q0FDL0U7O0FBRUQsQUFBTyxTQUFTLFdBQVcsSUFBSTtJQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDbEMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTs7WUFFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEMsTUFBTTtZQUNILE9BQU8sWUFBWSxDQUFDLENBQUMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1NBQzFEO0tBQ0osTUFBTTtRQUNILE9BQU8sWUFBWSxDQUFDLENBQUMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0tBQzVEO0NBQ0o7Ozs7Ozs7O0FBUUQsQUFBTyxTQUFTLE9BQU8sSUFBSTtJQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ2pCLE9BQU8sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7S0FDbEQ7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUM7SUFDcEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFDbEUsSUFBSSxHQUFHLEdBQUcsQ0FBQztLQUNkO0lBQ0QsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7SUFDaEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3hFLElBQUksUUFBUSxHQUFHLHVCQUF1QixDQUFDO0lBQ3ZDLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7O0lBRTNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztDQUN6RDs7QUFFRCxBQUFPLFNBQVMsTUFBTSxFQUFFLFdBQVcsRUFBRTtJQUNqQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2QsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztLQUM3RTtJQUNELElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0MsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQy9DOztBQ25ETSxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0lBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLE9BQU8sY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDaEcsTUFBTTtRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFDO0NBQ0o7O0FBRUQsQUFBTyxTQUFTLE9BQU8sRUFBRSxhQUFhLEVBQUU7SUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQ2xEOztBQ1pNLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7SUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDbkMsT0FBTyxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNoRyxNQUFNO1FBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDMUM7Q0FDSjs7QUFFRCxBQUFPLFNBQVMsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUNsQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FDaEQ7Ozs7O0FDVkQsQUFBTyxTQUFTLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFDekIsSUFBSSxhQUFhLENBQUM7O0lBRWxCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQzdCLE1BQU07UUFDSCxhQUFhLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Q0FDSjs7QUFFRCxBQUFPLElBQUksSUFBSSxHQUFHLFNBQVM7SUFDdkIsaUpBQWlKO0lBQ2pKLFVBQVUsR0FBRyxFQUFFO1FBQ1gsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVCLE1BQU07WUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDSjtDQUNKLENBQUM7O0FBRUYsQUFBTyxTQUFTLFVBQVUsSUFBSTtJQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Q0FDdkI7O0FDL0JNLFNBQVMsT0FBTyxFQUFFLEtBQUssRUFBRTtJQUM1QixLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7SUFHOUIsUUFBUSxLQUFLO1FBQ1QsS0FBSyxNQUFNO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFbEIsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLE9BQU87WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUVqQixLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxLQUFLLENBQUM7UUFDWCxLQUFLLE1BQU07WUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUVsQixLQUFLLE1BQU07WUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUVwQixLQUFLLFFBQVE7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUVwQixLQUFLLFFBQVE7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCOzs7SUFHRCxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQjtJQUNELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCOzs7SUFHRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoRDs7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNmOztBQUVELEFBQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzFCLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxhQUFhLEVBQUU7UUFDaEQsT0FBTyxJQUFJLENBQUM7S0FDZjs7O0lBR0QsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ2xCLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDakI7O0lBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDL0Y7O0FDMURNLFNBQVMsT0FBTyxJQUFJO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztDQUM1RDs7QUFFRCxBQUFPLFNBQVMsSUFBSSxJQUFJO0lBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7Q0FDNUM7O0FBRUQsQUFBTyxTQUFTLE1BQU0sSUFBSTtJQUN0QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0NBQ25DOztBQUVELEFBQU8sU0FBUyxPQUFPLElBQUk7SUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0NBQzdGOztBQUVELEFBQU8sU0FBUyxRQUFRLElBQUk7SUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2IsT0FBTztRQUNILEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ2YsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDakIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDZCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtRQUNoQixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtRQUNwQixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtRQUNwQixZQUFZLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtLQUNqQyxDQUFDO0NBQ0w7O0FBRUQsQUFBTyxTQUFTLE1BQU0sSUFBSTs7SUFFdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztDQUNyRDs7QUM3Qk0sU0FBU0MsU0FBTyxJQUFJO0lBQ3ZCLE9BQU9DLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN6Qjs7QUFFRCxBQUFPLFNBQVMsWUFBWSxJQUFJO0lBQzVCLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztDQUM1Qzs7QUFFRCxBQUFPLFNBQVMsU0FBUyxJQUFJO0lBQ3pCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztDQUN6Qzs7QUNkTSxTQUFTLFlBQVksR0FBRztJQUMzQixPQUFPO1FBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87S0FDdkIsQ0FBQztDQUNMOzs7O0FDS0QsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtJQUN4QyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUM7Q0FDaEMsQ0FBQyxDQUFDOztBQUVILGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7SUFDeEMsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDO0NBQ25DLENBQUMsQ0FBQzs7QUFFSCxTQUFTLHNCQUFzQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDNUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3ZEOztBQUVELHNCQUFzQixDQUFDLE1BQU0sTUFBTSxVQUFVLENBQUMsQ0FBQztBQUMvQyxzQkFBc0IsQ0FBQyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUM7QUFDL0Msc0JBQXNCLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxDQUFDO0FBQy9DLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQzs7OztBQUkvQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9CLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7QUFJbEMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7OztBQUtsQyxhQUFhLENBQUMsR0FBRyxPQUFPLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sV0FBVyxDQUFDLENBQUM7QUFDckMsYUFBYSxDQUFDLElBQUksTUFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsYUFBYSxDQUFDLElBQUksTUFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsYUFBYSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsYUFBYSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsYUFBYSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsYUFBYSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRTNDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsVUFBVSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDeEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQzNDLENBQUMsQ0FBQzs7QUFFSCxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ2hELENBQUMsQ0FBQzs7OztBQUlILEFBQU8sU0FBUyxjQUFjLEVBQUUsS0FBSyxFQUFFO0lBQ25DLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDN0IsS0FBSztZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDeEM7O0FBRUQsQUFBTyxTQUFTLGlCQUFpQixFQUFFLEtBQUssRUFBRTtJQUN0QyxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUMzRDs7QUFFRCxBQUFPLFNBQVMsaUJBQWlCLElBQUk7SUFDakMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUN6Qzs7QUFFRCxBQUFPLFNBQVMsY0FBYyxJQUFJO0lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDdkMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQy9EOztBQUVELFNBQVMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUMxRCxJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUMxQyxNQUFNO1FBQ0gsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtZQUNwQixJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDaEU7Q0FDSjs7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ25ELElBQUksYUFBYSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDckUsSUFBSSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBRXpFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLE9BQU8sSUFBSSxDQUFDO0NBQ2Y7Ozs7QUNoR0QsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7O0FBSXhDLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7QUFJN0IsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7OztBQUk5QixhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDekMsQ0FBQyxDQUFDOzs7O0FBSUgsQUFBTyxTQUFTLGFBQWEsRUFBRSxLQUFLLEVBQUU7SUFDbEMsT0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQzdHOzs7O0FDcEJELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7O0FBSTdDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7OztBQUcxQixlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7O0FBSTNCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDL0IsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUU7SUFDNUMsT0FBTyxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7Q0FDeEUsQ0FBQyxDQUFDOztBQUVILGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDdEQsQ0FBQyxDQUFDOzs7O0FBSUgsQUFBTyxJQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7QUN4QnZELGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7O0FBSXhELFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7OztBQUdqQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7O0FBSWhDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDakMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QixhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUMzRCxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNwQyxDQUFDLENBQUM7Ozs7OztBQU1ILEFBQU8sU0FBUyxlQUFlLEVBQUUsS0FBSyxFQUFFO0lBQ3BDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckcsT0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ3pFOzs7O0FDekJELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7O0FBSTVDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7QUFJNUIsZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7OztBQUk5QixhQUFhLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztBQUluQyxBQUFPLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7QUNsQnZELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7O0FBSTVDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7QUFJNUIsZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7OztBQUk5QixhQUFhLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztBQUluQyxBQUFPLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7QUNqQnZELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQ2xDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ3ZDLENBQUMsQ0FBQzs7QUFFSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQ3hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3RDLENBQUMsQ0FBQzs7QUFFSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNoRCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUNsQyxDQUFDLENBQUM7QUFDSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQzNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQztDQUNuQyxDQUFDLENBQUM7QUFDSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQzVDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztDQUNwQyxDQUFDLENBQUM7QUFDSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQzdDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQztDQUNyQyxDQUFDLENBQUM7QUFDSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQzlDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQztDQUN0QyxDQUFDLENBQUM7QUFDSCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0lBQy9DLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQztDQUN2QyxDQUFDLENBQUM7Ozs7O0FBS0gsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7OztBQUlsQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7O0FBSW5DLGFBQWEsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLGFBQWEsQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUV6QyxJQUFJLEtBQUssQ0FBQztBQUNWLEtBQUssS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFO0lBQ2xELGFBQWEsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FDdkM7O0FBRUQsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQ3JEOztBQUVELEtBQUssS0FBSyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFO0lBQy9DLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDakM7OztBQUdELEFBQU8sSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7O0FDaEVqRSxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7O0FBSXZDLEFBQU8sU0FBUyxXQUFXLElBQUk7SUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7Q0FDbkM7O0FBRUQsQUFBTyxTQUFTLFdBQVcsSUFBSTtJQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLEdBQUcsRUFBRSxDQUFDO0NBQzFEOztBQ2JELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0FBRTdCLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUVBLEtBQUssQ0FBQyxHQUFHLGlCQUFpQixHQUFHLENBQUM7QUFDOUIsS0FBSyxDQUFDLFFBQVEsWUFBWUYsVUFBUSxDQUFDO0FBQ25DLEtBQUssQ0FBQyxLQUFLLGVBQWUsS0FBSyxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixJQUFJLENBQUM7QUFDL0IsS0FBSyxDQUFDLEtBQUssZUFBZSxLQUFLLENBQUM7QUFDaEMsS0FBSyxDQUFDLE1BQU0sY0FBYyxNQUFNLENBQUM7QUFDakMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLElBQUksQ0FBQztBQUMvQixLQUFLLENBQUMsT0FBTyxhQUFhLE9BQU8sQ0FBQztBQUNsQyxLQUFLLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxLQUFLLGVBQWUsS0FBSyxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxHQUFHLGlCQUFpQixTQUFTLENBQUM7QUFDcEMsS0FBSyxDQUFDLFNBQVMsV0FBVyxTQUFTLENBQUM7QUFDcEMsS0FBSyxDQUFDLE9BQU8sYUFBYSxPQUFPLENBQUM7QUFDbEMsS0FBSyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDbkMsS0FBSyxDQUFDLFNBQVMsV0FBVyxTQUFTLENBQUM7QUFDcEMsS0FBSyxDQUFDLE1BQU0sY0FBYyxNQUFNLENBQUM7QUFDakMsS0FBSyxDQUFDLGFBQWEsT0FBTyxhQUFhLENBQUM7QUFDeEMsS0FBSyxDQUFDLGNBQWMsTUFBTSxjQUFjLENBQUM7QUFDekMsS0FBSyxDQUFDLE9BQU8sYUFBYUMsU0FBTyxDQUFDO0FBQ2xDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixJQUFJLENBQUM7QUFDL0IsS0FBSyxDQUFDLE1BQU0sY0FBYyxNQUFNLENBQUM7QUFDakMsS0FBSyxDQUFDLFVBQVUsVUFBVSxVQUFVLENBQUM7QUFDckMsS0FBSyxDQUFDLEdBQUcsaUJBQWlCLFlBQVksQ0FBQztBQUN2QyxLQUFLLENBQUMsR0FBRyxpQkFBaUIsWUFBWSxDQUFDO0FBQ3ZDLEtBQUssQ0FBQyxZQUFZLFFBQVEsWUFBWSxDQUFDO0FBQ3ZDLEtBQUssQ0FBQyxHQUFHLGlCQUFpQixTQUFTLENBQUM7QUFDcEMsS0FBSyxDQUFDLE9BQU8sYUFBYSxPQUFPLENBQUM7QUFDbEMsS0FBSyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDbkMsS0FBSyxDQUFDLE9BQU8sYUFBYSxPQUFPLENBQUM7QUFDbEMsS0FBSyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDbkMsS0FBSyxDQUFDLE1BQU0sY0FBYyxNQUFNLENBQUM7QUFDakMsS0FBSyxDQUFDLFdBQVcsU0FBUyxXQUFXLENBQUM7QUFDdEMsS0FBSyxDQUFDLE9BQU8sYUFBYSxPQUFPLENBQUM7QUFDbEMsS0FBSyxDQUFDLE1BQU0sY0FBYyxNQUFNLENBQUM7QUFDakMsS0FBSyxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDbkMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLElBQUksQ0FBQztBQUMvQixLQUFLLENBQUMsT0FBTyxhQUFhLE9BQU8sQ0FBQztBQUNsQyxLQUFLLENBQUMsWUFBWSxRQUFRLFlBQVksQ0FBQzs7O0FBR3ZDLEFBQ0EsS0FBSyxDQUFDLElBQUksU0FBUyxVQUFVLENBQUM7QUFDOUIsS0FBSyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7OztBQUdqQyxBQUNBLEtBQUssQ0FBQyxRQUFRLE1BQU0sY0FBYyxDQUFDO0FBQ25DLEtBQUssQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7OztBQUd0QyxBQUNBLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7OztBQUcvQyxBQUNBLEtBQUssQ0FBQyxLQUFLLFNBQVMsV0FBVyxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDOzs7QUFHbkMsQUFDQSxLQUFLLENBQUMsSUFBSSxhQUFhLEtBQUssQ0FBQyxLQUFLLFVBQVUsVUFBVSxDQUFDO0FBQ3ZELEtBQUssQ0FBQyxPQUFPLFVBQVUsS0FBSyxDQUFDLFFBQVEsT0FBTyxhQUFhLENBQUM7QUFDMUQsS0FBSyxDQUFDLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFDdEMsS0FBSyxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQzs7O0FBR3pDLEFBQ0EsQUFDQSxBQUNBLEtBQUssQ0FBQyxJQUFJLFNBQVMsZ0JBQWdCLENBQUM7QUFDcEMsS0FBSyxDQUFDLEdBQUcsVUFBVSxLQUFLLENBQUMsSUFBSSxlQUFlLGVBQWUsQ0FBQztBQUM1RCxLQUFLLENBQUMsT0FBTyxNQUFNLHFCQUFxQixDQUFDO0FBQ3pDLEtBQUssQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUM7QUFDdEMsS0FBSyxDQUFDLFNBQVMsSUFBSSxlQUFlLENBQUM7OztBQUduQyxBQUNBLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7OztBQUd0QyxBQUNBLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7OztBQUc1QyxBQUNBLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7OztBQUc1QyxBQUNBLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQzs7O0FBRzNELEFBYUEsS0FBSyxDQUFDLFNBQVMsY0FBYyxZQUFZLENBQUM7QUFDMUMsS0FBSyxDQUFDLEdBQUcsb0JBQW9CLGNBQWMsQ0FBQztBQUM1QyxLQUFLLENBQUMsS0FBSyxrQkFBa0IsZ0JBQWdCLENBQUM7QUFDOUMsS0FBSyxDQUFDLFNBQVMsY0FBYyx1QkFBdUIsQ0FBQztBQUNyRCxLQUFLLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7QUFDbEQsS0FBSyxDQUFDLEtBQUssa0JBQWtCLG9CQUFvQixDQUFDO0FBQ2xELEtBQUssQ0FBQyxPQUFPLGdCQUFnQixPQUFPLENBQUM7QUFDckMsS0FBSyxDQUFDLFdBQVcsWUFBWSxXQUFXLENBQUM7QUFDekMsS0FBSyxDQUFDLEtBQUssa0JBQWtCLEtBQUssQ0FBQztBQUNuQyxLQUFLLENBQUMsS0FBSyxrQkFBa0IsS0FBSyxDQUFDOzs7QUFHbkMsQUFDQSxLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQzs7O0FBRzdCLEFBQ0EsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsaURBQWlELEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM5RixLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxrREFBa0QsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMxRixLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxnREFBZ0QsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2RixLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQywwR0FBMEcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqSixLQUFLLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyx5R0FBeUcsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLEFBRXZLLEFBQXFCOztBQzdJckIsU0FBUyxVQUFVLEVBQUUsS0FBSyxFQUFFO0lBQ3hCLE9BQU8sV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztDQUNwQzs7QUFFRCxTQUFTLFlBQVksSUFBSTtJQUNyQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0NBQ3pELEFBRUQsQUFXRTs7QUMzQkssU0FBUyxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7SUFDeEMsT0FBTyxNQUFNLENBQUM7Q0FDakI7O0FDQUQsSUFBSUUsT0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0FBRTdCLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBRUFBLE9BQUssQ0FBQyxRQUFRLFVBQVUsUUFBUSxDQUFDO0FBQ2pDQSxPQUFLLENBQUMsY0FBYyxJQUFJLGNBQWMsQ0FBQztBQUN2Q0EsT0FBSyxDQUFDLFdBQVcsT0FBTyxXQUFXLENBQUM7QUFDcENBLE9BQUssQ0FBQyxPQUFPLFdBQVcsT0FBTyxDQUFDO0FBQ2hDQSxPQUFLLENBQUMsUUFBUSxVQUFVLGtCQUFrQixDQUFDO0FBQzNDQSxPQUFLLENBQUMsVUFBVSxRQUFRLGtCQUFrQixDQUFDO0FBQzNDQSxPQUFLLENBQUMsWUFBWSxNQUFNLFlBQVksQ0FBQztBQUNyQ0EsT0FBSyxDQUFDLFVBQVUsUUFBUSxVQUFVLENBQUM7QUFDbkNBLE9BQUssQ0FBQyxHQUFHLGVBQWUsR0FBRyxDQUFDOzs7QUFHNUIsQUFRQUEsT0FBSyxDQUFDLE1BQU0scUJBQXFCLFlBQVksQ0FBQztBQUM5Q0EsT0FBSyxDQUFDLFdBQVcsZ0JBQWdCLGlCQUFpQixDQUFDO0FBQ25EQSxPQUFLLENBQUMsV0FBVyxnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbkRBLE9BQUssQ0FBQyxXQUFXLFNBQVMsV0FBVyxDQUFDO0FBQ3RDQSxPQUFLLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUM7OztBQUczQyxBQUNBQSxPQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN4QkEsT0FBSyxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztBQUM1Q0EsT0FBSyxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQzs7O0FBRzVDLEFBV0FBLE9BQUssQ0FBQyxRQUFRLGdCQUFnQixjQUFjLENBQUM7QUFDN0NBLE9BQUssQ0FBQyxXQUFXLGFBQWEsaUJBQWlCLENBQUM7QUFDaERBLE9BQUssQ0FBQyxhQUFhLFdBQVcsbUJBQW1CLENBQUM7QUFDbERBLE9BQUssQ0FBQyxhQUFhLFdBQVcsbUJBQW1CLENBQUM7O0FBRWxEQSxPQUFLLENBQUMsYUFBYSxnQkFBZ0IsYUFBYSxDQUFDO0FBQ2pEQSxPQUFLLENBQUMsa0JBQWtCLFdBQVcsa0JBQWtCLENBQUM7QUFDdERBLE9BQUssQ0FBQyxnQkFBZ0IsYUFBYSxnQkFBZ0IsQ0FBQzs7O0FBR3BELEFBRUFBLE9BQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0FBQ3hCQSxPQUFLLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQzs7QUNoRWhDLFNBQVNDLEtBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDeEMsSUFBSSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDekIsSUFBSSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDckM7O0FBRUQsU0FBUyxjQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLE1BQU0sR0FBRyxTQUFTLENBQUM7S0FDdEI7O0lBRUQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7O0lBRXRCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmLE9BQU9BLEtBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM3Qzs7SUFFRCxJQUFJLENBQUMsQ0FBQztJQUNOLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNDO0lBQ0QsT0FBTyxHQUFHLENBQUM7Q0FDZDs7Ozs7Ozs7OztBQVVELFNBQVMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNELElBQUksT0FBTyxZQUFZLEtBQUssU0FBUyxFQUFFO1FBQ25DLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDZixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3RCOztRQUVELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0tBQ3pCLE1BQU07UUFDSCxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQ3RCLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDZixZQUFZLEdBQUcsS0FBSyxDQUFDOztRQUVyQixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ2YsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN0Qjs7UUFFRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztLQUN6Qjs7SUFFRCxJQUFJLE1BQU0sR0FBRyxTQUFTLEVBQUU7UUFDcEIsS0FBSyxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7O0lBRWhELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmLE9BQU9BLEtBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN6RDs7SUFFRCxJQUFJLENBQUMsQ0FBQztJQUNOLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3ZEO0lBQ0QsT0FBTyxHQUFHLENBQUM7Q0FDZDs7QUFFRCxBQUFPLFNBQVMsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDdkMsT0FBTyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztDQUNsRDs7QUFFRCxBQUFPLFNBQVMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDNUMsT0FBTyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztDQUN2RDs7QUFFRCxBQUFPLFNBQVMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQ3ZELE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDcEU7O0FBRUQsQUFBTyxTQUFTLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQzVELE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7Q0FDekU7O0FBRUQsQUFBTyxTQUFTLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUMxRCxPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQ3ZFOztBQ3hGRCxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7SUFDckIsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxPQUFPLEdBQUcsVUFBVSxNQUFNLEVBQUU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLEVBQUU7WUFDZixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJO1lBQ2hELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUk7WUFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSTtZQUNoQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzVCLE9BQU8sTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUMxQjtDQUNKLENBQUMsQ0FBQzs7QUNkSDtBQUNBLEFBRUEsQUFRQSxBQVFBLEFBYUEsQUFDQSxBQUVBLEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLHVEQUF1RCxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDcEcsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsK0RBQStELEVBQUUsU0FBUyxDQUFDLENBQUMsQUFFdkcsQUFBYzs7QUN0Q2QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7QUFFdkIsQUFBTyxTQUFTLEdBQUcsSUFBSTtJQUNuQixJQUFJLElBQUksYUFBYSxJQUFJLENBQUMsS0FBSyxDQUFDOztJQUVoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakQsSUFBSSxDQUFDLEtBQUssV0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxPQUFPLFNBQVMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7SUFFM0MsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBQyxPQUFPLFNBQVMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUMsT0FBTyxTQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLEtBQUssV0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsS0FBSyxXQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBRXpDLE9BQU8sSUFBSSxDQUFDO0NBQ2Y7O0FDZkQsU0FBU0MsYUFBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNyRCxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUV6QyxRQUFRLENBQUMsYUFBYSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQzFELFFBQVEsQ0FBQyxLQUFLLFlBQVksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDbEQsUUFBUSxDQUFDLE9BQU8sVUFBVSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7SUFFcEQsT0FBTyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDN0I7OztBQUdELEFBQU8sU0FBU0MsS0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDL0IsT0FBT0QsYUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzdDOzs7QUFHRCxBQUFPLFNBQVNFLFVBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQ3BDLE9BQU9GLGFBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzlDOztBQ3BCYyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7SUFDckMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdCLE1BQU07UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUI7Q0FDSjs7QUNGTSxTQUFTLE1BQU0sSUFBSTtJQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3RDLElBQUksSUFBSSxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDOUIsSUFBSSxNQUFNLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJLElBQUksV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzlCLElBQUksT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQzs7OztJQUluRCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3RELFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3RCxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNkOzs7O0lBSUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDOztJQUV4QyxPQUFPLGFBQWEsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUMsT0FBTyxRQUFRLE9BQU8sR0FBRyxFQUFFLENBQUM7O0lBRWpDLE9BQU8sYUFBYSxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxPQUFPLFFBQVEsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7SUFFakMsS0FBSyxlQUFlLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLEtBQUssVUFBVSxLQUFLLEdBQUcsRUFBRSxDQUFDOztJQUUvQixJQUFJLElBQUksUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzs7O0lBRzdCLGNBQWMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUMsTUFBTSxJQUFJLGNBQWMsQ0FBQztJQUN6QixJQUFJLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7SUFHOUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDOUIsTUFBTSxJQUFJLEVBQUUsQ0FBQzs7SUFFYixJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztJQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNyQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQzs7SUFFcEIsT0FBTyxJQUFJLENBQUM7Q0FDZjs7QUFFRCxBQUFPLFNBQVMsWUFBWSxFQUFFLElBQUksRUFBRTs7O0lBR2hDLE9BQU8sSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7Q0FDL0I7O0FBRUQsQUFBTyxTQUFTLFlBQVksRUFBRSxNQUFNLEVBQUU7O0lBRWxDLE9BQU8sTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7Q0FDakM7O0FDeERNLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRTtJQUN2QixJQUFJLElBQUksQ0FBQztJQUNULElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7SUFFdEMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFFOUIsSUFBSSxLQUFLLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7UUFDdkMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM3QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsT0FBTyxLQUFLLEtBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ25ELE1BQU07O1FBRUgsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0QsUUFBUSxLQUFLO1lBQ1QsS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLFlBQVksR0FBRyxNQUFNLENBQUM7WUFDNUQsS0FBSyxLQUFLLE1BQU0sT0FBTyxJQUFJLFdBQVcsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMzRCxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksR0FBRyxFQUFFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQztZQUMxRCxLQUFLLFFBQVEsR0FBRyxPQUFPLElBQUksR0FBRyxJQUFJLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN6RCxLQUFLLFFBQVEsR0FBRyxPQUFPLElBQUksR0FBRyxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQzs7WUFFMUQsS0FBSyxhQUFhLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDbkUsU0FBUyxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNyRDtLQUNKO0NBQ0o7OztBQUdELEFBQU8sU0FBU0csU0FBTyxJQUFJO0lBQ3ZCLE9BQU87UUFDSCxJQUFJLENBQUMsYUFBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU07UUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTztLQUNyQyxDQUFDO0NBQ0w7O0FBRUQsU0FBUyxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQ3BCLE9BQU8sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QixDQUFDO0NBQ0w7O0FBRUQsQUFBTyxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsQUFBTyxJQUFJLFNBQVMsUUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQUFBTyxJQUFJLFNBQVMsUUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQUFBTyxJQUFJLE9BQU8sVUFBVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQUFBTyxJQUFJLE1BQU0sV0FBVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQUFBTyxJQUFJLE9BQU8sVUFBVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQUFBTyxJQUFJLFFBQVEsU0FBUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQUFBTyxJQUFJLE9BQU8sVUFBVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0FDbkRqQyxTQUFTSixLQUFHLEVBQUUsS0FBSyxFQUFFO0lBQ3hCLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7Q0FDOUI7O0FBRUQsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0lBQ3RCLE9BQU8sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQixDQUFDO0NBQ0w7O0FBRUQsQUFBTyxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDckQsQUFBTyxJQUFJLE9BQU8sUUFBUSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsQUFBTyxJQUFJLE9BQU8sUUFBUSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsQUFBTyxJQUFJLEtBQUssVUFBVSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsQUFBTyxJQUFJLElBQUksV0FBVyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsQUFBTyxJQUFJLE1BQU0sU0FBUyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0MsQUFBTyxJQUFJLEtBQUssVUFBVSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTlDLEFBQU8sU0FBUyxLQUFLLElBQUk7SUFDckIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ3BDOztBQ3RCRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLElBQUksVUFBVSxHQUFHO0lBQ2IsQ0FBQyxFQUFFLEVBQUU7SUFDTCxDQUFDLEVBQUUsRUFBRTtJQUNMLENBQUMsRUFBRSxFQUFFO0lBQ0wsQ0FBQyxFQUFFLEVBQUU7SUFDTCxDQUFDLEVBQUUsRUFBRTtDQUNSLENBQUM7OztBQUdGLFNBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtJQUN4RSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztDQUM5RTs7QUFFRCxTQUFTSyxjQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUU7SUFDMUQsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BELElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLEtBQUssTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLEtBQUssTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUV2QyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUMvQixPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7WUFDekMsS0FBSyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUMvQixLQUFLLEtBQUssVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7WUFDdkMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUMvQixJQUFJLE1BQU0sVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7WUFDdEMsTUFBTSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUMvQixNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7WUFDeEMsS0FBSyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUVuRSxD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
