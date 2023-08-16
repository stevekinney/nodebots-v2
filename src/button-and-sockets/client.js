import post from '../utilities/post';
import io from 'socket.io-client';

const buttonState = document.querySelector('.button-state');

const socket = io();

socket.on('connect', () => {
  console.log('We are set up on the client side');
});

socket.on('button', (message) => {
  buttonState.textContent = message;
});

socket.on('light', (value) => {
  document.body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
});
