import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number: "));

for (let i = 1; i <= 10; i++) {
  console.log(n + " * " + i + " = " + n * i);
}
