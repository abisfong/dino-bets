import Bet from './bet';

export default class betController {
  constructor() {
    this.amount = 0;
    this.selection = 'green';
    this.bets = [];
  }

  setAmount(amount) {
    this.amount = amount;
  }

  setSelection(selection) {
    this.selection = selection;
  }

  setRace(race) {
    this.race = race;
  }

  createBet() {
    if (amount > 0)
      this.bets.push(new Bet(
        'win',
        this.selection,
        this.amount,
        this.race
      ))
  }
}