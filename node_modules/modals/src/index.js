'use strict'

var Alert = require('./alert')
var Confirm = require('./confirm')
var Prompt = require('./prompt')
var toast = require('./toast')

var modal = {

  toast: function (msg, duration) {
    toast.push(msg, duration)
  },

  alert: function (config) {
    new Alert(config).show()
  },

  prompt: function (config) {
    new Prompt(config).show()
  },

  confirm: function (config) {
    new Confirm(config).show()
  }

}

!window.lib && (window.lib = {})
window.lib.modal = modal

module.exports = modal