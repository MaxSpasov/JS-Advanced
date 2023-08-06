function aggregateElements(arr) {
    let sum = 0;
    let invSum = 0;
    let concat = "";
    for (let index = 0; index < arr.length; index++) {
       sum += arr[index];
       invSum += 1 / arr[index];
       concat += arr[index].toString();
    }
    console.log(sum);
    console.log(invSum);
    console.log(concat);
}
aggregateElements([2, 4, 8, 16])