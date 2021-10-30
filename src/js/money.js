export default class Money {
  constructor(startingAmount = 100) {
    this.amount = startingAmount;
  }

  deduct(amount) {
    if (this.amount < amount)
      throw Error("Insufficient funds");
    this.amount -= amount;
  }

  add(amount) {
    this.amount += amount;
  }
}