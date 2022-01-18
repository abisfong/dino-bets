import Sprite from "./sprite";

export default class DinoSprite extends Sprite {
  constructor(options) {
    super(options);
    this.width = DinoSprite.SIZES[options.size] || 24;
    this.height = DinoSprite.SIZES[options.size] || 24;
    this.sprite.src = `${Sprite.BASE_URL}/${options.color}-dino-${options.size || 'small'}.png`;
    this.color = options.color;
  }
  
  cycleThroughRunningFrames() {
    const lastFrameNum = 9
    const firstFrameNum = 3
    const increment = 1;
    this.frameX = (this.frameX % lastFrameNum || firstFrameNum) + increment;
  }

  startRun() {
    const frameCycleRate = this.constructor.baseFrameCycleRate - (4 * (this.speed - 1));
    this.timeoutIDs.runAnimation = setInterval(() => {
      this.cycleThroughRunningFrames();
    }, frameCycleRate)
  }

  stopRun() {
    clearInterval(this.timeoutIDs.runAnimation);
    this.frameX = 0;
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