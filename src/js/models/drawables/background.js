import Drawable from "./drawable";
import addBackgroundEventListeners from "../../listeners/background_listeners";
import { 
  startBackgroundScroll ,
  stopBackgroundScroll
} from "../../events/background_events";

export default class Background extends Drawable {
  constructor(options) {
    super(options);
    this.speed = options.speed || 4
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
    const canvasEl = this.canvas.canvasEl;
    canvasEl.dispatchEvent(startBackgroundScroll);
  }

  setPos(posX = 0, posY = 0) {
    this.posX = posX;
    this.posY = posY;
  }
}