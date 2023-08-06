function rotateArray(arr, rotationCount) {
    rotationCount = rotationCount % arr.length;
    for (let i = 0; i < rotationCount; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr.join(' ');
}
console.log(rotateArray([
    '1',
    '2',
    '3',
    '4'],
    2))
console.log( rotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15))