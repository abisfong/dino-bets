let prevInput = '0';

export default function addAmountInputListeners() {
  const inputEl = document.querySelector('#amount');
  inputEl.addEventListener('input', onChangeHandler);
  inputEl.addEventListener('focus', moveCursorToInputEnd);
  inputEl.addEventListener('click', moveCursorToInputEnd);
  inputEl.addEventListener('keyup', keyUpHandler());
  inputEl.addEventListener('keydown', keyDownHandler);
}
  
function onChangeHandler(e) {
  const inputEl = e.target;
  const numOfPeriods = (inputEl.value.match(/[.]/g) || []).length;

  limitInputToNumeric(inputEl);
  limitInputTo6WholeNumsAnd2Decimals(inputEl);
  addPlaceholderWhenInputIsEmpty(inputEl);
  preventDecimalWithNoLeadingNum(inputEl, numOfPeriods);
  preventDuplicateDecimalPoint(inputEl, numOfPeriods);
  preventWholeNumberWithLeadingZero(inputEl, numOfPeriods);
  resizeInputElementToContentWidth(inputEl);
  prevInput = inputEl.value;
}

function limitInputToNumeric(inputEl) {
  if ((/[^0-9.]/g).test(inputEl.value))
    inputEl.value = prevInput;
}

function limitInputTo6WholeNumsAnd2Decimals(inputEl) {
  const wholeNums = `${parseInt(inputEl.value)}`;
  const decimals = (inputEl.value.match(/\.([0-9]+)/) || [])[1];
  if (wholeNums.length > 6)
    inputEl.value = prevInput;
  if (decimals && decimals.length > 2)
    inputEl.value = prevInput;
}

function addPlaceholderWhenInputIsEmpty(inputEl) {
  const input = inputEl.value;
  if (input.length === 0 || input.length === 1 && input[0] === '0') {
    inputEl.value = '';
    inputEl.style.placeholder = '0';
  }
}

function preventDecimalWithNoLeadingNum(inputEl) {
  const input = inputEl.value;
  if (input[0] === '.')
    input.length === 1 && prevInput.length === 0 ? 
      inputEl.value = '0.' : 
      inputEl.value = prevInput;
}

function preventDuplicateDecimalPoint(inputEl, numOfPeriods) {
  const input = inputEl.value;
  if (input[0] === '.' && input.length > 1 || numOfPeriods > 1)
    inputEl.value = prevInput;
}

function preventWholeNumberWithLeadingZero(inputEl, numOfPeriods) {
  const input = inputEl.value;
  if (input[0] === '0')
    if (numOfPeriods === 0 )
      inputEl.value = `${parseInt(input)}`
    else if (parseInt(input) > 0)
      inputEl.value = input.substring(1);
}

function resizeInputElementToContentWidth(inputEl) {
  inputEl.style.width = 0;
  if (inputEl.value.length == 0)
    inputEl.style.width = '37px';
  else
    inputEl.style.width = `${inputEl.scrollWidth}px`;
}

function moveCursorToInputEnd(e) {
  const inputEl = e.target;
  if (e.type !== 'keyup' || /Arrow/.test(e.key)) {
    inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
  }
}

function keyUpHandler() {
  const betSubmitBtnEl = document.getElementById('bet-submit-btn');
  const prevEl = document.getElementById('prev');
  const nextEl = document.getElementById('next');
  
  return e => {
    const inputEl = e.target;

    moveCursorToInputEnd(e);

    if (e.key === 'Enter')
      betSubmitBtnEl.click();
    if (e.key === 'ArrowLeft')
      prevEl.click();
    if (e.key === 'ArrowRight')
      nextEl.click();
  }
}

function keyDownHandler(e) {
  const inputEl = e.target;
  
  if (e.key === 'ArrowUp') {
      inputEl.value = parseFloat(inputEl.value) + 1 || 1;
      onChangeHandler({target: inputEl});
    }
    if (e.key === 'ArrowDown') {
      inputEl.value = parseFloat(inputEl.value) - 1 || '';
      onChangeHandler({target: inputEl});
    }
}