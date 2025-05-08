const userInput = document.querySelector("#user-text");
const displayOutput = document.querySelector("#output");
const btnSubmit = document.querySelector("#btn-submit");

const inputHandler = () => {
  console.log("Clicked");
  if (userInput.value === "") {
    displayOutput.innerText = "";
  }
};

const clickHandler = () => {
  if (userInput.value.length < 10) {
    displayOutput.innerText = "Error";
    displayOutput.style.color = "red";
  } else {
    displayOutput.innerText = "Success";
    displayOutput.style.color = "green";
  }
};

userInput.addEventListener("input", inputHandler);
btnSubmit.addEventListener("click", clickHandler);
