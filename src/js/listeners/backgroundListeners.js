import Background from "../models/drawables/background";

export default function addBackgroundEventListeners(background) {
  if (!Background.LISTENERS_LOADED)
    addBackgroundScrollListener();
}

function addBackgroundScrollListener() {  
  const canvasEl = document.getElementById('canvas');
  canvasEl.addEventListener('startBackgroundScroll', startBackgroundScroll);
  canvasEl.addEventListener('stopBackgroundScroll', stopBackgroundScroll);
}

function startBackgroundScroll(event) {
  let directionDelta = getPosDelta(event.direction);
  let background = event.background;
  background.timeoutIDs.scroll = setInterval(function () {
    scrollBackground(background, directionDelta);
  }, 100 / background.speed);
}

function getPosDelta(direction) {
  let directionDelta;
  switch (direction) {
    case 'left':
      directionDelta = [-1, 0];
      break;
    case 'right':
      directionDelta = [1, 0];
      break;
    case 'up':
      directionDelta = [0, -1];
      break;
    case 'down':
      directionDelta = [0, 1];
      break;
  }
  return directionDelta;
}

function scrollBackground(background, directionDelta) {
  let posXDelta = background.posXDelta;
  let posYDelta = background.posYDelta;
  background.setScrollPosDelta(
    posXDelta + directionDelta[0], 
    posYDelta + directionDelta[1],
  );
}

function stopBackgroundScroll(event) {
  let background = event.background;
  clearInterval(background.timeoutIDs.scroll);
}