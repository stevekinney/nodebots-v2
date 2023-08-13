import createWebSerial from './lib/serial';

const connectButton = document.getElementById('connect') as HTMLButtonElement;
const onButton = document.getElementById('on') as HTMLButtonElement;
const offButton = document.getElementById('off') as HTMLButtonElement;

connectButton.addEventListener('click', async () => {
  const serial = await createWebSerial();

  onButton.disabled = false;
  offButton.disabled = false;
  connectButton.disabled = true;

  onButton.addEventListener('click', async () => {
    if (!serial) return console.error('No serial connection.');
    await serial.write('1');
    await serial.read();
  });

  offButton.addEventListener('click', async () => {
    if (!serial) return console.error('No serial connection.');
    await serial.write('0');
    await serial.read();
  });
});
