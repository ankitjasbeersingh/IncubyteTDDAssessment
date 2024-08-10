import { add } from "../src/stringCalculator";


test('should return 0 for an empty string',() => {
    expect(add('')).toBe(0);
});

test('should return the number itself for a single number',()=>{
    expect(add('1')).toBe(1);
})

test('should return thr sum of two comma-separated numbers',()=>{
    expect(add('1,5')).toBe(6);
});

test('should return the sum of multiplt comma-separated numbers',() =>{
    expect(add('1,2,3,4')).toBe(10);
});