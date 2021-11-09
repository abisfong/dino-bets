import Movable from "./movable";
import { calculateDisplacement } from "../../util";

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

  poop() {

  }

  dash(posXDelta) {
    // return if posXDelta dashes backwards
    // clear sprite animations
    // set interval to start dash
      // start dash animation
      // move from current pos using moveOnX up to given posXDelta
      // restart cleared sprtie animations
  }

  jump(hangTime = .75, repositioningInterval = 100) {
    const acceleration = calculateAcceleration.call(this, hangTime);
    const timeoutIDs = this.timeoutIDs();
    let displacementTime = repositioningInterval;
    let elapsedTime = repositioningInterval;
    timeoutIDs.jumpMovement = setInterval(() => {
      if(displacementTime == 0)
        clearInterval(timeoutIDs.jumpMovement);
      let displacement = calculateDisplacement(0, acceleration, displacementTime / 1000);
      displacementTime = calculateDisplacementTime(displacementTime, elapsedTime, hangTime);
      elapsedTime += repositioningInterval;
      this.setPosYDelta(-displacement);
    }, repositioningInterval);
  }
}

// acceleration varies to help jump at different heights depending on speed
// and sprite size
function calculateAcceleration(hangTime) {
  const averageRunningJumpHeightRatio = .36 + (.019 * this.speed());
  const vertical = this.height() * this.scaleFactor() * averageRunningJumpHeightRatio;
  // acceleration is based on displacement formula
  const acceleration = (2 * vertical) / Math.pow(hangTime / 2, 2);
  return acceleration;
}

// helps loop through the displacement of a jump
function calculateDisplacementTime(displacementTime, elapsedTime, hangTime) {
  return displacementTime + (elapsedTime < hangTime / 2 * 1000 ? 100 : -100);
}