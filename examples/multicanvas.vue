<template>
	<div ref="test">
		<gcanvas class="gcanvas1" ref="gcanvas1" style="width:750;height:300;background-color:rgba(255,0,0,0.3)"></gcanvas>
		<gcanvas class="gcanvas2" ref="gcanvas2" style="width:750;height:300;background-color:rgba(0,255,0,0.3)"></gcanvas>
	</div>
</template>

<style scoped>
  .gcanvas1 {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 300;
  },
  .gcanvas2 {
    position: absolute; 
    top: 350; 
    left: 0; 
    right: 0; 
    bottom: 650;
  }
</style>

<script>
	var GCanvas = require('../js/src/gcanvas'); //调试使用

	module.exports = {
		created: function () {
			GCanvas.disable();
		},
		mounted: function () {

			var ref1 = this.$refs.gcanvas1;
			GCanvas.start(ref1, function (gcanvas1) {
				var ctx = gcanvas1.getContext('2d');
				//rect
				ctx.fillStyle = 'red';
				ctx.fillRect(0, 0, 100, 100);

				//rect
				ctx.fillStyle = 'black';
				ctx.fillRect(100, 100, 100, 100);
				ctx.fillRect(25, 210, 700, 5);

				//circle
				ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
				ctx.fill();				
			});

			var ref2 = this.$refs.gcanvas2;
			GCanvas.start(ref2, function (gcanvas2) {
				var ctx = gcanvas2.getContext('2d');
				//rect
				ctx.fillStyle = 'blue';
				ctx.fillRect(100, 100, 100, 100);

				//rect
				ctx.fillStyle = 'yellow';
				ctx.fillRect(100, 100, 100, 100);
				ctx.fillRect(25, 210, 700, 5);

				//circle
				ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
				ctx.fill();				
			});
		
		}
	};
</script>