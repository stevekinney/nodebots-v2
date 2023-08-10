import five from 'johnny-five';
import express from 'express';
import createBoard from '#utilities/create-board.js';

const app = express();
const { PORT = 3000 } = process.env;

await createBoard({ repl: false });

const button = new five.Button({
  pin: 2,
});

let isPressed = false;

button.on('down', () => (isPressed = true));
button.on('up', () => (isPressed = false));

const getMessage = () => {
  if (isPressed) return 'The button is currently being pressed.';
  return 'Nobody is pressing the button.';
};

app.get('/', (req, res) => {
  res.status(200).send(getMessage());
});

app.listen(PORT, () => {
  console.log(
    '👻 Your server is up and running on Port ' + PORT + '. Right on!',
  );
});
