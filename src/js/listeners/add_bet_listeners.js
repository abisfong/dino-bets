const selectionColors = ['green', 'red', 'yellow', 'purple'];
let selection = 0;

export default function addBetListeners(betController) {
  addPrevListener(betController);
  addNextListener(betController);
  addSubmitListener(betController);
  addToggleListener(betController);
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
    const amount = parseFloat(amountEl.value);
    if (amount != 'NaN' && amount > 0) {
      const placedBet = betController.createBet(amount);
      addPlacedBetComponent(betController, placedBet);
    }
  };
}

function addPlacedBetComponent(betController, placedBet) {
  const placedBetsViewEl = document.querySelector('#placed-bets-view')
  const placedBetEl = document.createElement('div');
  const placedBetAmountEl = document.createElement('div');
  const placedBetStatusEl = document.createElement('div');
  const cancelBtnEl = document.createElement('button');
  
  placedBetEl.classList.add('placed-bet');
  placedBetEl.classList.add(placedBet.selection);
  placedBetAmountEl.classList.add('amount');
  placedBetStatusEl.classList.add('status');
  cancelBtnEl.classList.add('cancel-btn');

  placedBetAmountEl.innerHTML = `
    <span class='money-sign'>$</span>
    <span class='number'>${placedBet.amount}</span>`;
  placedBetStatusEl.innerText = 'LOCKED'
  cancelBtnEl.innerText = 'CANCEL';
    
  placedBetEl.append(placedBetAmountEl);
  placedBetEl.append(placedBetStatusEl);
  placedBetEl.append(cancelBtnEl);
  placedBetsViewEl.prepend(placedBetEl);
    
  placedBet.placedBetStatusEl = placedBetStatusEl;
  placedBet.cancelBtnEl = cancelBtnEl;

  cancelBtnEl.addEventListener(
    'click', 
    cancelPlacedBetCallback(betController, placedBet)
  );
}

function cancelPlacedBetCallback(betController, placedBet) {
  return e => {
    const placedBetEl = e.target.parentElement;
    const placedBetsViewEl = placedBetEl.parentElement;
    
    betController.cancelBet(placedBet);
    placedBetsViewEl.removeChild(placedBetEl);

    betController.foley.playSoundEffectFor('canceledBet');
  }
}

function addToggleListener(betController) {
  const betViewToggleEl = document.querySelector('#bet-view-toggle');
  const betViewToggleIconEl = betViewToggleEl.querySelector('.icon');

  betViewToggleEl.addEventListener('click', () => {
    betViewToggleEl.classList.toggle('open');
    betViewToggleEl.classList.toggle('close');
  
    betViewToggleIconEl.classList.toggle('fa-times');
    betViewToggleIconEl.classList.toggle('fa-dollar-sign');
    
    betController.foley.playSoundEffectFor('betViewToggle');
  })
}