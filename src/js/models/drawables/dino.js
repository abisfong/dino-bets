import Sprite from "./sprite";
import addDinoEventListeners from "../../listeners/dinoListeners";
import { runDino, stopDino } from '../../events/dinoEvents';

export default class Dino extends Sprite {
  constructor(options) {
    super({
      pos: options.pos,
      width: Dino.SIZES[options.size] || 24,
      height: Dino.SIZES[options.size] || 24,
      frameX: 0,
      frameY: 0,
      speed: options.speed || 1,
      moving: false,
      sprite: new Image(),
      src: `${Sprite.BASE_URL}/${options.color}-dino-${options.size || 'small'}.png`,
      canvas: options.canvas
    })
    this.color = options.color;
  }

  static generateRandom(options) {
    let colorCount = Dino.COLORS.length;
    let color = Dino.COLORS[Math.round(Math.random() * (colorCount - 1))];
    return new Dino({color, canvas: options.canvas});
  }

  setFrame(frameX, frameY) {
    this.frameX = frameX;
    this.frameY = frameY;
  }

  cycleRunningFrame() {
    this.frameX = (this.frameX % 6) + 4
    this.setFrame(this.frameX, 0);
  }

  startRunAnimation() {
    const canvasEl = this.canvas.canvasEl;
    canvasEl.dispatchEvent(runDino);
  }

  stopRunAnimation() {
    const canvasEl = this.canvas.canvasEl;
    stopDino.dino = this;
    canvasEl.dispatchEvent(stopDino);
    this.frameX = 0;
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