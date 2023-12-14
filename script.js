
const button = document.querySelector(".button");
const buttonBox = document.querySelector(".button__box");
const text = document.querySelector(".text");
const body = document.querySelector("body");

let blokace = 0;
button.addEventListener(`mouseenter`, () => {

    if(blokace !== 1) {
        body.removeChild(text);
    }
    
    let top = Math.floor(Math.random() * 91);
    let buttom = Math.floor(Math.random() * 91);
    let left = Math.floor(Math.random() * 91);
    let right = Math.floor(Math.random() * 91);

    buttonBox.className = "";

    button.style = `position: absolute; top: ${top}%; bottom: ${buttom}%; left: ${left}%; right: ${right}%;`;
    blokace = 1;
});