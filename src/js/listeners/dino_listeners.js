export default function addDinoEventListeners(dino) {
  addRunningEventListener(dino);
}

function addRunningEventListener(dino) {
  let canvasEl = dino.canvas.canvasEl;
  canvasEl.addEventListener('runDino', animateDinoRun(dino));
  canvasEl.addEventListener('stopDino', stopDinoRun(dino));
}

function animateDinoRun(dino) {
  let frameX = 0;
  return function () {
    dino.animationData.runInterval = setInterval(function () {
      dino.setRunningFrame(frameX++);
    }, 50)
  }
}

function stopDinoRun(dino) {
  return function () {
    clearInterval(dino.animationData.runInterval);
  }
}