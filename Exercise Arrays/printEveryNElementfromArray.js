function printElement(arr, step) {
    //const newArr = [];
    //for (let i = 0; i < arr.length; i += step) {
        //newArr.push(arr[i])        
    //}
    //return newArr
    return arr.filter((ele, index) => index % step == 0);
}
console.log( printElement([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2))
console.log(printElement([
    'dsa',
    'asd',
    'test',
    'tset'],
    2))