import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';

const board = await createBoard();

const potentiometer = new five.Sensor({
  pin: 'A0',
  freq: 250,
  threshold: 5,
});

potentiometer.scale([0, 255]);

potentiometer.on('change', () => {
  const { value, raw } = potentiometer;
  console.log({ value, raw });
});
