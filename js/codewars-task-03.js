/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. 
*/

const findShort = string =>
  string.split(' ').sort((a, b) => a.length - b.length)[0].length;

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones',
  ),
);

// function findShort(string) {
//   const arrarrayString = string.split(' ');
//   let smallestWord = arrarrayString[0];

//   for (let i = 0; i < arrarrayString.length; i += 1) {
//     if (arrarrayString[i].length < smallestWord.length) {
//       smallestWord = arrarrayString[i];
//     }
//   }

//   return smallestWord.length;
// }
