import promptSync from "prompt-sync";

const prompt = promptSync();

let char = prompt("Enter a character: ").toLowerCase(); // here we are converting it into lower because if the input is Upper Case

if (char.length !== 1) {
  console.log("Please enter a single character");
} else if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("The character is a vowel");
} else {
  console.log("The character is not a vowel");
}
