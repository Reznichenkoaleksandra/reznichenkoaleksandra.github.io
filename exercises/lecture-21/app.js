// Маємо рядок fruits:
let fruits = 'apple banana cantaloupe blueberries grapefruit';
// task 1 Перетворити рядок fruits у масив. Результат зберегти у масиві fruits. +

fruits = 'apple banana cantaloupe blueberries grapefruit'.split(' ');
// console.log(fruits);

// task 2  Використовуючи цикл for, вивести на консоль список елементів з масиву fruits. +

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// task 3 Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.+

// let n = 0;
// while (n < fruits.length) {
//     console.log(fruits[n]);
//     n++;
// }

// task 4  Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.+

// let x = 0;
// do {
//     console.log(fruits[x]);
//     x++
//  }
// while (x < fruits.length);

// task 5 Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// task 6 Маємо масив Numbs.
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
// let Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numb of Numbs) {
//     if (numb % 2 == 0) {
//         console.log(numb);
//    }
// }

// task 7 Маємо масив names:
// Додати 'Joker' в кінець масиву names:

// let names = ['Batman'];
// names.push('Joker');
// console.log(names);

// task 8  Маємо масив names:
// Додати 'Joker' на початок масиву names

// let names = ['Batman'];
// names.unshift('Joker');
// console.log(names);

// task 9 Маємо масив names:
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift

// let names = ['Batman', 'Joker', 'Bane'];
// names.unshift('Catwomen');
// console.log(names)

// task 10 Маємо масив names:
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...

// let names = ['Batman', 'Joker', 'Bane'];
// let newNames = ['Catwomen', ...names];
// console.log(newNames);

// task 11 Маємо масив names
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1

// let names = ['Batman', 'Joker', 'Bane'];
// names.splice(1, 0, 'Catwomen');
// console.log(names);

//task 12 Маємо масив names
// Видалити елементи 'Catwoman' і 'Joker' з масиву names:

// let names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// names.splice(1,2);
// console.log(names);

// task 13 Маємо масив names:
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names

// let names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// names.splice(1, 2, "Alfred");
// console.log(names);

//task 14 Маємо масив names:
// Перевірити чи існує рядок 'Alfred'
// у масиві names, і якщо не існує, додати його до кінця масиву.

// let names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// if (names.includes('Alfred')) {
//     console.log(names);
// }
// else {
//     names.push('Alfred')
//     console.log(names);
// }

// task 15 Маємо масив names:
// Перевірити, чи існує рядок 'Alfred' у масиві names,
// і якщо існує, видалити його з масиву.

// let names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// if (names.includes('Alfred')) {
//     names.splice(names.indexOf('Alfred'),1)
//     console.log(names);
// }
// else {
//     console.log(names);
// }