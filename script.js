// Write your code here
const lightBulb1 = document.querySelector("#lightbulb1");
const lightBulb2 = document.querySelector("#lightbulb2");
const lightBulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector("h3.subtitle");

let count = 0;
function events() {
    count ++
    subtitle.innerHTML = `You've clicked the lights ${count} times`
    this.classList.toggle("active");
}

lightBulb1.addEventListener("click", events);
lightBulb2.addEventListener("click", events);
lightBulb3.addEventListener("click", events);