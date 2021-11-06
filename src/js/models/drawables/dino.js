import Sprite from "./sprite";

export default class Dino extends Sprite {
  constructor(options) {
    super(options);
    this.width = Dino.SIZES[options.size] || 24;
    this.height = Dino.SIZES[options.size] || 24;
    this.sprite.src = `${Sprite.BASE_URL}/${options.color}-dino-${options.size || 'small'}.png`;
    this.color = options.color;
    this.posXDeviation = this.canvas.width * .2;
  }

  static generateRandom(options) {
    let colorCount = Dino.COLORS.length;
    let color = Dino.COLORS[Math.round(Math.random() * (colorCount - 1))];
    return new Dino({color, canvas: options.canvas});
  }
  
  cycleRunningFrame() {
    this.frameXDelta = this.frameXDelta % 10 || 4;
    this.setFrame(this.frameXDelta++, 0);
  
  }
  setFrame(frameX, frameY) {
    this.frameX = frameX;
    this.frameY = frameY;
  }

  startRunAnimation() {
    this.timeoutIDs.runAnimation = setInterval(() => {
      this.cycleRunningFrame();
    }, 100 - (4 * (this.speed - 1)))
  }

  stopRunAnimation() {
    clearInterval(this.timeoutIDs.runAnimation);
    this.frameX = 0;
  }

  randomXMovement() {
    this.moveOnX(1);
  }

  moveOnX(direction) {
    if (this.speed != 0)
      this.posXDelta = this.posXDelta + (direction * this.speed);
  }

  startRunMovement() {
    this.timeoutIDs.runMovement = setInterval(() => {
      this.randomXMovement();
    }, 50);
  }

  stopRunMovement() {
    clearInterval(this.timeoutIDs.runMovement);
  }
}

Dino.COLORS = [
  "red",
  "green",
  "yellow",
  "purp"
];

Dino.SIZES = {
  small: 24,
  large: 94,
}