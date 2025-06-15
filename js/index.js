let newLine = true;
let value1;
let currentOperator;
// function handling the event
function digitButtonPressed (button) {
  if (newLine) {
    document.getElementById ('inputBox').value = button;
    newLine = false;
  } else {
    currentValue = document.getElementById ('inputBox').value;
    document.getElementById ('inputBox').value = currentValue + button;
  }
}

//When the AC button is pressed

function btnACPressed () {
  document.getElementById ('inputBox').value = 0;
  newLine = true;
}

// handle the operator
function operatorBtnPressed (operator) {
  currentOperator = operator;
  value1 = parseInt (document.getElementById ('inputBox').value);
  newLine = true;
}

// Equls to button
function equalsBtnPressed () {
  let value2 = parseInt (document.getElementById ('inputBox').value);
  let result;

  switch (currentOperator) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    case '*':
      result = value1 * value2;
      break;
  }
  document.getElementById ('inputBox').value = result;
  value1 = 0;
  newLine = true;
}
