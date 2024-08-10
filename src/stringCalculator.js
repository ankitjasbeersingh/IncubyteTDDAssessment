"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (!numbers)
        return 0;
    const numArray = numbers.split(',').map(Number);
    console.log(numArray);
    console.log(numArray.reduce((sum, num) => sum + num, 0));
    return numArray.reduce((sum, num) => sum + num, 0);
}
add('1,5');
