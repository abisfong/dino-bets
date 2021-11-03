import Drawable from "./drawable";

export default class Sprite extends Drawable {
  constructor(options) {
    super(options);
    this.sprite = new Image();
    this.sprite.src = options.src;
    this.timeoutIDs = {};
  }

  draw() {
    let canvasEl = this.canvas.canvasEl;
    let canvasWidthDefault = this.canvas.widthDefault;
    let canvasHeightDefault = this.canvas.heightDefault;
    this.ctx.drawImage(
      this.sprite,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.posX, 
      this.posY,
      this.width * (canvasEl.width / canvasWidthDefault),
      this.height * (canvasEl.height / canvasHeightDefault),
    );
  }
}