const squareCoordinates = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9]
];

/**
 *
 * @param board
 * @param row
 * @returns {[]}
 */
function getRow(board, row) {
    return board[row]
}

/**
 *
 * @param board
 * @param column
 * @returns {[]}
 */
function getColumn(board, column) {
    const col = [];
    for (let row = 0; row < 9; row++) {
        col.push(board[row][column]);
    }
    return col
}

/**
 *
 * @param board
 * @param square
 * @returns {[]}
 */
function getSquare(board, square) {
    let cells = []
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (square === squareCoordinates[r][c]) {
                cells.push(board[r][c])
            }
        }
    }
    return cells
}

/**
 *
 * @param board
 * @param r
 * @param c
 * @returns {boolean}
 */
function completeCell(board, r, c) {
    let used = [...getRow(board, r), ...getColumn(board, c), ...getSquare(board, squareCoordinates[r][c])]
    let possibilities = []
    for (let p = 1; p <= 9; p++) {
        if (!used.includes(p)) {
            possibilities.push(p)
        }
    }
    if (possibilities.length === 1) {
        board[r][c] = possibilities[0]
        return true
    } else {
        board[r][c] = possibilities
        return false
    }
}

/**
 *
 * @param board
 * @param possibilities
 * @param segment
 * @param r
 * @param c
 * @returns {boolean}
 */
function appearsOnceOnly(board, possibilities, segment, r, c) {
    let updated = false
    for (let i = 0; i < possibilities.length; i++) {
        let possibility = possibilities[i]
        let counter = 0
        segment.forEach(cell => {
            if (Array.isArray(cell)) {
                if (cell.includes(possibility)) {
                    counter++
                }
            } else {
                if (cell === possibility) {
                    counter++
                }
            }
        })
        if (counter === 1) {
            board[r][c] = possibility
            updated = true
            break
        }
    }
    return updated
}

/**
 *
 * @param expected
 * @param actual
 * @returns {boolean|boolean}
 */
function compare(expected, actual) {
    let array1 = expected.slice()
    let array2 = actual.slice()
    return array1.length === array2.length && array1.sort().every(function (value, index) { return value === array2.sort()[index] });
}

/**
 *
 * @param board
 * @returns {boolean}
 */
function isSolved(board) {
    let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let valid = true
    for (let r = 0; r < 9 && valid === true; r++) {
        if (!compare(expected, getRow(board, r))) {
            valid = false
        }
    }
    for (let c = 0; c < 9 && valid === true; c++) {
        if (!compare(expected, getColumn(board, c))) {
            valid = false
        }
    }
    for (let q = 1; q < 9 && valid === true; q++) {
        if (!compare(expected, getSquare(board, q))) {
            valid = false
        }
    }
    return valid
}

/**
 *
 * @param orig_board
 * @returns {any|boolean}
 */
function backtrackBased(orig_board) {
    let board = JSON.parse(JSON.stringify(orig_board));
    let completed_board;
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 0) {
                completeCell(board, r, c)
                if (isSolved(board)) return board;
                let cell = board[r][c]
                if (Array.isArray(cell)) {
                    for (let i = 0; i < cell.length; i++) {
                        let board_2 = JSON.parse(JSON.stringify(board));
                        board_2[r][c] = cell[i]
                        if (completed_board = backtrackBased(board_2)) {
                            return completed_board;
                        }
                    }
                    return false
                }
            }
        }
    }
    return false;
}

/**
 *
 * @param board
 * @returns {boolean}
 */
function oneValueCellConstraint(board) {
    let updated = false
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 0) {
                updated = completeCell(board, r, c) || updated
            }
        }
    }
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (Array.isArray(board[r][c])) {
                let possibilities = board[r][c]
                updated = appearsOnceOnly(board, possibilities, getRow(board, r), r, c) ||
                    appearsOnceOnly(board, possibilities, getColumn(board, c), r, c) ||
                    appearsOnceOnly(board, possibilities, getSquare(board, squareCoordinates[r][c]), r, c) || updated
            }
        }
    }
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (Array.isArray(board[r][c])) {
                board[r][c] = 0
            }
        }
    }
    return updated
}

/**
 *
 * @param board
 * @returns {any | boolean}
 */
function solve(board) {
    let updated = true, solved = false
    while (updated && !solved) {
        updated = oneValueCellConstraint(board)
        solved = isSolved(board)
    }
    if (!solved) {
        board = backtrackBased(board)
        isSolved(board)
    }
    return board
}

/**
 *
 * @type {{solve: (function(*=): any | boolean)}}
 */
module.exports = {
    solve
}
