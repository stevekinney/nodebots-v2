import post from '../utilities/post';

const lightSwitch = document.querySelector('#lightswitch');

lightSwitch.addEventListener('click', async () => {
  const response = await post('/api/light');
  console.log(response);
});
