import five from 'johnny-five';
import system from 'systeminformation';
import express from 'express';
import bodyParser from 'body-parser';
import createBoard from '../utilities/create-board.js';

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const board = await createBoard();

const lcd = new five.LCD({
  pins: [7, 8, 9, 10, 11, 12],
  rows: 2,
  cols: 16,
});

board.repl.inject({ lcd });

lcd.clear().print('Waiting...');

app.post('/api/update', (req, res) => {
  const { payload } = req.body;

  lcd.cursor(0, 0).print('Your repository was just');
  lcd.cursor(1, 0).print('starred.');

  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log('Web Server is up and running!');
});

// setInterval(async () => {
//   const memory = await system.mem();
//   const battery = await system.battery();

//   lcd.cursor(0, 0).print('Battery: ' + battery.percent + '%');
//   lcd
//     .cursor(1, 0)
//     .print('Memory: ' + Math.round(memory.available / 1024 / 1024) + 'MB');
// }, 5000);
