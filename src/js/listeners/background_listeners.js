export default function addBackgroundEventListeners(background) {
  addBackgroundScrollListener(background);
}

function addBackgroundScrollListener(background) {
  const canvasEL = background.canvas.canvasEL;
  canvasEL.addEventListener('startBackgroundScroll', startBackgroundScroll(background));
  canvasEL.addEventListener('stopBackgroundScroll', stopBackgroundScroll(background));
}

function startBackgroundScroll(background) {
  let posX = background.posX;
  return function () {
    background.timeoutIDs.scroll = setInterval(function () {
      background.setPos(posX++)
    }, 100 / background.speed);
  }
}

function stopBackgroundScroll(background) {
  return function () {
    clearInterval(background.timeoutIDs.scroll);
  }
}