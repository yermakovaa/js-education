/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

function moveZeros(arr) {
  return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));

// function moveZeros(arr) {
//   let noZeroArr = [];
//   let zeroArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== 0) {
//       noZeroArr.push(arr[i]);
//     } else {
//       zeroArr.push(arr[i]);
//     }
//   }

//   return noZeroArr.concat(zeroArr);
// }