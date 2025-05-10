const infoContent = document.querySelector("#info-content");
const btnFive = document.querySelector(".btn-five");
const btnTen = document.querySelector(".btn-ten");

const increaseBorderByFive = () => {
  infoContent.style.border = "5px solid black";
};

const increaseBorderByTen = () => {
  infoContent.style.border = "10px solid black";
};

btnFive.addEventListener("click", increaseBorderByFive);
btnTen.addEventListener("click", increaseBorderByTen);
