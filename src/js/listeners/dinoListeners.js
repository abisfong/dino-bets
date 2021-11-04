export default function addDinoEventListeners(dino) {
  addRunningEventListener();
}

function addRunningEventListener() {
  let canvasEl = document.getElementById('canvas');
  canvasEl.addEventListener('runDino', startDinoRunFrameCycle);
  canvasEl.addEventListener('stopDino', stopDinoRunFrameCycle);
}

function startDinoRunFrameCycle(event) {
  let dino = event.dino;
  console.log('starting running animation', dino);
  dino.timeoutIDs.run = setInterval(function () {
    dino.cycleRunningFrame();
  }, 100 / dino.speed)
}

function stopDinoRunFrameCycle(event) {
  let dino = event.dino;
  clearInterval(dino.timeoutIDs.run);
}