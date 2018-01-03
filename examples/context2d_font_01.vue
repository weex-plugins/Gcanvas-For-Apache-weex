<template>
	<div ref="test">
		<gcanvas ref="canvas_holder" style="top: 0; width:750;height:750;position:absolute; background-color:rgba(0,0,0,0.1)" ></gcanvas>
	</div>
</template>
<script>

	// var GCanvas=require('weex-gcanvas'); //正式使用请用这个
	var GCanvas=require('../js/src/gcanvas'); //调试使用
	var Image=require('../js/src/gcanvasimage');

	module.exports = {
		mounted: function () {
			var ref = this.$refs.canvas_holder;
			var gcanvas = GCanvas.start(ref);

			var ctx = gcanvas.getContext('2d');
			
			var offsetX = 0;

			setInterval(function(){
				ctx.clearRect(0, 0, 750, 750);
				// ctx.font="40px Helvetica";

				ctx.save();
				ctx.font="20px Verdana";
				ctx.fillText("GCanvas很牛逼", offsetX, 50);	
				ctx.fillStyle = 'red'
				ctx.restore();

				ctx.save();
				ctx.font="24px Verdana";
				ctx.fillStyle = 'red'
				ctx.fillText("GCanvas 666",offsetX+200, 50);
				ctx.restore();

				ctx.save();
				ctx.font="30px Georgia";
				ctx.fillText("Hello World GCanvas",offsetX, 100);
				ctx.restore();

				ctx.save();
				ctx.font="40px italic bold arial";
				ctx.fillText("Hello World",offsetX, 150);
				ctx.restore();
				
				ctx.save();
				ctx.font="bold 50px Verdana";
				ctx.fillText("Hello World",offsetX, 200);
				ctx.restore();

				//gradient
				ctx.save();
				ctx.font="bold 60px Verdana";
				var gradient=ctx.createLinearGradient(offsetX,0,offsetX+750, 0);
				gradient.addColorStop("0", "magenta");
				gradient.addColorStop("0.5", "blue");
				gradient.addColorStop("1.0", "red");
				ctx.fillStyle = gradient;
				ctx.fillText("GCanvas Fast Engine",offsetX, 250);
				ctx.restore();

				ctx.save();
				ctx.font="italic 70px 微软雅黑";
				ctx.fillText("italic 70 号", offsetX, 320);
				ctx.restore();

				ctx.save();
				ctx.font="60px 微软雅黑";
				ctx.fillText("Helvetica 60号", offsetX, 400);
				ctx.restore();

				ctx.save();
				ctx.font="50px 微软雅黑";
				ctx.fillText("Helvetica 50号", offsetX, 470);
				ctx.restore();

				ctx.save();
				ctx.font="italic bold 40px Verdana";
				ctx.fillText("Verdana 40号字", offsetX, 530);
				ctx.restore();

				ctx.save();
				ctx.font="bold 30px Verdana";
				ctx.fillText("Verdana 30号字", offsetX, 580);
				ctx.restore();

				// ctx.save();
				// var offsetY = 500
				// ctx.strokeStyle="red";
				// ctx.moveTo(offsetX,20 + offsetY);
				// ctx.lineTo(offsetX,170 + offsetY);
				// ctx.stroke();
				// ctx.font="20px Arial"; 
				// // Show the different textAlign values
				// ctx.textAlign="start"; 
				// ctx.fillText("textAlign=start",offsetX,60+ offsetY); 
				// ctx.textAlign="end"; 
				// ctx.fillText("textAlign=end",offsetX,80+ offsetY); 
				// ctx.textAlign="left"; 
				// ctx.fillText("textAlign=left",offsetX,100+ offsetY);
				// ctx.textAlign="center"; 
				// ctx.fillText("textAlign=center",offsetX,120+ offsetY); 
				// ctx.textAlign="right"; 
				// ctx.fillText("textAlign=right",offsetX,140+ offsetY);
				// ctx.restore();

				// offsetY = 700

				// ctx.save();
				// ctx.strokeStyle="red";
				// ctx.moveTo(offsetX + 5,offsetY);
				// ctx.lineTo(offsetX + 395,offsetY);
				// ctx.stroke();
				// ctx.font="20px Arial"
				// //Place each word at y=100 with different textBaseline values
				// ctx.textBaseline="top"; 
				// ctx.fillText("Top",offsetX+5,offsetY); 
				// ctx.textBaseline="bottom"; 
				// ctx.fillText("Bottom",offsetX+50,offsetY); 
				// ctx.textBaseline="middle"; 
				// ctx.fillText("Middle",offsetX+120,offsetY); 
				// ctx.textBaseline="alphabetic"; 
				// ctx.fillText("Alphabetic",offsetX+190,offsetY); 
				// ctx.textBaseline="hanging"; 
				// ctx.fillText("Hanging",offsetX+290,offsetY);
				// ctx.textBaseline="ideographic"; 
				// ctx.fillText("Ideographic",offsetX+300,offsetY);
				// ctx.restore();

				offsetX = (offsetX + 1 ) % 750;
			}, 16);	
		}
	};
</script>
