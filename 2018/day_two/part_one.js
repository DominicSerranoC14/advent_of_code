const formattedData = require('./data');

/**
 * Turn each string into an object, with the key being a letter in the string, and the value the number of times the letter occurs in the string.
 */
const mapDuplicates = string => string.split('').reduce((acc, letter) => {
    acc[letter] = acc[letter] ? ++acc[letter] : 1;
    return acc;
}, {});

/**
 * If any of the letters occur in the string the number of times equal to {count}, return 1. Otherwise return 0.
 */
const checkMapForCount = (map, count) => Object.values(map).find(value => count === value) ? 1 : 0;

const duplicateMaps = formattedData.map(mapDuplicates);

const stringsWithTwoLetters = duplicateMaps.reduce((acc, map) => acc + checkMapForCount(map, 2), 0);

const stringsWithThreeLetters = duplicateMaps.reduce((acc, map) => acc + checkMapForCount(map, 3), 0);

console.log({
    stringsWithTwoLetters,
    stringsWithThreeLetters
});