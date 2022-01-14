export default function createDinoMovables(dinoSprites) {
  return dinoSprites.map(dinoSprite => {
    return new DinoMovable({ drawable: dinoSprite });
  });
}