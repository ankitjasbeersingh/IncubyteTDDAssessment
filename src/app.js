"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringCalculator_1 = require("./stringCalculator");
const input = document.getElementById('input');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
calculateBtn.addEventListener('click', () => {
    try {
        const sum = (0, stringCalculator_1.add)(input.value);
        result.textContent = `Sum: ${sum}`;
    }
    catch (error) {
        result.textContent = `Error: ${error.message}`;
    }
});
