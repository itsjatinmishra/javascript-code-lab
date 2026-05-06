import promptSync from "prompt-sync";

const prompt = promptSync();

let first = Number(prompt("Enter the First: "));
let second = Number(prompt("Enter the Second: "));
let third = Number(prompt("Enter the Third: "));

if (first > second) {
  if (first > third) {
    console.log("First is Greater:", first);
  } else {
    console.log("Third is Greater:", third);
  }
} else {
  if (second > third) {
    console.log("Second is Greater:", second);
  } else {
    console.log("Third is Greater:", third);
  }
}
