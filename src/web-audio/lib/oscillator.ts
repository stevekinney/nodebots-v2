export default class Oscillator {
  private oscillator: OscillatorNode;
  public volume: AudioParam;

  constructor(frequency: number) {
    const context = new AudioContext();
    const oscillator = (this.oscillator = context.createOscillator());
    const gain = context.createGain();

    this.oscillator = oscillator;
    this.volume = gain.gain;

    oscillator.frequency.value = frequency;
    this.volume.value = 1;

    oscillator.connect(gain);
    gain.connect(context.destination);
  }

  get frequency() {
    return this.oscillator.frequency.value;
  }

  set frequency(value: number) {
    this.oscillator.frequency.value = value;
  }

  start() {
    this.oscillator.start(0);
  }

  mute() {
    this.volume.value = 0;
  }

  unmute() {
    this.volume.value = 1;
  }

  get muted() {
    return this.volume.value === 0;
  }

  toggle() {
    if (this.muted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}
