function nums (number) {
    let numToString = number.toString();
    let sum = 0;
    let isSame = true;
    let firstLetter = numToString[0];
    for (let i = 0; i < numToString.length; i++) {
        if (firstLetter !== numToString[i]) {
            isSame = false;
        }
        sum += Number(numToString[i])
        // sum += +firstLetter[i];
    }
    console.log(isSame);
    console.log(sum);
}
nums(2222222)