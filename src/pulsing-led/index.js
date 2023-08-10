import five from 'johnny-five';

const board = new five.Board();

/**
 * The Led.pulse() method will pulse the LED on and off at the given interval (in milliseconds).
 *
 * The pulse method accepts an optional callback function that will be executed each time the
 * pulse cycle completes.
 *
 * @see http://johnny-five.io/api/led/#pulse
 */
board.on('ready', () => {
  const led = new five.Led(13);
  led.pulse(500);
});
