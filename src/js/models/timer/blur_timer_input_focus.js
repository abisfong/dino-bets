export default function blurTimerInputFocus(timer) {
  const activeEl = document.activeElement;
  const inputEls = Array.from(timer.inputEls);
  if (inputEls.includes(activeEl))
    document.activeElement.blur();
}