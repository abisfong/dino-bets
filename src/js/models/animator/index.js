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
    startBackgroundScroll(this.backgrounds);
    startDinoRuns(this.dinoMovables);
  }

  pause() {
    stopBackgroundScroll(this.backgrounds);
    stopDinoRuns(this.dinoMovables);
  }

  displayDinoPlacements() {
    const placements = getDinoPlacements(this.dinoSprites);
    
    this.dinoSprites.forEach((dinoSprite, i) => {
      const posX = dinoSprite.posX + dinoSprite.posXDelta;
      const posY = dinoSprite.posY + dinoSprite.posYDelta;
      
      displayPopUp(
        [posX, posY],
        placements[i]
      );
    });
  }

  reset() {
    this.dinoSprites.forEach(dinoSprite => dinoSprite.posXDelta = 0);
  }
}