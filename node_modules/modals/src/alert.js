'use strict'

var Modal = require('./modal')
require('../styles/alert.css')

var CONTENT_CLASS = 'content'
var MSG_CLASS = 'content-msg'
var BUTTON_GROUP_CLASS = 'btn-group'
var BUTTON_CLASS = 'btn'

function Alert(config) {
  this.msg = config.message || ''
  this.callback = config.callback
  this.okTitle = config.okTitle || 'OK'
  Modal.call(this)
  this.node.classList.add('amfe-alert')
}

Alert.prototype = Object.create(Modal.prototype)

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div')
  content.classList.add(CONTENT_CLASS)
  this.node.appendChild(content)

  var msg = document.createElement('div')
  msg.classList.add(MSG_CLASS)
  msg.appendChild(document.createTextNode(this.msg))
  content.appendChild(msg)

  var buttonGroup = document.createElement('div')
  buttonGroup.classList.add(BUTTON_GROUP_CLASS)
  this.node.appendChild(buttonGroup)
  var button = document.createElement('div')
  button.classList.add(BUTTON_CLASS, 'alert-ok')
  button.appendChild(document.createTextNode(this.okTitle))
  buttonGroup.appendChild(button)
}

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this)
  var button = this.node.querySelector('.' + BUTTON_CLASS)
  button.addEventListener('click', function () {
    this.destroy()
    this.callback && this.callback()
  }.bind(this))
}

module.exports = Alert
