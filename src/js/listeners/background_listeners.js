export default function addBackgroundEventListeners(background) {
  addResizingEventListener(background);
}

function addResizingEventListener(background) {
  window.addEventListener(
    'resize', 
    createResizeBackgroundCallback(background)
  );
}

function createResizeBackgroundCallback(background) {
  return function() {
    resizeBackground(background);
  }
}

resizeBackground(background) {
  let canvasEl = background.canvas.canvasEl;
  background.width = canvasEl.width;
  background.height = canvasEl.height;
}