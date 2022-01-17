import throttleAnimation from "./throttle_animation";

export default class Canvas {
  constructor() {
    this.canvasEl = document.getElementById('canvas');
    this.ctx = this.canvasEl.getContext('2d');
    this.width = 1000;
    this.height = 562.75;
    this.drawables = [];
  }

  addDrawable(drawable) {
    this.drawables.push(drawable);
  }

  addDrawables(drawables) {
    drawables.forEach(drawable => {
      this.drawables.push(drawable);
    });
  }

  animate(fps) {
    throttleAnimation(fps, () => {
      this.clearCanvas();
      for(let i = 0; i < this.drawables.length; i++)
        this.drawables[i].draw();
    });
  }
  
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
  }

  getDimensionRatios() {
    return [this.styleWidth() / this.width, this.styleHeight() / this.height];
  }

  styleWidth() {
    return this.canvasEl.offsetWidth;
  }

  styleHeight() {
    return this.canvasEl.offsetHeight;
  }
}