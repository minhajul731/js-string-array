const numbers = [20, 30, 50, 70, 41, 25, 6, 4, 8, 96, 30];
const numberSlice = numbers.slice(4, 8);
// console.log(numberSlice);


const numbersSplice1 = numbers.splice(4, 3);
// const numbersSplice = numbers.splice(4, 3, 20, 30, 40, 58);
console.log(numbersSplice1);
console.log(numbers);