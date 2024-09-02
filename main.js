
let counter = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let savePara = document.getElementById("save-para")

function increment() {
    counter += 1;
    countEl.innerText = counter;
    console.log(counter)
}

function save() {
    let countEntry = counter + " - ";
    savePara.innerText += countEntry;
    savePara.style.color = "pink";
    savePara.style.fontSize = "20px"
    console.log(counter);
    countEl.textContent = 0;
    counter = 0;
}


