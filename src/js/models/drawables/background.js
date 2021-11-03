import Drawable from "./drawable";
import addBackgroundEventListeners from "../../listeners/background_listeners";

export default class Background extends Drawable {
  constructor(options) {
    super(options);
    this.image = new Image();
    this.image.src = options.src || `${Background.BASE_URL}/desert-bg.png`;
    addBackgroundEventListeners(this);
  }

  draw() {
    let canvasEl = this.canvas.canvasEl;
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      canvasEl.width,
      canvasEl.height,
    );
  }

  scroll() {

  }
}