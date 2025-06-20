const isPalindrome = (str) => {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};
