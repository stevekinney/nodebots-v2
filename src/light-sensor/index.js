import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';

const board = await createBoard();

const lightSensor = new five.Light({
  pin: 'A1',
  freq: 250,
  threshold: 5,
});

lightSensor.on('change', () => {
  const { value, raw } = lightSensor;
  console.log({ value, raw });
});
