# 发布到外网jcenter的命令

## 先修改bintray.gradle中的版本号

```

group = "org.weex.plugin"
version = "0.0.1"

```


## 运行脚本

source ship_to_jcenter.sh -v 0.0.1 -r
