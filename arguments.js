function addNUmbers() {
    let result = 0;
    for (const number of arguments) {
        result = result + number;
    }
    return result;
}

const total = addNUmbers(20, 30, 40, 10);
console.log(total); 