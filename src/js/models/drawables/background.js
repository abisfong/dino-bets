import Drawable from "./drawable";
import addBackgroundEventListeners from "../../listeners/backgroundListeners";
import { 
  startBackgroundScroll ,
  stopBackgroundScroll
} from "../../events/backgroundEvents";

export default class Background extends Drawable {
  constructor(options) {
    super(options);
    this.speed = options.speed || 4
    this.image = new Image();
    this.image.src = options.src || `${Background.BASE_URL}/desert-bg.png`;
    this.posXDelta = 0;
    this.posYDelta = 0;
    addBackgroundEventListeners(this);
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX + this.posXDelta,
      this.posY + this.posYDelta,
      canvas.width + 10,
      canvas.height,
    );
  }

  scroll(direction) {
    const canvasEl = this.canvas.canvasEl;
    startBackgroundScroll.direction = direction;
    canvasEl.dispatchEvent(startBackgroundScroll);
  }

  stopScroll() {
    const canvasEl = this.canvas.canvasEl;
    canvasEl.dispatchEvent(stopBackgroundScroll);
  }

  setScrollPosDelta(posXDelta = 0, posYDelta = 0) {
    this.setPosDelta(
      posXDelta % this.canvas.width, 
      posYDelta % this.canvas.height
    )
  }

  setPosDelta(posXDelta = 0, posYDelta = 0) {
    this.posXDelta = posXDelta;
    this.posYDelta = posYDelta;
  }
}