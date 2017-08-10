
var context;
function getProto (Weex) {
  return {
    create: function () {
      this.node = document.createElement('canvas')
      return this.node
    },
    getContext: function (type) {
      context = this.node.getContext(type || '2d')
      return context
    },

    getContextAsyn: function (type, callback) {
      context = this.node.getContext(type || '2d')
      callback(context)
    },

    drawImage: function (url) {
      var img = new Image();
      img.src = url
      arguments[0] = img
      return context.drawImage.apply(context, arguments)
    }

  }
}

function init (Weex) {
  var Component = Weex.Component
  var extend = Weex.utils.extend

  function GCanvas (data) {
    Component.call(this, data)
  }

  GCanvas.prototype = Object.create(Component.prototype)
  extend(GCanvas.prototype, getProto(Weex))

  Weex.registerComponent('gcanvas', GCanvas)
}

module.exports =  {
  init: init
}

