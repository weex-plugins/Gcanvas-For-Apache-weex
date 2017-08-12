var Image = require('./image');

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
        ontouchend: null
    };

    return window;
}


module.exports = typeof window === 'object' ? window : initWindow();