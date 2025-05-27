const findMin = (...numbers) => {
    let minNum = numbers[0];
    for (let i=0; i<= numbers.length; i++){
        if (numbers[i] < minNum)
        minNum = numbers[i];
    }
    return minNum;
}

console.log(findMin(3,8,2))