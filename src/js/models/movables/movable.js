import { addLivePropsFrom } from "../../util";

export default class Movable {
  constructor(options) {
    this.drawable = options.drawable;
    addLivePropsFrom.call(this, this.drawable);
  }

  moveOnX(direction) {
    if (this.speed() != 0)
      this.drawable.posXDelta = this.posXDelta() + (direction * this.speed());
  }

  moveOnY(direction) {
    this.drawable.posYDelta += direction;
  }
}