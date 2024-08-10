"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringCalculator_1 = require("../src/stringCalculator");
test('should return 0 for an empty string', () => {
    expect((0, stringCalculator_1.add)('')).toBe(0);
});
test('should return the number itself for a single number', () => {
    expect((0, stringCalculator_1.add)('1')).toBe(1);
});
test('should return thr sum of two comma-separated numbers', () => {
    expect((0, stringCalculator_1.add)('1,5')).toBe(6);
});
test('should return the sum of multiplt comma-separated numbers', () => {
    expect((0, stringCalculator_1.add)('1,2,3,4')).toBe(10);
});
test('should handle new lines between numbers', () => {
    expect((0, stringCalculator_1.add)('1\n2,3')).toBe(6);
});
