const userText = document.querySelector("#user-text");

const userBtn = document.querySelector("#btn-add");

const inputHandler = () => {
  const trimmedText = userText.value.trim();
  if (userText.value !== "" || userText.value > 10) {
    userBtn.disabled = trimmedText === "";
    userText.value = userText.value.slice(0, 10);
  } else {
    userBtn.disabled = true;
  }
};

userText.addEventListener("input", inputHandler);
userBtn.addEventListener("click", btnHandler);

