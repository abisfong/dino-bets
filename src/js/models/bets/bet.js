import { factorial } from '../../util';

export default class Bet {
  constructor(type, selection, amount, race) {
    this.type = type;
    this.selection = selection;
    this.amount = amount;
    this.isComplete = false;
    this.won = false;
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