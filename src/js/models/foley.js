export default class Foley {
  constructor() {
    this.isMuted = false;
    this.audios = {
      placedBet: new Audio('./dist/assets/audios/placed-bet.wav'),
      canceledBet: new Audio('./dist/assets/audios/canceled-bet.wav'),
      invalidBet: new Audio('./dist/assets/audios/invalid-bet.mov'),
      betViewToggle: new Audio('./dist/assets/audios/bet-view-toggle.wav'),
      helpViewToggle: new Audio('./dist/assets/audios/help-view-toggle.wav'),
      betSelection: new Audio('./dist/assets/audios/bet-selection.wav'),
      timerBtnClick: new Audio('./dist/assets/audios/timer-btn-click.wav'),
      positiveBetReturn: new Audio('./dist/assets/audios/positive-bet-return.wav'),
      negativeBetReturn: new Audio('./dist/assets/audios/negative-bet-return.wav'),
      breakingEven: new Audio('./dist/assets/audios/breaking-even.wav'),
      updateAmount: new Audio('./dist/assets/audios/update-amount.wav'),
    }
  }

  playSoundEffectFor(soundEffect) {
    if (!this.isMuted)
      this.audios[soundEffect].play();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }
}