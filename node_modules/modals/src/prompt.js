'use strict'

var Modal = require('./modal')
require('../styles/prompt.css')

var CONTENT_CLASS = 'content'
var MSG_CLASS = 'content-msg'
var BUTTON_GROUP_CLASS = 'btn-group'
var BUTTON_CLASS = 'btn'
var INPUT_WRAP_CLASS = 'input-wrap'
var INPUT_CLASS = 'input'

function Prompt(config) {
  this.msg = config.message || ''
  this.defaultMsg = config.default || ''
  this.callback = config.callback
  this.okTitle = config.okTitle || 'OK'
  this.cancelTitle = config.cancelTitle || 'Cancel'
  Modal.call(this)
  this.node.classList.add('amfe-prompt')
}

Prompt.prototype = Object.create(Modal.prototype)

Prompt.prototype.createNodeContent = function () {

  var content = document.createElement('div')
  content.classList.add(CONTENT_CLASS)
  this.node.appendChild(content)

  var msg = document.createElement('div')
  msg.classList.add(MSG_CLASS)
  msg.appendChild(document.createTextNode(this.msg))
  content.appendChild(msg)

  var inputWrap = document.createElement('div')
  inputWrap.classList.add(INPUT_WRAP_CLASS)
  content.appendChild(inputWrap)
  var input = document.createElement('input')
  input.classList.add(INPUT_CLASS)
  input.type = 'text'
  input.autofocus = true
  input.placeholder = this.defaultMsg
  inputWrap.appendChild(input)

  var buttonGroup = document.createElement('div')
  buttonGroup.classList.add(BUTTON_GROUP_CLASS)
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

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this)
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS + '.btn-ok')
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS + '.btn-cancel')
  var that = this
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value
    this.destroy()
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    })
  }.bind(this))
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value
    this.destroy()
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    })
  }.bind(this))
}

module.exports = Prompt
