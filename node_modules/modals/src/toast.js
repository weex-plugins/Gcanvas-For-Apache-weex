'use strict'

require('../styles/toast.css')

var queue = []
var timer
var isProcessing = false
var toastWin
var TOAST_WIN_CLASS_NAME = 'amfe-toast'

var DEFAULT_DURATION = 0.8

function showToastWindow(msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd)
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd)
    callback && callback()
  }
  if (!toastWin) {
    toastWin = document.createElement('div')
    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide')
    document.body.appendChild(toastWin)
  }
  toastWin.textContent = msg
  toastWin.addEventListener('transitionend', handleTransitionEnd)
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd)
  setTimeout(function () {
    toastWin.classList.remove('hide')
  }, 0)
}

function hideToastWindow(callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd)
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd)
    callback && callback()
  }
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd)
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd)
  setTimeout(function () {
    toastWin.classList.add('hide')
  }, 0)
}

var toast = {

  push: function (msg, duration) {
    queue.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    })
    this.show()
  },

  show: function () {
    var that = this

    // All messages had been toasted already, so remove the toast window,
    if (!queue.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin)
      toastWin = null
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true

    var toastInfo = queue.shift()
    showToastWindow(toastInfo.msg, function () {
      timer = setTimeout(function () {
        timer = null
        hideToastWindow(function () {
          isProcessing = false
          that.show()
        })
      }, toastInfo.duration * 1000)
    })
  }
}

module.exports = {
  push: toast.push.bind(toast)
}
