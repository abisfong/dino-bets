export default function addCanvasEventListeners(canvas) {
  addResizingEventListener(canvas);
}

function addResizingEventListener(canvas) {
  window.addEventListener('resize', resizeCanvasCallback(canvas));
}

function resizeCanvasCallback(canvas) {
  resizeCanvas(canvas);
  return function(event) {
    console.log('resize triggered')
    resizeCanvas(canvas);
  }
}

function resizeCanvas(canvas) {
  let canvasEl = canvas.canvasEl;
  let raceViewEl = document.getElementById('race-view');
  canvas.width = raceViewEl.offsetWidth;
  canvas.height = raceViewEl.offsetHeight;
}