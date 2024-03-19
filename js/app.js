//#region lesson 16
//  lesson 16
// "use strict";
// var y = 3.14e10; //3.14E10
// let c;//undefined
// let c1 = null;
// let b1 = true;
// console.log(typeof (c));
// console.log(typeof (c1));
// console.log(typeof (b1));
// let a = 2;
// let b = 2;
// const X = "HELLO"; // "" ''
// console.log(typeof(X))
// {
//   let a = 5;
//   let y = 2;
//   --y;
//   y--; // 0
//   ++a;
//   let c = (a + b)/y;
//   console.log(c)
// }
// b = 555;
// // X = 3.14;
// // + - * / % **
// c = a + b;
// console.log(c);//undefined
// // alert(c);
// console.log(0.1 + 0.3);
// // let z = +"33.33" + + "0.2";
// let z = parseFloat("33.33") + +"0.2"

// console.log(z);
// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt + 12n);
//#endregion
//#region lesson 17
// lesson 17

// // alert("Hello");
// console.log(typeof (3), typeof ('3'), 3 === '3');

// // && логічне множення
// console.log(3 == "3" && false);//false = && логічне множення
// console.log(3 == "3" && true);//true = && логічне множення
// // || операція або
// console.log(3 == "3" || false);//true
// console.log(4 == "3" || false);//false

// // falsy  = false 0  "" null undefined NaN
// console.log(Boolean(false)) //false
// console.log(Boolean("")) //false
// console.log(Boolean(0)) //false
// console.log(Boolean(1)) //true

// // ! bang заперечення
// console.log(Boolean(!0)) //true
// console.log(Boolean(!1)) //false
// {name: 'Hello'}
// console.log(Boolean({ name: 'Hello' })) //true
// console.log(Boolean({ name: 'Hello' } == null)) //false
// console.log(Boolean(!{ name: 'Hello' })) //false


// let test = 0;
// console.log(Boolean(!test)); //true

// if (!test) {
//   console.log("User text 0 value")
// }
// console.log(typeof (test));
// if (test) {
//   console.log("User text 0 value")
// }
// 2 + 2
// let numb = prompt("type number:");
// if (!isNaN(numb)) {
//   alert(+numb + +numb);
// }
// else {
//   alert('type number please')
// }
// let a = prompt("type a:");
// let b = prompt("type b:");
// let o = prompt("type operation:");

// if (!isNaN(a) && !isNaN(b)) {
//   if (o == "+") {
//     alert(+a + + b);
//   }
//   else if (o == "-") {
//     alert(+a - +b);
//   }
//   else if (o == "*") {
//     alert(+a * +b);
//   }
//   else if (o == "/") {
//     alert(+a / +b);
//   }
//   else {
//     alert('bed operation')
//   }
  
// }
// else {
//   alert('type number please')
// }

// switch (o) {
//   case '+':
//     alert(+a + + b);
//     break;
//   case '-':
//     alert(+a - +b);
//     break;
//   case '*':
//     alert(+a * +b);
//     break;
//   case '/':
//     alert(+a / +b);
//     break;
//   default:
//     alert('Hello user');

// }
// let housesOwned = 0;
// const wealth = housesOwned > 3 ? "rich"
//   : housesOwned > 0 ? "nothing to complain"
//   : 'poor';
// console.log(wealth);

// let x = 0 ?? "Hello";
// console.log(x)
// x = 2 ?? "Hello";
// console.log(x)
// x = null ?? "hello";
// console.log(x)
// x = undefined ?? "hello";
// console.log(x)
// x = false ?? "hello";
// console.log(x)
//#endregion
//#region lesson 18
//lesson 18
// let message = hello('world'); //hosting
// console.log(message);
// console.log(typeof (function () { }));
// // let test = "I'm test" //error
// // var test = "I'm test";//hosting
// function hello(name, test, me = "me") {
//   let msg = name ? null : "Enter name value";
//   if(msg) console.log(msg);
//   //body function
//   // local scope
//   // console.log("Hello " + name + " and " + me + "!");//undrfined
//   // return "bla bla bla";
//   // test = test || "I'm test";
//   if (test == undefined){
//     test = "bla bla bla";
//   }
//   // test = test ?? "I'm test";
//   return "Hello " + name + " and " + me + "!" + " " + test;
// }

// // let message = hello('world');
// // console.log(message);
// // hello('world');
// hello();
// message = hello('world', "cats");
// console.log(message);

// console.log(hello('world')); //undefined


// calc()
// function calc(o, x, y) {
//   switch (o) {
//     case '+':
//       return x + y;
//     case '-':
//       return x - y;
//     default: return;
//   }
// }
// let res = calc('*', 555, 555);
// console.log(res);
// // hi();
// let hi = function (msg ="Hello function!" ) {
//   console.log(
//     msg
//   )
// }
// // hi(); // function
// hi("hello dogs")
// var username = "Sasha"
// function showMsgUser() {
//   var msg = 'Hi ' + username + '!';
//   alert(msg);
//   console.log(msg);
//   username = "Mike";
// }
// showMsgUser();
// // username = 'Bob';
// showMsgUser();

// function greeting(name) {
//   console.log("Hello " + name + "!");
//   alert("Hi, " + name + "!")
  
// }
// function getUserName(callback) {
//   const name = prompt('Enter your name');
//   callback(name);
// }
// getUserName(greeting);

// (function() {
//   //...
// })()
//#endregion
//#region lesson 19

