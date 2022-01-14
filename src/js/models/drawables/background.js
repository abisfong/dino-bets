import Drawable from "./drawable";
import getDirectionDelta from "../../util/getDirectionDelta";

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
      this.canvasEl.width + 1,
      this.canvasEl.height + 1,
    );
  }

  scroll(direction) {
    let delta = getDirectionDelta(direction);
    this.timeoutIDs.scroll = setInterval(() => {
      this.updatePosition(delta);
    }, 100 / this.speed);
  }

  stopScroll() {
    clearInterval(this.timeoutIDs.scroll);
  }

  updatePosition(delta) {
    const canvasEl = this.canvasEl;
    const posXDelta = this.posXDelta + delta[0];
    const posYDelta = this.posYDelta + delta[1];

    this.posXDelta = posXDelta % canvasEl.width;
    this.posYDelta = posYDelta % canvasEl.height;
  }
}

Background.LISTENERS_LOADED = false;