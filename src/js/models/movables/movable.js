import { addLivePropsFrom } from "../../util";

export default class Movable {
  constructor(options) {
    this.drawable = options.drawable;
    addLivePropsFrom.call(this, this.drawable);
  }

  moveOnX(delta) {
    if (this.speed() != 0)
      this.drawable.posXDelta = this.posXDelta() + (delta * this.speed());
  }

  moveOnY(delta) {
    this.drawable.posYDelta += delta;
  }

  setPosXDelta(posXDelta) {
    this.drawable.posXDelta = posXDelta;
  }

  setPosYDelta(posYDelta) {
    this.drawable.posYDelta = posYDelta;
  }
}