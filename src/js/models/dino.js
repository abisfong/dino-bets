import Sprite from "./sprite";

export default class Dino extends Sprite {
  constructor(options) {
    super({
      pos: options.pos || [0, 0],
      width: 24,
      height: 24,
      frameX: 0,
      frameY: 0,
      speed: 9,
      moving: false,
      sprite: new Image(),
      src: `${Sprite.BASE_URL}${options.color}-dino.png`,
      canvas: options.canvas
    })

    this.color = options.color;
  }

  static generateRandomDino() {
    let colorCount = Dino.COLORS.length;
    let color = Dino.COLORS[Math.round(Math.random() * (colorCount - 1))];
    return new Dino(color);
  }
}

Dino.COLORS = [
  "red",
  "green",
  "yellow",
  "purp"
];