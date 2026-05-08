let n = 20;

for (let i = 1; i <= n; i++) {
  console.log(i);

  if (i == 13) {
    break;
  }
}

console.log("This is the second question");

let k = 15;

for (let i = 1; i <= 15; i++) {
  // Skip multiples of 3
  if (i % 3 == 0) {
    continue;
  }

  console.log(i);
}
