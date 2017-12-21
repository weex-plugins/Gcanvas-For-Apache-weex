/**

gcanvas.js使用说明:
1、引入gcanvas库
2、调用gcanvas库的createElement(component)接口，创建一个canvas对象。
3、调用canvas对象的getContext(param)，获取用于渲染的context。

扩展用法：
1、对于Android环境，部分机型可能无法运行。建议在页面入口处调用gcanvas库的start(successCallback, errorCallback)函数，进行黑白名单判断。
2、默认每16ms，会自动下发一次渲染指令。某些特殊场景下，希望自行控制下发频率的，可直接调用context.render()接口。调用后会关闭自动下发的操作，切换成每次主动调用render时才下发。

完整示例如下：
var libGCanvas = require('../../core/gcanvas');
libGCanvas.start(function(){
    nativeLog('gcanvas.start success');
    var canvasObj = libGCanvas.createElement(gcanvasComponent);
    var context = canvasObj.getContext('2d');
    //do any action here
},function(){
    nativeLog('gcanvas.start failed');
});

*/

var GImage = require('./gcanvasimage.js');
var GBridge = require("./gutil").GBridge;
var GLog = require("./gutil").GLog;
var GContextWebGL = require('./gwebgl');
var GContext2D = require('./gcontext2d');
var GHashMap = require('./ghashmap');
var htmlPlugin = require("./index");


///////////////////////////////
var GSupport = {};
var model_check;
var version_check;
GSupport.renderMode = 0;// 0--RENDERMODE_WHEN_DIRTY, 1--RENDERMODE_CONTINUOUSLY
GSupport.hybridLayerType = -1;// 0--LAYER_TYPE_NONE 1--LAYER_TYPE_SOFTWARE 2--LAYER_TYPE_HARDWARE. change hybrid layer type from LAYER_TYPE_SOFTWARE to unset, avoid block when use html5 audio.
GSupport.checkType = 0;// 0--all support, 1--white list check
GSupport.nativeVer = 0;
GSupport.defaultHiQualityMode = true; // false-- normal true--hiQuality
GSupport.supportScroll = false;
GSupport.newCanvasMode = false;             //true: GCanvasView in Webview
GSupport.sameLevel = false; //newCanvasMode = true && true: GCanvasView and Webview is same level;
GSupport.clearColor = "white";
GSupport.WHITE_LIST = {

    model_check : [
        function(info) {return info.MODEL == 'GT-I9300';},
        function(info) {return info.MODEL == 'GT-I9500';},
        function(info) {return info.MODEL == 'GT-N7108';},
        function(info) {return info.MODEL == 'HIKe 848A';},
        function(info) {return info.MODEL == 'HTC 601e';},
        function(info) {return info.MODEL == 'HUAWEI C8813';},
        function(info) {return info.MODEL == 'Lenovo K900';},
        function(info) {return info.MODEL == 'M351';},
        function(info) {return info.MODEL == 'M51w';},
        function(info) {return info.MODEL == 'MI 3';},
        function(info) {return info.MODEL == 'MI 3W';},
        function(info) {return info.MODEL == 'SM-G9006V';},
        function(info) {return info.MODEL == 'SM-N9006';}
    ],
    version_check : [
        function(info) {GLog.d("info.OS_RELEASE=" + info.OS_RELEASE); return false;},
        function(info) {return (info.OS_RELEASE >= '4.1.0')&&( info.OS_RELEASE <= '4.4.2');}
    ]
};


GSupport.checkList = function(successFunc, failureFunc){
    var checkType = GSupport.checkType;
    GLog.d("[checkList] checkType:" + checkType);
    if (1 == checkType) {//white list check
        var whitelist = GSupport.WHITE_LIST;
        var length = whitelist.length;
        for (var i = 0; i < length; i++) {
            var lenSub = whitelist[i].length;
            var found = false;
            for (var j = 0; j < lenSub; j++){
                if (whitelist[i][j](GDeviceInfo)) {
                    found = true;
                    break;
                }
            }
            if (!found){ // unfound in white list
                GLog.d("the device is not supported, " + GDeviceInfo.MODEL);
                failureFunc&&failureFunc();
                return;
            }
        }
    }
    successFunc&&successFunc();
};
///////////////////////////////

