# weex-gcanvas



一款支持.we页面中canvas标签的weex插件，支持文字渲染，图片加载，图形绘制等canvas常用操作

### 快速开始

使用weexpack构建得到你的weex工程

```bash
weexpack create canvas_demo
cd canvas_demo
weexpack platform add android
```

然后将weex-gcanvas插件添加到你的工程

``` bash
weexpack plugin add weex-gcanvas
```

另一种添加插件的方式是将本项目clone到本地然后添加到你的工程

``` bash
weexpack plugin add $LOCAL_PATH/weex-gcanvas
```

编辑你的weex源代码index.we. 保存到工程的src子目录

``` we

<template>
  <div id="test">
    <gcanvas id="canvas_holder" style="width:750;height:750;"></gcanvas>
  </div>
</template>
<script>
  var gcanvas=require('weex-gcanvas');
  
  module.exports = {
    created: function () {      
      console.log('created');     
      gcanvas.disable();
    },
    ready: function () {
      var ref = this._ids.canvas_holder.el.ref;
      gcanvas.start(ref, function(){
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
  }
</script>
```

然后使用下列命令运行demo

```bash
weexpack run android
```

weexpack会自动编译src子目录下的index.we，然后打包到Weex App中，并在App启动时加载它。


# 当前支持的canvas API和属性

| 用途          | 用法         |   名称  | 支持情况  |
| ------------ | :-------------:| :-------:|:----------:|
| 颜色/样式/阴影     | 属性 | fillStyle | 部分支持 |
| 线条样式      | 属性      |  lineCap | 覆盖 |
| 线条样式 | 属性     |    lineJoin | 覆盖 |
| 线条样式 | 属性   |   lineWidth | 覆盖 |
| 线条样式 | 属性   | miterLimit | 覆盖 |
| 矩形 | 方法   | rect() | 覆盖 |
| 矩形 | 方法   | fillRect() | 覆盖 |
| 矩形 | 方法   | strokeRect() | 覆盖 |
| 矩形 | 方法   | clearRect() | 覆盖 |
| 路径 | 方法   | fill() | 覆盖 |
| 路径 | 方法   | stroke() | 覆盖 |
| 路径 | 方法   | beginPath() | 覆盖 |
| 路径 | 方法   | moveTo() | 覆盖 |
| 路径 | 方法   | closePath() | 覆盖 |
| 路径 | 方法   | lineTo() | 覆盖 |
| 路径 | 方法   | clip() | 覆盖 |
| 路径 | 方法   | quadraticCurveTo() | 覆盖 |
| 路径 | 方法   | bezierCurveTo() | 覆盖 |
| 路径 | 方法   | arc() | 覆盖 |
| 路径 | 方法   | arcTo() | 覆盖 |
| 路径 | 方法   | quadraticCurveTo() | 覆盖 |
| 转换 | 方法   | scale() | 覆盖 |
| 转换 | 方法   | rotate() | 覆盖 |
| 转换 | 方法   | translate() | 覆盖 |
| 转换 | 方法   | transform() | 覆盖 |
| 转换 | 方法   | setTransform() | 覆盖 |
| 文本 | 属性   |	font | 覆盖 |
| 文本 | 属性   |	textAlign | 覆盖 |
| 文本 | 属性   |	textBaseline | 覆盖 |
| 文本 | 方法   | fillText() | 覆盖 |
| 文本 | 方法   | strokeText() | 覆盖 |
| 文本 | 方法   | measureText() | 覆盖 |
| 图像绘制 | 方法   |	drawImage() | 覆盖 |
| 图像绘制 | 方法   | createImageData() | 覆盖 |
| 图像绘制 | 方法   | getImageData() | 覆盖 |
| 图像绘制 | 方法   | putImageData() | 覆盖 |
| 合成 | 属性   | globalAlpha | 覆盖 |
| 合成 | 属性   | globalAlpha | 覆盖 |
| 其他 | 方法   |	save() | 覆盖 |
| 其他 | 方法   | restore() | 覆盖 |
| 其他 | 方法   | getContext() | 新增 |
| 其他 | 方法   | loadTexture() | 新增 |
| 其他 | 方法   | unloadTexture() | 新增 |
| 其他 | 方法   | resetTransform() | 新增 |
| 其他 | 方法   | render() | 新增 |
| 其他 | 方法   | capture() | 新增 |
| 其他 | 方法   | resetClip() | 新增 |
| 其他 | 方法   | loadTexture() | 新增 |
| 其他 | 方法   | putImageData() | 覆盖 |

### Changelog

0.3.2
修订JS代码中的一个小错误
com.taobao.android:weex_sdk:0.10.1.6 测试通过

0.3.1
fix typo, com.taobao.android:weex_sdk:0.10.0 测试通过

0.3.0
适配com.taobao.android:weex_sdk:0.10.0 测试通过

0.2.9
适配 weex sdk 0.10