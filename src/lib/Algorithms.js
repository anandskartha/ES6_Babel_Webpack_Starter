const inputOutput = [];

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
        return {
            title: 'Algo 1',
            input: S,
            output: Math.max(resultCount, count + 1)
        }
    }
}

inputOutput.push({ ...solution('baaabbabbbbba') });
inputOutput.push({ ...solution('babba') });
inputOutput.push({ ...solution('abaaaa') });




export default inputOutput;