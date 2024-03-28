function main() {
    const productContainer = document.querySelector('.product-container');
    let productCards = productContainer.querySelectorAll('.product');
    // for (let item of productCards) {
    //     new CardProduct(item);
    // }   or this |
    productCards.forEach(item => new CardProduct(item));

    let products = [];
    productCards.forEach(function (item) {
        let id = item.querySelector('.content').getAttribute('id');
        let name = item.querySelector('.product-name').textContent;
        let price = item.querySelector('.product-price').textContent;
        let action = item.querySelector('.badge').textContent;

        products = [...products, { id: id, name: name, price: +price, action: action }]
    })
    // console.log(products);
    const findByProps = function (items, props, what) {
        let result = [];
        items.find((item, index) => {
            if (item[props] === what) {
                result.push (items[index])
            }
        })
        return result;
    }
    // console.log(findByProps(products, 'action', 'New'));

    const compare = (key, order = 'asc') => (a, b) => {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))
            return 0;
        const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        comparison = (A > B) ? 1 : -1;
        return (order === 'desc') ? -comparison : comparison;
   }

    let sorted = products.sort(compare('name', 'asc'))//desc 
    // console.log(sorted)
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        main();
    })
} else {
    main();
}


function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

const currency = total => parseFloat(Math.round(total * 100) / 100).toFixed(2);

function Cart(tax = 0.07, shipping = 0) {
    this.tax = tax;
    this.shipping = shipping;

    let cart = [];

    this.saveCart = function () {
        console.log(cart);
    }

    function Item(id, price, amount) {
        this.id = id;
        this.price = price;
        this.amount = amount;
    }

    this.addItemToCart = function (product) {
    
    for (let item in cart) {
            if (cart[item].id === product.id) {
                cart[item].amount += product.amount;
                this.saveCart();
                return;
            }
        }
    let inCart = cart.some(item => item.id == product.id);
        // console.log(inCart);  
        //not work
    if (inCart) {  
        let index = cart.find(item => item.id == product.id);
        cart[index].amount += product.amount;
        return;
    }
    else {
        let item = new Item(product.id, product.price, product.amount);
        cart.push(item);
        }
    this.saveCart();
    }   
    
    this.setCountForItem = function (id, amount) {
        for (let i in cart) {
            if (cart[i].id === id) {
                cart[i].amount = amount;
            }
        }
    }

    this.totalAmount = function () {
        let total = 0;
        for (let item in cart) {
            total += cart[item].amount;
        }
        return total;
    }

    this.totalInCart = function () {
        let total = 0;
        for (let item in cart) {
            total += cart[item].price * cart[item].amount;
        }
        return currency(total * (1 + this.tax) + this.shipping);
    }

    this.remuveItemFromCart = function (id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart[item].amount--;
                if (cart[item].amount === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        this.saveCart();
    }

    this.remuveAllItemFromCart = function (id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart.splice(item, 1);
                break;
            }
        }
        this.saveCart();
    }

    this.clearCart = function () {
        cart = [];
        this.saveCart;
    }

}

let shoppingCart = new Cart(tax = 0, shipping = 0);  //tax chenge 0.07

const productContainer = document.querySelector('.product-container'); //need to hide later

let addToCart = productContainer.querySelector('.add-to-cart');
let showDetail = productContainer.querySelector('.show-details');
// console.dir(addToCart);
addToCart.addEventListener('click', () => {
    // console.dir(addToCart);
})
const dialog = document.getElementById('detail');
showDetail.addEventListener('click', () => {
   
    dialog.showModal();
})
dialog.querySelector('.close').addEventListener('click', () => {
    dialog.close();
})

let addToCartButtons = productContainer.querySelectorAll('.add-to-cart');
for (let item of addToCartButtons) {
    item.addEventListener('click', () => {
        // console.log(item);
    })
}



function CardProduct(item) {
    this.item = item;

    let addToCart = this.item.querySelector('.add-to-cart');
    addToCart.addEventListener('click', function (event) {
        // console.log(event.target);
   
    
        let parent = event.target.closest('.product');
        // let id = parent.dataset.id;
        // let product = productList.getProductById(products, id);

        let price = parent.querySelector('.product-price').innerText;
        let name = parent.querySelector('.product-name').innerText;
        let id = parent.querySelector('.content').getAttribute('id');
        console.log(name, price);
        
        let product = new Product (id, name , price);
        product = { ...product, amount: 1}  
        // console.log(product);
        shoppingCart.addItemToCart(product);
        // document.getElementById('.cart-amount').textContent = shoppingCart.totalAmount();
        // console.log(shoppingCart.totalAmount())
        console.log(shoppingCart.totalInCart())
        
 });
}
// lecture 24



