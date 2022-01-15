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

  createBet(race) {
    this.bets.push(new Bet(
      'win',
      this.selection,
      this.amount,
      race
    ))
  }
}