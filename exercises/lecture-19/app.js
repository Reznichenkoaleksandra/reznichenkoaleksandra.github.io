// task 1
// Маємо код Чи мають рядки str1 та str2 однакову довжину.
// Перевірити на рівність(недбалу та строгу) рядки str1 та str2.

// let str1 = 'I\'m a string!';
// let str2 = "I'm a string!";
// let results = str1 == str2;
// console.log(results);

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
let results = str1 === str2;
console.log(results);

// рядки мають однакову довжину. символ "\", використовується, для того щоб екранувати спец символ

// Task 2 -  Повернути перший символ рядка string5.
//  Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';
console.log(string5[0]);
console.log(string5.charAt(0));

// task 3  - повернути символ J рядка str3:
let str3 = "Hello Javascript";
console.log(str3.indexOf('J'));
console.log(str3[6]);
// task 4 - використовуючи індекс,
//  отримати доступ до останнього символу рядка двома способами
console.log(str3[str3.length - 1]);  // 1 
// console.log(str3.length);
// console.log(str3[15]);
console.log(str3.charAt(str3.length - 1)); // 2

// task 5 - Напишіть три варіанти функції lastChar, що повертає останній символ рядка
// 1
function lastChar (){
  return str3[str3.length - 1]; 
}
console.log(lastChar());
// 2
function lastChar1() {
  return str3.charAt(str3.length - 1);
}
console.log(lastChar1());
// 3
function lastChar2() {
  return str3.slice(-1);
}
console.log(lastChar2());

// task 6- Використовуючи метод concat, вивести на консоль: 
// When candles are out, all cats are grey

let a = 'When candles are out,';
let b = 'all cats are grey.';

console.log(a.concat(b));

// task 7 -Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль,
// щоб результат виглядав так: Fifteen is the same as 15
let fact = "Fifteen is the same as"
let a1 = 5;
let b1 = 10;

fact = fact + " " + (a1 + b1);
console.log(fact);

//task - 8 - Напишіть функцію getFullName, що повертає результат: "Tom Cat"
let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastName) {
  return  firstName +" " +lastName  ;
}
console.log(getFullName(firstName, lastName));

// task 9 Напишіть функцію greeting, що використовує виклик функції getFullName
// та повертає такий результат: Hello, Tom Cat!

// function greeting(getFullName) {
//    return `Hello, ${getFullName}!`
  
// }
// console.log(greeting(getFullName(firstName, lastName)));

function greeting(firstName, lastName) {
  return "Hello " + getFullName(firstName, lastName) +"!";
  
}
console.log (greeting(firstName, lastName))


// task 10 Використовуючи функцію greeting, створити такий шаблон:
// <div><h1>Hello, Tom Cat!</h1></div>


console.log(`<div><h1>${greeting(firstName, lastName)}</h1></div>`)

console.log("<div><h1>" + greeting(firstName, lastName) + "</h1></div>")
//  чи можна спростити даний вираз?

// task 11 Маємо наступний код:
let string1 = "  The name of our game  ";
// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

console.log(string1.trim(string1));
console.log(string1.trimStart(string1));
console.log(string1.trimEnd(string1));

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'- не можу зрозуміти як отримати даний результат =(
console.log(phoneNumber.length);

console.log(phoneNumber.split(' ')[2]);
console.log(phoneNumber.slice(3));



// task 12 Маємо наступний код:
let sentence = 'Always look on the bright side of life';
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
console.log(sentence.includes('look up')); //false
console.log(sentence.includes('look on')); //true
console.log(sentence.includes('look on', 8)); //false

// task 13 Маємо наступний код
let sentence1 = 'Always look on the bright side of life';
// Знайти індекс символу 'l'
// Знайти індекс символу 'l', починаючи з 3-ї позиції
// Знайти індекс символу 'L'
console.log(sentence1.indexOf('l')); //1
console.log(sentence1.indexOf('l', 3)); //7
console.log(sentence1.indexOf('L'));//-1  або так (відсутній)
console.log(sentence1.indexOf('l'.toLocaleUpperCase()));//-1 (відсутній)

// task 14 Маємо наступний код:
let sentence2 = 'Always look on the bright side of life';
// Отримати підрядок 'look on the bright side of life'
// Отримати підрядок 'Always'
// Отримати підрядок 'look'

console.log(sentence2.substring('7'));
console.log(sentence2.split(' ')[0]);
console.log(sentence2.split(' ')[1]);

// task 15
// Створити регулярний вираз, який призначений для
// перевірки імені користувача, що може містити цифри,
// літери у нижньому регістрі та символи - і _
// Довжину імені користувача встановити від 8 до 16 знаків.

// \w: відомий як символ слова, відповідає будь-якому символу слова, наприклад a–z, 0–9 і
// підкреслення (_). Також можна записати як [a-z0–9_].

const pattern = /^[a-z0-9_-]{8-16}$/;
function validate(name11) {
   const pattern = /^[\w-]{8,16}$/;//or
  // const pattern = /^[a-z_0-9-]{8,16}$/;
  let matched = name11.match(pattern);
  if (pattern.test(name11)) {
    console.log('name is valid', matched);
    return true;
  }
  else {
    console.log('name is not valid', matched);
    return false;
  }
}
name11 = "john-dou99_";
validate(name11);

// task 16
// Створити регулярний вираз,
// який призначений для перевірки email на коректність.

// const pattern1 = /^[\w-]{2,18}@[a-z]{2,8}.[a-z]{1,3}$/;
function validate1(email) {
  // const pattern1 = /^[\w-]{2,18}@[a-z]{2,8}.[a-z]{1,3}$/;
  const pattern1 = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-_]{2,}.[a-z]{1,}$/;
  let match = email.match(pattern1);
  if (pattern1.test(email)) {
    console.log('email is valid', match);
    return true;
  }
  else {
    console.log('email is not valid', match);
    return false;
  }
}
email = 'johndou@gmail.com';
validate1(email);

// Маємо наступний код:
let sentence3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
// Напишіть функцію truncateText скорочення тексту до 50 символів,
//  використовуючи метод substring
console.log(sentence3.length);

function truncateText(sentence3) {
  return sentence3.substring(0, 50);
}
console.log(truncateText(sentence3));
// Напишіть функцію truncateText скорочення тексту до 50 символів,
// використовуючи метод substr
function truncateText1(sentence3) {
  return sentence3.substr(0,50);
}
console.log(truncateText1(sentence3));
// console.log(truncateText(sentence3).length);
// console.log(truncateText1(sentence3).length);