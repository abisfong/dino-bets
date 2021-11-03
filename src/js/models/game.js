import Timer from './js/models/timer';
import Canvas from './js/models/canvas';
import addGameEventListeners from '../listeners/game_listeners';
import * as TimerEvents from '../events/timer_events';

export default class Game {
  constructor() {
    this.timer = new Timer(document.querySelector('#timer'));
    this.canvas = new Canvas();
    addGameEventListeners(this);
  }

  start() {
  }

  pause() {
  }

  reset() {
  }
}