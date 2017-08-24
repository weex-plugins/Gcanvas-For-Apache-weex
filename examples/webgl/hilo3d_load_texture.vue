<template>
    <div ref="test">
        <gcanvas ref="canvas_holder" style="position:absolute;top:0;left:0;width:750;height:750;background-color:rgba(0.5, 0.5, 0.5, 0.5)"></gcanvas>
    </div>
</template>
<script>
    // var Hilo3d = require('@ali/hilo-weex');
    //var Hilo3d = require('/Users/jiangc/gitlab/Hilo3d-weex/index.js');
    //var Hilo3d = require('/Users/yuankong/code/hilo3d-weex/index.js');
    var Hilo3d = require('./index.js')
    var Image = Hilo3d.Image;
    var CanvasElement = Hilo3d.CanvasElement;

    var innerWidth = 750;
    var innerHeight = 750

    // const modal = require('@weex-module/modal');
    // var GUtils = require('@weex-module/gcanvas');

    const modal = weex.requireModule('modal');

    module.exports = {
        mounted: function () {
            var innerWidth = 750;
            var innerHeight = 750;

            var ele = this.ele = new CanvasElement(this.$refs.canvas_holder);


            var camera = new Hilo3d.PerspectiveCamera({
                aspect: innerWidth / innerHeight,
                far: 20000,
                near:1,
                z:5
            });
            var stage = new Hilo3d.Stage({
                canvas: ele,
                camera: camera,
                width: innerWidth,
                height: innerHeight
            });

            var ticker = new Hilo3d.Ticker(100);
            ticker.addTick(stage);
            ticker.addTick(Hilo3d.Tween);
            ticker.start()                

            var loader = new Hilo3d.BasicLoader();
            loader.load({
                src: 'http://ossgw.alicdn.com/tmall-c3/tmx/71c8098c62c7b9615d375b710583183f.png',
                // src: 'https://img.alicdn.com/tfs/TB1QoJhXDZRMeJjSspoXXcCOFXa-512-512.png',
                crossOrigin: 'anonymous'
            }).then(function(image) {
                console.log( image );   
                return new Hilo3d.Texture({ image: image });
            }, function(err) {
                console.log('error:', err);
                return new Hilo3d.Color(1, 0, 0);
            }).then(function(diffuse) {
                console.log('diffuse::', diffuse);
                var mesh = new Hilo3d.Mesh({
                    geometry: new Hilo3d.BoxGeometry(),
                    material: new Hilo3d.BasicMaterial({
                        diffuse: diffuse
                        // diffuse: new Hilo3d.Color(1.0, 0, 0)

                    })  
                });
                stage.addChild( mesh );

                stage.onUpdate = function(){
                    console.log('stage.onUpdate=======');
                    mesh.rotationY += 3;
                    mesh.rotationx += 3;
                }
            });
        }
    }
</script>
