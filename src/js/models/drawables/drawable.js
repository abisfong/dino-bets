export default class Drawable {
  constructor (options) {
    this.posX = options.pos ? options.pos[0] : 0;
    this.posY = options.pos ? options.pos[1]: 0;
    this.pos = options.pos ? options.pos: [0, 0];
    this.width = options.width;
    this.height = options.height;
    this.frameX = options.frameX;
    this.frameY = options.frameY;
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