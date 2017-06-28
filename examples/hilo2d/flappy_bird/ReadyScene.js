var Hilo = require('@ali/hilo-weex');

var ReadyScene = Hilo.Class.create({
    Extends: Hilo.Container,
    constructor: function(properties){
        ReadyScene.superclass.constructor.call(this, properties);
        this.init(properties);
    },

    init: function(properties){
        //准备Get Ready!
        var getready = new Hilo.Bitmap({
            image: properties.image,
            rect: [0, 0, 508, 158]
        });

        //开始提示tap
        var tap = new Hilo.Bitmap({
            image: properties.image,
            rect: [0, 158, 286, 246]
        });
        
        //确定getready和tap的位置
        tap.x = this.width - tap.width >> 1;
        tap.y = this.height - tap.height + 40 >> 1;
        getready.x = this.width - getready.width >> 1;
        getready.y = tap.y - getready.height >> 0;

        this.addChild(tap, getready);
    }
});

module.exports = ReadyScene;