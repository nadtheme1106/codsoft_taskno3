const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    
    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
    } else if (value === '=') {
      if (currentInput && previousInput && operator) {
        currentInput = evaluate(previousInput, operator, currentInput);
        display.value = currentInput;
        operator = '';
        previousInput = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function evaluate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return b;
  }
}
