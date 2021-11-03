import Sprite from "./sprite";

export default class Dino extends Sprite {
  constructor(color, pos = [0, 0]) {
    super({
      pos: pos,
      width: 24,
      height: 24,
      frameX: 0,
      frameY: 0,
      speed: 9,
      moving: false,
      sprite: new Image(),
      src: `${color}-dino.png`,
    })

    this.color = color;
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