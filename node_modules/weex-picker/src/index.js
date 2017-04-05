
import Picker from './Picker'
import moment from 'moment'
import TimePicker from './TimePicker'
import Pikaday from 'pikaday'

const pickerModule = {
  pick: function (options, confirmCallback, cancelCallback) {
    const items = options.items
    const index = options.index
    new Picker({
      data: items,
      defaultIndexs: [index],
      confirmCallback: confirmCallback,
      cancelCallback: cancelCallback,
      sender: this.sender
    })
  },

  pickDate: function (options, confirmCallback) {
    const mask = document.createElement('div')
    mask.className = 'weex-picker-mask'
    const self = this
    const picker = new Pikaday({
      defaultDate: moment(options.value, 'YYYY-MM-DD').toDate(),
      setDefaultDate: moment(options.value, 'YYYY-MM-DD').toDate(),
      format: 'YYYY-MM-DD',
      minDate: moment(options.min, 'YYYY-MM-DD').toDate(),
      maxDate: moment(options.max, 'YYYY-MM-DD').toDate(),
      onSelect: function (date) {
        confirmCallback && self.sender.performCallback(confirmCallback, { result: 'success', data: moment(date).format('YYYY-MM-DD') })
        picker.destroy()
        mask.parentNode.removeChild(mask)
      }
    })
    mask.appendChild(picker.el)
    document.body.append(mask)
  },

  pickTime: function (options, confirmCallback) {
    new TimePicker({
      value: options.value,
      confirmCallback: confirmCallback,
      sender: this.sender
    })
  }
}

const meta = {
  picker: [{
    name: 'pick',
    args: ['object', 'function']
  }, {
    name: 'pickDate',
    args: ['object', 'function']
  }, {
    name: 'pickTime',
    args: ['object', 'function']
  }]
}

export default {
  init: function (Weex) {
    Weex.registerApiModule('picker', pickerModule, meta)
  }
}
