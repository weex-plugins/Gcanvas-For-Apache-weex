<template>
  <div @viewappear="viewappear" @viewdisappear="viewdisappear">
      <panel title="push a new page">
        	<button type="primary" size="small" value="push" @click.native="push"></button>
      </panel>
      <div ref="test" @appear="cellappear" @disappear="celldisappear" >
        <gcanvas class="gcanvas1" ref="gcanvas1" style="width:750;height:500;background-color:rgba(255,0,0,0.1)"></gcanvas>
        <gcanvas class="gcanvas2" ref="gcanvas2" style="width:750;height:500;background-color:rgba(0,255,0,0.1)"></gcanvas>
      </div>
  </div>
</template>

<style>
  .holder{
    height: 2000px;
    background-color: #000000;
  }
  .gcanvas1 {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 500;
  },
  .gcanvas2 {
    position: absolute; 
    top: 550; 
    left: 0; 
    right: 0; 
    bottom: 1050;
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
        var url = './multi_page_multi_canvas.js';
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
      var ref1 = this.$refs.gcanvas1;
      gcanvas1 = GCanvas.start(ref1);
      var ctx1 = gcanvas1.getContext('2d');

      var ref2 = this.$refs.gcanvas2;
      gcanvas2 = GCanvas.start(ref2);
      var ctx2 = gcanvas2.getContext('2d');

      var img = new Image();
  		img.src = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
  		var imageLoaded = false;
      img.onload = function()
  		{
        setInterval(function(){
          ctx1.fillStyle = 'red';
          ctx1.fillRect(0, 0, 100, 100);

          ctx2.fillStyle = 'blue';
          ctx2.fillRect(0, 0, 100, 100);

          ctx1.drawImage(img, 200, 0);
          ctx1.drawImage(img, 200+230, 20, 210, 330);

          ctx2.drawImage(img, 200, 0);
          ctx2.drawImage(img, 200+230, 20, 210, 330);
        }, 16)
  		}

      
    }
  }
</script>
