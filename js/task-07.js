// Использование for, charCodeAt
// Напиши код, который принимает строку символов в переменную source и выводит строку в переменную message.

const source = 'Привет!';
let message = '';

for (let i = 0; i < source.length; i += 1) {
  message += `${source[i]}: ${source.charCodeAt(i)},\n`;
}

console.log(message);