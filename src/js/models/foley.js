export default class Foley {
  constructor() {
    this.audio = new Audio();
  }

  playSoundEffectFor(soundEffect) {
    switch(soundEffect) {
      case 'placedBet':
        console.log('Playing:', soundEffect)
        this.setUrl('/dist/assets/audios/placed-bet.wav');
        break;
    }
    this.audio.play();
  }

  setUrl(src) {
    this.audio.src = src;
    this.audio.load();
  }
}