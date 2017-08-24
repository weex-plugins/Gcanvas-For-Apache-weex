var timer = weex.requireModule('timer');
var Image = require('./image');
var base64shim = require('./base64shim');

function initWindow() {
    var window = {
        navigator: {
            userAgent: ''
        },
        document: {
            createElement: function (name) {
                return {
                    style: {},
                    getContext: function() {}
                }
            }
        },
        Image: Image,
        ontouchstart: null,
        ontouchmove: null,
        ontouchend: null,   

        btoa: base64shim.btoa,
        atob: base64shim.atob,
        // ,
        // TextDecoder: TextEncoding.TextDecoder,
        // TextEncoder: TextEncoding.TextEncoder
        setInterval: timer.setInterval,
        clearInterval: timer.clearInterval,
        setTimeout: timer.setTimeout,
        clearTimeout: timer.clearTimeout
    };      

    return window;
}


module.exports = typeof window === 'object' ? window : initWindow();