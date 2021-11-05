import Drawable from "./drawable";

export default class Sprite extends Drawable {
  constructor(options) {
    super(options);
    this.sprite = new Image();
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.posX + this.posXDelta, 
      this.posY + this.posYDelta,
      this.width * this.scaleFactor,
      this.height * this.scaleFactor
    );
  }
}