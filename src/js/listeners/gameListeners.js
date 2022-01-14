export default function addGameEventListeners(game) {
  addStartPauseButtonEventListener(game);
  addResetButtonEventListener(game);
}

function addStartPauseButtonEventListener(game) {
  const startPauseEl = game.timer.startPauseEl;
  startPauseEl.addEventListener(
    'click',
    createStartPauseButtonCallback(game)
  );
}

function createStartPauseButtonCallback(game) {
  return function toggleStartPause() {
    if (game.timer.time <= 0) return;
      game.state.running ? game.pause() : game.start();
  }
}

function addResetButtonEventListener(game) {
  const resetEl = game.timer.resetEl;
  resetEl.addEventListener('click', game.reset.bind(game));
}