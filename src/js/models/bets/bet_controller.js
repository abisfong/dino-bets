import Bet from './bet';

export default class BetController {
  constructor({foley}) {
    this.selection = 'green';
    this.bets = [];
    this.earnings = 0;
    this.lockedBetsCount = 0;
    this.foley = foley;
    this.completedABet = false;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  setSelection(selection) {
    this.selection = selection;
  }

  createBet(amount) {
    const placedBet = new Bet(
      'win',
      this.selection,
      amount
    );
    this.foley.playSoundEffectFor('placedBet');
    this.bets.unshift(placedBet);
    return placedBet;
  }

  cancelBet(placedBet) {
    this.bets = this.bets.filter(bet => bet != placedBet);
  }

  lockBets() {
    this.bets.forEach(bet => {
      if (!bet.isComplete) {
        bet.lock()
        this.lockedBetsCount++;
        this.completedABet = false;
      }
    });
  }

  unlockBets() {
    this.bets.forEach(bet => {
      if (!bet.isComplete) {
        bet.unlock()
        this.lockedBetsCount--;
      }
    });
  }

  newEarnings() {
    return this.earnings;
  }

  completeBets(winner) {
    this.earnings = 0;
    this.bets.forEach(bet => {
      if (!bet.isComplete && bet.isLocked) {
        bet.complete(winner);
        this.earnings += bet.earnings();
        this.lockedBetsCount--;
        this.completedABet = true;
      }
    })
  }
}