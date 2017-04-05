
import './picker.css'
import IScroll from 'iscroll'

let modal, pickerContainer, pickerHeader, pickerBody, pickerConfirm, pickerCancel, pickerBar, pickerScroller

export default function Picker (configs) {
  this.confirmCallback = configs.confirmCallback
  this.cancelCallback = configs.cancelCallback
  this.data = configs.data
  this.column = this._getColumnLength(this.data)
  this.sender = configs.sender
  this.pickerScrollers = []
  this.itemScrolls = []
  this.formateResult = configs.formateResult
  this.resultIndexs = configs.defaultIndexs || this._getDefaultIndex()
  this._init()
}

Picker.prototype = {

  _init: function () {
    this._create()
    this._addEvent()
    this._createColumn()
    this.show()
    this._createScroll()
    this._initIndex()
  },

  _create: function () {
    if (!modal) {
      modal = document.createElement('div')
      modal.className = 'weex-picker weex-picker-fixed'
      pickerContainer = document.createElement('div')
      pickerHeader = document.createElement('div')
      pickerBody = document.createElement('div')

      pickerBar = document.createElement('div')
      pickerBar.className = 'weex-picker-bar'

      pickerContainer.className = 'weex-picker-content'
      pickerHeader.className = 'weex-picker-header'
      pickerBody.className = 'weex-picker-body'
      pickerContainer.appendChild(pickerHeader)
      pickerContainer.appendChild(pickerBody)
      pickerContainer.appendChild(pickerBar)
      modal.appendChild(pickerContainer)
      document.body.appendChild(modal)
    }

    pickerHeader.innerHTML = ''
    pickerConfirm = document.createElement('a')
    pickerCancel = document.createElement('a')
    pickerConfirm.className = 'weex-picker-confirm'
    pickerCancel.className = 'weex-picker-cancel'
    pickerConfirm.innerText = '确定'
    pickerCancel.innerText = '取消'
    pickerHeader.appendChild(pickerCancel)
    pickerHeader.appendChild(pickerConfirm)
  },

  _getColumnLength: function (data) {
    if (typeof (data[0]) === 'object') {
      return data.length
    }
    else {
      return 1
    }
  },

  _getDefaultIndex: function () {
    const result = []
    for (let i = 0; i < this.column; i++) {
      result[0] = 0
    }
    return result
  },

  _getCurrentIndex: function () {
    if (this.resultIndexs.length === 1) {
      return this.resultIndexs[0]
    }
    else {
      return this.resultIndexs
    }
  },

  _addEvent: function () {
    const confirmCallback = () => {
      const indexs = this._getCurrentIndex()
      const resultData = this.formateResult ? this.formateResult(this.data, indexs) : indexs
      const result = {
        result: 'success',
        data: resultData
      }

      this.confirmCallback && this.sender.performCallback(this.confirmCallback, result)
      this.hide()
    }

    const cancelCallback = () => {
      this.cancelCallback && this.sender.performCallback(this.cancelCallback)
      const indexs = this._getCurrentIndex()
      const resultData = this.formateResult ? this.formateResult(this.data, indexs) : indexs
      const result = {
        result: 'cancel',
        data: resultData
      }
      this.confirmCallback && this.sender.performCallback(this.confirmCallback, result)
      this.hide()
    }

    pickerConfirm.addEventListener('click', confirmCallback)
    pickerCancel.addEventListener('click', cancelCallback)
  },

  _createColumn: function () {
    const items = this.data
    pickerBody.innerHTML = ''
    if (this.column > 1) {
      for (let i = 0; i < items.length; i++) {
        this._createItem(items[i])
      }
    }
    else {
      this._createItem(items)
    }
  },

  _createItem: function (items) {
    pickerScroller = document.createElement('div')
    const ui = document.createElement('ul')
    for (let i = -2; i < items.length + 2; i++) {
      const cell = document.createElement('li')
      if (i < 0 || i >= items.length) {
        cell.innerText = ''
      }
      else {
        cell.innerText = items[i]
      }
      ui.appendChild(cell)
    }
    pickerScroller.className = 'weex-picker-scroller'
    pickerScroller.appendChild(ui)
    pickerBody.appendChild(pickerScroller)
    this.pickerScrollers.push(pickerScroller)
  },

  _createScroll: function () {
    const self = this
    for (let i = 0; i < this.pickerScrollers.length; i++) {
      (function (index) {
        const itemScroll = new IScroll(self.pickerScrollers[i], {
          snap: 'li',
          mouseWheel: true,
          vScrollbar: false,
          hScrollbar: false,
          hScroll: false
        })

        self.itemScrolls.push(itemScroll)

        itemScroll.on('scrollEnd', function () {
          self._nohightLight(self.pickerScrollers[i])
          const yIndex = Math.abs(Math.round(-1 * this.y / self.itemHeight))
          self.resultIndexs[index] = yIndex
          self._hightLight(self.pickerScrollers[i], yIndex)
        })

        itemScroll.on('scroll', function () {
        })

        itemScroll.on('scrollStart', function () {
          self._nohightLight(self.pickerScrollers[i])
        })

        self.pickerScrollers[i].addEventListener('click', function (ev) {
          const target = ev.target
          if (target.tagName.toLowerCase() === 'li') {
            self._goToPage(i, target)
          }
        })

        // self.pickerScrollers[i].addEventListener('touchend', function (ev) {
        //   const target = ev.target
        //   if (target.tagName.toLowerCase() === 'li') {
        //     self._goToPage(i, target)
        //   }
        // })
      })(i)
    }
  },

  _goToPage: function (scrollIndex, li) {
    const alllist = this.pickerScrollers[scrollIndex].getElementsByTagName('li')
    for (let i = 2; i < alllist.length - 2; i++) {
      if (alllist[i] === li) {
        this.itemScrolls[scrollIndex].goToPage(0, i - 2, 500)
      }
    }
  },

  _hightLight: function (el, index) {
    const alllist = el.getElementsByTagName('li')
    for (let i = 2; i < alllist.length - 2; i++) {
      if (i === index + 2) {
        alllist[i].className = 'active'
      }
    }
  },
  _nohightLight: function (el) {
    const alllist = el.getElementsByTagName('li')
    for (let i = 0; i < alllist.length; i++) {
      if (alllist[i].className === 'active') {
        alllist[i].className = ''
      }
    }
  },

  _initIndex: function () {
    const self = this
    self.itemHeight = pickerBody.offsetHeight / 5
    for (let i = 0; i < this.pickerScrollers.length; i++) {
      (function (index) {
        self.itemScrolls[index].goToPage(0, self.resultIndexs[index], 0)
        self._hightLight(self.pickerScrollers[index], self.resultIndexs[index])
      })(i)
    }
  },

  show: function () {
    modal.className = 'weex-picker weex-picker-fixed weex-picker-open'
  },

  hide: function () {
    modal.className = 'weex-picker weex-picker-fixed weex-picker-close'
  }
}

