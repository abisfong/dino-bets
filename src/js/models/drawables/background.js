import Drawable from "./drawable";
import addBackgroundEventListeners from "../../listeners/backgroundListeners";
import { 
  startBackgroundScroll,
  stopBackgroundScroll
} from "../../events/backgroundEvents";

export default class Background extends Drawable {
  constructor(options) {
    super(options);
    this.speed = options.speed || 4;
    this.image = new Image();
    this.image.src = options.src || `${Background.BASE_URL}/desert-bg.png`;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX + this.posXDelta,
      this.posY + this.posYDelta,
      this.canvas.width,
      this.canvas.height,
    );
  }

  scroll(direction) {
    const canvasEl = this.canvas.canvasEl;
    startBackgroundScroll.direction = direction;
    startBackgroundScroll.background = this;
    canvasEl.dispatchEvent(startBackgroundScroll);
  }

  stopScroll() {
    const canvasEl = this.canvas.canvasEl;
    stopBackgroundScroll.background = this;
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

Background.LISTENERS_LOADED = false;