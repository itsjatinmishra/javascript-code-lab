import promptSync from "prompt-sync";
const prompt = promptSync();

const simpleInterest = (p, t, r = 8) => (p * t * r) / 100;

let p = Number(prompt("Enter the Principal Amount: "));
let t = Number(prompt("Enter the Time Period (IN YEARS): "));

console.log(simpleInterest(p, t));
