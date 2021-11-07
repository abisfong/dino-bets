import Dino from './drawables/dino';
import Timer from './timer';
import Canvas from './canvas';
import Background from './drawables/background';
import addGameEventListeners from '../listeners/gameListeners';
import addTimerEventListeners from '../listeners/timerListeners';

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
    this.dinos = createDinos(data.dinoColors || Dino.COLORS);
    this.backgrounds = createBackgrounds(this);
    this.canvas.addDrawables([...this.backgrounds, ...this.dinos]);
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

function stopBackgroundScroll(game) {
  let backgrounds = game.backgrounds;
  backgrounds.forEach((background) => {
    background.stopScroll();
  });
}

function stopDinoRace(game) {
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

function addAllEventListeners(game) {
  addTimerEventListeners(game.timer);
  addGameEventListeners(game);
}

function createBackgrounds(game) {
  return [
    new Background({
      speed: 10,
      src: `${Dino.BASE_URL}/pixel-desert.jpeg`
    }),
    new Background({
      pos: [game.canvas.width, 0],
      speed: 10,
      src: `${Dino.BASE_URL}/pixel-desert.jpeg`
    })
  ];
}

function createDinos(dinoColors) {
  return dinoColors.map((dinoColor, i) => new Dino({
    color: dinoColor, 
    width: 100,
    height: 100,
    scaleFactor: 3,
    speed: 1,
    pos: [(50 * (i + 1)), 460]
  }));
}