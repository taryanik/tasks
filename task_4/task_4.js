module.exports = (arr1, arr2) => {
    let hashArr = {};
    let output = [];

    for (let i = 0; i < arr1.length; i++) {
        let value = arr1[i];
        if (value in hashArr) {
            hashArr[value] = hashArr[value] + 1;
        } else {
            hashArr[value] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let number = arr2[i];
        if (hashArr[number]) {
            output = output.concat(new Array(hashArr[number]).fill(number));
            delete hashArr[number];
        }
    }

    for (let key in hashArr) {
        output.push(+key);
    }

    return output;
};

