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
  let raceViewWidth = raceViewEl.offsetWidth;
  let raceViewHeight = raceViewEl.offsetHeight;
  canvasEl.width = raceViewWidth > canvas.widthDefault ? canvas.widthDefault : raceViewWidth;
  canvasEl.height = raceViewHeight > canvas.heightDefault ? canvas.heightDefault : raceViewHeight;
}