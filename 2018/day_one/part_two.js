const frequencyData = require('./data.js');

const startingFrequency = 0;
const uniques = [];
const duplicates = [];

const handleFrequencyChange = (acc, change) => {
    const frequency = acc + change;

    !uniques.includes(frequency) ? uniques.push(frequency) : duplicates.push(frequency);

    return frequency;
};

const calculateFrequencies = (initial, frequencies) => {
    let currentFrequency = frequencies.reduce(handleFrequencyChange, initial);

    if (duplicates.length === 0) calculateFrequencies(currentFrequency, frequencies);
};

console.log('Calculating...');

calculateFrequencies(startingFrequency, frequencyData);

console.log('Done.');
console.log('Duplicate Frequency:', duplicates[0]);
