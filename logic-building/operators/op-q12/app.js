//Write a program to take a day as an input and determine whether it is a
    //   weekday or weekend.

const findDay = userDay => {
    let weekday = ['monday','tuesday', 'wednesday', 'thursday','friday'];
    if (weekday.includes(userDay.toLowerCase())){
        return "This is weekday"
    } else {
        return "This is weekend"
    }
}

console.log(findDay('Monday'))
console.log(findDay('saturday'))