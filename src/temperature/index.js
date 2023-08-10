import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';

const board = await createBoard();

const thermometer = new five.Thermometer({
  controller: 'TMP36',
  pin: 'A0',
  freq: 250,
});

thermometer.on('change', () => {
  const { celsius, fahrenheit, kelvin } = thermometer;
  console.log({ celsius, fahrenheit, kelvin });
});
