/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.
*/

function solve(str) {
  let arrString = [...str];
  let arr = new Array(arrString.length);

  arrString = arrString.reverse();
  // console.log(arrString);

  for (let i = 0; i < arrString.length; i += 1) {
    if (arrString[i] === ' ') {
      arrString.splice(i, 1);
    }
  }
  // console.log(arrString);

  for (let i = 0; i < arrString.length; i += 1) {
    arr[i] = arrString[i];
  }

  for (let i = 0; i < str.length; i += 1) {
    let newArr = [...str];
    if (newArr[i] === ' ') {
      arr.splice(i, 0, ' ');
    }
  }
  return arr.join('');
}

console.log(solve('codewars'));
// "srawedoc"
console.log(solve('your code'));
// "edoc ruoy"
console.log(solve('i love codewars'));
// 's rawe docevoli'
console.log(
  solve(
    'nomu jj u a qyp hbb teexkqnqo u i e sivpdk ofomdgj m ten r bkkuqpzlfo g iowq rrj ng au jtyyi f vi ng xgxuoli v u dilkgb w k fsyy gcwa a odhmpo bmwb avru aa c ra kagc bs b fh mt rdjxbokwvn p dwfppnherpl es ebq t jj btjh a dz ronci l n n t nbus pwis me rl xzmi lvjc'
  ),
);