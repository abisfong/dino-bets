import Sprite from "./sprite";
import addDinoEventListeners from "../listeners/dino_listeners";
import { runDino } from '../events/dino_events';

export default class Dino extends Sprite {
  constructor(options) {
    super({
      pos: options.pos || [0, 0],
      width: 24,
      height: 24,
      frameX: 0,
      frameY: 0,
      speed: 9,
      moving: false,
      sprite: new Image(),
      src: `${Sprite.BASE_URL}${options.color}-dino.png`,
      canvas: options.canvas
    })

    this.color = options.color;
    this.animationData = {};
    addDinoEventListeners(this);
  }

  static generateRandomDino() {
    let colorCount = Dino.COLORS.length;
    let color = Dino.COLORS[Math.round(Math.random() * (colorCount - 1))];
    return new Dino(color);
  }

  setFrames(frameX, frameY) {
    this.frameX = frameX;
    this.frameY = frameY;
  }

  setRunningFrame(frameX, frameY = 0) {
    this.setFrames((frameX % 7) + 3, frameY);
  }

  run() {
    const canvasEl = this.canvas.canvasEl;
    canvasEl.dispatchEvent(runDino);
  }
}

Dino.COLORS = [
  "red",
  "green",
  "yellow",
  "purp"
];