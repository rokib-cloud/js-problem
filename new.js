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
// console.log(mindGame('akash onk megla'));


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
// console.log(evenOdd(25));



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
// console.log(isLGSeven('ajke amr mon valo nei'));


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


function gemToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    if (typeof firstFriendGem !== 'number' || typeof secondFriendGem !== 'number' || typeof thirdFriendGem !== 'number') {
        return ('Error: All parameters must be numbers');
    }
    const diamond = (firstFriendGem * 21) + (secondFriendGem * 32) + (thirdFriendGem * 43);
    if (diamond >= 2000) {
        return diamond - 2000;
    }
    else {
        return diamond;
    }

}
// console.log(gemToDiamond(10, 20, 30));
// console.log(gemToDiamond([10, 20, 30]));
// console.log(gemToDiamond('hello how are you?'));
// console.log(10 * 21 + 20 * 32 + 43 * 30);