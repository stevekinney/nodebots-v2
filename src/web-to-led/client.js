import post from '../utilities/post';

const lightSwitch = document.querySelector('#lightswitch');

lightSwitch.addEventListener('click', async () => {
  await post('/api/light');
});
