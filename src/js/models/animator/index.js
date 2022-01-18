import Canvas from "../canvas";
import createBackgrounds from "./create_backgrounds";
import createDinoMovables from "./create_dino_movables";
import createDinoSprites from "./create_dino_sprites";
import displayPopUp from "./display_pop_up";
import getDinoPlacements from './get_dino_placements'
import startBackgroundScroll from "./start_background_scroll";
import startDinoRuns from "./start_dino_runs";
import stopBackgroundScroll from "./stop_background_scroll";
import stopDinoRuns from "./stop_dino_runs";

export default class Animator {
  constructor({ dinoColors }) {
    this.canvas = new Canvas();
    this.dinoSprites = createDinoSprites(dinoColors);
    this.dinoMovables = createDinoMovables(this.dinoSprites);
    this.backgrounds = createBackgrounds(canvas.width);
    this.canvas.addDrawables([...this.backgrounds, ...this.dinoSprites]);
    this.canvas.animate(20);
  }

  start() {
    startBackgroundScroll();
    startDinoRuns(this.dinoMovables);
  }

  pause() {
    stopBackgroundScroll();
    stopDinoRuns(this.dinoMovables);
  }

  displayDinoPlacements(timeInterval) {
    const placements = getDinoPlacements(this.dinoSprites);
    const canvasDimensionRatios = this.canvas.getDimensionRatios();
    
    this.dinoSprites.forEach((dinoSprite, i) => {
      const xOffset = 25;
      const yOffset = -20;
      const posX = (dinoSprite.posX + dinoSprite.posXDelta + xOffset);
      const posY = (dinoSprite.posY + dinoSprite.posYDelta + yOffset);
      const posXScaled = posX * canvasDimensionRatios[0];
      const posYScaled = posY * canvasDimensionRatios[1];
      
      displayPopUp(
        [posXScaled, posYScaled],
        placements[i],
        timeInterval
      );
    });
  }

  reset() {
    this.dinoSprites.forEach(dinoSprite => dinoSprite.posXDelta = 0);
  }

  updateAmount(prevAmount, amount) {
    const userAmountEl = document.querySelector('#user-amount .number');
    const intervals = 10;
    const increment = (amount - prevAmount) / intervals;
    let runningSum = 0;
    
    (function increaseAmount(interval) {
      if (interval > intervals)
      return;
      runningSum = Math.round(((runningSum + increment) + Number.EPSILON) * 100) / 100
      userAmountEl.innerText = runningSum;
      setTimeout(() => increaseAmount(interval + 1), 2000 / intervals);
    })(1);
  }
}