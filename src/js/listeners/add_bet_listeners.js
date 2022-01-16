const selectionColors = ['green', 'red', 'yellow', 'purple'];
let selection = 0;

export default function addBetListeners(betController) {
  addPrevListener(betController);
  addNextListener(betController);
  addSubmitListener(betController);
}

function addPrevListener(betController) {
  const prevEl = document.querySelector('#prev');
  prevEl.addEventListener('click', rotateSelection(betController, -1));
}

function addNextListener(betController) {
  const nextEl = document.querySelector('#next');
  nextEl.addEventListener('click', rotateSelection(betController, 1));
}

function rotateSelection(betController, dir) {
  const betControllerEl = document.querySelector('#bet-controller');
  
  return e => {
    betControllerEl.classList.remove(selectionColors[selection]);
    selection = (((selection + dir) % 4 ) + 4 ) % 4
    betControllerEl.classList.add(selectionColors[selection]);
    betController.setSelection(selectionColors[selection]);
  };
}

function addSubmitListener(betController) {
  const submitButtonEl = document.querySelector('#bet-submit-button');
  submitButtonEl.addEventListener('click', createBet(betController))
}

function createBet(betController) {
  const amountEl = document.querySelector('#amount');
  
  return () => {
    betController.setAmount(parseFloat(amountEl.value));
    betController.createBet();
    console.log(betController);
  };
}