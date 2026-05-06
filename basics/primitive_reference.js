let a = 10;
let b = a;

b = 20;
console.log(b);

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;

console.log(obj1.value);

// compare primitives
let x = 5;
let y = 5;
console.log(x === y); // return true because in primitive it directly compares the values

let o1 = { x: 1 };
let o2 = { x: 1 };

console.log(o1 === o2); // return false because in objects it does not directly compare the content it only compares the memory address !
