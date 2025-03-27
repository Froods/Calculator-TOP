//// Variables

// Operation variables
let operandA;
let operandB;
let operator;

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

/// Operator functions
let add = function(a ,b) {
    return a + b;
}

let subtract = function(a ,b) {
    return a - b;
}

let multiply = function(a ,b) {
    return a * b;
}

let divide = function(a ,b) {
    return a / b;
}

/// Operate function
let operate = function(a, b, operator) {
    if (operator = "+") {
        return add(a, b);
    }

    if (operator = "-") {
        return subtract(a, b);
    }

    if (operator = "*") {
        return multiply(a, b);
    }

    if (operator = "/") {
        return divide(a, b);
    }
}

/// Add event listeners for all digits
for (let i = 0; i < digits.length; i++) {
    let curDigit = digits[i];
    curDigit.element.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }  
        display.textContent += curDigit.digit;
    });
}

