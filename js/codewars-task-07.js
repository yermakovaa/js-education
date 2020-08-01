/*
Take 2 strings s1 and s2 including only letters from ato z.Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  // 1. Create an array from s1 and s2 and sort alphabetically 
  const arrString = s1.split('').concat(s2.split('')).sort();
  
  // 2. Create new an array for result
  const arrStrResult = [];

  // 3. Create a loop
  for (let i = 0; i < arrString.length; i += 1) {
    if (!arrStrResult.includes(arrString[i])) {
      arrStrResult.push(arrString[i]);
    }
  }
  return arrStrResult.join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'));
// "aehrsty"
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'));
// "abcdefghilnoprstu"
console.log(longest('inmanylanguages', 'theresapairoffunctions'));
// "acefghilmnoprstuy"
