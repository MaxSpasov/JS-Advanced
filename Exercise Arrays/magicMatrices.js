function isMatrixMagical(matrix) {
    let rowsSum = matrix.map(row => row.reduce((a, b) => a + b));
    let columnsSum = matrix.reduce((acc, currentRow) => {
        currentRow.forEach((num, index) => {
            acc[index] = (acc[index] || 0) + num;
        });
        return acc;
    }, []);

    return rowsSum.every(sum => sum === rowsSum[0]) && columnsSum.every(sum => sum === columnsSum[0]);
}
console.log(isMatrixMagical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(isMatrixMagical([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(isMatrixMagical([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));