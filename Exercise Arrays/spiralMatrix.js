function generateMatrix(n, m) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < m; j++) {
            matrix[i][j] = false;
        }
    }

    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = m - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = counter;
                counter++;
            }
            endRow--;
        }

        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = counter;
                counter++;
            }
            startCol++;
        }
    }
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}
generateMatrix(5, 5);
generateMatrix(3, 3)