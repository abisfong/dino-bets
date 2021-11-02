export default class Dino {
  constructor(color) {
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