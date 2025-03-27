//// Variables

// Operation variables
let operandA;
let operandB = "unchanged";
let operator;
let operatorPicked = false;
let newOperand = false;

// Element variables
let display = document.querySelector("#output");

// Array of digit button objects
let digits = [
    {"element": document.querySelector("#b0"),"digit": 0},
    {"element": document.querySelector("#b1"),"digit": 1},
    {"element": document.querySelector("#b2"),"digit": 2},
    {"element": document.querySelector("#b3"),"digit": 3},
    {"element": document.querySelector("#b4"),"digit": 4},
    {"element": document.querySelector("#b5"),"digit": 5},
    {"element": document.querySelector("#b6"),"digit": 6},
    {"element": document.querySelector("#b7"),"digit": 7},
    {"element": document.querySelector("#b8"),"digit": 8},
    {"element": document.querySelector("#b9"),"digit": 9},
];

// Array of operator button objects
let operators = [
    {"element": document.querySelector("#bPlus"),"operator": "+"},
    {"element": document.querySelector("#bMinus"),"operator": "-"},
    {"element": document.querySelector("#bTimes"),"operator": "*"},
    {"element": document.querySelector("#bDividedBy"),"operator": "/"},
];

/// Operator functions
let add = function(a ,b) {
    return Number(a) + Number(b);
}

let subtract = function(a ,b) {
    return Number(a) - Number(b);
}

let multiply = function(a ,b) {
    return Number(a) * Number(b);
}

let divide = function(a ,b) {
    return Number(a) / Number(b);
}

/// Operate function
let operate = function(a, b, operator) {
    if (operator === "+") {
        display.textContent = add(a, b);
        operandA = display.textContent;
    }

    if (operator === "-") {
        display.textContent = subtract(a, b);
        operandA = display.textContent;
    }

    if (operator === "*") {
        display.textContent = multiply(a, b);
        operandA = display.textContent;
    }

    if (operator === "/") {
        display.textContent = divide(a, b);
        operandA = display.textContent;
    }
}

let getOperator = function(displayContent, chosenOperator) {
    if (operatorPicked === true) {
        operandB = displayContent;
        operate(operandA, operandB, operator);
        operator = chosenOperator;
    } else {
        operatorPicked = true;
        operandA = displayContent;
        operator = chosenOperator;
    }
    newOperand = true
}

/// Add event listeners for digits
for (let i = 0; i < digits.length; i++) {
    let curDigit = digits[i];
    curDigit.element.addEventListener("click", () => {
        if (display.textContent === "0" || newOperand === true) {
            display.textContent = "";
            display.textContent += curDigit.digit;
            newOperand = false;
        } else {
            display.textContent += curDigit.digit;
        }
    });
}

/// Add event listeners for operators
for (let i = 0; i < operators.length; i++) {
    let curOperator = operators[i];
    curOperator.element.addEventListener("click", () => {
        getOperator(display.textContent,curOperator.operator)
    });
}

