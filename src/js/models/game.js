import Timer from './timer';
import * as listeners from '../listeners';
import Animator from './animator';
import BetController from './bets/bet_controller';

export default class Game {
  constructor({ dinoColors }) {
    this.animator = new Animator({ dinoColors });
    this.betController = new BetController();
    this.timer = new Timer(document.querySelector('#timer'));
    this.state = { running: false, started: false, raceCompleted: false };
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
    if (!this.state.started) {
      this.lockBets();
      this.state.started = true;
    }
  }
  
  pause() {
    this.timer.pause();
    this.animator.pause();
    this.state.running = false;
  }

  reset() {
    let resetTimeInterval = 0;
    
    this.timer.reset();
    this.pause();
    this.unlockBets();
    this.state.started = false;
    if (this.state.raceCompleted) {
      this.animator.displayDinoPlacements();
      this.state.raceCompleted = false;
      resetTimeInterval = 2500;
    }
    setTimeout(() => this.animator.reset(), resetTimeInterval);
  }

  time() {
    return this.timer.time;
  }

  lockBets() {
    this.betController.lockBets();
  }

  unlockBets() {
    this.betController.unlockBets();
  }

  winner() {
    const dinoSprites = this.animator.dinoSprites;
    const winner = dinoSprites.reduce((winner, dino) => {
      const winnerPosX = winner.posX + winner.posXDelta;
      const dinoPosX = dino.posX + dino.posXDelta;

      if (winnerPosX > dinoPosX)
        return winner;
      return dino;
    })

    return winner.color;
  }

  completeBets() {
    const userAmountEl = document.querySelector('#user-amount .number');
    
    this.betController.completeBets(this.winner());
    this.amount += this.betController.newEarnings();
    this.state.raceCompleted = true;
    userAmountEl.innerText = this.amount;
  }
}