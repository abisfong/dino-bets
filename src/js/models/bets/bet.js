import { factorial } from '../../util';

export default class Bet {
  constructor(type, selection, amount) {
    this.type = type;
    this.selection = selection;
    this.amount = amount;
    this.isComplete = false;
    this.won = false;
    this.isLocked = false;
  }

  earnings() {
    if (this.won)
      return this.amount / this.winProbabilty();
    else
      return -this.amount;
  }

  complete(winner) {
    if (winner === this.selection)
      this.won = true;
    this.isComplete = true;
    this.placedBetStatusEl.innerText = this.won ? 'WON' : 'LOST';
    this.placedBetStatusEl.classList.add(this.won ? 'won' : 'lost');
    this.placedBetStatusEl.style.display = 'block';
    this.cancelBtnEl.style.display = 'none';
  }

  lock() {
    this.cancelBtnEl.style.visibility = 'hidden';
    this.isLocked = true;
  }

  unlock() {
    this.cancelBtnEl.style.visibility = 'visible';
    this.isLocked = false;
  }

  winProbabilty() {
    const dinoCount = 4;

    switch(this.type) {
      case 'win':
        return 1 / dinoCount;
      case 'show':
        return 3 / dinoCount;
      case 'sequence':
        return 1 / factorial(dinoCount);
    }
  }
}