import promptSync from "prompt-sync";

const prompt = promptSync();

let username = prompt("Enter the Username: ");
let password = prompt("Enter the Password: ");

if (username === "demo" && password === "admin") {
  console.log("Login Successfully");
} else {
  console.log("Invalid Credentials");
}
