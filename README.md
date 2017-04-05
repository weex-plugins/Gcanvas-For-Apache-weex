# weex-plugin-gcanvas
weex-plugin-gcanvas是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

支持的weexpack版本： >= 0.2.0
支持的WeexSDK版本： >= 0.10.0

# 功能

# 快速使用
- 通过weexpack初始化一个weex-plugin-gcanvas工程
   ```
   weex create dev weex-plugin-gcanvas
   ```
- 添加插件
  ```
  weex plugin add weex-plugin-gcanvas
  ```

# 已有工程集成
## iOS集成插件WeexPluginGcanvas
- 命令行集成
  ```
  weex plugin add weex-plugin-gcanvas
  ```
- 手动集成
  在podfile 中添加
  ```
  pod 'WeexPluginGcanvas'
  ```

## 安卓集成插件weexplugingcanvas
- 命令行集成
  ```
  weex plugin add weex-plugin-gcanvas
  ```
- 手动集成
  在相应工程的build.gradle文件的dependencies中添加
  ```
  compile '${groupId}:weexplugingcanvas:{$version}'
  ``` 
  注意：您需要自行指定插件的groupId和version并将构建产物发布到相应的依赖管理仓库内去（例如maven）, 您也可以对插件的name进行自定义，默认将使用插件工程的名称作为name


## 浏览器端集成 weex-plugin-gcanvas
- 命令行集成
  ```
  npm install  weex-plugin-gcanvas
  ```
- 手动集成
  在相应工程的package.json文件的dependencies中添加
  ```
  weex-plugin-gcanvas:{$version}'
  ``` 
  
