
function calculate(operation, initialValue, numbers) {
 let result  = initialValue;
 for (const number of numbers) {
   result = operation(result, number);
 }
 return result;
}


// sum() - це функція, яка описує операцію додавання. 
function sum(n1, n2) {
   return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
   return n1 * n2;
}

// task 1
// Функція calculate() приймає масив чисел як аргумент і повертає суму:
// Зробити calculate() функцією вищого порядку, змусивши
// її підтримувати операцію додавання над масивом чисел та операцію множення над масивом чисел

console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));


// task 2 Маємо масив student_names
let student_names = ["Wick", "Malcolm", "Smith"]

// Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:
student_names.map((item, index, student_names) => {
    console.log(`name: ${item}| index: ${index}| array:[${student_names}]`)
 })

//  task 3 Маємо масив об'єктів students_information,
// що представляє результати іспитів кожного студента у полі degree:


let students_information = [
    {"name": "Wick", "degree": 375},
    {"name": "Malcolm", "degree": 405},
    {"name": "Smith", "degree": 453},
]

// Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді:
let max = 600;
students_information.map((studentResult) => {
    let persent = (studentResult.degree / max) * 100;
    console.log({...studentResult, persent})
})

// task 4 Маємо масив :
let arrNumbers = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
// Використовуючи метод reduce, звести масив до одномірного
let reduce = arrNumbers.reduce((a, b) => {
    return a.concat(b);
}, []);
console.log(reduce);

// task 5
// Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.


let arr = ["Algorithm", "Data Structure", "Operating System", "html"];

Array.prototype.upperCase = function () {
    let n;
    for (n = 0; n < this.length;  n++ ){
        this[n] = this[n].toUpperCase();
    }
}
function myFunc() {
    arr.upperCase();
    console.log(arr);
}

myFunc()