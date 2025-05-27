const findPrime = num => {
  if (num <=1) return "Not a prime number";
  else if (num === 2) return "Number is prime number";
  else if (num % 2 === 0) return "Not a prime number";

  for (let i=3; i < num ; i +=2) {
    if (num % i === 0) {
      return "Not a prime number"
    }
  }
  return "Number is prime number"
}

console.log(findPrime(5))
console.log(findPrime(4))