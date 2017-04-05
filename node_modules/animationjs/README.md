# animationjs

## 最新版本

**0.1.5**

## 依赖库

无

## 用Grunt打包

运行 `npm install`，来安装所需的依赖模块。关于NPM的知识，请参见[nodejs](http://nodejs.org/);

运行 `grunt`，来对项目进行打包。关于Grunt的知识，请参见[gruntjs](http://gruntjs.com/);

## 如何使用

    var animation = new lib.animation(
        1000,                   // duration(ms)
        lib.cubicbezier.ease,   // timingFunction
        function(i1, i2) {      // frame
            console.log(i1, i2);
        }
    );

    animation.play().then(function() {
        console.log('end');
    });
