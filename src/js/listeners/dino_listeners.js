export default function addDinoEventListeners(dino) {
  addRunningEventListener(dino);
}

function addRunningEventListener(dino) {
  let canvasEl = dino.canvas.canvasEl;
  canvasEl.addEventListener('runDino', startDinoRunFrameCycle(dino));
  canvasEl.addEventListener('stopDino', stopDinoRunFrameCycle(dino));
}

function startDinoRunFrameCycle(dino) {
  let frameX = 0;
  return function () {
    dino.timeoutIDs.run = setInterval(function () {
      dino.setRunningFrame(frameX++);
    }, 50 * dino.speed)
  }
}

function stopDinoRunFrameCycle(dino) {
  return function () {
    clearInterval(dino.timeoutIDs.run);
  }
}