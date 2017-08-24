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

            var ticker = new Hilo3d.Ticker(30);
            ticker.addTick(stage);
            ticker.addTick(Hilo3d.Tween);
            ticker.start();

            var Box = new Hilo3d.Mesh({
                geometry: new Hilo3d.BoxGeometry({
                    width: 1,
                    height: 1,
                    depth: 1
                }),
                material: new Hilo3d.BasicMaterial()
            }); 
            stage.addChild( Box );

            var Sphere = new Hilo3d.Mesh({
                geometry: new Hilo3d.SphereGeometry(),
                material: new Hilo3d.BasicMaterial()
            });
            Sphere.x = 2;

            stage.addChild( Sphere );


            var box2 = new Hilo3d.Mesh({
                geometry: new Hilo3d.BoxGeometry(),
                material: new Hilo3d.BasicMaterial()
            });
            box2.x = 0.5;
            box2.y = 0.5;


            stage.addChild( box2 );

            stage.onUpdate = function(){
                Box.rotationY+=3;
                box2.rotationY+=3;
                Sphere.rotationY+=3;
            }

            // var box = new Hilo3d.Mesh({
            //     geometry: new Hilo3d.BoxGeometry(),
            //     material: new Hilo3d.BasicMaterial({
            //         diffuse: new Hilo3d.Color(0.5, 0.5, 0.5)
            //     })
            // });
            // stage.addChild(box);
            // stage.onUpdate = function(){
            //     box.rotationY+=3;
            //     console.log("=====box.rotateY:"+box.rotationY);
            // }
        }
    }
</script>
