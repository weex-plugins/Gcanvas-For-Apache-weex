<template>
  <list @viewappear="viewappear" @viewdisappear="viewdisappear">
    <cell>
      <div ref="test" @appear="cellappear" @disappear="celldisappear">
        <gcanvas ref="canvas_holder" style="width:750;height:750;background-color:rgba(0,0,0,0.1)"></gcanvas>
      </div>
    </cell>
    <cell>
      <div class="holder">
      </div>
    </cell>
  </list>
</template>

<style>
  .holder{
    height: 2000px;
    background-color: #000000;
  }
</style>
<script>
  var modal = weex.requireModule('modal')

  var GCanvas=require('../js/src/gcanvas');
  var Image=require('../js/src/gcanvasimage');

  module.exports = {

    mounted: function () {
      var ref = this.$refs.canvas_holder;
      var gcanvas = GCanvas.start(ref);
      var ctx = gcanvas.getContext('2d');

      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, 100, 100);

      ctx.fillStyle = 'black';
      ctx.fillRect(100, 100, 100, 100);
      ctx.fillRect(25, 210, 700, 5);

      ctx.arc(450, 200, 100, 0, Math.PI * 2, true);
      ctx.fill();

      var image = new Image();
      image.src ='https://img.alicdn.com/tps/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png';
      image.onload = function(){
        ctx.drawImage(image, 100, 220, 210, 330);
      }
    }, 
    methods:{
      viewappear: function () {
        modal.toast({
          'message': 'view appear',
          'duration': 1
        })
      },
      viewdisappear: function () {
        modal.toast({
          'message': 'view disappear',
          'duration': 1
        })
      },
      cellappear: function () {
        modal.toast({
          'message': 'cell appear',
          'duration': 1
        })
      },
      celldisappear: function () {
        modal.toast({
          'message': 'cell disappear',
          'duration': 1
        })
      },

    }
  };
</script>