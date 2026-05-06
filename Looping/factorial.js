import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the value of N: "));

if (isNaN(n) || n < 0) {
  console.log("Please enter a valid non-negative number");
} else {
  let fact = 1;

  if (n === 0 || n === 1) {
    console.log(1);
  } else {
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(fact);
  }
}
