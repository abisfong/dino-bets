import Bet from './bet';

export default class BetController {
  constructor() {
    this.selection = 'green';
    this.bets = [];
    this.earnings = 0;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  setSelection(selection) {
    this.selection = selection;
  }

  createBet(amount) {
    return this.bets.push(new Bet(
      'win',
      this.selection,
      amount
    ))
  }

  newEarnings() {
    return this.earnings;
  }

  completeBets(winner) {
    this.earnings = 0;
    this.bets.forEach(bet => {
      if (!bet.isComplete) {
        bet.complete(winner);
        this.earnings += bet.earnings();
      }
    })
  }
}