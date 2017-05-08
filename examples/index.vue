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
          {name: root + '/image', title: 'image'},
          {name: root + '/transparent', title: 'transparent'},
          {name: root + '/g2/example/index', title:'g2'},
       	  {name: root + '/hilo2d/index', title:'hilo2d'}
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
