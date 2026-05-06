import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the value of N: "));

sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("The sum of the natural number is: " + sum);
