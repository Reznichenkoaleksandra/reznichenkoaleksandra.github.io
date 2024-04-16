const ul = document.querySelector('ul');
const input = document.getElementById('item');

let itemsArrey = JSON.parse(localStorage.getItem("items")) || [];


function addTask(text) {
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li)
}

function add() {
    let newItem = input.value;
    itemsArrey.push(newItem);
    localStorage.setItem("items", JSON.stringify(itemsArrey));
    addTask(newItem);
    input.value = '';
}

function del() {
    localStorage.removeItem("items");
    itemsArrey = [];
    ul.innerHTML = '';
}