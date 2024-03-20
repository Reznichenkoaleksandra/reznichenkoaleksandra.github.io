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


function createPerson(name) {
  return {
    name: name,
    introduceSelf(){
      return `Hi I'm ${name}`
    }
  }
}
let barb = createPerson('Barbara');
let elton = createPerson('Elton');
console.log(barb.introduceSelf());
console.log(elton.introduceSelf());
// task 6 Створити функцію-конструктор Person,
//  що приймає аргумент name та повертає новий об'єкт з властивістю name
//  та методом introduceSelf.Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
//         OLD
// function Person(name) {
//   sayHi = {
//     name: name,
//     introduceSelf() {
//     return `Hi, I'm ${name}.`
//   }
//   }
//   console.log(sayHi.introduceSelf());
// }
//          NEW
// function Person(name) {
//   this.name = name;
//   this.introduceSelf =
//     function introduceSelf() {
//       return `Hi I'm ${this.name}`
//     }
//   }
// const mary = new Person("Mary");
// const tom = new Person("Tom");
// console.log(mary.introduceSelf());
// console.log(tom.introduceSelf());

// // визначити, чи містить об'єкт mary властивість під назвою prop.

// console.log(Object.hasOwn(mary, "prop")); //false

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

      
//   const DirtyMartini = {
//   gin: 6,
//   vermouth: 1, 
//   oliveJar: 1,
//   olives: 4,
//   avoirdupois: 28.4131,

//     english_please() {
//     return `Dirty Martini EN
//     ingredients:
//     ${this.gin} fluid ounces gin
//     ${this.vermouth} dash dry vermouth (0.0351951ml)
//     ${this.oliveJar} fluid ounce brine from olive jar
//     ${this.olives} stuffed green olives`
//   },

//     excuse_my_french() {
//     return `Dirty Martini FR
//     ingrédients:
//     ${this.gin * this.avoirdupois} ml de gin
//     ${this.vermouth} trait de vermouth sec (0.0351951ml)
//     ${this.avoirdupois} ml de saumure du pot d'olive
//     ${this.olives} olives vertes farcies`
//     }
// }
      
// console.log(DirtyMartini.english_please())
// console.log(DirtyMartini.excuse_my_french())