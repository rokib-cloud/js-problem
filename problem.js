
function mindGame(input) {
    let result = ((input * 3) / 2) - 5;
    if (input != NaN) {
        return 'enter number';
    }
    else {
        return result;
    }
}

console.log(mindGame(2));

function evenOdd(str) {
    if (str.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

// console.log(evenOdd('programming hero'));

function isLGSeven(num) {
    let result = num - 7;
    if (result < 7) {
        return result;
    }
    else {
        return result * 2;
    }

}

// console.log(isLGSeven(8));

function findingBadData(age) {
    let negativeCount = 0;
    for (let i = 0; i < age.length; i++) {
        if (age[i] < 0) {
            negativeCount++;
        }
    }
    return negativeCount;
}

// const friendsAge = [12, -42, 23, -25, -22];
// console.log(findingBadData(friendsAge));

function gemToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    const diamond = (firstFriendGem * 21) + (secondFriendGem * 32) + (thirdFriendGem * 43);
    if (diamond >= 2000) {
        return diamond - 2000;
    }
    else {
        return diamond;
    }
}
// console.log(gemToDiamond(10, 20, 30));
// console.log(10 * 21 + 20 * 32 + 43 * 30);