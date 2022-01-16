import Timer from './timer';
import * as listeners from '../listeners';
import Animator from './animator';
import BetController from './bets/bet_controller';

export default class Game {
  constructor({ dinoColors }) {
    this.animator = new Animator({ dinoColors });
    this.betController = new BetController();
    this.timer = new Timer(document.querySelector('#timer'));
    this.state = { running: false };
    this.amount = 0;

    listeners.init({ 
      betController: this.betController,
      game: this,
      timer: this.timer
    });
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

  winner() {
    const dinoSprites = this.animator.dinoSprites;
    const winner = dinoSprites.reduce((winner, dino) => {
      if (winner.posX > dino.posX)
        return winner;
      return dino;
    })

    return winner.color;
  }

  completeBets() {
    this.betController.completeBets(this.winner());
    this.amount += this.betController.newEarnings();
  }
}