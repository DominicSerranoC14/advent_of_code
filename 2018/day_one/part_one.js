const frequencyData = require('./data.js');

const startingFrequency = 0;

const calculateFrequency = (intial, changes) => changes.reduce((acc, change) => acc + change, intial);

const currentFrequency = calculateFrequency(startingFrequency, frequencyData);

console.log(currentFrequency);