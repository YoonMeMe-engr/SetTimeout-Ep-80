/* setTimeout 

setInterval(callback, 3000);
clearInterval();

setTimeout(callback, 3000); */

const boxElement = document.querySelector(".box");
const buttonElement = document.querySelector(".btn-primary");

buttonElement.addEventListener("click", () => {
    boxElement.style.backgroundColor = "white";
    setTimeout(() => {
        boxElement.style.backgroundColor = "#ffc107";
    }, 3000);
});