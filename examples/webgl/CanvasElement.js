// var gcanvas = require('./gcanvas/gcanvas');
// var dom = weex.requireModule('dom');
var GCanvas = require('weex-gcanvas');
var dom = typeof weex !== 'undefined' && weex.requireModule ? weex.requireModule('dom') : __weex_require__('@weex-module/dom');

function noop() {}

function CanvasElement(ele, isDomMode) {
    this.ele = ele;
    this._listeners = {};
    this._rect = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    this.style = {};

    if (typeof HTMLCanvasElement === 'function') {
        // H5
        var parent;
        var cw = 0;
        var ch = 0;
        if (ele instanceof HTMLElement) {
            if (ele.tagName.toLowerCase() === 'gcanvas') {
                parent = ele.parentElement;
                cw = ele.clientWidth;
                ch = ele.clientHeight;
            } else {
                parent = ele;
            }
        } else {
            parent = window.document.querySelector('[data-ref="' + ele.ref + '"]');
        }
        if (isDomMode) {
            return parent;
        }
        if (!cw || !ch) {
            cw = parent.clientWidth;
            ch = parent.clientHeight;
        }
        var canvas = window.document.createElement('canvas');
        canvas.width = cw;
        canvas.height = ch;
        canvas.style.width = cw + 'px';
        canvas.style.height = ch + 'px';
        parent.appendChild(canvas);
        return canvas;
    }
}

CanvasElement.prototype.getRect = function () {
    var self = this;
    dom.getComponentRect(this.ele.ref, function (result) {
        self._rect = result.size;
    });
    if (typeof WXEnvironment === 'object' && !/ios/i.test(WXEnvironment.platform)) {
        this._rect.top = 0;
        this._rect.left = 0;
    }
    return this._rect;
}

CanvasElement.prototype.fire = function(evt) {
    var list = this._listeners[evt.type] || [];

    evt.stopPropagation = evt.stopPropagation || noop;
    evt.preventDefault = evt.preventDefault || noop;

    for (var i = 0; i < list.length; i++) {
        list[i].call(this, evt);
    }
}

CanvasElement.prototype.addEventListener = function (type, handler, flag) {
    if (this.ele.addEventListener) {
        this.ele.addEventListener(type, handler, flag);
        return;
    }
    if (!this._listeners[type]) {
        this._listeners[type] = [];
    }
    this._listeners[type].push(handler);
}

CanvasElement.prototype.removeEventListener = function (type, handler, flag) {
    if (this.ele.removeEventListener) {
        this.ele.removeEventListener(type, handler, flag);
        return;
    }

    var list = this._listeners[type] || [];
    for (var i = list.length - 1; i >= 0; i--) {
        if (list[i] === handler) {
            list.splice(i, 1);
        }
    }
}

CanvasElement.prototype.getContext = function(type) {
    if (this.ele.getContext) {
        return this.ele.getContext(type);
    }
    var gcanvas = GCanvas.start(this.ele);
    gcanvas.setDevicePixelRatio();
    var ctx = gcanvas.getContext(type);
    ctx.gcanvas = gcanvas;
    return ctx;
}

module.exports = CanvasElement;