import Sprite from "./sprite";
import { 
  startDinoRunAnimationEvent, 
  stopDinoRunAnimationEvent,
  startDinoRunMovementEvent,
  stopDinoRunMovementEvent
} from '../../events/dinoEvents';

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
    const canvasEl = this.canvas.canvasEl;
    startDinoRunAnimationEvent.dino = this;
    canvasEl.dispatchEvent(startDinoRunAnimationEvent);
  }

  stopRunAnimation() {
    const canvasEl = this.canvas.canvasEl;
    stopDinoRunAnimationEvent.dino = this;
    canvasEl.dispatchEvent(stopDinoRunAnimationEvent);
    this.frameX = 0;
  }

  randomXMovement() {
    this.moveOnX(1);
  }

  moveOnX(direction) {
    this.posXDelta = this.posXDelta + direction + this.speed;
  }

  startRunMovement() {
    const canvasEl = this.canvas.canvasEl;
    startDinoRunMovementEvent.dino = this;
    canvasEl.dispatchEvent(startDinoRunMovementEvent);
  }

  stopRunMovement() {
    const canvasEl = this.canvas.canvasEl;
    stopDinoRunMovementEvent.dino = this;
    canvasEl.dispatchEvent(stopDinoRunMovementEvent);
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