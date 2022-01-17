export default class Foley {
  constructor() {
    this.audio = new Audio();
    this.src;
  }

  playSoundEffectFor(soundEffect) {
    switch(soundEffect) {
      case 'placedBet':
        this.setUrl('placed-bet.wav');
        break;
      case 'canceledBet':
        this.setUrl('canceled-bet.wav');
        break;
    }
    this.audio.play();
  }

  setUrl(src) {
    this.audio.src = `/dist/assets/audios/${src}`;
    if (this.src != src) {
      this.audio.load();
      this.src = src;
    }
  }
}