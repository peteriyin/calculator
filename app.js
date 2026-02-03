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
const division = document.querySelector(".division");
const multiplication = document.getElementById("multiplication");

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
        } else if (op == division.textContent) {
            return divide(operand1, operand2);
        } else if (op == multiplication.textContent) {
            return multiply(operand1, operand2)
        };
    };
    let operator = null;
    let firstOperand = null;
    let secondOperand = null;
    let isActive = false;
    let firstOperandOutput = null;
    let secondOperandOutput = null;
    let result = null;

    clearButton.addEventListener("click", () => {
    });

    digits.forEach((digit) => {
        digit.addEventListener("click", (event) => {
            firstOperandOutput = Number(event.target.textContent);
            secondOperandOutput = Number(event.target.textContent);
            if (!isActive) {
                if (firstOperand == null) {
                    firstOperand = Number(event.target.textContent);
                    output.textContent = (firstOperand);
                }
                else if (firstOperand != null) {
                    firstOperand = (firstOperand * 10) + firstOperandOutput;
                    output.textContent = (firstOperand);
                };
                console.log(`first: ${firstOperand}`);

            }
            else if (isActive) {
                if (secondOperand == null) {
                    secondOperand = Number(event.target.textContent)
                    output.textContent = secondOperand;
                }
                else if (secondOperand != null) {
                    secondOperand = (secondOperand * 10) + secondOperandOutput;
                    output.textContent = (secondOperand);
                };
                console.log(`second: ${secondOperand}`);
            };
        });
    });


    operators.forEach((symbol) => {
        symbol.addEventListener("click", (event) => {
            if (secondOperand) {
                result = operate(operator, firstOperand, secondOperand);
                output.textContent = Number(result.toFixed(5));
                firstOperand = result;
                secondOperand = null;
            };
            isActive = true;
            operator = event.target.textContent;
            console.log(`operator: ${operator}`);
        });
    });

    equalTo.addEventListener("click", () => {
        try {
            result = operate(operator, firstOperand, secondOperand);
            output.textContent = Number(result.toFixed(5));
            if (!secondOperand) {
                throw new TypeError("No second operator");
            }
        } catch (error) {
            console.error("Incomplete Expression: No operator");
        };
        console.log(`equal to: ${result}`);
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
            digit.style.color = "black";
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
            digit.style.color = "white";
        });
    });
};
dark_mode();
calculator();