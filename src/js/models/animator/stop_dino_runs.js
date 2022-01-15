export default function stopDinoRuns(dinoMovables) {
  dinoMovables.forEach(dinoMovable => {
    dinoMovable.stopRandomRun();
  });
}