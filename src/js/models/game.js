import DinoSprite from './drawables/dinoSprite';
import Timer from './timer';
import Canvas from './canvas';
import Background from './drawables/background';
import addGameEventListeners from '../listeners/gameListeners';
import addTimerEventListeners from '../listeners/timerListeners';
import DinoMovable from './movables/dinoMovable';

export default class Game {
  constructor(options) {
    this.canvas = new Canvas();
    this.timer = new Timer(document.querySelector('#timer'));
    this.state = { running: false };
    this.init(options);
  }

  start() {
    this.timer.start();
    startBackgroundScroll(this);
    startDinoRace(this);
    this.state.running = true;
  }
  
  pause() {
    this.timer.pause();
    stopBackgroundScroll(this);
    stopDinoRace(this);
    this.state.running = false;
  }

  reset() {
    this.timer.reset();
    this.pause();
  }

  init(data) {
    addAllEventListeners(this);
    this.dinoSprites = createDinoSprites(data.dinoColors || DinoSprite.COLORS);
    this.dinoMovables = createDinoMovables(this.dinoSprites);
    this.backgrounds = createBackgrounds(this);
    this.canvas.addDrawables([...this.backgrounds, ...this.dinoSprites]);
    this.canvas.animate(20);
  }
}

function startBackgroundScroll(game) {
  let backgrounds = game.backgrounds;
  backgrounds.forEach((background) => {
    background.scroll('left');
  });
}

function startDinoRace(game) {
  startDinoRunAnimations(game);
  startDinoRunMovements(game);
}

function startDinoRunAnimations(game) {
  let dinoSprites = game.dinoSprites;
  dinoSprites.forEach(dinoSprite => {
    dinoSprite.startRun();
  });
}

function startDinoRunMovements(game) {
  let dinoMovables = game.dinoMovables;
  dinoMovables.forEach(dinoMovable => {
    dinoMovable.startRun();
  })
}

function stopBackgroundScroll(game) {
  let backgrounds = game.backgrounds;
  backgrounds.forEach((background) => {
    background.stopScroll();
  });
}

function stopDinoRace(game) {
  stopDinoRunAnimations(game);
  stopDinoRunMovements(game);
}

function stopDinoRunAnimations(game) {
  let dinoSprites = game.dinoSprites;
  dinoSprites.forEach(dinoSprite => {
    dinoSprite.stopRun();
  });
}

function stopDinoRunMovements(game) {
  const dinoMovables = game.dinoMovables;
  dinoMovables.forEach(dinoMovable => {
    dinoMovable.stopRun();
  });
}

function addAllEventListeners(game) {
  addTimerEventListeners(game.timer);
  addGameEventListeners(game);
}

function createBackgrounds(game) {
  return [
    new Background({
      speed: 10,
      src: `${DinoSprite.BASE_URL}/pixel-desert.jpeg`
    }),
    new Background({
      pos: [game.canvas.width, 0],
      speed: 10,
      src: `${DinoSprite.BASE_URL}/pixel-desert.jpeg`
    })
  ];
}

function createDinoSprites(dinoColors) {
  return dinoColors.map((dinoColor, i) => new DinoSprite({
    color: dinoColor, 
    width: 100,
    height: 100,
    scaleFactor: 3,
    speed: 1,
    pos: [600 - (50 * (i + 1)), 460]
  }));
}

function createDinoMovables(dinoSprites) {
  return dinoSprites.map(dinoSprite => {
    return new DinoMovable({ drawable: dinoSprite });
  });
}