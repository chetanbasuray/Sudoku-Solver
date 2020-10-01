const index = require('../src/index');
const sudokuProblems = require('./fixtures/sudokuProblems')
const sudokuSolutions = require('./fixtures/sudokuSolutions')

test('Solves very easy sudoku', () => {
    const result = index.solve(sudokuProblems.veryeasyGameArr);
    expect(result).toStrictEqual(sudokuSolutions.veryeasyGameArrSoln);
});

test('Solves easy sudoku', () => {
    const result = index.solve(sudokuProblems.easyGameArr);
    expect(result).toStrictEqual(sudokuSolutions.easyGameArrSoln);
});

test('Solves medium sudoku', () => {
    const result = index.solve(sudokuProblems.mediumGameArr);
    expect(result).toStrictEqual(sudokuSolutions.mediumGameArrSoln);
});

test('Solves hard sudoku', () => {
    const result = index.solve(sudokuProblems.hardGameArr);
    expect(result).toStrictEqual(sudokuSolutions.hardGameArrSoln);
});

test('Solves another hard sudoku', () => {
    const result = index.solve(sudokuProblems.hardGameArr2);
    expect(result).toStrictEqual(sudokuSolutions.hardGameArr2Soln);
});

test('Solves yet another hard sudoku', () => {
    const result = index.solve(sudokuProblems.hardGameArr3);
    expect(result).toStrictEqual(sudokuSolutions.hardGameArr3Soln);
});

test('Solves evil sudoku', () => {
    const result = index.solve(sudokuProblems.evilGameArr);
    expect(result).toStrictEqual(sudokuSolutions.evilGameArrSoln);
});

test('Solves another evil sudoku', () => {
    const result = index.solve(sudokuProblems.evilGameArr2);
    expect(result).toStrictEqual(sudokuSolutions.evilGameArr2Soln);
});

test('Solves yet another evil sudoku', () => {
    const result = index.solve(sudokuProblems.evilGameArr3);
    expect(result).toStrictEqual(sudokuSolutions.evilGameArr3Soln);
});