var GDeviceInfo = {};
// var _context = null;
// var _context_type = 0;//0--2d;1--webgl
///////////////////////////////

var GCanvasPlatform = GBridge.isBrowser()? 0 : 2;//0--H5;1--iOS;2--Android
var currentEl;
var contextTypes = ['2d','webgl']
var currentContextOfType = {};

function GCanvas(componentId)
{
    this.componentId = componentId;
    this.id = ++(GCanvas.idCounter);
    this.style = {};
}

GCanvas.idCounter = 0;
// GCanvas.canvasMap = new GHashMap();

//-----------------------------
// GCanvas.start
//-----------------------------
GLog.d('gcanvas#=====>>>version: 0.5.44');

GCanvas.start = function(el){
    GLog.d('gcanvas#start=====>>>');

    if( weex.supports('@weex-module/userTrack') )
    {
        try {
            var userTrack;
            if(weex && weex.requireModule) {
                userTrack = weex.requireModule('userTrack');
            }else if(__weex_require__) {
                userTrack = __weex_require__('@weex-module/userTrack');
            }
            if(userTrack){
                userTrack.commitut("expose", 2201, "", '', '/gcanvas.gcanvasweex.start', '', '', {});
            }
        } catch(e) {
            console.error(e)
        }
    }
    
    if (typeof WXEnvironment === 'object' && /ios/i.test(WXEnvironment.platform)) {
        GCanvasPlatform = 1;
    } else if (typeof navigator === 'object' && /ios/i.test(navigator.userAgent)) {
        GCanvasPlatform = 1;
    } else {
        GCanvasPlatform = GBridge.isBrowser() ? 0 : 2;
    }

    GBridge.setup( {platform:GCanvasPlatform} );

    if(GCanvasPlatform === 0)
    {
        currentEl = el
        return currentEl;
    }
    else
    {
        //bind canvas
        var config = [];
        config.push(GSupport.renderMode);
        config.push(GSupport.hybridLayerType);
        config.push(GSupport.supportScroll);
        config.push(GSupport.newCanvasMode);
        config.push(1);//compatible. 1 will call GCanvasJNI.getAllParameter("gcanvas");
        config.push(GSupport.clearColor);
        config.push(GSupport.sameLevel);

        GBridge.callEnable(el.ref, config);
        var canvas = new GCanvas(el.ref);
        canvas.width = el.style.width;
        canvas.height = el.style.height;
        // GCanvas.canvasMap.put(el.ref, canvas);
        return canvas;
    }
}

//-----------------------------
// Instance Method: getContext
//-----------------------------
GCanvas.prototype.getContext = function(contextID){
    GLog.d('gcanvas#getContext=====>>>');

    var context = this.context;
    //brower
    if(GCanvasPlatform === 0) {
        if (context){
            return context;//unsupport change type after create
        }
        else if(currentEl&&currentEl.getContext) {
            context = currentEl.getContext(contextID)
            if(context&&!context.render) context.render = function(){}
        }
        return context
    }

    if (context){
        return context;//unsupport change type after create
    }

    var context_type;
    if (contextID.match(/webgl/i)){
        context = new GContextWebGL();
        context_type = 1;
    }else{
        context = new GContext2D();
        context_type = 0;
    }

    // if(context_type == 1) {
    // 	GBridge3d.setLogLevel("debug");
    // 	GBridge3d.callEnable(this.componentId);
    // 	GBridge3d.setContextType(this.componentId, context_type);
    // }else {
//     GBridge.setLogLevel("debug");
    GBridge.setContextType(this.componentId, context_type);
	// }

    context.componentId = this.componentId;
    // if (!context.timer) {
    //    context.timer = setInterval(this.render.bind(this), 16);
    // }

    this.context = context;

    // if(context_type == 0) {
    GBridge.callRegisterReattachJSCallback(this.componentId, context._clearImageTextures);
	// }

    this.startLoop();

    return context;
}

