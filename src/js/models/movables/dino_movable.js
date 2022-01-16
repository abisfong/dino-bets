import Movable from "./movable";
import { calculateDisplacement } from "../../util";
import getRandomDirection from "../../util/get_random_direction";

export default class DinoMovable extends Movable {
  constructor(options) {
    super(options);
    this.dinoSprite = this.drawable;
    this.timeoutIDs = this.timeoutIDs();
  }

  startRandomRun() {
    const maxSpeed = 5;
    this.startRun();
    this.timeoutIDs.randomRunMovement = setInterval(() => {
      this.stopRun();
      const dir = getRandomDirection();
      this.dinoSprite.speed = Math.floor(Math.random() * (maxSpeed + 1)) * dir;
      this.startRun(dir);
    }, 5000);
  }

  stopRandomRun() {
    const timeoutIDs = this.timeoutIDs;
    clearInterval(timeoutIDs.randomRunMovement);
    this.stopRun();
  }

  startRun(direction=0) {
    const timeoutIDs = this.timeoutIDs;
    timeoutIDs.runMovement = setInterval(() => {
      this.moveOnX(direction);
    }, 240);
    this.dinoSprite.startRun();
  }

  stopRun() {
    const timeoutIDs = this.timeoutIDs;
    clearInterval(timeoutIDs.runMovement);
    this.dinoSprite.stopRun();
  }

  layEgg() {

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
    const acceleration = calculateJumpAcceleration.call(this, hangTime);
    const timeoutIDs = this.timeoutIDs;
    let displacementTime = repositioningInterval;
    let elapsedTime = repositioningInterval;
    startJumpDisplacement({
      acceleration,
      displacementTime,
      elapsedTime,
      timeoutIDs
    });
  }
}

DinoMovable.DIRS_X = [1,-1]

// acceleration varies to help jump at different heights depending on speed
// and sprite size
function calculateJumpAcceleration(hangTime) {
  const averageRunningJumpHeightRatio = .36 + (.019 * this.speed());
  const vertical = this.height() * this.scaleFactor() * averageRunningJumpHeightRatio;
  // acceleration is based on displacement formula
  const acceleration = (2 * vertical) / Math.pow(hangTime / 2, 2);
  return acceleration;
}

function startJumpDisplacement({ acceleration, displacementTime, elapsedTime, timeoutIDs }) {
  timeoutIDs.jumpMovement = setInterval(() => {
    stopJumpDisplacement(displacementTime, timeoutIDs);
    let displacement = calculateDisplacement(0, acceleration, displacementTime / 1000);
    displacementTime = calculateDisplacementTime(displacementTime, elapsedTime, hangTime);
    elapsedTime += repositioningInterval;
    this.setPosYDelta(-displacement);
  }, repositioningInterval);
}

function stopJumpDisplacement(displacementTime, timeoutIDs) {
  if(displacementTime == 0)
    clearInterval(timeoutIDs.jumpMovement);
}

// helps loop through the displacement of a jump
function calculateDisplacementTime(displacementTime, elapsedTime, hangTime) {
  return displacementTime + (elapsedTime < hangTime / 2 * 1000 ? 100 : -100);
}