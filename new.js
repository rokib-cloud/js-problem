function mindGame(input) {
    let result = (input * 3) / 2 - 5;
    if (typeof input !== 'number') {
        return 'Error: Input must be a number.';
    }
    else {
        return result;
    }
}
// console.log(mindGame(12));

function evenOdd(str) {
    if (typeof str !== 'string') {
        return 'Error: Input must be a string.';
    }

    if (str.length % 2 === 0) {
        return 'even';
    }

    else {
        return 'odd';
    }
}
// console.log(evenOdd('phero'));


function isLGSeven(num) {
    let result = num - 7;
    if (typeof num !== 'number') {
        return 'Error: Input must be a number.';
    }
    if (result < 7) {
        return result;
    }
    else {
        return result * 2;
    }

}

// console.log(isLGSeven(13));


function findingBadData(age) {
    let negativeCount = 0;
    if (!Array.isArray(age)) {
        return ("Error: input is not an array.");

    }
    for (let i = 0; i < age.length; i++) {
        if (age[i] < 0) {
            negativeCount++;
        }
    }
    return negativeCount;

}

// const friendsAge = [12, -42, 23, -25, -22];
// const friendsAge = 'my name is khan';
// console.log(findingBadData(friendsAge));