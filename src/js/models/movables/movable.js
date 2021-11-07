import addPropsFrom from "../../util/addPropsFrom";

export default class Movable {
  constructor(options) {
    this.drawable = options.drawable;
    addPropsFrom(this.drawable);
  }

  moveOnX(direction) {
    if (this.speed() != 0)
      this.posXDelta() = this.posXDelta() + (direction * this.speed());
  }

  moveOnY(direction) {
    this.drawable.posYDelta += direction;
  }
}