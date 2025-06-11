const findProfitLoss = (costPrice, sellingPrice) => {
  const difference = sellingPrice - costPrice;
  if (difference > 0) {
    return `${difference} Profit`;
  } else if (difference < 0) {
    return `${Math.abs(difference)} Loss`;
  } else {
    return "No Profit, No Loss";
  }
};

console.log(findProfitLoss(1500, 2000));
console.log(findProfitLoss(3125, 1125));
