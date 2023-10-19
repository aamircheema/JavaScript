// const variables have block scope

if (true) {
  const age = 20;
  console.log(age); // 20
}

//console.log(age); // ReferenceError: age is not defined

/*
const cannot be updated or re-declared This means that the value of a variable declared with
 const remains the same within its scope. It cannot be updated or re-declared.
*/

const marks = 20;
console.log(marks); // 20

marks = 30;
//console.log(marks); // TypeError: Assignment to constant variable.

const marks = 30;
console.log(marks); // SyntaxError: Identifier 'marks' has already been declared
