import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';
import system from 'systeminformation';

const board = await createBoard();

const lcd = new five.LCD({
  // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
  pins: [12, 11, 5, 4, 3, 2],
  rows: 2,
  cols: 20,
});

board.repl.inject({ lcd });

const toMegabytes = (bytes) => Math.round(bytes / 1024 / 1024);

setInterval(async () => {
  const { available } = await system.mem();
  const { percent } = await system.battery();

  const megabytes = toMegabytes(available);

  lcd.cursor(0, 0).print(`Battery: ${percent}%`);
  lcd.cursor(1, 0).print(`Memory: ${megabytes}MB`);
}, 1000);
