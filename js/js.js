// Constants

const MAX_LENGTH = 11;

///// Variables

// Operation variables
let operandA;
let operandB;
let operator;

// Boolean variables
let operatorPicked = false;
let digitPicked = false;
let newOperand = false;
let evaluated = false;


//// Element variables
let display = document.querySelector("#output");

/// Buttons
let bEquals = document.querySelector("#bEquals")
let bClear = document.querySelector("#bAC")
let bBackspace = document.querySelector("#bBackspace")

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
    {"element": document.querySelector("#bDot"),"digit": "."},
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
    if (Number(a) === 0 || Number(b) === 0) { // THE ROCK
        display.remove();
        let img = document.createElement("img");
        img.src = "./images/rock.gif";
        document.getElementById("outputSection").appendChild(img);
        img.style.paddingLeft = "80px";
    }

    return Number(a) / Number(b);
}

/// Functions

// Operate
let operate = function(a, b, operator) {
    if (operator === "+") {

        let result = add(a, b).toString();

        if (result.length > MAX_LENGTH) {
            if (Number(result) > 99999999999) {
                result = "99999999999";
            } else {
                result = result.slice(0, MAX_LENGTH);
            }
        }

        display.textContent = result;
        operandA = display.textContent;

    }

    if (operator === "-") {

        let result = subtract(a, b).toString();

        if (result.length > MAX_LENGTH) {
            if (Number(result) > 99999999999) {
                result = "99999999999";
            } else {
                result = result.slice(0, MAX_LENGTH);
            }
        }

        display.textContent = result;
        operandA = display.textContent;

    }

    if (operator === "*") {

        let result = multiply(a, b).toString();

        if (result.length > MAX_LENGTH) {
            if (Number(result) > 99999999999) {
                result = "99999999999";
            } else {
                result = result.slice(0, MAX_LENGTH);
            }
        }

        display.textContent = result;
        operandA = display.textContent;

    }

    if (operator === "/") {

        let result = divide(a, b).toString();

        if (result.length > MAX_LENGTH) {
            if (Number(result) > 99999999999) {
                result = "99999999999";
            } else {
                result = result.slice(0, MAX_LENGTH);
            }
        }

        display.textContent = result;
        operandA = display.textContent;

    }
}

// Get operator
let getOperator = function(displayContent, chosenOperator) {
    if (operatorPicked === true && digitPicked === true) {
        operandB = displayContent;
        operate(operandA, operandB, operator);
    } else {
        operatorPicked = true;
        operandA = displayContent;
    }
    newOperand = true
    digitPicked = false;
    operator = chosenOperator;
}

/// Event listeners

// Event listeners for digits
for (let i = 0; i < digits.length; i++) {

    let curDigit = digits[i];

    curDigit.element.addEventListener("click", () => {

        if (curDigit.digit === "." && display.textContent.indexOf(".") !== -1) {

        } else {
            if (display.textContent === "0" && curDigit.digit !== "." || newOperand === true || evaluated === true) {
                display.textContent = "";
                display.textContent += curDigit.digit;
                newOperand = false;
                evaluated = false;
            } else if (display.textContent.length < MAX_LENGTH) {
                display.textContent += curDigit.digit;
            }
            digitPicked = true;
        }

    });
}

// Event listeners for operators
for (let i = 0; i < operators.length; i++) {
    let curOperator = operators[i];
    curOperator.element.addEventListener("click", () => {
        getOperator(display.textContent,curOperator.operator)
    });
}

// Event listener for "="
bEquals.addEventListener("click", () => {
    if (operatorPicked === true) {
        operandB = display.textContent;
        operate(operandA, operandB, operator)
        operatorPicked = false;
        evaluated = true;
    }
});

// Event listener for backspace
bBackspace.addEventListener("click", () => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0,display.textContent.length-1);
    } else {
        display.textContent = "0";
    }
});

// Event listener for clear
bClear.addEventListener("click", () => {
    operandA = "";
    operandB = "";
    operator = "";
    operatorPicked = false;
    digitPicked = false;
    newOperand = false;
    evaluated = false;
    display.textContent = "0";
});