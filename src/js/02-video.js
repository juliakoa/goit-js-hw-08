import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (event) {
    const currentTime = event.seconds;

    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
  }, 1000)
);

function setCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    player.setCurrentTime(JSON.parse(currentTime));
  }
}

window.addEventListener('load', setCurrentTime);
