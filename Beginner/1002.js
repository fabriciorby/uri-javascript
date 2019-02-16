let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

console.log("A=" + (3.14159 * Math.pow(parseFloat(lines.shift()), 2)).toFixed(4));