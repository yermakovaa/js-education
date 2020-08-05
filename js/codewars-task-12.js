/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
*/

function arithmetic(a, b, operator) {
  if (operator === 'add') {
    return a + b;
  }
  if (operator === 'subtract') {
    return a - b;
  }
  if (operator === 'multiply') {
    return a * b;
  }
  if (operator === 'divide') {
    return a / b;
  }
}

console.log(arithmetic(1, 2, 'add'));
// 3,"'add' should return the two numbers added together!"

console.log(arithmetic(8, 2, 'subtract'));
//  6, "'subtract' should return a minus b!"

console.log(arithmetic(5, 2, 'multiply'));
// 10, "'multiply' should return a multiplied by b!"

console.log(arithmetic(8, 2, 'divide'));
// 4, "'divide' should return a divided by b!"