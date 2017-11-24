# weex-gcanvas
weex-gcanvas是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

支持的weexpack版本： >= 0.2.0
支持的WeexSDK版本： >= 0.10.0

#demo
```
<template>
  <div ref="test">
    <gcanvas ref="canvas_holder" style="width:750;height:750;"></gcanvas>
  </div>
</template>
<script>
  //	var gcanvas = weex.requireModule('weex-gcanvas');

  var gcanvas=require('weex-gcanvas');


  module.exports = {

    created: function () {
      console.log('created gcanvas');
      gcanvas.disable();
    },
    mounted: function () {
      var ref = this.$refs.canvas_holder;
      gcanvas.start(ref, function () {
        var ctx = gcanvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 100, 100);

        ctx.fillStyle = 'black';
        ctx.fillRect(100, 100, 100, 100);
        ctx.fillRect(25, 210, 700, 5);

        ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
        ctx.fill();

        var img = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
        ctx.drawImage(img, 100, 200, 210, 330);
        //ctx.drawImage(img, 0,0,105,165, 100, 200, 210, 330);
        ctx.render();
      });
    }
  };
</script>
```

# 功能

# 快速使用
- 通过weexpack初始化一个weextest工程
   ```
   weexpack create weextest
   ```
- 添加ios平台
   ```
   weexpack platform add ios
   ```
- 添加android平台
   ```
   weexpack platform add android
   ```
- 添加插件
  ```
  weexpack plugin add weex-gcanvas
  ```

# 已有工程集成
## iOS集成插件WeexGcanvas
- 命令行集成
  ```
  weexpack plugin add weex-gcanvas
  ```
- 手动集成
  在podfile 中添加
  ```
  pod 'WeexGcanvas'
  pod 'GCanvas' 0.0.7
  pod 'WeexPluginLoader'
  ```

## Android集成插件weexgcanvas
- 命令行集成
  ```
  weexpack plugin add weex-gcanvas
  ```
- 手动集成
    在相应工程的build.gradle文件的dependencies中添加
  ```
  compile 'org.weex.plugin:weexgcanvas:0.0.1'
  ```
    注意：您需要自行指定插件的groupId和version并将构建产物发布到相应的依赖管理仓库内去（例如maven）, 您也可以对插件的name进行自定义，默认将使用插件工程的名称作为name


## 浏览器端集成 weex-gcanvas
- 命令行集成
  ```
  npm install  weex-gcanvas
  ```
- 手动集成
    在相应工程的package.json文件的dependencies中添加
  ```
  weex-gcanvas:0.5.43
  ```

