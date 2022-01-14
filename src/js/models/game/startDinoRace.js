export default function startDinoRace(game) {
  startDinoRuns(game);
}

function startDinoRuns(game) {
  let dinoMovables = game.dinoMovables;
  dinoMovables.forEach((dinoMovable, i) => {
    dinoMovable.startRandomRun();
    setTimeout(() => {
      dinoMovable.jump();
    }, i * 250);
  });
}