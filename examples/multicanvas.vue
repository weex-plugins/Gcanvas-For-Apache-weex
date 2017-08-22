<template>
	<div ref="test">
		<gcanvas class="gcanvas1" ref="gcanvas1" style="width:750;height:400;background-color:rgba(255,0,0,0.1)"></gcanvas>
		<gcanvas class="gcanvas2" ref="gcanvas2" style="width:750;height:400;background-color:rgba(0,255,0,0.1)"></gcanvas>
	</div>
</template>

<style scoped>
  .gcanvas1 {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 400;
  },
  .gcanvas2 {
    position: absolute; 
    top: 450; 
    left: 0; 
    right: 0; 
    bottom: 850;
  }
</style>

<script>
	//var GCanvas=require('weex-gcanvas');
	var GCanvas = require('../js/src/gcanvas'); //调试使用

	module.exports = {
		mounted: function () {

			//GCanvas1
			var ref1 = this.$refs.gcanvas1;
			var gcanvas1 = GCanvas.start(ref1);
			
			var ctx1 = gcanvas1.getContext('2d');
			//rect
			ctx1.fillStyle = 'red';
			ctx1.fillRect(0, 0, 100, 100);

			//rect
			ctx1.fillStyle = 'black';
			ctx1.fillRect(100, 100, 100, 100);
			ctx1.fillRect(25, 210, 700, 5);

			//circle
			ctx1.arc(450, 200, 100, 0, Math.PI * 2, true);
			ctx1.fill();				


			//GCanvas2
			var ref2 = this.$refs.gcanvas2;
			var gcanvas2 = GCanvas.start(ref2)

			var ctx2 = gcanvas2.getContext('2d');
			//rect
			ctx2.fillStyle = 'blue';
			ctx2.fillRect(0, 0, 100, 100);

			//rect
			ctx2.fillStyle = 'green';
			ctx2.fillRect(100, 100, 100, 100);
			ctx2.fillRect(25, 210, 700, 5);

			//circle
			ctx2.arc(450, 200, 100, 0, Math.PI * 2, true);
			ctx2.fill();				
		}
	};
</script>