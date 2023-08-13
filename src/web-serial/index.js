import express from 'express';
import { startClientServer } from '../utilities/client-server.js';

const app = express();
const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log('🤖 Express and Johnny-Five are up and running.');
  startClientServer();
});
