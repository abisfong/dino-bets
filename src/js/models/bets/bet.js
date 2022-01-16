import { factorial } from '../../util';

export default class Bet {
  constructor(type, selection, amount, race) {
    this.type = type;
    this.selection = selection;
    this.amount = amount;
    this.complete = false;
  }

  matches(selection) {
    return this.selection === selection;
  }

  earnings() {
    return this.amount / this.winProbabilty;
  }

  complete() {
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