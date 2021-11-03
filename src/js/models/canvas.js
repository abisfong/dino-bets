import addCanvasEventListeners from "../listeners/canvas_listeners";

export default class Canvas {
  constructor() {
    this.canvasEl = document.getElementById('canvas');
    this.ctx = this.canvasEl.getContext('2d');
    this.widthDefault = 300;
    this.heightDefault = 168.75;
    this.drawables = [];
    this.backgroundPositionX = 0;
    this.backgroundPositionInterval = null;
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
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
  }

  scrollBackground() {
    let canvasEl = this.canvasEl;
    this.backgroundPositionInterval = setInterval(() => {
      canvasEl.style.backgroundPosition = `${this.backgroundPositionX++}% 0%`
    }, 15);
  }

  stopBackgroundScroll() {
    clearInterval(this.backgroundPositionInterval);
  }
}