const findTriangle = (a, b, c) => {
  if (a + b + c !== 180 || a <= 0 || b <= 0 || c <= 0) return "Not a triangle";
  else if (a === b && b === c) return "Equilateral Triangle";
  else if (a === b || b === c || a === c) return "Isosceles Triangle";
  else {
    return "Scalene Triangle";
  }
};

console.log(findTriangle(30, 60, 90));
console.log(findTriangle(45, 45, 30));
