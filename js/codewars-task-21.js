/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

function solution(string) {
  const array = string.split('');
  let newArr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[i].toUpperCase()) {
      newArr.push(' ');
    }

    newArr.push(array[i]);
  }
  return newArr.join('');
}

console.log(solution('camelCasing'));
// 'camel Casing', 'Unexpected result'
console.log(solution('camelCasingTest'));
// 'camel Casing Test', 'Unexpected result'
