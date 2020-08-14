/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

const removeChar = function (str) {
  const strArr = str.split('');
  const delStartArr = strArr.shift();
  const delEndtArr = strArr.pop();

  return strArr.join('');
}



console.log(removeChar('eloquent'));
// 'loquen'
console.log(removeChar('country'));
// 'ountr'
console.log(removeChar('person'));
// 'erso'
console.log(removeChar('place'));
// 'lac'