// let div = document.querySelector(".div");
// let redBtn = document.querySelector("#red");
// let greenBtn = document.querySelector("#green");
// let blueBtn = document.querySelector("#blue");
// let purpleBtn = document.querySelector("#purple");
// let yellowBtn = document.querySelector("#yellow");
// let orangeBtn = document.querySelector("#orange");

// const changeColor = (color) => {
//     div.style.backgroundColor = getComputedStyle(document.querySelector(color)).backgroundColor;

// }

// redBtn.addEventListener("click", () => changeColor("#red"));
// greenBtn.addEventListener("click", () => changeColor("#green"));
// blueBtn.addEventListener("click", () => changeColor("#blue"));
// purpleBtn.addEventListener("click", () => changeColor("#purple"));
// yellowBtn.addEventListener("click", () => changeColor("#yellow"));
// orangeBtn.addEventListener("click", () => changeColor("#orange"));


// Daha qisa usulla>>>

let div = document.querySelector(".div");
const colorButtons = ["red", "green", "blue", "purple", "yellow", "orange"];

const changeColor = (color) => {
    div.style.backgroundColor = getComputedStyle(document.querySelector(`#${color}`)).backgroundColor;
}

colorButtons.forEach((color) => {
    document.querySelector(`#${color}`).addEventListener("click", () => changeColor(color));
});
