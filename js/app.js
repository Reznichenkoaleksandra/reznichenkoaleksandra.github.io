// // lesson 16
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