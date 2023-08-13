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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

await createBoard({ repl: false });

const lose = new five.Led({
  pin: 13,
});

const win = new five.Led({
  pin: 12,
});

const rock = new five.Button({
  pin: 2,
});

const scissors = new five.Button({
  pin: 3,
});

const paper = new five.Button({
  pin: 4,
});

io.on('connection', (socket) => {
  console.log('🔌 Websocket connection established.');

  rock.on('down', () => socket.send('rock'));
  scissors.on('down', () => socket.send('scissors'));
  paper.on('down', () => socket.send('paper'));

  [rock, scissors, paper].forEach((button) => {
    button.on('down', () => socket.send('down'));
    button.on('up', () => socket.send('up'));
  });
});

app.post('/api/light', (req, res) => {
  const { body } = req;
  res.sendStatus(200);
});

server.listen(PORT, () => {
  console.log('🤖 Express and Johnny-Five are up and running.');
  startClientServer();
});
