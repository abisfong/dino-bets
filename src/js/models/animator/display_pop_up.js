export default function displayPopUp(pos, message, timeInterval=2500) {
  const raceViewEl = document.querySelector('#race-view');
  const popUpEl = document.createElement('div');

  popUpEl.classList.add('pop-up');
  popUpEl.innerText = message;
  popUpEl.style.position = 'absolute';
  popUpEl.style.left = `${pos[0]}px`;
  popUpEl.style.top = `${pos[1]}px`;
  raceViewEl.append(popUpEl);

  setTimeout(() => raceViewEl.removeChild(popUpEl), timeInterval);
}