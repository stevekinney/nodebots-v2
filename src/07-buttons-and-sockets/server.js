import http from 'http';
import five from 'johnny-five';
import express from 'express';
import { Server } from 'socket.io';
import createBoard from '../utilities/create-board.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const { PORT = 3000 } = process.env;

await createBoard({ repl: false });

const button = new five.Button({
  pin: 2,
});

io.on('connection', (socket) => {
  console.log('🔌 Websocket connection established.');
  button.on('down', () => socket.send('down'));
  button.on('up', () => socket.send('up'));
});

app.post('/api/light', (req, res) => {
  led.toggle();
  res.sendStatus(200);
});

server.listen(PORT, () => {
  console.log(
    '👻 Your server is up and running on Port ' + PORT + '. Right on!',
  );
});
