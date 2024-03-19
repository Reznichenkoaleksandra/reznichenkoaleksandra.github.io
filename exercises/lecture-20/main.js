// task 1 Створити об'єкт person, що має властивості name
//  з типом рядка та age з типом цілого числа.
// Надати значення цим властивостям.
// Вивести значення властивостей об'єкту на консоль

// const person = {
//   name: "Sasha",
//   age: 32
// }
// console.log(person);
// console.log(person.name, person.age);

// //console.log(typeof(person.name), typeof(person.age));

// task 2 Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName.
// Надати значення цим властивостям.
// Вивести значення властивостей об'єкту на консоль.
// const person = {
//     name: {
//     firstName: "Sasha",
//     lastName: "Reznichenko"
//   },
//   age: 32
// }
// console.log(person);
// console.log(person.name.lastName, person.name.firstName, person.age);

// task 3 Створити метод об'єкту bio(),
// що виводить на консоль ім'я, прізвище та вік person.
// const person = {
//     name: {
//     firstName: "Sasha",
//     lastName: "Reznichenko"
//   },
//   age: 32,
//   bio() {
//     return `${person.name.firstName} ${person.name.lastName}, ${this.age}.`
//   }
// }
// console.log(person.bio());

// task 4 Створити метод об'єкту introduceSelf,
// що виводить на консоль Hi! I'm firstName.

// const person = {
//     name: {
//     firstName: "Sasha",
//     lastName: "Reznichenko"
//   },
//   age: 32,
//   bio() {
//     return `${person.name.firstName} ${person.name.lastName}, ${this.age}.`
//   },
//   introduceSelf() {
//     return `Hi, I'm ${this.name.firstName}.`
//   }
// }
// console.log(person.introduceSelf());

// task 5 Створити функцію-шаблон createPerson,
// що приймає аргумент name та повертає новий об'єкт
// з властивістю name та методом introduceSelf.
// Створити за допомогою createPerson 2 екземпляри об'єкта.

// function createPerson(name) {
//   this.name = name;
//   function introduceSelf() {
//     return `Hi, I'am ${this.name}`
//   }
//   console.log(introduceSelf())
// }

// createPerson("Sam");
// createPerson("Jacky");
// спочатку робила через функцію, потім гралась з обєктом та методом

// function createPerson(name) {
//    sayHi = {
//     name: name,
//     introduceSelf() {
//     return `Hi, I'm ${name}.`
//   }  
//   }
//   console.log(sayHi.introduceSelf());
// }

// createPerson("Max");
// createPerson("Subziro");

// let person1 = createPerson("Scorpion");
// let person2 = createPerson("Harry")
// task 6 Створити функцію-конструктор Person,
//  що приймає аргумент name та повертає новий об'єкт з властивістю name
//  та методом introduceSelf.Створити за допомогою Person 2 екземпляри об'єкта mary та tom.

function Person(name) {
  sayHi = {
    name: name,
    introduceSelf() {
    return `Hi, I'm ${name}.`
  }  
  }
  console.log(sayHi.introduceSelf());
}
const mary = new Person("Mary");
const tom = new Person("Tom");
// визначити, чи містить об'єкт mary властивість під назвою prop.

console.log(Object.hasOwn(mary, "prop")); //false

// task 7 Брудний мартіні – ідеальний коктейль для любителів оливкового.
// Його можна приготувати на горілці чи джині за таким рецептом.
    // ingredients:
    //     6 fluid ounces gin
    //     1 dash dry vermouth
    //     1 fluid ounce brine from olive jar
    //     4 stuffed green olives
 
    //     fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта(28.4131 грамів). 
    //     Офіційно dash становить приблизно 1 мл, 10 крапель або 1 / 5 чайної ложки.

    //     Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() 
    //     При виклику методу excuse_my_french(), на консоль виводиться:
    
        //   ingrédients:  
        // 170.4786 ml de gin
        // 1 trait de vermouth sec (0.0351951ml) 
        // 28.4131 ml de saumure du pot d'olive
        // 4 olives vertes farcies

      //   При виклику методу english_please(), на консоль виводиться:
      // ingredients:
      //   6 fluid ounces gin
      //   1 dash dry vermouth (0.0351951ml) 
      //   1 fluid ounce brine from olive jar
      //   4 stuffed green olives

      
  const DirtyMartini = {
        
  enGin: "gin",
  enVermouth: "vermouth",
  enOliveJar: "olive jar",
  enOlives: 'stuffed green olives',
  enLiquid: 'fliud',
  enLiquid2:'dash',
  frGin: "de gin",
  frVermouth: "de vermouth",
  frOliveJar:"de saumure du pot d'olive",
  frOlives: 'olives vertes farcies',
  frLiquid: "ml",
  frLiquid2: "trait",
  ml: "(0.0351951ml)",
  gin: 6,
  vermouth: 1, 
  oliveJar: 1,
  olives: 4,
  avoirdupois: 28.4131,

    english_please() {
    return `Dirty Martini EN
    ingredients:
    ${this.gin} ${this.enLiquid} ${this.enGin}
    ${this.vermouth} ${this.enLiquid2} ${this.enVermouth} ${this.ml}
    ${this.oliveJar} ${this.enLiquid} ${this.enOliveJar}
    ${this.olives} ${this.enOlives}`
  },

    excuse_my_french() {
    return `Dirty Martini FR
    ingrédients:
    ${this.gin * this.avoirdupois} ${this.frLiquid} ${this.frGin}
    ${this.vermouth} ${this.frLiquid2} ${this.frVermouth} ${this.ml}
    ${this.avoirdupois} ${this.frLiquid} ${this.frOliveJar}
    ${this.olives} ${this.frOlives} `
    }
   

    
}
      
console.log(DirtyMartini.english_please())
console.log(DirtyMartini.excuse_my_french())