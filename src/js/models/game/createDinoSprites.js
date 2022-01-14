import DinoSprite from "../drawables/dinoSprite";

export default function createDinoSprites(dinoColors) {
  return dinoColors.map((dinoColor, i) => new DinoSprite({
    color: dinoColor, 
    width: 100,
    height: 100,
    scaleFactor: 3,
    speed: 1,
    pos: [600 - (50 * (i + 1)), 460]
  }));
}