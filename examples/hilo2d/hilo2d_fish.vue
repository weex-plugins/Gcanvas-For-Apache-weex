<template>
	<div ref="test">
	  	<text ref="title" onclick="onClick" ontouchstart="onTouch" style="width:750;height:100;background-color:#e0e0e0">fps:{{fps}},  fishNum:{{fishNum}}</text>
		<gcanvas ref="canvas_holder" style="width:750;height:1000;background-color:rgba(0,0,0,0.1)"></gcanvas>
	</div>
</template>

<script>
	
	var Hilo = require('@ali/hilo-weex');
    var Image = Hilo.Image;
    var CanvasElement = Hilo.CanvasElement;
    var modal = weex.requireModule('modal')

	module.exports = {

		data: {
            fps: 0,
            fishNum:0
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
            img.src = 'http://img.alicdn.com/tps/TB12IsqKVXXXXalXpXXXXXXXXXX-174-1512.png';
        },

        methods:{
            onClick: function (evt) {
                console.log('click')
                modal.toast({
                    message: 'onClick event',
                    duration: 2
                })
            },
            onTouch: function (evt) {
                console.log('event', evt);
                this.ele.fire(evt);
            },
            xxx: function (img) {
                var ele = this.ele = new CanvasElement(this.$refs.canvas_holder);

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
                    height: 1200
                });

                var ticker = new Hilo.Ticker(60);
                //var ticker = new Hilo.Ticker(30);
                ticker.addTick(stage);
                ticker.addTick(Hilo.Tween);
                ticker.start();
                var self = this;
                ticker.addTick({
                    tick: function () {
                        self.fps = ticker._measuredFPS
                    }
                });

                var atlas = new Hilo.TextureAtlas({
                    image: img,
                    width: 174,
                    height: 1512,
                    frames: {
                        frameWidth: 174,
                        frameHeight: 126,
                        numFrames: 12
                    },
                    sprites: {
                        fish: {from:0, to:7}
                    }
                });

                var createFish = function (x, y, id) {
                    var testFish = atlas.getSprite('fish');

                    var fish = new Hilo.Sprite({
                        width: 174,
                        height: 126,
                        frames: atlas.getSprite('fish'),
                        x: x,
                        //y: Math.floor(Math.random() * stage.height),
                        y: y,
                        interval: 6,
                        //interval: 20,
                        timeBased: false,
                        loop: true,
                        onUpdate: function(){
                            if(this.x > stage.width - this.pivotX){
                                this.x = 0;
                            }else{
                                this.x += 3;
                            }
                        }
                    }).addTo(stage);
                    fish.idx = id;

                    self.fishNum++; 

                };

	            var x_start = 0;
	            var y_start = 0;
                var gap = 75;
                var gapNum = 750 / gap;
	            for (var i = 0; i < 20; i += 1) {
	                for (var j = 0; j < gapNum; j += 1) {
    	                createFish(x_start + gap * j,  y_start, i*5 + j);
                    }

	                y_start = y_start + 50;
	            } 
            }
        }
	};
</script>