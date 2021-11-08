import Movable from "./movable";
import { displacementEquation } from "../../util";

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

  jump(hangTime = .75, repositioningInterval = 100) {
    const averageRunningJumpHeightRatio = .55;
    const vertical = this.height() * this.scaleFactor() * averageRunningJumpHeightRatio;
    // acceleration is based on displacement formula
    const acceleration = (2 * vertical) / Math.pow(hangTime / 2, 2); 
    const timeoutIDs = this.timeoutIDs();
    let displacementTime = repositioningInterval;
    let displacement = 0;
    let elapsedTime = repositioningInterval;
    timeoutIDs.jumpMovement = setInterval(() => {
      if(displacementTime == 0)
        clearInterval(timeoutIDs.jumpMovement);
      displacement = displacementEquation(0, acceleration, displacementTime / 1000);
      displacementTime = calculateDisplacementTime(displacementTime, elapsedTime, hangTime);
      elapsedTime += repositioningInterval;
      this.setPosYDelta(-displacement);
    }, repositioningInterval);
  }
}

// helps loop through the displacement of jump
function calculateDisplacementTime(displacementTime, elapsedTime, hangTime) {
  return displacementTime + (elapsedTime < hangTime / 2 * 1000 ? 100 : -100);
}