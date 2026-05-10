// The Rest Operator is used to collect
// multiple values into one variable.

function demoFun(...nums) {
  total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(demoFun(1, 2, 3, 4, 5, 6));
