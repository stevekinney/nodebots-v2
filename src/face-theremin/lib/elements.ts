export const video = document.getElementById('video') as HTMLVideoElement;

export const canvas = document.getElementById('canvas') as HTMLCanvasElement;

export const playPause = document.getElementById(
  'play-pause',
) as HTMLButtonElement;

export const x = document.getElementById('x') as HTMLDivElement;

export const y = document.getElementById('y') as HTMLDivElement;

export const expression = document.getElementById(
  'expression',
) as HTMLDivElement;

playPause.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
