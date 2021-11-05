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
    if (game.timer.time <= 0) return;
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

function startRace(game) {
  startDinoRunAnimations(game);
  startDinoRunMovement(game);
}

function startDinoRunAnimations(game) {
  let dinos = game.dinos;
  dinos.forEach(dino => {
    dino.startRunAnimation();
  });
}

function startDinoRunMovement(game) {
  let dinos = game.dinos;
  dinos.forEach(dino => {
    dino.startRunMovement();
  })
}

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
    stopRace(game);
  }
}

function stopBackgroundScroll(game) {
  let backgrounds = game.backgrounds;
  backgrounds.forEach((background) => {
    background.stopScroll();
  });
}

function stopRace(game) {
  stopDinoRunAnimations(game);
  stopDinoRunMovement(game);
}

function stopDinoRunAnimations(game) {
  let dinos = game.dinos;
  dinos.forEach(dino => {
    dino.stopRunAnimation();
  });
}

function stopDinoRunMovement(game) {
  let dinos = game.dinos;
  dinos.forEach(dino => {
    dino.stopRunMovement();
  });
}