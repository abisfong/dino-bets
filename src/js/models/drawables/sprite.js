import Drawable from "./drawable";

export default class Sprite extends Drawable {
  constructor(options) {
    super(options);
    this.sprite = new Image();
    this.sprite.src = options.src;
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.posX, 
      this.posY,
      this.width * this.scaleFactor,
      this.height * this.scaleFactor
    );
  }
}