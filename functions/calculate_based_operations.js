import promptSync from "prompt-sync";

const prompt = promptSync();

function calcOps(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Division by zero is not allowed!";
      }
      return a / b;

    default:
      return "Please enter a valid operator!";
  }
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

console.log(calcOps(num1, num2, operator));
