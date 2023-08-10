import five from 'johnny-five';
import express from 'express';
import createBoard from '../utilities/create-board.js';
import { startClientServer } from '../utilities/client-server.js';

const app = express();
const { PORT = 3000 } = process.env;

await createBoard({ repl: false });

const led = new five.Led({
  pin: 13,
});

app.post('/api/light', (req, res) => {
  led.toggle();
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log('🤖 Express and Johnny-Five are up and running.');
  startClientServer();
});
