export default function addGameEventListeners(game) {
  addStartPauseEventListeners(game);
  addStartRaceEventListener(game);
  addPauseRaceEventListener(game);
}

function addStartPauseEventListeners(game) {
  const startPauseEl = game.timer.startPauseEl;
  startPauseEl.addEventListener(
    'click',
    createStartPauseCallback(game)
  );
}

function createStartPauseCallback(game) {
  let gameIsRunning = false;
  return function toggleStartPause() {
    gameIsRunning ? game.pause() : game.start();
    gameIsRunning = !gameIsRunning;
  }
}

function addStartRaceEventListener(game) {
  const startPauseEl = game.timer.startPauseEl;
  startPauseEl.addEventListener(
    'startRace',
    createStartRaceCallback(game)
  );
}

function createStartRaceCallback(game) {
  return function() {
    startBackgroundScroll(game);
    startRace(game);
  }
}

function startBackgroundScroll(game) {
  let backgrounds = game.backgrounds;
  backgrounds.forEach((background) => {
    background.scroll('left');
  });
}

// function startRace(game) {

// }

function addPauseRaceEventListener(game) {
  const startPauseEl = game.timer.startPauseEl;
  startPauseEl.addEventListener(
    'pauseRace', 
    createPauseRaceCallback(game)
  );
}

function createPauseRaceCallback(game) {
  return function () {
    stopBackgroundScroll(game);
  }
}

function stopBackgroundScroll(game) {
  let backgrounds = game.backgrounds;
  backgrounds.forEach((background) => {
    background.stopScroll();
  });
}