import five from 'johnny-five';

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  const button = new five.Button({
    pin: 2,
  });

  board.repl.inject({
    button,
    led,
  });
});
