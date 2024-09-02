
let counter = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    counter += 1;
    countEl.innerText = counter;
    console.log(counter)
}

function save() {
    console.log(counter);
}
