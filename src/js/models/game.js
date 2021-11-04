import Timer from './timer';
import Canvas from './canvas';
import addGameEventListeners from '../listeners/gameListeners';
// import * as TimerEvents from '../events/timer_events';
import { startRace, pauseRace } from '../events/gameEvents';
import Background from './drawables/background';

export default class Game {
  constructor(dinos) {
    this.dinos = dinos;
    this.canvas = new Canvas();
    this.canvasEl = canvas.canvasEl;
    this.timer = new Timer(document.querySelector('#timer'));
    this.backgrounds = [
      new Background({canvas: this.canvas}),
      new Background({canvas: this.canvas, pos: [this.canvas.width, 0]})
    ];
    this.canvas.addDrawables([...this.backgrounds, ...dinos]);
    this.canvas.animate();
    addGameEventListeners(this);
  }

  start() {
    console.log("game started");
    const startPauseEl = this.timer.startPauseEl;
    startPauseEl.dispatchEvent(startRace);
  }
  
  pause() {
    console.log("game paused");
    const startPauseEl = this.timer.startPauseEl;
    startPauseEl.dispatchEvent(pauseRace);
  }

  reset() {
  }
}