/* The scope of variable which decalred with var keyword can be global or fucntion 
when the variable is declared outside a function its scope is global and when declare 
in a function its scope is fucntion scope */

// Global Scope Variable
var message = "Hello";

function greeting() {
  // Fucntion scope variable
  var name = " Aamir";
  return message + name;
}

/* Variable declared with var keyword can be redeclare and updated in the same scope*/
console.log(message); // Hello

// Redeclaring the variable message
var message = "Hi";
console.log(message); // Hi
// Updating the variable message

message = "Value changed";
console.log(message); // Value changed

/* 
Hoisting is a JavaScript mechanism where variables and function 
declarations are moved to the top of their scope before code execution
*/

console.log(number); // Undefined instead of giving error
var number = 10;

// Problems with var
// it can be redeclared unintentionally which lead to errors

var age = 30;
if (true) {
  var age = 20;
}
console.log(age);
