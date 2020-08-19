/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net
*/

function solution(number) {
  let multipleArray = [];
  let multipleSum = 0;

  for (let i = 1; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      multipleArray.push(i);
    }
  }

  for (let i = 0; i < multipleArray.length; i += 1) {
    multipleSum += multipleArray[i];
  }

  return multipleSum;
}

console.log(solution(10));
// 23
