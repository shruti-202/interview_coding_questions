const findMinDate = (date1, date2) =>
  new Date(date1) < new Date(date2) ? date1 : date2;

console.log(findMinDate("2021/05/02", "2021/01/24"));
