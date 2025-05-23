const findMax = (a,b,c) => a > b ? (a > c ? a: c) : (b > c ? b : c)

console.log(`The maximum number is: ${findMax(8, 23, 17)}`);