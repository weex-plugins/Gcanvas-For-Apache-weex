<template>
  <example-list :items="items" dir="examples"></example-list>
</template>

<script>
  module.exports = {
    data: function () {
      var root = typeof window === 'object' ? 'vue-web/vue' : ''

      return {
        items: [ 

          //bubble
          {name: root + '/bubble', title:'Bubble'},
          {name: root + '/bubble-index', title:'Bubble 2'},


          //hilo3d
          {name: root + '/webgl/hilo3d_mesh', title:'Hilo3d-Mesh'},
          {name: root + '/webgl/hilo3d_load_texture', title:'Hilo3d-LoadTexture'},
          {name: root + '/webgl/hilo3d_basic', title:'Hilo3d-Basic'},

          //webgl api
          // {name: root + '/webgl_api_test/wx_01_gl_activeTexture', title: 'API_01_gl_activeTexture'},
          // {name: root + '/webgl_api_test/wx_02_gl_attachShader', title: 'API_02_gl_attachShader'},
          // {name: root + '/webgl_api_test/wx_03_gl_bindAttribLocation', title: 'API_03_gl_bindAttribLocation'},
          // {name: root + '/webgl_api_test/wx_04_gl_bindBuffer', title: 'API_04_gl_bindBuffer'},
          // {name: root + '/webgl_api_test/wx_05_gl_bindFrameBuffer', title: 'API_05_gl_bindFrameBuffer'},
          // {name: root + '/webgl_api_test/wx_06_gl_bindRenderBuffer', title: 'API_06_gl_bindRenderBuffer'},
          // {name: root + '/webgl_api_test/wx_07_gl_bindTexture', title: 'API_07_gl_bindTexture'},
          // {name: root + '/webgl_api_test/wx_08_gl_blendColor', title: 'API_08_gl_blendColor'},
          // {name: root + '/webgl_api_test/wx_135_gl_vertexAttribPointer', title: 'API_135_gl_vertexAttribPointer'},
          // {name: root + '/webgl_api_test/wx_136_gl_viewport', title: 'API_136_gl_viewport'},
          // {name: root + '/webgl_api_test/wx_gl_clear', title: 'API_gl_clear'},
          
          //performance
          {name: root + '/max_image_test', title: 'Context2d-Max-Image'},


          //font
          {name: root + '/context2d_font_01', title: 'Context2d-Font-01'},
          // common
          {name: root + '/singlecanvas', title: 'SingleGCanvas'},
          {name: root + '/multicanvas', title: 'MultiGCanvas'},
          {name: root + '/image', title: 'Image'},
          {name: root + '/image_duplicate', title: 'Image-Duplicate'},
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

          {name: root + '/webgl/08_webgl_readpixel_1', title:'08-WebGL-readpixel-1'},
          {name: root + '/webgl/08_webgl_readpixel_2', title:'08-WebGL-readpixel-2'},



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
