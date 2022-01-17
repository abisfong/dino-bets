export default class Foley {
  constructor() {
    this.audio = new Audio();
  }

  playSoundEffectFor(soundEffect) {
    switch(soundEffect) {
      case 'placedBet':
        this.setUrl('/');
        break;
    }

    this.audio.play();
  }

  setUrl(url) {
    this.audio.url = url;
    this.audio.load();
  }
}