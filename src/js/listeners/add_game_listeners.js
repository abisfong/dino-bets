export default function addGameListeners(game) {
  addStartPauseButtonListener(game);
  addResetButtonListener(game);
}

function addStartPauseButtonListener(game) {
  const startPauseEl = document.querySelector('#start-pause-btn');
  startPauseEl.addEventListener(
    'click',
    createStartPauseButtonCallback(game)
  );
}

function createStartPauseButtonCallback(game) {
  return function toggleStartPause() {
    if (game.time() <= 0) return;
      game.state.running ? game.pause() : game.start();
  }
}

function addResetButtonListener(game) {
  const resetEl = document.querySelector('#reset-btn');
  resetEl.addEventListener('click', game.reset.bind(game));
}