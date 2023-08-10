import five from 'johnny-five';

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  led.pulse(500);
});
