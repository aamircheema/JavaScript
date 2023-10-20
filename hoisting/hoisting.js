// Hoisting is mechanism is javascript in which functions and variables declarations
// are going to the top of scope

// Hoisting in var variables
console.log(age); // undefinded due to hoisting

var age = 10;
console.log(age); // 10

console.log(marks); // ReferenceError: marks is not defined

var marks = 14;

// Using an undeclared variable before its assignment will
// also throw a ReferenceError because no declaration was hoisted

// console.log(number); // ReferenceError: number is not defined
// number = 10;

/*
Variable hoisting with let and const
Variables declared with let and const are hoisted but not initialized 
with a default value. Accessing a let or 
const variable before it's declared will result in a ReferenceError
*/

// console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "aamir";

// console.log(school); // ReferenceError: Cannot access 'school' before initialization
const school = "UOL";

// Hoistin In fucntions
greet(); // Hello World
function greet() {
  console.log("Hello Wordl!");
}

sayHi();

let sayHi = () => console.log("Hello World!");
