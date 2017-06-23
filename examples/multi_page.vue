<template>
  <navpage
          dataRole="none"
          :height="navBarHeight"
          :title="title"
          background-color="#ff5898"
          titleColor="white"
          leftItemTitle="More"
          leftItemColor="white"
          rightItemSrc="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
          @naviBarLeftItemClick="naviBarLeftItemClick"
          @naviBarRightItemClick="naviBarRightItemClick" 
          @viewappear="viewappear" @viewdisappear="viewdisappear">
    <panel title="push a new page">
      	<button type="primary" size="small" value="push" @click.native="push"></button>
    </panel>
    <panel title="pop to the last page">
      <button type="success" size="small" value="pop" @click.native="pop"></button>
    </panel>

	<list >
    	<cell>
	      <div ref="test" @appear="cellappear" @disappear="celldisappear">
	        <gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
	      </div>
    	</cell>
	    <cell>
	      <div class="holder" style="background-color:rgb(255,255,255)">
	      </div>
	    </cell>
  </list>

  </navpage>
</template>

<style>
  .holder{
    height: 2000px;
    background-color: #000000;
  }
</style>

<script>
  var navigator = weex.requireModule('navigator');
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
        navBarHeight: 88,
        title: 'Navigator',
        dir: 'examples',
        baseURL: '',
        subPath: weex.config.env.platform === 'Web' ? 'vue-web/' : ''
      }
    },
    components: {
      panel: require('./include/panel.vue'),
      navpage: require('./include/navpage.vue'),
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
      naviBarLeftItemClick: function (e) {
        modal.toast({ message: 'naviBarLeftItemClick', duration: 2 })
      },
      naviBarRightItemClick: function (e) {
        modal.toast({ message: 'naviBarRightItemClick', duration: 2 })
      },
      push: function () {
        var params = {
          'url':  this.baseURL + this.subPath + 'multi_page.js?test=1',
          'animated' : 'true',
        }
        navigator.push(params, function () {

        });
      },
      pop: function () {
        var params = {
          'url':  this.baseURL + this.subPath + 'multi_page.js?test=1',
          'animated' : 'true',
        }
        navigator.pop(params, function () {
        	gcanvas.stopLoop();
        });
      },
      viewappear: function () {
  		// gcanvas.reset();
      	modal.toast({
          'message': 'view appear',
          'duration': 0.3
        })
      },
      viewdisappear: function() {
      	// gcanvas.stopLoop();
      	modal.toast({
          'message': 'view disappear',
          'duration': 0.3
        })
      },
      cellappear: function () {
      	// gcanvas.startLoop();
        modal.toast({
          'message': 'gcanvas cell appear',
          'duration': 0.3
        })
      },
      celldisappear: function () {
      	// gcanvas.stopLoop();
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
