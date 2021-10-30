export default class Bet {
  constructor(type, dino, amount, race) {
    this.type = type;
    this.dino = dino;
    this.amount = amount;
    this.race = race;
  }

  earnings() {
    
  }

  static winProbabilty() {
    switch(this.type) {
      case "win":
        return 1 / this.race.dinoCount;
      case "show"
    }
  }
}