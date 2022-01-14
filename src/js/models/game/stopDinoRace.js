export default function stopDinoRace(game) {
  stopDinoRuns(game);
}

function stopDinoRuns(game) {
  const dinoMovables = game.dinoMovables;
  dinoMovables.forEach(dinoMovable => {
    dinoMovable.stopRandomRun();
  });
}