// console.dir(document.body);
// console.dir(document.title);
// console.dir(document.body.childElementCount)
// console.dir(document.body.firstElementChild)
// console.dir(document.body.lastElementChild)
// console.dir(document.body.firstChild)
// console.dir(document.body.childNodes)
// console.dir(document.body.children)

// for (const child of document.body.children) {
//     console.dir(child);
// }

// section;
// console.dir(document.getElementById('hero'));
// let hero = document.getElementById('hero');
// let h1 = hero.querySelector('h1');
// console.dir(h1);

// h1 = hero.getElementsByTagName('h1');
// console.log(h1[0].innerText);
// h1[0].innerText = "Hello H1";
// h1.innerText = "Hello h1";
// h1.style.color = 'white';
// h1.style.backgroundColor = 'blue';

// h1.style.cssText = " color:red; background-Color:white; text-align: center "

// hero.innerHTML = "<h1>Hero Section <br> Hello <br> Sasha </h1>"

// h1.className = "test-css"

// h1.classList.add('test-css', 'test-css-2');
// h1.classList.toggle('test-css');

// let imgs = document.getElementsByClassName('image')
// console.log (document.getElementsByClassName('image'))
// console.log(imgs[0]);

// let imgs = document.querySelectorAll('.image img');
// console.log(imgs[0]);

// imgs[0].setAttribute('src', '/img/images/product-7.jpg')
// imgs[1].setAttribute('src', '/img/images/product-5-200px.jpg')
// function Product(id, name, price) {
//   this.id = id;
//   this.name = name;
//   this.price = price;
// }

// function Cart(tax = 0.07, shipping = 0) {
//     this.tax = tax;
//     this.shipping = shipping;
//     let cart = [];
//     this.saveCart = function () {
//         console.log(cart);
//         function Item(id, price, amount) {
//             this.id = id;
//             this.price = price;
//             this.amount = amount;
//         }
//         this.addItemToCart = function () {

//             for (let item in cart) {
//                 if (cart[item].id === product.id) {
//                     cart[item].amount += product.amount;
//                     this.saveCart();
//                     return;
//                 }
//             }

//             let item = new Item(product.id, product.price, product.amount);
//             cart.push(item);
//             this.saveCart();
//         }
//         this.setCountForItem = function (id, amount) {
//             for (let i in cart) {
//                 if (cart[i].id === id) {
//                     cart[i].amount = amount;
//                 }
//             }
//         }
//         this.totalAmount = function () {
//             let total = 0;
//             for (let item in cart) {
//                 total += cart[item].amount;
//             }
//             return total;
//         }
//         this.totalInCart = function () {
//             let total = 0;
//             for (let item in cart) {
//                 total += cart[item].price * cart[item].amount
//             }
//             return (total * (1 + this.tax) + this.shipping);
//         }
//         this.remuveItemFromCart = function (id) {
//             for (let item in cart) {
//                 if (cart[item].id === id) {
//                     cart[item].amount--;
//                     if (cart[item].amount === 0) {
//                         cart.splice(item, 1);
//                     }
//                     break;
//                 }
//             }
//             this.saveCart();
//         }
//         this.remuveAllItemFromCart = function (id) {
//             for (let item in cart) {
//                 if (cart[item].id === id) {
//                     cart.splice(item, 1);
//                     break;
//                 }
//             }
//             this.saveCart();
//         }
//         this.clearCart = function () {
//             cart = [];
//             this.saveCart();
//         }
//     }
// }

// let shoppingCart = new Cart(tax = 0.07, shipping = 0);


// function main() {
    
// }

// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', () => {
//         main();
//     })
// } else {
//     main();
// }

// const productContainer = document.querySelector('.product-container');

// let addToCart = productContainer.querySelector('.add-to-cart');
// let showDetail = productContainer.querySelector('.show-details');
// // console.dir(addToCart);
// addToCart.addEventListener('click', () => {
//     // console.dir(addToCart);
// })
// const dialog = document.getElementById('detail');
// showDetail.addEventListener('click', () => {
   
//     dialog.showModal();
// })
// dialog.querySelector('.close').addEventListener('click', () => {
//     dialog.close();
// })

// let addToCartButtons = productContainer.querySelectorAll('.add-to-cart');
// for (let item of addToCartButtons) {
//     item.addEventListener('click', () => {
//         console.log(item);
//     })
// }

// function CardProduct(item) {
//     this.item = item;
//     let addToCart = this.item.querySelector('.add-to-cart');
//     addToCart.addEventListener('click', function (event) {
//         console.log(event.target)

//         let parent = event.target.closest('.product');
//         let price = parent.querySelector('.product-price').innerText;
//         let name = parent.querySelector('.product-name').innerText;
//         let id = parent.querySelector('.product-name').getAttribute('id');
//         console.log( id , name , price)

//         let product = new Product(id, name, price)
//         product = {...product, amount:1}
//         console.log(product);
//         shoppingCart.addItemToCart(product);
//         console.log(shoppingCart.totalAmount())
//         console.log(shoppingCart.totalInCart())
//     });

// }
//     let productCards = productContainer.querySelectorAll('.product');
// for (let item of productCards) {
//     new CardProduct(item);
// }
