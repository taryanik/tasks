module.exports = (input) => {
    if (typeof input !== 'string') {
        return "Incorrect input type";
    }

    input = input.replace(/[^()[\]{}]/g, "");
    let storage = [];

    for (let i = 0; i < input.length; i++) {
        const currentBracket = input[i];
        if (matches[currentBracket]) {
            storage.push(matches[currentBracket]);
        } else {
            if (currentBracket !== storage.pop()) {
                return false;
            }
        }
    }

    return storage.length === 0;
};

let matches = {
    "(": ")",
    "[": "]",
    "{": "}"
}
