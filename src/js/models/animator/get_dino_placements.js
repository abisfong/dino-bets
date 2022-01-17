export default function getDinoPlacements(dinoSprites) {
  const placements = [];

  for(let i = 0; i < dinoSprites.length; i++) {
    const dinoSprite = dinoSprites[i];
    const dinoPosX = dinoSprite.posX + dinoSprite.posXDelta;
    const placement = 0;
    for(let j = 0; j < dinoSprites.length; j++)
      if (dinoPosX < dinoSprites[j].posX + dinoSprites[j].posXDelta)
        placement++;
    placements[i] = placement + 1;
  }

  return placements;
}