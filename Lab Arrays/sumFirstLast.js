function firstSolution (arr) {
    const first = Number(arr[0]);
    const last = Number(arr[arr.length - 1]);
 
    return first + last;
}
firstSolution(['20', '30', '40']);
firstSolution(['5', '10']);
 
function secondSolution (arr) {
    return Number(arr.pop()) + Number(arr.shift());
}