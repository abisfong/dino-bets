import Timer from './timer';
import * as listeners from '../listeners';
import Animator from './animator';

export default class Game {
  constructor({ dinoColors }) {
    this.animator = new Animator({ dinoColors });
    this.timer = new Timer(document.querySelector('#timer'));
    this.state = { running: false };

    listeners.init({ game: this, timer: this.timer });
  }

  start() {
    this.timer.start();
    this.animator.start();
    this.state.running = true;
  }
  
  pause() {
    this.timer.pause();
    this.animator.pause();
    this.state.running = false;
  }

  reset() {
    this.timer.reset();
    this.pause();
  }

  time() {
    return this.timer.time;
  }
}