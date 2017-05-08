<template>
    <div ref="test">
        <text @click="onClick" @touchstart="onTouch" ref="canvas_demo1" style="width:750;height:100;backgroundColor:#e0e0e0">fps:{{fps}}</text>
        <gcanvas ref="canvas_holder" style="width:750;height:750;backgroundColor:#ffffff" @touchstart="onTouch" @touchmove="onTouch" @touchend="onTouch" @click.native="onClick"></gcanvas>
        <text ref="canvas_demo1" style="width:750;height:100;backgroundColor:#e0e0e0">hilo_demo 上边界</text>
    </div>
</template>
<script>
var Hilo = require('@ali/hilo-weex');
// var Hilo = require('/Users/yuankong/code/hilo-weex/index.js');
var Image = Hilo.Image;
var CanvasElement = Hilo.CanvasElement;

//var gcanvas=require('weex-gcanvas'); //正式使用请用这个


const modal = weex.requireModule('modal');

module.exports = {

    props: {
        fps: {
            default: 0
        }
    },

    created: function () {
        Hilo.resetGCanvas();
    },

    mounted: function () {
        var that = this;
        var img = new Image();
        img.onload = function () {
            that.xxx(img);
        };
        // img.src = 'http://img.alicdn.com/tps/TB12IsqKVXXXXalXpXXXXXXXXXX-174-1512.png';
        // img.src = 'https://gw.alicdn.com/tfs/TB1RC0DQVXXXXXGXVXXXXXXXXXX-2048-2048.png';
        img.src = 'https://gw.alicdn.com/tfs/TB1AuVLQVXXXXb.XVXXXXXXXXXX-4096-4096.png';
    },
    methods: {
        onClick: function (evt) {
            console.log('click');
            modal.toast({
                message: 'onClick event',
                duration: 2
            });
        },
        onTouch: function (evt) {
            console.log('event', evt);
            this.ele.fire(evt);
        },
        xxx: function (img) {
            var ele = this.ele = new CanvasElement(this.$refs['canvas_holder']);

            var fn = function () {
                // modal.toast({
                //     message: 'x: ' + JSON.stringify(ele.getRect()),
                //     duration: 8
                // })
            };
            ele.addEventListener('touchstart', fn);

            var stage = new Hilo.Stage({
                renderType: 'canvas',
                canvas: ele,
                width: 750,
                height: 750
            });

            var ticker = new Hilo.Ticker(60);
            //var ticker = new Hilo.Ticker(30);
            ticker.addTick(stage);
            ticker.addTick(Hilo.Tween);
            ticker.start();
            var self = this;
            ticker.addTick({
                tick: function () {
                    self.fps = ticker._measuredFPS;
                }
            });

            var atlas = new Hilo.TextureAtlas({
                image: img,
                // width: 174,
                // height: 1512,
                // frames: {
                //     frameWidth: 174,
                //     frameHeight: 126,
                //     numFrames: 12
                // },
                // sprites: {
                //     fish: {from:0, to:7}
                // }

                width: 4096,
                height: 4096,
                frames: {
                    frameWidth: 350,
                    frameHeight: 360,
                    numFrames: 34
                },
                sprites: {
                    fish: { from: 0, to: 33 }
                }
            });

            var createFish = function (x, y, id) {
                var testFish = atlas.getSprite('fish');

                var fish = new Hilo.Sprite({
                    // width: 174,
                    // height: 126,
                    width: 350,
                    height: 360,
                    frames: atlas.getSprite('fish'),
                    x: x,
                    //y: Math.floor(Math.random() * stage.height),
                    y: y,
                    interval: 6,
                    //interval: 20,
                    timeBased: false,
                    loop: true,
                    onUpdate: function () {
                        if (this.x > stage.width - this.pivotX) {
                            this.x = 0;
                        } else {
                            this.x += 3;
                        }
                    }
                }).addTo(stage);
                fish.idx = id;
            };

            //gcanvas.setLogLevel("debug");

            var x_start = 0;
            var y_start = 0;
            for (var i = 0; i < 2; i += 1) {
                //for (var i = 0; i < 1; i += 1) {

                //for (var i = 0; i < 5; i += 1) {
                createFish(x_start, y_start, i * 5);
                createFish(x_start + 150, y_start, i * 5 + 1);
                createFish(x_start + 150 * 2, y_start, i * 5 + 2);
                createFish(x_start + 150 * 3, y_start, i * 5 + 3);
                createFish(x_start + 150 * 4, y_start, i * 5 + 4);

                y_start = y_start + 50;
            }

            /*
            var x_start = 0;
            var y_start = 0;
            for (var i = 1; i <= 10; i += 1) {
                //五排鱼
                createFish(x_start,             y_start, (i * 10) );
                createFish(x_start + 150,       y_start, (i * 10) + 1);
                createFish(x_start + 150 * 2,   y_start, (i * 10) + 2);
                createFish(x_start + 150 * 3,   y_start, (i * 10) + 3);
                createFish(x_start + 150 * 4,   y_start, (i * 10) + 4);
                y_start = y_start + 100;
                x_start = 0;
             }
            */
        }

    }

};
</script>
