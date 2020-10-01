const veryeasyGameArr = [
    [2, 0, 3, 0, 0, 8, 6, 0, 7],
    [1, 4, 0, 7, 2, 6, 0, 0, 9],
    [5, 0, 7, 1, 3, 9, 4, 2, 8],
    [0, 2, 5, 0, 8, 1, 9, 0, 4],
    [4, 1, 0, 9, 0, 3, 2, 0, 5],
    [0, 7, 9, 2, 0, 5, 0, 3, 6],
    [6, 0, 2, 0, 1, 0, 0, 9, 3],
    [7, 0, 0, 5, 0, 2, 0, 0, 1],
    [0, 8, 1, 3, 6, 7, 0, 4, 0]
];
const easyGameArr = [
    [0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 9, 0, 6, 3, 0, 0],
    [0, 6, 0, 4, 0, 2, 0, 9, 0],
    [1, 0, 0, 0, 9, 0, 4, 0, 0],
    [0, 0, 8, 1, 0, 3, 5, 0, 0],
    [0, 0, 5, 0, 7, 0, 0, 0, 3],
    [0, 5, 0, 3, 0, 1, 0, 6, 0],
    [0, 0, 4, 6, 0, 7, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 8, 0]
];
const mediumGameArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 8, 5],
    [0, 0, 1, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 7, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 1, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 7, 3],
    [0, 0, 2, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 9]
];
const hardGameArr = [
    [0, 0, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 2, 4, 0, 6, 3, 0, 0],
    [0, 1, 7, 0, 0, 0, 9, 6, 0],
    [5, 8, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 9, 0, 0, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 4, 2],
    [0, 9, 4, 0, 0, 0, 6, 5, 0],
    [0, 0, 5, 2, 0, 8, 1, 0, 0],
    [0, 0, 0, 5, 0, 0, 0, 0, 0]
];
const hardGameArr2 = [
    [0, 4, 3, 0, 1, 0, 0, 0, 0],
    [0, 0, 2, 0, 7, 0, 0, 3, 1],
    [8, 0, 0, 0, 0, 9, 0, 0, 0],
    [3, 0, 9, 0, 0, 5, 0, 0, 0],
    [0, 2, 5, 0, 0, 0, 4, 7, 0],
    [0, 0, 0, 7, 0, 0, 3, 0, 6],
    [0, 0, 0, 9, 0, 0, 0, 0, 5],
    [9, 5, 0, 0, 2, 0, 1, 0, 0],
    [0, 0, 0, 0, 5, 0, 6, 9, 0]
];
const hardGameArr3 = [
    [0, 3, 0, 0, 5, 0, 2, 0, 8],
    [0, 0, 4, 0, 0, 0, 9, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 1, 0],
    [0, 6, 7, 5, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 8, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 9, 8, 4, 0],
    [0, 7, 0, 0, 0, 6, 0, 0, 0],
    [0, 0, 8, 0, 0, 0, 3, 0, 0],
    [1, 0, 2, 0, 4, 0, 0, 8, 0]
];
const evilGameArr = [
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 6, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 9, 0, 2, 0, 0],
    [0, 5, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 4, 5, 7, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 3, 0],
    [0, 0, 1, 0, 0, 0, 0, 6, 8],
    [0, 0, 8, 5, 0, 0, 0, 1, 0],
    [0, 9, 0, 0, 0, 0, 4, 0, 0]
];
const evilGameArr2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 8, 5],
    [0, 0, 1, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 7, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 1, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 7, 3],
    [0, 0, 2, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 9]
];

const evilGameArr3 = [
    [0, 0, 0, 0, 5, 4, 7, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 3],
    [0, 0, 0, 7, 6, 3, 4, 8, 0],
    [0, 0, 0, 0, 0, 6, 0, 0, 0],
    [0, 9, 4, 0, 7, 0, 8, 0, 2],
    [6, 3, 0, 0, 0, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 7, 8],
    [2, 1, 0, 0, 0, 0, 0, 0, 9]
];

module.exports = {
    veryeasyGameArr, easyGameArr, mediumGameArr, hardGameArr, hardGameArr2, hardGameArr3, evilGameArr, evilGameArr2, evilGameArr3
}