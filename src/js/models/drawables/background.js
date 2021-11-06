import Drawable from "./drawable";

export default class Background extends Drawable {
  constructor(options) {
    super(options);
    this.speed = options.speed || 4;
    this.image = new Image();
    this.image.src = options.src || `${Background.BASE_URL}/desert-bg.png`;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX + this.posXDelta,
      this.posY + this.posYDelta,
      this.canvas.width + 1,
      this.canvas.height + 1,
    );
  }

  scroll(direction) {
    let directionDelta = getPosDelta(direction);
    this.timeoutIDs.scroll = setInterval(() => {
      scrollBackground(this, directionDelta);
    }, 100 / this.speed);
  }

  stopScroll() {
    clearInterval(this.timeoutIDs.scroll);
  }

  setScrollPosDelta(posXDelta = 0, posYDelta = 0) {
    this.setPosDelta(
      posXDelta % this.canvas.width,
      posYDelta % this.canvas.height
    )
  }

  setPosDelta(posXDelta = 0, posYDelta = 0) {
    this.posXDelta = posXDelta;
    this.posYDelta = posYDelta;
  }
}

Background.LISTENERS_LOADED = false;

function getPosDelta(direction) {
  let directionDelta;
  switch (direction) {
    case 'left':
      directionDelta = [-1, 0];
      break;
    case 'right':
      directionDelta = [1, 0];
      break;
    case 'up':
      directionDelta = [0, -1];
      break;
    case 'down':
      directionDelta = [0, 1];
      break;
  }
  return directionDelta;
}

function scrollBackground(background, directionDelta) {
  let posXDelta = background.posXDelta;
  let posYDelta = background.posYDelta;
  background.setScrollPosDelta(
    posXDelta + directionDelta[0], 
    posYDelta + directionDelta[1],
  );
}