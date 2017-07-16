var Hilo = require('@ali/hilo-weex');

var Asset = Hilo.Class.create({
    Mixes: Hilo.EventMixin,

    queue: null,
    bg: null,
    ground: null,
    ready: null,
    over: null,
    numberGlyphs: null,
    birdAtlas: null,
    holdback: null,

    load: function(){
        var resources = [
            {id:'bg', src:'https://g.alicdn.com/tmapp/hilodemos/3.0.8/flappy/images/bg.png'},
            {id:'ground', src:'https://g.alicdn.com/tmapp/hilodemos/3.0.8/flappy/images/ground.png'},
            {id:'ready', src:'https://g.alicdn.com/tmapp/hilodemos/3.0.8/flappy/images/ready.png'},
            {id:'over', src:'https://g.alicdn.com/tmapp/hilodemos/3.0.8/flappy/images/over.png'},
            {id:'number', src:'https://g.alicdn.com/tmapp/hilodemos/3.0.8/flappy/images/number.png'},
            {id:'bird', src:'https://g.alicdn.com/tmapp/hilodemos/3.0.8/flappy/images/bird.png'},
            {id:'holdback', src:'https://g.alicdn.com/tmapp/hilodemos/3.0.8/flappy/images/holdback.png'}
        ];

        this.queue = new Hilo.LoadQueue();
        this.queue.add(resources);
        this.queue.on('complete', this.onComplete.bind(this));
        this.queue.start();
    },

    onComplete: function(e){
        this.bg = this.queue.get('bg').content;
        this.ground = this.queue.get('ground').content;
        this.ready = this.queue.get('ready').content;
        this.over = this.queue.get('over').content;
        this.holdback = this.queue.get('holdback').content;

        this.birdAtlas = new Hilo.TextureAtlas({
            image: this.queue.get('bird').content,
            frames: [
                [0, 120, 86, 60], 
                [0, 60, 86, 60], 
                [0, 0, 86, 60]
            ],
            sprites: {
                bird: [0, 1, 2]
            }
        });

        var number = this.queue.get('number').content;
        this.numberGlyphs = {
            0: {image:number, rect:[0,0,60,91]},
            1: {image:number, rect:[61,0,60,91]},
            2: {image:number, rect:[121,0,60,91]},
            3: {image:number, rect:[191,0,60,91]},
            4: {image:number, rect:[261,0,60,91]},
            5: {image:number, rect:[331,0,60,91]},
            6: {image:number, rect:[401,0,60,91]},
            7: {image:number, rect:[471,0,60,91]},
            8: {image:number, rect:[541,0,60,91]},
            9: {image:number, rect:[611,0,60,91]}
        };

        this.queue.off('complete');
        this.fire('complete');
    }
});

module.exports = Asset;