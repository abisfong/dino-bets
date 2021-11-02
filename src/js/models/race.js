export default class Race {
  constructor(dinos, time) {
    this.dinos = dinos;
    this.dinoCount = dinos.length;
    this.time = time;
    this.winner = null;
  }

  finish(winner) {
    if (!this.dinos.includes(winner))
      throw new Error("Winner must be a part of the race");
    this.winner = winner;
  }

  isFinished() {
    return this.winner !== null;
  }
}