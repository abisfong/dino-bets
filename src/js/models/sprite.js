export default class Sprite {
  constructor(options) {
    this.posX = options.pos[0];
    this.posY = options.pos[1];
    this.pos = pos;
    this.width = options.width;
    this.height = options.height;
    this.frameX = options.frameX;
    this.frameY = options.frameY;
    this.speed = options.speed;
    this.moving = options.moving || false;
    this.sprite = new Image();
    this.sprite.src = options.src;
  }
}