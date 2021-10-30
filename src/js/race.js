export default class Race {
  constructor(dinos, dinoCount, time) {
    this.dinos = dinos;
    this.dinoCount = dinoCount;
    this.time = time;
    this.winner = null;
  }

  winner() {
    return this.winner;
  }

  finish(winner) {
    this.winner = winner;
  }

  isFinished() {
    return this.winner === null;
  }
}