import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number: "));

let temp = n;
let reverse = 0;

while (temp > 0) {
  // Get last digit
  let digit = temp % 10;

  // Add digit to reverse number
  reverse = reverse * 10 + digit;

  // Remove last digit
  temp = Math.floor(temp / 10);
}

console.log("Reverse Number is:", reverse);
