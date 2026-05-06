import promptSync from "prompt-sync";

const prompt = promptSync();

let totalAmount = Number(prompt("Enter the Total bill Amount: "));

if (isNaN(totalAmount)) {
  console.log("Please enter a valid number!");
} else if (totalAmount < 0) {
  console.log("Amount cannot be negative!");
} else if (totalAmount > 1000) {
  let discount = totalAmount * 0.05;
  let finalAmount = totalAmount - discount;

  console.log("You got 5% discount:", discount);
  console.log("Final Amount to pay:", finalAmount);
} else {
  console.log("No discount applied.");
  console.log("Total Amount to pay:", totalAmount);
}
