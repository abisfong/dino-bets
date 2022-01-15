const selectionColors = ['green', 'red', 'yellow', 'purple'];
let selection = 0;

export default function addBetListeners(betController) {
  addPrevListener();
  addNextListener();
  addSubmitListener(betController);
}

function addPrevListener() {
  const prevEl = document.querySelector('#prev');
  prevEl.addEventListener('click', rotateSelection(-1));
}

function addNextListener() {
  const nextEl = document.querySelector('#next');
  nextEl.addEventListener('click', rotateSelection(1));
}

function rotateSelection(dir) {
  const betControllerEl = document.querySelector('#bet-controller');
  
  return e => {
    betControllerEl.classList.remove(selectionColors[selection]);
    selection = (((selection + dir) % 4 ) + 4 ) % 4
    betControllerEl.classList.add(selectionColors[selection]);
  };
}

function addSubmitListener(betController) {
  const submitButtonEl = document.querySelector('#bet-submit-button');
  submitButtonEl.addEventListener('click', createBet(betController))
}

function createBet(betController) {
  return () => betController.createBet();
}