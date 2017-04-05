import Picker from './Picker'
import moment from 'moment'

const createData = function () {
  const hour = []
  const moment = []
  let i = 0
  for (i = 0; i < 24; i++) {
    if (i < 10) {
      hour.push('0' + i)
    }
    else {
      hour.push(i + '')
    }
  }
  for (i = 0; i < 60; i++) {
    if (i < 10) {
      moment.push('0' + i)
    }
    else {
      moment.push(i + '')
    }
  }

  return [hour, moment]
}

const inputData = createData()

const getDefaultIndexs = function (time) {
  const hour = time.format('HH')
  const moment = time.format('mm')
  const result = [0, 0]
  let i = 0
  for (i = 0; i < inputData[0].length; i++) {
    if (hour === inputData[0][i]) {
      result[0] = i
    }
  }
  for (i = 0; i < inputData[1].length; i++) {
    if (moment === inputData[1][i]) {
      result[1] = i
    }
  }

  return result
}

const formateResult = function (data, indexs) {
  const hour = data[0][indexs[0]]
  const moment = data[1][indexs[1]]
  return hour + ':' + moment
}

export default function (configs) {
  const time = moment(configs.value || new Date(), 'HH:mm')
  const value = getDefaultIndexs(time)
  return new Picker({
    data: inputData,
    formateResult: formateResult,
    defaultIndexs: value,
    confirmCallback: configs.confirmCallback,
    sender: configs.sender
  })
}

