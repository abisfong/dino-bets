export default function addCanvasEventListeners(canvas) {
  addResizingEventListener(canvas);
}

function addResizingEventListener(canvas) {
  window.addEventListener('resize', resizeCanvasCallback(canvas));
}

function resizeCanvasCallback(canvas) {
  resizeCanvas(canvas);
  return function(event) {
    resizeCanvas(canvas);
  }
}

function resizeCanvas(canvas) {
  let canvasEl = canvas.canvasEl;
  let raceViewEl = document.getElementById('race-view');
  canvasEl.width = raceViewEl.offsetWidth;
  canvasEl.height = raceViewEl.offsetHeight;
  canvas.width = raceViewEl.offsetWidth;
  canvas.height = raceViewEl.offsetHeight;
}