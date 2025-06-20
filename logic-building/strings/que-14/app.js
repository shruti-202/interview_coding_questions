const maskString = (str) => {
  return str
    .split("")
    .map((char, idx) => (idx < str.length - 4 ? "#" : char))
    .join("");
};

const input = "54345679898988";
console.log(maskString(input));
