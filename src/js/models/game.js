import Timer from './js/models/timer';
import Canvas from './js/models/canvas';
import addGameEventListeners from '../listeners/game_listeners';
import * as TimerEvents from '../events/timer_events';
import { startRace } from '../events/gameEvents';
import Background from './drawables/background';

export default class Game {
  constructor(dinos) {
    this.timer = new Timer(document.querySelector('#timer'));
    this.canvas = new Canvas();
    this.canvasEl = canvas.canvasEl;
    this.backgrounds = [
      new Background({canvas: this.canvas}),
      new Background({canvas: this.canvas, pos: [canvas.width, 0]})
    ];
    addGameEventListeners(this);
  }

  start() {
    this.canvasEl.dispatchEvent(startRace);
  }

  pause() {
  }

  reset() {
  }
}