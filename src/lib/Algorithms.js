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
    const strL = str.toLowerCase();
    let countMap = {}, maxCount = 0, output = [];
    for(let i of strL) {
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

/////////////////////////////////////////////////////////////////////////////////////////////
//////6. Anagrams - words or phrases that contain the same number of characters//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (str1, str2) => {
    const strL1 = str1.toLowerCase();
    const strL2 = str2.toLowerCase();
    const countMap1 = {}, countMap2 = {};
    let output = true;
    for(let i of strL1) {
        countMap1[i] = (countMap1[i] || 0) + 1;
    }
    for(let i of strL2) {
        countMap2[i] = (countMap2[i] || 0) + 1;
    }
    if(Object.keys(countMap1).length !== Object.keys(countMap2).length) {
        output = false;
    } else {
        for(let i in countMap1) {
            if(countMap1[i] !== countMap2[i]) {
                output = false;
                break;
            }
        }
    }
    
    return {
        title: '6. Anagrams - words or phrases that contain the same number of characters',
        input: {str1, str2},
        output
    };
}
// inputOutput.push(solution('hello world', 'world hello'));
// inputOutput.push(solution('hellow world', 'world hello'));
inputOutput.push(solution('hellow world', 'wor1d he11o'));

/////////////////////////////////////////////////////////////////////////////////////////////
//////7. Count Distinct Vowels//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (str) => {
    const vowels = 'aeiou';
    const strL = str.toLowerCase();
    let uniq = new Set();
    for(let i of strL) {
        if(vowels.includes(i)) {
            uniq.add(i);
        }
    }
    return {
        title: '7. Count Distinct Vowels',
        input: str,
        output: uniq.size
    };
}
inputOutput.push(solution('hello world'));

/////////////////////////////////////////////////////////////////////////////////////////////
//////8. Array Chunking//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (arr, size) => {
    let start = 0;
    let output = [];
    while (start < arr.length) {
        output.push(arr.slice(start, start + size));
        start += size;
    }
    return {
        title: '8. Array Chunking',
        input: arr,
        output
    };
}
inputOutput.push(solution([1,2,3,4,5,6,7,8,9], 4));
// inputOutput.push(solution([1,2,3,4,5,6,7,8,9], 8));
// inputOutput.push(solution([1,2,3,4,5,6,7,8,9], 9));
// inputOutput.push(solution([1,2,3,4,5,6,7,8,9], 10));

/////////////////////////////////////////////////////////////////////////////////////////////
//////9. Array Reversal//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (arr) => {
    //[...arr].reverse()
    let output = [...arr];
    for(let i = 0; i < (output.length / 2); i++) {
        output[output.length - i - 1] = [output[i], output[i] = output[output.length - i - 1]][0];
    }
    return {
        title: '9. Array Reversal',
        input: arr,
        output
    };
}
inputOutput.push(solution([1,2,3,4,5,6,7,8,9]));

/////////////////////////////////////////////////////////////////////////////////////////////
//////10. Reverse Words in a phrase//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (phrase) => {
    let phraseArr = Array.from(phrase);
    let end = phraseArr.length - 1;
    let start;
    while(end > 0) {
        start = phraseArr.lastIndexOf(' ', end) + 1;
        phraseArr.splice(start, (end - start) + 1, ...phraseArr.slice(start, end + 1).reverse());
        end = start - 2;
    }
    return {
        title: '10. Reverse Words in a phrase',
        input: phrase,
        output: phraseArr.join('')
    };
}
inputOutput.push(solution('hello world from Anand'));

/////////////////////////////////////////////////////////////////////////////////////////////
//////11. Ransom Note//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (ransomeNote) => {
    let magazine = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    let magazineArr = [];
    let output = true;
    let ransomeNoteArr = ransomeNote.split(' '); //todo
    for(let i of ransomeNoteArr) {
        if(magazine.includes(i)) {
            magazineArr = magazine.split(' ');
            magazineArr.splice(i.indexOf(i), i.length);
            magazine = magazineArr.join(' ');
        } else {
            output = false;
            break;
        }
    }
    return {
        title: '11. Ransom Note',
        input: ransomeNote,
        output
    };
}
inputOutput.push(solution('sit ad est sint'));
inputOutput.push(solution('sit ad est love'));

/////////////////////////////////////////////////////////////////////////////////////////////
//////12. Palindrome//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (str) => {
    const output = (str == str.toString().split('').reverse().join(''));
    return {
        title: '12. Palindrome',
        input: str,
        output
    };
}
inputOutput.push(solution('racecar'));
inputOutput.push(solution(12321));

/////////////////////////////////////////////////////////////////////////////////////////////
//////13. Capitalize a sentence//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (str) => {
    let output;
    //let strArr = str.toLowerCase().split(' ');
    output = str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
    // output = strArr.reduce((prevValue, i) => {
    //     return `${prevValue} ${i.substring(0, 1).toUpperCase()+i.substring(1)}`;
    // }, '');
    return {
        title: '13. Capitalize a sentence',
        input: str,
        output
    };
}
inputOutput.push(solution('i love my racecar'));

/////////////////////////////////////////////////////////////////////////////////////////////
//////14. Longest Word//////
/////////////////////////////////////////////////////////////////////////////////////////////
solution = (sent) => {
    let output;
    const wordArr = sent.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a, b) => b.length - a.length);
    const longestWordsArr = sorted.filter((word) => word.length === sorted[0].length);
    output = longestWordsArr;
    return {
        title: '14. Longest Word',
        input: sent,
        output
    };
}
inputOutput.push(solution('Hello there, my name is Anand'));