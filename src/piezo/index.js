import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';
import song from './song.js';

const board = await createBoard();

const piezo = new five.Piezo(6);

board.repl.inject({
  piezo,
  song,
});
