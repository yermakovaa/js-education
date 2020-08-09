/*
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function compareNumbers(a, b) {
  return a - b;
}

function highestRank(arrNum) {
  const sortArrNum = arrNum.sort(compareNumbers);

  let previous = sortArrNum[0];
  let popular = sortArrNum[0];
  let count = 1;
  let maxCount = 1;

  for (let i = 1; i < sortArrNum.length; i += 1) {
    if (sortArrNum[i] == previous) {
      count += 1;
    } else {
      if (count >= maxCount) {
        popular = sortArrNum[i - 1];
        maxCount = count;
      }
      previous = sortArrNum[i];
      count = 1;
    }
  }

  return count >= maxCount ? sortArrNum[sortArrNum.length - 1] : popular;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([4, 6, 7, 8, 10, 10, 10, 12, 12]));
console.log(highestRank([4, 6, 7, 8, 12, 10, 10, 10, 12, 12]));
