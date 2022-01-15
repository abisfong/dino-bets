let prevInput = '0';

export default function addAmountInputListeners() {
  const inputEl = document.querySelector('#amount');
  inputEl.addEventListener('input', onChangeHandler);
  inputEl.addEventListener('focus', moveCursorToInputEnd);
  inputEl.addEventListener('click', moveCursorToInputEnd);
}
  
function onChangeHandler(e) {
  console.log('onchange handler');
  const inputEl = e.target;
  const numOfPeriods = (inputEl.value.match(/[.]/g) || []).length;

  limitInputToNumeric(inputEl);
  limitInputTo6WholeNumsAnd2Decimals(inputEl);
  addPlaceholderWhenInputIsEmpty(inputEl);
  preventDecimalWithNoLeadingNum(inputEl, numOfPeriods);
  preventDuplicateDecimalPoint(inputEl, numOfPeriods);
  preventWholeNumberWithLeadingZero(inputEl, numOfPeriods);
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

function moveCursorToInputEnd(e) {
  const inputEl = e.target;
  inputEl.value = inputEl.value;
}