import Dino from './drawables/dino';
import Timer from './timer';
import Canvas from './canvas';
import { startRaceEvent, pauseRaceEvent } from '../events/gameEvents';
import Background from './drawables/background';
import addGameEventListeners from '../listeners/gameListeners';

export default class Game {
  constructor(options) {
    this.dinos = [];
    this.canvas = new Canvas();
    this.canvasEl = this.canvas.canvasEl;
    this.timer = new Timer(document.querySelector('#timer'));
    this.init(options);
  }

  start() {
    const startPauseEl = this.timer.startPauseEl;
    startPauseEl.dispatchEvent(startRaceEvent);
  }
  
  pause() {
    const startPauseEl = this.timer.startPauseEl;
    startPauseEl.dispatchEvent(pauseRaceEvent);
  }

  reset() {
  }

  init(data) {
    const { dinoColors } = data;
    addAllEventListeners.call(this);
    createDinos.call(this, dinoColors);
    this.backgrounds = createBackgrounds();
    this.canvas.addDrawables([...this.backgrounds, ...this.dinos]);
    this.canvas.animate(20);
  }
}

function createBackgrounds() {
  return [
    new Background({
      canvas: this.canvas, 
      speed: 10,
      src: `${Dino.BASE_URL}/pixel-desert.jpeg`
    }),
    new Background({
      canvas: this.canvas, 
      pos: [this.canvas.width, 0],
      speed: 10,
      src: `${Dino.BASE_URL}/pixel-desert.jpeg`
    })
  ];
}

function createDinos(dinoColors) {
  for (let i = 0; i < dinoColors.length; i++) {
    this.dinos.push(new Dino({
      color: dinoColors[i], 
      canvas: this.canvas, 
      width: 100,
      height: 100,
      scaleFactor: 3,
      speed: (i + 1) * 2,
      pos: [(50 * (i + 1)), 460]
    }));
  }
}

function addAllEventListeners() {
  addGameEventListeners(this);
}