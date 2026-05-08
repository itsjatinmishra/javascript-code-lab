// GLOBAL SCOPE
//    |
//    |---- person object
//              |
//              |---- normalFunction()  -> this = person
//              |
//              |---- arrowFunction()   -> this = GLOBAL

global.name = "Global Jatin";

const person = {
  name: "Object Jatin",

  // NORMAL FUNCTION
  // -> Normal functions create their own 'this'
  // -> Here 'this' refers to the person object
  normalFunction: function () {
    console.log("Normal Function:", this.name);
  },

  // ARROW FUNCTION
  // -> Arrow functions do NOT create their own 'this'
  // -> They take 'this' from the parent/global scope
  arrowFunction: () => {
    console.log("Arrow Function:", global.name);
  },
};

person.normalFunction();
person.arrowFunction();
