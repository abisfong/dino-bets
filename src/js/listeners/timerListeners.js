export default function addTimerEventListeners(timer) {
  addTimeInputListeners(timer);
}

function addTimeInputListeners(timer) {
  addTimeEditListener(timer);
}

function addTimeEditListener(timer) {
  const timeEl = timer.timeEl;
  timeEl.addEventListener('keydown', createTimeInputCallback(timer));
}

function createTimeInputCallback(timer) {
  return function (event) {
    if (event.key === 'Enter' && !timer.inputIsReadOnly) {
      timer.addTimeFromInput();
      timer.updateTime();
      timer.printTime();
    }
  }
}