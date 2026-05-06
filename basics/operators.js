// ===============================
// 1. Simple Interest
// ===============================
let p1 = 1000,
  r1 = 5,
  t1 = 2;
let si1 = (p1 * r1 * t1) / 100;
console.log("Simple Interest:", si1);

// ===============================
// 2. Circle (Area & Perimeter)
// ===============================
let r2 = 5;
let area2 = 3.14 * r2 * r2;
let perimeter2 = 2 * 3.14 * r2;

console.log("Area:", area2, "Perimeter:", perimeter2);

// ===============================
// 3. Celsius → Fahrenheit
// ===============================
let c3 = 30;
let f3 = (c3 * 9) / 5 + 32;
console.log("Fahrenheit:", f3);

// ===============================
// 4. Leap Year
// ===============================
let year4 = 2024;

if ((year4 % 4 === 0 && year4 % 100 !== 0) || year4 % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// ===============================
// 5. Positive / Negative / Zero
// ===============================
let num5 = -5;

if (num5 > 0) console.log("Positive");
else if (num5 < 0) console.log("Negative");
else console.log("Zero");

// ===============================
// 6. Largest of 3 Numbers
// ===============================
let a6 = 10,
  b6 = 20,
  c6 = 15;

if (a6 > b6 && a6 > c6) console.log("Largest:", a6);
else if (b6 > c6) console.log("Largest:", b6);
else console.log("Largest:", c6);

// ===============================
// 7. Marks & Percentage
// ===============================
let total7 = 300;
let obtained7 = 240;

let percent7 = (obtained7 / total7) * 100;
console.log("Percentage:", percent7);

// ===============================
// 8. Pass / Fail
// ===============================
let marks8 = 35;

if (marks8 >= 33) console.log("Pass");
else console.log("Fail");

// ===============================
// 9. Gross Salary
// ===============================
let basic9 = 10000;
let hra9 = basic9 * 0.2;
let da9 = basic9 * 0.1;

let gross9 = basic9 + hra9 + da9;
console.log("Gross Salary:", gross9);

// ===============================
// 10. Even / Odd
// ===============================
let num10 = 7;

if (num10 % 2 === 0) console.log("Even");
else console.log("Odd");

// ===============================
// 11. == vs ===
// ===============================
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");

// ===============================
// 12. Pre / Post Increment
// ===============================
let x12 = 5;
console.log("Pre-increment:", ++x12);
console.log("Post-increment:", x12++);
console.log("Final value:", x12);

// ===============================
// 13. Pre / Post Decrement
// ===============================
let x13 = 5;
console.log("Pre-decrement:", --x13);
console.log("Post-decrement:", x13--);
console.log("Final value:", x13);

// ===============================
// 14. Login Condition
// ===============================
let user14 = "admin";
let pass14 = "1234";

if (user14 === "admin" && pass14 === "1234") {
  console.log("Login Success");
} else {
  console.log("Login Failed");
}

// ===============================
// 15. Range Check
// ===============================
let num15 = 15;

if (num15 >= 10 && num15 <= 20) {
  console.log("In range");
} else {
  console.log("Out of range");
}

// ===============================
// 16. Type Coercion
// ===============================
console.log('"10" - 5 =', "10" - 5);
console.log('"10" + 5 =', "10" + 5);
