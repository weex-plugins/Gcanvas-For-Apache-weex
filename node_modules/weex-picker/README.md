# weex-picker
weex浏览器端picker扩展实现

## Get Start
这是一个可选择安装包， 使用之前先要用npm进行安装

```
$ npm install weex-picker
```


## use weex-picker
使用require方式


```
// 引入weex框架
require('weex-html5');

// 引入picker扩展
require('weex-picker');

// 安装扩展
weex.install(WeexPicker)
```

直接通过script引入js


```html
// 引入weex框架
<script src="./node_modules/weex-html5/dist/weex.js"></script>
// 引入picker扩展
<script src="./node_modules/weex-picker/dist/index.js"></script>
// 安装扩展
<script>
 weex.install(WeexPicker)
</script>

```

## DEMO
  在工作根路径 `node_modules/weex-picker`下,访问`node_modules/weex-picker/examples/index.html` 可以查看demo