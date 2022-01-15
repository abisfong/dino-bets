import DinoSprite from '../drawables/dinoSprite';
import Timer from '../timer';
import Canvas from '../canvas';
import createBackgrounds from './create_backgrounds';
import createDinoMovables from './create_dino_movables';
import createDinoSprites from './create_dino_sprites';
import startBackgroundScroll from './start_background_scroll';
import startDinoRace from './start_dino_race';
import stopBackgroundScroll from './stop_background_scroll';
import stopDinoRace from './stop_dino_race';

export default class Game {
  constructor(options) {
    this.canvas = new Canvas();
    this.timer = new Timer(document.querySelector('#timer'));
    this.state = { running: false };
    this.init(options);
  }

  start() {
    this.timer.start();
    startBackgroundScroll(this);
    startDinoRace(this);
    this.state.running = true;
  }
  
  pause() {
    this.timer.pause();
    stopBackgroundScroll(this);
    stopDinoRace(this);
    this.state.running = false;
  }

  reset() {
    this.timer.reset();
    this.pause();
  }

  init({ dinoColors }) {
    this.dinoSprites = createDinoSprites(dinoColors || DinoSprite.COLORS);
    this.dinoMovables = createDinoMovables(this.dinoSprites);
    this.backgrounds = createBackgrounds(this);
    this.canvas.addDrawables([...this.backgrounds, ...this.dinoSprites]);
    this.canvas.animate(20);
  }
}