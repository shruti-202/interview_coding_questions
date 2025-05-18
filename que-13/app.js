const userPassword = document.querySelector("#user-password");
const confirmPassword = document.querySelector("#confirm-password");
const btnCheck = document.querySelector("#btn-check");
const displayOutput = document.querySelector("#output");

const passwordHandler = () => {
  if (
    userPassword.value
      .toLowerCase()
      .includes(confirmPassword.value.toLowerCase())
  )
    displayOutput.innerText = "Success";
  else {
    displayOutput.innerText = "Password Mismatched";
  }
};

btnCheck.addEventListener("click", passwordHandler);
