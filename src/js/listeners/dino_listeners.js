export default function addDinoEventListeners(dino) {
  addRunningEventListener(dino);
}

function addRunningEventListener(dino) {
  let canvasEl = dino.canvas.canvasEl;
  canvasEl.addEventListener('runDino', animateDinoRun(dino));
}

function animateDinoRun(dino) {
  let frameX = 0;
  return function callback(event) {
    setInterval(function () {
      dino.setRunningFrame(frameX++);
    }, 50)
  }
}