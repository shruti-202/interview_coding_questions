//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const FibonacciSeries = (num) => {
  let series = [];
  for (let i = 0; i < num; i++)
  {
    series.push(fibonacci(i));
  }
  return series;
};

console.log(FibonacciSeries(7));
