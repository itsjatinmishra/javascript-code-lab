import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the value of N: "));

let first = 0,
  second = 1;

for (let i = 1; i <= n; i++) {
  process.stdout.write(first + " "); // same line
  let temp = first + second;
  first = second;
  second = temp;
}
