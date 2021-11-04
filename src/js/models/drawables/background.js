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
    let canvasEl = this.canvas.canvasEl;
    this.ctx.drawImage(
      this.image,
      this.posX + this.posXDelta,
      this.posY + this.posYDelta,
      canvasEl.width,
      canvasEl.height,
    );
  }

  scroll(direction) {
    const canvasEl = this.canvas.canvasEl;
    startBackgroundScroll.direction = direction;
    canvasEl.dispatchEvent(startBackgroundScroll);
  }

  setScrollPosDelta(posXDelta = 0, posYDelta = 0) {
    let canvasWidth = this.canvas.width;
    let canvasHeight = this.canvas.height;
    this.setPosDelta(
      posXDelta % canvasWidth, 
      posYDelta % canvasHeight
    )
  }

  setPosDelta(posXDelta = 0, posYDelta = 0) {
    this.posXDelta = posXDelta;
    this.posYDelta = posYDelta;
  }
}