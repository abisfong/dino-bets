import Drawable from "./drawable";
import getDirectionDelta from "../../util/get_direction_delta";

export default class Background extends Drawable {
  static posDelta = [0, 0];
  static timeoutIDs = {};
  
  constructor(options) {
    super(options);
    this.speed = options.speed || 4;
    this.image = new Image();
    this.image.src = options.src || `${Background.BASE_URL}/desert-bg.png`;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX + this.constructor.posDelta[0],
      this.posY + this.constructor.posDelta[1],
      this.canvasEl.width + 1,
      this.canvasEl.height + 1,
    );
  }

  static scroll(direction) {
    const dirDelta = getDirectionDelta(direction);
    this.timeoutIDs.scroll = setInterval(() => {
      this.incrementStaticPosDelta(dirDelta);
    }, Background.baseFrameCycleRate / this.speed);
  }

  static stopScroll() {
    clearInterval(this.timeoutIDs.scroll);
  }

  static incrementStaticPosDelta(delta) {
    const canvasWidth = 1000;
    const canvasHeight = 562.75
    
    this.posDelta[0] = (this.posDelta[0] + delta[0]) % canvasWidth;
    this.posDelta[1] = (this.posDelta[1] + delta[1]) % canvasHeight;
  }
}

Background.LISTENERS_LOADED = false;