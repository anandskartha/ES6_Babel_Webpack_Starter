export let output1, output2, output3;


const solution = (str) => {
    const map = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        '2': '5',
        't': '7',
        'b': '5'
    };
    let result = str.toLowerCase().split('').map((item) => {
        return map[item] || item;
    }).join('');
    return result;
}

output1 = solution("Let's have some fun.");
output2 = solution("C is for cookie, that's good enough for me");
output3 = solution("By the power of Grayskull!");
