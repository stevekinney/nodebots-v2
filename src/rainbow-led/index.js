import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';

const board = await createBoard();

const led = new five.Led.RGB([10, 8, 9]);

board.repl.inject({
  led,
});
