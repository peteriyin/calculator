"use strict";
function add(x, y) {
    return x + y;
};
function subtract(x, y) {
    return x - y;
};
function multiply(x, y) {
    return x * y;
};
function divide(x, y) {
    return x / y;
};
const num1 = 3;
const num2 = 2;
const operator = "*";

function operate(operator, operand1, operand2) {
    if (operator == "+") {
        return add(operand1, operand2);
    } else if (operator == "-") {
        return subtract(operand1, operand2);
    } else if (operator == "/") {
        return divide(operand1, operand2);
    };
    return multiply(operand1, operand2);
};
console.log(operate(operator, num1, num2));