/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
function compareNumbers(a, b) {
  return a - b;
}

function findOdd(arrayNum) {
  const sortArrNum = arrayNum.sort(compareNumbers);
  let repeatNum = 0;

  for (let i = 0; i < sortArrNum.length; i += 1) {
    for (let j = 0; j < sortArrNum.length; j += 1) {
      if (sortArrNum[i] === sortArrNum[j]) {
        repeatNum += 1;
      }
    }
    if (repeatNum % 2 !== 0) {
      return sortArrNum[i];
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
// -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
// 5
console.log(findOdd([10]));
// 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
// 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
// 1
