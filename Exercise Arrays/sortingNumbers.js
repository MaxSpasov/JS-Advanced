function sortArray(numbers) {
    numbers.sort((a, b) => a - b);

    let result = [];
    let startIndex = 0;
    let endIndex = numbers.length - 1;

    while (startIndex <= endIndex) {
        result.push(numbers[startIndex]);
        startIndex++;
        if (startIndex <= endIndex) {
            result.push(numbers[endIndex]);
            endIndex--;
        }
    }

    return result;
}
console.log(sortArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));