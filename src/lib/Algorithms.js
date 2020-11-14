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

/////////////////////////////////////////////////////////////////////////////////////////////
//////4. The Fizz Buzz problem//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (num) => {
    let output = [];
    let fizzBuzzMap = new Map([[6, 'Fizz Buzz'], [3, 'Buzz'], [2, 'Fizz']]);
    for(let i = 1; i <= num; i++) {
        if(i % 12 == 0) {
            output.push('Fizz Buzz');
        } else if(i % 6 == 0) {
            output.push('Buzz');
        } else if(i % 3 == 0) {
            output.push('Fizz');
        } else {
            output.push(i);
        }
    }
    return {
        title: '4. The Fizz Buzz problem',
        input: num,
        output
    };
}
inputOutput.push(solution(30));

/////////////////////////////////////////////////////////////////////////////////////////////
//////5. Max Character in a String//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (str) => {
    const strArray = str.toLowerCase().split('');
    let countMap = {}, maxCount = 0, output = [];
    for(let i of strArray) {
        countMap[i] = (countMap[i] || 0) + 1;
    }
    maxCount = Math.max(...Object.values(countMap));
    for(let i in countMap) {
        if(countMap[i] === maxCount) {
            output.push(i);
        }
    }
    return {
        title: '5. Max Character in a String',
        input: str,
        output
    };
}
inputOutput.push(solution('anandaaaa'));


