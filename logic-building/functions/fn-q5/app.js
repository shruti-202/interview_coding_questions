const findMax = (...number) => {
    let maxNum = number[0];
    for(let i=0; i<=number.length ; i++) {
        if (number[i] > maxNum){
            maxNum = number[i]
        }
    }
    return maxNum;
}

console.log(findMax(3,5,9,1))
console.log(findMax(3,5))