//  let quote = "It's a beautiful day";
// // let quote = 'It is a beautiful day';
// // let quote = `It is a beautiful day`;
//  let str = "He said, \"It is a beautiful day\""
// let str = 'He said, "It\'s a beautiful day\"'
// let str = `He said, "It's a beautiful day"`
// // console.log(str.length);

// // console.log(str[str.length-1]);//last symbol
// let f1 = str[0]
// console.log(f1)
// console.log(str.slice(-1));//last symbol;
// console.log(str.charAt(str.length - 1));


// concatenation
// let test = "He said, ";
// console.log(test + quote);
// console.log(test.concat(quote));

// let firstName = "James";
// let lastName = "Bond";
// function fullName(a, b) {
//   return a + ' ' + b;
// }
// console.log(fullName(firstName, lastName));

// let tamplate = `
//   <div>
//   <h1> My name is  ${fullName(firstName, lastName)}  </h1>
//   </div>
// `;
// console.log(tamplate);

// let template = (x, y) => ` <div>
//   <h1> My name is  ${fullName(x, y)}  </h1>
//  </div>`;

// console.log(template(firstName, lastName));
// console.log(str.indexOf('i'.toLocaleUpperCase()));

// let reptilianString = "     видалення пробілів ";
// console.log(reptilianString.trimStart());

// const chunk = 'password'
// const password = '123&password!R'

// console.log(password.includes(chunk));

// let string = 'Hello';
// let uppercase = string.toUpperCase();
// console.log(uppercase);

// // +044-416-2222
// const pattern = /^\+[0-9]{1}[0-9]{0, 2}-[0-9]{3}-[0-9]{4}$/;

// function validate(number) {
//   const pattern = /^\+[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    
//   let matched = number.match(pattern);
//   if (pattern.test(number)){
//   console.log("Phone nuber is vslid", matched);
//   return true;
//   }
//   else {
//     console.log("Phone nuber is not vslid", matched);
//   return false;
//   }
// }
// validate('+044-456-2222')
// validate('044-456-2222')

// let string0 = 'Hello World';
// // Divide a string into words
// // This can be done when the passed pattern is a space
// let words = string0.split(' '); // output ['Hello' , 'World']
// // When the passed parameter is an empty string, the output array
// // will carry each of the characters of the given string
// let chars = string0.split('');
// // output ["H","e","l","l","o"," ","W","o","r","l","d"]
// console.log(string0);
// console.log(words);
// console.log(chars);

// function isEmptyStr(str) {
//   return (str ?? '') === '';
// }
// console.log("Is empty" , isEmptyStr(null)
// )

//#endregion
//#region lesson 20
// // об'єкти
// const contacts = {
//   address: {
//     icon:"fa-globe-europe",
//     street: "1/2 New street",
//     city: "Kyiv",
//     zip: "03101",
//     country: "Ukraine",
//       info() {
//         return `
//         <li class="mb-2"><a href="/contacts.htmal"><i class="${this.icon}"></i><span>${this.zip},${this.street},${this.city},${this.country}</span></a></li>
//         `
//       }
//   },

//   callCentre: {
//     icon:"fas fa-phone",
//     phone: "+380441234567",
//     info() {
//       return `
//         <li class="mb-2"><a href="tel:${this.phone}"><i class="${this.icon}"></i><span>${this.phone}:This nomber is free if calling from ${contacts.address.country}, otherwise we advise You to use electronic form of communication.</span></a></li>
//         `
//     }
//   },
//   support: {
//      icon:"fas fa-envelop",
//     email: "test@gmail.com",
//     info() {
//       return `
//         <li class="mb-2"><a href="mailto:${this.email}"><i class="${this.icon}"></i><span>Please feel free to write on email to ${this.email} or to use our ticketing sistem.</span></a></li>
//         `
//     }
//   }
  
// }
// console.log(contacts.address.info());
// console.log(contacts.callCentre.info());
// console.log(contacts.support.info());

// console.dir(Object.keys(contacts));
// console.dir(Object.values(contacts));
// console.dir(Object.entries(contacts));

// // /////

// const product = {
//   id: 1, 
//   name: "Air Pads",
//   price: 11,
//   decription: "Product description",
//   cover: "product-1.jpg",
//   badge: {
//     title: "Sale",
//     color: "white",
//     bg: "red"
//   },
//   stars: 4,
//   category_id: 1,
//   brand_id:2,
// }

// function createProduct(id, name, price) {
//   const obj = {}
//   obj.id = id;
//   obj.name = name;
//   obj.price = price;
//   return obj;
// }
// const product1 = createProduct(1, "Product 1 name", 12);
// const product2 = createProduct(2, "Product 2 name", 22);
// const product3 = createProduct(3, "Product 3 name", 11);

// console.log(createProduct(1, "Product name2", 22))

// function Product(id, name, price) {
//   this.id = id;
//   this.name = name;
//   this.price = price;
// }
// const product4 = new Product(4, "product 4 name", 44);
// console.log(product4);

// const currency = total =>
//   parseFloat(Math.round(total * 100) / 100).toFixed(2); 

// function cartItem(item, tax=0.07, shipping=0) {
//   this.item = item;
//   this.tax = tax;
//   this.shipping = shipping;
//   this.total = function () {
//     // return parseFloat(Math.round(this.item.price * this.item.amount * 100) / 100).toFixed(2);
//     return currency((this.item.price * this.item.amount) * (1 + this.tax) + this.shipping);
//   } 
// }

// let productItem = { ...product4, amount: 4 };
// let cart = new cartItem(productItem);
// console.dir(cart);
// console.log(cart.total());
//#endregion
