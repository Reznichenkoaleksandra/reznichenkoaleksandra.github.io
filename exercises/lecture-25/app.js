// task 1
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.

const list = ['html', 'css', 'javascript', 'react.js'];

let ul = document.createElement('ul');

list.forEach(function (item) {
  let li = document.createElement('li')
  li.textContent = item;
  ul.append(li);
});

document.body.append(ul)

// task 2
// Використовуючи метод createElement, створити впорядкований список 
// на основі масиву listWithHref, де кожний елемент списку є тегом a 
// з відповідним посиланням.Наприклад, для першого елемента списку:
  // <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];


let ol = document.createElement('ol');

listWithHref.forEach(function (n) {
  let listItem = document.createElement('li');
  let listLink = document.createElement('a');
  listLink.textContent = Object.keys(n);
  listLink.href = Object.values(n);
  ol.append(listItem);
  listItem.append(listLink);
});

document.body.append(ol)

// task 3 Використовуючи метод createElement, створити таблицю на основі масиву students.
//  Заголовки стовпчиків таблиці - firstName, lastName, degree.
//  Встановити для заголовків стовпчиків таблиці css - властивості:
// background - color: blue; color: azure; Додайте таблицю на сторінку.

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

let table = document.createElement('table');
table.innerHTML = `
<tr class="table-header">
  <th>firstName</th>
  <th>lastName</th>
  <th>degree</th>
</tr>
  `
students.forEach(student => {
  table.innerHTML += `
  <tr class="table-row">
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.degree}</td>
  </tr>
  `
})
  
document.body.append(table)