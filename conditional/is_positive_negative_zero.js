import promptSync from "prompt-sync";

const prompt = promptSync();

let num = Number(prompt("Enter a Number (positive/negative/zero): "));
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
