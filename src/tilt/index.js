import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';

const board = await createBoard();

const tilt = new five.Button(6); // digital pin 2

board.repl.inject({
  button: tilt,
});

tilt.on('down', () => console.log('down'));
tilt.on('up', () => console.log('up'));
