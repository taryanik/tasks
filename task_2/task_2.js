module.exports = (input) => {
    if (typeof input !== 'number') {
        return "Incorrect input type";
    }
    let reversed = 0;
    let rest = 0;
    let origin = input;

    while(input > 0) {
        rest = input % 10;
        reversed = reversed * 10 + rest;
        input = parseInt(input / 10);
    }

    return reversed == origin;
}
