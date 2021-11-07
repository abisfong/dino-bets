import Movable from "./movable";

export default class DinoMovable extends Movable {
  constructor(options) {
    super(options);
  }

  startRun() {
    const timeoutIDs = this.timeoutIDs();
    timeoutIDs.runMovement = setInterval(() => {
      this.moveOnX(-1);
    }, 240);
  }

  stopRun() {
    const timeoutIDs = this.timeoutIDs();
    clearInterval(timeoutIDs.runMovement);
  }

  // vel = initialSpeed + acceleration * time
  jump() {
    const timeoutIDs = this.timeoutIDs();
    const vertical = this.height();
    const drawable = this.drawable;
    timeoutIDs.jumpMovement = setInterval(() => {
      // this.moveOnY(1)
    }, 240);
  }
}