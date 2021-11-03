import Drawable from "./drawable";

export default class Sprite extends Drawable {
  constructor(options) {
    super(options);
    this.sprite = new Image();
    this.sprite.src = options.src;
  }

  draw(ctx) {
    let canvasEl = this.canvas.canvasEl;
    let canvasWidthDefault = this.canvas.widthDefault;
    let canvasHeightDefault = this.canvas.heightDefault;
    ctx.drawImage(
      this.sprite,
      this.frameX,
      this.frameY,
      this.width,
      this.height,
      this.posX, 
      this.posY,
      this.width * (canvasEl.width / canvasWidthDefault),
      this.height * (canvasEl.height / canvasHeightDefault),
    );
  }
}