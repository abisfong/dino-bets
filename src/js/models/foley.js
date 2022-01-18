export default class Foley {
  constructor() {
    this.src;
    this.audios = {
      placedBet: new Audio('/dist/assets/audios/placed-bet.wav'),
      canceledBet: new Audio('/dist/assets/audios/canceled-bet.wav'),
      invalidBet: new Audio('/dist/assets/audios/invalid-bet.mov'),
      betViewToggle: new Audio('/dist/assets/audios/bet-view-toggle.wav')
    }
  }

  playSoundEffectFor(soundEffect) {
    this.audios[soundEffect].play();
  }
}