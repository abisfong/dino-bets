const selectionColors = ['green', 'red', 'yellow', 'purple'];
let selection = 0;

export default function addBetListeners(betController) {
  addPrevListener(betController);
  addNextListener(betController);
  addSubmitListener(betController);
  addRaceCompleteListener(betController);
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
  const submitButtonEl = document.querySelector('#bet-submit-btn');
  submitButtonEl.addEventListener('click', createBet(betController))
}

function createBet(betController) {
  const amountEl = document.querySelector('#amount');
  
  return () => {
    betController.setAmount(parseFloat(amountEl.value));
    const placedBet = betController.createBet();
    if (placedBet)
      addPlacedBetComponent(placedBet);
  };
}

function addPlacedBetComponent(placedBet) {
  const placedBetsView = document.querySelector('#placed-bets-view')
  const placedBetContainer = document.createElement('div');
  
  placedBetContainer.classList.add('placed-bet');

}

function addRaceCompleteListener(betController) {
  
}