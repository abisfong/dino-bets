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
    this.cancelBtnEl.style.display = 'none';
  }
  
  lock() {
    this.placedBetStatusEl.style.display = 'block';
    this.cancelBtnEl.style.display = 'none';
    this.isLocked = true;
  }

  unlock() {
    this.placedBetStatusEl.style.display = 'none';
    this.cancelBtnEl.style.display = 'block';
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