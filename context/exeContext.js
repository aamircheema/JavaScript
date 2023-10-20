var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);

console.log(square1);
console.log(square2);

/*
1-n is initialized and assigned a value of 5
2-We defined a function square() that accepts an argument n and returns the square of n.
3-We call the square() function and store the returned value in the square1 variable.
4-We call the square() function and store the returned value in the square2 variable.
5-Finally, it outputs both square1 and square2 
*/

/*
What is the Execution Context?
When the JavaScript engine scans a script file, it makes an environment called the Execution
Context that handles the entire transformation and execution of the code
*/

/* 
Types of execution context
Global execution context
The global execution context is created when a JavaScript script first starts to run, 
and it represents the global scope in JavaScript.

Function execution context
A function execution context is created whenever a function is called,
representing the function's local scope
*/

// Phases of the JavaScript Execution Context
// Creation Phase
// Execution Phase
