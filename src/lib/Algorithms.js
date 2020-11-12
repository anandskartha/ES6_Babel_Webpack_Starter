const inputOutput = []
export default inputOutput;

/////////////////////////////////////////////////////////////////////////////////////////////
//////1. String Reversal//////
/////////////////////////////////////////////////////////////////////////////////////////////
let solution = (str) => {
        //const output = str.split('').reverse().join('');
        let output = '';
        for (const i of str) {
            output = i + output;
        }
        return {
            title: '1. String Reversal',
            input: str,
            output
        };
    }
inputOutput.push(solution('anandstringtest'));

/////////////////////////////////////////////////////////////////////////////////////////////
//////2. Sum of Big numbers using strings//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (a, b) => {
    const aLength = a.length;
    const bLength = b.length;
    const maxLength = Math.max(aLength, bLength);
    let carry = 0, sum = '';
    for(let i = 1; i <= maxLength; i++) {
        let aNum = +a.charAt(aLength - i);
        let bNum = +b.charAt(bLength - i);
        let total = carry + aNum + bNum;
        carry = total / 10 | 0;
        total %= 10;
        sum = (i === maxLength && carry)? (10 * carry) + total + sum : total + sum;
    }
    return {
        title: '2. Sum of Big numbers using strings',
        input: {a,b},
        output: sum
    };
}
inputOutput.push(solution('9999', '1'));

/////////////////////////////////////////////////////////////////////////////////////////////
//////3. Integer Reversal//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (num) => {
    return {
        title: '3. Integer Reversal',
        input: num,
        output: ('' + num).split('').reverse().join('')
    };
}
inputOutput.push(solution(12345));




