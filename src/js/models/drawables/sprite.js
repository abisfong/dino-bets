import Drawable from "./drawable";

export default class Sprite extends Drawable {
  constructor(options) {
    super(options);
    this.sprite = new Image();
    this.sprite.src = options.src;
  }

  draw() {
    let canvasEl = this.canvas.canvasEl;
    let canvasWidthDefault = this.canvas.widthDefault;
    let canvasHeightDefault = this.canvas.heightDefault;
    let xRatio = (canvasEl.width / canvasWidthDefault);
    let yRatio = (canvasEl.height / canvasHeightDefault);
    this.ctx.drawImage(
      this.sprite,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.posX * xRatio, 
      this.posY * yRatio,
      this.width * xRatio,
      this.height * yRatio
    );
  }
}