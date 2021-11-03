import Timer from './js/models/timer';
import Canvas from './js/models/canvas';
import addGameEventListeners from '../listeners/game_listeners';

export default class Game {
  constructor() {
    this.timer = new Timer(document.querySelector('#timer'));
    this.canvas = new Canvas();
    addGameEventListeners(this);
  }
}