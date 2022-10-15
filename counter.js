//Selecting the value
const value = document.querySelector(".value");

//Selecting the each button
const btnIncrement = document.querySelector(".increment");
const btnDecrement = document.querySelector(".decrement");
const btnReset = document.querySelector(".reset");

let count = 0;

//Click event for Increment
btnIncrement.addEventListener("click", () => {
    count++;
    value.textContent = count;
});

//Click event for Decrement
btnDecrement.addEventListener("click", () => {
    count--;
    value.textContent = count;
});

//Click event for Reset Count
btnReset.addEventListener("click", () => {
    count = 0
    value.textContent = count;
});