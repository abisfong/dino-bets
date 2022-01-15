export default function startDinoRuns(dinoMovables) {
  dinoMovables.forEach((dinoMovable, i) => {
    dinoMovable.startRandomRun();
    setTimeout(() => {
      dinoMovable.jump();
    }, i * 250);
  });
}