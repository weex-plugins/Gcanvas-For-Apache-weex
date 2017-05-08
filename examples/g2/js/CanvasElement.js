/**
 * Created by godsong on 16/9/12.
 */
var Canvas = require('weex-gcanvas');
var _instanceMap = {};
function CanvasElement(weexElement, canvasId) {
    //g2竟然对canvas做深拷贝，用string 绕过他们类型检查的坑，无奈脸
    var instance = new String();
    instance.weexElement = weexElement;
    if (_instanceMap[canvasId]) {
        instance.weexElement = _instanceMap[canvasId];
    }
    else {
        _instanceMap[canvasId] = instance;
    }


    Object.defineProperties(instance, {
        'currentStyle': {
            get: function () {
                return Object.assign({}, instance.weexElement.classStyle, instance.weexElement.style);
            }
        },
        'offsetWidth': {
            get: function () {
                var canvasWidth = parseFloat(instance.weexElement.classStyle['width'] || instance.weexElement.style['width']);
                return canvasWidth;
                //return parseFloat(weexElement.classStyle['width']||weexElement.style['width'])
            }
        },
        'offsetHeight': {
            get: function () {
                console.log('offsetHeight:', parseFloat(instance.weexElement.classStyle['height'] || instance.weexElement.style['height']))
                return parseFloat(instance.weexElement.classStyle['height'] || instance.weexElement.style['height'])
            }
        }
    });
    instance.getContext = function () {
        return Canvas.getContext('2d')
    };
    return instance;
}
CanvasElement.init = function (element, canvasId) {
    //初始化canvas dom 并伪造getElementById和标准的getContext
    if (_instanceMap[canvasId]) {
        _instanceMap[canvasId].weexElement = element;
    }
    else {
        _instanceMap[canvasId] = element;
    }

    return new Promise(function (resolve) {
        Canvas.start(element.ref, function () {
            resolve(Canvas.getContext('2d'));

        });
    })
};

CanvasElement.reset = function () {
    Canvas.disable();
};
module.exports = CanvasElement;
