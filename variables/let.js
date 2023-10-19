// let keyword have block scope
let greet = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
// console.log(hello); // hello is not defined because of block scope,hello cant be used in outside of if block

// Variable declare with let can be updated but not redeclared

let name = "Aamir";

console.log(name); // Aamir

name = "Aamir Sohail Cheema";

console.log(name); // Aamir Sohail Cheema

// let name = "Aurangzaib";

console.log(name); //SyntaxError: Identifier 'name' has already been declared

// However, if the same variable is defined in different scopes, there will be no error
let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

/*
Hoisting of let
Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, 
the let keyword is not initialized. So if you try to use a let variable before declaration, 
you'll get a Reference Error
*/

console.log(marks);
let marks = 10; // ReferenceError: Cannot access 'marks' before initialization
