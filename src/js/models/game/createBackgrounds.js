import Background from "../drawables/background";

export default function createBackgrounds(game) {
  return [
    new Background({
      speed: 10,
      src: `${DinoSprite.BASE_URL}/pixel-desert.jpeg`
    }),
    new Background({
      pos: [game.canvas.width, 0],
      speed: 10,
      src: `${DinoSprite.BASE_URL}/pixel-desert.jpeg`
    })
  ];
}
