# alexa-awtrix-sleep
Put your [AWTRIX](https://awtrixdocs.blueforcer.de) into standby with a voice command from Alexa.

## Installation
Clone this repository and install node dependencies
```sh
$ git clone https://github.com:ivanmarban/alexa-awtrix-sleep.git
$ cd alexa-awtrix-sleep
$ npm install
```

## Configuration
Create a .env file in the root directory of the project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

```
AWTRIX_HOST=192.168.1.100
AWTRIX_PORT=7000
DEVICE_NAME=AWTRIX
DEVICE_UUID=fb091602-1112-42d6-9ba7-06b0852fa329
DEVICE_PORT=54454
```
Required variables:

```
AWTRIX_HOST : AWTRIX server hostname or ip address
AWTRIX_PORT : AWTRIX server port
DEVICE_NAME : The human-readable name for the device. You will speak this name when using the Echo
DEVICE_UUID : A unique string identifying the device (UUID v4)
DEVICE_PORT : Port usded by emulated device
```
