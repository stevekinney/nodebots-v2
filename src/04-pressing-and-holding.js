import five from 'johnny-five';

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  const button = new five.Button({
    pin: 2,
  });

  button.on('press', () => {
    led.brightness(20);
  });

  button.on('release', () => {
    led.fadeOut(500);
  });

  button.on('hold', () => {
    led.brightness(led.value + 10);
  });
});
