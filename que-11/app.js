const currentPrice = document.querySelector("#user-profit");
const costPrice = document.querySelector("#user-loss");
const btnSubmit = document.querySelector(".btn-one");
const displayOutput = document.querySelector("#output");

const btnHandler = () => {
  let current = Number(currentPrice.value);
  let cost = Number(costPrice.value);

  if (current > cost) {
    let profit = current - cost;
    displayOutput.innerText = `Profit amount ${profit}`;
  } else if (cost > current) {
    let loss = cost - current;
    displayOutput.innerText = `Loss amount ${loss}`;
  } else {
    displayOutput.innerText = "No profit, No loss";
  }
};

btnSubmit.addEventListener("click", btnHandler);
