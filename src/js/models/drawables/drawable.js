export default class Drawable {
  constructor (options) {
    this.posX = options.pos ? options.pos[0] : 0;
    this.posY = options.pos ? options.pos[1]: 0;
    this.pos = options.pos ? options.pos: [0, 0];
    this.posXDelta = 0;
    this.posYDelta = 0;
    this.width = options.width;
    this.height = options.height;
    this.scaleFactor = options.scaleFactor || 1;
    this.frameX = options.frameX || 0;
    this.frameY = options.frameY || 0;
    this.frameXDelta = 0;
    this.frameYDelta = 0;
    this.speed = options.speed || 1;
    this.velX = options.vel? options.vel[0] : undefined,
    this.velY = options.vel? options.vel[1] : undefined,
    this.vel = options.vel,
    this.moving = options.moving || false;
    this.canvas = options.canvas;
    this.ctx = options.canvas.canvasEl.getContext('2d');
    this.timeoutIDs = {};
  }

  draw() {}
}

Drawable.BASE_URL = './dist/assets/images';