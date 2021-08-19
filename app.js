const config = require('./config.js')
const wemore = require('wemore')
const axios = require('axios')
const device = wemore.Emulate({
  friendlyName: config.DEVICE_NAME,
  port: config.DEVICE_PORT,
  uuid: config.DEVICE_UUID,
})
const apiUrl = `http://${config.AWTRIX_HOST}:${config.AWTRIX_PORT}/api/v3/basics`

device.on('listening', function () {
  console.info(
    `Device name: '${config.DEVICE_NAME}'. Listening port '${config.DEVICE_PORT}'. Device uuid: '${config.DEVICE_UUID}'`
  )
})

device.on('on', function (self, sender) {
  axios
    .post(apiUrl, {
      power: true,
    })
    .then((res) => {
      console.info(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
})

device.on('off', function (self, sender) {
  axios
    .post(apiUrl, {
      power: false,
    })
    .then((res) => {
      console.info(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
})
