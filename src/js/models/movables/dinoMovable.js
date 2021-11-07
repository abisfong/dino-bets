import Movable from "./movable";

export default class DinoMoveable extends Movable {
  constructor(options) {
    super(options);
  }

  randomXMovement() {  
    this.moveOnX(-1);
  }

  startRunMovement() {
    const timeoutIDs = this.timeoutIDs();
    timeoutIDs.runMovement = setInterval(() => {
      this.randomXMovement();
    }, 240);
  }

  stopRunMovement() {
    const timeoutIDs = this.timeoutIDs();
    clearInterval(timeoutIDs.runMovement);
  }
}