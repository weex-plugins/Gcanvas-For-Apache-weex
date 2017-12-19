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
			

			var func1 = function(ctx){
				ctx.save();
				ctx.font="40px 微软雅黑";
				ctx.fillText("Hello World",10,50);	
				ctx.fillText("GCanvas是个牛逼的渲染引擎",10,200);
				ctx.restore();
			};

			var func2 = function(ctx){
				ctx.save();
				ctx.font="italic bold 20px arial";
				ctx.fillText("Hello World",10,50);
				ctx.font="bold 30px Verdana";
				ctx.fillText("Hello World",10,150);
				ctx.restore();
			};

			var func3 = function(ctx){
				//tc_09_03_Text_textBaseline
				ctx.save();
				ctx.strokeStyle="red";
				ctx.moveTo(150,20);
				ctx.lineTo(150,170);
				ctx.stroke();
				ctx.font="15px Arial"; 
				// Show the different textAlign values
				ctx.textAlign="start"; 
				ctx.fillText("textAlign=start",150,60); 
				ctx.textAlign="end"; 
				ctx.fillText("textAlign=end",150,80); 
				ctx.textAlign="left"; 
				ctx.fillText("textAlign=left",150,100);
				ctx.textAlign="center"; 
				ctx.fillText("textAlign=center",150,120); 
				ctx.textAlign="right"; 
				ctx.fillText("textAlign=right",150,140);
				ctx.restore();
			};

			var func4 = function(ctx){
				//tc_09_04_Text_fillText
				ctx.save();
				ctx.strokeStyle="red";
				ctx.moveTo(5,100);
				ctx.lineTo(395,100);
				ctx.stroke();
				ctx.font="20px Arial"
				//Place each word at y=100 with different textBaseline values
				ctx.textBaseline="top"; 
				ctx.fillText("Top",5,100); 
				ctx.textBaseline="bottom"; 
				ctx.fillText("Bottom",50,100); 
				ctx.textBaseline="middle"; 
				ctx.fillText("Middle",120,100); 
				ctx.textBaseline="alphabetic"; 
				ctx.fillText("Alphabetic",190,100); 
				ctx.textBaseline="hanging"; 
				ctx.fillText("Hanging",290,100);
				ctx.textBaseline="ideographic"; 
				ctx.fillText("Ideographic",300,100);
				ctx.moveTo(0,0);
				ctx.restore();

			};

			var func5 = function(ctx){
				//tc_09_05_Text_strokeText
				ctx.save();
				ctx.font="20px Georgia";
				ctx.fillText("Hello World!",10,50);
				
				ctx.font="30px Verdana";
				// Create gradient
				var gradient=ctx.createLinearGradient(0,0,170,0);
				gradient.addColorStop("0","magenta");
				gradient.addColorStop("0.5","blue");
				gradient.addColorStop("1.0","red");
				// Fill with gradient
				ctx.fillStyle=gradient;
				ctx.fillText("Big smile!",10,90);
				ctx.restore();


			};

			var func6 = function(ctx){
				//tc_09_06_Text_measureText
				ctx.save();
				ctx.font="30px Arial";
				var txt="Hello World"
				ctx.fillText("width:" + ctx.measureText(txt).width,10,50)
				ctx.fillText(txt,10,100);
				ctx.restore();
			}


			var funcArray = [func1, func2, func3, func4, func5, func6];
			var funcArrayIndex = 0;
			setInterval(function(){
				ctx.clearRect(0, 0, 750, 750);
				// ctx.font="40px Helvetica";
				
				// func1(ctx);


				var func = funcArray[ funcArrayIndex%funcArray.length ];
				funcArrayIndex++;
				func(ctx);

			}, 16);	
		}
	};
</script>
