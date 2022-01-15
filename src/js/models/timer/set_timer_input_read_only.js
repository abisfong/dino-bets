export default function setTimerInputReadOnly(timer, value) {
  const inputEls = timer.inputEls;
  timer.state.inputIsReadOnly = value;
  for (let i = 0; i < inputEls.length; i++)
    inputEls[i].readOnly = value;
}