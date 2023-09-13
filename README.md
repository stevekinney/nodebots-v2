[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)][fem]

This repo is the code, examples, and diagrams for the [Hardware with Arduino & JavaScript][fem] on Frontend Masters.

[fem]: https://frontendmasters.com/courses/arduino-javascript/

# Hardware with Arduino & JavaScript — Frontend Masters

This courses uses parts from the [Arduino Starter Kit](https://amzn.to/3OA3Td9).

## Prerequisites

- Clone this repository.
- Download and install the [Arduino IDE](https://www.arduino.cc/en/software).
- Download and install [ngrok](https://ngrok.com/download).

## Resources

You can find the [wiring diagrams](./public/diagrams/) from this workshop [here](./public/diagrams/).

## Table of Contents

- [Enough Electronics to Be Dangerous](./content/)
- Blinking LEDs with Arduino
- Installing Standard Firmata
- [Blinking LEDs with Johnny Five](./src/blinking-led/)
  - Side quest: [Pulsing LEDs](./src/pulsing-led/)
- [Pushing Buttons](./src/button/)
- [Arduinos Meet the Browser](./src/button-with-webserver/)
- [Control Arduino from the Browser](./src/web-to-led/)
- [Using Websockets](./src/button-and-sockets/)
- [Rock, Paper, Scissors](./src/rock-paper-scissors/)
- [Piezo](./src/piezo/) and [Face Theremin](./src/face-theremin/)
- [Potentiometers](./src/potentiometer/) and [Kaleidoscope](./src/kaleidoscope/)
- [Rainbow LEDs](./src/rainbow-led/)
- Sensors: [Light](./src/light-sensor/), [Tilt](./src/tilt/), and [Temperature](./src/temperature/)
- [LCD Screens](./src/lcd/)
- [Web Serial API](./src/web-serial/)

## Further Exploration

Because the Johnny-Five starter kit—which is what we used in the last iteration of this course—is now out of production. We're doing some slightly different projects than last time. That said, once you get your sea legs, you could also easily adapt some of those projects for use with your Arduino as well. You can see the projects and code from last time [here](https://github.com/stevekinney/nodebots-workshop).

### Sensors

Playing with sensors is the best. Here are some cool—an inexpensive sensors that you can use with your Arduino—or, any other board for that matter.

- [Soil Moisture Sensor](https://www.sparkfun.com/products/13322)
- [Magnetic Door Sensor](https://www.sparkfun.com/products/13247)
- [Proximity Sensor](https://www.sparkfun.com/products/15177)
- [Sensors on SparkFun](https://www.sparkfun.com/categories/23)

### Boards that Run Node.js

An Arduino cannot run Node.js without a host computer, but there are boards that can!

- [Beagle Board](https://www.beagleboard.org)
- [Raspberry Pi](https://www.raspberrypi.com)

### Jonny-Five Troubleshooting

If you receive a `Device or Firmware Error` when you are attempting to run JavaScript code on your board with `node src/blinking-led/index.js`, Jonny-Five might be connecting to the wrong USB device.

1. Use the ArduinoIDE to find the device port in the device dropdown
2. Pass the port to the Board constructor. For example:

```javascript
const board = new five.Board({ port: '/dev/tty.usbmodem3101' });
```

### Displaying Messages from GitHub

This lesson uses ngrok to expose a port on your local computer. The URL is added to a GitHub webhook so the Arduino LCD can display information when actions happen in a respository (like starring the repo). In order to complete this lesson:

1. Install ngrok in your project: `npm i ngrok`
2. Create a GitHub repository (or use an existing repository)
3. After starting the express server in the lesson, use `npx ngrok http 3000` to start ngrok
4. Follow the instructions in the lesson to copy and paste the forwarding URL from ngrock into the GitHub webhook.

