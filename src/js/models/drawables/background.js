import Drawable from "./drawable";
import { 
  startBackgroundScrollEvent,
  stopBackgroundScrollEvent
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
      this.canvas.width + 1,
      this.canvas.height + 1,
    );
  }

  scroll(direction) {
    const canvasEl = this.canvas.canvasEl;
    startBackgroundScrollEvent.direction = direction;
    startBackgroundScrollEvent.background = this;
    canvasEl.dispatchEvent(startBackgroundScrollEvent);
  }

  stopScroll() {
    const canvasEl = this.canvas.canvasEl;
    stopBackgroundScrollEvent.background = this;
    canvasEl.dispatchEvent(stopBackgroundScrollEvent);
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