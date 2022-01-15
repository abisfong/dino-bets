// const betTypes = ['WIN', 'SHOW', 'SEQUENCE'];
// let currentTypeSelection = 0;
// let currentSubTypeSelection = 0;

export default function addBetListeners() {
  addPrevListener();
  addNextListener();
  // addTypeButtonListener();
  addSubmitListener();
}

function addPrevListener() {
  const prevEl = document.querySelector('#prev');
}

function addNextListener() {
  const nextEl = document.querySelector('#next');
}

// function 

// function addTypeButtonListener() {
//   const typeButtonEl = document.querySelector('#bet-type-button');
//   typeButtonEl.addEventListener('click', rotateTypeSelection());
// }

// function rotateTypeSelection() {
//   return e => {
//     e.target.innerText = `TYPE: ${betTypes[++currentTypeSelection % 3]}`;
//     currentSubTypeSelection = 0;
//   };
// }

function addSubmitListener() {
  const submitButtonEl = document.querySelector('#bet-submit-button');
}