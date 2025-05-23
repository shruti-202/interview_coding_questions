const checkMonth = (month) => {
  let monthWith31Days = [
    "january",
    "march",
    "may",
    "july",
    "august",
    "october",
    "december",
  ];

  return monthWith31Days.includes(month.toLowerCase())
    ? `${month} has 31days`
    : `${month} don't have 31 days`;
};


console.log(checkMonth("October"))
