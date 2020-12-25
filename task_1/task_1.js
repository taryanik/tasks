module.exports = (input) => {
    if (!input
        || input.length < 1
        || input.length > 15
    ) {
        return "Incorrect string length";
    }

    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let currentSymbol = getIntFromRoman(input[i]);

        if ((i + 1) < input.length) {
            let nextSymbol = getIntFromRoman(input[i + 1]);

            if (currentSymbol >= nextSymbol) {
                result = result + currentSymbol;
            } else {
                result = result + nextSymbol - currentSymbol;
                i++;
            }
        } else {
            result = result + currentSymbol;
        }
    }
    return result;
};

let matches = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function getIntFromRoman(roman) {
    return matches[roman];
}
