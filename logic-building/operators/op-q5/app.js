const findMin = (a,b,c) => a < b ? (a < c ? a : c) : (b < c ? b : c);

console.log(`The minimum number is ${findMin(35,29,46)}`)