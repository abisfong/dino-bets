export default function displayPopUp(pos, message, time=5000) {
  const raceViewEl = document.querySelector('#race-view');
  const popUpEl = document.createElement('div');

  popUpEl.classList.add('pop-up');
  popUpEl.innerText = message;
  popUpEl.style.position = 'absoulte';
  popUpEl.style.left = pos[0];
  popUpEl.style.right = pos[1];
  raceViewEl.append(popUpEl);

  setTimeout(() => raceViewEl.removeChild(popUpEl), time);
}