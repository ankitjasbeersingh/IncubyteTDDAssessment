export function add(numbers:string):number {
    if (!numbers) return 0;
    let delimiter = /[\n,]/;
    if(numbers.startsWith('//')){
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2,delimiterEnd));
        numbers = numbers.substring(delimiterEnd+1);
    }
    const numArray = numbers.split(delimiter).map(Number);
    return numArray.reduce((sum,num)=> sum+num,0);
}
