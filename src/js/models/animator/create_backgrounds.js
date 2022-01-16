import Background from "../drawables/background";
import DinoSprite from "../drawables/dino_sprite";

export default function createBackgrounds(canvasWidth) {
  return [
    new Background({
      speed: 10,
      src: `${DinoSprite.BASE_URL}/pixel-desert.jpeg`
    }),
    new Background({
      pos: [canvasWidth, 0],
      speed: 10,
      src: `${DinoSprite.BASE_URL}/pixel-desert.jpeg`
    })
  ];
}
