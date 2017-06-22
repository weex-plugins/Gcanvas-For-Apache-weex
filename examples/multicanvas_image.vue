<template>
	<div ref="test">
		<gcanvas class="gcanvas1" ref="gcanvas1" style="width:750;height:400;background-color:rgba(255,0,0,0.3)"></gcanvas>
		<gcanvas class="gcanvas2" ref="gcanvas2" style="width:750;height:400;background-color:rgba(0,255,0,0.3)"></gcanvas>
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
	var GCanvas = require('../js/src/gcanvas'); //调试使用
	var Image=require('../js/src/gcanvasimage');

	module.exports = {
		mounted: function () {

			var ref1 = this.$refs.gcanvas1;
			var gcanvas1 = GCanvas.start(ref1);
			var ctx1 = gcanvas1.getContext('2d');

			var ref2 = this.$refs.gcanvas2;
			var gcanvas2 = GCanvas.start(ref2);
			var ctx2 = gcanvas2.getContext('2d');
			
			var image = new Image();
			image.src = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
			image.onload = function(){
				ctx1.drawImage(image, 100, 10, 210, 330);
				ctx2.drawImage(image, 100, 10, 210, 330);

			}



			// var ref1 = this.$refs.gcanvas1;
			// GCanvas.start(ref1, function (gcanvas1) {
			// 	var ctx = gcanvas1.getContext('2d');
			// 	var img = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
			// 	ctx.drawImage(img, 100, 10, 210, 330);
			// });

			// var ref2 = this.$refs.gcanvas2;
			// GCanvas.start(ref2, function (gcanvas2) {
			// 	var ctx = gcanvas2.getContext('2d');
			// 	var img = 'https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
			// 	ctx.drawImage(img, 200, 10, 210, 330);		
			// });
		
		}
	};
</script>