import { curry } from "../../util";

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
  const foley = betController.foley;
  
  return e => {
    betControllerEl.classList.remove(selectionColors[selection]);
    selection = (((selection + dir) % 4 ) + 4 ) % 4
    betControllerEl.classList.add(selectionColors[selection]);
    betController.setSelection(selectionColors[selection]);
    foley.playSoundEffectFor('betSelection');
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
      appendPlacedBetComponent(betController, placedBet);
    } else {
      displayInvalidAmountAnimations(betController, betController.foley);
    }
  };
}

function appendPlacedBetComponent(betController, placedBet) {
  // TODO: Listen for raceComplete to handle innerText changes of status.
  //       Dispatch custom lock/unlock events to handle LOCK
  //       changes of status.
  const placedBetsViewEl = document.querySelector('#placed-bets-view')
  const placedBetEl = document.createElement('div');
  let placedBetStatusEl, cancelBtnEl;

  placedBetEl.innerHTML = getPlacedBetInnerHTML(placedBet);
  placedBetsViewEl.prepend(placedBetEl);
  placedBetStatusEl = placedBetsViewEl.querySelector('.status');
  cancelBtnEl = placedBetsViewEl.querySelector('.cancel-btn');
    
  placedBet.placedBetStatusEl = placedBetStatusEl;
  placedBet.cancelBtnEl = cancelBtnEl;

  addPlacedBetCancelBtnListener(betController, placedBet, cancelBtnEl);
}

function getPlacedBetInnerHTML({selection, amount}) {
  return `
    <div class='placed-bet ${selection}'>
      <div class='amount'>
        <span class='money-sign'>$</span>
        <span class='number'>${amount}</span>
      </div>
      <div class='status'>LOCKED</div>
      <div class='cancel-btn'>CANCEL</div>
    </div>
  `
}

function addPlacedBetCancelBtnListener(betController, placedBet, cancelBtnEl) {
  cancelBtnEl.addEventListener(
    'click', 
    cancelPlacedBetCallback(betController, placedBet)
  );
}

function displayInvalidAmountAnimations(betController) {
  const foley = betController.foley;

  foley.playSoundEffectFor('invalidBet');
  blinkBetControllerAmount();
}

function blinkBetControllerAmount() {
  let timeoutID;
  let timeInterval = 0;
  const amountLabelEl = document.getElementById('amount-label');
  const blinkCount = 4;
  const stopBlinkingCurry = curry(
    () => {
      clearInterval(timeoutID);
      return true;
    }, 
    window, 
    blinkCount
  );
  
  (function blinkBetControllerAmountRecur() {
    timeoutID = setTimeout(() => {
      timeInterval = 250;
      amountLabelEl.classList.toggle('blink');
      if (stopBlinkingCurry() !== true)
        blinkBetControllerAmountRecur();
    }, timeInterval)
  })();
}


function cancelPlacedBetCallback(betController, placedBet) {
  const foley = betController.foley;

  return e => {
    const placedBetEl = e.target.parentElement;
    const placedBetsViewEl = placedBetEl.parentElement;
    
    betController.cancelBet(placedBet);
    placedBetsViewEl.removeChild(placedBetEl);

    foley.playSoundEffectFor('canceledBet');
  }
}