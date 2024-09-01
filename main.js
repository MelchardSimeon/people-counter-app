
let counter = 0;
let countEl = document.getElementById("count-el");


function increment() {
    counter += 1;
    countEl.innerText = counter;
    console.log(counter)
}