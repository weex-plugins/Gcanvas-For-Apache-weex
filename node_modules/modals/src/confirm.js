'use strict'

var Modal = require('./modal')
require('../styles/confirm.css')

var CONTENT_CLASS = 'content'
var MSG_CLASS = 'content-msg'
var BUTTON_GROUP_CLASS = 'btn-group'
var BUTTON_CLASS = 'btn'

function Confirm(config) {
  this.msg = config.message || ''
  this.callback = config.callback
  this.okTitle = config.okTitle || 'OK'
  this.cancelTitle = config.cancelTitle || 'Cancel'
  Modal.call(this)
  this.node.classList.add('amfe-confirm')
}

Confirm.prototype = Object.create(Modal.prototype)

Confirm.prototype.createNodeContent = function () {
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
  var btnOk = document.createElement('div')
  btnOk.appendChild(document.createTextNode(this.okTitle))
  btnOk.classList.add('btn-ok', BUTTON_CLASS)
  var btnCancel = document.createElement('div')
  btnCancel.appendChild(document.createTextNode(this.cancelTitle))
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS)
  buttonGroup.appendChild(btnOk)
  buttonGroup.appendChild(btnCancel)
  this.node.appendChild(buttonGroup)
}

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this)
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS + '.btn-ok')
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS + '.btn-cancel')
  btnOk.addEventListener('click', function () {
    this.destroy()
    this.callback && this.callback(this.okTitle)
  }.bind(this))
  btnCancel.addEventListener('click', function () {
    this.destroy()
    this.callback && this.callback(this.cancelTitle)
  }.bind(this))
}

module.exports = Confirm
