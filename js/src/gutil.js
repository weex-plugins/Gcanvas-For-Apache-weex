/////////////////////////////////////////////////////////////////
//GBridge
/////////////////////////////////////////////////////////////////
var GLog = require('./glog').GLog;
var GCodec = require('./gcodec');

var inWeex = typeof callNative !== 'undefined';
var debug = true;
var platform;
var canvasModule;

canvasModule = typeof weex!=='undefined' && weex.requireModule ? weex.requireModule('gcanvas')  : typeof  __weex_require__  !== 'undefined' ?  __weex_require__('@weex-module/gcanvas') : null;

var GBridge = {

    setup: function(data){
        platform = data.platform;
    },

    isIOS: function(){
      return platform === 1;
    },

    /**
     * 判断是不是浏览器
     *
     **/
     isBrowser: function () {
         if(!canvasModule || !canvasModule.getDeviceInfo){
             return true
         }
     },

    callRegisterReattachJSCallback: function(componentId, cb){
      if(!inWeex){
        return;
      }

      if(typeof cb !== 'function'){
        return;
      }

      canvasModule.registerRetachFunction && canvasModule.registerRetachFunction(componentId, cb);
    },

    /**执行render指令*/
    callRender: function (componentId, commands) {
        if (!inWeex) {
            return;
        }
        if(this.isIOS() || this.isBrowser()){
           // GLog.d('bridge#callrender in iOS');
           canvasModule.render && canvasModule.render( commands, componentId );
        }else{
           if(typeof callGCanvasLinkNative !== 'undefined') {
           	   // GLog.d('bridge#callGCanvasLinkNative()');
               callGCanvasLinkNative(componentId, 0x20000001, commands);
           }  else {
           	   // GLog.d('bridge#callRender()');
           	   canvasModule.render && canvasModule.render( commands, componentId );
           }
        }
    },

    callGetImageData: function(componentId, x, y, w, h){
      if(this.isIOS()){

      }else{
        var result = callGCanvasLinkNative(componentId, 0x20000001, "R" + x + "," + y + "," + w + "," + h + ";");
        return {"data": GCodec.Gbase64ToArr(result)};
      }
    },

    /**Android use**/
    callSetup:function(configObj, componentId, callback){
        if (!inWeex) {
            return;
        }

        var config = configObj || {};
        //GLog.d('bridge#callRender() commands is ' + commands);
        canvasModule.setup && canvasModule.setup(JSON.stringify(config), componentId , callback);
    },

    /**预加载图片*/
    preLoadImage: function (image, cb) {
        if (!inWeex) {
            return;
        }

        //返回width和height
        //image[src, id]
        canvasModule.preLoadImage(image, function (e) {
            GLog.d('bridge#preLoadImage() callback, e ' + JSON.stringify(e));
            e.url = image[0];
            e.id = image[1];
            cb && cb(e);
        });
    },

    /**绑定纹理*/
    bindImageTexture: function (componentId,src,callback) {
        if (!inWeex) {
            return;
        }

        canvasModule.bindImageTexture && canvasModule.bindImageTexture(src,componentId,callback);
    },

    /**
     * 获取canvas引用
     * @param ref wx-canvas 引用
     * @param configArray 配置参数
     **/
    callEnable: function (ref, configArray, callback) {
        if (!inWeex) {
            return;
        }
        var params = {
            componentId: ref,
            config:configArray
        };

        return canvasModule.enable && canvasModule.enable(params);
    },

    callSetDevPixelRatio: function(componentId){
        if(!inWeex){
          return;
        }
        canvasModule.setDevicePixelRatio && canvasModule.setDevicePixelRatio(componentId);
    },

    /**
     * 获取设备信息(android)
     * @param callback 设备信息
     **/
    getDeviceInfo: function (callback) {
        if (!inWeex) {
            return;
        }

        if(this.isBrowser()){
            //浏览器端不实现
            callback && callback({
                data:{platform:0}
            });
        }
        else {
            canvasModule.getDeviceInfo({}, function (e) {
                GLog.d('bridge#getDeviceInfo() return val:' + JSON.stringify(e));
                callback && callback(e);
            });
        }

    },

    /**
     *
     * 设置context类型,2d或者webgl
     *
     * @param context_type 0代表2d,1代表3d
     * */
    setContextType: function (componentId, context_type){
        if(context_type != 0 && context_type != 1){
            GLog.d('bridge#setContextType(): invalid context type===>' + context_type);
            return;
        }
        GLog.d('bridge#setContextType(): context type is ' + context_type + ' componentId:' + componentId);
        canvasModule.setContextType(context_type, componentId);
    },

    /**
     *
     * 设置日志级别
     * 
     * */
    setLogLevel: function (level){
        GLog.d('bridge#setLogLevel(): native logLevel ' + level);
        canvasModule.setLogLevel(level);
    },

    /**
     *
     * 设置opengl渲染质量
     *
     * */
    setHiQuality: function (quality){
        GLog.d('bridge#setHiQuality(): quality: ' + quality);
        canvasModule.setHiQuality(quality);
    },

    resetComponent: function(componentId){
        GLog.d('bridge#resetComponent(): componentId: ' + componentId);
        canvasModule.resetComponent && canvasModule.resetComponent(componentId);
    },

    exeSyncCmd: function (componentId, action, args){
    	GLog.d('bridge#exeSyncCmd(): action: ' + action + ',args:' + args);
    	return canvasModule.execGcanvaSyncCMD(componentId,action,args);
    },

    callExtendCallNative:function(dict){
      return  canvasModule && canvasModule.extendCallNative(dict);
    },

    texImage2D: function (componentId,target,level,internalformat,format,type,path) {
        GLog.d('bridge#texImage2D(): ' + path);
        canvasModule.texImage2D && canvasModule.texImage2D(componentId,target,level,internalformat,format,type,path);
    },
    texSubImage2D: function (componentId,target, level, xoffset,yoffset,format,type,path) {
    	GLog.d('bridge#texSubImage2D(): ' + path);
        canvasModule.texSubImage2D && canvasModule.texSubImage2D(componentId,target,level,xoffset,yoffset,format,type,path);
    },
    setAlpha: function (componentId,alpha) {
    	GLog.d('bridge#setAlpha(): ' + alpha);
    	canvasModule.setAlpha && canvasModule.setAlpha(componentId,alpha);
    }
};


module.exports = {
    GBridge: GBridge,
    GLog: GLog
};
