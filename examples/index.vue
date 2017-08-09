<template>
  <example-list :items="items" dir="examples"></example-list>
</template>

<script>
  module.exports = {
    data: function () {
      var root = typeof window === 'object' ? 'vue-web/vue' : ''

      return {
        items: [ 

          //test
          {name: root + '/testcallNative', title: 'TestCallNative'},
          // common
          {name: root + '/singlecanvas', title: 'SingleGCanvas'},
          {name: root + '/multicanvas', title: 'MultiGCanvas'},
          {name: root + '/image', title: 'Image'},
          {name: root + '/multicanvas_image', title: 'MultiGCanvasImage'},
          {name: root + '/transparent', title: 'Transparent'},
          {name: root + '/animation', title: 'Animation'},
          {name: root + '/multiimage_animation', title: 'MultiImageAnimation'},
          {name: root + '/list', title: 'ListRecycle'},
          {name: root + '/multi_page', title: 'MultiPages'},
          {name: root + '/multi_page_multi_canvas', title: 'MultiPages-MultiGCanvas'},
          //{name: root + '/g2/example/index', title:'g2'},
          //{name: root + '/we/demo', title:'点图'},

          //hilo2d
       	  {name: root + '/hilo2d/hilo2d_fish', title:'Hilo2d-Fish'},
          {name: root + '/hilo2d/hilo2d_event', title:'Hilo2d-Event'},
          {name: root + '/hilo2d/flappy_bird/flappy', title:'Hilo2d-FlappyBird'},

          //webgl
          {name: root + '/webgl/01_webgl_triangle', title:'01-WebGL-Triangle'},
          {name: root + '/webgl/02_webgl_gradient', title:'02-WebGL-Gradient'},
          {name: root + '/webgl/03_webgl_rotation', title:'03-WebGL-Rotation'},
          {name: root + '/webgl/04_webgl_cube', title:'04-WebGL-Cube'},
          {name: root + '/webgl/05_webgl_triangle_texture', title:'05-WebGL-Triangle-Texture'},
          {name: root + '/webgl/06_webgl_texImage2D', title:'06-WebGL-texImage2D'},
          {name: root + '/webgl/3d', title:'Hilo3d'}


        ]
      }
    },
    components: {
      exampleList: require('./include/example-list.vue')
    },
    created: function() {
    }
  }
</script>
