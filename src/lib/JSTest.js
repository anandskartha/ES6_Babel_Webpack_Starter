import inputs from './inputs';

const inputOutput = [];
let input = {};
let output = '';

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

const solution = (S) => {
    const countLimit = 3;
    if (S.length < countLimit) {
        return S.length;
    } else {
        let count = 1;
        let resultCount = 1;
        for (let i = 1; i < S.length - 1; i++) {
            if(S[i] === S[i - 1] && S[i] === S[i + 1]) {
                resultCount = Math.max(resultCount, count + 1);
                count = 1;
            } else {
                ++count;
            }
        }
        return Math.max(resultCount, count + 1)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//No Changed below this needed
for(const i of inputs) {
    input = i;
    output = solution.apply(null, Object.keys(i).map(key => i[key]));
    inputOutput.push({ input, output });
}

export default inputOutput;

