const alert = document.querySelector('.alert');
// task 1 Знайти на сторінці кнопку з класом btn-primary.
// Призначте знайденому елементу подію onclick.Написати функцію обробки події onclick,
// що додає CSS - клас alert - primary до елемента з id = alert та змінює значення властивості textContent
// цього елемента на "A simple primary alert—check it out!".

let btnPrimary = document.querySelector('.btn-primary');
let alertContent = document.querySelector('.alert');
btnPrimary.onclick = function () {
    alertContent.className = 'alert-primary';
    alertContent.textContent='A simple primary alert—check it out!'
}

// task 2 Знайти на сторінці кнопку з класом btn-secondary.
// Додати до кнопки прослуховувач події "click".
// Написати функцію обробки події click,
// що додає CSS - клас alert - primary до елемента з id = alert  (secondary class)
// та змінює значення властивості textContent цього елемента на
// "A simple secondary alert—check it out!"

let btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', () => {
    alertContent.className = 'alert-secondary';
    alertContent.textContent='A simple secondary alert—check it out!'
} ) 

// task 3 Знайти на сторінці кнопку з класом btn-success.
// Додати до кнопки прослуховувач події "mouseover".
// Написати функцію обробки події mouseover, що додає CSS - клас alert - success
// до елемента з id = alert та змінює значення властивості textContent цього
// елемента на "A simple success alert—check it out!"

// Додати до кнопки прослуховувач події "mouseout". 
// Написати функцію обробки події mouseout, що видаляє CSS - клас alert - success
//  з елемента alert та змінює значення властивості 
//  textContent цього елемента на пустий рядок.

let btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseover', () => {
    alertContent.className = 'alert-success';
    alertContent.textContent='A simple success alert—check it out!'
})
btnSuccess.addEventListener('mouseout', () => {
    alertContent.classList.remove('alert-success');
    alertContent.textContent = '';
})

// task 4 Знайти на сторінці кнопку з класом btn-danger.
// Додати до кнопки прослуховувач події "focus".
// Написати функцію обробки події focus, що додає CSS - клас alert - danger
// до елемента з id = alert та змінює значення властивості
// textContent цього елемента на "A simple danger alert—check it out!"
// Додати до кнопки прослуховувач події "focusout".
// Написати функцію обробки події focusout, що видаляє CSS - клас alert - danger
// з елемента alert та змінює значення властивості textContent цього
// елемента на пустий рядок.

let btnDanger = document.querySelector('.btn-danger');

btnDanger.addEventListener('focusin', () => {
    alertContent.className = 'alert-danger';
    alertContent.textContent='A simple danger alert—check it out!'
})
btnDanger.addEventListener('focusout', () => {
    alertContent.classList.remove('alert-danger');
    alertContent.textContent = '';
})

// task 5 Знайти на сторінці кнопки з класом btn-dark та btn-light.
// Написати функцію toggleMode, що перемикає клас «dark - mode» елемента document.body
// за допомогою методу classList.toggle().Одночасно при перемиканні класу dark - mode
// потрібно приховувати або показувати відповідну кнопку.Якщо ввімкнено режим
// dark - mode, показати кнопку btn - light та сховати кнопку dark - mode, і навпаки,
// якщо вимкнено режим dark - mode, показати кнопку btn - dark та сховати кнопку btn - light

let btnDark = document.querySelector('.btn-dark');
let btnLight = document.querySelector('.btn-light');

btnDark.onclick  = function toggleMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btnDark.classList.add('hide');
        btnLight.classList.remove('hide');
    }
    else {
        btnLight.classList.add('hide');
        btnDark.classList.remove('hide');
    }
    return btnLight.onclick = function () {    
        document.body.classList.remove('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            btnDark.classList.add('hide');
            btnDark.classList.remove('hide');
        } 
        else {
            btnLight.classList.add('hide');
            btnDark.classList.remove('hide');
    }
    }
}
// чи можна написати це без другої частини? пробувала для обох кнопок налаштувати
// подію , але тоді , якщо спочатку натиснути лайт - буде налаштована темна тема.
// я б зробила це за допомогою однієї кнопки, але при натисканні, вона змінювала б свій контент
// та її особистий стиль.

// task 6 Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress".
// Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша,
// клавішею "Enter".Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault().
// Після скасування дії за замовчуванням, додати CSS - клас alert - info до елемента з id = alert
// та змінити значення властивості textContent
// цього елемента на "A simple info alert—check it out!";

let btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert—check it out!';
    }
});

// task 7 Знайти на сторінці всі селектори .card.
// Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом.card - title

let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++){
   let title = document.querySelectorAll('.card-title');
    console.log(title[i].textContent)
}

// task 8 Знайти на сторінці всі селектори .card. Використовуючи цикл for, знайти для
// кожного елемента.card кнопку з класом.add - to - cart, додати для кожної кнопки
// обробник події click, що викликає функцію, яка виводить на консоль
// вміст кожного елемента з класом.card - title


for (let n = 0; n < cards.length; n++){
    let btnAddToCart = cards[n].querySelector('.add-to-cart');
    // console.log(btnAddToCart.textContent);
    btnAddToCart.addEventListener('click', () => {
        let cardTitle = cards[n].querySelector('.card-title');
        console.log(cardTitle.textContent)
    })
}
