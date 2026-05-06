import promptSync from "prompt-sync";

const prompt = promptSync();

let marks = Number(prompt("Enter the marks: "));

if (isNaN(marks)) {
  console.log("Invalid input!");
} else if (marks < 0 || marks > 100) {
  console.log("Marks should be between 0 and 100");
} else if (marks >= 90) {
  console.log("GRADE A");
} else if (marks >= 70) {
  console.log("GRADE B");
} else if (marks >= 50) {
  console.log("GRADE C");
} else {
  console.log("GRADE D");
}
