let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number; // Replace 0 if inputting new number
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return; // Ignore if current input is empty
    if (previousInput !== '') {
        calculate(); // Calculate previous expression before adding new operator
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function clearScreen() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}

function del() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0'; // Reset to 0 if empty
    }
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === null) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = previousInput + (operator ? ' ' + operator + ' ' : '') + currentInput;
}
