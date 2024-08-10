"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (!numbers)
        return 0;
    const numArray = numbers.split(',').map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}
