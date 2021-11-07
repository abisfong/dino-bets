import Sprite from "./sprite";

export default class DinoSprite extends Sprite {
  constructor(options) {
    super(options);
    this.width = DinoSprite.SIZES[options.size] || 24;
    this.height = DinoSprite.SIZES[options.size] || 24;
    this.sprite.src = `${Sprite.BASE_URL}/${options.color}-dino-${options.size || 'small'}.png`;
    this.color = options.color;
    this.posXDeviation = this.canvasEl.width * .2;
  }

  static generateRandom(options) {
    let colorCount = DinoSprite.COLORS.length;
    let color = DinoSprite.COLORS[Math.round(Math.random() * (colorCount - 1))];
    return new DinoSprite({color});
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
    this.moveOnX(-1);
  }

  moveOnX(direction) {
    if (this.speed != 0)
      this.posXDelta = this.posXDelta + (direction * this.speed);
  }

  moveOnY(direction) {
    this.posYDelta += direction;
  }

  startRunMovement() {
    this.timeoutIDs.runMovement = setInterval(() => {
      this.randomXMovement();
    }, 240);
  }

  stopRunMovement() {
    clearInterval(this.timeoutIDs.runMovement);
  }
}

DinoSprite.COLORS = [
  "red",
  "green",
  "yellow",
  "purp"
];

DinoSprite.SIZES = {
  small: 24,
  large: 94,
}