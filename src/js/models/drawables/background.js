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
    this.canvasInitialWidth = this.canvas.width;
    this.canvasInitialHeight = this.canvas.height;
  }

  draw() {
    let xRatio = (this.canvas.width / this.canvasInitialWidth);
    let yRatio = (this.canvas.height / this.canvasInitialHeight);
    let posXScaled = (this.posX + this.posXDelta) * xRatio;
    let posYScaled = (this.posY + this.posYDelta) * yRatio;
    this.ctx.drawImage(
      this.image,
      posXScaled,
      posYScaled,
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
      posXDelta % this.canvasInitialWidth,
      posYDelta % this.canvasInitialHeight
    )
  }

  setPosDelta(posXDelta = 0, posYDelta = 0) {
    this.posXDelta = posXDelta;
    this.posYDelta = posYDelta;
  }
}

Background.LISTENERS_LOADED = false;