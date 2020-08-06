/* 
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. 
Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is: " *\n ***\n*****\n ***\n *\n"
*/

function diamond(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  let botDiam = '';
  let botCount = 0;
  for (let i = n; i > 0; i -= 2) {
    let area = ' '.repeat(botCount);
    botDiam += `${area}${`*`.repeat(i)}\n`;
    botCount += 1;
  }


  let topDiam = '';
  let topCount = botCount - 1;

  for (let i = 1; i < n; i += 2) {
    let area = ' '.repeat(topCount);
    topDiam += `${area}${`*`.repeat(i)}\n`;
    topCount -= 1;
  }

  return topDiam.concat(botDiam);
}

console.log(diamond(5));
console.log(diamond(13));
console.log(diamond(9));
console.log(diamond(2));
console.log(diamond(-1));
console.log(diamond(0));



