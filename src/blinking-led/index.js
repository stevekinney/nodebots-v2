import five from 'johnny-five';

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(11);
  const button = new five.Button(2);

  button.on('down', () => {
    led.fadeIn(500);
    console.log('down');
  });

  button.on('up', () => {
    led.fadeOut();
    console.log('up');
  });
});
