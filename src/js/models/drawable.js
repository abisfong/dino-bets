export default class Drawable {
  constructor (options) {
    this.posX = options.pos[0];
    this.posY = options.pos[1];
    this.pos = options.pos;
    this.width = options.width;
    this.height = options.height;
    this.frameX = options.frameX;
    this.frameY = options.frameY;
    this.speed = options.speed;
    this.velX = options.vel? options.vel[0] : undefined,
    this.velY = options.vel? options.vel[1] : undefined,
    this.vel = options.vel,
    this.moving = options.moving || false;
    this.canvas = options.canvas;
  }
}

Drawable.BASE_URL = './dist/assets/images/';