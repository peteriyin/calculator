"use strict";
const digits = document.querySelectorAll(".keypad.digits");
const operators = document.querySelectorAll(".keypad.operator");
const output = document.querySelector(".output");
const equalTo = document.querySelector(".equalTo");
const clearButton = document.querySelector(".AC");
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");
const lightDarkmode = document.querySelector(".light-dark-mode");
const mainBody = document.querySelector(".main-body");
const keypadsContainer = document.querySelector(".keypads-container");
const keypads = document.querySelectorAll(".keypad");
const secondRow = document.querySelector(".second-row");

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
    let firstOperandOutput = null;
    let secondOperandOutput = null;

    clearButton.addEventListener("click", () => {
    });

    digits.forEach((digit) => {
        digit.addEventListener("click", (event) => {
            firstOperandOutput = Number(event.target.textContent);
            secondOperandOutput = Number(event.target.textContent);
            if (!isActive) {
                if (firstOperand == null) {
                    firstOperand = Number(event.target.textContent);
                    console.log(`first: ${firstOperand}`);
                    output.textContent = (firstOperand);
                }
                else if (firstOperand != null) {
                    firstOperand = (firstOperand * 10) + firstOperandOutput;
                    console.log(`firstoperand: ${firstOperandOutput}`);

                    output.textContent = (firstOperand);
                };
            }
            else if (isActive) {
                if (secondOperand == null) {
                    output.textContent = "";
                    output.textContent = secondOperand;
                }
                secondOperand = (secondOperand * 10) + secondOperandOutput;
                output.textContent = (secondOperand);
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
function light_mode() {
    lightMode.addEventListener("click", () => {
        mainBody.classList.add("light-dark-mode-container-js");
        lightDarkmode.classList.add("light-dark-mode-js");
        lightMode.classList.add("light-mode-js");
        darkMode.classList.add("dark-mode-js");
        keypadsContainer.classList.add("keypads-container-js");
        output.classList.add("output-js");

        keypads.forEach((keypad) => {
            keypad.classList.add("keypad-js");
        });

        digits.forEach((digit) => {
            digit.style.color = "black"
        });
    });
};
light_mode();

function dark_mode() {
    darkMode.addEventListener("click", () => {
        mainBody.classList.remove("light-dark-mode-container-js");
        lightDarkmode.classList.remove("light-dark-mode-js");
        lightMode.classList.remove("light-mode-js");
        darkMode.classList.remove("dark-mode-js");
        keypadsContainer.classList.remove("keypads-container-js");
        output.classList.remove("output-js");

        keypads.forEach((keypad) => {
            keypad.classList.remove("keypad-js");
        });

        digits.forEach((digit) => {
            digit.style.color = "white"
        });
    })
};
dark_mode();
calculator();