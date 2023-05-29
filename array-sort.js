const numbers = [5, 2, 3, 6, 8, 4, 9, 1, 7];
const numbersSort = numbers.sort();
// console.log(numbersSort);



const bigNumber = [2, 88, 104, 69, 5, 74, 23, 79, 45, 1];
const sortBigNumbers = bigNumber.sort(function (a, b) {
    return a - b;
})

console.log(sortBigNumbers);