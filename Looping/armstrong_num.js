import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number: "));

let temp = n;
let count = 0;
while (temp > 0) {
  count += 1;
  temp = Math.floor(temp / 10);
}

let temp01 = n;

let result = 0;

while (temp01 > 0) {
  result += Math.pow(temp01 % 10, count);
  temp01 = Math.floor(temp01 / 10);
}

console.log(
  result == n ? "The Number is Armstrong !" : "The number is not Armstrong !",
);
