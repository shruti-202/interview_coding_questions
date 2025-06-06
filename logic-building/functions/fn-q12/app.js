const replaceArr = (arr, num1, num2) =>
  arr.map((item) => (item === num1 ? num2 : item));

console.log(replaceArr([1, 5, 3, 5, 6, 8], 5, 10));
