export default class Foley {
  constructor() {
    this.audio = new Audio();
  }

  setUrl(url) {
    this.audio.url = url;
    this.audio.load();
  }
}