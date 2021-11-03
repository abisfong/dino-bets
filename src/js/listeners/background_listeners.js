export default function addBackgroundEventListeners(background) {
  addBackgroundScrollListener(background);
}

function addBackgroundScrollListener(background) {
  const canvasEL = background.canvas.canvasEL;
  canvasEL.addEventListener('scrollBackground', createBackgroundScrollCallback(background));
}

function createBackgroundScrollCallback(background) {
  let posX = background.posX;
  return function () {
    background.timeoutIDs.scroll = setInterval(function () {
      background.setPos(posX++)
    }, 100 / background.speed);
  }
}