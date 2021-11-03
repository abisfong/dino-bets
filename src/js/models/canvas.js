import addCanvasEventListeners from "../listeners/canvas_listeners";

export default class Canvas {
  constructor() {
    this.canvasEl = document.getElementById('canvas');
    this.ctx = this.canvasEl.getContext('2d');
    this.widthDefault = 300;
    this.heightDefault = 168.75;
    this.drawables = [];
    addCanvasEventListeners(this);
  }

  addDrawable(drawable) {
    this.drawables.push(drawable);
  }

  animate() {
    this.clearCanvas();
    for(let i = 0; i < this.drawables.length; i++)
      this.drawables[i].draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
  
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}