<template>
  <div @viewappear="viewappear" @viewdisappear="viewdisappear">
      <panel title="push a new page">
        	<button type="primary" size="small" value="push" @click.native="push"></button>
      </panel>
  	<list >
      	<cell>
  	      <div ref="test" @appear="cellappear" @disappear="celldisappear" >
  	        <gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
  	      </div>
      	</cell>
  	    <cell>
  	      <div class="holder" style="background-color:rgb(255,255,255)">
  	      </div>
  	    </cell>
    </list>
    </navpage>
  </div>
</template>

<style>
  .holder{
    height: 1000px;
    background-color: #000000;
  }
</style>

<script>
  var timer = weex.requireModule('timer');
  // var gcanvas=require('weex-gcanvas');
  var GCanvas = require('../js/src/gcanvas');
  var Image = require('../js/src/gcanvasimage');
  var getBaseURL = require('./include/base-url.js').getBaseURL
  var modal = weex.requireModule('modal')
  var event = weex.requireModule('event')

  var gcanvas;
  module.exports = {
    data: function () {
      return {
        baseURL: '',
        subPath: weex.config.env.platform === 'Web' ? 'vue-web/' : ''
      }
    },
    components: {
      panel: require('./include/panel.vue'),
      button: require('./include/button.vue')
    },
    created: function() {
      this.$getConfig(function (config) {
        var env = config.env;
        if(env.platform == 'iOS'){
          var scale = env.scale;
          var deviceWidth = env.deviceWidth / scale;
          this.navBarHeight = 64.0 * 750.0 / deviceWidth;
        }
      }.bind(this));
      this.baseURL = getBaseURL(this);
    },
    methods: {
      push: function() {
        var url = './multi_page.js';
        event.openURL(url);
      },
      viewappear: function () {
      	modal.toast({
          'message': 'view appear',
          'duration': 0.3
        })
      },
      viewdisappear: function() {
        gcanvas.reset();
      	modal.toast({
          'message': 'view disappear',
          'duration': 0.3
        })
      },
      cellappear: function () {
        gcanvas.startLoop();
        modal.toast({
          'message': 'gcanvas cell appear',
          'duration': 0.3
        })
      },
      celldisappear: function () {
      	gcanvas.stopLoop();
        modal.toast({
          'message': 'gcanvas cell disappear',
          'duration': 0.3
        })
      },
    },

    mounted: function () {
      var i =1;
      var ref = this.$refs.canvas_holder;
      gcanvas = GCanvas.start(ref);
      var ctx = gcanvas.getContext('2d');

      var imageLoaded = false;
      var img = new Image();
  		img.src = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
  		img.onload = function()
  		{
  			imageLoaded = true;
  		}

  		timer.setInterval(function(){
  			i = i+10;
  			ctx.clearRect(0, 0, 750, 750);
  			ctx.fillStyle = 'red';
  			ctx.fillRect(i%300, 0, 100, 100);

  			ctx.fillStyle = 'black';
  			ctx.fillRect(100, 100, 100, 100);
  			ctx.fillRect(25, 210, 700, 5);

  			ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
  			ctx.fill();

  			if( imageLoaded )
  			{
  				ctx.drawImage(img, 100, 200, 210, 330);
  			}
  		}, 300);
    }
  }
</script>
