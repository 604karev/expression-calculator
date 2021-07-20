function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(str) {
    const symbolsEntryCount = str => sybmol => (str.toString().split(sybmol).length - 1);
    const symbolsCount = symbolsEntryCount(str);
    const cutArray = str.split('').filter(element => element !== ' ');
    if (symbolsCount(')') === symbolsCount('(')) {
        for (let i = 0; i < cutArray.length; i++) {
            if (cutArray[i] === '0' && cutArray[i - 1] === '/') {
                throw ('TypeError: Division by zero.')
            }
        }
        return Function(`return ${str}`)();
    } else {
        throw ('ExpressionError: Brackets must be paired');
    }
}

module.exports = {
    expressionCalculator
}