import { factorial } from '../../util';

export default class Bet {
  constructor(type, selection, amount, race) {
    this.type = type;
    this.selection = selection;
    this.amount = amount;
    this.complete = false;
    this.won = false;
  }

  earnings() {
    const multiplier = this.won ? 1 : -1;
    return this.amount / this.winProbabilty * multiplier;
  }

  complete(winner) {
    if (winner === this.selection)
      this.won = true;
    this.complete = true;
  }

  isComplete() {
    return this.complete;
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