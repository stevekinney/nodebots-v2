import five from 'johnny-five';
import express from 'express';

const app = express();
const { PORT = 3000 } = process.env;
const board = new five.Board({
  repl: false,
});

board.on('ready', () => {
  let isPressed = false;

  const button = new five.Button({
    pin: 2,
  });

  button.on('down', () => {
    isPressed = true;
  });

  button.on('up', () => {
    isPressed = false;
  });

  app.get('/', (req, res) => {
    res.send(`The button is ${isPressed ? 'pressed' : 'not pressed'}.`);
  });

  app.listen(PORT, () => {
    console.log(
      '👻 Your server is up and running on Port ' + PORT + '. Right on!',
    );
  });
});
