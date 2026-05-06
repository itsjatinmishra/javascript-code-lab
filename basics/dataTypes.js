let str = "Hello";
let num = 100;
let isTrue = true;
let nu_val = null;
let un_def;
console.log(typeof str, typeof num, typeof isTrue);
console.log(typeof nu_val, typeof un_def);

// Array
let arr = [1, 2, 3];
console.log(arr);

// Objects
let person = {
  name: "Jatin",
  age: 22,
};
console.log(person.name);

// Modify objects value
person.name = "Jatin Mishra";
person.age = 24;

console.log(person);

// Dynamic typing
let x = 10;
x = "Hello";
console.log(x);
