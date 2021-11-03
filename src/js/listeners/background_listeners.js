export default function addBackgroundEventListeners(background) {
  addResizingEventListener(background);
}

function addResizingEventListener(background) {
  let canvasEl = background.canvas.canvasEl;
  canvasEl.addEventListener(
    'resizeBackground', 
    createResizeBackgroundCallback(background)
  );
}

function createResizeBackgroundCallback(background) {
  return function() {
    resizeBackground(background);
  }
}

function resizeBackground(background) {
  let canvasEl = background.canvas.canvasEl;
  background.width = canvasEl.width;
  background.height = canvasEl.height;
}