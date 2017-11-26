<template>
  <example-list :items="items" dir="examples"></example-list>
</template>

<script>
  module.exports = {
    data: function () {
      var root = typeof window === 'object' ? 'vue-web/vue' : ''

      return {
        items: [ 
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
       	  //{name: root + '/hilo2d/hilo2d_fish', title:'Hilo2d-Fish'},
          //{name: root + '/hilo2d/hilo2d_event', title:'Hilo2d-Event'},
          //{name: root + '/hilo2d/flappy_bird/flappy', title:'Hilo2d-FlappyBird'}

        ]
      }
    },
    components: {
      exampleList: require('./include/example-list.vue')
    },
    created: function() {
      let root = typeof window === 'object' ? 'vue-web/vue' : 'vue'
      let platform = this.$getConfig().env.platform.toLowerCase()
    }
  }
</script>
