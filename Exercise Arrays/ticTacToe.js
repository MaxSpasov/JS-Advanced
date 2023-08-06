function ticTacToe(input) {
    let matrix = [[false, false, false], [false, false, false], [false, false, false]];
    let players = ['X', 'O'];

    for (let i = 0; i < input.length; i++) {
        let player = players[i % 2];
        let [row, col] = input[i].split(' ').map(Number);

        if (matrix[row][col] === false) {
            matrix[row][col] = player;
        } else {
            console.log("This place is already taken. Please choose another!");
            i--;
            break;
        }
        let winner = checkForWinner(matrix, player);
        if (winner) {
            console.log(`Player ${winner} wins!`);
            printMatrix(matrix);
            return;
        }
        if (checkForDraw(matrix)) {
            console.log("The game ended! Nobody wins :(");
            printMatrix(matrix);
            return;
        }
    }
    function checkForWinner(matrix, player) {
        // Check rows
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].every(cell => cell === player)) {
                return player;
            }
        }
        // Check columns
        for (let col = 0; col < matrix[0].length; col++) {
            let column = [];
            for (let row = 0; row < matrix.length; row++) {
                column.push(matrix[row][col]);
            }

            if (column.every(cell => cell === player)) {
                return player;
            }
        }
        // Check diagonals
        let leftToRight = [];
        let rightToLeft = [];
        for (let i = 0; i < matrix.length; i++) {
            leftToRight.push(matrix[i][i]);
            rightToLeft.push(matrix[i][matrix.length - 1 - i]);
        }
        if (leftToRight.every(cell => cell === player) || rightToLeft.every(cell => cell === player)) {
            return player;
        }
        return false;
    }
    function checkForDraw(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].includes(false)) {
                return false;
            }
        }
        return true;
    }
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join('\t'));
        }
    }
}
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"])
ticTacToe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"])
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])