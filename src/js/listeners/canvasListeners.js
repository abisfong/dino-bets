import { resizeBackground } from "../events/backgroundEvents";

export default function addCanvasEventListeners(canvas) {
  // addResizingEventListener(canvas);
}

function addResizingEventListener(canvas) {
  window.addEventListener('resize', createResizeCanvasCallback(canvas));
}

function createResizeCanvasCallback(canvas) {
  resizeCanvas(canvas);
  return function() {
    resizeCanvas(canvas);
  }
}

function resizeCanvas(canvas) {
  let canvasEl = canvas.canvasEl;
  let raceViewEl = document.getElementById('race-view');
  let raceViewWidth = raceViewEl.offsetWidth;
  let raceViewHeight = raceViewEl.offsetHeight;
  canvasEl.width = canvas.width = raceViewWidth;
  canvasEl.height = canvas.height = raceViewHeight;
}