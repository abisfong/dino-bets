import addCanvasEventListeners from "../listeners/canvas_event";

export default class Canvas {
  constructor() {
    this.canvasEl = document.getElementById('canvas');
    this.ctx = canvasEl.getContext('2d');
    addCanvasEventListeners(this);
  }

  drawSprite(spriteObj) {
    this.ctx.drawImage(
      spriteObj.src,
      spriteObj.frameX,
      spriteObj.frameY,
      spriteObj.width,
      spriteObj.height,
      spriteObj.posX, 
      spriteObj.posY,

    );
  }
}