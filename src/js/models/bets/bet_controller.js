import Bet from './bet';

export default class BetController {
  constructor() {
    this.amount = 0;
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

  createBet() {
    if (this.amount != 'NaN' && this.amount > 0) {
      console.log('Creating bet');
      this.bets.push(new Bet(
        'win',
        this.selection,
        this.amount
      ))
    }
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