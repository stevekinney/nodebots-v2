import five from 'johnny-five';
import express from 'express';
import createBoard from '../utilities/create-board.js';
import { startClientServer } from '../utilities/client-server.js';

const app = express();
const { PORT = 3000 } = process.env;

// Your code here!

app.listen(PORT, () => {
  console.log('🤖 Express and Johnny-Five are up and running.');
  startClientServer();
});
