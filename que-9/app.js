const userName = document.querySelector(".user-name");
const userPassword = document.querySelector(".user-password");
const displayOutput = document.querySelector("#output");

const passwordHandler = () => {
    if (userPassword.value === "" || userName.value === "") 
        displayOutput.innerText = "";
  else if (userPassword.value.toUpperCase().includes(userName.value.toUpperCase()))
    displayOutput.innerText = "Password can't have name";
 else 
    displayOutput.innerText = "Password is okay";
  
  
};

userPassword.addEventListener("input", passwordHandler);
