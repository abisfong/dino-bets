import Timer from './timer';
import * as listeners from '../listeners';
import Animator from './animator';
import BetController from './bets/bet_controller';
import Foley from './foley';

export default class Game {
  constructor({ dinoColors }) {
    this.foley = new Foley();
    this.animator = new Animator({ dinoColors });
    this.betController = new BetController({foley: this.foley});
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
    const prevAmount = this.amount;
    let newEarnings = 0;
    
    this.betController.completeBets(this.winner());
    newEarnings = this.betController.newEarnings();
    this.amount += newEarnings;
    this.state.raceCompleted = true;
    console.log(this.amount);

    if (newEarnings !== 0)
      setTimeout(() => {
        this.animator.updateAmount(prevAmount, this.amount);
        this.foley.playSoundEffectFor('updateAmount')
      }, 500);

    if (newEarnings > 0)
      this.foley.playSoundEffectFor('positiveBetReturn');
  }
}