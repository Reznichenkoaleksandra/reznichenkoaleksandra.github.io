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
console.dir(document.getElementById('hero'));
let hero = document.getElementById('hero');
let h1 = hero.querySelector('h1');
console.dir(h1);

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