function spreadOperator(...nums) {
  let total = 0;

  for (let n of nums) {
    total += n;
  }

  return total;
}

let nums = [25, 30, 40, 85, 95];

console.log(spreadOperator(...nums));
