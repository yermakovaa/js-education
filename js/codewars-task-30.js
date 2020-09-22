/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str) {
  return str
    .split(' ')
    .map(el => {
      if (el === '?' || el === '!' || el === '.') {
        return el;
      } else {
        return `${el.slice(1)}${el[0]}ay`;
      }
    })
    .join(' ');
}

console.log(pigIt('Pig latin is cool !'));
// igPay atinlay siay oolcay !