// 1-2. Program to declare and print variables using var, let, and const

var name = "Jatin";
let x = 5;
const y = 25;
let z;

// y = 38;  ❌ Not allowed because const variables cannot be reassigned

console.log(name, x, y, z);

// 3. Operator precedence
console.log(5 + 6 * 10); // Output: 65

// Reassigning let variable
let city = "Delhi";
city = "Mumbai";
console.log(city);

// Redeclaring var (allowed)
var a = 10;
var a = 20;
console.log(a);

// Block scope example
{
  let block_a = 5;
  console.log(block_a);
}
// console.log(block_a); ❌ Not accessible outside block

// Function scope example
function test() {
  var b = 10;
  console.log(b);
}
test();

// Multiple variables
let uname = "Jatin",
  uage = 22,
  ucity = "Noida";

console.log(uname, uage, ucity);

// Swap variables (correct way)

// Method 1: Using temporary variable
let f_value = 5;
let s_value = 10;

let temp = f_value;
f_value = s_value;
s_value = temp;

console.log(f_value, s_value);

// Method 2: Without temporary variable (modern JS)
let a1 = 5;
let b1 = 10;

[a1, b1] = [b1, a1];

console.log(a1, b1);
