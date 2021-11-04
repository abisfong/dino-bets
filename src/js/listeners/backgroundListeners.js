export default function addBackgroundEventListeners(background) {
  addBackgroundScrollListener(background);
}

function addBackgroundScrollListener(background) {
  const canvasEl = background.canvas.canvasEl;
  canvasEl.addEventListener('startBackgroundScroll', startBackgroundScroll(background));
  canvasEl.addEventListener('stopBackgroundScroll', stopBackgroundScroll(background));
}

function startBackgroundScroll(background) {
  return function (event) {
    let directionDelta = getPosDelta(event.direction);
    background.timeoutIDs.scroll = setInterval(function () {
      scrollBackground(background, directionDelta);
    }, 100 / background.speed);
  }
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

function stopBackgroundScroll(background) {
  return function () {
    clearInterval(background.timeoutIDs.scroll);
  }
}