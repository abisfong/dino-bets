export default function addDinoEventListeners(dino) {
  addRunAnimationEventListeners();
}

function addRunAnimationEventListeners() {
  let canvasEl = document.getElementById('canvas');
  canvasEl.addEventListener('startDinoRunAnimation', startDinoRunFrameCycle);
  canvasEl.addEventListener('stopDinoRunAnimation', stopDinoRunFrameCycle);
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

function addRunMovementEventListeners() {
  let canvasEl = document.getElementById('canvas');
  canvasEl.addEventListener('startDinoRunMovement', startDinoRunFrameCycle);
  canvasEl.addEventListener('stopDinoRunMovement', stopDinoRunFrameCycle);
}