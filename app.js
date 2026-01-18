"use strict";
const digits = document.querySelectorAll(".keypad.digits");
const operators = document.querySelectorAll(".keypad.operator");
const output = document.querySelector(".output");
const equalTo = document.querySelector(".equalTo");
const clearButton = document.querySelector(".AC");

function calculator() {
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

    function operate(op, operand1, operand2) {
        if (op == "+") {
            return add(operand1, operand2);
        } else if (op == "-") {
            return subtract(operand1, operand2);
        } else if (op == "/") {
            return divide(operand1, operand2);
        } else if (op == "*") {
            return multiply(operand1, operand2)
        };
    };
    let operator = null;
    let firstOperand = null;
    let secondOperand = null;
    let isActive = false;

    clearButton.addEventListener("click", () => {
        output.textContent = (newDigit += "e");
    });

    digits.forEach((digit) => {
        digit.addEventListener("click", (event) => {
            if (!isActive) {
                firstOperand = Number(event.target.textContent);
                output.append(firstOperand);
            }
            else if (isActive) {
                if (secondOperand == null) {

                    output.textContent = "";
                }
                secondOperand = Number(event.target.textContent);
                output.append(secondOperand);
            };
        });
    });

    operators.forEach((operate) => {
        operate.addEventListener("click", (event) => {
            isActive = true;
            operator = event.target.textContent;
            output.textContent = operator;
        });
    });

    equalTo.addEventListener("click", () => {
        const operation = operate(operator, firstOperand, secondOperand);
        console.log(operation);

        output.textContent = (operation);
    });
};
calculator();