const dotenv = require('dotenv').config()

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  AWTRIX_HOST: process.env.AWTRIX_HOST || 'awtrix.lan',
  AWTRIX_PORT: process.env.AWTRIX_PORT || 7000,
  DEVICE_NAME: process.env.DEVICE_NAME || 'AWTRIX',
  DEVICE_UUID: process.env.DEVICE_UUID || 'e1983f0a-51ed-4ca4-b077-ddf4afb96f06',
  DEVICE_PORT: process.env.DEVICE_PORT || 54453,
}
