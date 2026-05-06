import promptSync from "prompt-sync";

const prompt = promptSync();

let num1 = Number(prompt("Enter the First Number: "));
let num2 = Number(prompt("Enter the Second Number: "));
let operator_input = prompt("Enter the operator (+, -, *, /): ");

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid number input!");
} else {
  switch (operator_input) {
    case "+":
      console.log("Result:", num1 + num2);
      break;

    case "-":
      console.log("Result:", num1 - num2);
      break;

    case "*":
      console.log("Result:", num1 * num2);
      break;

    case "/":
      if (num2 === 0) {
        console.log("Cannot divide by zero!");
      } else {
        console.log("Result:", num1 / num2);
      }
      break;

    default:
      console.log("Invalid operator!");
  }
}
