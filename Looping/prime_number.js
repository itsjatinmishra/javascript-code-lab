import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number: "));

let isPrime = true;

// Prime numbers are greater than 1
if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("The number you have entered is prime!");
} else {
  console.log("The number you have entered is not prime!");
}
