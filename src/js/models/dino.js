export default class Dino {
  constructor(color, pos) {
    this.color = color;
    this.pos = pos;
    this.width = 24;
    this.height = 24;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 9;
    this.moving = false;
    this.dinoSprite = new Image();
    this.dinoSprite.src = `${color}-dino.png`;
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