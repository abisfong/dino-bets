export default function startDinoRuns(dinoMovables) {
  dinoMovables.forEach((dinoMovable, i) => {
    dinoMovable.startRandomRun();
  });
}