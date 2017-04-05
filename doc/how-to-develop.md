# weex 插件开发套件
- weex 插件开发套件旨在帮助用户快速，方便开发插件，一键集成，无需更改任何业务代码

## iOS

### 如何开发插件
- 通过weexpack初始化一个WeexPluginGcanvas工程
   ```
   weex create dev WeexPluginGcanvas
   ```
- 工程目录如下
    ```
     ├── android(Android插件工程)
     │    ├── buid.gradle(android发布文件)
     ├── ios(ios插件工程)
     ├── js(h5插件工程)
     ├── example(例子,开发者用来测试问题)
     │    ├── android(demo)
     │    ├── ios(demo)
     │    ├── js(demo)
     │    └── index.we
     ├── ****.podspec(ios发布文件)
     ├── start(weex编译命令)
     ├── package.json(js发布文件)
     ├── README.md
   ```
- 请在ios目录下用如下命令初始化ios工程
```
pod update
```
- 添加插件初测信息
   - component示例
   ```
   WX_PlUGIN_EXPORT_MODULE(test, WPTestComponent)
   ```
   - module示例
   ```
   WX_PlUGIN_EXPORT_COMPONENT(test, WPTestModule)
   ```
   - Handler示例
   ```
   WX_PlUGIN_EXPORT_HANDLER(WPTestHandler, WXImgLoaderProtocol)
   ```
- 插件开发完成请在example/ios测试
   - 初始化测试工程
   ```
   pod update
   ```
   - 检验测试结果,demo运行起来会在控制台输入下面类似信息
   ```
   2017-03-24 16:54:52.934 WeexDemo[88059:2693902] WPTestComponent register
   2017-03-24 16:54:52.936 WeexDemo[88059:2693902] WXImgLoaderProtocol register
   2017-03-24 16:54:52.937 WeexDemo[88059:2693902] WPTestModule register
   ```

### 如何发布插件
- 发布插件到cocoapods 仓库
   - 已经默认创建好podspec，开发者在根目录通过如下命令检查iOS插件的正确性
  ```
  pod spec lint --allow-warnings
  ```
   - 发布插件到cocoapods 仓库
   ```
   pod trunk push --allow-warnings
   ```

### 如何发布插件到weex market
- 通过weex命令发布
```
weex plugin publish
```

### 如何集成插件WeexPluginGcanvas
- 命令行集成
  ```
  weex plugin add WeexPluginGcanvas
  ```
- 手动集成
  在podfile 中添加
  ```
  pod 'WeexPluginGcanvas'
  ```
