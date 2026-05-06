import promptSync from "prompt-sync";

const prompt = promptSync();

let day = Number(prompt("Enter the Number from 1 to 7: "));
if (isNaN(day)) {
  console.log("Invalid number input!");
} else {
  switch (day) {
    case 1:
      console.log("The day is sunday");
      break;
    case 2:
      console.log("The day is monday");
      break;
    case 3:
      console.log("The day is tuesday");
      break;
    case 4:
      console.log("The day is wednesday");
      break;
    case 5:
      console.log("The day is thursday");
      break;
    case 6:
      console.log("The day is friday");
      break;
    case 7:
      console.log("The day is saturday");
      break;
    default:
      console.log("Invalid Number");
  }
}
