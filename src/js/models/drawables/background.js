import Drawable from "./drawable";
import addBackgroundEventListeners from "../../listeners/background_listeners";

export default class Background extends Drawable {
  constructor(options) {
    super(options);
    this.posX = this.posX || 0;
    this.posY = this.posY || 0;
    this.pos = this.pos || [0, 0];
    this.width = this.width || this.canvasEl.width;
    this.height = this.height || this.canvasEl.Height;
    addBackgroundEventListeners(this);
  }

  draw() {

  }

  scroll() {

  }
}