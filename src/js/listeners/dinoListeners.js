export default function addDinoEventListeners() {
  addRunAnimationEventListeners();
  addRunMovementEventListeners();
}

function addRunAnimationEventListeners() {
  let canvasEl = document.getElementById('canvas');
  canvasEl.addEventListener('startDinoRunAnimation', startDinoRunFrameCycle);
  canvasEl.addEventListener('stopDinoRunAnimation', stopDinoRunFrameCycle);
}

function startDinoRunFrameCycle(event) {
  const dino = event.dino;
  dino.timeoutIDs.runAnimation = setInterval(function () {
    dino.cycleRunningFrame();
  }, 100 - (4 * (dino.speed - 1)))
}

function stopDinoRunFrameCycle(event) {
  const dino = event.dino;
  clearInterval(dino.timeoutIDs.runAnimation);
}

function addRunMovementEventListeners() {
  let canvasEl = document.getElementById('canvas');
  canvasEl.addEventListener('startDinoRunMovement', startDinoRunMovement);
  canvasEl.addEventListener('stopDinoRunMovement', stopDinoRunMovement);
}

function startDinoRunMovement(event) {
  const dino = event.dino;
  dino.timeoutIDs.runMovement = setInterval(function () {
    dino.randomXMovement();
  }, 50);
}

function stopDinoRunMovement(event) {
  const dino = event.dino;
  clearInterval(dino.timeoutIDs.runMovement);
}