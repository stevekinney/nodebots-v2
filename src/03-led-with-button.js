import five from 'johnny-five';

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  const button = new five.Button({
    pin: 2,
  });

  button.on('down', () => {
    led.on();
  });

  button.on('up', () => {
    led.off();
  });

  button.on('press', () => console.log('Pressed!'));
  button.on('release', () => console.log('Released!'));
  button.on('hold', () => console.log('Hold!'));
});
