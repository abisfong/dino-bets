export default function addGameListeners(game) {
  addStartPauseButtonListener(game);
  addResetButtonListener(game);
  addRaceCompleteListener(game);
}

function addStartPauseButtonListener(game) {
  const startPauseEl = document.querySelector('#start-pause-btn');
  startPauseEl.addEventListener(
    'click',
    createStartPauseButtonCallback(game)
  );
}

function createStartPauseButtonCallback(game) {
  const foley = game.foley;

  return function toggleStartPause() {
    foley.playSoundEffectFor('timerBtnClick');
    if (game.time() <= 0) return;
    game.state.running ? game.pause() : game.start();
  }
}

function addResetButtonListener(game) {
  const foley = game.foley;
  const resetEl = document.querySelector('#reset-btn');

  resetEl.addEventListener('click', () => {
    foley.playSoundEffectFor('timerBtnClick');
    game.reset();
  });
}

function addRaceCompleteListener(game) {
  const resetEl = document.querySelector('#reset-btn');

  resetEl.addEventListener('raceComplete', () => { 
    game.completeBets();
  })
}