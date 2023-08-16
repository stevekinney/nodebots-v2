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

const rgb = new five.Led.RGB([10, 8, 9]);

rgb.on();
rgb.color('#FF0000');

io.on('connection', (socket) => {
  socket.on('face', (data, expression) => {
    console.log('👩‍💻 Face data received.', expression);

    if (expression === 'happy') {
      rgb.color('#00FF00');
    }

    if (expression === 'angry') {
      rgb.color('#FF0000');
    }

    if (expression === 'sad') {
      rgb.color('#0000FF');
    }
  });
});

server.listen(PORT, () => {
  console.log('🤖 Express and Johnny-Five are up and running.');
  startClientServer();
});
