const data = require('./data.js');

const startingFrequency = 0;

const formattedData = data.split('\n').map(each => parseInt(each));

const calculateFrequency = (intial, changes) => changes.reduce((acc, change) => acc + change, intial);

const currentFrequency = calculateFrequency(startingFrequency, formattedData);

console.log(currentFrequency);