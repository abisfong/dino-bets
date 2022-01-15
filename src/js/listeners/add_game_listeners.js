export default function addGameListeners(game) {
  addStartPauseButtonListener(game);
  addResetButtonListener(game);
}

function addStartPauseButtonListener(game) {
  const startPauseEl = game.timer.startPauseEl;
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
  const resetEl = game.timer.resetEl;
  resetEl.addEventListener('click', game.reset.bind(game));
}