import Movable from "./movable";

export default class DinoMoveable extends Movable {
  constructor(options) {
    super(options);
  }

  startRunMovement() {
    const timeoutIDs = this.timeoutIDs();
    timeoutIDs.runMovement = setInterval(() => {
      this.moveOnX(-1);
    }, 240);
  }

  stopRunMovement() {
    const timeoutIDs = this.timeoutIDs();
    clearInterval(timeoutIDs.runMovement);
  }

  // vel = initialSpeed + acceleration * time
  jump() {
    const timeoutIDs = this.timeoutIDs();
    timeoutIDs.jumpMovement = setInterval(() => {

    }, 240);
  }
}