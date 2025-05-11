const userText = document.querySelector("#user-input");
const btnLog = document.querySelector(".log");
const btnWarn = document.querySelector(".warn");
const btnError = document.querySelector(".error");
const displayOutput = document.querySelector("#output");

const blackTextHandler = () => {
  displayOutput.innerText = userText.value;
  displayOutput.style.color = "black";
};

const yellowTextHandler = () => {
  displayOutput.innerText = userText.value;
  displayOutput.style.color = "yellow";
};

const redTextHandler = () => {
  displayOutput.innerText = userText.value;
  displayOutput.style.color = "red";
};

btnLog.addEventListener("click", blackTextHandler);
btnWarn.addEventListener("click", yellowTextHandler);
btnError.addEventListener("click", redTextHandler);
