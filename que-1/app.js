const countBtn = document.querySelector("#count-btn");
const displayOutput = document.querySelector("#output");
let initialCount = 0;

const clickHandler = () => {
  displayOutput.innerText = initialCount++;
};

countBtn.addEventListener("click", clickHandler);
