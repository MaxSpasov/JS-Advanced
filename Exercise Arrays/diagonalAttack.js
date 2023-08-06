function magicMatrix(input) {
    let matrix = input.map(row => row.split(" ").map(Number));
    let diagonal1Sum = 0, diagonal2Sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonal1Sum += matrix[i][i];
        diagonal2Sum += matrix[i][matrix.length - i - 1];
    }

    if (diagonal1Sum !== diagonal2Sum) {
        return input.join("\n");
    } else {
        let newMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && i !== matrix.length - j - 1) {
                    newMatrix[i][j] = diagonal1Sum;
                } else {
                    newMatrix[i][j] = matrix[i][j];
                }
            }
        }
        return newMatrix.map(row => row.join(" ")).join("\n");
    }
}
console.log(magicMatrix([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']));