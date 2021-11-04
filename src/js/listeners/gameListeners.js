export default function addGameEventListeners(game) {
  addStartPauseEventListeners(game);
  addStartRaceEventListener(game);
  addPauseRaceEventListener(game);
}

function addStartPauseEventListeners(game) {
  const startPauseEl = game.timer.startPauseEl;
  startPauseEl.attachEventListener(
    'startPauseTimer', 
    createStartPauseCallback(game)
  );
}

function createStartPauseCallback(game) {
  let gameIsRunning = false;
  return function toggleStartPause() {
    gameIsRunning ? game.pause() : game.pause();
    gameIsRunning = !gameIsRunning;
  }
}

function addStartRaceEventListener(game) {
  const startPauseEl = game.timer.startPauseEl;
  startPauseEl.attachEventListener(
    'startRace', 
    createStartRaceCallback(game)
  );
}

function createResetCallback(game) {
  
}