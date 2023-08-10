import http from 'http';
import bodyParser from 'body-parser';
import five from 'johnny-five';
import express from 'express';
import { Server } from 'socket.io';
import createBoard from '../utilities/create-board.js';
import { startClientServer } from '../utilities/client-server.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const { PORT = 3000 } = process.env;

const board = await createBoard({ repl: false });

const piezo = new five.Piezo(6);

io.on('connection', (socket) => {
  socket.on('movement', (data) => {
    const { x } = data;
    if (x > 0) {
      piezo.frequency(x, 100);
    }
  });
});

server.listen(PORT, () => {
  console.log('🤖 Express and Johnny-Five are up and running.');
  startClientServer();
});
