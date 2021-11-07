export default class Movable {
  constructor(options) {
    this.drawable = options.drawable;
  }

  moveOnX(direction) {
    const drawable = this.drawable;
    if (drawable.speed != 0)
      drawable.posXDelta = drawable.posXDelta + (direction * drawable.speed);
  }

  moveOnY(direction) {
    const drawable = this.drawable;
    drawable.posYDelta += direction;
  }
}

  // randomXMovement() {
    
  //   this.moveOnX(-1);
  // }

  // startRunMovement() {
  //   this.timeoutIDs.runMovement = setInterval(() => {
  //     this.randomXMovement();
  //   }, 240);
  // }

  // stopRunMovement() {
  //   clearInterval(this.timeoutIDs.runMovement);
  // }