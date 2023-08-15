import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/webhook', (req, res) => {
  const { body } = req;
  console.log(body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(
    '👻 Your server is up and running on Port ' + PORT + '. Right on!',
  );
});
