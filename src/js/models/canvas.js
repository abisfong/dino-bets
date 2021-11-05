import addCanvasEventListeners from "../listeners/canvasListeners";

export default class Canvas {
  constructor() {
    this.canvasEl = document.getElementById('canvas');
    this.ctx = this.canvasEl.getContext('2d');
    this.widthDefault = 300;
    this.heightDefault = 168.75;
    this.drawables = [];
    this.backgroundPositionX = 0;
    this.backgroundPositionInterval = null;
    this.width = this.canvasEl.width;
    this.height = this.canvasEl.height;
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
    let fpsInterval, startTime, now, then, elapsed;
    const startAnimation = (fps) => {
      fpsInterval = 1000/fps;
      then = Date.now();
      startTime = then;
      _animate();
    }
    const _animate = () => {
      requestAnimationFrame(_animate);
      now = Date.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        this.clearCanvas();
        for(let i = 0; i < this.drawables.length; i++)
          this.drawables[i].draw();
      }
    }
    startAnimation(fps);
  }
  
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
  }
}