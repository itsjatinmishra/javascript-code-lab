// Explicit Conversion

let str = "100";
let num = Number(str); // Converts string → number

console.log(num, typeof num); // 100 "number"

let num2 = 1001;
let str2 = String(num2); // Converts number → string

console.log(str2, typeof str2); // "1001" "string"

// Implicit Conversion (Type Coercion)

// "+" operator with string → concatenation
console.log("5" + 2);
// Here, one operand is a string, so JavaScript converts 2 → "2"
// Result: "52" (string)

// Explicit conversion for calculation

let x = "20";
let y = Number(x);

console.log(y + 5);
