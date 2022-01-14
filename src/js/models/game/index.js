import DinoSprite from '../drawables/dinoSprite';
import Timer from '../timer';
import Canvas from '../canvas';
import addAllListeners from '../../listeners/addAllListeners';
import createBackgrounds from './createBackgrounds';
import createDinoMovables from './createDinoMovables';
import createDinoSprites from './createDinoSprites';
import startBackgroundScroll from './startBackgroundScroll';
import startDinoRace from './startDinoRace';
import stopBackgroundScroll from './stopBackgroundScroll';
import stopDinoRace from './stopDinoRace';

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

  init(data) {
    addAllListeners(this);
    this.dinoSprites = createDinoSprites(data.dinoColors || DinoSprite.COLORS);
    this.dinoMovables = createDinoMovables(this.dinoSprites);
    this.backgrounds = createBackgrounds(this);
    this.canvas.addDrawables([...this.backgrounds, ...this.dinoSprites]);
    this.canvas.animate(20);
  }
}