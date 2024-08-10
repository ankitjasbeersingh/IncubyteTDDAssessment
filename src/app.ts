import { add } from "./stringCalculator";

const input = document.getElementById('input') as HTMLInputElement;
const calculateBtn = document.getElementById('calculateBtn') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLParagraphElement;

calculateBtn.addEventListener('click',() => {
    try{
        const sum = add(input.value);
        result.textContent = `Sum: ${sum}`;
    }catch(error){
        result.textContent = `Error: ${(error as Error).message}`
    }
});