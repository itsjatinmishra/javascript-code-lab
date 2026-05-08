import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number: "));

let sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log(sum);
