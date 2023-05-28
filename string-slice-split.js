const anthem = "amar sonar bangla  ami tumai valobashi";
// use split
// const anthemSplit = anthem.split('');
// const anthemSplit = anthem.split(' ');
const anthemSplit = anthem.split('a');
// console.log(anthemSplit);

// use slice
const anthemSlice = anthem.slice(3, 9);
// console.log(anthemSlice);

// use subStr
const anthemSubstr = anthem.substr(3, 11);
// console.log(anthemSubstr);

// use subString
const anthemsubString = anthem.substring(3, 11);
// console.log(anthemsubString);

// use concat
const first = 'amar';
const second = 'sonar';
const fullString = first.concat(second);
// console.log(fullString);

// use Join
const stringCollection = ['a', 'b', 'c'];
// const resultJoin = stringCollection.join('');
// const resultJoin = stringCollection.join(' ');
const resultJoin = stringCollection.join(', ');
console.log(resultJoin);