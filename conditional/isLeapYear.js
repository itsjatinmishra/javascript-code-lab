import promptSync from "prompt-sync";

const prompt = promptSync();

let year = Number(prompt("Enter the year: "));

console.log(year);

if ((year % 4 == 0 && year % 400 != 0) || year % 400 == 0) {
  console.log("The year you have entered IS LEAP YEAR");
} else {
  console.log("The year you have entered IS NOT LEAP YEAR");
}
