import { factorial } from '../../util';

export default class Bet {
  constructor(type, selection, amount, race) {
    this.type = type;
    this.selection = selection;
    this.amount = amount;
    this.race = race;
    this.complete = false;
  }

  matches(selection) {
    return JSON.stringify(this.selection) === JSON.stringify(selection);
  }

  earnings() {
    return this.amount / Bet.winProbabilty(this.type, this.race.dinoCount);
  }

  complete() {
    this.complete = true;
  }

  static winProbabilty(type, dinoCount) {
    switch(type) {
      case 'win':
        return 1 / dinoCount;
      case 'show':
        return 3 / dinoCount;
      case 'sequence':
        return 1 / factorial(dinoCount);
    }
  }
}