import five from 'johnny-five';
import express from 'express';

const app = express();
const { PORT = 3000 } = process.env;
const board = new five.Board({
  repl: false,
});

board.on('ready', () => {
  const button = new five.Button({
    pin: 2,
  });

  app.listen(PORT, () => {
    console.log(
      '👻 Your server is up and running on Port ' + PORT + '. Right on!',
    );
  });
});
