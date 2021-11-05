import Sprite from "./sprite";
import { 
  runDinoEvent, 
  stopDinoEvent 
} from '../../events/dinoEvents';

export default class Dino extends Sprite {
  constructor(options) {
    super(options);
    this.width = Dino.SIZES[options.size] || 24;
    this.height = Dino.SIZES[options.size] || 24;
    this.sprite.src = `${Sprite.BASE_URL}/${options.color}-dino-${options.size || 'small'}.png`;
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
    this.frameXDelta = this.frameXDelta % 10 || 4;
    this.setFrame(this.frameXDelta++, 0);
  }

  startRunAnimation() {
    const canvasEl = this.canvas.canvasEl;
    runDinoEvent.dino = this;
    canvasEl.dispatchEvent(runDinoEvent);
  }

  stopRunAnimation() {
    const canvasEl = this.canvas.canvasEl;
    stopDinoEvent.dino = this;
    canvasEl.dispatchEvent(stopDinoEvent);
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