export default function throttleAnimation(fps, animationCallback) {
  let fpsInterval, startTime, now, then, elapsed;
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  
  (function animateNextFrame() {
    requestAnimationFrame(animateNextFrame);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      animationCallback();
    }
  })()
}