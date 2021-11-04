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
    addBackgroundEventListeners(this);
    Background.LISTENERS_LOADED = true;
    this.canvasInitialWidth = this.canvas.width;
    this.canvasInitialHeight = this.canvas.height;
  }

  draw() {
    let xRatio = (this.canvas.width / this.canvasInitialWidth);
    let yRatio = (this.canvas.height / this.canvasInitialHeight);
    this.ctx.drawImage(
      this.image,
      (this.posX + this.posXDelta) * xRatio,
      (this.posY + this.posYDelta) * yRatio,
      canvas.width + 10,
      canvas.height,
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
    console.log("canvas dimensions", this.canvas.width, this.canvas.width);
    console.log('deltas', posXDelta, posYDelta);
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