import Oscillator from './lib/oscillator';

const frequency = document.querySelector('#frequency') as HTMLInputElement;
const play = document.querySelector('#play') as HTMLButtonElement;
const mute = document.querySelector('#mute') as HTMLButtonElement;

const osc = new Oscillator(Number(frequency.value));

osc.frequency = Number(frequency.value);

frequency.addEventListener('input', () => {
  osc.frequency = Number(frequency.value);
});

play.addEventListener('click', () => {
  play.disabled = true;
  mute.disabled = false;
  osc.start();
});

mute.addEventListener('click', () => {
  osc.toggle();
  if (osc.muted) {
    mute.textContent = 'Unmute';
  } else {
    mute.textContent = 'Mute';
  }
});
