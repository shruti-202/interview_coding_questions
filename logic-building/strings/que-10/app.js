const concatString = (str1, str2) => {
  if (str1.length > str2.length) str1 = str2;
  else {
    str2 = str1;
  }
  console.log("String 1:", str1);
  console.log("String 2:", str2);
};
concatString("Shru", "Anshuman");
