const reverseNumber = num => {
    const reverseNum= num.toString().split('').reverse().join('');
    return Number(reverseNum)
}

console.log(reverseNumber(12345))