import promptSync from "prompt-sync";

const prompt = promptSync();

let num = Number(prompt("Enter the number: "));

if (isNaN(num)) {
  console.log("Invalid input!");
} else if (num < 10 || num > 50) {
  console.log("Range should be between 10 and 50");
} else if (num % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}
