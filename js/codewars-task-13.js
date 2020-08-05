/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  const array = x.split(' ');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let newArray = array.map(function (word) {
    let total = 0;
    for (let i = 0; i < word.length; i += 1) {
      total += alphabet.indexOf(word[i]);
    }
    return total;
  });

  return array[newArray.indexOf(Math.max(...newArray))];
}

console.log(high('man i need a taxi up to ubud'));
// 'taxi'
console.log(high('what time are we climbing up the volcano'));
// 'volcano'
console.log(high('take me to semynak'));
// 'semynak'
