"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (!numbers)
        return 0;
    let delimiter = /[\n,]/;
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEnd));
        numbers = numbers.substring(delimiterEnd + 1);
    }
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
}
