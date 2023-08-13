import five from 'johnny-five';

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);

  led.blink(500); // Replace this with a button.
});
