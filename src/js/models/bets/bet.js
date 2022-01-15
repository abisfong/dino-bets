import { factorial } from '../../util';

export default class Bet {
  constructor(type, choice, amount, race) {
    this.type = type;
    this.choice = choice;
    this.amount = amount;
    this.race = race;
  }

  matches(choice) {
    return JSON.stringify(this.choice) === JSON.stringify(choice);
  }

  earnings() {
    return this.amount / Bet.winProbabilty(this.type, this.race.dinoCount);
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