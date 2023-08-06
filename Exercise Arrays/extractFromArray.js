function extractNonDecreasingSubset(numbers) {
    let biggest = numbers[0];
    let result = [biggest];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= biggest) {
            biggest = numbers[i];
            result.push(biggest);
        }
    }

    return result;
}
console.log(extractNonDecreasingSubset([
    1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
console.log(extractNonDecreasingSubset([
    20, 
    3, 
    2, 
    15,
    6, 
    1]));