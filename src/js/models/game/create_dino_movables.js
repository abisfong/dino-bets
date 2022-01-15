import DinoMovable from "../movables/dino_movable";

export default function createDinoMovables(dinoSprites) {
  return dinoSprites.map(dinoSprite => {
    return new DinoMovable({ drawable: dinoSprite });
  });
}