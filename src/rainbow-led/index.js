import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';

const board = await createBoard();

const led = new five.Led.RGB([11, 9, 10]);

board.repl.inject({ led });

led.on();
led.color('#FF0000');
