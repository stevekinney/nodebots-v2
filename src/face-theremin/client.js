import * as faceapi from 'face-api.js';
import io from 'socket.io-client';
import { getCenterOfFace, rankExpressions } from './lib/get-measurements';
import { x, y, expression, playPause, video, canvas } from './lib/elements';

const socket = io();

/** @type number */
let interval;

socket.on('connect', () => {
  console.log('🤝 Socket.io is up and running.');
});

const startVideo = () => {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err),
  );
};

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(startVideo);

video.addEventListener('play', () => {
  playPause.innerText = 'Pause';
  const displaySize = { width: video.width, height: video.height };

  faceapi.matchDimensions(canvas, displaySize);

  interval = setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    const [firstFace] = resizedDetections;

    const facePosition = getCenterOfFace(firstFace);

    x.textContent = facePosition.x;
    y.textContent = facePosition.y;
    expression.textContent = rankExpressions(firstFace);

    socket.emit('face', facePosition, rankExpressions(firstFace));

    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100);
});

video.addEventListener('pause', () => {
  playPause.innerText = 'Play';
  clearInterval(interval);
});
