# weex-gcanvas
weex-gcanvas是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

支持的weexpack版本： >= 0.2.0
支持的WeexSDK版本： >= 0.10.0


# 环境准备
如果需要编写Demo，要准备好Weex环境，安装[weex-toolkit](https://www.npmjs.com/package/weex-toolkit)客户端工具。

# WeexGcanvas Demo

* GCanvasDemo.vue测试Demo， 详见examples目录下

```
<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
	</div>
</template>
<script>
	var GCanvas=require('weex-gcanvas'); 	//GCanvas
	//var GCanvs=require('../js/src/gcanvas');
	var Image=require('weex-gcanvas/gcanvasimage'); //GCanvasImage
    //var Image=require('../js/src/gcanvasimage');

	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			//创建gcanvas对象
			var gcanvas = GCanvas.start(ref);
			
			//获取context2D
			var ctx = gcanvas.getContext('2d');
			
			//rect
			ctx.fillStyle = 'red';
			ctx.fillRect(0, 0, 100, 100);

			//rect
			ctx.fillStyle = 'black';
			ctx.fillRect(100, 100, 100, 100);
			ctx.fillRect(25, 210, 700, 5);

			//circle
			ctx.fillStyle = '#12CC00';
			ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
			ctx.fill();
			
			//图片
			var image = new Image();
			image.onload = function(){
				ctx.drawImage(image, 200, 0);
			}
			image.src = 'https://www.khronos.org/assets/uploads/ceimg/made/assets/uploads/apis/OpenGL-ES_100px_May16_225_75.png';
		}
	};
</script>
```

* 运行Demo
```Javascript
weex GCanvasDemo.vue
```

运行上述命令，则会通过webpack打包成bundle.js，具体可以参考Weex相关文档。并在本地发布这个bundle.js和关联的二维码。以iOS为例可通过运行playground/ios下的WeexDemo来扫码测试。

* Demo效果

  iOS上的扫码运行结果如下

  ![](https://img.alicdn.com/tfs/TB1NmBtc5qAXuNjy1XdXXaYcVXa-400-705.png)

  Android上扫码运行效果如下

  ![](https://gw.alicdn.com/tfs/TB1vjwrfhrI8KJjy0FpXXb5hVXa-400-706.png)

  ​

# 集成

Demo工程包括iOS、Android。在目录playground下是一个Weex Playground集成了WeexGcanvas插件可以直接使用。

# 客户端如何集成WeexGcanvas
## iOS集成
- 命令行集成(plugin相关方式已经暂停维护，建议手动集成)
  ```
  weexpack plugin add weex-gcanvas
  ```

- 手动集成，需要添加以下的依赖，也可以参考playground/ios目录下的Podfile文件
  ```JavaScript
  # Weex相关
  pod 'WeexSDK', 		'~> 0.17.0'
  pod 'WeexPluginLoader'

  # GCavnas相关
  pod 'WeexGcanvas',  '0.0.3.5'
  pod 'GCanvas', 		'0.0.7'
  ```

- 模块注册

  iOS已经实现了自动注册，不需要做初始化操作。 假如运行过程中出现找不到WeexGcanvas相关的模块，可以通过以下来手动注册。

  ```javascript
  #import <WeexSDK/WeexSDK.h>

  ...

  [WXSDKEngine registerModule:@"gcanvas" withClass:NSClassFromString(@"WXGCanvasModule")];
  [WXSDKEngine registerComponent:@"gcanvas" withClass:NSClassFromString(@"WXGCanvasComponent")];
  ```

  ​

## Android集成

- 命令行集成(plugin相关方式已经暂停维护，建议手动集成)
  ```Javascript
  weexpack plugin add weex-gcanvas
  ```

- 手动集成
    在相应工程的build.gradle文件中添加（由于jcenter审核还未通过，暂时指定maven url）
  ```
   repositories {
        maven { url 'https://dl.bintray.com/daidai123/maven' }
        jcenter()
        mavenCentral()
   }
   dependecies中添加
   compile "com.alibaba.android.weex:gcanvas_library_weex:1.3.1"
  ```
    注意：您需要自行指定插件的groupId和version并将构建产物发布到相应的依赖管理仓库内去（例如maven）, 您也可以对插件的name进行自定义，默认将使用插件工程的名称作为name

- 模块注册

  ```javascript
  import com.taobao.weex.WXSDKEngine;

  ...

  WXSDKEngine.registerComponent("gcanvas", WXGCanvasLigntningComponent.class);
  WXSDKEngine.registerModule("gcanvas", GCanvasLightningModule.class);
  ```

  ​


## 浏览器端集成 weex-gcanvas
- 命令行集成
  ```
  npm install  weex-gcanvas@0.5.43
  ```
- 手动集成
    在相应工程的package.json文件的dependencies中添加
  ```
  "devDependencies": {
      "weex-gcanvas": "^0.5.43"
   }
  ```

