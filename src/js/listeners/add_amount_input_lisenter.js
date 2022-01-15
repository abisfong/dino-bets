export default function addAmountInputListener(inputEl) {
  inputEl.addEventListener('change', onChangeHandler)
}

class AmountInputHandler {
  
  constructor(inputEl) {
  }
  
  onChangeHandler(e) {
    const inputEl = e.target;
    const numOfPeriods = (inputEl.value.match(/[.]/g) || []).length;
  
    limitInputToNumeric(inputEl);
    limitInputTo6WholeNumsAnd2Decimals(inputEl)
    addPlaceholderWhenInputIsEmpty(inputEl);
    preventDecimalWithNoLeadingNum(inputEl, numOfPeriods);
    preventDuplicateDecimalPoint(inputEl, numOfPeriods);
    preventWholeNumberWithLeadingZero(inputEl, numOfPeriods);
    resizeInputElementToContentWidth(inputEl);
    validateAmountIsGreaterThanZero(inputEl);
    prevInput = inputEl.value;
    props.update(['amount'], inputEl.value);
  }
  
  limitInputToNumeric(inputEl) {
    if ((/[^0-9.]/g).test(inputEl.value))
      inputEl.value = this.prevInput;
  }
  
  limitInputTo6WholeNumsAnd2Decimals(inputEl) {
    const wholeNums = `${parseInt(inputEl.value)}`;
    const decimals = (inputEl.value.match(/\.([0-9]+)/) || [])[1];
    if (wholeNums.length > 6)
      inputEl.value = this.prevInput;
    if (decimals && decimals.length > 2)
      inputEl.value = this.prevInput;
  }
  
  addPlaceholderWhenInputIsEmpty(inputEl) {
    const input = inputEl.value;
    if (input.length === 0 || input.length === 1 && input[0] === '0') {
      inputEl.value = '';
      inputEl.style.placeholder = '0';
    }
  }
  
  preventDecimalWithNoLeadingNum(inputEl) {
    const input = inputEl.value;
    if (input[0] === '.')
      input.length === 1 && this.prevInput.length === 0 ? 
        inputEl.value = '0.' : 
        inputEl.value = this.prevInput;
  }
  
  preventDuplicateDecimalPoint(inputEl, numOfPeriods) {
    const input = inputEl.value;
    if (input[0] === '.' && input.length > 1 || numOfPeriods > 1)
      inputEl.value = this.prevInput;
  }
  
  preventWholeNumberWithLeadingZero(inputEl, numOfPeriods) {
    const input = inputEl.value;
    if (input[0] === '0')
      if (numOfPeriods === 0 )
        inputEl.value = `${parseInt(input)}`
      else if (parseInt(input) > 0)
        inputEl.value = input.substring(1);
  }
  
  resizeInputElementToContentWidth(inputEl) {
    inputEl.style.width = 0;
    if (inputEl.value.length == 0)
      inputEl.style.width = '34px';
    else
      inputEl.style.width = `${inputEl.scrollWidth}px`;
  }
  
  validateAmountIsGreaterThanZero(inputEl) {
    const { inputErrorTextEl } = getInputElements(inputEl);
    const amount = Number.parseFloat(inputEl.value);
  
    if (amount === 0 || Number.isNaN(amount))
      addInvalidInputStyle(inputEl);
    else
      addValidInputStyle(inputEl);
  }
}