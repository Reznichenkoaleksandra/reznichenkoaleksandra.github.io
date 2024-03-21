const classes = ['first', 'second', 'third', 'fourth'];

// task 1 Отримати всі елементи з тегом h1.
// Вивести на консоль тип отриманого об'єкту та його розмір.
// Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.

let h1 = document.getElementsByTagName('h1');
console.dir(h1)
console.log(typeof (h1), h1.length);
for (let i = 0; i < h1.length; i++){
    console.log(h1[i])
};

// task 2 Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1.
// Встановити для нього стиль background - color = "gold"

let p1 = document.querySelector('#p1');
p1.style.backgroundColor = 'gold';

// task 3
// Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2.
// Встановити для нього стилі background - color: gold; color: blue; font - size: 2rem;

let p2 = document.querySelector('#p2');
p2.style.cssText = 'background-color: gold; color: blue; font-size: 2rem;';

// task 4
// Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3.
// Призначити для нього клас third

let p3 = document.querySelector('#p3');
p3.className = 'third';

// task 5 Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4.
//  Призначити для нього класи fourth та border

let p4 = document.querySelector('#p4');
p4.className = 'fourth , border';

// task 6 Знайти всі елементи з класом container.
// Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.

let cont = document.getElementsByClassName('container');
for (let c = 0; c < cont.length; c++){
    console.log(cont[c].firstElementChild);
}

// task 7 Знайти всі елементи з класом container. 
// Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.

for ( c = 0; c < cont.length; c++){
    console.log(cont[c].firstElementChild.innerHTML); // or innerText 
}

// task 8 Знайти колекцію всіх елементів з селектором '.container header',
//  зберегти її в змінній headers.Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином

let headers = document.getElementsByTagName('header')
console.log(headers);
// перший залишити h1 // другий замінити на h2 // третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class

for (let h = 0; h < headers.length; h++){
    console.log(headers[h])
    headers[1].innerHTML = "<h2 class='title' id='second-title'>Second Title</h2>"
    headers[2].innerHTML = "<h3 class='title' id='third-title'>Third Title</h3>"
    headers[3].innerHTML = "<h4 class='title' id='fourth-title'>Fourth Title</h4>"
}

// task 9 Використовуючи цикл for для колекції headers
// та масив classes, додати до отриманих тегів - заголовків класи таким чином
// до h1 додати клас first  // до h2 додати клас second
// до h3 додати клас third  // до h4 додати клас fourth
for (let h = 0; h < headers.length; h++){
    headers[0].classList.add('first');
    headers[1].classList.add('second');
    headers[2].classList.add('third');
    headers[3].classList.add('fourth');
}
