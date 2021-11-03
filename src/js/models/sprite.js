import Drawable from "./drawable";

export default class Sprite extends Drawable {
  constructor(options) {
    super(options);
    this.sprite = new Image();
    this.sprite.src = options.src;
  }

  draw(ctx) {
    ctx.drawImage(
      this.sprite,
      this.frameX,
      this.frameY,
      this.width,
      this.height,
      this.posX, 
      this.posY,
      this.width * (this.canvas.width / this.canvas.widthDefault),
      this.height * (this.canvas.height / this.canvas.heightDefault),
    );
  }
}