//-----------------------------
// Instance Method: render
//-----------------------------
GCanvas.prototype.render = function(){
    if(GCanvasPlatform !== 0 && this.context)
    {
        this.context.render("auto");
    }
}

//-----------------------------
// Instance Method: stopRender
//-----------------------------
GCanvas.prototype.stopRender = function(){
    if(!this.context){
        return;
    }

    if(this.context.timer){
        clearInterval(this.context.timer);
        this.context.timer = null;
    }
}

//-----------------------------
// Instance Method: startLoop
//-----------------------------
GCanvas.prototype.startLoop = function(fps){
    if(!this.context){
        return;
    }

    fps = parseInt(fps) || 16;
    if(!this.context.timer){
        this.context.timer = setInterval(this.render.bind(this),fps);
    }
}

//-----------------------------
// Instance Method: stopLoop
//-----------------------------
GCanvas.prototype.stopLoop = function(){
    if(!this.context){
        return;
    }

    if(this.context.timer){
        clearInterval(this.context.timer);
        this.context.timer = null;
    }
}


//-----------------------------
// Instance Method: reset
//-----------------------------
GCanvas.prototype.reset = function(){
    if(GCanvasPlatform !== 0){
        GBridge.resetComponent(this.componentId);
    }
}

//-----------------------------
// Instance Method: setDevicePixelRatio
//-----------------------------
GCanvas.prototype.setDevicePixelRatio = function(){
    if(!this.context){
        return;
    }

    GBridge.callSetDevPixelRatio(this.componentId);
}

//-----------------------------
// GCanvas.disable
//-----------------------------
GCanvas.disable = function(){
    // GLog.d('gcanvas#disable=====>>>');
    // if(GCanvasPlatform !== 0){
    //     GBridge.callDisable();
    // }
}

GCanvas.prototype.setup = function(support){
    if(!this.context){
        return;
    }
    var config = [];
    var mySupport = support || GSupport;

    for(var attr in GSupport){
      if(mySupport[attr] != undefined){
         GSupport[attr] = mySupport[attr];
      }
    }

    var config = {
      'renderMode':GSupport.renderMode,
      'hybridLayerType':GSupport.hybridLayerType,
      'supportScroll':GSupport.supportScroll,
      'sameLevel':GSupport. sameLevel,
      'newCanvasMode':GSupport.newCanvasMode,
      'clearColor': GSupport.clearColor
    };

    GBridge.callSetup(config, this.componentId, function(e){});
}

//-----------------------------
// GCanvas.setHiQuality
//-----------------------------
GCanvas.setHiQuality = function(){
    GLog.d('gcanvas#setHiQuality=====>>>' + quality);
    if(GCanvasPlatform !== 0) {
        GBridge.setHiQuality(quality);
    }
}

//-----------------------------
// GCanvas.setLogLevel
//-----------------------------
GCanvas.setLogLevel = function(level){
    GLog.d('gcanvas#setLogLevel=====>>> ' + level);
    if(GCanvasPlatform !== 0) {
        GBridge.setLogLevel(level);
    }
}

GCanvas.prototype.toDataURL = function(type,options){
    //	GLog.d('gcanvas#toDataURL=====>>> ' + type + ',' + options);

    	var args;
	    if(typeof(options) == 'undefined'){
	        args = type + ';';
	    } else {
	         args = type + ',' + options + ';';
	    }

    	return GBridge.exeSyncCmd(this.componentId,'todataurl',args);
    }

//-----------------------------
// GCanvas.htmlPlugin
//-----------------------------
GCanvas.htmlPlugin = htmlPlugin;

module.exports = GCanvas;
