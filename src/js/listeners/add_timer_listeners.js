export default function addTimerListeners(timer) {
  addTimeInputListeners(timer);
}

function addTimeInputListeners(timer) {
  addTimeEditListeners(timer);
}

function addTimeEditListeners(timer) {
  const startPauseEl = timer.startPauseEl;
  const timeEl = timer.timeEl;
  startPauseEl.addEventListener('click', createTimeInputCallback(timer));
  timeEl.addEventListener('keydown', createTimeInputCallback(timer));
}

function createTimeInputCallback(timer) {
  const startPauseEl = timer.startPauseEl;
  return function (event) {
    if (
      (event.key === 'Enter' || event.target === startPauseEl) 
      && !timer.state.inputIsReadOnly
    ) {
      timer.addTimeFromInput();
      timer.updateTime();
      timer.printTime();
    }
  }
}